# Dragonsnest AI Center: website

A marketing site for a managed staffing agency for AI-training accounts, built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 3.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

**Edit these first:** the brand name, domain, emails and **every price** live in `src/config/site.ts`. When you change a value there, the pricing table, the calculator, the copy and the legal templates all pick it up.

---

## 1. Page structure

| Route | Page | Main sections |
|---|---|---|
| `/` | Home | Hero with two CTAs and the trust line · How it works (3 steps) · Who it's for · Pricing snapshot · Ratings preview · Accessibility promise · Security · FAQ accordion · Final CTA |
| `/account-owners` | For account owners | Audit explanation · Needs Onboarding vs Needs Tasking · Dashboard preview (earnings, hours, QA, invoices) · Price table · Compliance split (what we handle / what you keep) · Replacement guarantee · **Submit account form** (`#submit`) |
| `/taskers` | For taskers | Joining steps · ID verification and skills tests · Availability and accommodation settings · Assigned accounts · Remote session rules · Weekly pay · Ratings and reputation · **Apply form** (`#apply`) |
| `/pricing` | Pricing | Price list · Where each dollar goes · **Pricing calculator** · Refund and replacement policy · Get a quote form |
| `/ratings` | Ratings | Scorecards for the agency, owners and taskers · Metric definitions · Filterable reviews · Review rules · Disputes and appeals |
| `/trust-safety` | Trust & safety | Nine controls (vault, 2FA, recording, no clipboard/USB, isolated VM, NDAs, DPAs, audit logs, anti-fraud) · Who-sees-what table · Platform compliance · Security policy summary |
| `/accessibility` | Accessibility | Nine supports · Principles · Website conformance statement · Request an accommodation form |
| `/about` | About | Mission · Values · Team (placeholder roles) · Contact form and email directory |
| `/legal` and `/legal/[slug]` | Legal | Terms · Privacy (with a `#cookies` section) · Host Agreement · Tasker Agreement · DPA · Anti-Discrimination · Platform Compliance Disclaimer |
| `/admin` | Admin dashboard mockup | KPIs · Account pipeline with platform-rule status · QA queue · Alerts (`noindex`, disallowed in robots) |
| any unknown path | 404 | Helpful links |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO | Generated at build time |
| `POST /api/{account,tasker,contact}` | Form intake | Server-side validation. It rejects any field that looks like a password, OTP or card number |

## 2. Component breakdown

```
src/
├─ config/site.ts            Brand, emails, pricing, nav, legal index, money()
├─ lib/seo.ts                pageMeta(): title, description, canonical, Open Graph, Twitter
├─ data/sample.ts            SAMPLE ratings and dashboard data (clearly labeled, replace before launch)
├─ content/legal.tsx         Plain-language legal templates
├─ app/                      Routes (see table above), layout.tsx, globals.css (tokens)
└─ components/
   ├─ Header.tsx             Sticky header, active link (aria-current), mobile menu (Esc closes, focus returns)
   ├─ Footer.tsx             Site links, legal links, contact, cookie settings, income/tax disclaimers
   ├─ ThemeToggle.tsx        Light/dark toggle (aria-pressed) and a pre-paint script (no flash)
   ├─ CookieConsent.tsx      Non-modal banner. Analytics off by default. Can be reopened from the footer
   ├─ Logo.tsx               Decorative SVG mark
   ├─ ui.tsx                 Section, PageHero, CtaRow, FeatureGrid, Steps, CheckList,
   │                         ComplianceNotice, Note, FinalCta
   ├─ Accordion.tsx          WAI-ARIA accordion (button + aria-expanded + region)
   ├─ PriceTable.tsx         Semantic price table driven by config
   ├─ PricingCalculator.tsx  Live split estimate, aria-live output, minimum-volume warning
   ├─ Ratings.tsx            Scorecard, ReviewList (radio-chip filter), SampleBadge
   ├─ DashboardPreview.tsx   Stat tiles, bar chart with a "Show as table" toggle, invoices table
   └─ forms/
      ├─ fields.tsx          TextField, TextArea, SelectField, Checkbox, CheckboxGroup,
      │                      RadioGroup, FileUpload, ErrorSummary, SuccessPanel
      ├─ useSubmit.ts        Validate, focus the error summary, POST, show success
      ├─ AccountSubmitForm.tsx
      ├─ TaskerApplyForm.tsx
      └─ ContactForm.tsx
```

## 3. Design tokens

The tokens are CSS variables in `src/app/globals.css`, mapped to Tailwind color names in `tailwind.config.ts`. Dark mode redefines the same variables under `.dark`.

| Token | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#FFFFFF` | `#081224` | Page background |
| `surface` / `surface-2` | `#F5F8FC` / `#EAF0F8` | `#0E1E36` / `#152947` | Tinted sections, table heads |
| `ink` | `#0B1B33` | `#E8EEF7` | Body text (16.9:1 / 15.6:1) |
| `muted` | `#475569` | `#A8B6CA` | Secondary text (7.6:1 / 9.0:1) |
| `line` / `line-strong` | `#D5DEE9` / `#6B7A90` | `#24395A` / `#7C8DA6` | Dividers / input borders (≥3:1) |
| `primary` | `#0B3D91` deep blue | `#8AB4FF` | Buttons, links, key numbers |
| `on-primary` | `#FFFFFF` | `#081224` | Text on primary |
| `accent` | `#3FAE7A` soft green | `#6FD3A0` | Decorative accents only |
| `accent-ink` | `#166E45` | `#6FD3A0` | Green text (6.0:1) |
| `danger`, `warn` (+ `-soft`) | `#B02020`, `#8A5400` | `#FF8C8C`, `#FAC46E` | Errors and warnings, always paired with an icon and text |
| `focus` | `#2563EB` | `#93C5FD` | 3px focus outline, 3px offset |

