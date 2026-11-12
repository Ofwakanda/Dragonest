"use client";

import { CheckCircle2, Receipt, ShieldCheck } from "lucide-react";

export function PaymentReceiptLedger() {
  const receipts = [
    {
      id: "REC-2026-09A",
      date: "Sep 25, 2026",
      gross: "$3,420.00",
      taskerSplit: "$1,026.00 (30%)",
      mmFee: "$513.00 (15%)",
      ownerNet: "$1,881.00 (55%)",
      status: "Settled via ACH",
      domain: "Python Reasoning",
      batch: "Queue #8491",
    },
    {
      id: "REC-2026-09B",
      date: "Sep 18, 2026",
      gross: "$2,850.00",
      taskerSplit: "$855.00 (30%)",
      mmFee: "$427.50 (15%)",
      ownerNet: "$1,567.50 (55%)",
      status: "Settled via Wire",
      domain: "STEM Derivation",
      batch: "Queue #7920",
    },
    {
      id: "REC-2026-09C",
      date: "Sep 11, 2026",
      gross: "$4,100.00",
      taskerSplit: "$1,230.00 (30%)",
      mmFee: "$615.00 (15%)",
      ownerNet: "$2,255.00 (55%)",
      status: "Settled via Wire",
      domain: "Code Refactoring & RLHF",
      batch: "Queue #8104",
    },
  ];

  return (
    <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase font-medium text-muted tracking-wider">
              Settlement Ledger
            </span>
          </div>
          <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-ink tracking-tight flex items-center gap-2.5">
            <Receipt className="h-5 w-5 text-muted shrink-0" />
            Verified Settlement Statements
          </h3>
          <p className="mt-1 text-sm text-muted">
            Line-by-line accounting statements showing the 55% Owner / 30% Tasker / 15% Middlemen split.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded border border-line bg-surface-2 px-3 py-1 text-xs font-mono font-medium text-muted">
            <ShieldCheck className="h-4 w-4 text-muted" />
            Itemized Settlements
          </span>
        </div>
      </div>

      {/* Receipts Cards Stack */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {receipts.map((r) => (
          <div
            key={r.id}
            className="rounded border border-line bg-bg p-5 space-y-4 hover:border-line-strong transition-colors"
          >
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-xs">
              <span className="font-semibold text-ink">{r.id}</span>
              <span className="text-muted">{r.date}</span>
            </div>

            {/* Middle Breakdown */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Gross Earnings</span>
                <span className="font-semibold text-ink text-base">{r.gross}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>Tasker (30% floor)</span>
                <span className="text-ink">{r.taskerSplit}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>Middlemen Fee (15%)</span>
                <span className="text-ink">{r.mmFee}</span>
              </div>
              <div className="h-px bg-line my-1" />
              <div className="flex justify-between items-center bg-surface-2 p-2.5 rounded border border-line">
                <span className="font-medium text-ink">Owner Net Payout</span>
                <span className="font-semibold text-ink text-sm">{r.ownerNet}</span>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-2 border-t border-line flex items-center justify-between text-[11px] font-mono">
              <div className="flex flex-col">
                <span className="text-muted">{r.domain}</span>
                <span className="text-ink font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-muted" /> {r.status}
                </span>
              </div>
              <span className="rounded bg-surface-2 border border-line px-2 py-0.5 text-muted">
                {r.batch}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-6 rounded border border-line bg-bg p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="text-ink font-medium">Reconciliation:</span>
          <span>Statements issued every Friday with platform payout confirmation.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ink font-medium">Payout Methods:</span>
          <span className="rounded bg-surface-2 px-2 py-1 border border-line text-ink">ACH / Direct Deposit</span>
          <span className="rounded bg-surface-2 px-2 py-1 border border-line text-ink">Wire</span>
          <span className="rounded bg-surface-2 px-2 py-1 border border-line text-ink">SEPA</span>
        </div>
      </div>
    </div>
  );
}
