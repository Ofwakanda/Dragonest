"use client";

import { useState } from "react";
import { MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

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
  { region: "Midwest & Lakes (US)", code: "US-MIDWEST", activeAccounts: 54, availableQueues: "Data Annotation, Fact-Check", leadTaskers: 33, avgWeeklyPayout: "$680" },
  { region: "Ontario & Quebec (Canada)", code: "CA-EAST", activeAccounts: 48, availableQueues: "Bilingual FR/EN, Python Eval", leadTaskers: 29, avgWeeklyPayout: "$790" },
  { region: "United Kingdom & Europe", code: "UK-EU", activeAccounts: 93, availableQueues: "STEM, Logic Tests, Code Review", leadTaskers: 61, avgWeeklyPayout: "$840" },
];

export function LiveNetworkAndTextMessage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(REGIONS[0]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState<"owner" | "tasker">("owner");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const totalActive = REGIONS.reduce((acc, curr) => acc + curr.activeAccounts, 0);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!phone) return;
    setStatus("sending");
    
    // Simulate SMS dispatch API hook
    setTimeout(() => {
      setStatus("sent");
      setMessage("");
      setPhone("");
    }, 1200);
  }

  return (
    <div className="card border-2 border-line p-6 sm:p-8 relative overflow-hidden shadow-card">
      {/* Ambient Network Telemetry Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale contrast-125 dark:opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/images/network-telemetry.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-bg/95 via-surface/90 to-bg/95 pointer-events-none" />
      <div className="absolute top-0 right-0 h-40 w-40 bg-accent/15 blur-3xl pointer-events-none rounded-full z-0" />
      
      {/* Top Banner Ticker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-bold">
              Live Network Telemetry
            </span>
          </div>
          <h3 className="mt-1 text-2xl font-black text-ink tracking-tight">
            Active Accounts by Country &amp; Region
          </h3>
          <p className="mt-1 text-sm text-muted">
            Inspect real-time vetted accounts currently running active tasks across North America and Europe.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-line bg-surface-2 p-3 font-mono">
          <div>
            <span className="text-[11px] text-muted block uppercase">Total Active Network</span>
            <span className="text-2xl font-black text-ink">{totalActive} Accounts</span>
          </div>
          <div className="h-8 w-px bg-line" />
          <div>
            <span className="text-[11px] text-muted block uppercase">Current Uptime</span>
            <span className="text-2xl font-black text-emerald-500">99.8%</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: Regional Telemetry Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-muted">
            <span>SELECT REGION FOR METRICS</span>
            <span>{REGIONS.length} HUBS LIVE</span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {REGIONS.map((r) => {
              const active = selectedRegion.code === r.code;
              return (
                <button
                  key={r.code}
                  type="button"
                  onClick={() => setSelectedRegion(r)}
                  className={`flex flex-col rounded-xl border-2 p-3 text-left transition-all ${
                    active
                      ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(200,255,46,0.2)]"
                      : "border-line bg-bg hover:bg-surface-2"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-ink flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {r.code}
                    </span>
                    <span className="rounded bg-surface px-1.5 py-0.5 text-muted border border-line">
                      {r.activeAccounts} Active
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-ink line-clamp-1">{r.region}</span>
                </button>
              );
            })}
          </div>

          {/* Regional Detail Breakdown Panel */}
          <div className="rounded-xl border border-line bg-surface p-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-line pb-2">
              <span className="text-muted">Selected Hub:</span>
              <strong className="text-ink font-bold text-sm">{selectedRegion.region}</strong>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="rounded-lg bg-bg p-2 border border-line">
                <span className="text-[10px] text-muted block">RUNNING ACCOUNTS</span>
                <span className="text-base font-bold text-ink">{selectedRegion.activeAccounts}</span>
              </div>
              <div className="rounded-lg bg-bg p-2 border border-line">
                <span className="text-[10px] text-muted block">ACTIVE TASKERS</span>
                <span className="text-base font-bold text-accent-ink">{selectedRegion.leadTaskers}</span>
              </div>
              <div className="rounded-lg bg-bg p-2 border border-line">
                <span className="text-[10px] text-muted block">AVG WEEKLY PAY</span>
                <span className="text-base font-bold text-emerald-500">{selectedRegion.avgWeeklyPayout}</span>
              </div>
            </div>
            <p className="text-[11px] text-muted pt-1">
              <span className="text-ink font-semibold">Active Queues:</span> {selectedRegion.availableQueues}
            </p>
          </div>
        </div>

        {/* Right: Direct SMS Dispatch Console */}
        <div className="rounded-2xl border-2 border-line-strong bg-bg p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-accent text-accent-ink flex items-center justify-center font-bold">
                <MessageSquare className="h-4 w-4" />
              </span>
              <div>
                <h4 className="text-lg font-bold text-ink">Text Middlemen Direct</h4>
                <p className="text-xs text-muted">Instant SMS inquiry directly to our dispatch ops team</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-500 font-bold flex items-center gap-1">
              <Zap className="h-3 w-3" /> &lt; 5m Response
            </span>
          </div>

          {status === "sent" ? (
            <div className="rounded-xl border-2 border-accent bg-accent/10 p-5 text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-accent mx-auto" />
              <h5 className="font-bold text-ink text-base">Text Dispatch Confirmed</h5>
              <p className="text-xs text-muted">
                Our operations desk received your message. You will receive an SMS reply on your mobile phone within minutes.
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
                <label htmlFor="sms-phone" className="block text-xs font-mono font-semibold text-muted uppercase mb-1">
                  Mobile Phone Number
                </label>
                <input
                  id="sms-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 234-5678"
                  className="w-full rounded-control border-2 border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="sms-msg" className="block text-xs font-mono font-semibold text-muted uppercase mb-1">
                  Your Question or Requirement
                </label>
                <textarea
                  id="sms-msg"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    role === "owner"
                      ? "e.g., I have 2 accounts with STEM qualifications. Do you have taskers available in US-West?"
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
                {status === "sending" ? "Dispatching SMS..." : "Send Instant Text Message"}
              </button>

              <p className="text-[11px] text-muted text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-ink" />
                Zero marketing spam. Standard carrier messaging rates may apply.
              </p>

              {/* Telegram Hub Fast Channel */}
              <div className="pt-2 border-t border-line/60">
                <a
                  href="https://t.me/+bQPz0nzK-cI4MTBh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[#24A1DE]/40 bg-[#24A1DE]/10 p-2 text-xs hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 transition-all group"
                >
                  <span className="flex items-center gap-2 text-ink font-medium">
                    <span className="text-[#24A1DE] font-bold">✈</span>
                    <span>Prefer Telegram? Fast-track your inquiry &bull; <strong className="font-mono">Join Telegram Hub</strong></span>
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#24A1DE] group-hover:translate-x-0.5 transition-transform">
                    Join →
                  </span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
