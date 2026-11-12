"use client";
import { useId, useMemo, useState } from "react";
import { money, pricing } from "@/config/site";

export function PricingCalculator() {
  const id = useId();
  const [gross, setGross] = useState("2000");
  const [qa, setQa] = useState(false);
  const [rush, setRush] = useState(false);
  const [firstMonth, setFirstMonth] = useState(false);

  const g = Math.max(0, Number(gross.replace(/[^0-9.]/g, "")) || 0);
  const r = useMemo(() => {
    const specialist = (g * pricing.taskerShare) / 100;
    const middlemen = (g * pricing.tasking.percent) / 100;
    const qaFee = qa ? (g * 5) / 100 : 0;
    const rushFee = rush ? (g * 5) / 100 : 0;
    const firstMonthFee = firstMonth ? (g * 5) / 100 : 0;
    const extras = qaFee + rushFee + firstMonthFee;
    const youKeep = Math.max(0, g - specialist - middlemen - extras);
    return { specialist, middlemen, extras, youKeep };
  }, [g, qa, rush, firstMonth]);

  return (
    <div className="card grid gap-8 lg:grid-cols-2 p-6 sm:p-8">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6" aria-labelledby={`${id}-title`}>
        <h3 id={`${id}-title`} className="text-2xl font-semibold text-ink">Estimate your month</h3>
        <div>
          <label htmlFor={`${id}-gross`} className="block text-sm font-semibold text-ink">Monthly account earnings (USD)</label>
          <div className="mt-2 flex items-center rounded border border-line bg-surface-2 focus-within:border-ink">
            <span aria-hidden="true" className="pl-4 text-muted">$</span>
            <input 
              id={`${id}-gross`} 
              inputMode="decimal" 
              value={gross} 
              onChange={(e) => setGross(e.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-base text-ink focus:outline-none font-mono" 
            />
          </div>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-ink">Optional extras</legend>
          <Toggle 
            label="Extra quality check (+5%)" 
            desc="A second person checks a sample of the work every week." 
            checked={qa} 
            onChange={setQa} 
          />
          <Toggle 
            label="Fast start (+5%)" 
            desc="A specialist is assigned within 4 hours instead of 48." 
            checked={rush} 
            onChange={setRush} 
          />
          <Toggle 
            label="This is the account's first month" 
            desc="Covers setup and onboarding for the first month." 
            checked={firstMonth} 
            onChange={setFirstMonth} 
          />
        </fieldset>
      </form>

      <div>
        <h3 className="text-2xl font-semibold text-ink">Results</h3>
        <output htmlFor={`${id}-gross`} aria-live="polite" className="mt-4 block font-mono">
          <dl className="divide-y divide-line rounded border border-line bg-surface-2 text-sm">
            <Row term="You keep (55%)" value={money(r.youKeep)} strong />
            <Row term="Specialist (30%)" value={money(r.specialist)} />
            <Row term="MIDDLEMEN (15%)" value={money(r.middlemen)} />
            {r.extras > 0 && <Row term="Extras" value={money(r.extras)} />}
          </dl>
        </output>
        <p className="mt-4 text-xs text-muted leading-relaxed">
          This is an estimate only. What you earn depends on how much work the platform gives out, and we cannot promise any amount. Checking your account is free. You are responsible for tax on your own payouts.
        </p>
      </div>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-start gap-3 rounded border border-line p-3 hover:bg-surface cursor-pointer transition-colors">
      <input 
        id={id} 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
        className="mt-1 h-4 w-4 shrink-0 rounded accent-[#C6FF3D]" 
      />
      <div>
        <span className="block text-sm font-medium text-ink">{label}</span>
        <span className="block text-xs text-muted mt-0.5">{desc}</span>
      </div>
    </label>
  );
}

function Row({ term, value, strong = false }: { term: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between px-4 py-3 ${strong ? "bg-surface font-semibold text-ink text-base" : "text-muted"}`}>
      <dt>{term}</dt>
      <dd className={strong ? "text-ink" : "text-ink"}>{value}</dd>
    </div>
  );
}
