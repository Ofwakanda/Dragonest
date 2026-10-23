"use client";
import Link from "next/link";
import { Lock } from "lucide-react";
import { Checkbox, CheckboxGroup, ErrorSummary, FileUpload, RadioGroup, SelectField, SuccessPanel, TextArea, TextField } from "./fields";
import { checkFiles, isEmail, str, useSubmit } from "./useSubmit";
import { pricing, money } from "@/config/site";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  if (!str(fd, "name")) e.name = "Enter your full name.";
  if (!isEmail(str(fd, "email"))) e.email = "Enter an email address like name@example.com.";
  if (!str(fd, "country")) e.country = "Enter the country where you're based.";
  if (!str(fd, "platform")) e.platform = "Enter the name of the AI-training platform.";
  const policy = str(fd, "policyUrl");
  if (!/^https?:\/\/\S+\.\S+/.test(policy)) e.policyUrl = "Paste a link to the platform's terms or policy that allows subcontracting or remote access.";
  if (!fd.get("status")) e.status = "Choose where the account is today.";
  const fileErr = checkFiles(fd, "files"); if (fileErr) e.files = fileErr;
  if (!fd.get("ownsAccount")) e.ownsAccount = "Confirm that you own this account.";
  if (!fd.get("platformAllows")) e.platformAllows = "Confirm that the platform permits subcontracting or remote access.";
  if (!fd.get("taxResponsibility")) e.taxResponsibility = "Confirm that you stay responsible for platform taxes and legal compliance.";
  if (!fd.get("agree")) e.agree = "Agree to the Host Agreement and Terms to continue.";
  return e;
}

export function AccountSubmitForm() {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/account", validate);

  if (status === "done") {
    return (
      <SuccessPanel title="Thanks — we've received your account details">
        <p>Your reference is <strong>{reference}</strong>. We&apos;ve emailed you a copy.</p>
        <p className="mt-2">Next, a compliance reviewer checks the platform&apos;s terms. If the platform permits managed work,
          we&apos;ll invite you to pay the {money(pricing.audit.price)} audit fee and coordinate your login directly through Telegram&apos;s end-to-end encrypted secret chat with our verified administrators.
          If it doesn&apos;t, we&apos;ll tell you why and you won&apos;t be charged.</p>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-8" aria-describedby="acct-form-intro">
      <p id="acct-form-intro" className="text-muted">It takes about 5 minutes. You can&apos;t be charged by sending this form.</p>

      <div className="flex gap-3 rounded-card border-2 border-primary bg-surface p-5">
        <Lock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p><strong>Do not type your password here.</strong> We never ask for passwords on public forms or email. After the preliminary audit,
          you&apos;ll coordinate your login directly through Telegram&apos;s end-to-end encrypted secret chat with our verified administrators.</p>
      </div>

      <ErrorSummary errors={errors} refEl={summaryRef} />

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">About you</legend>
        <TextField name="name" label="Full name" autoComplete="name" required error={errors.name} />
        <TextField name="email" label="Email" type="email" autoComplete="email" required error={errors.email}
          hint="We'll send your reference number and next steps here." />
        <TextField name="country" label="Country" autoComplete="country-name" required error={errors.country}
          hint="Some platforms only allow work from certain countries. We check this during the audit." />
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">About the account</legend>
        <TextField name="platform" label="Platform name" required error={errors.platform} hint="The company whose AI-training work this account is for." />
        <TextField name="policyUrl" label="Link to the platform rule that allows subcontracting or remote access" type="url" inputMode="url" required error={errors.policyUrl}
          hint="Paste the web address of the terms, contributor agreement or help article. If you can't find one, the platform probably doesn't allow it — and we can't take the account." />
        <RadioGroup name="status" legend="Where is the account today?" required error={errors.status} options={[
          { value: "onboarding", label: "Not fully set up", description: "Still has assessments, training modules or qualification steps to finish." },
          { value: "tasking", label: "Active but underused", description: "Qualified and able to receive tasks, but not being worked regularly." },
          { value: "unsure", label: "I'm not sure", description: "That's fine — the audit will tell you." },
        ]} />
        <SelectField name="earnings" label="Typical monthly earnings on this account" optional options={[
          { value: "0", label: "None yet" }, { value: "lt2000", label: "Under $2,000" }, { value: "2000-5000", label: "$2,000 – $5,000" },
          { value: "5000-10000", label: "$5,000 – $10,000" }, { value: "gt10000", label: "Over $10,000" },
        ]} hint="Helps us size the team. This is not a promise of future earnings." />
        <CheckboxGroup name="domains" legend="Task types on this account" options={[
          { value: "rating", label: "Response rating and ranking" }, { value: "writing", label: "Writing and rewriting" },
          { value: "coding", label: "Coding and code review" }, { value: "stem", label: "Math and science" },
          { value: "multimodal", label: "Image, audio or video" }, { value: "language", label: "Non-English languages" },
        ]} />
        <SelectField name="twofa" label="Is two-factor sign-in (2FA) switched on?" optional options={[
          { value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "Not sure" },
        ]} hint="We require 2FA before any tasker works on the account. We'll help you set it up." />
        <FileUpload name="files" label="Screenshots of the account dashboard" optional error={errors.files}
          hint="Helpful for the audit. Please cover or crop out passwords, payment details and ID numbers first." />
        <TextArea name="notes" label="Anything else we should know?" optional />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold">Confirmations</legend>
        <Checkbox name="ownsAccount" label="I own this account and I'm allowed to authorize work on it." required error={errors.ownsAccount} />
        <Checkbox name="platformAllows" label="To the best of my knowledge, the platform explicitly permits subcontracting, remote access or agency-managed work." required error={errors.platformAllows}
          hint="We verify this ourselves. If we find it isn't permitted, we stop and refund the audit fee." />
        <Checkbox name="taxResponsibility" label="I understand I keep ownership and remain responsible for platform taxes and legal compliance." required error={errors.taxResponsibility} />
        <div>
          <Checkbox name="agree" label="I agree to the Host Agreement and Terms of Service." required error={errors.agree} />
          <p className="ml-9 mt-1 text-[0.95rem]">
            <Link className="link" href="/legal/host-agreement">Read the Host Agreement</Link> ·{" "}
            <Link className="link" href="/legal/terms">Read the Terms</Link>
          </p>
        </div>
      </fieldset>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"} aria-disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit your account"}
      </button>
      <p className="text-[0.95rem] text-muted">We&apos;ll reply within 2 business days. Submitting doesn&apos;t guarantee we accept the account or that it will earn a set amount.</p>
    </form>
  );
}
