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
      <SuccessPanel title="Account Details Received : Fast Track Ready">
        <p className="text-base text-ink">
          Your reference code is <strong>{reference}</strong>.
        </p>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Our onboarding team has received your submission and will review your platform queue within 24 hours. We match your account with a vetted specialist so you start earning your 55% weekly share.
        </p>

        <div className="mt-5 rounded-card border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-5 space-y-3 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
              <Send className="h-3.5 w-3.5 text-[#24A1DE]" /> Fast Track Onboarding Desk
            </span>
            <button
              type="button"
              onClick={copyReference}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:underline bg-surface px-2 py-1 rounded border border-line"
            >
              {copied ? <CheckCircle2 className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied Code!" : "Copy Code"}
            </button>
          </div>

          <p className="text-xs text-muted font-sans leading-relaxed">
            Want to get staffed immediately? Join our official Telegram Hub, drop your reference code <strong>{reference}</strong>, and an administrator will set up your private encrypted coordination room right away.
          </p>

          <a
            href={site.telegram.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-[#24A1DE] px-4 py-2.5 font-sans text-sm font-bold text-white hover:bg-[#2092CA] transition-colors"
          >
            <Send className="h-4 w-4" />
            <span>Join Telegram Hub &amp; Fast Track Onboarding</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-8" aria-describedby="acct-form-intro">
      <p id="acct-form-intro" className="text-sm text-muted">Complete the intake below to evaluate your account queue. Takes about 2 minutes.</p>

      <div className="flex items-center gap-3 rounded border border-line bg-surface p-4 text-xs text-muted">
        <Lock aria-hidden="true" className="h-4 w-4 shrink-0 text-muted" />
        <p>
          We never request passwords or banking credentials on public web forms. All access coordination occurs securely via authenticated administrative channels.
        </p>
      </div>

      <ErrorSummary errors={errors} refEl={summaryRef} />

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">About you</legend>
        <TextField name="name" label="Full name" autoComplete="name" required error={errors.name} />
        <TextField name="email" label="Email" type="email" autoComplete="email" required error={errors.email}
          hint="We will send your reference number and onboarding updates here." />
        <TextField name="telegram" label="Telegram username (optional)" placeholder="@username"
          hint="For fast track onboarding and direct coordination with administrators." />
        <TextField name="country" label="Country" autoComplete="country-name" required error={errors.country}
          hint="Where you are located. Used to match accounts with regional compliance guidelines." />
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">About the account</legend>
        <TextField name="platform" label="Platform name" required error={errors.platform} hint="Outlier, Alignerr, DataAnnotation, Scale AI, or other platform." />
        <RadioGroup name="status" legend="Where is the account today?" required error={errors.status} options={[
          { value: "onboarding", label: "Not fully set up", description: "Still has assessments, calibration, or training steps to finish." },
          { value: "tasking", label: "Active but underused", description: "Approved and able to receive tasks, but sitting idle or not worked." },
          { value: "unsure", label: "I am not sure", description: "Our team will review your account status during onboarding." },
        ]} />
        <SelectField name="earnings" label="Typical monthly earnings on this account" optional options={[
          { value: "0", label: "None yet : Brand new or idle" }, 
          { value: "lt2000", label: "Under $2,000 / month" }, 
          { value: "2000-5000", label: "$2,000 to $5,000 / month" },
          { value: "5000-10000", label: "$5,000 to $10,000 / month" }, 
          { value: "gt10000", label: "Over $10,000 / month" },
        ]} hint="Helps us size the specialist team assigned to your account." />
        <CheckboxGroup name="domains" legend="Task types on this account" options={[
          { value: "rating", label: "Response rating and ranking" }, 
          { value: "writing", label: "Writing and rewriting" },
          { value: "coding", label: "Coding and code review" }, 
          { value: "stem", label: "Math and science" },
          { value: "multimodal", label: "Image, audio or video" }, 
          { value: "language", label: "Non-English languages" },
        ]} />
        <SelectField name="twofa" label="Is two factor sign in (2FA) switched on?" optional options={[
          { value: "yes", label: "Yes" }, 
          { value: "no", label: "No" }, 
          { value: "unsure", label: "Not sure" },
        ]} hint="We require 2FA to keep your account safe. We will help you set it up if needed." />
        <TextField name="policyUrl" label="Link to platform profile or queue (optional)" type="url" inputMode="url"
          hint="Optional web link to your contributor dashboard or queue if available." />
        <FileUpload name="files" label="Screenshots of the account dashboard (optional)" optional error={errors.files}
          hint="Helpful for queue inspection. Please cover or crop out passwords or ID numbers." />
        <TextArea name="notes" label="Anything else we should know?" optional />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold">Confirmations</legend>
        <Checkbox name="ownsAccount" label="I own this account and I authorize Middlemen to match it with verified specialists." required error={errors.ownsAccount} />
        <Checkbox name="taxResponsibility" label="I understand I keep 100% legal ownership and receive 55% of all client payouts." required error={errors.taxResponsibility} />
        <div>
          <Checkbox name="agree" label="I agree to the Host Agreement and Terms of Service." required error={errors.agree} />
          <p className="ml-9 mt-1 text-[0.95rem]">
            <Link className="link" href="/legal/host-agreement">Read the Host Agreement</Link> ·{" "}
            <Link className="link" href="/legal/terms">Read the Terms</Link>
          </p>
        </div>
      </fieldset>

      <button type="submit" className="btn-accent w-full sm:w-auto text-sm uppercase tracking-wider font-bold !py-3.5 !px-8 shadow-md" disabled={status === "sending"} aria-disabled={status === "sending"}>
        {status === "sending" ? "Sending Details…" : "Connect Your Account Now"}
      </button>
      <p className="text-[0.95rem] text-muted">We reply within 24 hours. Zero upfront fees.</p>
    </form>
  );
}
