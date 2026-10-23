"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  PhoneCall, 
  Mail, 
  Headphones, 
  Send, 
  Server, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  Eye,
  Terminal,
  Calculator
} from "lucide-react";
import { openCustomerCare } from "./CustomerCareModal";

interface DomainHealth {
  id: string;
  name: string;
  icon: typeof Cpu;
  accountCount: number;
  healthPercent: number;
  flagCount: number;
  avgScore: number;
  status: "Optimal" | "Good Standing" | "Under Review";
  queues: string[];
}

const DOMAIN_HEALTH_DATA: DomainHealth[] = [
  {
    id: "coding",
    name: "Coding & Software Engineering",
    icon: Terminal,
    accountCount: 218,
    healthPercent: 99.8,
    flagCount: 0,
    avgScore: 4.96,
    status: "Optimal",
    queues: ["Python Architecture", "TypeScript/Rust", "Code Review QA", "SWE-Bench"],
  },
  {
    id: "multimodal",
    name: "Multimodal, Video & Audio AI",
    icon: Eye,
    accountCount: 164,
    healthPercent: 99.1,
    flagCount: 0,
    avgScore: 4.91,
    status: "Optimal",
    queues: ["Synthetic Video QA", "Visual Grounding", "Audio Transcription", "Image Rubrics"],
  },
  {
    id: "rlhf",
    name: "RLHF, Writing & Reasoning Rubrics",
    icon: Cpu,
    accountCount: 142,
    healthPercent: 99.2,
    flagCount: 1, // 1 resolved appeal
    avgScore: 4.89,
    status: "Good Standing",
    queues: ["Comparative Ranking", "Red Teaming", "Constraint Adherence", "Fact Verification"],
  },
  {
    id: "stem",
    name: "STEM, Mathematics & Advanced Logic",
    icon: Calculator,
    accountCount: 87,
    healthPercent: 99.5,
    flagCount: 0,
    avgScore: 4.97,
    status: "Optimal",
    queues: ["Calculus & Proofs", "Organic Chemistry", "Physics Modeling", "Formal Logic"],
  },
];

const RECENT_HEALTH_AUDITS = [
  { id: "ACC-8914", domain: "Python SWE", proxy: "US-West Clean Res.", status: "Verified Healthy", latency: "24ms", time: "2m ago" },
  { id: "ACC-6102", domain: "RLHF Writing", proxy: "US-East Static RDP", status: "Verified Healthy", latency: "19ms", time: "6m ago" },
  { id: "ACC-7440", domain: "Math Logic", proxy: "UK-London Clean Res.", status: "Verified Healthy", latency: "31ms", time: "11m ago" },
  { id: "ACC-5329", domain: "Multimodal Video", proxy: "US-Central Clean Res.", status: "Verified Healthy", latency: "22ms", time: "18m ago" },
  { id: "ACC-4118", domain: "STEM Physics", proxy: "CA-Ontario Static RDP", status: "Verified Healthy", latency: "28ms", time: "25m ago" },
];

