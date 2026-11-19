/**
 * @file src/components/ui/Badge.tsx
 * Atomic Badge primitive adhering to shadcn/ui and Linear design tokens.
 */

import React from "react";
import { cn } from "@/lib/utils";
import { BadgeVariant } from "@/types/ui";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  interactive?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-2 text-ink border-line",
  accent: "bg-accent/15 text-accent border-accent/30 font-semibold",
  outline: "bg-transparent text-muted border-line hover:text-ink",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  muted: "bg-surface text-muted border-line/60",
  discount: "bg-accent text-bg font-bold border-accent tracking-wide",
  status: "bg-surface-2 text-ink border-line text-[11px] uppercase tracking-wider font-mono",
};

export function Badge({
  className,
  variant = "default",
  interactive = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2.5 py-0.5 text-xs font-mono transition-colors",
        variantStyles[variant],
        interactive && "cursor-pointer hover:border-line hover:bg-surface-2 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
