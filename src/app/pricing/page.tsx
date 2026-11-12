import Link from "next/link";
import { PriceTable } from "@/components/PriceTable";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ContactForm } from "@/components/forms/ContactForm";
import { Accordion } from "@/components/Accordion";
import { ComplianceNotice, PageHero, Section } from "@/components/ui";
import { money, pricing } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing : Transparent 55% Owner Split and Zero Hidden Fees",
  description: "Account owners keep 55% of all earnings. Taskers receive 30% guaranteed pay. Middlemen takes 15% for QA, staffing, and management. Zero upfront costs.",
  path: "/pricing",
});

export default function Pricing() {
  return (
    <>
      <PageHero 
        eyebrow="Pricing &amp; Revenue Splits" 
        title="Clear Payout Splits : No Hidden Fees Ever"
        backgroundImage="/images/hero-nightshift.jpg"
        subhead="We operate with complete financial transparency. You keep 55% of gross earnings. Specialist taskers receive at least 30%. We take a 15% operational fee for staffing, security, and weekly quality assurance."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/account-owners#submit" className="btn-accent">Submit Your Account</Link>
          <Link href="#calculator" className="btn-secondary">Try the Calculator</Link>
        </div>
      </PageHero>

      {/* THREE PILLAR SPLIT */}
      <Section id="split" tone="tint" title="Where Each Dollar Goes" intro="A clear worked example on a $3,000 monthly queue volume:" backgroundImage="/images/ledger-settlement.jpg">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="card border-2 border-line-strong">
            <span className="eyebrow">Tasker Receives</span>
            <p className="mt-1 font-mono text-3xl font-bold text-ink">$900</p>
            <p className="mt-1 text-sm text-muted">30% minimum guaranteed specialist share</p>
          </div>
          <div className="card border-2 border-line-strong">
            <span className="eyebrow">Middlemen Fee</span>
            <p className="mt-1 font-mono text-3xl font-bold text-ink">$450</p>
            <p className="mt-1 text-sm text-muted">15% staffing, QA reviews and management</p>
          </div>
          <div className="card border-2 border-accent bg-accent/10">
            <span className="eyebrow text-accent font-bold">You Keep (Owner)</span>
            <p className="mt-1 font-mono text-3xl font-bold text-accent">$1,650</p>
            <p className="mt-1 text-sm text-accent font-medium">55% net share to account owner</p>
          </div>
        </div>

        <div aria-hidden="true" className="flex h-12 overflow-hidden rounded-card text-sm font-bold border border-line-strong">
          <div className="flex items-center justify-center bg-primary text-on-primary" style={{ width: `${pricing.taskerShare}%` }}>Tasker {pricing.taskerShare}%</div>
          <div className="flex items-center justify-center bg-muted text-bg" style={{ width: `${pricing.tasking.percent}%` }}>MM {pricing.tasking.percent}%</div>
          <div className="flex flex-1 items-center justify-center bg-accent text-slate-950 font-black">Owner 55%</div>
        </div>
        <p className="mt-4 text-sm text-muted">
          Payouts are confirmed every week on Friday with line by line accounting statements delivered directly to you.
        </p>
      </Section>

      {/* CALCULATOR */}
      <Section id="calculator" title="Interactive Earnings Calculator">
        <PricingCalculator />
      </Section>

      {/* PRICE LIST TABLE */}
      <Section id="pricelist" title="Complete Price Schedule" intro="Percentages are of gross platform earnings on the account for that month.">
        <PriceTable />
      </Section>

      {/* REFUND & REPLACEMENT POLICY */}
      <Section id="refunds" tone="tint" title="Refund and Replacement Policy">
        <div className="max-w-3xl">
          <Accordion items={[
            { q: "Are there any audit fees or upfront setup costs?", a: <p>No. Account onboarding, queue review, and specialist matching are 100% free. We never charge upfront audit fees. We only earn our 15% share when your account actively generates client payouts.</p> },
            { q: "Can I get a refund on an assessment package?", a: <p>If our specialists do not pass the agreed onboarding or qualification test within the agreed timeline, you receive a complete refund. No questions asked.</p> },
            { q: "What if I am unhappy with a tasker?", a: <p>We assign a replacement specialist within 3 business days at zero extra cost. We do not bill the tasking fee for unworked hours during the transition.</p> },
            { q: "Can I cancel at any time?", a: <p>Yes. You can cancel at any time with no exit fee. We remove tasker access the same day and send a final statement for work already completed.</p> },
          ]} />
        </div>
      </Section>

      {/* QUOTE SECTION */}
      <Section id="quote" title="Get a Custom Quote" intro="Managing several accounts or looking for dedicated enterprise queue capacity? Send us an inquiry.">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm defaultTopic="quote" />
          <div><ComplianceNotice /></div>
        </div>
      </Section>
    </>
  );
}
