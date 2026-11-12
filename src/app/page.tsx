import Link from "next/link";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { Section, FinalCta } from "@/components/ui";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PayoutStatementCard } from "@/components/PayoutStatementCard";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "MIDDLEMEN : Your AI Account is Worth Money. Let Us Work It For You.",
  description:
    "Do you have an account on Outlier, Alignerr, Scale AI or DataAnnotation that is sitting idle? We pair it with trained specialists. You keep 55% of what it earns.",
  path: "/",
});

const faq = [
  {
    q: "Is it really free to start?",
    a: <p>Yes. Checking your account, applying, training and testing cost nothing. Our share comes out of what your account earns.</p>,
  },
  {
    q: "Do I need a degree or experience?",
    a: <p>Account owners do not need any. Taskers need different skills depending on the track. Some need coding or maths, others just good English or your own language.</p>,
  },
  {
    q: "How much can I earn?",
    a: <p>It depends on the platform, the project and how much work is available. The pay ranges we show are typical, not promised. The calculator gives you an estimate.</p>,
  },
  {
    q: "When do I get paid?",
    a: <p>Every Friday, with a statement that shows exactly where the money came from.</p>,
  },
  {
    q: "Do you need my password?",
    a: <p>No. We never ask for a password on a web form. Access is set up in an encrypted chat with a verified admin.</p>,
  },
  {
    q: "How do I know I can trust you?",
    a: <p>You can see your dashboard, your weekly statements and your session records. Our ratings are public and our check is free. You can also reach us at {site.email.support} and {site.legalEntity}.</p>,
  },
  {
    q: "What if something goes wrong with my account?",
    a: <p>Tell us straight away on Telegram. We will look into what happened and explain it clearly.</p>,
  },
  {
    q: "Which countries do you work with?",
    a: <p>Most countries. Payout options depend on where you live: direct bank transfer, wire, SEPA, and local payout channels.</p>,
  },
  {
    q: "Can I stop any time?",
    a: <p>Yes. You can pause or stop managed work at any time. We settle what was earned up to that point and send your final statement.</p>,
  },
];

export default function Home() {
  return (
    <>
      {/* 1. TOP SECTION (HERO) */}
      <section className="relative border-b border-line bg-bg py-16 sm:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded border border-line bg-surface px-3 py-1 text-xs font-mono font-medium text-muted">
                <span>FOR ACCOUNT OWNERS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.1]">
                Your AI account is worth money. Let us work it for you.
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-muted leading-relaxed">
                Do you have an account on Outlier, Alignerr, Scale AI or DataAnnotation that is sitting idle? We pair it with trained specialists who do the work every day. You keep 55% of what it earns, and you do not have to do any tasks yourself.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link href="/account-owners#submit" className="btn-accent text-center">
                    Connect my account
                  </Link>
                  <Link
                    href="#how"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
                  >
                    See how I get paid <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-xs text-muted">Checking your account is free. No obligation.</p>
              </div>

              {/* Clean proof numbers strip */}
              <div className="pt-6 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <div className="text-lg font-semibold text-ink">55%</div>
                  <div className="text-muted">You keep</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">30%+</div>
                  <div className="text-muted">Specialist floor</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">15%</div>
                  <div className="text-muted">Runs the service</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-ink">Every Fri</div>
                  <div className="text-muted">Payout cadence</div>
                </div>
              </div>
            </div>

            {/* Dashboard as the Main Hero Visual */}
            <div className="relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)]">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <Section
        id="how"
        title="How you start earning"
        intro="You do not need to do the work. We handle that part and you collect your weekly share."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                1
              </div>
              <h3 className="text-lg font-semibold text-ink">Tell us about your account</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Share which platform it is on and whether it is active or stuck at a test. It takes about two minutes. We never ask for your password on this site.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                2
              </div>
              <h3 className="text-lg font-semibold text-ink">We match you with a specialist</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                A trained person with the right skills works your queue every day. If your account is stuck at an entry test, our qualification specialists help with that first.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                3
              </div>
              <h3 className="text-lg font-semibold text-ink">You get paid every week</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Earnings go straight to your bank or payout channel. Every Friday you get a statement showing what came in, what the specialist earned, and our fee.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. EXAMPLE MONTH */}
      <Section
        id="example-month"
        tone="tint"
        title="What a month can look like"
        intro="Here is a simple example. Say your account earns $2,000 in a month."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-center">
          <div>
            <PayoutStatementCard />
          </div>

          <div className="space-y-4">
            <div className="card p-6 space-y-3 font-mono text-sm">
              <div className="flex justify-between py-1 border-b border-line">
                <span className="text-muted">Your account earns:</span>
                <span className="font-semibold text-ink">$2,000</span>
              </div>
              <div className="flex justify-between py-1 border-b border-line">
                <span className="text-muted">Specialist and MIDDLEMEN:</span>
                <span className="font-semibold text-ink">$900 <span className="text-xs text-muted font-normal">(30% to specialist, 15% to service)</span></span>
              </div>
              <div className="flex justify-between py-2 text-base">
                <span className="font-bold text-ink">You keep (55%):</span>
                <span className="font-bold text-ink">$1,100</span>
              </div>
            </div>
            <p className="text-xs text-muted">
              This is an example, not a promise. What you really earn depends on how much work your platform gives out.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. DASHBOARD SECTION */}
      <Section
        id="dashboard-section"
        title="See everything in one place"
        intro="Your dashboard shows what your account earned, how many hours the specialist worked, your quality score, and every weekly payout."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl font-mono text-xs text-muted mb-8">
          <div className="card">Account earnings</div>
          <div className="card">Hours worked</div>
          <div className="card">Quality score</div>
          <div className="card">Paid to the specialist</div>
        </div>
        <p className="text-xs text-muted">Invoices &bull; Show as table</p>
      </Section>

      {/* 5. CONTACT STRIP */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto rounded-card border border-line bg-bg p-6 sm:p-8">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-ink">Not sure yet? Ask us first.</h3>
              <p className="text-sm text-muted">
                Chat with us on Telegram. A real person replies. Checking your account is free and there is no pressure.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={site.telegram.hub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-xs uppercase tracking-wider font-semibold !py-2.5 !px-5 whitespace-nowrap text-center flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
              >
                <Send className="h-3.5 w-3.5" /> Chat on Telegram
              </a>
              <Link
                href="/account-owners#submit"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2"
              >
                Start my free check &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <div className="max-w-3xl">
          <Accordion items={faq} />
        </div>
      </Section>

      {/* 7. CLOSING SECTION */}
      <FinalCta
        title="Ready when you are."
        body="Send your details and we will tell you what your account can do. It is free and takes about two minutes."
        primary={{ href: "/account-owners#submit", label: "Start my free check" }}
        secondary={{ href: "/taskers", label: "Looking to work as a tasker?" }}
      />
    </>
  );
}
