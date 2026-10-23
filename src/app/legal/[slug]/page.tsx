import Link from "next/link";
import { notFound } from "next/navigation";
import { legalDocs, site } from "@/config/site";
import { legal } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) return {};
  return pageMeta({ title: doc.title, description: legal[slug].summary, path: `/legal/${slug}` });
}

export default async function LegalDoc({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) notFound();
  return (
    <div className="container py-14">
      <nav aria-label="Breadcrumb" className="text-[0.95rem]">
        <ol className="flex flex-wrap gap-2 text-muted">
          <li><Link className="link" href="/legal">Legal</Link> <span aria-hidden="true">/</span></li>
          <li aria-current="page">{doc.title}</li>
        </ol>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_260px]">
        <article className="prose-legal max-w-prose">
          <h1 className="text-4xl">{doc.title}</h1>
          <p className="!mt-3 text-muted">Last updated {site.lastUpdated}</p>
          <p className="rounded-control border border-warn bg-warn-soft p-3 !text-warn">Template for review. This document is not legal advice and must be reviewed by a qualified lawyer before use.</p>
          {legal[slug].body}
        </article>
        <aside aria-label="Other legal documents">
          <h2 className="text-lg">Other documents</h2>
          <ul className="mt-3 space-y-2">
            {legalDocs.filter((d) => d.slug !== slug).map((d) => (
              <li key={d.slug}><Link className="link" href={`/legal/${d.slug}`}>{d.title}</Link></li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
