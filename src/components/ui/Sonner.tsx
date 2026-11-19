/**
 * @file src/components/ui/Sonner.tsx
 * Stacked toast viewport primitive (Sonner style).
 * Manages spring entrance, auto-dismiss, and non-blocking interaction.
 */

"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { toast } from "@/lib/toast";
import { ToastMessage, ToastType } from "@/types/ui";
import { cn } from "@/lib/utils";

const toastIcons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />,
  error: <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />,
  warning: <AlertTriangle className="h-4 w-4 text-amber-300 shrink-0" />,
  info: <Info className="h-4 w-4 text-ink shrink-0" />,
  loading: (
    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-accent border-t-transparent shrink-0" />
  ),
};

export function Toaster() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    return toast.subscribe((updatedToasts) => {
      setToasts(updatedToasts);
    });
  }, []);

  if (toasts.length === 0) return null;

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none sm:bottom-6 sm:right-6"
    >
      {toasts.map((t, idx) => (
        <div
          key={t.id}
          className={cn(
            "pointer-events-auto flex items-start gap-3 rounded-card border border-line bg-surface-2/95 p-3.5 shadow-xl backdrop-blur-md transition-all duration-200 animate-in slide-in-from-bottom-5",
            idx > 0 && "scale-[0.98] opacity-90"
          )}
        >
          <div className="mt-0.5">{toastIcons[t.type]}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-ink leading-tight">{t.title}</p>
            {t.description && (
              <p className="mt-1 text-xs text-muted leading-relaxed">{t.description}</p>
            )}
          </div>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="rounded p-0.5 text-muted hover:text-ink transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </aside>
  );
}
