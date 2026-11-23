"""
scripts/process_downloads.py
Processes real platform screenshots:
1. Crops OS taskbars / extraneous browser chrome.
2. Blurs / redacts sensitive PII (names, bank numbers, proxy IPs, user avatars).
3. Enhances contrast, sharpness, and high-DPI clarity.
4. Saves high-quality optimized WebP assets into public/images/projects/
"""

import os
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageFont

base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
raw_dir = os.path.join(base_dir, "raw_screenshots")
downloads_dir = r"C:\Users\USER\Downloads"
output_dir = os.path.join(base_dir, "public", "images", "projects")
os.makedirs(output_dir, exist_ok=True)

def find_file(filename: str) -> str:
    in_raw = os.path.join(raw_dir, filename)
    if os.path.exists(in_raw):
        return in_raw
    in_dl = os.path.join(downloads_dir, filename)
    if os.path.exists(in_dl):
        return in_dl
    return ""

def enhance(img: Image.Image) -> Image.Image:
    if img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    if w < 1400:
        new_w = 1400
        new_h = int(h * (1400 / w))
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Subtle contrast & crispness
    img = ImageEnhance.Contrast(img).enhance(1.06)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.4, percent=110, threshold=2))
    return img

def blur_box(img: Image.Image, box: tuple, radius: int = 18) -> Image.Image:
    cropped = img.crop(box)
    blurred = cropped.filter(ImageFilter.GaussianBlur(radius=radius))
    img.paste(blurred, box[:2])
    return img

def redact_pill(img: Image.Image, box: tuple, label: str = "CONFIDENTIAL", bg_color="#10141D", border_color="#2A364E", text_color="#94A3B8"):
    blur_box(img, box, radius=20)
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle(box, radius=4, fill=bg_color, outline=border_color, width=1)
    w = box[2] - box[0]
    h = box[3] - box[1]
    if w > 30 and h > 10:
        try:
            font = ImageFont.load_default()
            draw.text((box[0] + 8, box[1] + (h // 2) - 5), label, fill=text_color, font=font)
        except Exception:
            pass

# 1. Process Meridial.jpeg (Invisible Tech / Meridial Marketplace)
# Original size: 1366x768
meridial_path = find_file("Meridial.jpeg")
if meridial_path:
    img = Image.open(meridial_path)
    w, h = img.size
    # Crop Windows taskbar (keep 0..725)
    img = img.crop((0, 0, w, 725))
    
    # Redact Tab 1 title "66 Angelica"
    redact_pill(img, (45, 8, 175, 34), "[PORTAL SESSION]")
    
    # Redact Proxy IP in URL bar (keep clean path marketplace.inv.tech/invi/dashboard/candidate)
    redact_pill(img, (105, 48, 330, 72), "[RESIDENTIAL PROXY ROUTE]")
    
    # Redact Greeting "Hi, Angelica!"
    redact_pill(img, (75, 118, 275, 156), "Hi, [PROTECTED CLIENT]")
    
    # Redact bottom left avatar circle
    blur_box(img, (8, 680, 54, 724), radius=18)
    
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-meridial.webp"), "WEBP", quality=92)
    print("[OK] Processed Meridial.jpeg -> platform-meridial.webp")

# 2. Process Mecor AI.jpeg ($99,240.56 earnings card)
mecor1_path = find_file("Mecor AI.jpeg")
if mecor1_path:
    img = Image.open(mecor1_path)
    # Blur top right avatar
    blur_box(img, (935, 15, 1005, 130), radius=20)
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-mercor-99k.webp"), "WEBP", quality=92)
    print("[OK] Processed Mecor AI.jpeg -> platform-mercor-99k.webp")

# 3. Process Mecor AI (2).jpeg ($8,041.24 earnings dashboard)
mecor2_path = find_file("Mecor AI (2).jpeg")
if mecor2_path:
    img = Image.open(mecor2_path)
    w, h = img.size
    # Crop personal browser tabs at top (y from 40 down) and Mac dock at bottom (y up to 915)
    img = img.crop((0, 40, w, 915))
    # Redact profile icon at bottom left
    blur_box(img, (15, 580, 55, 640), radius=16)
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-mercor-dashboard.webp"), "WEBP", quality=92)
    print("[OK] Processed Mecor AI (2).jpeg -> platform-mercor-dashboard.webp")

# 4. Process Handshake AI (2).jpeg ($2,856.36 total paid)
handshake2_path = find_file("Handshake AI (2).jpeg")
if handshake2_path:
    img = Image.open(handshake2_path)
    # Redact profile photo in top right
    blur_box(img, (1220, 50, 1275, 105), radius=20)
    # Redact Chrome profile badge
    blur_box(img, (1105, 12, 1135, 45), radius=16)
    # Redact payout method bank details seamlessly into card
    redact_pill(img, (1070, 282, 1245, 312), label="[VERIFIED BANK ROUTING]", bg_color="#F3F4F6", border_color="#D1D5DB", text_color="#4B5563")
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-handshake-payments.webp"), "WEBP", quality=92)
    print("[OK] Processed Handshake AI (2).jpeg -> platform-handshake-payments.webp")

# 5. Process Handshake AI.jpeg ($3,700.00 awaiting payout, $700 & $600/task)
handshake1_path = find_file("Handshake AI.jpeg")
if handshake1_path:
    img = Image.open(handshake1_path)
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-handshake-projects.webp"), "WEBP", quality=92)
    print("[OK] Processed Handshake AI.jpeg -> platform-handshake-projects.webp")

# 6. Process Workada.jpeg ($4,794.14 earned, $1,633.55 pending, $17/hr)
workada_path = find_file("Workada.jpeg")
if workada_path:
    img = Image.open(workada_path)
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-workada.webp"), "WEBP", quality=92)
    print("[OK] Processed Workada.jpeg -> platform-workada.webp")

# 7. Process Payments.jpeg ($10,156.67 ON THE WAY)
payments_path = find_file("Payments.jpeg")
if payments_path:
    img = Image.open(payments_path)
    img = enhance(img)
    img.save(os.path.join(output_dir, "platform-payment-ontheway.webp"), "WEBP", quality=92)
    print("[OK] Processed Payments.jpeg -> platform-payment-ontheway.webp")

print("All platform screenshots successfully enhanced and redacted!")
