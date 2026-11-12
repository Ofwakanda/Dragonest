import Link from "next/link";
import { ReviewList, SampleBadge, Scorecard, AccountHealthTelemetry } from "@/components/Ratings";
import { PageHero, Section } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ratings : Honest Scores, Updated Every Night",
  description: "Account owners and taskers are scored from 1 to 5. You see the average, and you never see a full name. Scores use an anonymous ID.",
  path: "/ratings",
});

const measures = [
  { name: "Quality", desc: "How accurate the work is" },
  { name: "Reliability", desc: "Shows up and finishes on time" },
  { name: "Communication", desc: "Replies clearly and quickly" },
  { name: "Compliance", desc: "Follows platform rules and ours" },
  { name: "Pay timeliness", desc: "Payments arrive when promised" },
  { name: "Accessibility", desc: "Easy to reach and work with" },
];

export default function Ratings() {
  return (
    <>
      <PageHero 
        eyebrow="RATINGS" 
        title="Honest scores, updated every night."
        subhead="Account owners and taskers are scored from 1 to 5. You see the average, and you never see a full name. Scores use an anonymous ID."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="#scorecards" className="btn-accent">See scorecards</Link>
          <a href="#what-we-score" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
            What we score &rarr;
          </a>
        </div>
      </PageHero>

      {/* SCORECARDS */}
      <Section id="scorecards" title="Scorecards">
        <div className="mb-6"><SampleBadge /></div>
        <div className="grid gap-5 lg:grid-cols-3">
          <Scorecard audience="agency" />
          <Scorecard audience="owners" />
          <Scorecard audience="taskers" />
        </div>
        <p className="mt-4 text-xs text-muted">
          Scores are averages on a 1 to 5 scale, updated nightly.
        </p>
      </Section>

      {/* TELEMETRY */}
      <div id="account-health" className="container py-8">
        <AccountHealthTelemetry />
      </div>

      {/* WHAT WE SCORE */}
      <Section id="what-we-score" tone="tint" title="What we score" intro="Every review evaluates these six core measures:">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {measures.map((m) => (
            <div key={m.name} className="card p-6">
              <h3 className="text-base font-semibold text-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-muted">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" title="Verified Reviews" intro="Every review is tied to a completed assignment. We do not edit reviews or remove negative ones.">
        <ReviewList />
      </Section>
    </>
  );
}
