"use client";

import { useState } from "react";
import { BookOpen, CheckCircle, Award, Flame, Play, ShieldAlert, Sparkles, FileText, ChevronRight } from "lucide-react";

interface Module {
  id: string;
  title: string;
  duration: string;
  level: string;
  summary: string;
  lessons: string[];
  benchmark: string;
}

const MODULES: Module[] = [
  {
    id: "mod-1",
    title: "Negative Constraints & Instruction Following",
    duration: "45 mins",
    level: "Core Rubric Level 1",
    summary: "Mastering zero-tolerance constraint adherence: length caps, banned tokens, formatting mandates, and negative triggers that cause automated failure penalties.",
    lessons: [
      "Identifying explicit vs implicit constraints in frontier LLM prompts",
      "Strict negative constraint handling (e.g. 'do not use semicolons', 'max 3 sentences')",
      "Automated linting and regex pre-submission checks",
    ],
    benchmark: "99.0% Accuracy Benchmark",
  },
  {
    id: "mod-2",
    title: "RLHF Preference Scoring & Justification Writing",
    duration: "60 mins",
    level: "Core Rubric Level 2",
    summary: "Writing bulletproof comparative rationales between Model Candidate A and B that withstand rigorous audit without subjective bias.",
    lessons: [
      "The 5-pillar preference matrix: Factuality, Helpfulness, Conciseness, Tone, and Safety",
      "Writing defensible justifications with inline quote citations",
      "Avoiding evaluator drift and grading fatigue on repetitive queues",
    ],
    benchmark: "Golden Dataset Alignment Exam",
  },
  {
    id: "mod-3",
    title: "Code Review & Algorithmic Invariant Audits",
    duration: "75 mins",
    level: "STEM & Coding Track",
    summary: "Auditing LLM-generated code across Python, TypeScript, and C++ for subtle memory leaks, race conditions, edge-case failure, and algorithmic complexity.",
    lessons: [
      "Detecting hallucinated packages and deprecated API imports",
      "Constructing stress-test unit tests and asymptotic time/space evaluations",
      "Security scanning: SQL injections, sanitization leaks, and unsafe deserialization",
    ],
    benchmark: "Live Sandbox Debugging Test",
  },
  {
    id: "mod-4",
    title: "Multimodal Video & Generative Ad Verification",
    duration: "50 mins",
    level: "Multimodal & Creative Track",
    summary: "Evaluating generative AI video temporal consistency, audio-sync drift, and algorithmic ad compliance standards.",
    lessons: [
      "Frame-by-frame temporal artifact detection in AI video generation",
      "Ad policy compliance: FTC disclosure rules, copyright rubrics, and conversion hooks",
      "Multimodal prompt alignment and prompt-to-image fidelity scoring",
    ],
    benchmark: "Multimodal QA Scorecard",
  },
];

export function RubricCourseHub() {
  const [selectedModule, setSelectedModule] = useState<Module>(MODULES[0]);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-line-strong bg-gradient-to-br from-bg via-surface to-bg p-6 sm:p-8 shadow-card">
      {/* Background Photography Integration */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter contrast-110 opacity-30 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/images/hero-nightshift.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg/95 via-surface/90 to-bg/95 pointer-events-none" />
      <div className="absolute top-0 right-0 h-48 w-48 bg-accent/20 blur-3xl pointer-events-none rounded-full" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-xs uppercase font-bold text-muted tracking-wider">
              Middlemen Training Academy
            </span>
          </div>
          <h3 className="mt-1 text-2xl sm:text-3xl font-black text-ink tracking-tight flex items-center gap-2.5">
            <BookOpen className="h-7 w-7 text-accent shrink-0" />
            Frontier AI Rubric Certification Course
          </h3>
          <p className="mt-1 text-sm text-muted">
            The industry standard curriculum for AI evaluators, RLHF specialists, and prompt quality auditors.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent/15 border border-accent/40 px-3.5 py-1 text-xs font-mono font-bold text-ink flex items-center gap-1.5 shadow-sm">
            <Award className="h-4 w-4 text-accent" />
            Certified Qualification Badge
          </span>
        </div>
      </div>

      {/* Main Course Layout */}
      <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Module Selection Sidebar */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-muted uppercase tracking-wider block">
            Core Curriculum (4 Modules)
          </span>

          <div className="space-y-2.5">
            {MODULES.map((m) => {
              const active = selectedModule.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedModule(m)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-200 ${
                    active
                      ? "border-line-strong bg-bg shadow-[0_0_20px_rgba(200,255,46,0.25)]"
                      : "border-line bg-surface hover:bg-surface-2 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-accent-ink bg-accent/20 px-2 py-0.5 rounded">{m.level}</span>
                    <span className="text-muted">{m.duration}</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink mt-1 flex items-center justify-between">
                    <span>{m.title}</span>
                    <ChevronRight className={`h-4 w-4 text-muted transition-transform ${active ? "rotate-90 text-ink" : ""}`} />
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Detail Panel */}
        <div className="rounded-2xl border-2 border-line-strong bg-bg p-6 space-y-5 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div>
                <span className="text-xs font-mono text-accent-ink font-bold block">{selectedModule.level}</span>
                <h4 className="text-lg font-black text-ink">{selectedModule.title}</h4>
              </div>
              <span className="rounded bg-surface-2 border border-line px-2.5 py-1 text-xs font-mono font-bold text-muted">
                {selectedModule.duration}
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed">
              {selectedModule.summary}
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider block">
                Key Lesson Topics:
              </span>
              <ul className="space-y-1.5 text-xs text-ink/90 font-medium">
                {selectedModule.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface p-3 flex items-center justify-between text-xs font-mono">
              <span className="text-muted">Exit Assessment:</span>
              <strong className="text-ink font-bold flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {selectedModule.benchmark}
              </strong>
            </div>
          </div>

          <div className="pt-4 border-t border-line">
            {enrolled ? (
              <div className="rounded-xl border-2 border-accent bg-accent/15 p-4 text-center space-y-1 font-mono">
                <span className="text-sm font-bold text-ink block">✓ Enrolled in {selectedModule.title}</span>
                <p className="text-xs text-muted">Course materials and rubric exercises unlocked on your dashboard.</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setEnrolled(true)}
                className="btn-accent w-full text-xs font-bold uppercase tracking-wider !py-3 shadow-md flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4 fill-current" />
                Enroll in Rubric Course (Free for Taskers &amp; Owners)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
