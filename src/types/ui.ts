/**
 * @file src/types/ui.ts
 * Atomic design tokens and UI primitive types.
 */

export type BadgeVariant = 
  | "default"
  | "accent"
  | "outline"
  | "success"
  | "warning"
  | "muted"
  | "discount"
  | "status";

export type ButtonVariant = 
  | "default"
  | "accent"
  | "outline"
  | "ghost"
  | "shimmer"
  | "destructive";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ToastType = "success" | "info" | "warning" | "error" | "loading";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
  durationMs?: number;
}
