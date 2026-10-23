import type { Metadata } from "next";
import { site } from "@/config/site";

/** Per-page SEO + Open Graph + Twitter metadata. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url,
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — managed staffing for AI-training accounts` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/opengraph-image"] },
  };
}