- **Type:** Inter Variable, self-hosted through `@fontsource-variable/inter` (no call to Google). The body size is 17px with 1.7 line height. The scale is about 1.25 (17 → 19 → 22 → 28 → 34 → 42 → 52px).
- **Radius:** `card` 16px, `control` 10px. **Shadow:** `card`, which is very soft.
- **Spacing:** Tailwind's 4px scale. Sections use 64–80px vertical padding. The container is 1200px with 16px gutters.
- **Touch targets:** buttons and controls are at least 48px tall, and icon buttons are 48×48px.

## 4. Accessibility notes (WCAG 2.2 AA)

**How it was checked:** axe-core (WCAG 2.0/2.1/2.2 A and AA plus best practice) ran on every route in both light and dark mode, with all accordions expanded. The result was **0 violations**, and no route scrolls sideways at 375px wide. Automated tools can't catch everything, so test with NVDA, VoiceOver and a keyboard before launch.

- **Structure:** a skip link, landmarks (`header`, `nav` with a label, `main`, `footer`), one `h1` per page, and logical heading order. Every section is labeled by its heading.
- **Keyboard:** everything works without a mouse. The mobile menu closes on Esc and puts focus back on the menu button. Focus is always visible (2.4.7 and 2.4.11).
- **Forms:**
  - Every field has a visible `<label>`. Required fields say "(required)" in words.
  - Hints and errors are linked with `aria-describedby`, and errors set `aria-invalid`.
  - Errors use an icon plus text, never color alone.
  - On submit, a focused error summary lists every problem.
  - Nothing autocompletes in ways that could leak data, and `autocomplete` tokens are set for name, email and country.
  - Redundant entry (3.3.7) is avoided, and there are no cognitive tests or CAPTCHAs (3.3.8). If you add a bot check, use an invisible or accessible one such as Turnstile.
- **Dynamic content:** the calculator result uses `<output aria-live="polite">`, and the review filter announces how many reviews are shown. Success panels use `role="status"`.
- **Charts:** the bar chart has a text alternative (`role="img"` with the full values) and a "Show as table" toggle. Score bars are hidden from screen readers because the numbers are already written out.
- **Motion:** there is no autoplay, flashing or essential animation, and `prefers-reduced-motion` is respected.
- **Reflow and zoom:** the layout is mobile-first and works at 320px and at 200% zoom. Wide data tables scroll inside their own container, which 1.4.10 allows for tables.
- **Language:** plain language throughout, with no ableist terms. Accommodations are framed as "what helps you", and nobody is asked for a diagnosis.

## 5. Compliance notes

1. **Platform eligibility is the core constraint.** Most major AI-training and crowd-work platforms prohibit account sharing, third-party access and subcontracting. The site says this plainly, puts the trust line on every selling page, makes the account form require a link to the platform rule that allows the work, and promises a refund when a platform doesn't qualify. **Before launch, confirm in writing with each platform you plan to support.** If none of your target platforms allow it, this business model doesn't work on them.
2. **No credentials in forms.** The account form tells owners not to type passwords, and the API rejects fields named like passwords, OTPs or card numbers. Credentials go only into the vault, through a one-time link.
3. **No income guarantees.** Disclaimers appear in the footer, on the calculator, on the forms, on the tasker pay section and in the Terms.
4. **Tax and legal responsibility** stays with account owners. This is stated on Home, Account owners, Pricing, the calculator, the footer, the Host Agreement and the disclaimer.
5. **Sample data is labeled.** Every rating, review and dashboard figure comes from `src/data/sample.ts` and has a visible "Sample data" badge. **Replace it with real data, or remove it, before going public.** Publishing made-up reviews as real ones is deceptive and illegal in many places.
6. **Team placeholders:** the About page lists roles, not people. Add real team members before launch.
7. **Legal documents are templates**, marked "Template for review". A qualified lawyer must review them for your jurisdiction, including employment classification for taskers, GDPR and Nigeria's NDPA/NDPR, data transfers and consumer law.
8. **Privacy of taskers:** accommodation data is optional, kept separate and never shown to owners. Ratings use anonymous IDs. Session recordings are kept for 90 days, and taskers can view their own.
9. **Cookies:** analytics stay off until the visitor opts in. Load analytics only inside the `cookie-consent` event handler when `analytics === true`.

## 6. Before launch

- [ ] Set `site.url`, the legal entity, the jurisdiction and the emails in `src/config/site.ts`
- [ ] Confirm every price in `pricing`
- [ ] Get written confirmation from each supported platform that managed work is permitted
- [ ] Replace or remove `src/data/sample.ts` content and the About page team placeholders
- [ ] Wire `/api/[form]`: storage, email, rate limiting, a bot check, encrypted uploads with malware scanning (see the TODOs in the route)
- [ ] Put `/admin` behind SSO with 2FA, or delete the route
- [ ] Have a lawyer review `src/content/legal.tsx`
- [ ] Test manually with a screen reader and a keyboard on real devices
