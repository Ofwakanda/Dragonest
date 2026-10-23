import Link from "next/link";
import { PriceTable } from "@/components/PriceTable";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ContactForm } from "@/components/forms/ContactForm";
import { Accordion } from "@/components/Accordion";
import { ComplianceNotice, PageHero, Section } from "@/components/ui";
import { money, pricing } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Pricing",
  description: `Public price list: ${money(pricing.audit.price)} audit, ${pricing.tasking.percent}% tasking fee, at least ${pricing.taskerShare}% to taskers, optional QA and rush add-ons. Try the calculator.`,
  path: "/pricing",
});

export default function Pricing() {
  return (
    <>
      <PageHero 
        eyebrow="Pricing" 
        title="A public price list, with every percentage shown"
        backgroundImage="/images/hero-nightshift.jpg"
        subhead={`We take a transparent percentage of what the account earns. Taskers always receive at least ${pricing.taskerShare}%. There are no setup fees, no hidden charges and nothing to pay until the audit.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#quote" className="btn-accent">Get a quote</Link>
          <Link href="#calculator" className="btn-secondary">Use the calculator</Link>
        </div>
      </PageHero>

      <Section id="pricelist" title="Price list" intro="Percentages are of gross platform earnings on the account for that month.">
        <PriceTable />
      </Section>

      <Section id="split" tone="tint" title="Where each dollar goes" intro="A clear worked example on a $3,000 monthly volume:" backgroundImage="/images/ledger-settlement.jpg">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="card border-2 border-line-strong">
            <span className="eyebrow">Tasker Receives</span>
            <p className="mt-1 font-mono text-3xl font-bold text-ink">$900</p>
            <p className="mt-1 text-sm text-muted">30% minimum guaranteed share</p>
          </div>
          <div className="card border-2 border-line-strong">
            <span className="eyebrow">Middlemen Fee</span>
            <p className="mt-1 font-mono text-3xl font-bold text-ink">$450</p>
            <p className="mt-1 text-sm text-muted">15% staffing, QA &amp; management</p>
          </div>
          <div className="card border-2 border-line-strong bg-surface">
            <span className="eyebrow">You Keep</span>
            <p className="mt-1 font-mono text-3xl font-bold text-ink">$1,650</p>
            <p className="mt-1 text-sm text-muted">55% net share to account owner</p>
          </div>
        </div>

        <div aria-hidden="true" className="flex h-12 overflow-hidden rounded-card text-sm font-bold border border-line-strong">
          <div className="flex items-center justify-center bg-primary text-on-primary" style={{ width: `${pricing.taskerShare}%` }}>Tasker {pricing.taskerShare}%</div>
          <div className="flex items-center justify-center bg-muted text-bg" style={{ width: `${pricing.tasking.percent}%` }}>MM {pricing.tasking.percent}%</div>
          <div className="flex flex-1 items-center justify-center bg-surface-2 text-ink">Owner {100 - pricing.taskerShare - pricing.tasking.percent}%</div>
        </div>
        <p className="mt-4 text-sm text-muted">
          <span className="sr-only">Split of each dollar: </span>
          Example based on standard tasking with no optional add-ons. QA (+5%) and rush (+5%) options adjust the split accordingly.
        </p>
      </Section>

      <Section id="calculator" title="Pricing calculator"><PricingCalculator /></Section>

      <Section id="refunds" tone="tint" title="Refund and replacement policy">
        <div className="max-w-3xl">
          <Accordion items={[
            { q: "When is the audit fee refunded?", a: <p>In full if we decline the account for any reason, including when the platform doesn&apos;t allow managed work. Also in full if we don&apos;t deliver the audit report within 3 business days.</p> },
            { q: "Can I get a refund on the onboarding package?", a: <p>If we don&apos;t finish the agreed onboarding steps within the timeline in your plan, you can ask for a full refund within {pricing.refundWindowDays} days of the deadline. If the platform removes a qualification path mid-way, we refund the unused portion.</p> },
            { q: "What if I'm unhappy with a tasker?", a: <p>We assign a replacement within {pricing.replacementDays} business days at no extra cost. We don&apos;t charge the tasking fee for hours not worked during the switch.</p> },
            { q: "What if a tasker's mistake causes a quality penalty?", a: <p>We credit that month&apos;s tasking fee and share session records to support your appeal to the platform. We can&apos;t guarantee a platform will reverse its decision.</p> },
            { q: "Can I cancel?", a: <p>Yes, any time, with no exit fee. We remove all tasker access the same day and send a final invoice for work already completed.</p> },
            { q: "Is there a minimum?", a: <p>Ongoing tasking needs at least {money(pricing.minimumMonthly)} of available work per month. If work drops below that, we pause the account and tell you — we don&apos;t bill a shortfall.</p> },
          ]} />
        </div>
      </Section>

      <Section id="quote" title="Get a quote" intro="Running several accounts, or represent a platform? Tell us what you need and we'll send a written quote.">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm defaultTopic="quote" />
          <div><ComplianceNotice /></div>
        </div>
      </Section>
    </>
  );
}
