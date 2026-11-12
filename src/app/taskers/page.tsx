import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Binary,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Code2,
  Coffee,
  Cpu,
  FileCode,
  Fingerprint,
  GraduationCap,
  HeartHandshake,
  Languages,
  MonitorCheck,
  Scale,
  Sparkles,
  Stethoscope,
  Star,
  Trophy,
  Wallet,
} from "lucide-react";
import { TaskerApplyForm } from "@/components/forms/TaskerApplyForm";
import { AssessmentTakerForm } from "@/components/forms/AssessmentTakerForm";
import { CheckList, ComplianceNotice, FeatureGrid, FinalCta, Note, PageHero, Section, Steps } from "@/components/ui";
import { photos, pricing, site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "For Taskers & Assessment Takers : Work on Top AI Accounts",
  description: "Flexible, remote AI training work and specialized project qualification opportunities. Weekly pay, at least 30% guaranteed share, and direct account matching.",
  path: "/taskers",
});

const assessmentTracks = [
  {
    icon: Code2,
    domain: "Software Engineering & Algorithms",
    tags: ["Python", "Rust", "C++", "TypeScript", "System Design"],
    rate: "$45 to $85/hr",
    description: "Multi language code generation, complex refactoring, unit test authoring, and algorithmic evaluation rubrics.",
  },
  {
    icon: Binary,
    domain: "Hard STEM & Mathematics",
    tags: ["Calculus", "Olympiad Math", "Physics", "Proof Verification"],
    rate: "$40 to $75/hr",
    description: "Formal mathematical proofs, step by step calculus reasoning, LaTeX formatting, and scientific validation.",
  },
  {
    icon: Cpu,
    domain: "Frontier Reasoning & RLHF",
    tags: ["Chain of Thought", "Hallucination Audit", "Drift Detection"],
    rate: "$30 to $55/hr",
    description: "Multi turn agentic evaluation, pairwise response ranking, and nuanced reward model preference calibration.",
  },
  {
    icon: Languages,
    domain: "Multilingual & Cultural Localization",
    tags: ["30+ Languages", "Dialect Nuance", "Idiomatic QA"],
    rate: "$28 to $50/hr",
    description: "Deep cultural translation, dialect accuracy, slang interpretation, and linguistic boundary testing.",
  },
  {
    icon: Stethoscope,
    domain: "Professional & Expert Domains",
    tags: ["Clinical Medicine", "Statutory Law", "Financial Modeling"],
    rate: "$50 to $95/hr",
    description: "Specialized evaluations requiring professional credentials, statutory compliance, or clinical reasoning.",
  },
];

