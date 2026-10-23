import Link from "next/link";
import { FileText } from "lucide-react";
import { legalDocs } from "@/config/site";
import { legal } from "@/content/legal";
import { PageHero, Section } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Legal", description: "Terms, privacy, host and tasker agreements, data processing, anti-discrimination and platform compliance.", path: "/legal" });

export default function LegalIndex() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Legal documents" subhead="Written in plain language. If anything is unclear, ask us and we'll explain it." />
      <Section title="All documents">
        <ul className="grid gap-5 md:grid-cols-2">
          {legalDocs.map((d) => (
            <li key={d.slug} className="card">
              <FileText aria-hidden="true" className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xl"><Link className="link" href={`/legal/${d.slug}`}>{d.title}</Link></h3>
              <p className="mt-1 text-muted">{legal[d.slug].summary}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
