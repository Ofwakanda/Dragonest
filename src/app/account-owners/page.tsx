import Link from "next/link";
import { ClipboardCheck, FileSearch, GraduationCap, ListChecks, RefreshCcw, Scale } from "lucide-react";
import { AccountSubmitForm } from "@/components/forms/AccountSubmitForm";
import { DashboardPreview } from "@/components/DashboardPreview";
import { CheckList, ComplianceNotice, FeatureGrid, FinalCta, Note, PageHero, Section } from "@/components/ui";
import { PriceTable } from "@/components/PriceTable";
import { money, photos, pricing } from "@/config/site";
import { Media } from "@/components/Media";
import { OfficeScene } from "@/components/illustrations/Scenes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "For account owners",
  description: "Submit your AI-training account for a compliance audit. We classify it as Needs Onboarding or Needs Tasking, staff it with vetted taskers, and send transparent invoices. You keep ownership.",
  path: "/account-owners",
});

export default function AccountOwners() {
  return (
    <>
      <PageHero 
        eyebrow="For account owners" 
        title="Keep your account. Let a vetted team do the work."
        backgroundImage="/images/account-owners.jpg"
        subhead="If your AI-training account sits idle or underused, we audit it, staff it with qualified taskers and check the quality every week. It stays yours, and every fee is visible."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#submit" className="btn-accent">Submit your account</Link>
          <Link href="/pricing" className="btn-secondary">See pricing</Link>
        </div>
      </PageHero>

      <div className="container mt-10"><ComplianceNotice /></div>

      <Section id="audit" eyebrow="Step 1" title="The account audit" intro={`A one-time ${money(pricing.audit.price)} review, finished within 3 business days. You get a written report whether or not we take the account on.`}>
        <FeatureGrid items={[
          { icon: Scale, title: "Platform rules", body: "We read the platform's current terms, contributor agreement and help pages to confirm that subcontracting, remote access or agency-managed work is explicitly allowed — and for which countries." },
          { icon: FileSearch, title: "Account health", body: "Qualifications, quality scores, open assessments, project access, payment setup and whether two-factor sign-in is on." },
          { icon: ListChecks, title: "Work available", body: "Which projects and task types the account can reach, and roughly how steady that work has been. This is an estimate, not a promise." },
        ]} />
        <div className="mt-6"><Note title="If the platform doesn't allow it">We stop there. You get a short written explanation and a full refund of the audit fee. We never work around a platform&apos;s rules.</Note></div>
      </Section>

      <Section id="classification" tone="tint" eyebrow="Step 2" title="Needs Onboarding or Needs Tasking?" intro="Every account we accept gets one of two labels. The label decides the plan and the price.">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="card border-t-4 border-t-primary">
            <GraduationCap aria-hidden="true" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 text-2xl font-bold">Needs Onboarding</h3>
            <p className="mt-2 text-muted">The account isn&apos;t ready for regular work yet.</p>
            <div className="mt-4"><CheckList items={["Unfinished assessments or training modules", "Qualification tests not yet passed", "Profile, skills or payment setup incomplete"]} /></div>
            <p className="mt-3 text-xs text-muted">
              Stuck on a tricky benchmark? Our <Link href="/taskers#assessment-takers" className="link font-bold text-accent">Certified Assessment Takers</Link> can step in, tackle the assessment, and unlock your earning queue.
            </p>
            <p className="mt-4 font-semibold">Onboarding package: {pricing.onboarding.percent}% of the first month&apos;s earnings or {money(pricing.onboarding.flat)} flat, whichever is lower.</p>
          </article>
          <article className="card border-t-4 border-t-accent">
            <ClipboardCheck aria-hidden="true" className="h-8 w-8 text-accent-ink" />
            <h3 className="mt-3 text-2xl">Needs Tasking</h3>
            <p className="mt-2 text-muted">The account is qualified but underused.</p>
            <div className="mt-4"><CheckList items={["Has project access and can receive tasks", "Needs steady, skilled hours", "Would benefit from QA to protect its quality score"]} /></div>
            <p className="mt-4 font-semibold">Tasking: {pricing.tasking.percent}% of task earnings to us; at least {pricing.taskerShare}% to the tasker.</p>
          </article>
        </div>
      </Section>

      <Section id="dashboard" eyebrow="Step 3" title="See everything in your dashboard" intro="Earnings, tasker hours, QA scores and invoices in one place. You can pause work or remove a tasker from here at any time.">
        <DashboardPreview />
      </Section>

      <Section id="pricing" tone="tint" eyebrow="Pricing" title="What it costs" intro="Percentages are of gross platform earnings on the account in that month.">
        <PriceTable />
        <p className="mt-6"><Link className="link" href="/pricing#calculator">Try the pricing calculator</Link></p>
      </Section>

      <Section id="compliance" eyebrow="Compliance and security" title="What we do, and what stays with you">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl">We handle</h3>
            <div className="mt-4"><CheckList items={[
              "Tasker identity checks, skills tests and NDAs",
              "Paying taskers weekly, including their accommodations",
              "Telegram encrypted credential coordination and 2FA enforcement",
              "Recorded, isolated work sessions with audit logs",
              "Quality checks and handling disputes",
              "Stopping work if a platform changes its rules",
            ]} /></div>
          </div>
          <div className="card">
            <h3 className="text-xl">You keep</h3>
            <div className="mt-4"><CheckList items={[
              "Ownership of the account",
              "Responsibility for platform taxes and reporting",
              "Responsibility for legal compliance in your country",
              "The right to pause or end service at any time",
              "Approval of any new tasker before they start",
            ]} /></div>
          </div>
        </div>
        <p className="mt-6"><Link className="link" href="/trust-safety">See all trust and safety controls</Link></p>
      </Section>

      <Section id="guarantee" tone="tint" eyebrow="Replacement guarantee" title="If a tasker isn't a good fit, we replace them">
        <div className="card flex flex-col gap-5 md:flex-row md:items-start">
          <RefreshCcw aria-hidden="true" className="h-10 w-10 shrink-0 text-accent-ink" />
          <div>
            <p className="text-lg">If a tasker&apos;s QA score falls below our standard, or you have a reasonable concern, we assign a replacement within <strong>{pricing.replacementDays} business days</strong> at no extra cost.</p>
            <p className="mt-3 text-muted">While we find a replacement, we don&apos;t charge the tasking fee for hours that aren&apos;t worked. If a tasker&apos;s mistake causes a platform quality penalty, we credit that month&apos;s fee. We can&apos;t reverse platform decisions, but we&apos;ll give you our session records to support any appeal.</p>
            <p className="mt-3"><Link className="link" href="/pricing#refunds">Read the refund and replacement policy</Link></p>
          </div>
        </div>
      </Section>

      <Section id="submit" title="Submit your account" intro="We'll reply within 2 business days with next steps.">
        <div className="max-w-3xl"><AccountSubmitForm /></div>
      </Section>

      <FinalCta title="Questions before you submit?" body="Talk to a person. We'll tell you honestly whether your platform is likely to qualify."
        primary={{ href: "#submit", label: "Submit your account" }} secondary={{ href: "/about#contact", label: "Contact us" }} />
    </>
  );
}
