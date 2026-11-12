import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  MonitorSmartphone,
  KeyRound,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { Section, FinalCta } from "@/components/ui";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PaymentReceiptLedger } from "@/components/PaymentReceiptLedger";
import { PricingCalculator } from "@/components/PricingCalculator";
import { pageMeta } from "@/lib/seo";
import { reviews } from "@/data/sample";

export const metadata = pageMeta({
  title: "Turn Your Idle AI Training Account into Weekly Passive Income",
  description:
    "Have an Outlier, Alignerr, Scale AI, or DataAnnotation account? We match it with vetted specialists who work your queue every day. You keep 55% of all earnings.",
  path: "/",
});

const faq = [
  {
    q: "How does the revenue split work?",
    a: (
      <p>
        Account owners keep <strong className="text-ink">55% of gross platform payouts</strong>.
        Specialist taskers earn a minimum of 30%, and Middlemen retains 15% to cover staffing,
        quality assurance, and operational support.
      </p>
    ),
  },
  {
    q: "Does it cost anything to get started?",
    a: (
      <p>
        No. Account onboarding, queue review, and specialist matching are completely free. There
        are no upfront fees or retainers. We only earn our 15% management fee when your account
        actively generates client payouts.
      </p>
    ),
  },
  {
    q: "Do I retain legal ownership of my account?",
    a: (
      <p>
        Yes. The account remains in your name at all times. You retain full administrative control
        and can pause work, inspect task logs, or revoke tasker access whenever you choose.
      </p>
    ),
  },
  {
    q: "What if my account has pending qualification or assessment tests?",
    a: (
      <p>
        Our verified assessment specialists assist with coding, STEM, or reasoning benchmarks to
        help unlock active earning queues, typically within 24 to 48 hours.
      </p>
    ),
  },
  {
    q: "How are login credentials protected?",
    a: (
      <p>
        We never ask for passwords on public web forms or unencrypted channels. Account access is
        coordinated privately, and taskers operate within isolated virtual sessions with clipboard
        restrictions and strict audit logging.
      </p>
    ),
  },
  {
    q: "When and how are payouts distributed?",
    a: (
      <p>
        Platform earnings pay directly to the account owner. Every Friday, we issue a transparent
        settlement statement detailing the gross payout, tasker compensation, and our management
        fee for seamless reconciliation.
      </p>
    ),
  },
  {
    q: "I am a skilled evaluator without an account. Can I apply?",
    a: (
      <p>
        Yes. Evaluators with background in software development, mathematics, languages, or
        technical writing can apply to work active queues with guaranteed weekly compensation.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO WITH DASHBOARD PREVIEW */}
      <section className="relative border-b border-line bg-bg py-16 sm:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-line bg-surface px-3 py-1 text-xs font-mono font-medium text-muted">
                <span>MANAGED AI TRAINING ACCOUNTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.1]">
                Turn your idle AI training account into weekly passive income.
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed">
                Have an Outlier, Alignerr, Scale AI, or DataAnnotation account sitting unused? We pair
                it with vetted domain specialists who complete tasks daily. You keep 55% of all
                earnings with zero daily effort.
              </p>

              {/* Strict button hierarchy: one primary accent button, one text link */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link href="/account-owners#submit" className="btn-accent text-center">
                  Connect Your Account
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
                >
                  How it works <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Clean proof numbers strip */}
              <div className="pt-6 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <div className="text-lg font-semibold text-ink">55%</div>
                  <div className="text-muted">Owner share</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">30%</div>
                  <div className="text-muted">Tasker floor</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">15%</div>
                  <div className="text-muted">Management fee</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">4.9 / 5.0</div>
                  <div className="text-muted">Avg QA rating</div>
                </div>
              </div>
            </div>

            {/* Credible real product visual: Dashboard Preview */}
            <div className="w-full">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-STEP HOW IT WORKS */}
      <Section
        id="how"
        eyebrow="Workflow"
        title="Three simple steps to start earning"
        intro="You retain full legal ownership of your account and can pause or cancel at any time."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Submit account details",
              body: "Provide your platform and account status. We evaluate your queue and verify which projects or assessments are available.",
            },
            {
              step: "02",
              title: "Specialist assignment",
              body: "We pair your account with pre-vetted specialists who complete assessments and begin daily task execution in isolated sessions.",
            },
            {
              step: "03",
              title: "Weekly settlements",
              body: "Platform payouts transfer directly to you. Every Friday, you receive a detailed settlement statement and retain 55% of earnings.",
            },
          ].map((item) => (
            <div key={item.step} className="card flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. PROOF: VERIFIED SETTLEMENTS & TESTIMONIALS */}
      <Section
        id="proof"
        eyebrow="Financial Proof"
        title="Transparent settlements and verified track record"
        intro="Payouts deposit directly into your bank or platform wallet. Here is how settlements are accounted for each week."
        tone="tint"
      >
        <PaymentReceiptLedger />

        {/* Real testimonials with names and roles */}
        <div className="mt-12 pt-12 border-t border-line">
          <p className="eyebrow mb-6">Verified Feedback</p>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="card bg-bg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-muted mb-3 font-mono">
                    <span className="font-semibold text-ink">{r.from}</span>
                    <span>·</span>
                    <span>{r.engagement}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                </div>
                <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs text-muted font-mono">
                  <span>Rating: {r.rating} / 5.0</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. PRICING & REVENUE SPLIT CALCULATOR */}
      <Section
        id="pricing"
        eyebrow="Pricing & Economics"
        title="Clear revenue splits with zero upfront costs"
        intro="Use the calculator to estimate your weekly and monthly returns based on projected platform volume."
      >
        <PricingCalculator />
      </Section>

      {/* 5. ONE TRUST AND SAFETY SECTION */}
      <Section
        id="security"
        eyebrow="Trust & Security"
        title="Enterprise-grade safeguards for your account"
        intro="We protect your identity, account standing, and earnings through four strict protocols."
        tone="tint"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: KeyRound,
              title: "Credential protection",
              desc: "Passwords and authentication tokens are never exposed on public web forms or stored in plaintext. Access is provisioned through encrypted channels.",
            },
            {
              icon: MonitorSmartphone,
              title: "Isolated virtual sessions",
              desc: "Taskers work inside secure remote environments with disabled local storage and clipboard isolation to prevent data leaks.",
            },
            {
              icon: FileCheck2,
              title: "100% legal ownership",
              desc: "You retain full legal and operational control of the account. You can pause work or terminate arrangements at any time without penalty.",
            },
            {
              icon: ShieldCheck,
              title: "Rigorous quality assurance",
              desc: "Independent QA auditors review task batches every week to maintain 4.8+ platform ratings and prevent account suspension or flagging.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card bg-bg flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                    <IconComp className="h-5 w-5 text-muted" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <div className="max-w-3xl">
          <Accordion items={faq} />
        </div>
      </Section>

      {/* 7. CLOSING CTA */}
      <FinalCta
        title="Ready to monetize your idle account?"
        body="Submit your account details for a free review. We evaluate queue status and connect you with a qualified specialist in under 24 hours."
        primary={{ href: "/account-owners#submit", label: "Connect Your Account" }}
        secondary={{ href: "/taskers", label: "Explore Tasker Opportunities" }}
      />
    </>
  );
}
