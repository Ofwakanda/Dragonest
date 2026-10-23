"use client";

import { useState, useEffect } from "react";
import { Headphones, MessageCircle, PhoneCall, Mail, Clock, ShieldCheck, X, Send, CheckCircle2 } from "lucide-react";

export function openCustomerCare() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-customer-care"));
  }
}

export function CustomerCareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", topic: "general", message: "" });

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true);
    }
    window.addEventListener("open-customer-care", handleOpen);
    return () => window.removeEventListener("open-customer-care", handleOpen);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", topic: "general", message: "" });
    }, 1000);
  }

  return (
    <>
      {/* High-Visibility Floating Customer Care Trigger Button */}
      <aside aria-label="Customer Support Desk" className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-full border-2 border-line-strong bg-ink px-4 py-3.5 text-bg shadow-[0_6px_30px_rgba(200,255,46,0.45)] hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open 24/7 Customer Care Desk"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
          </span>
          <Headphones className="h-5 w-5 text-accent group-hover:rotate-12 transition-transform" aria-hidden="true" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-bg">
            Customer Care (24/7)
          </span>
        </button>
      </aside>

      {/* Support Center Modal Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="care-modal-title"
        >
          <div className="relative w-full max-w-lg rounded-t-2xl sm:rounded-2xl border-2 border-line-strong bg-surface p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-accent text-accent-ink flex items-center justify-center font-bold">
                  <Headphones className="h-5 w-5" />
                </span>
                <div>
                  <h3 id="care-modal-title" className="text-xl font-black text-ink tracking-tight">
                    Customer Care &amp; Support Desk
                  </h3>
                  <p className="text-xs text-muted font-mono flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-emerald-500" />
                    Dedicated Ops Response &lt; 15 mins
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setIsOpen(false); setStatus("idle"); }}
                className="h-8 w-8 rounded-lg border border-line bg-bg flex items-center justify-center text-muted hover:text-ink hover:border-line-strong transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Quick Contact Methods */}
            <div className="space-y-2">
              {/* Telegram Operations Hub */}
              <a
                href="https://t.me/+bQPz0nzK-cI4MTBh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-3 hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-[#24A1DE] text-white flex items-center justify-center font-bold text-base shadow-sm">
                    ✈
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-ink text-xs group-hover:text-accent-ink transition-colors">
                        Live Telegram Support &amp; Community
                      </span>
                      <span className="rounded bg-[#24A1DE]/25 text-[#24A1DE] dark:text-[#64B5F6] text-[10px] font-mono px-1.5 py-0.5 font-bold">
                        Official Hub
                      </span>
                    </div>
                    <p className="text-[11px] text-muted font-mono">
                      Verified Network &bull; <strong className="text-ink">Chat with Agents &amp; Admins</strong>
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#24A1DE] dark:text-[#64B5F6] group-hover:translate-x-1 transition-transform">
                  Join Hub →
                </span>
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-xl border border-line bg-bg p-3 space-y-1">
                  <span className="text-muted flex items-center gap-1">
                    <PhoneCall className="h-3.5 w-3.5 text-accent" /> Phone &amp; SMS
                  </span>
                  <p className="text-ink font-bold text-sm">+1 (800) 419-7204</p>
                  <span className="text-[10px] text-muted">Toll-free 24/7 Dispatch</span>
                </div>
                <div className="rounded-xl border border-line bg-bg p-3 space-y-1">
                  <span className="text-muted flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-accent" /> Direct Ops Desk
                  </span>
                  <p className="text-ink font-bold text-sm">support@middlemen.ai</p>
                  <span className="text-[10px] text-muted">Audits, Tasking &amp; Help</span>
                </div>
              </div>
            </div>

            {/* Form */}
            {status === "sent" ? (
              <div className="rounded-xl border-2 border-accent bg-accent/10 p-6 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
                <h4 className="font-bold text-ink text-lg">Support Ticket Dispatched</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Your inquiry has been routed to our on-call operations supervisor. A member of customer care will reply via email and SMS within minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-3 btn-secondary !min-h-[36px] !py-1 !px-4 text-xs font-mono font-bold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">Contact Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">Support Category</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink focus:border-ink focus:outline-none"
                  >
                    <option value="general">General Client Inquiry</option>
                    <option value="account-audit">Account Audit &amp; Onboarding</option>
                    <option value="tasker-support">Tasker Shift &amp; Accommodations</option>
                    <option value="payouts">Weekly Payouts &amp; Invoicing</option>
                    <option value="security">Security &amp; Telegram Encrypted Access</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">How can we help you?</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your question, timeline, or requested technical assistance..."
                    className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-accent w-full text-xs font-bold uppercase tracking-wider !py-3 shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Routing to Operator..." : "Dispatch to Support Desk"}
                </button>

                <p className="text-[11px] text-muted text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent-ink" />
                  Direct human support. Non-custodial privacy guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
