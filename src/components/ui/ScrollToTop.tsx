/**
 * @file src/components/ui/ScrollToTop.tsx
 * Floating tactile scroll-to-top pill with spring physics.
 */

"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollEngine } from "@/lib/scroll";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollEngine.subscribe((snapshot) => {
      setVisible(snapshot.isScrolledPastHero);
    });
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => scrollEngine.scrollToTop(true)}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-2/90 text-muted shadow-lg backdrop-blur-md transition-all duration-200 hover:border-accent/40 hover:text-ink active:scale-95 animate-in fade-in zoom-in-90"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
