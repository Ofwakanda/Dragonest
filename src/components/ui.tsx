import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Info, ShieldCheck, Check } from "lucide-react";
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
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-75 dark:opacity-65"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
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
        <li key={title} className="group card relative overflow-hidden flex flex-col justify-between border-line bg-surface hover:border-accent/60 transition-all hover:shadow-xl hover:-translate-y-1">
          <div>
            <div className="relative mb-4 inline-block">
              {/* Soft ambient radial halo behind the badge */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-accent/30 via-cyan-500/20 to-emerald-500/20 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              {/* 3D Glassmorphic Badge container */}
              <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-b from-surface-2/90 via-surface to-surface-2 border border-line-strong flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.35)]">
                <Icon aria-hidden="true" className="h-6 w-6 text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform" strokeWidth={2.2} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink">{title}</h3>
            <div className="mt-2 text-sm text-muted leading-relaxed">{body}</div>
          </div>
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
        <ShieldCheck className="h-6 w-6 shrink-0 text-accent" />
        <div className="text-xs text-ink/90 leading-relaxed">
          <strong className="block text-ink font-bold mb-1">Strict Account Security Standard</strong>
          We operate under strict security and quality protocols. Accounts are staffed by verified domain specialists in isolated virtual environments to protect account integrity and maintain 4.8+ client ratings.
        </div>
      </div>
    </aside>
  );
}

export function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-2/50 p-4 flex gap-3 text-sm text-muted">
      <Info className="h-5 w-5 shrink-0 text-accent" />
      <div>
        <strong className="block text-ink font-bold mb-0.5">{title}</strong>
        {children}
      </div>
    </div>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((s, idx) => (
        <div key={s.title} className="group card relative overflow-hidden border-line bg-surface flex flex-col justify-between hover:border-accent/60 transition-all hover:shadow-xl hover:-translate-y-1">
          <div>
            <div className="relative mb-4 inline-block">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-accent/30 to-cyan-500/20 blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-b from-surface-2 via-surface to-surface-2 border border-line-strong flex items-center justify-center font-mono font-black text-xl text-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.35)]">
                0{idx + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm text-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <Check className="h-2.5 w-2.5 stroke-[3]" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCta({ title, body, primary, secondary }: {
  title: string; body: string; primary: { href: string; label: string }; secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-line bg-surface py-20 text-center">
      <div className="container max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{title}</h2>
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{body}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primary.href} className="btn-accent text-sm uppercase tracking-wider !py-3.5 !px-8 shadow-md">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary text-sm uppercase tracking-wider !py-3.5 !px-8">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
