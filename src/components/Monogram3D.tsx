"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 3D Monogram "M":
 * Bold extruded capital letter "M", slightly beveled edges, matte white ceramic / graphite body
 * with a thin recessed electric lime inlay line (#C6FF3D) along one stroke.
 * Features subtle floating physics and gentle mouse parallax.
 */
export function Monogram3D({ size = 48, className = "" }: { size?: number; className?: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: x * 10, y: y * -10 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block select-none transition-transform duration-300 ease-out ${className}`}
      style={{
        perspective: "600px",
      }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateY(${offset.x}deg) rotateX(${offset.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          aria-label="Middlemen 3D Monogram"
          role="img"
        >
          {/* Soft contact shadow */}
          <ellipse cx="50" cy="94" rx="36" ry="6" fill="currentColor" className="text-line" opacity="0.4" />

          {/* Extrusion back depth faces (Graphite / Off-white depth) */}
          <path
            d="M20 78 L26 84 L38 84 L32 78 Z"
            fill="currentColor"
            className="text-line-strong"
            opacity="0.3"
          />
          <path
            d="M38 84 L50 68 L50 62 L38 78 Z"
            fill="currentColor"
            className="text-line-strong"
            opacity="0.4"
          />
          <path
            d="M62 78 L50 62 L50 68 L62 84 Z"
            fill="currentColor"
            className="text-line-strong"
            opacity="0.4"
          />
          <path
            d="M62 84 L74 84 L80 78 L68 78 Z"
            fill="currentColor"
            className="text-line-strong"
            opacity="0.3"
          />

          {/* Side extrusion facets */}
          <path
            d="M16 22 L22 16 L22 80 L16 86 Z"
            fill="currentColor"
            className="text-muted"
            opacity="0.25"
          />
          <path
            d="M78 22 L84 16 L84 80 L78 86 Z"
            fill="currentColor"
            className="text-line-strong"
            opacity="0.4"
          />

          {/* Front Matte Ceramic Face of "M" */}
          <path
            d="M22 82 V22 L50 56 L78 22 V82 H64 V44 L50 62 L36 44 V82 H22 Z"
            fill="currentColor"
            className="text-surface border"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "rgb(var(--surface-2))" }}
          />

          {/* Subtle Bevel Highlight Stroke */}
          <path
            d="M22 22 L50 56 L78 22"
            stroke="currentColor"
            className="text-line"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* The Single Electric Lime Accent Inlay Line (#C6FF3D) along front left stroke */}
          <line
            x1="29"
            y1="34"
            x2="29"
            y2="74"
            stroke="#C6FF3D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="29" cy="30" r="1.5" fill="#C6FF3D" />
        </svg>
      </div>
    </div>
  );
}
