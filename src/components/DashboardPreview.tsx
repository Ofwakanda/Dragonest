"use client";
import { useState } from "react";
import { dashboard as d } from "@/data/sample";
import { money } from "@/config/site";
import { SampleBadge } from "./Ratings";

/** Owner dashboard mockup: stat tiles, weekly hours bar chart (+ table view), invoices. */
export function DashboardPreview() {
  const [showTable, setShowTable] = useState(false);
  const max = Math.max(...d.weeklyHours.map((w) => w.hours));
  const H = 160;

  return (
    <div className="rounded-card border border-line bg-surface p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-semibold">Owner dashboard · {d.month}</p>
        <SampleBadge />
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tile label="Platform earnings" value={money(d.earnings)} />
        <Tile label="Tasker hours" value={`${d.hours} h`} />
        <Tile label="QA score" value={`${d.qaScore}%`} note="Share of sampled tasks that passed review" />
        <Tile label="Paid to taskers" value={money(d.taskerPay)} />
      </dl>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <figure className="rounded-card border border-line bg-bg p-4">
          <figcaption className="flex items-center justify-between gap-2">
            <span className="font-semibold">Tasker hours per week</span>
            <button type="button" className="text-[0.95rem] link" aria-pressed={showTable} onClick={() => setShowTable((s) => !s)}>
              {showTable ? "Show chart" : "Show as table"}
            </button>
          </figcaption>
          {showTable ? (
            <table className="mt-3 w-full text-left">
              <thead><tr className="border-b border-line"><th scope="col" className="py-2">Week</th><th scope="col" className="py-2 text-right">Hours</th></tr></thead>
              <tbody>{d.weeklyHours.map((w) => <tr key={w.week} className="border-b border-line"><td className="py-2">{w.week}</td><td className="py-2 text-right tabular-nums">{w.hours}</td></tr>)}</tbody>
            </table>
          ) : (
            <svg viewBox={`0 0 320 ${H + 30}`} className="mt-3 w-full" role="img" aria-label={`Bar chart. ${d.weeklyHours.map((w) => `${w.week}: ${w.hours} hours`).join(". ")}.`}>
              {[0, 0.5, 1].map((t) => (
                <line key={t} x1="0" x2="320" y1={H - t * H + 4} y2={H - t * H + 4} stroke="rgb(var(--line))" strokeWidth="1" />
              ))}
              {d.weeklyHours.map((w, i) => {
                const h = (w.hours / max) * (H - 24);
                const x = 20 + i * 76;
                return (
                  <g key={w.week}>
                    <title>{`${w.week}: ${w.hours} hours`}</title>
                    <path d={`M${x},${H + 4} v${-h + 4} q0,-4 4,-4 h32 q4,0 4,4 v${h - 4} z`} fill="rgb(var(--primary))" />
                    <text x={x + 20} y={H + 4 - h - 6} textAnchor="middle" fontSize="12" fill="rgb(var(--ink))">{w.hours}</text>
                    <text x={x + 20} y={H + 22} textAnchor="middle" fontSize="12" fill="rgb(var(--muted))">{w.week.replace("Week ", "Wk ")}</text>
                  </g>
                );
              })}
            </svg>
          )}
        </figure>

        <div className="rounded-card border border-line bg-bg p-4">
          <p className="font-semibold">Invoices</p>
          <table className="mt-3 w-full text-left text-[0.95rem]">
            <caption className="sr-only">Recent invoices</caption>
            <thead><tr className="border-b border-line"><th scope="col" className="py-2">Invoice</th><th scope="col" className="py-2">Period</th><th scope="col" className="py-2 text-right">Amount</th><th scope="col" className="py-2 text-right">Status</th></tr></thead>
            <tbody>
              {d.invoices.map((inv) => (
                <tr key={inv.id} className="border-b border-line">
                  <td className="py-2">{inv.id}</td><td className="py-2">{inv.period}</td>
                  <td className="py-2 text-right tabular-nums">{money(inv.amount)}</td>
                  <td className="py-2 text-right">{inv.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm text-muted">Each invoice lists tasker pay and our fee separately, line by line.</p>
        </div>
      </div>
    </div>
  );
}

function Tile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-card border border-line bg-bg p-4">
      <dt className="text-[0.95rem] text-muted">{label}</dt>
      <dd className="mt-1 text-2xl font-bold tabular-nums">{value}</dd>
      {note && <dd className="mt-1 text-sm text-muted">{note}</dd>}
    </div>
  );
}
