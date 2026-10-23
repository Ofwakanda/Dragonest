import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Info, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

export function Section({ id, title, eyebrow, intro, children, tone = "plain", headingLevel = 2, backgroundImage }: {
  id?: string; title: string; eyebrow?: string; intro?: React.ReactNode; children?: React.ReactNode;
  tone?: "plain" | "tint"; headingLevel?: 2 | 3; backgroundImage?: string;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const hid = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={hid} className={`relative overflow-hidden py-16 sm:py-24 ${tone === "tint" ? "bg-surface" : "bg-bg"}`}>
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-60 dark:opacity-50"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-bg/95 via-bg/85 to-bg/50" />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg/60 via-transparent to-bg/80" />
        </>
      )}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <H id={hid} className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">{title}</H>
          {intro && <div className="mt-4 text-lg text-ink/90 font-medium">{intro}</div>}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subhead, children, media, backgroundImage }: {
  eyebrow?: string; title: string; subhead: React.ReactNode; children?: React.ReactNode; media?: React.ReactNode; backgroundImage?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line py-20 sm:py-32">
      {backgroundImage && (
        <>
          {/* High-visibility background photography */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-75 dark:opacity-65"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          {/* Directional glass scrim to keep text legible while preserving rich photo details */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-bg/95 via-bg/85 to-bg/40 dark:from-bg/95 dark:via-bg/80 dark:to-bg/35" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 z-0 bg-surface" />}

      <div className={`container relative z-10 ${media ? "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-ink drop-shadow-sm">{title}</h1>
          <p className="mt-5 text-lg text-ink/90 sm:text-xl leading-relaxed font-medium">{subhead}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {media && <div className="mx-auto w-full max-w-xl">{media}</div>}
      </div>
    </section>
  );
}

export function CtaRow({ primary, secondary }: { primary: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={primary.href} className="btn-primary">{primary.label}</Link>
      {secondary && <Link href={secondary.href} className="btn-secondary">{secondary.label}</Link>}
    </div>
  );
}

export type Feature = { icon: LucideIcon; title: string; body: React.ReactNode };

export function FeatureGrid({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 | 4 }) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={`grid gap-5 ${grid}`}>
      {items.map(({ icon: Icon, title, body }) => (
        <li key={title} className="card">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-accent-soft text-accent-ink">
            <Icon aria-hidden="true" className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-xl">{title}</h3>
          <div className="mt-2 text-muted">{body}</div>
        </li>
      ))}
    </ul>
  );
}

/** Platform-permission disclaimer. Appears on every page that sells or recruits. */
export function ComplianceNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside aria-label="Platform eligibility notice" className="rounded-card border-l-4 border-accent bg-accent-soft p-5">
      <div className="flex gap-3">
        <ShieldCheck aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-accent-ink" />
        <div>
          <p className="font-semibold">{site.trustLine}</p>
          {!compact && (
            <p className="mt-1 text-[0.95rem] text-ink">
              Before any work starts, we check the platform&apos;s current terms. If a platform does not clearly permit
              subcontracting, remote access or agency-managed work, we decline the account and refund the audit fee.
              Account owners keep ownership and remain responsible for platform taxes and legal compliance.{" "}
              <Link href="/legal/platform-compliance" className="link">Read the full disclaimer</Link>.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}

export function Note({ children, title = "Good to know" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="flex gap-3 rounded-card border border-line bg-surface p-5">
      <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div><p className="font-semibold">{title}</p><div className="mt-1 text-[0.95rem] text-muted">{children}</div></div>
    </div>
  );
}

export function FinalCta({ title, body, primary, secondary }: {
  title: string; body: string; primary: { href: string; label: string }; secondary?: { href: string; label: string };
}) {
  return (
    <section aria-labelledby="final-cta" className="py-16 sm:py-20">
      <div className="container">
        <div className="rounded-card bg-primary px-6 py-12 text-on-primary sm:px-12">
          <h2 id="final-cta" className="text-3xl text-on-primary sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-95">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primary.href} className="btn bg-on-primary text-primary hover:opacity-90">{primary.label}</Link>
            {secondary && (
              <Link href={secondary.href} className="btn border-2 border-on-primary text-on-primary hover:bg-on-primary/10">{secondary.label}</Link>
            )}
          </div>
          <p className="mt-6 text-sm opacity-90">{site.trustLine}</p>
        </div>
      </div>
    </section>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card relative">
          <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-on-primary">{i + 1}</span>
          <h3 className="mt-4 text-xl"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
          <p className="mt-2 text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-accent-ink" fill="currentColor"><path d="M8 13.2 4.8 10l-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
