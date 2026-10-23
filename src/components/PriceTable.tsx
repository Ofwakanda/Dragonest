import { money, pricing } from "@/config/site";

export const priceRows = [
  { item: "Account audit", price: `${money(pricing.audit.price)} one-time`, detail: "Platform-rule check, account health report and work estimate. Refunded if we decline the account." },
  { item: "Onboarding package", price: `${pricing.onboarding.percent}% of first month, or ${money(pricing.onboarding.flat)} flat`, detail: `Whichever is lower (${pricing.onboarding.percent}% of first month, or $150 flat). Covers qualification tests, training modules and setup by a vetted tasker.` },
  { item: "Tasking", price: `${pricing.tasking.percent}% of task earnings`, detail: `Ongoing staffing, scheduling and support. The tasker receives at least ${pricing.taskerShare}%.` },
  { item: "QA add-on", price: `+${pricing.qaAddon.percent}%`, detail: "A second reviewer checks a weekly sample of every tasker's work. Recommended for accounts with strict quality thresholds." },
  { item: "Rush delivery", price: `+${pricing.rush.percent}%`, detail: "Tasker assigned within 4 hours instead of 48hrs. Charged for the first month only." },
  { item: "Minimum monthly volume", price: `${money(pricing.minimumMonthly)}`, detail: "Ongoing tasking needs at least this much available work per month. We'll pause, not charge, if work drops below it." },
];

export function PriceTable() {
  return (
    <div className="overflow-x-auto rounded-card border border-line bg-bg">
      <table className="w-full min-w-[560px] text-left">
        <caption className="sr-only">Middlemen price list</caption>
        <thead className="bg-surface-2">
          <tr><th scope="col" className="px-5 py-3">Service</th><th scope="col" className="px-5 py-3">Price</th><th scope="col" className="px-5 py-3">What it covers</th></tr>
        </thead>
        <tbody className="divide-y divide-line">
          {priceRows.map((r) => (
            <tr key={r.item}>
              <th scope="row" className="px-5 py-4 align-top font-semibold">{r.item}</th>
              <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-primary">{r.price}</td>
              <td className="px-5 py-4 align-top text-muted">{r.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
