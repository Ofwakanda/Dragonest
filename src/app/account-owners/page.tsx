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
import Image from "next/image";
import { photos } from "@/config/site";
import { AccountSubmitForm } from "@/components/forms/AccountSubmitForm";
import { DashboardPreview } from "@/components/DashboardPreview";
import { ProjectCatalogue } from "@/components/ProjectCatalogue";
import { 
  CheckList, 
  ComplianceNotice, 
  FeatureGrid, 
  FinalCta, 
  PageHero, 
  Section, 
  Badge, 
  NumberTicker, 
  BorderBeam 
} from "@/components/ui";
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
        eyebrow="Account Owner Operations" 
        title="Your AI training account is valuable. We manage and operate it for you."
        subhead="If your account on Outlier, Alignerr, Scale AI, or DataAnnotation is sitting idle, we match it with verified domain specialists who work your queue every day. Initial audit and setup are completely free. You keep 55% of all client payouts with zero daily effort."
        media={
          <div className="relative rounded-2xl overflow-hidden border border-line bg-surface shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={photos.accountOwners.src!}
                alt={photos.accountOwners.alt!}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-3.5 border-t border-line bg-surface flex items-center justify-between text-xs font-mono text-muted">
              <span>SECURE ACCESS GATEWAY</span>
              <span className="text-ink font-medium">ZERO CREDENTIAL SHARING</span>
            </div>
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="#submit" className="btn-accent">
            Connect Your Account
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
          >
            See how it works <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* THREE BIG STATS WITH NUMBERTICKER */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto text-center font-mono">
            <div className="card">
              <span className="text-3xl font-semibold text-ink">
                <NumberTicker value={55} suffix="%" />
              </span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Account Owner Share</p>
              <p className="mt-1 text-xs text-muted font-sans">Direct weekly deposit with transparent accounting</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">
                <NumberTicker value={100} suffix="%" />
              </span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Legal Account Ownership</p>
              <p className="mt-1 text-xs text-muted font-sans">Account stays in your name. Pause or revoke access anytime</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">0 Hours</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Daily Effort Required</p>
              <p className="mt-1 text-xs text-muted font-sans">Vetted specialists execute tasks and pass queue reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW ACCOUNT OWNERS GET PAID */}
      <Section 
        id="how-it-works" 
        eyebrow="Simple 3 Step System" 
        title="How You Start Earning Weekly" 
        intro="Zero daily work required from you. We handle full operations and send your payout every Friday."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Tell Us About Your Account",
              body: "Share which platform your account is on and whether it is active or pending a test. Takes two minutes. We never ask for passwords on this website."
            },
            {
              step: "02",
              title: "We Match You With a Specialist",
              body: "A certified specialist with the right domain skills works your queue daily in isolated sessions. If stuck on a qualification test, our assessment team clears it first."
            },
            {
              step: "03",
              title: "You Get Paid Every Friday",
              body: "Earnings deposit directly into your bank account. Every Friday you receive an itemized statement showing total gross, specialist earnings, and our 15% management fee."
            }
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

      {/* WORKED EXAMPLE */}
      <Section 
        id="example" 
        tone="tint" 
        eyebrow="Worked Example" 
        title="What a Typical Month Looks Like" 
        intro="Here is how the numbers break down on an active queue earning $2,000 in a month."
      >
        <div className="max-w-2xl mx-auto card font-mono p-6">
          <div className="space-y-3 pb-6 border-b border-line text-sm">
            <div className="flex justify-between items-center text-ink font-semibold text-base">
              <span>Gross Account Earnings</span>
              <span>$2,000.00</span>
            </div>
            <div className="flex justify-between items-center text-muted">
              <span>Specialist Payout (30%+)</span>
              <span>$600.00</span>
            </div>
            <div className="flex justify-between items-center text-muted">
              <span>MIDDLEMEN Operations (15%)</span>
              <span>$300.00</span>
            </div>
          </div>
          <div className="pt-6 flex justify-between items-center text-ink font-bold text-lg">
            <span>You Keep (55%)</span>
            <span className="text-xl">$1,100.00</span>
          </div>
          <p className="mt-4 text-xs font-sans text-muted leading-relaxed">
            Note: Illustrative example. Actual earnings depend on available platform queue volume, task rates, and project assignments. Payouts distributed weekly every Friday.
          </p>
        </div>
      </Section>

      {/* DUAL OPTIONS: UNLOCK vs MANAGED */}
      <Section 
        id="options" 
        eyebrow="Select Your Path" 
        title="What Does Your Account Need?" 
        intro="Whether your account is stuck on an assessment test or already approved and ready to earn, we have a clear operational path."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* OPTION 1: UNLOCK */}
          <article className="card relative overflow-hidden flex flex-col justify-between border-2 border-line">
            <BorderBeam size={180} duration={14} colorFrom="#C6FF3D" colorTo="transparent" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="status">
                  Option 1 · Entry Qualification
                </Badge>
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
                <Badge variant="status">
                  Option 2 · Managed Operations
                </Badge>
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

      {/* VERIFIED PROJECTS & CLIENT EARNINGS */}
      <Section id="catalogue" eyebrow="Platform Proof" title="Verified Projects &amp; Client Earnings" intro="A selection of client accounts operated by our specialists. Every Friday, clients collect their 55% share directly into their bank account.">
        <ProjectCatalogue limit={4} />
        <div className="mt-8 text-center">
          <Link href="/catalogue" className="inline-flex items-center gap-1.5 rounded-card border border-line bg-surface px-5 py-2.5 text-xs font-mono font-semibold text-ink hover:bg-surface-2 transition-colors">
            View All 20 Verified Projects &rarr;
          </Link>
        </div>
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
