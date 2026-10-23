import Link from "next/link";
import {
  Accessibility, Building2, Clock, FileLock2, Keyboard, KeyRound, Mic, MonitorSmartphone, ScrollText,
  Shield, UserRound, Users, Video, Zap,
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { CtaRow, ComplianceNotice, FeatureGrid, FinalCta, Section, Steps, CheckList } from "@/components/ui";
import { ReviewList, SampleBadge, Scorecard, AccountHealthTelemetry } from "@/components/Ratings";
import { money, photos, pricing, site } from "@/config/site";
import { Media } from "@/components/Media";
import { PlatformIllustration } from "@/components/illustrations/Scenes";
import { HeroInteractiveGraphic } from "@/components/illustrations/HeroInteractiveGraphic";
import { DigestForm } from "@/components/forms/DigestForm";
import { LiveNetworkAndTextMessage } from "@/components/LiveNetworkAndTextMessage";
import { PaymentReceiptLedger } from "@/components/PaymentReceiptLedger";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Your AI training account, professionally staffed",
  description: "We audit, onboard, task and QA your AI-training accounts with vetted taskers. You keep ownership. We take a transparent percentage. Only for platforms that allow subcontracting.",
  path: "/",
});

const faq = [
  { q: "Is this allowed on my platform?", a: <p>Only if the platform explicitly allows subcontracting, remote access or agency-managed work. Many AI-training platforms do not allow it. We check the current terms during the audit, and if the platform doesn&apos;t permit it we decline the account and refund the audit fee. <Link className="link" href="/legal/platform-compliance">Read our platform compliance disclaimer</Link>.</p> },
  { q: "Do I still own my account?", a: <p>Yes. The account stays in your name. You can pause or end our work at any time, and we remove every tasker&apos;s access the same day.</p> },
  { q: "Who pays tax on the earnings?", a: <p>You do. The platform pays you, so you remain responsible for platform taxes, reporting and any legal obligations in your country. We send clear monthly invoices that show tasker pay and our fee separately, which helps with your records.</p> },
  { q: "How much will I earn?", a: <p>We can&apos;t promise any amount. Earnings depend on how much work the platform offers, the account&apos;s qualifications and quality scores. The <Link className="link" href="/pricing#calculator">pricing calculator</Link> shows how an amount would be split, not what you will earn.</p> },
  { q: "How are my login details protected?", a: <p>We never ask for passwords on public forms or email. You coordinate directly via Telegram&apos;s end-to-end encrypted chat with our verified administrators. Taskers never see your password — they sign in through a recorded, isolated virtual machine with clipboard and file transfer turned off. <Link className="link" href="/trust-safety">See all security controls</Link>.</p> },
  { q: "I'm a tasker. Do I need my own account?", a: <p>No. We assign you to accounts that match your skills. You work in a secure remote session and we pay you weekly. You never pay to join.</p> },
  { q: "I have a disability or chronic illness. Can I still task?", a: <p>Yes. You can ask for accommodations like extra time, task splitting, screen-reader setup, written-only communication or break reminders. You don&apos;t need to share a diagnosis. <Link className="link" href="/accessibility">See our accessibility options</Link>.</p> },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-32">
        {/* Full-Bleed Remote Working Reality Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-70 dark:opacity-60"
          style={{ backgroundImage: "url('/images/hero-nightshift.jpg')" }}
        />
        {/* Cinematic gradient scrim so text is 100% legible directly over the image */}
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
              Your AI training accounts, <span className="underline decoration-accent decoration-4 underline-offset-8">professionally staffed</span>.
            </h1>

            <p className="max-w-2xl text-lg text-muted sm:text-xl leading-relaxed">
              We vet, onboard, task, and QA across your AI evaluation accounts with verified domain specialists. You retain ownership. We operate with strict, transparent percentage accounting.
            </p>

            <div className="pt-2 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/account-owners#submit" className="btn-accent text-sm uppercase tracking-wider !py-3.5 !px-7 shadow-md">
                Submit Your Account
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
                <span className="text-[#24A1DE]">✈</span> Telegram Hub
              </a>
            </div>

            <div className="pt-4 border-t border-line flex flex-wrap items-center gap-6 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-base">≥30%</span>
                <span>Tasker Pay Floor</span>
              </div>
              <div className="h-4 w-px bg-line" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-base">15%</span>
                <span>Fixed MM Fee</span>
              </div>
              <div className="h-4 w-px bg-line" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-base">4h</span>
                <span>Rush SLA</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <HeroInteractiveGraphic />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section aria-labelledby="hero-panel" className="border-b border-line">
        <div className="container py-10">
          <h2 id="hero-panel" className="text-xl">What you get</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "An audit that tells you exactly what the account needs",
              "Vetted, ID-verified taskers matched to the account",
              "Weekly QA sampling and a monthly scorecard",
              "Line-by-line invoices: tasker pay and our fee, shown separately",
              "A replacement tasker within 5 business days if one isn't working out",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[0.95rem]">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-accent-ink" fill="currentColor"><path d="M8 13.2 4.8 10l-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section id="how" eyebrow="How it works" title="Three steps, no surprises" intro="You stay in control at every step. You can pause or stop at any time." backgroundImage="/images/taskers-review.jpg">
        <Steps steps={[
          { title: "Submit and audit", body: `Tell us about the account. For a one-time ${money(pricing.audit.price)}, we check the platform's rules, the account's status and what work is available.` },
          { title: "Onboarding or tasking", body: "We classify the account as “Needs Onboarding” (qualifications still to finish) or “Needs Tasking” (ready for regular work) and match a vetted tasker." },
          { title: "Work, QA and weekly pay", body: "Taskers work in secure, recorded sessions. We check quality every week, pay taskers every Friday and send you a clear monthly invoice." },
        ]} />
      </Section>

      {/* VERIFIED PAYMENT RECEIPTS & SETTLEMENT LEDGER */}
      <Section id="receipts" eyebrow="Accounting transparency" title="Verified Settlement Statements & Payout Receipts" intro="Full accounting proof delivered every week. We never touch platform funds directly — payouts go to you, and we invoice for tasker pay and our percentage." backgroundImage="/images/ledger-settlement.jpg">
        <PaymentReceiptLedger />
      </Section>

      {/* WHO IT'S FOR */}
      <Section id="who" eyebrow="Who it's for" title="Built for three groups, fair to all of them" backgroundImage="/images/account-owners.jpg">
        <FeatureGrid items={[
          { icon: UserRound, title: "Account owners", body: <><p>You have an AI-training account that sits idle or underused. We staff it properly while you keep ownership.</p><p className="mt-3"><Link className="link" href="/account-owners">For account owners</Link></p></> },
          { icon: Users, title: "Taskers", body: <><p>You want flexible remote work without owning an account. Disabled, neurodivergent, chronically ill and rural workers are welcome — with real accommodations.</p><p className="mt-3"><Link className="link" href="/taskers">For taskers</Link></p></> },
          { icon: Building2, title: "AI companies", body: <><p>Your platform permits managed subcontracting. We add vetted, QA-checked throughput with audit logs and signed data agreements.</p><p className="mt-3"><Link className="link" href="/about#contact">Talk to us</Link></p></> },
        ]} />
      </Section>

      {/* PRICING SNAPSHOT */}
      <Section id="pricing" eyebrow="Pricing snapshot" title="One public price list. No hidden fees." intro={`Percentages are of gross platform earnings on the account. Taskers always receive at least ${pricing.taskerShare}%.`} backgroundImage="/images/hero-nightshift.jpg">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <PriceTile label="Account audit" value={money(pricing.audit.price)} note="One-time, refunded if we decline" />
          <PriceTile label="Onboarding" value={`${pricing.onboarding.percent}%`} note={`of first month, or ${money(pricing.onboarding.flat)} flat — whichever is lower`} />
          <PriceTile label="Tasking fee" value={`${pricing.tasking.percent}%`} note="of task earnings" />
          <PriceTile label="Tasker share" value={`${pricing.taskerShare}%`} note="minimum, paid weekly" />
        </div>
        <p className="mt-6"><Link href="/pricing" className="link font-bold text-accent-ink bg-accent/20 px-3 py-1.5 rounded-lg border border-accent/40 inline-block">See full pricing and the calculator →</Link></p>
      </Section>

      {/* RATINGS PREVIEW & ACCOUNT HEALTH TELEMETRY */}
      <Section id="ratings" eyebrow="Ratings & Fleet Telemetry" title="Everyone rates everyone — in public" intro="Owners, taskers and our agency are all scored on the same six measures. Only people who completed work can leave a review." backgroundImage="/images/fleet-ratings-telemetry.jpg">
        <div className="mb-6"><SampleBadge /></div>
        <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
          <Scorecard audience="agency" />
          <ReviewList limit={2} />
        </div>

        {/* Live Account Volume & Health Subsection + Contact Us */}
        <div className="mt-8">
          <AccountHealthTelemetry />
        </div>

        <p className="mt-6"><Link href="/ratings" className="link font-semibold">See all verified ratings &amp; full historical scorecards →</Link></p>
      </Section>

      {/* AI STUDY & TASK AUTOMATION LAB */}
      <Section 
        id="ai-study" 
        eyebrow="AI Research & Engineering" 
        title="AI Study: We Train Artificial Intelligence to Task on Your Workflows" 
        intro="Where we teach AI models how to execute your complex domain tasks, build automations, generate video pipelines, and optimize advertising benchmarks."
        backgroundImage="/images/ai-study-lab.jpg"
      >
        <FeatureGrid cols={4} items={[
          { icon: Mic, title: "AI Task Training & RLHF", body: "We run specialized prompt calibrations, domain evaluations, and human-in-the-loop task training to automate repetitive account queues." },
          { icon: Keyboard, title: "Custom Workflow Automations", body: "End-to-end task pipelines that ingest client briefs, run self-consistency unit tests, and execute repeatable logic seamlessly." },
          { icon: Video, title: "AI Video Generation", body: "Automated generative video pipelines for training simulations, synthetic dataset creation, multimodal QA, and visual evaluations." },
          { icon: Zap, title: "AI Performance Ads", body: "Algorithmic ad creative generation, copywriting rubrics, and automated campaign asset testing trained on real domain performance data." },
        ]} />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/ai-study#rubric-course" className="btn-accent text-xs uppercase font-bold tracking-wider !py-2.5 !px-5 shadow-sm">
            Enroll in Free Rubric Course →
          </Link>
          <Link href="/ai-study" className="btn-secondary text-xs uppercase font-bold tracking-wider !py-2.5 !px-5">
            Explore All AI Automations
          </Link>
        </div>
      </Section>

      {/* LIVE NETWORK TELEMETRY & DIRECT TEXT DISPATCH */}
      <Section id="network" eyebrow="Real-time operations" title="Live Network Telemetry & Direct Text Dispatch" intro="Explore verified accounts active across regional hubs and text our operations desk directly for queue availability.">
        <LiveNetworkAndTextMessage />
      </Section>

      {/* SECURITY */}
      <Section id="security" eyebrow="Security" title="Your credentials are protected end-to-end" backgroundImage="/images/trust-security.jpg">
        <FeatureGrid cols={4} items={[
          { icon: KeyRound, title: "Telegram encrypted chat", body: "Logins are coordinated directly through Telegram's end-to-end encrypted secret chat with verified admins and never shown to taskers." },
          { icon: MonitorSmartphone, title: "Isolated sessions", body: "Work happens in a locked-down virtual machine. No clipboard, no USB." },
          { icon: Video, title: "Recorded and logged", body: "Sessions are recorded and every access is written to an audit log." },
          { icon: FileLock2, title: "Signed agreements", body: "NDAs for every tasker and data-processing agreements on request." },
        ]} />
        <p className="mt-6"><Link href="/trust-safety" className="link font-semibold">See every trust and safety control</Link></p>
      </Section>

      {/* DAILY DIGEST & NEWS CHANNEL */}
      <Section
        id="digest"
        eyebrow="Daily intelligence"
        title="AI Training Daily Digest & News Channel"
        backgroundImage="/images/network-telemetry.jpg"
        intro="Stay ahead with morning platform policy shifts, urgent compliance updates, subcontracting permission audits, and market tasker rate benchmarks delivered directly to your inbox."
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-bold">What you get in your morning briefing:</h3>
            <div className="mt-4">
              <CheckList items={[
                "Daily policy tracker: Terms of Service changes across major AI-training platforms",
                "Subcontracting radar: Alerts on which platforms permit or restrict agency-managed work",
                "Work availability & qualification spikes: Which queues are actively adding contributors",
                "Market rate & payout benchmarks: Real earnings data across domains (STEM, coding, RLHF)",
                "Compliance advisories: Actionable guidance to keep accounts in good standing",
              ]} />
            </div>
            <div className="mt-6 rounded-card border border-line bg-surface p-4 text-[0.95rem] text-muted">
              <p className="font-semibold text-ink">Strict Zero-Spam Policy</p>
              <p className="mt-1">We respect your attention. Every email includes a one-click unsubscribe link, and your address is never sold or shared.</p>
            </div>
          </div>
          <div>
            <DigestForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Common questions">
        <div className="max-w-3xl"><Accordion items={faq} /></div>
        <div className="mt-8 max-w-3xl"><ComplianceNotice /></div>
      </Section>

      <FinalCta
        title="Ready to put your account to work — properly?"
        body="Start with an audit. If your platform doesn't allow managed work, we'll tell you plainly and refund the fee."
        primary={{ href: "/account-owners#submit", label: "Submit your account" }}
        secondary={{ href: "/taskers#apply", label: "Join as a tasker" }}
      />
    </>
  );
}

function PriceTile({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="card">
      <p className="text-muted">{label}</p>
      <p className="mt-1 text-4xl font-bold text-primary">{value}</p>
      <p className="mt-2 text-[0.95rem] text-muted">{note}</p>
    </div>
  );
}
