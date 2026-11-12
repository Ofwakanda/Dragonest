import Link from "next/link";
import Image from "next/image";
import { PricingCalculator } from "@/components/PricingCalculator";
import { PageHero, Section } from "@/components/ui";
import { photos, pricing } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing : Simple Pricing. No Hidden Fees.",
  description: "You keep 55% of what your account earns. The specialist who does the work gets at least 30%. The last 15% pays for staff, security and weekly quality checks.",
  path: "/pricing",
});

export default function Pricing() {
  return (
    <>
      {/* 1. TOP SECTION */}
      <PageHero 
        eyebrow="PRICING" 
        title="Simple pricing. No hidden fees."
        subhead="You keep 55% of what your account earns. The specialist who does the work gets at least 30%. The last 15% pays for staff, security and weekly quality checks."
        media={
          <div className="relative aspect-[16/9] w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              src={photos.pricing.src!}
              alt={photos.pricing.alt!}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/account-owners#submit" className="btn-accent">Submit my account</Link>
          <a href="#calculator" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
            Try the calculator &rarr;
          </a>
        </div>
      </PageHero>

      {/* 2. THE SPLIT */}
      <Section id="split" tone="tint" title="The split" intro="Clear, predictable distribution on all account earnings:">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="card bg-surface-2 border-line-strong p-6">
            <span className="text-xs font-mono font-semibold text-muted uppercase">You (account owner)</span>
            <p className="mt-2 font-mono text-4xl font-bold text-ink">55%</p>
            <p className="mt-2 text-sm text-muted">Direct weekly payout to you</p>
          </div>

          <div className="card p-6">
            <span className="text-xs font-mono font-semibold text-muted uppercase">Specialist</span>
            <p className="mt-2 font-mono text-4xl font-semibold text-ink">at least 30%</p>
            <p className="mt-2 text-sm text-muted">Guaranteed pay floor for the worker</p>
          </div>

          <div className="card p-6">
            <span className="text-xs font-mono font-semibold text-muted uppercase">MIDDLEMEN</span>
            <p className="mt-2 font-mono text-4xl font-semibold text-ink">15%</p>
            <p className="mt-2 text-sm text-muted">Pays for staff, security &amp; QA checks</p>
          </div>
        </div>

        <div aria-hidden="true" className="flex h-10 overflow-hidden rounded border border-line text-xs font-semibold">
          <div className="flex flex-1 items-center justify-center bg-ink text-bg font-semibold">Owner 55%</div>
          <div className="flex items-center justify-center bg-surface-2 text-ink border-l border-line" style={{ width: `${pricing.taskerShare}%` }}>Specialist 30%</div>
          <div className="flex items-center justify-center bg-surface text-muted border-l border-line" style={{ width: `${pricing.tasking.percent}%` }}>MM 15%</div>
        </div>

        <p className="mt-4 text-sm text-muted">
          Every Friday you get a statement that shows each part, so you can see exactly where the money went.
        </p>
      </Section>

      {/* 3. CALCULATOR */}
      <Section id="calculator" title="Calculator" intro="Use this simple calculator to estimate what your account could look like:">
        <PricingCalculator />
      </Section>

      {/* 4. CLOSING */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-ink">Want to see your numbers?</h2>
          <p className="text-base text-muted">
            Start a free check and we will walk you through what your account could look like.
          </p>
          <div className="pt-2">
            <Link href="/account-owners#submit" className="btn-accent inline-flex">
              Start my free check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
