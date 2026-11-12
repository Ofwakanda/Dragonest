import Link from "next/link";
import { Bot, Workflow, Terminal, BookOpen, Send, ArrowRight } from "lucide-react";
import { FeatureGrid, PageHero, Section } from "@/components/ui";
import { RubricCourseHub } from "@/components/RubricCourseHub";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Study & Automations : Learn AI Skills. Put Them to Work.",
  description: "Learn how to evaluate AI models, pass entry benchmarks, and automate repetitive workflows.",
  path: "/ai-study",
});

export default function AIStudyPage() {
  return (
    <>
      <PageHero 
        eyebrow="AI STUDY &amp; AUTOMATIONS" 
        title="Learn AI skills. Put them to work."
        subhead="Practical training and workflow automation for AI contributors and account owners. We show you how to master platform evaluation rubrics and use AI tools to speed up everyday tasks."
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a href="#included" className="btn-accent">See what is included</a>
          <a href={site.telegram.hub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1">
            Ask us a question <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* THREE SIMPLE POINTS */}
      <Section id="included" title="Three simple points" intro="Everything you need to know about our study and automation track:">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">What you will learn</span>
            <h3 className="text-lg font-semibold text-ink">Master Platform Rubrics</h3>
            <p className="text-sm text-muted leading-relaxed">
              How to review and rate AI outputs accurately to pass platform entry benchmarks and keep high quality scores.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">How it works</span>
            <h3 className="text-lg font-semibold text-ink">Guided Practice &amp; Support</h3>
            <p className="text-sm text-muted leading-relaxed">
              Self-paced task walkthroughs, real practice prompts, and one-to-one Telegram guidance from senior evaluators.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">What it costs</span>
            <h3 className="text-lg font-semibold text-ink">Free to Start</h3>
            <p className="text-sm text-muted leading-relaxed">
              Free to start for all active Middlemen contributors and account owners. No upfront retainers or surprise fees.
            </p>
          </div>
        </div>
      </Section>

      {/* DETAILED CURRICULUM */}
      <Section 
        id="curriculum" 
        tone="tint"
        title="Curriculum &amp; Benchmark Guides" 
        eyebrow="Course Modules"
        intro="Step-by-step training modules designed to help you qualify for active project queues:"
      >
        <RubricCourseHub />
      </Section>
    </>
  );
}
