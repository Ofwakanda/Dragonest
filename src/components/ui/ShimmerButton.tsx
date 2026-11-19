/**
 * @file src/components/ui/ShimmerButton.tsx
 * Magic UI ShimmerButton primitive with electric lime shimmer rotation and tactile physics.
 */

import React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#C6FF3D",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(18, 21, 27, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-line/80 px-6 py-3 text-sm font-semibold text-ink [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_-5px_rgba(198,255,61,0.3)] active:scale-[0.98]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
          <div className="absolute inset-0 h-[100cqh] animate-[spin_var(--speed)_linear_infinite] [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="h-full w-full [background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]" />
          </div>
        </div>

        {/* Backdrop overlay */}
        <div className="absolute [inset:var(--cut)] -z-20 rounded-[inherit] [background:var(--bg)]" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
