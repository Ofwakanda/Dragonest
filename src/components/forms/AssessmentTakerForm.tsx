"use client";
import { useState } from "react";
import Link from "next/link";
import { Award, CheckCircle2, Copy, ExternalLink, Send, Sparkles } from "lucide-react";
import { Checkbox, ErrorSummary, SelectField, SuccessPanel, TextArea, TextField } from "./fields";
import { isEmail, str, useSubmit } from "./useSubmit";
import { site } from "@/config/site";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  if (!str(fd, "name")) e.name = "Enter your full name.";
  if (!isEmail(str(fd, "email"))) e.email = "Enter a valid email address.";
  if (!str(fd, "domain")) e.domain = "Select your target domain.";
  if (!str(fd, "projectTarget")) e.projectTarget = "Specify the project or platform you want to qualify for.";
  if (str(fd, "experience").length < 15) e.experience = "Briefly describe your relevant background or provide a link (GitHub, LinkedIn, or portfolio) with at least 15 characters.";
  if (!fd.get("agree")) e.agree = "Confirm that you will complete the assessment under strict integrity standards.";
  return e;
}

export function AssessmentTakerForm() {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/assessment", validate);
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
      <SuccessPanel title="Assessment Request Submitted">
        <div className="space-y-4">
          <p>
            Your Assessment Reference Code is{" "}
            <strong className="font-mono text-accent bg-surface-2 px-2 py-0.5 rounded text-base border border-line">
              {reference}
            </strong>
          </p>

          <p className="text-sm text-muted leading-relaxed">
            Our Curriculum &amp; Evaluation team (led by Dr. Elena Rostova and Aris Thorne) will review your target project requirements. 
            We match you with active accounts holding pending qualifications and send your calibration guidelines within 24 hours.
          </p>

          <div className="mt-4 rounded-card border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-5 space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                <span className="text-[#24A1DE]">✈</span> Fast-Track Qualification Desk
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
              Want to begin immediately? Drop your reference code <strong>{reference}</strong> into our Telegram Hub and message a verified evaluation lead to schedule your live rubric simulation.
            </p>

            <a
              href={site.telegram.hub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-[#24A1DE] px-4 py-2.5 font-sans text-sm font-bold text-white hover:bg-[#2092CA] transition-colors"
            >
              <span>✈ Join Telegram Hub &amp; Fast-Track Assessment</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div className="flex items-start gap-3 rounded-card border border-accent/40 bg-accent-soft/20 p-4">
        <Sparkles aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div className="text-xs leading-relaxed text-ink/90">
          <p className="font-bold text-ink">High-Stakes Qualification Guarantee</p>
          <p className="text-muted mt-0.5">
            We provide pre-test calibration rubrics, edge-case analysis, and simulated testing environments so you don&apos;t burn attempts on top-tier projects ($35–$85/hr).
          </p>
        </div>
      </div>

      <ErrorSummary errors={errors} refEl={summaryRef} />

      <fieldset className="space-y-4">
        <legend className="text-lg font-bold text-ink border-b border-line pb-2 w-full">Candidate Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField name="name" label="Full name" autoComplete="name" required error={errors.name} />
          <TextField name="email" label="Email address" type="email" autoComplete="email" required error={errors.email} hint="Assessment invite and rubrics are sent here." />
        </div>
        <TextField 
          name="telegramHandle" 
          label="Telegram Username (@handle)" 
          optional 
          hint="For 1-on-1 scheduling with Dr. Elena Rostova or Aris Thorne." 
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-bold text-ink border-b border-line pb-2 w-full">Project &amp; Domain Selection</legend>
        
        <SelectField
          name="domain"
          label="Your Target Domain Specialization"
          required
          error={errors.domain}
          options={[
            { value: "coding", label: "Software Engineering & Algorithms (Python, C++, Rust, TS)" },
            { value: "stem", label: "Hard STEM & Mathematics (Calculus, Olympiad Math, Physics)" },
            { value: "rlhf", label: "Frontier Reasoning & RLHF Rubric Calibration" },
            { value: "multimodal", label: "Multimodal Video, Audio & Image Annotation" },
            { value: "languages", label: "Non-English Multilingual & Cultural Localization" },
            { value: "professional", label: "Professional Domains (Medical, Legal, Finance)" },
            { value: "creative", label: "High-Acuity Creative & Technical Writing" },
          ]}
        />

        <TextField
          name="projectTarget"
          label="Target Project Name or Platform"
          required
          error={errors.projectTarget}
          hint="e.g., Outlier (Bulba / Flamingo / Coding Tier), Alignerr (Math/Code), DataAnnotation (Coding Core), Mindrift, or Specific Account Queue."
        />

        <TextArea
          name="experience"
          label="Proof of Domain Competence & Background"
          required
          error={errors.experience}
          rows={3}
          hint="Share relevant degrees, GitHub profiles, Kaggle rankings, previous qualification scores, or why you're confident in this project."
        />
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-bold text-muted uppercase tracking-wider">Integrity Commitment</legend>
        <Checkbox
          name="agree"
          label="I agree to complete assessments with strict adherence to platform rubrics, without unpermitted AI generation or proxy fraud."
          required
          error={errors.agree}
        />
      </fieldset>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-accent w-full sm:w-auto !py-3.5 !px-8 text-sm uppercase tracking-wider"
          disabled={status === "sending"}
          aria-disabled={status === "sending"}
        >
          {status === "sending" ? "Preparing Assessment Profile…" : "Request Project Assessment Opportunity"}
        </button>
      </div>

      <p className="text-xs text-muted">
        Once verified, you are matched directly with account owners holding active queues for your target project. You earn at least 30% of project payouts ($35–$85/hr floor).
      </p>
    </form>
  );
}
