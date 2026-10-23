"use client";

import { useEffect } from "react";

/**
 * ScrollHeaderHighlighter:
 * Detects headers (h1, h2, h3) as they scroll into view, smoothly applying
 * a luminous accent highlight, scale accentuation, and subtle color shift.
 * Also supports direct mouse-hover spotlighting.
 */
export function ScrollHeaderHighlighter() {
  useEffect(() => {
    // Only run if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const headings = document.querySelectorAll<HTMLElement>("h1, h2, h3");

    // Add baseline transition classes to all headings
    headings.forEach((heading) => {
      heading.classList.add("header-scroll-target");
    });

    // IntersectionObserver to detect when a header scrolls into the active focal area
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("header-in-focus");
          } else {
            el.classList.remove("header-in-focus");
          }
        });
      },
      {
        rootMargin: "-15% 0px -40% 0px", // triggers when header enters top 15% - 60% of viewport
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return null;
}
