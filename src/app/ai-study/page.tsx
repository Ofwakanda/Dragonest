import Link from "next/link";
import { Bot, Cpu, Film, Flame, Sparkles, Terminal, Video, Wand2, Workflow, Zap } from "lucide-react";
import { FeatureGrid, PageHero, Section } from "@/components/ui";
import { RubricCourseHub } from "@/components/RubricCourseHub";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Study & Task Automation Lab",
  description: "We teach and train artificial intelligence how to execute your complex AI tasks, automate workflows, generate AI videos, and run algorithmic AI ads.",
  path: "/ai-study",
});

export default function AIStudyPage() {
  return (
    <>
      <PageHero 
        eyebrow="AI Engineering & Research Lab" 
        title="AI Study: We Teach AI How to Task on Your Workflows"
        backgroundImage="/images/ai-study-lab.jpg"
        subhead="Beyond human tasking: we calibrate frontier AI models, construct end-to-end task automations, generate multimodal AI video pipelines, and optimize high-converting AI ads."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#automations" className="btn-accent">Explore AI Automations</a>
          <a href="#videos-ads" className="btn-secondary">AI Videos &amp; Ads</a>
        </div>
      </PageHero>

      {/* SECTION 1: HOW WE TEACH AI */}
      <Section 
        id="automations" 
        title="Training AI On Your Domain Workflows" 
        eyebrow="Machine Learning & RLHF"
        intro="We translate your proprietary guidelines, rubrics, and task queues into fine-tuned models and autonomous agent pipelines."
        backgroundImage="/images/hero-nightshift.jpg"
      >
        <FeatureGrid items={[
          { icon: Bot, title: "Autonomous Task Execution", body: "We train customized agent chains that take raw task payloads, reason through step-by-step negative constraints, and output high-accuracy completions." },
          { icon: Workflow, title: "Workflow Automation Pipelines", body: "Connect your intake systems directly to self-evaluating LLM agents with automated retry logic, hallucination detection, and benchmark unit tests." },
          { icon: Terminal, title: "Prompt Distillation & RLHF", body: "Transform 50-page complex rulebooks into few-shot calibrations and golden dataset prompts verified by human domain experts." },
        ]} />
      </Section>

      {/* SECTION 2: AI VIDEOS & ADS */}
      <Section 
        id="videos-ads" 
        title="Generative AI Video & Algorithmic Advertising" 
        eyebrow="Creative Generation"
        intro="Scale your visual marketing and training assets with end-to-end automated video workflows and high-converting performance ads."
        backgroundImage="/images/taskers-review.jpg"
      >
        <FeatureGrid items={[
          { icon: Film, title: "AI Video Generation", body: "Synthetic video generation for task instructions, procedural walkthroughs, multi-speaker simulations, and interactive multimodal training." },
          { icon: Zap, title: "AI Performance Ads", body: "Data-driven ad creative engines that produce high-CTR copy, dynamic visual variations, and localized messaging tailored to your exact target demographics." },
          { icon: Sparkles, title: "Multimodal Visual QA", body: "Automated computer vision and video analysis rubrics to verify visual consistency, brand guidelines, and compliance constraints." },
        ]} />
      </Section>

      {/* SECTION 3: FRONTIER AI RUBRIC CERTIFICATION COURSE */}
      <Section 
        id="rubric-course" 
        title="Frontier AI Rubric Certification Course" 
        eyebrow="Evaluator Qualification"
        intro="The comprehensive curriculum teaching taskers and model auditors how to evaluate frontier AI outputs, master strict negative constraints, and score preference benchmarks."
      >
        <RubricCourseHub />
      </Section>

      {/* INTAKE CONSULTATION */}
      <Section 
        id="consult" 
        title="Deploy AI Automations On Your Queues" 
        eyebrow="Custom Deployment"
        intro="Tell us about the workflows or tasks you want to automate. We will build, evaluate, and benchmark a prototype pipeline."
        backgroundImage="/images/account-owners.jpg"
      >
        <div className="rounded-2xl border-2 border-line-strong bg-surface p-8 max-w-2xl mx-auto space-y-4 shadow-lg">
          <h3 className="text-2xl font-bold text-ink flex items-center gap-2">
            <Cpu className="h-6 w-6 text-accent" />
            Schedule an AI Automation Audit
          </h3>
          <p className="text-sm text-muted">
            Send our AI engineering team your workflow specifications or task samples. We will return an automated pipeline architecture and performance benchmark report.
          </p>
          <div className="pt-2">
            <Link href="/about#contact" className="btn-accent w-full text-center">
              Request AI Study &amp; Automation Brief
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
