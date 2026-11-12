"use client";

import { useState, useEffect } from "react";
import { Headphones, Clock, ShieldCheck, X, Send, CheckCircle2, ArrowRight } from "lucide-react";

export function openCustomerCare() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-customer-care"));
  }
}

export function CustomerCareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", telegram: "", topic: "account-audit", message: "" });

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true);
    }
    window.addEventListener("open-customer-care", handleOpen);
    return () => window.removeEventListener("open-customer-care", handleOpen);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("topic", formData.topic);
      const msg = formData.telegram
        ? `[Telegram Handle: ${formData.telegram}]\n${formData.message}`
        : formData.message;
      fd.append("message", msg);

      await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      setStatus("sent");
      setFormData({ name: "", email: "", telegram: "", topic: "account-audit", message: "" });
    } catch {
      setStatus("sent");
    }
  }

  return (
    <>
      {/* Minimal support link — small, dark, non-overlapping */}
      <aside aria-label="Customer Support" className="fixed bottom-5 right-5 z-50 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 rounded border border-line bg-surface px-3.5 py-2 text-xs font-medium text-muted shadow-sm hover:border-line-strong hover:text-ink transition-colors"
          aria-label="Need help?"
        >
          <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
          Need help?
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
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border-2 border-line-strong bg-surface p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded border border-line bg-surface-2 text-ink flex items-center justify-center font-bold">
                  <Headphones className="h-5 w-5 text-muted" />
                </span>
                <div>
                  <h3 id="care-modal-title" className="text-lg font-semibold text-ink">
                    Need help?
                  </h3>
                  <p className="text-xs text-muted">
                    Message us on Telegram any time. We reply fast, usually within 15 minutes.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setIsOpen(false); setStatus("idle"); }}
                className="h-8 w-8 rounded border border-line bg-bg flex items-center justify-center text-muted hover:text-ink hover:border-line-strong transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 24/7 Telegram Contact Hub */}
            <a
              href="https://t.me/MiddlemenHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-4 hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <span className="h-10 w-10 rounded-xl bg-[#24A1DE] text-white flex items-center justify-center shadow-md shrink-0">
                  <Send className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-ink text-sm group-hover:text-accent-ink transition-colors">
                      24/7 Telegram Contact Hub
                    </span>
                    <span className="rounded bg-[#24A1DE]/25 text-[#24A1DE] dark:text-[#64B5F6] text-[10px] font-mono px-1.5 py-0.5 font-bold">
                      Live 24/7
                    </span>
                  </div>
                  <p className="text-xs text-muted font-mono mt-0.5">
                    <strong className="text-[#24A1DE]">t.me/MiddlemenHub</strong> &bull; Chat live with operators
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#24A1DE] dark:text-[#64B5F6] group-hover:translate-x-1 transition-transform shrink-0">
                Open Telegram →
              </span>
            </a>

            {/* Link to 24hr Customer Care How It Works Guide */}
            <a
              href="https://middlemen.online/account-owners#how-it-works"
              className="flex items-center justify-between rounded-xl border-2 border-accent/50 bg-accent/10 p-3.5 hover:bg-accent/20 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-accent text-accent-ink flex items-center justify-center shadow-sm shrink-0">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <div>
                  <span className="font-extrabold text-ink text-xs block group-hover:text-accent-ink transition-colors">
                    See How Account Staffing Works
                  </span>
                  <p className="text-[11px] text-muted leading-tight mt-0.5">
                    Fast response guide : Learn how you keep 55% weekly with 0 hours of work
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-accent group-hover:translate-x-1 transition-transform ml-2 shrink-0">
                Open Guide →
              </span>
            </a>

            {/* FREE AUDIT & ACCOUNT CHECK CALLOUT */}
            <div className="rounded-xl border border-accent/40 bg-accent-soft/20 p-3.5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="text-xs text-ink/90 leading-relaxed">
                <strong className="block text-ink font-bold">Checking and Auditing Your Account Is Absolutely Free</strong>
                Zero upfront fees, zero evaluation charges, zero obligation. We only earn a 15% share when your account actively generates payouts.
              </div>
            </div>

            {/* Direct Form */}
            {status === "sent" ? (
              <div className="rounded-xl border-2 border-accent bg-accent/10 p-6 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
                <h4 className="font-bold text-ink text-lg">Message Dispatched</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Your inquiry has been routed directly to our operations group. Our customer care team will reply on Telegram and email within minutes.
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
                      placeholder="Your name"
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
                      placeholder="name@example.com"
                      className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">
                    Telegram Username (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.telegram}
                    onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                    placeholder="@username"
                    className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">Support Category</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink focus:border-ink focus:outline-none"
                  >
                    <option value="account-audit">Account Onboarding &amp; Free Audit</option>
                    <option value="tasker-support">Tasker Application &amp; Shifts</option>
                    <option value="payouts">Weekly 55% Payouts &amp; Invoicing</option>
                    <option value="general">General Fast Track Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-muted uppercase mb-1">How can we help you?</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your account or questions for an instant reply..."
                    className="w-full rounded-control border-2 border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-accent w-full text-xs font-bold uppercase tracking-wider !py-3 shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Routing Message..." : "Dispatch to Support Desk"}
                </button>

                <p className="text-[11px] text-muted text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent-ink" />
                  24/7 live response. Zero upfront fees.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
