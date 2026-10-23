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
  title: "For Taskers & Assessment Takers",
  description: "Flexible, remote AI-training work and specialized project qualification opportunities. Weekly pay, at least 30% of task earnings, free accommodations, and certified assessment matching.",
  path: "/taskers",
});

const assessmentTracks = [
  {
    icon: Code2,
    domain: "Software Engineering & Algorithms",
    tags: ["Python", "Rust", "C++", "TypeScript", "System Design"],
    rate: "$45 – $85/hr",
    description: "Multi-language code generation, complex refactoring, unit test authoring, and algorithmic evaluation rubrics.",
  },
  {
    icon: Binary,
    domain: "Hard STEM & Mathematics",
    tags: ["Calculus", "Olympiad Math", "Physics", "Proof Verification"],
    rate: "$40 – $75/hr",
    description: "Formal mathematical proofs, step-by-step calculus reasoning, LaTeX formatting, and scientific validation.",
  },
  {
    icon: Cpu,
    domain: "Frontier Reasoning & RLHF",
    tags: ["Chain-of-Thought", "Hallucination Audit", "Drift Detection"],
    rate: "$30 – $55/hr",
    description: "Multi-turn agentic evaluation, pairwise response ranking, and nuanced reward model preference calibration.",
  },
  {
    icon: Languages,
    domain: "Multilingual & Cultural Localization",
    tags: ["30+ Languages", "Dialect Nuance", "Idiomatic QA"],
    rate: "$28 – $50/hr",
    description: "Deep cultural translation, dialect accuracy, slang interpretation, and linguistic boundary testing.",
  },
  {
    icon: Stethoscope,
    domain: "Professional & Expert Domains",
    tags: ["Clinical Medicine", "Statutory Law", "Financial Modeling"],
    rate: "$50 – $95/hr",
    description: "Specialized evaluations requiring professional credentials, statutory compliance, or clinical reasoning.",
  },
];

