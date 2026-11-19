import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Info, ShieldCheck, Check, ArrowRight } from "lucide-react";

export function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  tone = "plain",
  headingLevel = 2,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "plain" | "tint";
  headingLevel?: 2 | 3;
  backgroundImage?: string;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const hid = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={hid}
      className={`relative py-16 sm:py-24 border-b border-line ${
        tone === "tint" ? "bg-surface" : "bg-bg"
      }`}
    >
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <H id={hid} className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            {title}
          </H>
          {intro && <div className="mt-3 text-base sm:text-lg text-muted leading-relaxed">{intro}</div>}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subhead,
  children,
  media,
}: {
  eyebrow?: string;
  title: string;
  subhead: React.ReactNode;
  children?: React.ReactNode;
  media?: React.ReactNode;
  backgroundImage?: string;
}) {
  return (
    <section className="relative border-b border-line bg-bg py-16 sm:py-24">
      <div className={`container ${media ? "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            {subhead}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {media && <div className="mx-auto w-full max-w-xl">{media}</div>}
      </div>
    </section>
  );
}

export function CtaRow({
  primary,
  secondary,
}: {
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link href={primary.href} className="btn-accent">
        {primary.label}
      </Link>
      {secondary && (
        <Link href={secondary.href} className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
          {secondary.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export type Feature = { icon: LucideIcon; title: string; body: React.ReactNode };

export function FeatureGrid({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 | 4 }) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={`grid gap-4 ${grid}`}>
      {items.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className="card flex flex-col justify-between"
        >
          <div>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface-2 text-ink">
              <Icon aria-hidden="true" className="h-5 w-5 text-ink/80" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-ink">{title}</h3>
            <div className="mt-2 text-sm text-muted leading-relaxed">{body}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Platform security disclaimer. Kept neutral and understated. */
export function ComplianceNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside aria-label="Platform security notice" className="rounded-card border border-line bg-surface p-5">
      <div className="flex gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0 text-muted" strokeWidth={1.75} />
        <div className="text-xs text-muted leading-relaxed">
          <strong className="block text-ink font-semibold mb-1">Operational Security Standard</strong>
          Accounts are staffed by verified specialists using isolated virtual sessions with clipboard restrictions and credential protection. Client ratings are maintained at 4.8+ across all active queues.
        </div>
      </div>
    </aside>
  );
}

export function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded border border-line bg-surface p-4 flex gap-3 text-sm text-muted">
      <Info className="h-5 w-5 shrink-0 text-muted" strokeWidth={1.75} />
      <div>
        <strong className="block text-ink font-semibold mb-0.5">{title}</strong>
        {children}
      </div>
    </div>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s, idx) => (
        <div
          key={s.title}
          className="card flex flex-col justify-between"
        >
          <div>
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
              0{idx + 1}
            </div>
            <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-line bg-surface-2 text-muted">
            <Check className="h-3 w-3 stroke-[2]" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCta({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-line bg-surface py-20 text-center">
      <div className="container max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight">{title}</h2>
        <p className="mt-3 text-base text-muted leading-relaxed">{body}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={primary.href} className="btn-accent w-full sm:w-auto">
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors px-4 py-2"
            >
              {secondary.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
