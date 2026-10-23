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
    "Managed staffing for AI-training accounts. We audit, onboard, task and QA with vetted taskers. You keep ownership. We take a transparent percentage. Only for platforms that allow subcontracting.",
  email: {
    hello: "hello@middlemen.ai",
    support: "support@middlemen.ai",
    security: "security@middlemen.ai",
    access: "access@middlemen.ai",
    legal: "legal@middlemen.ai",
    privacy: "privacy@middlemen.ai",
  },
  legalEntity: "Middlemen (MM) Ltd.",
  jurisdiction: "[Your governing jurisdiction]",
  lastUpdated: "28 September 2026",
  trustLine: "Only for platforms that explicitly allow subcontracting and remote access.",
  telegram: {
    hub: "https://t.me/+bQPz0nzK-cI4MTBh",
    handle: "Join Telegram Community",
    admins: "https://t.me/+bQPz0nzK-cI4MTBh",
    channel: "https://t.me/+bQPz0nzK-cI4MTBh",
    label: "Live Agents & Admins",
  },
} as const;

export const pricing = {
  currency: "USD",
  audit: { price: 49, label: "Account audit", unit: "one-time" },
  onboarding: { percent: 15, flat: 150, label: "Onboarding package" },
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
  { href: "/pricing", label: "Pricing" },
  { href: "/ai-study", label: "AI Study & Automations" },
  { href: "/ratings", label: "Ratings" },
  { href: "/trust-safety", label: "Trust & safety" },
  { href: "/about", label: "About" },
] as const;

export const legalDocs = [
  { slug: "terms", title: "Terms of Service" },
  { slug: "privacy", title: "Privacy Policy" },
  { slug: "host-agreement", title: "Host Agreement" },
  { slug: "tasker-agreement", title: "Tasker Agreement" },
  { slug: "data-processing", title: "Data Processing Agreement" },
  { slug: "anti-discrimination", title: "Anti-Discrimination Policy" },
  { slug: "platform-compliance", title: "Platform Compliance Disclaimer" },
] as const;

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: pricing.currency, maximumFractionDigits: n % 1 === 0 ? 0 : 2 }).format(n);

/**
 * PHOTO SLOTS. Each slot shows an original illustration until you add a photo.
 * To use a stock photo: save it in /public/images/ and set `src`, e.g.
 *   homeHero: { src: "/images/home-hero.jpg", alt: "Two people reviewing AI tasks at a laptop", credit: "Photo: Jane Doe / Unsplash" }
 * Recommended: landscape 4:3, at least 1200px wide, JPG or WebP under 300 KB.
 * Use only photos whose license allows commercial use, and never present
 * stock models as your real team or real customers.
 */
export type PhotoSlot = { src?: string; alt?: string; credit?: string };
export const photos: Record<"homeHero" | "accountOwners" | "taskers" | "trust", PhotoSlot> = {
  homeHero: {
    src: "/images/hero-nightshift.jpg",
    alt: "Remote AI evaluator working deep into the night across dual displays evaluating code and prompt benchmarks",
    credit: "Monochrome Photography · Deep Work Night Shift",
  },
  accountOwners: {
    src: "/images/account-owners.jpg",
    alt: "Clean minimal desk with laptop showing transparent accounting splits and fresh coffee by window",
    credit: "Monochrome Photography · Remote Host Oversight",
  },
  taskers: {
    src: "/images/taskers-review.jpg",
    alt: "Focused technical specialist wearing headphones reviewing complex domain evaluation rubrics",
    credit: "Monochrome Photography · Specialist in Flow",
  },
  trust: {
    src: "/images/trust-security.jpg",
    alt: "High-security data center hardware aisle with brushed aluminum chassis and organized cabling",
    credit: "Monochrome Photography · Infrastructure Security",
  },
};
