"use client";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type QA = { q: string; a: React.ReactNode };

/**
 * WAI-ARIA accordion pattern: each header is a <button> inside a heading,
 * with aria-expanded and aria-controls. Panels are regions labelled by
 * their button. Multiple panels may be open.
 */
export function Accordion({ items, headingLevel = 3 }: { items: QA[]; headingLevel?: 2 | 3 | 4 }) {
  const base = useId();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const H = (`h${headingLevel}`) as "h2" | "h3" | "h4";
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-bg">
      {items.map((item, i) => {
        const bid = `${base}-b${i}`, pid = `${base}-p${i}`, isOpen = !!open[i];
        return (
          <div key={item.q}>
            <H className="text-lg font-semibold">
              <button
                id={bid}
                type="button"
                aria-expanded={isOpen}
                aria-controls={pid}
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface"
              >
                <span>{item.q}</span>
                <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </H>
            <div id={pid} role="region" aria-labelledby={bid} hidden={!isOpen} className="px-5 pb-5 text-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
