"use client";
import { useState } from "react";
import { BadgeCheck, Star } from "lucide-react";
import { METRICS, reviews, scorecards, type Audience, type SocialPlatform } from "@/data/sample";
export { AccountHealthTelemetry } from "./AccountHealthTelemetry";

export function SampleBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-mono font-semibold text-ink shadow-[0_0_12px_rgba(200,255,46,0.25)]">
      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
      Verified Audited Feedback — Transparent Network Ratings
    </span>
  );
}

export function Scorecard({ audience }: { audience: Audience }) {
  const s = scorecards[audience];
  const avg = Object.values(s.scores).reduce((a, b) => a + b, 0) / METRICS.length;
  return (
    <article className="card border-2 border-line bg-gradient-to-br from-bg via-surface to-bg relative overflow-hidden" aria-labelledby={`sc-${audience}`}>
      <div className="absolute top-0 right-0 h-32 w-32 bg-accent/15 blur-2xl pointer-events-none rounded-full" />
      <h3 id={`sc-${audience}`} className="text-xl font-bold">{s.title}</h3>
      <p className="text-sm font-mono text-muted">{s.ratedBy}</p>
      
      {/* Small informative agency mission text */}
      <div className="mt-3 rounded-lg border border-line bg-surface/80 p-2.5 text-xs text-muted leading-relaxed">
        <strong className="text-ink font-semibold">About Middlemen (MM):</strong> An audited delegation layer connecting credential hosts with verified, identity-checked AI domain taskers under strict non-custodial session recording and automated percentage splits.
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-black font-mono text-ink tracking-tight">{avg.toFixed(1)}</span>
        <div className="flex flex-col">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-mono text-muted">out of 5.0 overall index</span>
        </div>
      </div>

      <dl className="mt-6 space-y-3.5">
        {METRICS.map((m, idx) => {
          const v = s.scores[m];
          const colors = [
            "from-emerald-400 to-teal-500",
            "from-cyan-400 to-blue-500",
            "from-indigo-400 to-purple-500",
            "from-amber-400 to-orange-500",
            "from-lime-400 to-emerald-500",
            "from-accent to-lime-400",
          ];
          const grad = colors[idx % colors.length];

          return (
            <div key={m} className="grid grid-cols-[1fr_auto] gap-x-4 text-xs">
              <dt className="font-medium text-ink flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {m}
              </dt>
              <dd className="font-mono font-bold text-ink tabular-nums">{v.toFixed(1)}</dd>
              <dd aria-hidden="true" className="col-span-2 mt-1.5 h-2 rounded-full bg-surface-2 overflow-hidden border border-line">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${grad} shadow-sm transition-all duration-500`} 
                  style={{ width: `${(v / 5) * 100}%` }} 
                />
              </dd>
            </div>
          );
        })}
      </dl>
    </article>
  );
}

const filters: { value: Audience | "all"; label: string }[] = [
  { value: "all", label: "All reviews" }, { value: "agency", label: "About the agency" },
  { value: "owners", label: "About account owners" }, { value: "taskers", label: "About taskers" },
];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "x") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black text-white text-[11px] font-mono font-semibold border border-neutral-800">
        𝕏 Post
      </span>
    );
  }
  if (platform === "linkedin") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A66C2] text-white text-[11px] font-mono font-semibold">
        LinkedIn
      </span>
    );
  }
  if (platform === "reddit") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF4500] text-white text-[11px] font-mono font-semibold">
        Reddit
      </span>
    );
  }
  if (platform === "discord") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#5865F2] text-white text-[11px] font-mono font-semibold">
        Discord Community
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00B67A] text-white text-[11px] font-mono font-semibold">
      ★ Trustpilot
    </span>
  );
}

export function ReviewList({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Audience | "all">("all");
  const list = reviews.filter((r) => filter === "all" || r.about === filter).slice(0, limit);
  return (
    <div className="space-y-4">
      {!limit && (
        <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">Filter reviews</legend>
          {filters.map((f) => (
            <label key={f.value} className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${filter === f.value ? "border-accent bg-accent text-accent-ink shadow-[0_0_15px_rgba(200,255,46,0.35)]" : "border-line bg-surface hover:bg-surface-2 text-ink"}`}>
              <input type="radio" name="review-filter" className="sr-only" checked={filter === f.value} onChange={() => setFilter(f.value)} />
              {f.label}
            </label>
          ))}
        </fieldset>
      )}
      <p className="sr-only" aria-live="polite">{list.length} reviews shown</p>
      
      {/* Scrollable Horizontal / Responsive Review Deck */}
      <div className="relative">
        <ul className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-line">
          {list.map((r, i) => {
            const borderAccents = [
              "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
              "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
              "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
              "hover:border-accent hover:shadow-[0_0_20px_rgba(200,255,46,0.25)]",
            ];
            const highlightBorder = borderAccents[i % borderAccents.length];

            return (
              <li 
                key={r.id} 
                className={`card min-w-[290px] max-w-[340px] shrink-0 snap-start border-2 border-line bg-gradient-to-br from-bg to-surface transition-all duration-300 ${highlightBorder}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p role="img" className="flex items-center gap-1" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, idx) => (
                      <Star 
                        key={idx} 
                        aria-hidden="true" 
                        className={`h-4 w-4 ${idx < r.rating ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" : "text-line"}`} 
                      />
                    ))}
                  </p>
                  <SocialIcon platform={r.platform} />
                </div>

                <blockquote className="mt-3 text-sm text-ink leading-relaxed font-medium italic">&quot;{r.text}&quot;</blockquote>
                
                <div className="mt-4 pt-3 border-t border-line/60 flex flex-col gap-1 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-ink">{r.from}</span>
                    <span className="text-emerald-500 flex items-center gap-1 font-sans">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  </div>
                  {r.handle && <span className="text-muted text-[11px]">{r.handle}</span>}
                  <div className="flex items-center justify-between text-muted text-[11px] pt-1">
                    <span>{r.engagement}</span>
                    <time dateTime={r.date}>{new Date(r.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</time>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="text-[11px] font-mono text-muted text-right pr-2">← Scroll horizontally to view more platform reviews →</p>
      </div>
    </div>
  );
}
