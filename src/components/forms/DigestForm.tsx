"use client";
import Link from "next/link";
import { Mail, Newspaper, ShieldCheck } from "lucide-react";
import { ErrorSummary, SuccessPanel, TextField } from "./fields";
import { isEmail, str, useSubmit } from "./useSubmit";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  const email = str(fd, "email");
  if (!email) {
    e.email = "Enter your email address.";
  } else if (!isEmail(email)) {
    e.email = "Enter a valid email address like name@example.com.";
  }
  return e;
}

export function DigestForm({ compact = false }: { compact?: boolean }) {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/digest", validate);

  if (status === "done") {
    return (
      <SuccessPanel title="Subscription confirmed!">
        <p className="text-base text-ink">
          You're subscribed with reference <strong>{reference}</strong>.
        </p>
        <p className="mt-2 text-[0.95rem] text-muted">
          Your daily digest will arrive every weekday morning at 7:00 AM UTC. You can unsubscribe at any time with a single click.
        </p>
      </SuccessPanel>
    );
  }

  if (compact) {
    return (
      <form noValidate onSubmit={onSubmit} className="space-y-3">
        <ErrorSummary errors={errors} refEl={summaryRef} />
        <div className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="compact-email" className="sr-only">Email address</label>
          <input
            id="compact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
            aria-invalid={errors.email ? true : undefined}
            className="w-full rounded-control border-2 border-line-strong bg-bg px-4 py-2.5 text-base text-ink placeholder:text-muted aria-[invalid=true]:border-danger"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary shrink-0 text-center text-sm py-2.5 px-5"
          >
            {status === "sending" ? "Joining…" : "Subscribe"}
          </button>
        </div>
        {errors.email && (
          <p className="text-sm font-medium text-danger">{errors.email}</p>
        )}
      </form>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="card space-y-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-accent-soft text-accent-ink">
          <Newspaper aria-hidden="true" className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-bold">Subscribe to the Daily Briefing</h3>
          <p className="text-sm text-muted">Free weekday updates for account owners, taskers &amp; platforms</p>
        </div>
      </div>

      <ErrorSummary errors={errors} refEl={summaryRef} />

      <div>
        <label className="block text-sm font-semibold text-ink mb-2">I am primarily interested in:</label>
        <div className="grid gap-2 sm:grid-cols-3">
          <label className="flex items-center gap-2 rounded-control border border-line p-3 text-sm hover:bg-surface cursor-pointer">
            <input type="radio" name="interest" value="owners" defaultChecked className="h-4 w-4 accent-[rgb(var(--primary))]" />
            <span>Account Owners</span>
          </label>
          <label className="flex items-center gap-2 rounded-control border border-line p-3 text-sm hover:bg-surface cursor-pointer">
            <input type="radio" name="interest" value="taskers" className="h-4 w-4 accent-[rgb(var(--primary))]" />
            <span>Taskers &amp; QA</span>
          </label>
          <label className="flex items-center gap-2 rounded-control border border-line p-3 text-sm hover:bg-surface cursor-pointer">
            <input type="radio" name="interest" value="all" className="h-4 w-4 accent-[rgb(var(--primary))]" />
            <span>Industry All</span>
          </label>
        </div>
      </div>

      <TextField
        name="email"
        label="Your work or contact email"
        type="email"
        autoComplete="email"
        required
        hint="We'll send daily summaries of policy updates, task queues, and pay benchmarks."
        error={errors.email}
      />

      <div className="pt-1">
        <button
          type="submit"
          className="btn-primary w-full justify-center text-base py-3"
          disabled={status === "sending"}
        >
          <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
          {status === "sending" ? "Subscribing…" : "Join Daily News Channel"}
        </button>
      </div>

      <p className="text-xs text-muted text-center flex items-center justify-center gap-1.5 pt-1">
        <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-ink" />
        No spam, ever. One-click unsubscribe anytime. Read our{" "}
        <Link href="/legal/privacy" className="underline hover:text-ink">Privacy Policy</Link>.
      </p>
    </form>
  );
}
