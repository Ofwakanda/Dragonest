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
  KeyRound
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
        subhead="If your AI training account on Outlier, Alignerr, Scale AI, or DataAnnotation is sitting idle, you are leaving thousands on the table every month. We pair your account with verified specialists who do the work every day. You keep 55% of all earnings. Zero effort required."
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
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group card space-y-4 border-line hover:border-accent/60 bg-surface shadow-xl transition-all hover:-translate-y-1">
            <div className="relative inline-block">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-500/30 to-yellow-500/20 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-t-amber-400/50 border-amber-500/30 text-amber-400 font-mono font-black text-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_8px_16px_rgba(0,0,0,0.5)]">
                01
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink">Tell Us About Your Account</h3>
            <p className="text-sm text-muted leading-relaxed">
              Submit your platform name (Outlier, Alignerr, Scale AI, or DataAnnotation) and tell us whether your account is fully active or stuck on an entry assessment. No passwords are ever entered on web forms.
            </p>
          </div>

          <div className="group card space-y-4 border-line hover:border-accent/60 bg-surface shadow-xl transition-all hover:-translate-y-1">
            <div className="relative inline-block">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-500/20 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-t-cyan-400/50 border-cyan-500/30 text-cyan-400 font-mono font-black text-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_8px_16px_rgba(0,0,0,0.5)]">
                02
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink">We Assign Vetted Specialists</h3>
            <p className="text-sm text-muted leading-relaxed">
              We match your account with top domain specialists who work your queue daily. If you are stuck on an assessment, our certified test takers clear it first to unlock high paying tasks.
            </p>
          </div>

          <div className="group card space-y-4 border-line hover:border-accent/60 bg-surface shadow-xl transition-all hover:-translate-y-1">
            <div className="relative inline-block">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-teal-500/20 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-t-emerald-400/50 border-emerald-500/30 text-emerald-400 font-mono font-black text-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_8px_16px_rgba(0,0,0,0.5)]">
                03
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink">You Collect 55% Every Week</h3>
            <p className="text-sm text-muted leading-relaxed">
              Earnings flow directly to your designated bank or payout channel every week. You receive a clear settlement statement showing total account earnings, tasker pay, and our small management fee.
            </p>
          </div>
        </div>

        {/* WORKED EXAMPLE */}
        <div className="mt-12 rounded-3xl border-2 border-accent/40 bg-accent-soft/20 p-6 sm:p-8">
          <h4 className="text-lg font-black text-ink mb-2">Example Monthly Math on an Active Queue</h4>
          <p className="text-sm text-muted mb-6">Here is how a typical Python or STEM queue performing at $2,000 monthly breaks down:</p>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="rounded-xl border border-line bg-surface p-4">
              <span className="text-xs font-mono text-muted uppercase">Gross Account Earnings</span>
              <p className="text-2xl font-black text-ink mt-1 font-mono">$2,000</p>
              <p className="text-xs text-muted mt-1">Generated by our specialist</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <span className="text-xs font-mono text-muted uppercase">Tasker &amp; Middlemen Share</span>
              <p className="text-2xl font-black text-ink mt-1 font-mono">$900</p>
              <p className="text-xs text-muted mt-1">30% tasker + 15% management</p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-accent/10 p-4">
              <span className="text-xs font-mono text-accent font-bold uppercase">Your 55% Net Profit</span>
              <p className="text-2xl font-black text-accent mt-1 font-mono">$1,100</p>
              <p className="text-xs text-accent font-bold mt-1">Direct to you without working</p>
            </div>
          </div>
        </div>
      </Section>

      {/* THE TWO OPTIONS FOR ACCOUNT OWNERS */}
      <Section id="services" tone="tint" eyebrow="Choose Your Path" title="What Does Your Account Need?" intro="Whether your account is brand new or already active, we have a fast path to start earning.">
        <div className="grid gap-6 md:grid-cols-2">
          {/* OPTION 1: PASS ASSESSMENT */}
          <article className="card border-t-4 border-t-amber-400 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-400">
                  Option 1 : Entry Gate
                </span>
                <GraduationCap className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-ink">Unlock My Account : Pass Assessments</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Stuck on a tricky Outlier coding benchmark, Alignerr math test, or language evaluation? Our certified assessment specialists take the tests with guaranteed pass rates to unlock your account.
              </p>
              <div className="mt-5">
                <CheckList items={[
                  "Pass complex coding, STEM, and reasoning benchmark tests",
                  "Clear account onboarding and unlock active project queues",
                  "Fast turnaround : most tests completed in under 24 hours",
                  "Pay flat rate or small percentage of first month earnings"
                ]} />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center text-sm">
                Unlock My Account Now →
              </Link>
            </div>
          </article>

          {/* OPTION 2: FULLY MANAGED TASKING */}
          <article className="card border-t-4 border-t-emerald-400 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                  Option 2 : Hands Off Income
                </span>
                <ClipboardCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-ink">Fully Managed Daily Tasking</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Your account is already approved and has tasks available, but you do not have the time or skill to sit and work 30 hours a week. We assign a dedicated specialist who tasks every single day.
              </p>
              <div className="mt-5">
                <CheckList items={[
                  "Daily task completion with strict quality score protection",
                  "Verified domain specialists matched to your project queue",
                  "Weekly payouts sent directly to you every Friday",
                  "55% owner share : no hidden cuts or surprise fees"
                ]} />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center text-sm">
                Staff My Account Now →
              </Link>
            </div>
          </article>
        </div>
      </Section>

      {/* SAFETY & ACCOUNT SECURITY */}
      <Section id="safety" eyebrow="Zero Worry" title="Why Your Account Is Always Safe With Us" intro="We treat your account with extreme care because keeping it healthy is how everyone makes money.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Lock, title: "No Passwords on Web", desc: "You never type passwords into any website form. All setup happens via Telegram end to end encrypted secret chats with leadership admins.", color: "text-amber-400", border: "border-t-amber-400/40 border-amber-500/30", halo: "from-amber-500/25 to-yellow-500/10" },
            { icon: Scale, title: "100% Your Account", desc: "You retain full legal ownership. You can pause work, change taskers, or disconnect service at any moment with no penalties.", color: "text-cyan-400", border: "border-t-cyan-400/40 border-cyan-500/30", halo: "from-cyan-500/25 to-blue-500/10" },
            { icon: ShieldCheck, title: "Quality Protection", desc: "We sample and review tasks weekly to keep your platform quality rating above 4.8 out of 5.0, preventing bans or strikes.", color: "text-emerald-400", border: "border-t-emerald-400/40 border-emerald-500/30", halo: "from-emerald-500/25 to-teal-500/10" },
            { icon: RefreshCcw, title: "Free Replacement", desc: "If a tasker ever falls ill or fails to meet our quality benchmark, we replace them immediately at zero cost to you.", color: "text-purple-400", border: "border-t-purple-400/40 border-purple-500/30", halo: "from-purple-500/25 to-indigo-500/10" },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="group card border-line hover:border-accent/60 bg-surface flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
                <div>
                  <div className="relative mb-4 inline-block">
                    <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${item.halo} blur-sm opacity-40 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative h-12 w-12 rounded-xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border ${item.border} flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.5)]`}>
                      <IconComp className={`h-6 w-6 ${item.color} drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transform group-hover:scale-110 transition-transform`} strokeWidth={2.2} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
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
