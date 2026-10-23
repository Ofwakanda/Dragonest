"use client";

import React, { useState, useEffect } from "react";

export function HeroInteractiveGraphic() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");
  const [score, setScore] = useState({ accuracy: 5, reasoning: 5, safety: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPulse((p) => (p + 1) % 100), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      {/* Background glow & subtle brutalist offset shadow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 to-line opacity-50 blur-lg transition duration-500" />
      
      <div className="relative overflow-hidden rounded-2xl border-2 border-line-strong bg-surface shadow-[8px_8px_0px_0px_rgba(10,10,10,0.9)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.85)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-line bg-ink" />
            <span className="h-3 w-3 rounded-full border border-line bg-muted opacity-50" />
            <span className="h-3 w-3 rounded-full border border-line bg-accent" />
            <span className="ml-2 font-mono text-xs font-semibold text-muted">MM_AUDIT_SANDBOX // v2.6.4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] font-semibold text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              SESSION ENCRYPTED
            </span>
          </div>
        </div>

        {/* Console Content */}
        <div className="p-5 space-y-4">
          {/* Prompt card */}
          <div className="rounded-xl border border-line bg-bg p-3.5">
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-muted mb-1.5">
              <span>BENCHMARK PROMPT #842</span>
              <span className="text-accent-ink bg-accent/30 px-1.5 py-0.5 rounded">RLHF · PYTHON REASONING</span>
            </div>
            <p className="text-sm font-medium text-ink">
              &quot;Implement a zero-allocation circular buffer in Python and prove thread safety with atomic invariants.&quot;
            </p>
          </div>

          {/* Model Comparisons Tabs */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setActiveTab("A")}
              className={`rounded-xl border-2 p-3 text-left transition-all ${
                activeTab === "A"
                  ? "border-line-strong bg-bg shadow-sm"
                  : "border-line bg-surface hover:bg-surface-2 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className="text-ink">CANDIDATE A</span>
                {activeTab === "A" && <span className="text-xs bg-ink text-bg px-1.5 py-0.2 rounded font-sans">SELECTED</span>}
              </div>
              <p className="text-xs font-mono text-muted line-clamp-3">
                class CircularBuffer: uses memoryview + atomic ctypes CAS flags. Invariant satisfied.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("B")}
              className={`rounded-xl border-2 p-3 text-left transition-all ${
                activeTab === "B"
                  ? "border-line-strong bg-bg shadow-sm"
                  : "border-line bg-surface hover:bg-surface-2 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className="text-ink">CANDIDATE B</span>
                {activeTab === "B" && <span className="text-xs bg-ink text-bg px-1.5 py-0.2 rounded font-sans">SELECTED</span>}
              </div>
              <p className="text-xs font-mono text-muted line-clamp-3">
                from collections import deque: relies on GIL, memory allocations on append. Invariant failed.
              </p>
            </button>
          </div>

          {/* Interactive Rubric & Score */}
          <div className="rounded-xl border border-line bg-bg p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-ink">
              <span>RUBRIC EVALUATION CRITERIA</span>
              <span className="text-muted">TASKER #T-4091</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted font-medium">Algorithmic Precision</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setScore({ ...score, accuracy: num })}
                      className={`h-5 w-5 rounded font-mono font-bold text-[10px] transition-colors ${
                        num <= score.accuracy
                          ? "bg-ink text-bg"
                          : "bg-surface-2 text-muted border border-line"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted font-medium">Constraint Adherence</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setScore({ ...score, reasoning: num })}
                      className={`h-5 w-5 rounded font-mono font-bold text-[10px] transition-colors ${
                        num <= score.reasoning
                          ? "bg-ink text-bg"
                          : "bg-surface-2 text-muted border border-line"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs text-muted">Weekly QA Score: <strong className="text-ink">99.2%</strong></span>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 2000);
              }}
              className="btn-accent !min-h-[36px] !py-1 !px-4 text-xs tracking-wider uppercase font-mono shadow-sm"
            >
              {submitted ? "✓ VERIFIED AUDIT" : "SUBMIT AUDIT"}
            </button>
          </div>
        </div>

        {/* Live Ledger Ticker */}
        <div className="border-t border-line bg-surface-2 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-muted">
          <span>TASK RECORD ID: #9842-MM-X</span>
          <span className="text-ink font-semibold">PAYOUT SPLIT: 55% OWNER / 30% TASKER / 15% MM</span>
        </div>
      </div>
    </div>
  );
}
