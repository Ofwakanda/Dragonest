/**
 * @file src/components/ProjectCatalogue.tsx
 * Interactive Portfolio & Platform Project Catalogue.
 * Showcases 20 verified client accounts, platforms, and real earnings delivered.
 */

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  Sparkles,
  SlidersHorizontal,
  Clock,
  Layers,
  FileCheck2,
  Lock,
  X
} from "lucide-react";
import { catalogueProjects, catalogueStats } from "@/data/projects";
import { CatalogueProject } from "@/types/project";
import { Badge, Button, Dialog, NumberTicker, Separator } from "@/components/ui";
import { formatUsd } from "@/lib/formatters";

const platformFilterOptions = [
  { label: "All Platforms (20)", value: "all" },
  { label: "Mercor AI", value: "mercor" },
  { label: "Scale AI", value: "scale-ai" },
  { label: "Outlier.ai", value: "outlier" },
  { label: "Alignerr", value: "alignerr" },
  { label: "DataAnnotation", value: "data-annotation" },
  { label: "Handshake & Other", value: "other" },
];

export function ProjectCatalogue({ limit }: { limit?: number }) {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProjectModal, setActiveProjectModal] = useState<CatalogueProject | null>(null);

  const filteredProjects = useMemo(() => {
    return catalogueProjects.filter((p) => {
      // Platform filter
      const matchesPlatform = 
        selectedPlatform === "all" ||
        (selectedPlatform === "other" 
          ? ["remotasks", "handshake", "workada", "other"].includes(p.platformId)
          : p.platformId === selectedPlatform);

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        p.projectName.toLowerCase().includes(q) ||
        p.platform.toLowerCase().includes(q) ||
        p.track.toLowerCase().includes(q) ||
        p.projectCode.toLowerCase().includes(q);

      return matchesPlatform && matchesSearch;
    });
  }, [selectedPlatform, searchQuery]);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="space-y-8">
      {/* 1. AGGREGATE SUMMARY HERO STRIP */}
      <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left font-mono">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
              Total Client Earnings
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">
              <NumberTicker value={Math.round(catalogueStats.totalGrossGenerated)} prefix="$" />
            </div>
            <p className="text-[11px] text-muted font-sans">
              Verified gross payouts across 20 active client accounts
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
              Disbursed to Owners (55%)
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              <NumberTicker value={Math.round(catalogueStats.totalOwnerNetDisbursed)} prefix="$" />
            </div>
            <p className="text-[11px] text-muted font-sans">
              Direct weekly ACH / wire payouts into client bank accounts
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
              Production Hours Logged
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              <NumberTicker value={Math.round(catalogueStats.totalHoursCompleted)} suffix=" hrs" />
            </div>
            <p className="text-[11px] text-muted font-sans">
              Completed by verified domain specialists in isolated VMs
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-muted font-sans font-medium">
              Average Fleet QA Rating
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              {catalogueStats.avgQaRating}<span className="text-base text-muted font-normal"> / 5.0</span>
            </div>
            <p className="text-[11px] text-muted font-sans">
              Maintained via independent blind audit sampling
            </p>
          </div>
        </div>
      </div>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Platform filter tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-card border border-line bg-surface">
          {platformFilterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedPlatform(opt.value)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                selectedPlatform === opt.value
                  ? "bg-surface-2 text-ink font-semibold shadow-sm border border-line"
                  : "text-muted hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search project or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-card border border-line bg-surface text-xs font-mono text-ink placeholder:text-muted focus:border-ink outline-none"
          />
        </div>
      </div>

      {/* 3. PROJECT GRID */}
      {displayedProjects.length === 0 ? (
        <div className="rounded-card border border-line bg-surface p-12 text-center">
          <p className="text-sm text-muted font-mono">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
          <button
            onClick={() => { setSelectedPlatform("all"); setSearchQuery(""); }}
            className="mt-3 text-xs text-accent hover:underline font-mono"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((p) => (
            <article
              key={p.id}
              className="card flex flex-col justify-between overflow-hidden p-0 border border-line bg-surface hover:border-line-strong transition-all duration-200 group"
            >
              {/* Preview image */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-bg border-b border-line cursor-pointer"
                onClick={() => setActiveProjectModal(p)}
              >
                <Image
                  src={p.previewImage}
                  alt={`${p.platform} ${p.projectName} earnings statement`}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity rounded border border-line bg-surface-2/95 px-3 py-1 text-xs font-mono text-ink shadow-lg backdrop-blur-md">
                    Inspect Statement &rarr;
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-muted uppercase">
                      {p.platform}
                    </span>
                    <Badge variant={p.status === "Active Earning" ? "accent" : "muted"} className="text-[10px] py-0">
                      {p.status}
                    </Badge>
                  </div>

                  <h3 
                    onClick={() => setActiveProjectModal(p)}
                    className="text-base font-semibold text-ink group-hover:text-accent transition-colors cursor-pointer"
                  >
                    {p.projectName}
                  </h3>
                  <p className="text-xs text-muted font-mono mt-0.5">{p.projectCode} · {p.track}</p>
                </div>

                {/* Earnings Highlight Box */}
                <div className="rounded-card border border-line bg-surface-2 p-3 font-mono">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] text-muted">Client Gross</span>
                    <span className="text-lg font-bold text-ink">{formatUsd(p.clientGrossEarnings)}</span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1 pt-1.5 border-t border-line/60">
                    <span className="text-[11px] text-accent font-semibold">Owner Net (55%)</span>
                    <span className="text-sm font-bold text-accent">{formatUsd(p.ownerNetPayout)}</span>
                  </div>
                </div>

                {/* Micro telemetry footer */}
                <div className="pt-2 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>{p.hoursWorked} hrs · {p.avgHourlyRate}/hr</span>
                  <span className="font-semibold text-ink">QA {p.qaScore} / 5.0</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 4. MODAL DIALOG: HIGH-FIDELITY PROJECT INSPECTOR */}
      <Dialog
        open={Boolean(activeProjectModal)}
        onOpenChange={(open) => !open && setActiveProjectModal(null)}
        className="max-w-3xl p-6 sm:p-8"
      >
        {activeProjectModal && (
          <div className="space-y-6 font-sans">
            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="status">{activeProjectModal.platform}</Badge>
                <span className="text-xs font-mono text-muted">{activeProjectModal.projectCode}</span>
                <span className="text-xs font-mono text-accent ml-auto">Verified Payout Record</span>
              </div>
              <h2 className="text-2xl font-bold text-ink tracking-tight">
                {activeProjectModal.projectName}
              </h2>
              <p className="text-sm text-muted mt-1">{activeProjectModal.track} · {activeProjectModal.duration}</p>
            </div>

            {/* High Resolution Preview Image */}
            <div className="relative aspect-[16/10] w-full rounded-card overflow-hidden border border-line bg-bg shadow-md">
              <Image
                src={activeProjectModal.previewImage}
                alt={activeProjectModal.projectName}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-contain"
              />
            </div>

            {/* Itemized Financial Breakdown */}
            <div className="rounded-card border border-line bg-surface-2 p-4 font-mono text-xs space-y-2">
              <div className="flex justify-between items-center text-muted">
                <span>Total Client Gross Generated</span>
                <span className="text-sm font-bold text-ink">{formatUsd(activeProjectModal.clientGrossEarnings)}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>Specialist Compensation (30%+)</span>
                <span>{formatUsd(activeProjectModal.specialistPayout)}</span>
              </div>
              <div className="flex justify-between items-center text-muted">
                <span>MIDDLEMEN Management &amp; QA Fee (15%)</span>
                <span>{formatUsd(activeProjectModal.mmFee)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-line text-ink font-bold text-sm">
                <span className="text-accent">Owner Net Settlement (55%)</span>
                <span className="text-base text-accent">{formatUsd(activeProjectModal.ownerNetPayout)}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                Project Operational Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-muted font-sans">
                {activeProjectModal.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Settlement Hash & Security Footer */}
            <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-muted">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> Non-Custodial Session Confinement
              </span>
              <span>Audit Stamp: <strong className="text-ink">{activeProjectModal.settlementHash}</strong></span>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
