/**
 * @file src/components/ui/Button.tsx
 * Atomic Button primitive with tactile feedback and variant tokens.
 */

import React from "react";
import { cn } from "@/lib/utils";
import { ButtonVariant, ButtonSize } from "@/types/ui";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-surface-2 text-ink border border-line hover:border-muted/50 hover:bg-surface-2/80",
  accent: "bg-accent text-bg font-semibold hover:bg-accent/90 shadow-[0_0_20px_-5px_rgba(198,255,61,0.4)] active:scale-[0.98]",
  outline: "border border-line bg-transparent text-ink hover:bg-surface-2 hover:border-muted/40",
  ghost: "bg-transparent text-muted hover:text-ink hover:bg-surface-2/60",
  shimmer: "relative overflow-hidden bg-accent text-bg font-semibold hover:bg-accent/95 shadow-lg active:scale-[0.98]",
  destructive: "bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base font-semibold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-card font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
