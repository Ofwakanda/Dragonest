import { AlertTriangle, CheckCircle2, Clock, XCircle } from "lucide-react";
import { SampleBadge } from "@/components/Ratings";

export const metadata = { title: "Admin dashboard (mockup)", robots: { index: false, follow: false } };

/* Admin dashboard MOCKUP — static sample data to show layout.
   In production this route sits behind SSO + 2FA and role-based access. */

const kpis = [
  { label: "Accounts in audit", value: "7" },
  { label: "Needs Onboarding", value: "12" },
  { label: "Needs Tasking", value: "31" },
  { label: "Active taskers", value: "54" },
  { label: "QA pass rate (7 days)", value: "93%" },
  { label: "Payouts due Friday", value: "$18,420" },
];

type Status = "ok" | "review" | "blocked" | "pending";
const statusUi: Record<Status, { icon: typeof CheckCircle2; label: string; cls: string }> = {
  ok: { icon: CheckCircle2, label: "Permitted", cls: "text-accent-ink" },
  review: { icon: AlertTriangle, label: "Needs review", cls: "text-warn" },
  blocked: { icon: XCircle, label: "Not permitted", cls: "text-danger" },
  pending: { icon: Clock, label: "Pending", cls: "text-muted" },
};

const pipeline: { ref: string; platform: string; status: Status; cls: string; owner: string; tasker: string; qa: string }[] = [
  { ref: "ACC-7Q2K1A", platform: "Platform A", status: "ok", cls: "Needs Tasking", owner: "A-2291", tasker: "T-1042", qa: "96%" },
  { ref: "ACC-7Q2M9C", platform: "Platform B", status: "review", cls: "—", owner: "A-2310", tasker: "—", qa: "—" },
  { ref: "ACC-7Q2P4D", platform: "Platform A", status: "ok", cls: "Needs Onboarding", owner: "A-1877", tasker: "T-0988", qa: "91%" },
  { ref: "ACC-7Q2R8F", platform: "Platform C", status: "blocked", cls: "Declined — refund issued", owner: "A-2322", tasker: "—", qa: "—" },
  { ref: "ACC-7Q2T3H", platform: "Platform A", status: "pending", cls: "In audit", owner: "A-2330", tasker: "—", qa: "—" },
];

const qaQueue = [
  { tasker: "T-1042", account: "ACC-7Q2K1A", samples: 12, flagged: 0 },
  { tasker: "T-0988", account: "ACC-7Q2P4D", samples: 10, flagged: 1 },
  { tasker: "T-1107", account: "ACC-7Q1Z6B", samples: 8, flagged: 2 },
];

export default function Admin() {
  return (
    <div className="container py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl">Operations dashboard</h1>
        <SampleBadge />
      </div>
      <p className="mt-2 text-muted">Mockup for internal staff. Platform names and IDs are placeholders.</p>

      <section aria-labelledby="kpi-h" className="mt-8">
        <h2 id="kpi-h" className="sr-only">Key numbers</h2>
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {kpis.map((k) => (
            <div key={k.label} className="card !p-4"><dt className="text-[0.95rem] text-muted">{k.label}</dt><dd className="mt-1 text-2xl font-bold tabular-nums">{k.value}</dd></div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="pipe-h" className="mt-10">
        <h2 id="pipe-h" className="text-2xl">Account pipeline</h2>
        <div className="mt-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] text-left text-[0.95rem]">
            <thead className="bg-surface-2"><tr>
              {["Reference", "Platform", "Platform rules", "Classification", "Owner", "Tasker", "QA"].map((h) => <th key={h} scope="col" className="px-4 py-3">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-line">
              {pipeline.map((p) => {
                const s = statusUi[p.status];
                return (
                  <tr key={p.ref}>
                    <th scope="row" className="px-4 py-3 font-mono font-medium">{p.ref}</th>
                    <td className="px-4 py-3">{p.platform}</td>
                    <td className={`px-4 py-3 font-medium ${s.cls}`}><span className="inline-flex items-center gap-2"><s.icon aria-hidden="true" className="h-4 w-4" />{s.label}</span></td>
                    <td className="px-4 py-3">{p.cls}</td>
                    <td className="px-4 py-3">{p.owner}</td>
                    <td className="px-4 py-3">{p.tasker}</td>
                    <td className="px-4 py-3 tabular-nums">{p.qa}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="qa-h" className="min-w-0">
          <h2 id="qa-h" className="text-2xl">QA queue this week</h2>
          <div className="mt-4 overflow-x-auto rounded-card border border-line">
            <table className="w-full text-left text-[0.95rem]">
              <thead className="bg-surface-2"><tr><th scope="col" className="px-4 py-3">Tasker</th><th scope="col" className="px-4 py-3">Account</th><th scope="col" className="px-4 py-3 text-right">Samples</th><th scope="col" className="px-4 py-3 text-right">Flagged</th></tr></thead>
              <tbody className="divide-y divide-line">
                {qaQueue.map((q) => (
                  <tr key={q.tasker}><th scope="row" className="px-4 py-3 font-medium">{q.tasker}</th><td className="px-4 py-3 font-mono">{q.account}</td><td className="px-4 py-3 text-right tabular-nums">{q.samples}</td><td className="px-4 py-3 text-right tabular-nums">{q.flagged}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section aria-labelledby="alerts-h" className="min-w-0">
          <h2 id="alerts-h" className="text-2xl">Alerts</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3 rounded-card border border-warn bg-warn-soft p-4 text-warn"><AlertTriangle aria-hidden="true" className="h-5 w-5 shrink-0" /><span><strong>Platform B</strong> updated its contributor terms. Compliance re-check due in 1 business day.</span></li>
            <li className="flex gap-3 rounded-card border border-line bg-surface p-4"><Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-muted" /><span>3 accommodation requests waiting for a coach.</span></li>
            <li className="flex gap-3 rounded-card border border-line bg-surface p-4"><Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-muted" /><span>2 rating appeals open, oldest 3 days.</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