export default function Taskers() {
  return (
    <>
      <PageHero 
        eyebrow="For Taskers &amp; Assessment Takers" 
        title="Flexible AI-training work. No account needed."
        backgroundImage="/images/tasker-focus-flow.jpg"
        subhead={`We match you with accounts that fit your skills and schedule. You work in a secure remote session, get paid every week and receive at least ${pricing.taskerShare}% of what your tasks earn.`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#apply" className="btn-accent">Apply as a General Tasker</Link>
          <a href="#assessment-takers" className="btn-secondary !border-accent/40 bg-accent-soft/30 hover:bg-accent-soft/60">
            Target a Project (Assessment Takers) &rarr;
          </a>
          <Link href="/accessibility" className="btn-secondary">See Accommodations</Link>
        </div>
        <p className="mt-5 text-[0.95rem] text-muted">Applying, training and testing are always free. Anyone asking you to pay to join is not us.</p>
      </PageHero>

      {/* DEDICATED ASSESSMENT TAKERS SECTION */}
      <Section 
        id="assessment-takers" 
        eyebrow="Specialist Qualification Track"
        title="Assessment Takers: Project Qualification Opportunities" 
        intro="Think you're able to handle a particular project? We can take the assessment and give you the opportunity to try."
        backgroundImage="/images/ai-study-lab.jpg"
      >
        <div className="max-w-4xl space-y-6">
          <div className="rounded-card border-2 border-accent bg-surface/95 p-6 sm:p-8 backdrop-blur shadow-lg">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-control bg-accent text-bg font-black">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">High-Earning Tier Projects</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                  Don&apos;t wait for platform luck. Test into top-tier projects with verified support.
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  The highest-paying AI training workflows ($40–$85/hr) across platforms like Outlier, Alignerr, DataAnnotation, Remotasks, and Mindrift are locked behind rigorous qualification assessments. 
                  If you believe your skills match a specific project, our Curriculum team (led by Dr. Elena Rostova and Aris Thorne) runs you through simulated rubric sandboxes, calibrates your scoring, and places you onto active host accounts holding immediate queues.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-line pt-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-accent">01. Zero-Burn Calibration</span>
                <p className="text-xs text-muted">Pre-test simulation ensures you understand tricky grading edge cases before risking an official attempt.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-accent">02. Direct Account Access</span>
                <p className="text-xs text-muted">No waiting weeks for project allocation. Once passed, you are placed directly into active host queues.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-accent">03. Weekly Pay Floor</span>
                <p className="text-xs text-muted">You receive at least 30% of gross task earnings every Friday with transparent settlement statements.</p>
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
                  Are you an account owner whose account is stalled at the qualification stage? Our certified Assessment Takers can step in, tackle the benchmarks, and unlock your earning queue.
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
      <Section id="how" title="How joining works">
        <Steps steps={[
          { title: "Apply", body: "Tell us your skills, hours and anything that helps you work well. About 8 minutes." },
          { title: "Verify and test", body: "A one-time ID check, then short skills tests in the areas you chose. Extra time is available on request." },
          { title: "Get matched", body: "We assign you to accounts that fit. You see the project, schedule and expected pay before you accept." },
        ]} />
      </Section>

      {/* ID VERIFICATION & SKILLS TESTS */}
      <Section id="verification" tone="tint" eyebrow="ID verification and skills tests" title="Fair checks, done once">
        <FeatureGrid items={[
          { icon: Fingerprint, title: "Identity check", body: "A trusted verification partner confirms your identity with a photo ID and a quick selfie or video check. We keep the result, not the ID image. Can't do the selfie step? Ask for a live video call instead." },
          { icon: ClipboardList, title: "Skills tests", body: "Short, practical tests in rating, writing, coding, STEM, multimodal or language work. You can retake a test once after 14 days." },
          { icon: BadgeCheck, title: "NDA and training", body: "A plain-language NDA and a 30-minute security course. Available as text, captioned video or a guided call." },
        ]} />
      </Section>

      {/* SETTINGS */}
      <Section id="settings" eyebrow="Accommodations and availability" title="Set it up the way you work" intro="You control your availability. Accommodations are private and never lower your pay rate or ratings." backgroundImage="/images/taskers-review.jpg">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <CalendarClock aria-hidden="true" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 text-xl font-bold">Availability settings</h3>
            <div className="mt-4"><CheckList items={["Set weekly hours from 5 to 40", "Choose preferred time blocks, or set them week by week", "Mark rest days and flare-up days without explanation", "Pause for up to 4 weeks and keep your assignments"]} /></div>
          </div>
          <div className="card">
            <HeartHandshake aria-hidden="true" className="h-8 w-8 text-accent-ink" />
            <h3 className="mt-3 text-xl font-bold">Accommodation settings</h3>
            <div className="mt-4"><CheckList items={["Extra time on tests and timed tasks (where the platform allows)", "Tasks split into smaller steps", "Break reminders at intervals you choose", "Screen reader, voice control and keyboard-only setups", "Written-only communication"]} /></div>
          </div>
        </div>
      </Section>

      {/* ASSIGNED ACCOUNTS */}
      <Section id="assigned" tone="tint" eyebrow="Assigned accounts" title="Know what you're saying yes to">
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          Before you accept an assignment, you see the platform, project type, expected hours, pay share, QA requirements and the owner&apos;s public rating. You can decline without penalty. We only assign accounts on platforms that allow managed work, and only where your country is permitted.
        </p>
      </Section>

      {/* SESSION RULES */}
      <Section id="rules" eyebrow="Remote session rules" title="Clear rules that protect everyone">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <MonitorCheck aria-hidden="true" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 text-xl font-bold">In every session</h3>
            <div className="mt-4"><CheckList items={[
              "Work only inside the secure remote session we provide",
              "Sessions are recorded for quality checks, security and disputes",
              "Clipboard, file transfer and USB are turned off",
              "You never see or handle the owner's password",
              "Follow the platform's own guidelines exactly",
              "Don't use AI tools to complete tasks unless the project allows it",
            ]} /></div>
          </div>
          <div className="card">
            <Coffee aria-hidden="true" className="h-8 w-8 text-accent-ink" />
            <h3 className="mt-3 text-xl font-bold">Your side of the deal</h3>
            <div className="mt-4"><CheckList items={[
              "Take breaks whenever you need; sessions pause safely",
              "Recordings are deleted after 90 days unless a dispute is open",
              "You can ask to see recordings of your own sessions",
              "Only QA staff and dispute reviewers can view recordings",
            ]} /></div>
          </div>
        </div>
      </Section>

      {/* PAY */}
      <Section id="pay" tone="tint" eyebrow="Weekly pay" title="Paid every Friday">
        <FeatureGrid cols={2} items={[
          { icon: Wallet, title: `At least ${pricing.taskerShare}% of task earnings`, body: "Your share is shown before you accept work and on every payslip. We pay for approved work even if the owner pays us late." },
          { icon: CalendarClock, title: "Weekly, on time", body: "Payment goes out every Friday for the previous Monday–Sunday. Bank transfer, mobile money or supported payout services, depending on your country." },
        ]} />
        <div className="mt-6"><Note title="No income guarantee">How much you earn depends on how much work platforms release, and that changes week to week. We&apos;ll always tell you when work is slowing down.</Note></div>
      </Section>

      {/* RATINGS */}
      <Section id="ratings" eyebrow="Ratings and reputation" title="Build a reputation that follows you">
        <FeatureGrid items={[
          { icon: Star, title: "Six fair measures", body: "Quality, reliability, communication, compliance, pay timeliness and accessibility — the same measures used to rate owners and us." },
          { icon: BadgeCheck, title: "Verified only", body: "Only people who finished work with you can rate you. One rating per assignment." },
          { icon: HeartHandshake, title: "Appeal anything", body: "Disagree with a rating? Ask for a review within 30 days. A different staff member looks at the session records." },
        ]} />
        <p className="mt-6"><Link className="link" href="/ratings#disputes">How disputes and appeals work</Link></p>
      </Section>

      {/* GENERAL APPLICATION FORM */}
      <Section id="apply" tone="tint" title="Apply as a General Tasker" intro="Want steady, general annotation hours across writing, rating, or multimodal work? Apply here.">
        <div className="max-w-3xl"><TaskerApplyForm /></div>
        <div className="mt-8 max-w-3xl"><ComplianceNotice compact /></div>
      </Section>

      <FinalCta title="Need help applying or qualifying?" body="If a form, test or setup doesn't work for you, a person will help — by email, chat or a call."
        primary={{ href: "#assessment-takers", label: "Target a Specific Project" }} secondary={{ href: "/accessibility#request", label: "Request an accommodation" }} />
    </>
  );
}
