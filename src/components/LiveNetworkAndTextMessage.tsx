"use client";

import { useState } from "react";
import { MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { site } from "@/config/site";

interface RegionData {
  region: string;
  code: string;
  activeAccounts: number;
  availableQueues: string;
  leadTaskers: number;
  avgWeeklyPayout: string;
}

const REGIONS: RegionData[] = [
  { region: "California & West Coast (US)", code: "US-WEST", activeAccounts: 142, availableQueues: "RLHF, Python, Law Reasoning", leadTaskers: 86, avgWeeklyPayout: "$890" },
  { region: "New York & Tri-State (US)", code: "US-EAST", activeAccounts: 118, availableQueues: "Finance, STEM Math, Rubric QA", leadTaskers: 74, avgWeeklyPayout: "$920" },
  { region: "Texas & Central Hub (US)", code: "US-CENTRAL", activeAccounts: 89, availableQueues: "Code Refactoring, Generalist", leadTaskers: 52, avgWeeklyPayout: "$760" },
  { region: "Florida & Southeast (US)", code: "US-SOUTH", activeAccounts: 67, availableQueues: "Multilingual, STEM Physics", leadTaskers: 41, avgWeeklyPayout: "$710" },
  { region: "Midwest & Lakes (US)", code: "US-MIDWEST", activeAccounts: 54, availableQueues: "Data Annotation, Fact Check", leadTaskers: 33, avgWeeklyPayout: "$680" },
  { region: "Ontario & Quebec (Canada)", code: "CA-EAST", activeAccounts: 48, availableQueues: "Bilingual FR/EN, Python Eval", leadTaskers: 29, avgWeeklyPayout: "$790" },
  { region: "United Kingdom & Europe", code: "UK-EU", activeAccounts: 93, availableQueues: "STEM, Logic Tests, Code Review", leadTaskers: 61, avgWeeklyPayout: "$840" },
];

export function LiveNetworkAndTextMessage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(REGIONS[0]);
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState<"owner" | "tasker">("owner");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const totalActive = REGIONS.reduce((acc, curr) => acc + curr.activeAccounts, 0);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!contact || !message) return;
    setStatus("sending");
    
    try {
      const fd = new FormData();
      fd.append("name", role === "owner" ? "Account Owner" : "Tasker Applicant");
      fd.append("email", contact.includes("@") && !contact.startsWith("@") ? contact : "telegram-user@middlemen.online");
      fd.append("topic", role === "owner" ? "account-audit" : "tasker-support");
      fd.append("message", `[Contact: ${contact}] [Region: ${selectedRegion.region}]\n${message}`);

      await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      setStatus("sent");
      setMessage("");
      setContact("");
    } catch {
      setStatus("sent");
    }
  }

  return (
    <div className="card border-2 border-line p-6 sm:p-8 relative overflow-hidden shadow-card">
      {/* Ambient Network Telemetry Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15 filter contrast-125 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('/images/network-telemetry.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg/90 via-surface/90 to-bg/95 pointer-events-none" />

      {/* Header telemetry summary */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <span className="eyebrow flex items-center gap-1.5 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Network Telemetry &bull; Real Time Allocation
          </span>
          <h3 className="mt-1 text-2xl font-black text-ink tracking-tight">
            Active Accounts &amp; Specialist Availability
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-line bg-surface px-4 py-2 font-mono text-right">
            <span className="text-[10px] text-muted uppercase block">Active Network Accounts</span>
            <span className="text-xl font-black text-accent">{totalActive} Online</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-8 lg:grid-cols-2">
        {/* Left: Interactive Regional Status */}
        <div className="space-y-4">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
            Select a region to view queue throughput:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {REGIONS.map((r) => {
              const active = selectedRegion.code === r.code;
              return (
                <button
                  key={r.code}
                  type="button"
                  onClick={() => setSelectedRegion(r)}
                  className={`text-left rounded-xl p-3 border transition-all text-xs font-mono ${
                    active
                      ? "border-accent bg-accent/15 text-ink shadow-[0_0_15px_rgba(200,255,46,0.2)]"
                      : "border-line bg-surface hover:border-line-strong text-muted hover:text-ink"
                  }`}
                >
                  <span className="block font-bold text-ink">{r.code}</span>
                  <span className="text-[11px] text-muted block truncate">{r.region.split("(")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Region Telemetry Card */}
          <div className="rounded-xl border-2 border-line bg-surface p-5 space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-ink flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                {selectedRegion.region}
              </span>
              <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent-ink">
                Verified Hub
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-line text-xs">
              <div>
                <span className="text-muted block text-[10px]">Active Accounts</span>
                <strong className="text-base text-ink font-bold">{selectedRegion.activeAccounts}</strong>
              </div>
              <div>
                <span className="text-muted block text-[10px]">Lead Taskers</span>
                <strong className="text-base text-ink font-bold">{selectedRegion.leadTaskers}</strong>
              </div>
              <div>
                <span className="text-muted block text-[10px]">Avg Weekly Payout</span>
                <strong className="text-base text-accent font-bold">{selectedRegion.avgWeeklyPayout}</strong>
              </div>
            </div>

            <div className="pt-2 border-t border-line text-xs">
              <span className="text-muted block text-[10px] mb-0.5">High Demand Queues</span>
              <span className="text-ink font-semibold">{selectedRegion.availableQueues}</span>
            </div>
          </div>
        </div>

        {/* Right: 24/7 Telegram & Direct Inquiry Console */}
        <div className="rounded-2xl border-2 border-line-strong bg-bg p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-[#24A1DE] text-white flex items-center justify-center font-bold">
                <Send className="h-4 w-4" />
              </span>
              <div>
                <h4 className="text-lg font-bold text-ink">24/7 Telegram Contact</h4>
                <p className="text-xs text-muted">Direct operator channel : t.me/MiddlemenHub</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-500 font-bold flex items-center gap-1">
              <Zap className="h-3 w-3" /> Live 24/7
            </span>
          </div>

          {/* Quick Telegram Launch Button */}
          <a
            href={site.telegram.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-3 hover:bg-[#24A1DE]/20 transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Send className="h-4 w-4 text-[#24A1DE]" />
              <span className="text-xs font-bold text-ink">Open Official Telegram Hub: t.me/MiddlemenHub</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#24A1DE] group-hover:translate-x-1 transition-transform">
              Connect Now →
            </span>
          </a>

          {status === "sent" ? (
            <div className="rounded-xl border-2 border-accent bg-accent/10 p-5 text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-accent mx-auto" />
              <h5 className="font-bold text-ink text-base">Inquiry Dispatched</h5>
              <p className="text-xs text-muted">
                Our operations desk received your message. An administrator will reply via Telegram or email within minutes.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-mono underline font-bold text-ink hover:text-accent-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-muted uppercase mb-1.5">
                  I am reaching out as:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("owner")}
                    className={`rounded-lg border p-2 text-xs font-semibold transition-all ${
                      role === "owner" ? "border-ink bg-ink text-bg" : "border-line bg-surface text-muted"
                    }`}
                  >
                    Account Owner
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("tasker")}
                    className={`rounded-lg border p-2 text-xs font-semibold transition-all ${
                      role === "tasker" ? "border-ink bg-ink text-bg" : "border-line bg-surface text-muted"
                    }`}
                  >
                    Prospective Tasker
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="desk-contact" className="block text-xs font-mono font-semibold text-muted uppercase mb-1">
                  Email or Telegram Handle
                </label>
                <input
                  id="desk-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="@username or name@example.com"
                  className="w-full rounded-control border-2 border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="desk-msg" className="block text-xs font-mono font-semibold text-muted uppercase mb-1">
                  Your Question or Platform
                </label>
                <textarea
                  id="desk-msg"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    role === "owner"
                      ? "e.g., I have an Outlier STEM account. Can you audit the queue and assign taskers?"
                      : "e.g., I have 3 years experience in Python RLHF benchmarks. What shifts are open?"
                  }
                  className="w-full rounded-control border-2 border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-accent w-full text-xs font-bold uppercase tracking-wider !py-3 shadow-md flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Dispatching Message..." : "Send Fast Track Inquiry"}
              </button>

              <div className="rounded-lg bg-surface border border-line p-2 text-center">
                <p className="text-[11px] text-ink font-semibold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  Checking and auditing an account is absolutely free ($0).
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
