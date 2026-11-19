/**
 * @file src/components/ui/GenerativeAvatar.tsx
 * Deterministic SVG generative avatar primitive (Boring Avatars style).
 * Eliminates blank profile states for contributors, account owners, and leadership.
 */

import React from "react";
import { generateAvatarModel } from "@/lib/avatar";
import { cn } from "@/lib/utils";

export interface GenerativeAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  seed: string;
  size?: number;
  square?: boolean;
}

export function GenerativeAvatar({
  seed,
  size = 40,
  square = false,
  className,
  ...props
}: GenerativeAvatarProps) {
  const model = React.useMemo(() => generateAvatarModel(seed), [seed]);

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line shrink-0 select-none",
        square ? "rounded-lg" : "rounded-full",
        className
      )}
      style={{ width: size, height: size, backgroundColor: model.bgColor }}
      aria-label={`Avatar for ${seed}`}
      role="img"
      {...props}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <mask id={`mask-${seed}`}>
          <rect width="80" height="80" rx={square ? "16" : "40"} fill="white" />
        </mask>
        <g mask={`url(#mask-${seed})`}>
          <rect width="80" height="80" fill={model.bgColor} />
          {model.elements.map((el, i) => {
            const transform = `rotate(${el.rotation} ${el.x + el.size / 2} ${el.y + el.size / 2})`;
            if (el.shape === "circle") {
              return (
                <circle
                  key={i}
                  cx={el.x + el.size / 2}
                  cy={el.y + el.size / 2}
                  r={el.size / 2}
                  fill={el.color}
                  opacity={el.opacity}
                  transform={transform}
                />
              );
            }
            return (
              <rect
                key={i}
                x={el.x}
                y={el.y}
                width={el.size}
                height={el.size}
                rx={el.size / 4}
                fill={el.color}
                opacity={el.opacity}
                transform={transform}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
