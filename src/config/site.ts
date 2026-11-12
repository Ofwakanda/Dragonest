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
  { href: "/pricing", label: "Pricing" },
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
export const photos: Record<"homeHero" | "accountOwners" | "taskers" | "trust" | "pricing", PhotoSlot> = {
  homeHero: {
    src: "/images/hero-nightshift.jpg",
    alt: "Layered managed work composition with active dashboard telemetry and subtle lime light strip",
    credit: "Coded 3D Interface · Real-Time Dispatch",
  },
  accountOwners: {
    src: "/images/account-owners-render.jpg",
    alt: "Brushed-steel key card passing through a narrow frosted-glass gate with a subtle lime dot on the chip, representing access without sharing passwords",
    credit: "3D Matte Render · Secure Access Gate",
  },
  taskers: {
    src: "/images/taskers-doc-render.jpg",
    alt: "Over-the-shoulder view of a specialist working at a clean laptop workspace under soft natural window light",
    credit: "Documentary Photography · Specialist Workplace",
  },
  trust: {
    src: "/images/trust-sandbox-render.jpg",
    alt: "Isometric view of a graphite cube floating inside layered frosted-glass isolation enclosures with engraved blocked tiles and a lime status indicator",
    credit: "3D Sandbox Architecture · Layered Isolation",
  },
  pricing: {
    src: "/images/pricing-split-render.jpg",
    alt: "Three stacked monochrome rectangular slabs in 55 : 30 : 15 proportion with a lime top surface representing transparent revenue distribution",
    credit: "3D Mathematical Render · 55/30/15 Revenue Split",
  },
};
