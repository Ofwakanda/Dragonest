import type { MetadataRoute } from "next";
import { legalDocs, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/account-owners", "/taskers", "/pricing", "/ratings", "/trust-safety", "/accessibility", "/about", "/legal"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...legalDocs.map((d) => ({ url: `${site.url}/legal/${d.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 })),
  ];
}
