import Link from "next/link";
import Image from "next/image";
import { Send, ArrowRight, CheckCircle2, GraduationCap, ClipboardCheck } from "lucide-react";
import { AccountSubmitForm } from "@/components/forms/AccountSubmitForm";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Section, PageHero } from "@/components/ui";
import { photos, site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "For Account Owners : Your AI Account is Worth Money",
  description: "Do you have an account on Outlier, Alignerr, Scale AI or DataAnnotation that is sitting idle? We pair it with trained specialists. You keep 55% of what it earns.",
  path: "/account-owners",
});

export default function AccountOwners() {
  return (
    <>
      {/* 1. TOP SECTION */}
      <PageHero 
        eyebrow="FOR ACCOUNT OWNERS" 
        title="Your AI account is worth money. Let us work it for you."
        subhead="Do you have an account on Outlier, Alignerr, Scale AI or DataAnnotation that is sitting idle? We pair it with trained specialists who do the work every day. You keep 55% of what it earns, and you do not have to do any tasks yourself."
        media={
          <div className="relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              src={photos.accountOwners.src!}
              alt={photos.accountOwners.alt!}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="#submit" className="btn-accent text-center">
              Connect my account
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
            >
              See how I get paid <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-muted">Checking your account is free. No obligation.</p>
        </div>
      </PageHero>

      {/* 2. HOW IT WORKS */}
      <Section
        id="how-it-works"
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
        <div className="max-w-2xl space-y-4">
          <div className="card p-6 space-y-3 font-mono text-sm">
            <div className="flex justify-between py-1 border-b border-line">
              <span className="text-muted">Your account earns:</span>
              <span className="font-semibold text-ink">$2,000</span>
            </div>
            <div className="flex justify-between py-1 border-b border-line">
              <span className="text-muted">Specialist and MIDDLEMEN:</span>
              <span className="font-semibold text-ink">$900 <span className="text-xs text-muted font-normal">(30% to the specialist, 15% to run the service)</span></span>
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
      </Section>

      {/* 4. PICK YOUR PATH */}
      <Section
        id="pick-your-path"
        title="What does your account need?"
        intro="Some accounts are brand new. Some are active and just need someone to do the work. We have a simple path for each."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* OPTION 1 */}
          <div className="card flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge">Option 1</span>
                <GraduationCap className="h-5 w-5 text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Get my account unlocked</h3>
              <p className="text-sm text-muted leading-relaxed">
                Stuck at an entry test? Our specialists help you get through qualification so your queue can open up.
              </p>
              <ul className="space-y-2 pt-2 border-t border-line text-sm text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Help with coding, maths and reasoning tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Clear steps from start to finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Usually done in under 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>No upfront cost. We are paid only from the account&apos;s earnings.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center">
                Unlock my account
              </Link>
            </div>
          </div>

          {/* OPTION 2 */}
          <div className="card flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge">Option 2</span>
                <ClipboardCheck className="h-5 w-5 text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Have it worked for me every day</h3>
              <p className="text-sm text-muted leading-relaxed">
                Your account is already active and you would rather not do the tasks yourself.
              </p>
              <ul className="space-y-2 pt-2 border-t border-line text-sm text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>A specialist is matched to your project queue</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Daily work with quality checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Weekly payouts straight to you</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>You keep 55%, with a clear statement every Friday</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-line">
              <Link href="#submit" className="btn-accent w-full text-center">
                Connect my account
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. DASHBOARD */}
      <Section
        id="dashboard"
        tone="tint"
        title="See everything in one place"
        intro="Your dashboard shows what your account earned, how many hours the specialist worked, your quality score, and every weekly payout."
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
          <DashboardPreview />
        </div>
      </Section>

      {/* 6. CONTACT STRIP */}
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
                href="#submit"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2"
              >
                Start my free check &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING / INTAKE FORM */}
      <Section
        id="submit"
        title="Ready when you are."
        intro="Send your details and we will tell you what your account can do. It is free and takes about two minutes."
      >
        <div className="max-w-2xl mx-auto">
          <AccountSubmitForm />
        </div>
      </Section>
    </>
  );
}
