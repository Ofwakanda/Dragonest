import Link from "next/link";
import { ReviewList, SampleBadge, Scorecard, AccountHealthTelemetry } from "@/components/Ratings";
import { METRICS } from "@/data/sample";
import { PageHero, Section, Steps } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ratings",
  description: "Public scorecards for the agency, account owners and taskers on six measures: quality, reliability, communication, compliance, pay timeliness and accessibility. Verified reviews only.",
  path: "/ratings",
});

const definitions: Record<string, string> = {
  Quality: "How well the work meets the platform's guidelines, based on QA samples and platform feedback.",
  Reliability: "Showing up for agreed hours, meeting deadlines and giving notice of changes.",
  Communication: "Clear, respectful and timely replies.",
  Compliance: "Following platform rules, session rules and security policies.",
  "Pay timeliness": "Paying, or being paid, on the agreed date.",
  Accessibility: "Providing or respecting accommodations without friction.",
};

export default function Ratings() {
  return (
    <>
      <PageHero 
        eyebrow="Ratings" 
        title="Public ratings, both ways"
        backgroundImage="/images/fleet-ratings-telemetry.jpg"
        subhead="Account owners rate taskers and us. Taskers rate owners and us. Everyone uses the same six measures, and only people who completed work can leave a review."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#scorecards" className="btn-primary">See scorecards</Link>
          <Link href="#account-health" className="btn-secondary">Account Volume &amp; Health</Link>
        </div>
      </PageHero>

      <Section id="scorecards" title="Scorecards" backgroundImage="/images/taskers-review.jpg">
        <div className="mb-6"><SampleBadge /></div>
        <div className="grid gap-5 lg:grid-cols-3">
          <Scorecard audience="agency" /><Scorecard audience="owners" /><Scorecard audience="taskers" />
        </div>
        <p className="mt-4 text-[0.95rem] text-muted">Scores are averages on a 1 to 5 scale, updated nightly. Individual tasker and owner scorecards are shown with an anonymous ID, never a full name.</p>
      </Section>

      {/* ACCOUNT VOLUME, HEALTH INDEX & CONTACT US SUBSECTION */}
      <div id="account-health" className="container py-8">
        <AccountHealthTelemetry />
      </div>

      <Section id="metrics" tone="tint" title="What each measure means">
        <dl className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m} className="card"><dt className="text-xl font-semibold">{m}</dt><dd className="mt-2 text-muted">{definitions[m]}</dd></div>
          ))}
        </dl>
      </Section>

      <Section id="reviews" title="Reviews" intro="Every review is tied to a completed assignment. We don't edit reviews, and we don't remove negative ones unless they break our review rules.">
        <div className="mb-6"><SampleBadge /></div>
        <ReviewList />
      </Section>

      <Section id="rules" tone="tint" title="Review rules">
        <ul className="grid max-w-3xl list-disc gap-2 pl-6">
          <li>You can review only after a completed assignment or a closed onboarding.</li>
          <li>One review per assignment, within 30 days of it ending.</li>
          <li>No personal details, health information, slurs or threats. Reviews that include them are hidden and the author is asked to rewrite.</li>
          <li>Reviews can&apos;t mention a person&apos;s disability, accommodations or identity.</li>
          <li>We never pay for, write or filter reviews for marketing.</li>
        </ul>
      </Section>

      <Section id="disputes" title="Disputes and appeals" intro="If you think a rating or a QA decision is wrong, you can ask for it to be reviewed.">
        <Steps steps={[
          { title: "Open an appeal", body: "From your dashboard, within 30 days. Say what you think is wrong. Written, voice or video — whichever is easiest for you." },
          { title: "Independent review", body: "A staff member who wasn't involved looks at session records, QA notes and both sides' messages. Usually within 5 business days." },
          { title: "Decision and second appeal", body: "You get a written decision with reasons. If you still disagree, a senior reviewer makes a final decision within 10 business days." },
        ]} />
        <p className="mt-6 text-muted">While an appeal is open, the disputed rating is hidden from public view. Pay disputes follow the same steps, and we pay any undisputed amount on time.</p>
      </Section>
    </>
  );
}
