"use client";

import { CheckCircle2, Download, ExternalLink, Receipt, ShieldCheck } from "lucide-react";

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
      domain: "Python Invariant Reasoning",
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
      domain: "STEM Math Derivation",
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
    <div className="relative overflow-hidden rounded-2xl border-2 border-line-strong bg-gradient-to-br from-bg via-surface to-bg p-6 sm:p-8 shadow-card">
      {/* Background Photography Integration */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-40 dark:opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/images/account-owners.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg/95 via-surface/90 to-bg/95 pointer-events-none" />
      <div className="absolute top-0 right-0 h-48 w-48 bg-accent/15 blur-3xl pointer-events-none rounded-full" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-xs uppercase font-bold text-muted tracking-wider">
              Transparent Payout Infrastructure
            </span>
          </div>
          <h3 className="mt-1 text-2xl font-black text-ink tracking-tight flex items-center gap-2.5">
            <Receipt className="h-6 w-6 text-accent shrink-0" />
            Verified Payout Receipts &amp; Ledger
          </h3>
          <p className="mt-1 text-sm text-muted">
            Inspect real settlement statements showing the exact 55% Owner / 30% Tasker / 15% MM accounting split.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono font-bold text-emerald-500">
            <ShieldCheck className="h-4 w-4" />
            Zero Hidden Deductions
          </span>
        </div>
      </div>

      {/* Receipts Cards Stack */}
      <div className="relative z-10 mt-6 grid gap-4 lg:grid-cols-3">
        {receipts.map((r) => (
          <div
            key={r.id}
            className="rounded-xl border-2 border-line bg-bg/90 backdrop-blur-sm p-5 space-y-4 hover:border-line-strong hover:shadow-[0_0_20px_rgba(200,255,46,0.25)] transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-line/70 pb-3 font-mono text-xs">
              <span className="font-bold text-ink">{r.id}</span>
              <span className="text-muted">{r.date}</span>
            </div>

            {/* Middle Breakdown */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Gross Earnings</span>
                <span className="font-bold text-ink text-base">{r.gross}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>Tasker (30% floor)</span>
                <span className="text-ink font-semibold">{r.taskerSplit}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>Middlemen Fee (15%)</span>
                <span className="text-ink font-semibold">{r.mmFee}</span>
              </div>
              <div className="h-px bg-line/80 my-1" />
              <div className="flex justify-between items-center bg-accent/15 p-2 rounded-lg border border-accent/30">
                <span className="font-bold text-ink">Owner Net Payout</span>
                <span className="font-black text-ink text-sm">{r.ownerNet}</span>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-1 border-t border-line/60 flex items-center justify-between text-[11px] font-mono">
              <div className="flex flex-col">
                <span className="text-muted">{r.domain}</span>
                <span className="text-ink font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {r.status}
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
      <div className="relative z-10 mt-6 rounded-xl border border-line bg-surface/90 backdrop-blur-sm p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted">
        <div className="flex items-center gap-3">
          <span className="text-ink font-bold">Audit Standard:</span>
          <span>Invoices delivered every Friday at 17:00 UTC with full platform telemetry diffs.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ink font-semibold">Payment Methods:</span>
          <span className="rounded bg-bg px-2 py-1 border border-line text-ink">Direct ACH Wire</span>
          <span className="rounded bg-bg px-2 py-1 border border-line text-ink">SEPA</span>
          <span className="rounded bg-bg px-2 py-1 border border-line text-ink">USDC Available</span>
        </div>
      </div>
    </div>
  );
}