export default function Taskers() {
  return (
    <>
      <PageHero 
        eyebrow="For Evaluators &amp; Domain Specialists" 
        title="Work on Top AI Accounts"
        subhead={`We match your skills with verified AI training accounts holding active project queues. You work in secure virtual sessions and receive guaranteed weekly payouts of at least ${pricing.taskerShare}% of earnings.`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Link href="#apply" className="btn-accent">Apply as an Evaluator</Link>
          <a href="#assessment-takers" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
            View Assessment Tracks <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* DEDICATED ASSESSMENT TAKERS SECTION */}
      <Section 
        id="assessment-takers" 
        eyebrow="Specialist Qualification Track"
        title="Project Qualification Opportunities" 
        intro="Experienced in a technical discipline? We guide you through simulated rubrics and match you directly with active project queues."
      >
        <div className="max-w-4xl space-y-6">
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                <Trophy className="h-5 w-5 text-muted" strokeWidth={1.75} />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">High-Yield Technical Tracks</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-ink leading-tight">
                  Qualify for specialized queues with structured rubric preparation.
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  The highest-paying AI training workflows ($40 to $85/hr) across platforms like Outlier, Alignerr, and DataAnnotation require domain-specific qualification tests. If your background matches, we provide guidance on grading edge cases and place you directly onto active accounts.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-line pt-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-ink">01. Calibration Sandbox</span>
                <p className="text-xs text-muted">Review practice tasks to master subtle rubric criteria before taking official platform benchmarks.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-ink">02. Direct Account Access</span>
                <p className="text-xs text-muted">Once qualified, you are assigned immediately to verified host accounts holding active project queues.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-ink">03. Weekly Pay Floor</span>
                <p className="text-xs text-muted">Receive at least 30% of gross task earnings every Friday with itemized reconciliation statements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ASSESSMENT TRACKS MATRIX */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-ink">Active Project Qualification Tracks</h3>
              <p className="text-sm text-muted">Benchmark rates and domain requirements for current fleet assessments.</p>
            </div>
            <span className="font-mono text-xs text-accent font-semibold">Updated Weekly</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {assessmentTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.domain} className="card flex flex-col justify-between border-line bg-surface hover:border-accent transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-accent-soft text-ink">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-accent bg-surface-2 px-2.5 py-1 rounded border border-line">
                        {track.rate}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-ink">{track.domain}</h4>
                    <p className="text-xs text-muted leading-relaxed">{track.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line">
                    <div className="flex flex-wrap gap-1.5">
                      {track.tags.map((t) => (
                        <span key={t} className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* FOR ACCOUNT OWNERS CALLOUT CARD */}
            <div className="card flex flex-col justify-between border-dashed border-2 border-line-strong bg-surface-2/40 p-6">
              <div className="space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-surface-2 text-primary font-bold">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-bold text-ink">Have an Account Stuck on an Assessment?</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Are you an account owner whose account is stalled at the qualification stage? Our certified Assessment Takers step in, tackle the benchmarks, and unlock your earning queue.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line">
                <Link href="/account-owners#submit" className="link text-xs font-mono font-bold flex items-center gap-1 text-ink">
                  Submit Account for Assessment Support &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ASSESSMENT TAKER APPLICATION FORM */}
        <div className="mt-14 max-w-3xl">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">Direct Qualification Intake</span>
            <h3 className="text-2xl font-black text-ink mt-1">Submit Your Project Assessment Request</h3>
            <p className="text-sm text-muted">
              Tell us the project you want to test into. We review your profile, send calibration rubrics, and invite you to our next simulated evaluation round.
            </p>
          </div>
          <div className="card border-2 border-line bg-surface p-6 sm:p-8">
            <AssessmentTakerForm />
          </div>
        </div>
      </Section>

      {/* HOW JOINING WORKS */}
      <Section id="how" title="How Joining Works">
        <Steps steps={[
          { title: "Apply", body: "Tell us your skills, hours, and timezone. It takes about 5 minutes." },
          { title: "Verify and calibrate", body: "A quick ID check, then short skills calibrations in your selected areas." },
          { title: "Get matched", body: "We assign you to host accounts that fit your skills. You see the project and expected pay before you accept." },
        ]} />
      </Section>

      {/* ID VERIFICATION */}
      <Section id="verification" tone="tint" eyebrow="Verification &amp; Skills" title="Simple Checks, Done Once">
        <FeatureGrid items={[
          { icon: Fingerprint, title: "Identity check", body: "A trusted verification partner confirms your identity with a photo ID and quick check. We keep the confirmation result, not your private documents." },
          { icon: ClipboardList, title: "Skills tests", body: "Short practical calibrations in rating, writing, coding, STEM, or language work. You can retake a test after 14 days." },
          { icon: BadgeCheck, title: "Security agreement", body: "A plain language NDA and brief security overview. Available as text or guided walk through." },
        ]} />
      </Section>

      {/* PAY */}
      <Section id="pay" tone="tint" eyebrow="Weekly Pay" title="Paid Every Friday">
        <FeatureGrid cols={2} items={[
          { icon: Wallet, title: `At least ${pricing.taskerShare}% guaranteed share`, body: "Your share is shown before you accept work and on every weekly statement. We pay for approved work on time." },
          { icon: CalendarClock, title: "Weekly, on time", body: "Payment goes out every Friday for the previous week. Bank transfer, mobile money, or supported payout services depending on your country." },
        ]} />
      </Section>

      {/* GENERAL APPLICATION FORM */}
      <Section id="apply" title="Apply as a General Tasker" intro="Want steady annotation hours across writing, rating, or multimodal work? Apply here.">
        <div className="max-w-3xl mx-auto"><TaskerApplyForm /></div>
        <div className="mt-8 max-w-3xl mx-auto"><ComplianceNotice compact /></div>
      </Section>

      <FinalCta 
        title="Ready to Start Earning from AI Training?" 
        body="Join hundreds of active taskers. We provide the accounts, queues, and guaranteed weekly payouts."
        primary={{ href: "#apply", label: "Apply as a Tasker Now" }} 
        secondary={{ href: site.telegram.hub, label: "Chat on Telegram" }} 
      />
    </>
  );
}
