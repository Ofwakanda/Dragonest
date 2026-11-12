import Link from "next/link";
import {
  Accessibility, 
  Building2, 
  Clock, 
  FileLock2, 
  Keyboard, 
  KeyRound, 
  Mic, 
  MonitorSmartphone, 
  ScrollText,
  Shield, 
  UserRound, 
  Users, 
  Video, 
  Zap,
  Wallet,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  Sparkles,
  HelpCircle,
  FileCheck,
  Send,
  ShieldCheck
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ComplianceNotice, FeatureGrid, FinalCta, Section, Steps, CheckList } from "@/components/ui";
import { ReviewList, SampleBadge, Scorecard, AccountHealthTelemetry } from "@/components/Ratings";
import { money, pricing, site } from "@/config/site";
import { HeroInteractiveGraphic } from "@/components/illustrations/HeroInteractiveGraphic";
import { DigestForm } from "@/components/forms/DigestForm";
import { LiveNetworkAndTextMessage } from "@/components/LiveNetworkAndTextMessage";
import { PaymentReceiptLedger } from "@/components/PaymentReceiptLedger";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Turn Your Idle AI Training Account into Weekly Passive Income",
  description: "Have an Outlier, Alignerr, Scale AI, or DataAnnotation account? We match it with vetted specialists who work your queue every day. You keep 55% of all earnings.",
  path: "/",
});

