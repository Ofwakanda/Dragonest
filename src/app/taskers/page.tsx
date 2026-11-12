import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Binary,
  Cpu,
  Languages,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { TaskerApplyForm } from "@/components/forms/TaskerApplyForm";
import { PageHero, Section } from "@/components/ui";
import { photos } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "For Taskers : Work on Top AI Accounts",
  description: "We match you with verified AI training accounts that fit your skills and your schedule. You work in a secure remote session and get paid every week.",
  path: "/taskers",
});

const projectTracks = [
  {
    icon: Code2,
    domain: "Software engineering and algorithms",
    rate: "$45 to $85 per hour",
    description: "Write and review code, test it, and judge whether an AI's code is correct. Tools: Python, Rust, C++, TypeScript.",
  },
  {
    icon: Binary,
    domain: "Maths and science",
    rate: "$40 to $75 per hour",
    description: "Check proofs, work through calculus and physics, and format answers clearly.",
  },
  {
    icon: Cpu,
    domain: "Reasoning and ranking",
    rate: "$30 to $55 per hour",
    description: "Compare AI answers, rank which is better, and explain why.",
  },
  {
    icon: Languages,
    domain: "Languages and local knowledge",
    rate: "$28 to $50 per hour",
    description: "Translate, check slang and tone, and make sure answers make sense for your culture.",
  },
  {
    icon: Stethoscope,
    domain: "Professional and expert fields",
    rate: "$50 to $95 per hour",
    description: "Review answers in areas like law, finance or healthcare if you have the background.",
  },
];

export default function Taskers() {
  return (
    <>
      {/* 1. TOP SECTION */}
      <PageHero 
        eyebrow="FOR TASKERS" 
        title="Work on top AI accounts. No account of your own needed."
        subhead="We match you with verified AI training accounts that fit your skills and your schedule. You work in a secure remote session, you get paid every week, and you keep at least 30% of what your tasks earn."
        media={
          <div className="relative aspect-[3/2] w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
            <Image
              src={photos.taskers.src!}
              alt={photos.taskers.alt!}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="#apply" className="btn-accent text-center">
              Apply as a tasker
            </Link>
            <a href="#tracks" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1">
              See the project tracks <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted">
            Applying, training and testing are always free. If anyone asks you to pay to join, it is not us.
          </p>
        </div>
      </PageHero>

      {/* 2. WHAT YOU WILL DO */}
      <Section
        id="what-you-do"
        title="What the work looks like"
        intro="AI tools learn from people. You check their answers, fix mistakes, compare responses and explain what is right or wrong. You do it online, from a phone or laptop, in your own hours."
      >
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold text-ink">You do not need to be a genius</h3>
          <p className="mt-3 text-base text-muted leading-relaxed">
            You need to follow instructions carefully, be honest, and show up when you say you will. Some tracks need skills like coding or maths. Others just need good English or your own language.
          </p>
        </div>
      </Section>

      {/* 3. PROJECT TRACKS */}
      <Section 
        id="tracks" 
        tone="tint"
        title="Pick the track that fits you" 
        intro="These are typical hourly ranges. Real pay depends on the project and the work available."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectTracks.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.domain} className="card flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-ink px-2.5 py-1 rounded border border-line bg-surface-2">
                      {item.rate}
                    </span>
                    <IconComp className="h-5 w-5 text-muted" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.domain}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section
        id="how-it-works"
        title="How it works"
        intro="Four straightforward steps from application to your first Friday payout."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Apply", body: "Fill in a short form. It takes about two minutes." },
            { step: "2", title: "Practice", body: "Try sample tasks in a safe practice space so you know what is expected." },
            { step: "3", title: "Get assigned", body: "Once you qualify, we place you on an active project." },
            { step: "4", title: "Get paid", body: "Every Friday you get a statement and your payout." },
          ].map((item) => (
            <div key={item.step} className="card flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. STUCK ACCOUNT BOX */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto rounded-card border border-line bg-bg p-6 sm:p-8">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-ink">Have an account stuck at a test?</h3>
              <p className="text-sm text-muted">
                If you own an account that is stalled at the entry stage, our qualification specialists can help. Once it opens, it can start earning.
              </p>
            </div>
            <Link
              href="/account-owners#submit"
              className="btn-accent text-xs uppercase tracking-wider font-semibold !py-2.5 !px-5 whitespace-nowrap text-center shrink-0"
            >
              Tell us about my account
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CLOSING & APPLICATION FORM */}
      <Section
        id="apply"
        title="Ready to start?"
        intro="Apply today. It is free, and we will reply with your next steps."
      >
        <div className="max-w-2xl mx-auto">
          <TaskerApplyForm />
        </div>
      </Section>
    </>
  );
}
