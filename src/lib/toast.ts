/**
 * @file src/lib/toast.ts
 * Lightweight, zero-dependency Sonner-style event bus.
 */

import { ToastMessage, ToastType } from "@/types/ui";

type ToastListener = (toasts: ToastMessage[]) => void;

class ToastManager {
  private toasts: ToastMessage[] = [];
  private listeners: Set<ToastListener> = new Set();

  public subscribe(listener: ToastListener): () => void {
    this.listeners.add(listener);
    listener([...this.toasts]);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    for (const listener of this.listeners) {
      listener([...this.toasts]);
    }
  }

  public show(
    title: string, 
    options?: { description?: string; type?: ToastType; durationMs?: number }
  ): string {
    const id = "toast-" + Math.random().toString(36).substring(2, 9);
    const duration = options?.durationMs ?? 4000;
    const newToast: ToastMessage = {
      id,
      title,
      description: options?.description,
      type: options?.type ?? "info",
      durationMs: duration,
    };

    // Keep up to 4 stacked toasts max
    this.toasts = [newToast, ...this.toasts.slice(0, 3)];
    this.notify();

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }

    return id;
  }

  public dismiss(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.notify();
  }

  public success(title: string, description?: string) {
    return this.show(title, { description, type: "success" });
  }

  public error(title: string, description?: string) {
    return this.show(title, { description, type: "error" });
  }

  public info(title: string, description?: string) {
    return this.show(title, { description, type: "info" });
  }

  public warning(title: string, description?: string) {
    return this.show(title, { description, type: "warning" });
  }
}

export const toast = new ToastManager();
