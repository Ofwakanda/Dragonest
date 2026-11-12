import { money, pricing } from "@/config/site";

export const priceRows = [
  { item: "Account onboarding", price: "Free ($0)", detail: "Complete queue inspection, account health review and specialist matching. 100% free with zero upfront fees." },
  { item: "Tasking & Managed Shifts", price: `${pricing.tasking.percent}% of client earnings`, detail: `Ongoing staffing, queue execution and daily tasking. The specialist receives ${pricing.taskerShare}% and the account owner keeps 55%.` },
  { item: "QA & Rating Protection", price: "Included Free", detail: "A senior evaluation lead checks weekly samples of all work to keep client quality scores above 4.8 out of 5.0." },
  { item: "Fast Track Staffing", price: "Included Free", detail: "Specialist matched and assigned within 24 hours of onboarding." },
  { item: "Minimum monthly volume", price: `${money(pricing.minimumMonthly)}`, detail: "Ongoing tasking needs available work on the platform. We pause safely with zero charges if queues run dry." },
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
