import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

export const alt = `${site.name} — Your AI training account, professionally staffed`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const logo = `data:image/png;base64,${fs.readFileSync(path.join(process.cwd(), "public/logo.png")).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#000000", color: "#FFFFFF", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 32, fontWeight: 700 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div style={{ width: 56, height: 56, borderRadius: 12, background: "#FFFFFF", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 24, letterSpacing: -1 }}>MM</div>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>Your AI training account, professionally staffed.</div>
          <div style={{ fontSize: 30, color: "#A1A1AA" }}>You keep ownership. We take a transparent percentage.</div>
        </div>
        <div style={{ fontSize: 24, color: "#71717A" }}>{site.trustLine}</div>
      </div>
    ),
    size,
  );
}
