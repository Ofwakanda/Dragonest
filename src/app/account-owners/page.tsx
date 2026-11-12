import Link from "next/link";
import { 
  ClipboardCheck, 
  FileSearch, 
  GraduationCap, 
  ListChecks, 
  RefreshCcw, 
  Scale, 
  ShieldCheck, 
  Wallet, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  TrendingUp,
  KeyRound,
  Send
} from "lucide-react";
import { AccountSubmitForm } from "@/components/forms/AccountSubmitForm";
import { DashboardPreview } from "@/components/DashboardPreview";
import { CheckList, ComplianceNotice, FeatureGrid, FinalCta, PageHero, Section } from "@/components/ui";
import { PriceTable } from "@/components/PriceTable";
import { money, pricing, site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "For Account Owners : Turn Idle Accounts into Weekly Income",
  description: "Have an Outlier, Alignerr, or Scale AI account sitting unused? We pair it with vetted specialists who do the work. You keep 55% of all earnings.",
  path: "/account-owners",
});

export default function AccountOwners() {
  return (
    <>
      <PageHero 
        eyebrow="For Account Owners : 100% Hands Off Income" 
        title="Your AI Account Is Worth Money. Let Us Work It For You."
        backgroundImage="/images/account-owners.jpg"
        subhead="If your AI training account on Outlier, Alignerr, Scale AI, or DataAnnotation is sitting idle, you are leaving thousands on the table every month. Checking and auditing your account is absolutely free. We pair your account with verified specialists who do the work every day. You keep 55% of all earnings. Zero effort required."
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Link href="#submit" className="btn-accent text-sm uppercase tracking-wider !py-3.5 !px-7 shadow-md">
            Connect Your Account Now
          </Link>
          <Link href="#how-it-works" className="btn-secondary text-sm uppercase tracking-wider !py-3.5 !px-7">
            See How You Get Paid
          </Link>
        </div>
      </PageHero>

      {/* THREE BIG STATS */}
      <section className="border-b border-line bg-surface-2/60 py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-md">
              <span className="text-4xl font-black text-accent font-mono">55%</span>
              <p className="mt-2 text-sm font-bold text-ink">Kept by You : The Owner</p>
              <p className="mt-1 text-xs text-muted">Weekly direct payout with zero deductions</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-md">
              <span className="text-4xl font-black text-cyan-400 font-mono">100%</span>
              <p className="mt-2 text-sm font-bold text-ink">Your Legal Ownership</p>
              <p className="mt-1 text-xs text-muted">Account stays in your name. Pause anytime</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-md">
              <span className="text-4xl font-black text-emerald-400 font-mono">0 Hours</span>
              <p className="mt-2 text-sm font-bold text-ink">Effort Required From You</p>
              <p className="mt-1 text-xs text-muted">Our specialists complete all tasks and reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW ACCOUNT OWNERS GET PAID */}
      <Section 
        id="how-it-works" 
        eyebrow="Simple 3 Step System" 
        title="How You Start Making Money This Week" 
        intro="You do not need to do any tasks yourself. We handle the hard part and you collect your weekly share."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                01
              </div>
              <h3 className="text-lg font-semibold text-ink">Tell Us About Your Account</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Submit your platform (Outlier, Alignerr, Scale AI, or DataAnnotation) and specify whether your account is active or waiting on qualification.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                02
              </div>
              <h3 className="text-lg font-semibold text-ink">We Assign Vetted Specialists</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We pair your account with certified domain specialists who work your queue daily. If tests are pending, assessment evaluators clear them first.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                03
              </div>
              <h3 className="text-lg font-semibold text-ink">You Collect 55% Every Week</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Earnings deposit directly to you. Every Friday, you receive a detailed settlement statement showing total payouts, tasker share, and the 15% management fee.
              </p>
            </div>
          </div>
        </div>

        {/* WORKED EXAMPLE */}
        <div className="mt-10 rounded-card border border-line bg-surface p-6 sm:p-8">
          <h4 className="text-base font-semibold text-ink mb-1">Example Monthly Return on an Active Queue</h4>
          <p className="text-sm text-muted mb-6">How a typical technical queue generating $2,000 monthly settles:</p>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="rounded border border-line bg-bg p-4">
              <span className="text-xs font-mono text-muted uppercase">Gross Account Earnings</span>
              <p className="text-2xl font-semibold text-ink mt-1 font-mono">$2,000</p>
              <p className="text-xs text-muted mt-1">Generated by specialist tasks</p>
            </div>
            <div className="rounded border border-line bg-bg p-4">
              <span className="text-xs font-mono text-muted uppercase">Tasker &amp; Operations</span>
              <p className="text-2xl font-semibold text-ink mt-1 font-mono">$900</p>
              <p className="text-xs text-muted mt-1">30% tasker + 15% management</p>
            </div>
            <div className="rounded border border-line bg-surface-2 p-4">
              <span className="text-xs font-mono text-ink font-semibold uppercase">Your 55% Net Share</span>
              <p className="text-2xl font-semibold text-ink mt-1 font-mono">$1,100</p>
              <p className="text-xs text-muted mt-1">Deposited directly to you</p>
            </div>
          </div>
        </div>

        {/* FAST RESPONSE ACTION BAR */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-card border border-line bg-surface p-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded border border-line bg-surface-2 flex items-center justify-center shrink-0">
              <Send className="h-4 w-4 text-muted" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Free Account Review &amp; Onboarding</p>
              <p className="text-xs text-muted">No upfront fees or obligation. Coordinate directly with our 24/7 operations team.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://t.me/MiddlemenHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-xs uppercase tracking-wider font-semibold !py-2.5 !px-5 whitespace-nowrap text-center flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <Send className="h-3.5 w-3.5" /> 24/7 Telegram Desk
            </a>
            <Link
              href="#submit"
              className="btn-secondary text-xs uppercase tracking-wider font-semibold !py-2.5 !px-5 whitespace-nowrap text-center flex-1 sm:flex-none"
            >
              Start Free Review
            </Link>
          </div>
        </div>
      </Section>

      {/* THE TWO OPTIONS FOR ACCOUNT OWNERS */}
      <Section id="services" tone="tint" eyebrow="Choose Your Path" title="What Does Your Account Need?" intro="Whether your account is brand new or already active, we have a fast path to start earning.">
        <div className="grid gap-6 md:grid-cols-2">
          {/* OPTION 1: PASS ASSESSMENT */}
          <article className="card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge">
                  Option 1 · Entry Qualification
                </span>
                <GraduationCap className="h-5 w-5 text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Unlock Account · Pass Assessments</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stuck on a challenging Outlier coding benchmark, Alignerr math test, or reasoning evaluation? Certified assessment specialists assist with clearing benchmarks to unlock your queue.
              </p>
              <div className="mt-5">
                <CheckList items={[
                  "Pass complex coding, STEM, and reasoning benchmark tests",
                  "Unlock active project queues with clear qualification",
                  "Fast turnaround, typically completed in under 24 hours",
                  "Zero upfront charges · compensated only through active earnings"
                ]} />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center text-sm">
                Unlock Account
              </Link>
            </div>
          </article>

          {/* OPTION 2: FULLY MANAGED TASKING */}
          <article className="card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge">
                  Option 2 · Managed Operations
                </span>
                <ClipboardCheck className="h-5 w-5 text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Fully Managed Daily Tasking</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Your account is approved and has active tasks, but you prefer not to task yourself. We assign dedicated domain specialists who task daily while you retain ownership.
              </p>
              <div className="mt-5">
                <CheckList items={[
                  "Daily task completion with strict quality score protection",
                  "Verified domain specialists matched to your project queue",
                  "Weekly payouts sent directly to you every Friday",
                  "55% owner share with transparent settlement statements"
                ]} />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center text-sm">
                Connect Account
              </Link>
            </div>
          </article>
        </div>
      </Section>

      {/* SAFETY & ACCOUNT SECURITY */}
      <Section id="safety" eyebrow="Operational Standards" title="Account Protection &amp; Governance" intro="Every account is safeguarded with strict protocols to maintain continuous standing and earnings.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Lock, title: "Credential Protection", desc: "No passwords are typed into public web forms. Account access is provisioned securely through end-to-end encrypted administrative channels." },
            { icon: Scale, title: "100% Legal Ownership", desc: "You retain full administrative control. You can pause work, reassign specialists, or revoke access at any time." },
            { icon: ShieldCheck, title: "Quality Benchmarks", desc: "Weekly review sampling maintains quality scores above 4.8 out of 5.0 to prevent platform flags or score degradation." },
            { icon: RefreshCcw, title: "Immediate Replacement", desc: "If an evaluator is unavailable or fails quality standards, we reassign a qualified specialist within 3 business days." },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                    <IconComp className="h-4 w-4 text-muted" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* DASHBOARD PREVIEW */}
      <Section id="dashboard" tone="tint" eyebrow="Live Tracking" title="See Everything in Your Dashboard" intro="Track your earnings, active tasker hours, and weekly payout receipts in one clean place.">
        <DashboardPreview />
      </Section>

      {/* SUBMISSION FORM */}
      <Section id="submit" title="Connect Your Account Today" intro="Tell us which platform you have. We will review your account status within 24 hours and get you matched with a specialist.">
        <div className="max-w-3xl mx-auto">
          <AccountSubmitForm />
        </div>
      </Section>

      {/* FINAL CTA */}
      <FinalCta 
        title="Stop Leaving Money on the Table" 
        body="If you have an account on Outlier, Alignerr, Scale AI, or DataAnnotation that is sitting unused, connect with us today and turn it into consistent weekly income."
        primary={{ href: "#submit", label: "Submit Your Account Now" }} 
        secondary={{ href: site.telegram.hub, label: "Chat on Telegram" }} 
      />
    </>
  );
}
