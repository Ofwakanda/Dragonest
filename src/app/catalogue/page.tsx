import { PageHero, Section, FinalCta } from "@/components/ui";
import { ProjectCatalogue } from "@/components/ProjectCatalogue";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Project Catalogue & Client Earnings : Verified Platform Proof",
  description:
    "Explore our catalogue of 20 verified client AI training projects across Outlier, Scale AI, Alignerr, and DataAnnotation. Over $360,000 in gross payouts generated with a 55% owner net return.",
  path: "/catalogue",
});

export default function CataloguePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform Projects &amp; Verified Earnings"
        title="Project Catalogue &amp; Client Earnings"
        subhead="Inspect our operational record across Outlier, Scale AI, Alignerr, and DataAnnotation. Over $360,000 in gross platform payouts generated for client accounts with strict session isolation and weekly Friday settlements."
      />

      <Section
        id="catalogue"
        title="Verified Project Portfolios"
        eyebrow="Historical Audit"
        intro="Browse real queues worked by our certified specialists. Every project is accounted for with weekly itemized ledger statements and 55% direct owner payouts."
      >
        <ProjectCatalogue />
      </Section>

      <FinalCta
        title="Have an idle account on one of these platforms?"
        body="Submit your account details for a free audit. We match your account queue with certified domain specialists and begin daily task execution in under 24 hours."
        primary={{ href: "/account-owners#submit", label: "Connect Your Account" }}
        secondary={{ href: "/pricing", label: "View Pricing & 55% Split" }}
      />
    </>
  );
}
