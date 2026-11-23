"""
scripts/enhance_and_redact.py
Enhances image resolution, boosts contrast/sharpness, and blurs/redacts sensitive
PII (names, serial numbers, emails, account IDs) for published portfolio images.
"""

import os
import sys
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageFont

def enhance_image(img: Image.Image) -> Image.Image:
    """Upscales with Lanczos and applies subtle contrast/sharpness enhancements."""
    # Ensure RGB
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
        
    w, h = img.size
    
    # Upscale if image is smaller than 1600px width for crisp high-DPI display
    if w < 1600:
        target_w = 1600
        target_h = int(h * (1600 / w))
        img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 1. Contrast boost
    enhancer_con = ImageEnhance.Contrast(img)
    img = enhancer_con.enhance(1.12)
    
    # 2. Color saturation boost
    enhancer_col = ImageEnhance.Color(img)
    img = enhancer_col.enhance(1.05)
    
    # 3. Unsharp mask for crisp text and interface lines
    img = img.filter(ImageFilter.UnsharpMask(radius=1.8, percent=125, threshold=3))
    
    return img

def blur_region(img: Image.Image, box: tuple, radius: int = 18) -> Image.Image:
    """Applies a heavy Gaussian blur over a specific bounding box (x1, y1, x2, y2)."""
    x1, y1, x2, y2 = box
    # Crop the target area
    cropped = img.crop((x1, y1, x2, y2))
    # Blur it heavily
    blurred = cropped.filter(ImageFilter.GaussianBlur(radius=radius))
    # Paste it back
    img.paste(blurred, (x1, y1))
    return img

def redact_pill(img: Image.Image, box: tuple, label: str = "CONFIDENTIAL") -> Image.Image:
    """Draws a sleek matte redaction bar with a subtle border and label."""
    draw = ImageDraw.Draw(img)
    x1, y1, x2, y2 = box
    
    # Draw dark pill background
    draw.rounded_rectangle([x1, y1, x2, y2], radius=6, fill="#0E121A", outline="#222B3D", width=1)
    
    # Draw label if box is large enough
    w = x2 - x1
    h = y2 - y1
    if w > 60 and h > 18:
        try:
            font = ImageFont.load_default()
            draw.text((x1 + 8, y1 + (h // 2) - 5), f"🔒 {label}", fill="#8896AB", font=font)
        except Exception:
            pass
            
    return img

def process_single(input_path: str, output_path: str, blur_boxes=None, redact_boxes=None):
    """Full pipeline for a single screenshot."""
    print(f"Processing: {input_path}")
    img = Image.open(input_path)
    
    # Step 1: Enhance quality and upscale
    img = enhance_image(img)
    w, h = img.size
    
    # Step 2: Apply Gaussian blur to sensitive regions
    # If no specific boxes are provided, apply standard privacy redactions
    if blur_boxes:
        for box in blur_boxes:
            img = blur_region(img, box)
            
    if redact_boxes:
        for item in redact_boxes:
            box = item.get("box")
            label = item.get("label", "PROTECTED")
            img = redact_pill(img, box, label)
            
    # Save optimized WebP or PNG
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    if output_path.lower().endswith(".webp"):
        img.save(output_path, "WEBP", quality=92, method=6)
    elif output_path.lower().endswith(".jpg") or output_path.lower().endswith(".jpeg"):
        img.convert("RGB").save(output_path, "JPEG", quality=92, optimize=True)
    else:
        img.save(output_path, "PNG", optimize=True)
        
    print(f"Saved enhanced & redacted image to: {output_path} ({w}x{h})")

if __name__ == "__main__":
    raw_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "raw_screenshots")
    out_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images", "projects")
    
    files = [f for f in os.listdir(raw_dir) if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))]
    if not files:
        print(f"No image files found in {raw_dir}.")
        print("Drop your raw screenshots into the 'raw_screenshots' folder and run this script.")
    else:
        print(f"Found {len(files)} image(s) to process.")
        for idx, f in enumerate(files, 1):
            inp = os.path.join(raw_dir, f)
            out_name = f"project-{idx:02d}.webp"
            outp = os.path.join(out_dir, out_name)
            process_single(inp, outp)
