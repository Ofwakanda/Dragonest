"use client";

import { useEffect, useRef, useState } from "react";
import { dashboard as d } from "@/data/sample";
import { money } from "@/config/site";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";

function useCountUp(target: number, duration: number = 1200, enabled: boolean = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, enabled]);

  return val;
}

/** Crisp, coded UI dashboard with scroll-triggered count-up numbers and neutral status chips. */
export function DashboardPreview() {
  const [showTable, setShowTable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animatedEarnings = useCountUp(d.earnings, 1400, isVisible);
  const animatedHours = useCountUp(d.hours, 1200, isVisible);
  const animatedTaskerPay = useCountUp(d.taskerPay, 1400, isVisible);

  const max = Math.max(...d.weeklyHours.map((w) => w.hours));
  const H = 140;

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all"
    >
      {/* Top Bar with Live Neutral Status Chips */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs font-semibold text-ink">
            MANAGED DISPATCH · {d.month}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
            <CheckCircle2 className="h-3 w-3 text-muted" /> Settled Fri
          </span>
          <span className="inline-flex items-center gap-1 rounded border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
            <ShieldCheck className="h-3 w-3 text-muted" /> QA 98.4%
          </span>
        </div>
      </div>

      {/* KPI Tiles with Animated Count-Up */}
      <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded border border-line bg-bg p-3.5">
          <dt className="text-xs font-mono uppercase tracking-wider text-muted">Platform Gross</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums text-ink">
            {money(animatedEarnings)}
          </dd>
          <dd className="mt-1 flex items-center gap-0.5 text-[11px] text-muted">
            <ArrowUpRight className="h-3 w-3 text-emerald-500" />
            <span>+14.2% vs prev period</span>
          </dd>
        </div>

        <div className="rounded border border-line bg-bg p-3.5">
          <dt className="text-xs font-mono uppercase tracking-wider text-muted">Tasker Hours</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums text-ink">
            {animatedHours} h
          </dd>
          <dd className="mt-1 text-[11px] text-muted">3 dedicated specialists</dd>
        </div>

        <div className="rounded border border-line bg-bg p-3.5">
          <dt className="text-xs font-mono uppercase tracking-wider text-muted">Audit Score</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums text-ink">
            {d.qaScore}%
          </dd>
          <dd className="mt-1 text-[11px] text-muted">100% blind double-check</dd>
        </div>

        <div className="rounded border border-line bg-bg p-3.5">
          <dt className="text-xs font-mono uppercase tracking-wider text-muted">Paid to Taskers</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums text-ink">
            {money(animatedTaskerPay)}
          </dd>
          <dd className="mt-1 text-[11px] text-muted">Disbursed weekly</dd>
        </div>
      </dl>

      {/* Bottom Grid: Tasker Hours Chart & Invoices */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <figure className="rounded border border-line bg-bg p-4">
          <figcaption className="flex items-center justify-between gap-2 border-b border-line pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Weekly Task Throughput
            </span>
            <button
              type="button"
              className="text-xs text-muted hover:text-ink transition-colors font-mono"
              aria-pressed={showTable}
              onClick={() => setShowTable((s) => !s)}
            >
              {showTable ? "Chart" : "Table"}
            </button>
          </figcaption>

          {showTable ? (
            <table className="mt-3 w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th scope="col" className="py-1.5 font-normal">Week</th>
                  <th scope="col" className="py-1.5 text-right font-normal">Hours</th>
                </tr>
              </thead>
              <tbody>
                {d.weeklyHours.map((w) => (
                  <tr key={w.week} className="border-b border-line/60">
                    <td className="py-1.5">{w.week}</td>
                    <td className="py-1.5 text-right tabular-nums text-ink font-medium">{w.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <svg
              viewBox={`0 0 320 ${H + 24}`}
              className="mt-3 w-full"
              role="img"
              aria-label={`Bar chart. ${d.weeklyHours.map((w) => `${w.week}: ${w.hours} hours`).join(". ")}.`}
            >
              {[0, 0.5, 1].map((t) => (
                <line
                  key={t}
                  x1="0"
                  x2="320"
                  y1={H - t * H + 4}
                  y2={H - t * H + 4}
                  stroke="rgb(var(--line))"
                  strokeWidth="1"
                  strokeDasharray={t === 0.5 ? "2 2" : undefined}
                />
              ))}
              {d.weeklyHours.map((w, i) => {
                const h = (w.hours / max) * (H - 24);
                const x = 20 + i * 76;
                return (
                  <g key={w.week}>
                    <title>{`${w.week}: ${w.hours} hours`}</title>
                    <path
                      d={`M${x},${H + 4} v${-h + 4} q0,-3 3,-3 h32 q3,0 3,3 v${h - 4} z`}
                      fill="rgb(var(--muted))"
                      fillOpacity="0.4"
                    />
                    <text
                      x={x + 19}
                      y={H + 4 - h - 5}
                      textAnchor="middle"
                      fontSize="11"
                      fontFamily="monospace"
                      fill="rgb(var(--ink))"
                    >
                      {w.hours}
                    </text>
                    <text
                      x={x + 19}
                      y={H + 18}
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill="rgb(var(--muted))"
                    >
                      {w.week.replace("Week ", "W")}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}
        </figure>

        <div className="rounded border border-line bg-bg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-line pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted">
                Settled Invoices
              </span>
              <span className="font-mono text-[10px] text-muted">NET-7 DIRECT</span>
            </div>
            <table className="mt-2 w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th scope="col" className="py-1.5 font-normal">Reference</th>
                  <th scope="col" className="py-1.5 font-normal">Period</th>
                  <th scope="col" className="py-1.5 text-right font-normal">Amount</th>
                  <th scope="col" className="py-1.5 text-right font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {d.invoices.map((inv) => (
                  <tr key={inv.id}>
                    <td className="py-1.5 font-medium text-ink">{inv.id}</td>
                    <td className="py-1.5 text-muted">{inv.period}</td>
                    <td className="py-1.5 text-right tabular-nums text-ink">{money(inv.amount)}</td>
                    <td className="py-1.5 text-right">
                      <span className="inline-block rounded bg-surface-2 px-1.5 py-0.5 text-[10px] text-muted">
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-muted font-mono border-t border-line/60 pt-2">
            Disbursements settle directly to owner account. Tasker fees invoiced post-clearance.
          </p>
        </div>
      </div>
    </div>
  );
}
