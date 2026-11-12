"use client";

import { useState, useEffect } from "react";
import { Headphones, MessageSquare, PhoneCall, Mail, Clock, ShieldCheck, X, Send, CheckCircle2, ArrowRight } from "lucide-react";

export function openCustomerCare() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-customer-care"));
  }
}

export function CustomerCareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "account-onboarding", message: "" });

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
      const msg = formData.phone
        ? `[Direct Text Request: ${formData.phone}]\n${formData.message}`
        : formData.message;
      fd.append("message", msg);

      await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", topic: "account-onboarding", message: "" });
    } catch {
      setStatus("sent");
    }
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
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border-2 border-line-strong bg-surface p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
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
                    Dedicated Ops Response under 15 mins
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

            {/* Quick Contact & Direct Text Channels */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {/* Text Us Directly */}
                <a
                  href="sms:+18004197204"
                  className="rounded-xl border-2 border-accent/40 bg-accent/10 p-3 hover:border-accent hover:bg-accent/20 transition-all group block"
                >
                  <span className="text-ink font-bold flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-accent" /> Text Us Directly
                  </span>
                  <p className="text-ink font-black text-sm mt-1">+1 (800) 419-7204</p>
                  <span className="text-[10px] text-accent font-semibold block mt-0.5">Click to text for fast SMS reply</span>
                </a>

                {/* Telegram Hub */}
                <a
                  href="https://t.me/+bQPz0nzK-cI4MTBh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-3 hover:border-[#24A1DE] hover:bg-[#24A1DE]/20 transition-all group block"
                >
                  <span className="text-ink font-bold flex items-center gap-1.5">
                    <Send className="h-4 w-4 text-[#24A1DE]" /> Telegram Live Hub
                  </span>
                  <p className="text-ink font-black text-sm mt-1">Official Hub</p>
                  <span className="text-[10px] text-[#24A1DE] font-semibold block mt-0.5">Chat with live 24/7 admins</span>
                </a>
              </div>
            </div>

            {/* Direct Form */}
            {status === "sent" ? (
              <div className="rounded-xl border-2 border-accent bg-accent/10 p-6 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
                <h4 className="font-bold text-ink text-lg">Message Dispatched</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Your inquiry has been routed directly to our operations group. Our customer care team will reply via text message and email within minutes.
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
                    Mobile Phone (For direct text reply)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
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
                    <option value="account-onboarding">Account Onboarding &amp; Staffing (Free)</option>
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
                  {status === "sending" ? "Routing Message..." : "Text Us Directly / Send Inquiry"}
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
