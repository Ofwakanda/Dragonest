/**
 * @file src/lib/avatar.ts
 * Deterministic generative SVG avatar generator (Boring Avatars style).
 * Zero runtime dependencies, high performance, deterministic colors and shapes.
 */

// Primary brand palette: Deep charcoal, slate, soft cream, and electric lime accent
const PALETTE = [
  "#12151B", // Dark obsidian
  "#1E2430", // Slate surface
  "#3A4454", // Mid slate
  "#8C96A8", // Light muted slate
  "#C6FF3D", // Electric lime brand accent
  "#F4F6FA", // Crisp highlight
];

function djb2Hash(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

export interface AvatarProperties {
  bgColor: string;
  elements: {
    shape: "circle" | "rect" | "line";
    x: number;
    y: number;
    size: number;
    color: string;
    rotation: number;
    opacity: number;
  }[];
}

/**
 * Computes deterministic SVG properties based on any input seed (name, ID, or wallet).
 */
export function generateAvatarModel(seed: string): AvatarProperties {
  const hash = djb2Hash(seed || "middlemen");
  const bgIndex = hash % PALETTE.length;
  const bgColor = PALETTE[bgIndex];

  const elements: AvatarProperties["elements"] = [];

  // Generate 4 deterministic geometric layers (beam / bauhaus style)
  for (let i = 0; i < 4; i++) {
    const subHash = djb2Hash(seed + "-" + i);
    const colorIndex = (subHash + i) % PALETTE.length;
    const color = PALETTE[colorIndex];
    const shapeType = i % 2 === 0 ? "circle" : "rect";
    const x = (subHash % 60) + 10;
    const y = ((subHash >> 2) % 60) + 10;
    const size = ((subHash >> 4) % 40) + 16;
    const rotation = (subHash % 360);
    const opacity = ((subHash % 5) + 5) / 10; // 0.5 to 0.9

    elements.push({
      shape: shapeType,
      x,
      y,
      size,
      color,
      rotation,
      opacity,
    });
  }

  return { bgColor, elements };
}
