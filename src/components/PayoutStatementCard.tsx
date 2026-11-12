"use client";

import { CheckCircle2, ShieldCheck, Download, ExternalLink } from "lucide-react";

export function PayoutStatementCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-lg select-none transition-transform duration-300 hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)] ${className}`}
      style={{
        transform: "perspective(1200px) rotateY(-2.5deg) rotateX(1.5deg)",
      }}
    >
      {/* Matte-surface contact shadow */}
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.16)] dark:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.65)] font-mono">
        {/* Statement Header */}
        <div className="flex items-start justify-between border-b border-line pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                Official Settlement Statement
              </span>
            </div>
            <h4 className="mt-1 text-lg font-bold text-ink tracking-tight font-sans">
              STMT-2026-W38 · Outlier Fleet
            </h4>
            <p className="text-xs text-muted">Period: Sep 15 — Sep 22, 2026</p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1 rounded border border-line bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-ink">
              <CheckCircle2 className="h-3 w-3 text-emerald-500" /> Settled Fri
            </span>
            <span className="inline-flex items-center gap-1 rounded border border-line bg-surface-2 px-2 py-0.5 text-[10px] text-muted">
              <ShieldCheck className="h-3 w-3 text-muted" /> QA 98.4%
            </span>
          </div>
        </div>

        {/* Amount Hero */}
        <div className="mt-5 rounded border border-line bg-bg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-muted uppercase">Gross Account Earnings</span>
            <div className="mt-0.5 text-3xl font-semibold tabular-nums text-ink">
              $3,420.00
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase text-muted block">Direct Deposit</span>
            <span className="text-xs text-ink font-semibold">ACH · Verified</span>
          </div>
        </div>

        {/* Itemized Line Split */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between items-center py-1 border-b border-line/60">
            <span className="text-muted">Account Owner 55% Net Payout</span>
            <span className="font-semibold text-ink text-sm tabular-nums">$1,881.00</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-line/60">
            <span className="text-muted">Specialist Tasker Share (30% floor)</span>
            <span className="text-ink tabular-nums">$1,026.00</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-muted">Middlemen Operations &amp; QA (15%)</span>
            <span className="text-ink tabular-nums">$513.00</span>
          </div>
        </div>

        {/* Security / Verification Badge */}
        <div className="mt-5 rounded border border-line bg-surface-2 p-3 flex items-center justify-between text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span>Trace: ACH-TR-849102-OK</span>
          </div>
          <span>Hash: 9f8a...c41e</span>
        </div>
      </div>
    </div>
  );
}