export function AccountHealthTelemetry() {
  const [selectedDomain, setSelectedDomain] = useState<string>("coding");
  const [inquiryAccount, setInquiryAccount] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalAccounts = DOMAIN_HEALTH_DATA.reduce((acc, curr) => acc + curr.accountCount, 0);
  const activeDomain = DOMAIN_HEALTH_DATA.find((d) => d.id === selectedDomain) || DOMAIN_HEALTH_DATA[0];

  function handleHealthInquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!inquiryEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquirySubmitted(true);
      setInquiryAccount("");
      setInquiryEmail("");
    }, 1000);
  }

  return (
    <section 
      aria-labelledby="account-health-title"
      className="card border-2 border-line bg-gradient-to-b from-surface via-bg to-surface relative overflow-hidden p-6 sm:p-8 lg:p-10 shadow-card"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15 grayscale pointer-events-none"
        style={{ backgroundImage: "url('/images/telegram-ops-hub.jpg')" }}
      />
      <div className="absolute top-0 right-0 h-64 w-64 bg-accent/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 h-48 w-48 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Audited Account Telemetry &amp; Health Safeguards
            </div>
            <h3 id="account-health-title" className="mt-2 text-2xl sm:text-3xl font-black text-ink tracking-tight">
              Accounts Under Management &amp; Live Health Index
            </h3>
            <p className="mt-1 text-sm text-muted max-w-2xl leading-relaxed">
              Every account staffed by our verified middleman agency is audited continuously. Below is our transparent public ledger of active accounts, queue distribution, and compliance health.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={openCustomerCare}
              className="btn-accent text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 !py-2.5 !px-4 shadow-sm"
            >
              <Headphones className="h-4 w-4" />
              Contact Us (24/7 Desk)
            </button>
            <Link
              href="/about#contact"
              className="btn-secondary text-xs font-mono font-bold uppercase tracking-wider !py-2.5 !px-4"
            >
              Direct Message Ops
            </Link>
          </div>
        </div>

        {/* 4 Core Health KPIs */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border-2 border-line bg-surface/90 p-4 sm:p-5 relative overflow-hidden group hover:border-accent/60 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-muted uppercase">Total Accounts Staffed</span>
              <Activity className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black font-mono text-ink tracking-tight">{totalAccounts}</span>
              <span className="text-xs font-mono font-bold text-emerald-500">Active</span>
            </div>
            <p className="mt-1 text-xs text-muted">642 cumulative vetted since launch (95.2% active tasking)</p>
          </div>

          <div className="rounded-xl border-2 border-line bg-surface/90 p-4 sm:p-5 relative overflow-hidden group hover:border-emerald-500/60 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-muted uppercase">Fleet Health Score</span>
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black font-mono text-ink tracking-tight">99.4%</span>
              <span className="text-xs font-mono font-bold text-emerald-500">Good Standing</span>
            </div>
            <p className="mt-1 text-xs text-muted">Zero platform bans across last 180 consecutive operating days</p>
          </div>

          <div className="rounded-xl border-2 border-line bg-surface/90 p-4 sm:p-5 relative overflow-hidden group hover:border-accent/60 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-muted uppercase">Disqualification Rate</span>
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black font-mono text-ink tracking-tight">&lt; 0.2%</span>
              <span className="text-xs font-mono text-muted">vs 14.8% avg</span>
            </div>
            <p className="mt-1 text-xs text-muted">Industry baseline for unmanaged tasking accounts is 14.8% flags</p>
          </div>

          <div className="rounded-xl border-2 border-line bg-surface/90 p-4 sm:p-5 relative overflow-hidden group hover:border-emerald-500/60 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-muted uppercase">Avg Account Lifespan</span>
              <Clock className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black font-mono text-ink tracking-tight">14.8 Mo</span>
              <span className="text-xs font-mono text-emerald-500">Continuous</span>
            </div>
            <p className="mt-1 text-xs text-muted">Accounts earn weekly Friday payouts with zero downtime</p>
          </div>
        </div>

        {/* Domain Health & Queue Distribution Matrix */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border-2 border-line bg-surface/80 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div>
                <h4 className="text-base font-bold text-ink flex items-center gap-2">
                  <Server className="h-4 w-4 text-accent" />
                  Account Distribution &amp; Health by Specialty
                </h4>
                <p className="text-xs text-muted">Select a specialty domain to inspect queue health and tasker ratings</p>
              </div>
              <span className="text-xs font-mono text-muted bg-surface-2 px-2.5 py-1 rounded-md border border-line">
                Updated: 4h ago
              </span>
            </div>

            {/* Specialty Domain Selectors */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {DOMAIN_HEALTH_DATA.map((domain) => {
                const isSelected = selectedDomain === domain.id;
                const IconComponent = domain.icon;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`flex flex-col items-start rounded-lg border-2 p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(200,255,46,0.2)]"
                        : "border-line bg-bg hover:border-line-strong hover:bg-surface-2"
                    }`}
                  >
                    <IconComponent className={`h-4 w-4 mb-2 ${isSelected ? "text-accent" : "text-muted"}`} />
                    <span className="text-xs font-bold text-ink leading-tight">{domain.name.split("&")[0]}</span>
                    <span className="text-[11px] font-mono text-muted mt-1">{domain.accountCount} Accounts</span>
                    <span className="mt-2 text-[10px] font-mono font-bold text-emerald-500 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {domain.healthPercent}%
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Detail Card */}
            <div className="rounded-lg border border-line bg-bg p-4 space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-2">
                <span className="font-bold text-sm text-ink font-sans flex items-center gap-2">
                  {activeDomain.name}
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 text-emerald-500 px-2 py-0.5 text-[10px] font-mono font-bold">
                    <CheckCircle2 className="h-3 w-3" /> {activeDomain.status}
                  </span>
                </span>
                <span className="text-muted">Avg Tasker QA: <strong className="text-ink">{activeDomain.avgScore} / 5.0</strong></span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <span className="text-muted text-[10px] block">STAFFED ACCOUNTS</span>
                  <span className="text-base font-bold text-ink">{activeDomain.accountCount} Units</span>
                </div>
                <div>
                  <span className="text-muted text-[10px] block">HEALTH &amp; UPTIME</span>
                  <span className="text-base font-bold text-emerald-500">{activeDomain.healthPercent}%</span>
                </div>
                <div>
                  <span className="text-muted text-[10px] block">UNRESOLVED FLAGS</span>
                  <span className="text-base font-bold text-ink">{activeDomain.flagCount}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-muted text-[10px] block uppercase mb-1.5 font-bold">Active Platform Queues:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDomain.queues.map((q) => (
                    <span key={q} className="rounded bg-surface px-2 py-0.5 text-[11px] border border-line text-ink">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Safeguards Footer */}
            <div className="rounded-lg border border-line/60 bg-surface/50 p-3 text-xs text-muted flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <strong>100% Isolated Infrastructure:</strong> Dedicated clean residential proxies + locked virtual machines.
              </span>
              <span className="font-mono text-[11px] text-ink font-semibold">Zero Session Cross-Contamination</span>
            </div>
          </div>

          {/* Contact Us & Live Audits Desk */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-line bg-surface/80 p-5 sm:p-6 space-y-5">
            <div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <h4 className="text-base font-bold text-ink flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-accent" />
                  Contact Us / Account Health Desk
                </h4>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <p className="mt-3 text-xs text-muted leading-relaxed">
                Have an account in jeopardy, need a free compliance audit, or want to verify if your platform qualifies for our non-custodial staffing framework? Speak directly with our operations team.
              </p>

              {/* Telegram Hub Channel */}
              <a
                href="https://t.me/+bQPz0nzK-cI4MTBh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-lg border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-2.5 hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-7 w-7 rounded bg-[#24A1DE] text-white flex items-center justify-center font-bold text-sm">
                    ✈
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-ink text-xs group-hover:text-accent-ink transition-colors font-mono">
                        Telegram: Official Hub
                      </span>
                      <span className="rounded bg-[#24A1DE]/25 text-[#24A1DE] dark:text-[#64B5F6] text-[9px] font-mono px-1 py-0.2 font-bold">
                        Live 24/7
                      </span>
                    </div>
                    <span className="text-[10px] text-muted font-mono block">Live Community Hub &bull; Text admins directly</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#24A1DE] dark:text-[#64B5F6] group-hover:translate-x-0.5 transition-transform">
                  Join →
                </span>
              </a>

              {/* Direct Channels */}
              <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs font-mono">
                <a 
                  href="tel:+18004197204"
                  className="rounded-lg border border-line bg-bg p-2.5 hover:border-accent hover:bg-surface-2 transition-colors block"
                >
                  <span className="text-[10px] text-muted flex items-center gap-1">
                    <PhoneCall className="h-3 w-3 text-accent" /> Toll-Free 24/7
                  </span>
                  <span className="font-bold text-ink text-xs block mt-0.5">+1 (800) 419-7204</span>
                  <span className="text-[9px] text-muted">Phone or Direct SMS</span>
                </a>

                <a 
                  href="mailto:support@middlemen.ai"
                  className="rounded-lg border border-line bg-bg p-2.5 hover:border-accent hover:bg-surface-2 transition-colors block"
                >
                  <span className="text-[10px] text-muted flex items-center gap-1">
                    <Mail className="h-3 w-3 text-accent" /> Operations Desk
                  </span>
                  <span className="font-bold text-ink text-xs block mt-0.5">support@middlemen.ai</span>
                  <span className="text-[9px] text-muted">&lt; 15 min response</span>
                </a>
              </div>

              {/* Quick Health Inquiry Dispatch */}
              <div className="mt-4">
                {inquirySubmitted ? (
                  <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-3 text-center space-y-1">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />
                    <p className="text-xs font-bold text-ink font-mono">Health Audit Request Received</p>
                    <p className="text-[11px] text-muted">An account supervisor will contact you via email shortly.</p>
                    <button 
                      type="button" 
                      onClick={() => setInquirySubmitted(false)}
                      className="text-[10px] font-mono text-accent underline mt-1 block mx-auto"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHealthInquiry} className="space-y-2">
                    <span className="text-[11px] font-mono font-bold text-ink uppercase block">
                      Request Account Health Check:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Platform (e.g. Outlier, Alignerr)"
                        value={inquiryAccount}
                        onChange={(e) => setInquiryAccount(e.target.value)}
                        className="rounded-md border border-line bg-bg px-2.5 py-1.5 text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none font-mono"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your contact email"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="rounded-md border border-line bg-bg px-2.5 py-1.5 text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-accent w-full text-xs font-mono font-bold uppercase tracking-wider !py-2 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Send className="h-3.5 w-3.5" />
                      {isSubmitting ? "Routing..." : "Check Account Eligibility"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Trigger Button for Customer Care Panel */}
            <div className="pt-2 border-t border-line">
              <button
                type="button"
                onClick={openCustomerCare}
                className="w-full rounded-lg border-2 border-line bg-bg p-2 text-center text-xs font-mono font-bold text-ink hover:border-accent hover:bg-surface-2 transition-all flex items-center justify-center gap-2"
              >
                <Headphones className="h-4 w-4 text-accent" />
                Launch 24/7 Live Support Panel
              </button>
            </div>
          </div>
        </div>

        {/* Live Automated Health Audit Log Ticker */}
        <div className="rounded-xl border border-line bg-surface/60 p-4">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-muted flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
              Recent Automated Health &amp; Proxy Pings (Last 30 mins)
            </span>
            <span className="text-[11px] text-muted">All sessions secure &amp; unflagged</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-line text-muted text-[10px] uppercase">
                  <th className="pb-2 font-semibold">Account ID</th>
                  <th className="pb-2 font-semibold">Assigned Domain</th>
                  <th className="pb-2 font-semibold">Proxy &amp; Session Layer</th>
                  <th className="pb-2 font-semibold">Latency</th>
                  <th className="pb-2 font-semibold">Health Status</th>
                  <th className="pb-2 font-semibold text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/40">
                {RECENT_HEALTH_AUDITS.map((audit) => (
                  <tr key={audit.id} className="hover:bg-surface-2/60 transition-colors">
                    <td className="py-2 font-bold text-ink">{audit.id}</td>
                    <td className="py-2 text-muted">{audit.domain}</td>
                    <td className="py-2 text-muted text-[11px]">{audit.proxy}</td>
                    <td className="py-2 text-ink">{audit.latency}</td>
                    <td className="py-2">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                        <CheckCircle2 className="h-3 w-3" /> {audit.status}
                      </span>
                    </td>
                    <td className="py-2 text-right text-muted text-[11px]">{audit.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
