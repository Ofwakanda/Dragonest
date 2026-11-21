/**
 * SINGLE SOURCE OF TRUTH for brand, contact and pricing.
 * Change a value here and every page, the pricing table and the
 * calculator update together. All prices are starter defaults — review
 * them before launch.
 */

export const site = {
  name: "MIDDLEMEN",
  shortName: "MM",
  tagline: "",
  url: "https://www.middlemen.ai",
  description:
    "Managed staffing for AI training accounts. We onboard, task and QA with vetted specialists. You keep 100% legal ownership and collect 55% of all earnings weekly with zero upfront fees.",
  email: {
    hello: "hello@middlemen.ai",
    support: "support@middlemen.ai",
    security: "security@middlemen.ai",
    access: "access@middlemen.ai",
    legal: "legal@middlemen.ai",
    privacy: "privacy@middlemen.ai",
  },
  howItWorksUrl: "https://middlemen.online/account-owners#how-it-works",
  legalEntity: "Middlemen Operations Ltd.",
  jurisdiction: "United Kingdom",
  lastUpdated: "28 September 2026",
  trustLine: "Transparent managed staffing with guaranteed weekly settlements and full owner control.",
  telegram: {
    hub: "https://t.me/MiddlemenHub",
    handle: "@MiddlemenHub",
    admins: "https://t.me/MiddlemenHub",
    channel: "https://t.me/MiddlemenHub",
    label: "24/7 Telegram Contact",
  },
} as const;

export const pricing = {
  currency: "USD",
  audit: { price: 0, label: "Account onboarding", unit: "free" },
  onboarding: { percent: 15, flat: 0, label: "Onboarding package" },
  tasking: { percent: 15, label: "Tasking fee" },
  /** Minimum share of gross task earnings paid to the tasker. */
  taskerShare: 30,
  qaAddon: { percent: 5, label: "QA add-on" },
  rush: { percent: 5, label: "Rush delivery" },
  minimumMonthly: 2000,
  replacementDays: 5, // business days to replace a tasker
  refundWindowDays: 14,
} as const;

export const nav = [
  { href: "/account-owners", label: "Account owners" },
  { href: "/taskers", label: "Taskers" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust-safety", label: "Trust & safety" },
  { href: "/about", label: "About" },
] as const;

export const legalDocs = [
  { slug: "terms", title: "Terms of Service" },
  { slug: "privacy", title: "Privacy Policy" },
  { slug: "host-agreement", title: "Account Host Agreement" },
  { slug: "tasker-agreement", title: "Tasker & Evaluation Agreement" },
  { slug: "data-processing", title: "Data Processing Addendum" },
  { slug: "anti-discrimination", title: "Non-Discrimination Policy" },
  { slug: "platform-compliance", title: "Platform Terms Compliance Statement" },
] as const;

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: pricing.currency, maximumFractionDigits: 0 }).format(n);

export type PhotoSlot = { src?: string; alt?: string; credit?: string };

/** Photo slot mappings. */
export const photos = {
  homeHero: {
    src: "/images/hero-nightshift.jpg",
    alt: "Dedicated workspace with multiple monitors displaying development tools and telemetry.",
  },
  accountOwners: {
    src: "/images/account-owners-render.jpg",
    alt: "Brushed steel key card passing through a frosted glass gate, representing safe non-custodial delegation.",
  },
  pricing: {
    src: "/images/pricing-split-render.jpg",
    alt: "Matte monochrome architectural blocks stacked in a 55:30:15 proportion, representing clear split accounting.",
  },
  taskers: {
    src: "/images/taskers-doc-render.jpg",
    alt: "35mm documentary shot of a focused evaluator working asynchronously with reference texts.",
  },
  trust: {
    src: "/images/trust-sandbox-render.jpg",
    alt: "Isometric layered sandbox cube showing strict operational isolation between client credentials and live tasks.",
  },
  about: {
    src: "/images/about-bold-mission.jpg",
    alt: "Our leadership and operations center in London coordinating global AI training taskers.",
  },
} as const;
