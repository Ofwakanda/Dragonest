"use client";
import { useState } from "react";
import Link from "next/link";
import { Lock, Send, CheckCircle2, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { Checkbox, CheckboxGroup, ErrorSummary, FileUpload, RadioGroup, SelectField, SuccessPanel, TextArea, TextField } from "./fields";
import { checkFiles, isEmail, str, useSubmit } from "./useSubmit";
import { site } from "@/config/site";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  if (!str(fd, "name")) e.name = "Enter your full name.";
  if (!isEmail(str(fd, "email"))) e.email = "Enter an email address like name@example.com.";
  if (!str(fd, "country")) e.country = "Enter the country where you are based.";
  if (!str(fd, "platform")) e.platform = "Enter the name of the AI training platform (e.g. Outlier, Alignerr, DataAnnotation, Scale AI).";
  if (!fd.get("status")) e.status = "Choose where the account is today.";
  const fileErr = checkFiles(fd, "files"); if (fileErr) e.files = fileErr;
  if (!fd.get("ownsAccount")) e.ownsAccount = "Confirm that you own this account and authorize managed work.";
  if (!fd.get("taxResponsibility")) e.taxResponsibility = "Confirm that you retain legal ownership and agree to the 55% revenue split.";
  if (!fd.get("agree")) e.agree = "Agree to the Host Agreement and Terms to continue.";
  return e;
}

export function AccountSubmitForm() {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/account", validate);
  const [copied, setCopied] = useState(false);

  const copyReference = () => {
    if (reference) {
      navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (status === "done") {
    return (
      <SuccessPanel title="Start your free check">
        <p className="text-base text-ink">
          Thanks! Your reference number is <strong>{reference}</strong>. We will message you within 15 minutes.
        </p>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Checking your account is free. No obligation.
        </p>

        <div className="mt-5 rounded border border-line bg-surface p-4 space-y-3 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
              <Send className="h-3.5 w-3.5 text-muted" /> Telegram Coordination
            </span>
            <button
              type="button"
              onClick={copyReference}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-ink bg-surface-2 px-2 py-1 rounded border border-line"
            >
              {copied ? <CheckCircle2 className="h-3 w-3 text-ink" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>

          <p className="text-xs text-muted font-sans leading-relaxed">
            For fastest setup, send your reference number <strong>{reference}</strong> to our verified Telegram desk:
          </p>

          <a
            href={site.telegram.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full text-center text-xs flex items-center justify-center gap-2"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Chat on Telegram: t.me/middlemenhub</span>
          </a>
        </div>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-describedby="acct-form-intro">
      <div>
        <h3 className="text-xl font-semibold text-ink">Start your free check</h3>
        <p id="acct-form-intro" className="mt-1 text-sm text-muted">It takes about two minutes.</p>
      </div>

      <div className="flex items-center gap-3 rounded border border-line bg-surface p-4 text-xs text-muted">
        <Lock aria-hidden="true" className="h-4 w-4 shrink-0 text-muted" />
        <p>
          Please do not type your password here. We never ask for it on this website. Setup happens in an encrypted chat with a verified admin.
        </p>
      </div>

      <ErrorSummary errors={errors} refEl={summaryRef} />

      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-ink">Your details</legend>
        <TextField name="name" label="Full name" autoComplete="name" required error={errors.name} />
        <TextField name="email" label="Email" type="email" autoComplete="email" required error={errors.email}
          hint="We will send your reference number here." />
        <TextField name="telegram" label="Telegram username (optional)" placeholder="@username"
          hint="Faster replies and setup." />
        <TextField name="country" label="Country" autoComplete="country-name" required error={errors.country}
          hint="Where you are based." />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-base font-semibold text-ink">Your account</legend>
        <SelectField name="platform" label="Which platform is your account on?" required error={errors.platform} options={[
          { value: "Outlier", label: "Outlier" },
          { value: "Alignerr", label: "Alignerr" },
          { value: "Scale AI", label: "Scale AI" },
          { value: "DataAnnotation", label: "DataAnnotation" },
          { value: "Other", label: "Other platform" },
        ]} />
        <RadioGroup name="status" legend="Is your account active, or stuck at a test?" required error={errors.status} options={[
          { value: "onboarding", label: "Stuck at an entry test or qualification", description: "Needs help passing benchmark tests to open the queue." },
          { value: "tasking", label: "Active and ready for tasks", description: "Approved and able to receive tasks, but sitting idle." },
          { value: "unsure", label: "Not sure", description: "We will check its status for free during setup." },
        ]} />
        <CheckboxGroup name="domains" legend="Task types on this account (optional)" options={[
          { value: "rating", label: "Response rating and ranking" }, 
          { value: "writing", label: "Writing and rewriting" },
          { value: "coding", label: "Coding and code review" }, 
          { value: "stem", label: "Math and science" },
          { value: "multimodal", label: "Image, audio or video" }, 
          { value: "language", label: "Non-English languages" },
        ]} />
        <FileUpload name="files" label="Screenshot of the account dashboard (optional)" optional error={errors.files}
          hint="Please cover or crop out passwords or ID numbers." />
        <TextArea name="notes" label="Anything else we should know? (optional)" optional />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold text-ink">Confirmations</legend>
        <Checkbox name="ownsAccount" label="I own this account and I authorize Middlemen to match it with trained specialists." required error={errors.ownsAccount} />
        <Checkbox name="taxResponsibility" label="I understand I keep 100% legal ownership and receive 55% of what the account earns." required error={errors.taxResponsibility} />
        <div>
          <Checkbox name="agree" label="I agree to the Host Agreement and Terms of Service." required error={errors.agree} />
          <p className="ml-9 mt-1 text-xs text-muted">
            <Link className="link" href="/legal/host-agreement">Host Agreement</Link> ·{" "}
            <Link className="link" href="/legal/terms">Terms</Link>
          </p>
        </div>
      </fieldset>

      <div className="pt-2">
        <button type="submit" className="btn-accent w-full sm:w-auto" disabled={status === "sending"} aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending Details…" : "Send my details"}
        </button>
        <p className="mt-2 text-xs text-muted">Checking your account is free. No obligation.</p>
      </div>
    </form>
  );
}
