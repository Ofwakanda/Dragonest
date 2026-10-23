"use client";
import { useId, useMemo, useState } from "react";
import { money, pricing } from "@/config/site";

/** Estimates how one month of platform earnings would be split. Pure arithmetic on src/config/site.ts values. */
export function PricingCalculator() {
  const id = useId();
  const [gross, setGross] = useState("2000");
  const [qa, setQa] = useState(false);
  const [rush, setRush] = useState(false);
  const [firstMonth, setFirstMonth] = useState(false);

  const g = Math.max(0, Number(gross.replace(/[^0-9.]/g, "")) || 0);
  const r = useMemo(() => {
    const tasker = (g * pricing.taskerShare) / 100;
    const tasking = (g * pricing.tasking.percent) / 100;
    const qaFee = qa ? (g * pricing.qaAddon.percent) / 100 : 0;
    const rushFee = rush ? (g * pricing.rush.percent) / 100 : 0;
    const onboardPct = (g * pricing.onboarding.percent) / 100;
    const onboarding = firstMonth ? Math.min(onboardPct, pricing.onboarding.flat) : 0;
    const agency = tasking + qaFee + rushFee + onboarding;
    const owner = g - tasker - agency;
    return { tasker, tasking, qaFee, rushFee, onboarding, agency, owner };
  }, [g, qa, rush, firstMonth]);

  const belowMin = g > 0 && g < pricing.minimumMonthly;

  return (
    <div className="card grid gap-8 lg:grid-cols-2">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6" aria-labelledby={`${id}-title`}>
        <h3 id={`${id}-title`} className="text-2xl">Estimate your monthly split</h3>
        <div>
          <label htmlFor={`${id}-gross`} className="block font-semibold">Expected gross platform earnings this month (USD)</label>
          <p id={`${id}-gross-hint`} className="mt-1 text-[0.95rem] text-muted">What the platform pays into the account before any split. This is your estimate, not ours.</p>
          <div className="mt-2 flex items-center rounded-control border-2 border-line-strong bg-bg focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-[rgb(var(--focus))]">
            <span aria-hidden="true" className="pl-4 text-muted">$</span>
            <input id={`${id}-gross`} inputMode="decimal" value={gross} onChange={(e) => setGross(e.target.value)}
              aria-describedby={`${id}-gross-hint`} className="w-full bg-transparent px-2 py-3 text-lg text-ink focus:outline-none" />
          </div>
        </div>
        <fieldset className="space-y-3">
          <legend className="font-semibold">Options</legend>
          <Toggle label={`QA add-on (+${pricing.qaAddon.percent}%)`} desc="A second reviewer checks a sample of every tasker's work each week." checked={qa} onChange={setQa} />
          <Toggle label={`Rush delivery (+${pricing.rush.percent}%)`} desc="Tasker assigned within 4 hours instead of 48hrs." checked={rush} onChange={setRush} />
          <Toggle label="This is the account's first month (onboarding)" desc={`Adds the onboarding package: ${pricing.onboarding.percent}% of this month's earnings or ${money(pricing.onboarding.flat)}, whichever is lower.`} checked={firstMonth} onChange={setFirstMonth} />
        </fieldset>
      </form>

      <div>
        <h3 className="text-2xl">Estimated split</h3>
        <output htmlFor={`${id}-gross`} aria-live="polite" className="mt-4 block">
          <dl className="divide-y divide-line rounded-card border border-line">
            <Row term={`Tasker pay (${pricing.taskerShare}%)`} value={money(r.tasker)} />
            <Row term={`Tasking fee (${pricing.tasking.percent}%)`} value={money(r.tasking)} />
            {qa && <Row term="QA add-on" value={money(r.qaFee)} />}
            {rush && <Row term="Rush delivery" value={money(r.rushFee)} />}
            {firstMonth && <Row term="Onboarding package" value={money(r.onboarding)} />}
            <Row term="Total to Middlemen" value={money(r.agency)} />
            <Row term="You keep (before your taxes)" value={money(r.owner)} strong />
          </dl>
        </output>
        {belowMin && (
          <p role="note" className="mt-4 rounded-control bg-warn-soft p-3 text-[0.95rem] text-warn">
            This is below our {money(pricing.minimumMonthly)} minimum monthly volume. We can still audit the account, but ongoing tasking needs at least this amount of available work.
          </p>
        )}
        <p className="mt-4 text-[0.95rem] text-muted">
          Estimate only. Real earnings depend on how much work the platform offers, and we can&apos;t guarantee any amount.
          The one-time {money(pricing.audit.price)} audit is not included. You remain responsible for tax on the full platform payout.
        </p>
      </div>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-start gap-3 rounded-control border border-line p-3 hover:bg-surface">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[rgb(var(--primary))]" />
      <span><span className="font-medium">{label}</span><span className="block text-[0.95rem] text-muted">{desc}</span></span>
    </label>
  );
}

function Row({ term, value, strong }: { term: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 px-4 py-3 ${strong ? "bg-accent-soft font-semibold" : ""}`}>
      <dt>{term}</dt><dd className="tabular-nums">{value}</dd>
    </div>
  );
}