const faq = [
  { 
    q: "How much money can an account owner make?", 
    a: <p>Account owners keep <strong className="text-ink">55% of all earnings</strong> generated on their account. A typical active queue producing $1,500 to $3,000 monthly puts $825 to $1,650 directly into your pocket every month without doing any of the task work yourself.</p> 
  },
  { 
    q: "Do I still own my account?", 
    a: <p>Yes. The account remains in your name 100% of the time. You can pause work, inspect task logs, or remove tasker access at any moment with no penalties.</p> 
  },
  { 
    q: "What if my account is stuck on an assessment test?", 
    a: <p>That is one of our top specialties. Our verified assessment takers step in, tackle the coding, STEM, or reasoning tests, and unlock your active earning queue within 24 to 48 hours.</p> 
  },
  { 
    q: "How are my login credentials protected?", 
    a: <p>We never ask for passwords on public web forms or unencrypted channels. Account coordination happens strictly via Telegram end to end encrypted secret chats with leadership admins. Taskers work inside secure remote sessions without direct credential exposure.</p> 
  },
  { 
    q: "Who gets paid and how often?", 
    a: <p>Payouts happen every week on Friday. The platform pays earnings to your account, and our weekly settlement statement clearly details your 55% owner share, the tasker share, and our 15% management fee.</p> 
  },
  { 
    q: "I am a tasker without an account. Can I work with you?", 
    a: <p>Yes. If you have coding, math, translation, or writing skills, we pair you with verified accounts that have active task queues. You do the work, and you receive at least 30% weekly payouts.</p> 
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-70 dark:opacity-60"
          style={{ backgroundImage: "url('/images/hero-nightshift.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-bg/95 via-bg/85 to-bg/50 dark:from-bg/95 dark:via-bg/80 dark:to-bg/40" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

        <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-1 text-xs font-mono font-semibold text-ink shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>MIDDLEMEN AUDITED NETWORK</span>
              <span className="text-muted">/</span>
              <span className="text-muted">VETTED AI WORKFLOWS</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl leading-[1.05]">
              Turn Your Idle AI Account into <span className="underline decoration-accent decoration-4 underline-offset-8">Weekly Passive Income</span>.
            </h1>

            <p className="max-w-2xl text-lg text-muted sm:text-xl leading-relaxed">
              Have an Outlier, Alignerr, Scale AI, or DataAnnotation account sitting unused? We match it with vetted specialists who work your queue every day. You keep 55% of earnings. Zero daily effort. 100% your account.
            </p>

            <div className="pt-2 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/account-owners#submit" className="btn-accent text-sm uppercase tracking-wider !py-3.5 !px-7 shadow-md">
                Connect Your Account
              </Link>
              <Link href="/taskers#apply" className="btn-secondary text-sm uppercase tracking-wider !py-3.5 !px-7">
                Apply as a Tasker
              </Link>
              <a
                href={site.telegram.hub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-control border border-[#24A1DE]/40 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/25 px-5 py-3.5 text-sm font-bold text-ink transition-all text-center"
              >
                <Send className="h-4 w-4 text-[#24A1DE]" /> Telegram Hub
              </a>
            </div>

            <div className="pt-4 border-t border-line flex flex-wrap items-center gap-6 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <span className="font-bold text-accent text-base">55%</span>
                <span className="text-ink">Owner Profit Share</span>
              </div>
              <div className="h-4 w-px bg-line" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-base">30%</span>
                <span>Tasker Floor</span>
              </div>
              <div className="h-4 w-px bg-line" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-base">15%</span>
                <span>Management Fee</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <HeroInteractiveGraphic />
          </div>
        </div>
      </section>

      {/* QUICK VALUE STRIP */}
      <section className="border-b border-line bg-surface-2/40 py-10">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wallet, title: "55% Weekly Payouts", desc: "You collect the majority share of all earnings generated on your account every week.", color: "text-accent", border: "border-t-accent/40 border-accent/20", halo: "from-accent/25 to-yellow-500/10" },
              { icon: Clock, title: "Zero Work Required", desc: "Our specialists complete the tasks, pass the quality benchmarks, and keep queues active.", color: "text-cyan-400", border: "border-t-cyan-400/40 border-cyan-500/20", halo: "from-cyan-500/25 to-blue-500/10" },
              { icon: ShieldCheck, title: "Strict Quality Protection", desc: "Average 4.9 out of 5.0 QA rating across all managed accounts to prevent strikes or bans.", color: "text-emerald-400", border: "border-t-emerald-400/40 border-emerald-500/20", halo: "from-emerald-500/25 to-teal-500/10" },
              { icon: Lock, title: "Encrypted Telegram Setup", desc: "Zero passwords entered on web forms. 100% private coordination via Telegram.", color: "text-purple-400", border: "border-t-purple-400/40 border-purple-500/20", halo: "from-purple-500/25 to-indigo-500/10" },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="group rounded-2xl border border-line hover:border-accent/60 bg-surface p-5 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="relative mb-3.5 inline-block">
                      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${item.halo} blur-sm opacity-40 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative h-11 w-11 rounded-xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border ${item.border} flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.5)]`}>
                        <IconComp className={`h-5 w-5 ${item.color} drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transform group-hover:scale-110 transition-transform`} strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className="font-bold text-sm text-ink mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE SIMPLE STEPS */}
      <Section id="how" eyebrow="How It Works" title="Three Simple Steps to Start Earning" intro="You stay in full control. You can pause or stop service at any time." backgroundImage="/images/taskers-review.jpg">
        <Steps steps={[
          { title: "Tell us your platform", body: "Submit your account details in 2 minutes. We review your account status and verify which task queues or assessments need attention." },
          { title: "We assign domain specialists", body: "We match your account with pre vetted taskers who pass any pending assessments and start executing active tasks daily." },
          { title: "Collect 55% every week", body: "Tasks are completed, quality is audited, and you receive your weekly payout statement with direct settlement every Friday." },
        ]} />
      </Section>

      {/* VERIFIED PAYMENT RECEIPTS & SETTLEMENT LEDGER */}
      <Section id="receipts" eyebrow="Accounting Transparency" title="Verified Settlement Statements &amp; Payout Receipts" intro="Full accounting proof delivered every week. We never touch platform funds directly : payouts go to you, and we invoice for tasker pay and our percentage." backgroundImage="/images/ledger-settlement.jpg">
        <PaymentReceiptLedger />
      </Section>

      {/* WHO IT'S FOR */}
      <Section id="who" eyebrow="Who It Is For" title="Built for Account Owners and Specialist Taskers" backgroundImage="/images/account-owners.jpg">
        <FeatureGrid items={[
          { icon: UserRound, title: "Account Owners", body: <><p>You have an Outlier, Alignerr, Scale AI, or DataAnnotation account that sits idle. We staff it with specialists while you keep 55% of earnings and 100% ownership.</p><p className="mt-3"><Link className="link font-bold text-accent" href="/account-owners">For Account Owners →</Link></p></> },
          { icon: Users, title: "Specialist Taskers", body: <><p>You want to earn from AI evaluation without owning an account. We provide the vetted accounts, task queues, and weekly guaranteed payouts.</p><p className="mt-3"><Link className="link font-bold text-accent" href="/taskers">For Taskers →</Link></p></> },
          { icon: Building2, title: "AI Companies &amp; Labs", body: <><p>Your platform needs reliable, high quality human evaluation throughput. We provide verified domain talent with strict QA and audit logs.</p><p className="mt-3"><Link className="link font-bold text-accent" href="/about#contact">Talk to Us →</Link></p></> },
        ]} />
      </Section>

      {/* RATINGS & HEALTH TELEMETRY */}
      <Section id="ratings" eyebrow="Live Network Status" title="Public Ratings and Account Telemetry" intro="Owners, taskers, and our management are all scored transparently." backgroundImage="/images/fleet-ratings-telemetry.jpg">
        <div className="mb-6"><SampleBadge /></div>
        <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
          <Scorecard audience="agency" />
          <ReviewList limit={2} />
        </div>

        <div className="mt-8">
          <AccountHealthTelemetry />
        </div>

        <p className="mt-6"><Link href="/ratings" className="link font-semibold">See all verified ratings and full historical scorecards →</Link></p>
      </Section>

      {/* SECURITY */}
      <Section id="security" eyebrow="Security" title="Your Credentials Stay Protected" backgroundImage="/images/trust-security.jpg">
        <FeatureGrid cols={4} items={[
          { icon: KeyRound, title: "Telegram Encrypted Chat", body: "Logins are coordinated directly through Telegram end to end encrypted secret chats with verified admins and never shown to taskers." },
          { icon: MonitorSmartphone, title: "Isolated Sessions", body: "Work happens in locked down virtual sessions with clipboard and file transfer isolation." },
          { icon: Video, title: "Recorded Sessions", body: "Every tasker session is logged and audited to guarantee quality and platform compliance." },
          { icon: FileLock2, title: "Full Ownership", body: "You can pause or terminate access at any moment. Your account remains yours legally." },
        ]} />
        <p className="mt-6"><Link href="/trust-safety" className="link font-semibold">See every trust and safety control →</Link></p>
      </Section>

      {/* DAILY DIGEST */}
      <Section
        id="digest"
        eyebrow="Market Intelligence"
        title="AI Training Daily Digest"
        backgroundImage="/images/network-telemetry.jpg"
        intro="Stay ahead with platform policy shifts, urgent compliance updates, and market tasker rate benchmarks delivered directly to your inbox."
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-bold">What you get in your morning briefing:</h3>
            <div className="mt-4">
              <CheckList items={[
                "Daily policy tracker : Terms of Service changes across major AI training platforms",
                "Queue radar : Real time alerts on high paying task batches and active projects",
                "Work availability alerts : Which queues are actively adding contributors right now",
                "Market rate benchmarks : Real earnings data across coding, math, and reasoning",
                "Compliance advisories : Practical guidance to keep accounts in top standing",
              ]} />
            </div>
            <div className="mt-6 rounded-card border border-line bg-surface p-4 text-[0.95rem] text-muted">
              <p className="font-semibold text-ink">Strict Zero Spam Policy</p>
              <p className="mt-1">We respect your attention. Every email includes a one click unsubscribe link, and your address is never sold or shared.</p>
            </div>
          </div>
          <div>
            <DigestForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl"><Accordion items={faq} /></div>
        <div className="mt-8 max-w-3xl"><ComplianceNotice /></div>
      </Section>

      {/* FINAL CTA */}
      <FinalCta
        title="Ready to Put Your Idle Account to Work?"
        body="Submit your account details today. We will review your queue and connect you with a specialist in under 24 hours."
        primary={{ href: "/account-owners#submit", label: "Submit Your Account Now" }}
        secondary={{ href: "/taskers#apply", label: "Join as a Tasker" }}
      />
    </>
  );
}
