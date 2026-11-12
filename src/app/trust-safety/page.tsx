import Link from "next/link";
import Image from "next/image";
import { Send, ArrowRight, ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import { photos, site } from "@/config/site";
import { SecureSessionDiagram } from "@/components/illustrations/Scenes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trust & Safety : We Look After Your Account and Your Pay",
  description: "Account owners trust us with access. Taskers trust us with their identity and their pay. Here is exactly how we protect both.",
  path: "/trust-safety",
});

export default function TrustSafety() {
  return (
    <>
      {/* 1. TOP SECTION */}
      <PageHero 
        eyebrow="TRUST &amp; SAFETY" 
        title="We look after your account and your pay."
        subhead="Account owners trust us with access. Taskers trust us with their identity and their pay. Here is exactly how we protect both."
        media={
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              src={photos.trust.src!}
              alt={photos.trust.alt!}
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Link href="#session" className="btn-accent">See the security controls</Link>
          <a href={site.telegram.hub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
            Ask us on Telegram &rarr;
          </a>
        </div>
      </PageHero>

      {/* 2. HOW A WORK SESSION IS PROTECTED */}
      <Section
        id="session"
        title="How a work session is protected"
        intro="Your login is set up in an encrypted chat on Telegram with a verified admin. After that, the tasker only ever sees the screen of a locked-down, recorded computer. They never see your password."
      >
        <div className="card p-6 sm:p-8">
          <SecureSessionDiagram className="h-auto w-full" />
        </div>

        {/* LOCKED-DOWN COMPUTER RULES */}
        <div className="mt-8 rounded-card border border-line bg-surface p-6">
          <h3 className="text-base font-semibold text-ink mb-3">Locked-down computer rules:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-mono text-muted">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span>No copying and pasting</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span>No USB</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span>No file transfers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span>No printing</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. FOR ACCOUNT OWNERS & TASKERS */}
      <Section id="roles" tone="tint" title="Built for transparency on both sides">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 sm:p-8 space-y-3">
            <span className="badge">For account owners</span>
            <h3 className="text-xl font-semibold text-ink">You can see everything.</h3>
            <p className="text-sm text-muted leading-relaxed">
              Every session is recorded. Your dashboard shows earnings and hours, and every Friday you get a full statement.
            </p>
          </div>

          <div className="card p-6 sm:p-8 space-y-3">
            <span className="badge">For taskers</span>
            <h3 className="text-xl font-semibold text-ink">Your details stay private.</h3>
            <p className="text-sm text-muted leading-relaxed">
              Ratings use an anonymous ID, and your pay is shown clearly in your weekly statement.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. THREE SIMPLE RULES */}
      <Section id="rules" title="Three simple rules">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                1
              </div>
              <h3 className="text-base font-semibold text-ink">No passwords on web forms</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We never ask for your password on a web form. Setup happens in an encrypted chat with a verified admin.
              </p>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                2
              </div>
              <h3 className="text-base font-semibold text-ink">Free to join and test</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Applying, training and testing are free. If anyone asks you to pay to join, it is not us.
              </p>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                3
              </div>
              <h3 className="text-base font-semibold text-ink">Official Telegram only</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Only trust our official Telegram: <strong className="text-ink">t.me/middlemenhub</strong>. If a message comes from anywhere else, ignore it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. CLOSING */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-ink">Questions about safety?</h2>
          <p className="text-base text-muted">
            Ask us anything. We would rather you ask than guess.
          </p>
          <div className="pt-2">
            <a
              href={site.telegram.hub}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>Chat on Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
