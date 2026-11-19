/**
 * @file src/components/ui/ReadingProgress.tsx
 * Momentum scroll reading progress indicator (Lenis style).
 */

"use client";

import React, { useEffect, useState } from "react";
import { scrollEngine } from "@/lib/scroll";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollEngine.subscribe((snapshot) => {
      setProgress(snapshot.progress);
    });
  }, []);

  if (progress <= 0.01) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-accent transition-all duration-75 ease-out shadow-[0_0_10px_#C6FF3D]"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}
