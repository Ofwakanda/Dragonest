import { 
  Accessibility, 
  Eye, 
  HandCoins, 
  Scale, 
  ShieldCheck, 
  Users,
  Wallet,
  Globe2,
  Clock,
  BookOpen,
  Home,
  Laptop,
  PenTool,
  MessageSquare,
  Binary,
  Code2,
  Languages,
  SearchCheck,
  Send,
  Lock,
  Layers,
  ArrowRight,
  MonitorCheck,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FeatureGrid, PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Middlemen : Infrastructure for Managed AI Training Accounts",
  description: "Middlemen pairs enterprise AI training accounts with vetted domain specialists, providing strict session security, quality assurance, and weekly transparent financial settlements.",
  path: "/about",
});

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  badge: string;
  telegram?: string;
  email: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    name: "Marcus Vance",
    role: "Founder & Managing Director",
    badge: "Strategy & Ops",
    initials: "MV",
    focus: "Platform partnerships, regulatory compliance & enterprise staffing architectures",
    bio: "Pioneered verified human-in-the-loop workflows across major AI training platforms. Dedicated to closing the gap between idle accounts and competent talent.",
    telegram: site.telegram.hub,
    email: site.email.hello,
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Learning Officer & Head of Trainer Development",
    badge: "Curriculum & RLHF",
    initials: "ER",
    focus: "Specialist trainer onboarding, multi-turn reasoning rubrics & cognitive ergonomics",
    bio: "Former researcher in computational linguistics and cognitive ergonomics. Authors our multi-step chain-of-thought training modules and domain qualification tracks.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Aris Thorne",
    role: "Head of AI Quality Assurance & Evaluation Fleet",
    badge: "QA & Benchmarks",
    initials: "AT",
    focus: "Multi-modal scoring rubrics, automated audit sampling & fleet scorecards (4.9/5.0 target)",
    bio: "Over 8 years designing rigorous evaluation pipelines for high-stakes ML systems. Manages our independent blind sampling audits and quality appeal tribunals.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Kaelen Diaz",
    role: "Director of Systems & Security Engineering",
    badge: "Zero Trust & Cryptography",
    initials: "KD",
    focus: "Isolated VM sandboxes, zero clipboard confinement & Telegram encrypted dispatch",
    bio: "Information security veteran with a focus on containment architecture. Ensures host account credentials never touch public internet forms or unmonitored endpoints.",
    telegram: site.telegram.hub,
    email: site.email.security,
  },
  {
    name: "Sora Tanaka",
    role: "VP of Contributor Relations & Accessibility",
    badge: "Community & Inclusion",
    initials: "ST",
    focus: "24/7 Telegram customer care, assistive technology accommodations & fair pay floors",
    bio: "Advocate for neurodivergent and disabled digital workers. Champions our non-negotiable 30%+ tasker pay floor and 24/7 real-time Telegram response desk.",
    telegram: site.telegram.hub,
    email: site.email.access,
  },
];

export default function About() {
  return (
    <>
      {/* 1. PROFESSIONAL HERO */}
      <PageHero 
        eyebrow="Company &amp; Operations" 
        title="Infrastructure for Managed AI Training Accounts"
        subhead="Middlemen bridges underutilized AI training accounts with vetted domain specialists. We maintain strict session containment, continuous quality assurance, and weekly automated settlement statements."
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="/account-owners#submit" className="btn-accent">
            Connect Your Account
          </Link>
          <Link href="#about-mm" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1">
            About MM Operations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* 2. CORE OPERATIONAL METRICS */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-4 max-w-4xl mx-auto text-center font-mono">
            <div className="card">
              <span className="text-3xl font-semibold text-ink">55%</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Owner Distribution</p>
              <p className="mt-1 text-xs text-muted font-sans">Direct weekly payout on all platform earnings</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">30%+</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Specialist Pay Floor</p>
              <p className="mt-1 text-xs text-muted font-sans">Guaranteed base share for domain taskers</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">100%</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Isolated Sessions</p>
              <p className="mt-1 text-xs text-muted font-sans">Zero clipboard sharing or local credential storage</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">Every Fri</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Settlement Cadence</p>
              <p className="mt-1 text-xs text-muted font-sans">Digital itemized statements delivered weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATING MODEL */}
      <Section 
        id="model" 
        eyebrow="Operating Model"
        title="How Managed Work Is Executed" 
        intro="Enterprise platforms such as Outlier, Scale AI, and Alignerr require consistent high-accuracy task execution. We coordinate the full lifecycle."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                01
              </div>
              <h3 className="text-lg font-semibold text-ink">Queue Verification &amp; Calibration</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                We review queue availability and assessment requirements on accounts across Outlier, Alignerr, and Scale AI. Setup and review are completely free.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                02
              </div>
              <h3 className="text-lg font-semibold text-ink">Dedicated Specialist Assignment</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Accounts are paired with certified domain evaluators who log into secure, isolated virtual sessions to complete queue tasks daily while maintaining 4.8+ QA scores.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                03
              </div>
              <h3 className="text-lg font-semibold text-ink">Reconciliation &amp; Settlement</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Platform funds deposit directly to the account owner. Every Friday, an itemized statement accounts for the 55% owner net, tasker compensation, and 15% management fee.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. CONTRIBUTOR PROFILES */}
      <Section id="who" tone="tint" title="Built for Dedicated Domain Evaluators" eyebrow="Contributor Profiles">
        <p className="text-base text-muted max-w-2xl mb-8 -mt-4">
          Middlemen matches verified AI training accounts with specialized contributors across diverse fields:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Code2, who: "Software Engineers", situation: "Full stack, backend, and algorithmic developers evaluating code generation, writing complex test suites, and performing multi-file refactoring." },
            { icon: Binary, who: "STEM & Mathematics Specialists", situation: "Graduates and researchers in mathematics, physics, and statistics validating step-by-step reasoning and formal logic proofs." },
            { icon: Globe2, who: "Linguists & Translators", situation: "Native speakers in non-English locales providing nuanced dialect localization, cultural validation, and translation QA." },
            { icon: BookOpen, who: "Technical Writers & Editors", situation: "Clear communicators capable of grading tone, instruction-following fidelity, hallucination rates, and structural coherence." },
            { icon: Home, who: "Remote Research Professionals", situation: "Domain experts seeking flexible asynchronous work with transparent weekly compensation and dedicated account matching." },
            { icon: Laptop, who: "Subject Matter Consultants", situation: "Law, medicine, and finance specialists reviewing domain-specific edge cases, regulatory queries, and clinical reasoning." },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.who} className="card flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                    <IconComp className="h-4 w-4 text-muted" />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.who}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.situation}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 p-6 rounded-card border border-line bg-surface text-center">
          <p className="text-base font-semibold text-ink mb-1">Looking to task on high-demand AI queues?</p>
          <p className="text-sm text-muted mb-4">Complete an evaluation application to qualify for active developer, STEM, or reasoning queues.</p>
          <Link href="/taskers#apply" className="btn-accent text-sm px-6 py-2.5">
            Apply as an Evaluator
          </Link>
        </div>
      </Section>

      {/* 5. EVALUATION WORKFLOW */}
      <Section
        id="apply"
        title="Evaluation &amp; Matching Workflow"
        eyebrow="Onboarding"
        intro="Domain specialists undergo thorough rubric calibration before accessing live queue sessions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Domain Application", body: "Submit your domain background, technical proficiencies, timezone, and weekly availability." },
            { step: "02", title: "Rubric Calibration", body: "Complete practice benchmarks to verify compliance with platform-specific grading rubrics." },
            { step: "03", title: "Session Provisioning", body: "Access is granted via secure, isolated virtual environments with dedicated supervisor support." },
            { step: "04", title: "Active Queue Work", body: "Execute tasks daily and receive transparent weekly disbursements with at least 30% revenue share." },
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
        <div className="mt-8 text-center">
          <Link href="/taskers#apply" className="btn-accent">
            Apply as an Evaluator
          </Link>
        </div>
      </Section>

      {/* 6. OPERATIONAL PRINCIPLES */}
      <Section id="values" tone="tint" title="Operational Principles" eyebrow="Governance">
        <FeatureGrid items={[
          { icon: Scale, title: "Platform Compliance", body: "We regularly review partner platform terms and operate strictly within allowable contractual boundaries." },
          { icon: Eye, title: "Transparent Accounting", body: "Every percentage split and management fee is published upfront with line-by-line Friday statements." },
          { icon: HandCoins, title: "Guaranteed Pay Floors", body: "Specialist contributors always receive at least 30% of gross earnings, distributed on a strict weekly schedule." },
          { icon: Accessibility, title: "Universal Accessibility", body: "Flexible asynchronous workflows engineered to accommodate neurodivergent contributors and global schedules." },
          { icon: ShieldCheck, title: "Credential Isolation", body: "Credentials are never requested through public forms. All access is handled via encrypted channels into sandboxed VMs." },
          { icon: Users, title: "Dedicated Support Desk", body: "Direct access to operations leads via Telegram with continuous human-in-the-loop oversight." },
        ]} />
      </Section>

      {/* 7. ABOUT MM : OPERATIONS, INFRASTRUCTURE & LEADERSHIP */}
      <Section
        id="about-mm"
        title="About MM"
        eyebrow="Operations &amp; Infrastructure"
        intro="Behind our simple interface is institutional infrastructure. We maintain rigorous session isolation, weekly quality audits, and transparent financial reconciliation."
      >
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">Containment Architecture</span>
            <h4 className="text-lg font-semibold text-ink">Isolated Virtual Sessions</h4>
            <p className="text-sm text-muted leading-relaxed">
              Taskers operate inside sandboxed remote virtual machines with disabled local clipboards and blocked file transfers. Credentials never touch unmonitored endpoints.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">Quality Control</span>
            <h4 className="text-lg font-semibold text-ink">Independent Blind Audits</h4>
            <p className="text-sm text-muted leading-relaxed">
              Continuous sampling audits ensure project tasks maintain a 4.9/5.0 target score, protecting account standing and unlocking higher-tier project queues.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">Financial Transparency</span>
            <h4 className="text-lg font-semibold text-ink">Weekly Friday Settlement</h4>
            <p className="text-sm text-muted leading-relaxed">
              Automated itemized accounting statements every Friday detail gross earnings, tasker pay floors (30%+), and operational fees for full auditability.
            </p>
          </div>
        </div>

        {/* OPERATIONS LEADERSHIP TEAM */}
        <h3 className="text-xl font-semibold text-ink mb-4">Operations Leadership</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {team.map((member) => (
            <div key={member.name} className="card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface-2 font-mono text-sm font-semibold text-ink">
                    {member.initials}
                  </div>
                  <span className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] font-medium text-muted">
                    {member.badge}
                  </span>
                </div>

                <h4 className="mt-4 text-base font-semibold text-ink">{member.name}</h4>
                <p className="text-xs font-mono text-muted">{member.role}</p>
                <p className="mt-3 text-xs font-mono text-ink/80">{member.focus}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-line flex items-center justify-between text-xs font-mono">
                <a 
                  href={member.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink transition-colors flex items-center gap-1"
                >
                  <Send className="h-3 w-3" /> Telegram Hub
                </a>
                <a href={`mailto:${member.email}`} className="text-muted hover:text-ink transition-colors">
                  {member.email}
                </a>
              </div>
            </div>
          ))}

          {/* JOIN CARD */}
          <div className="card p-6 flex flex-col justify-between border-dashed">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded border border-line bg-surface-2 font-mono text-sm font-semibold text-ink">
                +
              </span>
              <h4 className="mt-4 text-base font-semibold text-ink">Join the Specialist Fleet</h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Engineers, mathematicians, and linguists: we match your expertise with active project queues with weekly compensation.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-line">
              <Link href="/taskers#apply" className="btn-accent w-full text-center text-sm">
                Apply as an Evaluator
              </Link>
            </div>
          </div>
        </div>

        {/* REGULATORY & ENTITY DISCLOSURE */}
        <div className="grid gap-4 sm:grid-cols-3 rounded-card border border-line bg-surface p-5 text-xs font-mono">
          <div>
            <span className="text-muted uppercase">Governing Entity</span>
            <p className="font-semibold text-ink mt-0.5">{site.legalEntity}</p>
          </div>
          <div>
            <span className="text-muted uppercase">Jurisdiction</span>
            <p className="font-semibold text-ink mt-0.5">{site.jurisdiction}</p>
          </div>
          <div>
            <span className="text-muted uppercase">Security Coordination</span>
            <p className="font-semibold text-ink mt-0.5">{site.email.security}</p>
          </div>
        </div>
      </Section>

      {/* 8. SUPPORTED DOMAIN WORKFLOWS */}
      <Section 
        id="ecosystem" 
        tone="tint" 
        title="Evaluated Domain Workflows" 
        eyebrow="Specialization"
        intro="Enterprise frontier models depend on high-fidelity human evaluation across specialized tracks."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MessageSquare, title: "Pairwise Preference Ranking", body: "Evaluating subtle response trade-offs, instruction fidelity, and structural alignment for RLHF reward models." },
            { icon: PenTool, title: "Adversarial Prompt Engineering", body: "Authoring complex multi-turn edge prompts designed to test safety barriers and hallucination boundaries." },
            { icon: Binary, title: "Mathematical & Formal Logic Proofs", body: "Validating step-by-step calculus proofs, algorithmic reasoning, and scientific reasoning rubrics." },
            { icon: Code2, title: "Code Generation & Refactoring", body: "Authoring unit tests, reviewing pull requests, and verifying multi-language algorithmic implementations." },
            { icon: Languages, title: "Multilingual Localization", body: "Deep cultural nuance, idiomatic accuracy, and non-English alignment across 30+ regional dialects." },
            { icon: SearchCheck, title: "Factual Verification & Grounding", body: "Citation validation, grounding verification, and source cross-referencing against primary documentation." },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card p-6 flex flex-col">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                  <IconComp className="h-4 w-4 text-muted" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 9. CONTACT OPERATIONS */}
      <Section 
        id="contact" 
        title="Contact Operations" 
        eyebrow="Inquiries"
        intro="Submit general questions, enterprise partnership requests, or security coordination."
      >
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1.2fr]">
          <div>
            <h3 className="text-lg font-semibold text-ink mb-4">Send a Message</h3>
            <ContactForm />
          </div>

          <div className="space-y-4">
            {/* TELEGRAM OPERATIONS DESK */}
            <div className="card p-5 font-mono">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-sans font-semibold text-base text-ink">
                  <Send className="text-muted h-4 w-4" /> Telegram Operations Desk
                </span>
                <span className="rounded border border-line bg-surface-2 text-muted text-xs px-2 py-0.5">
                  24/7 Response
                </span>
              </div>
              <p className="mt-2 text-xs text-muted font-sans leading-relaxed">
                Connect directly with verified operations coordinators for onboarding, audit review, or credential coordination.
              </p>
              <div className="mt-4">
                <a 
                  className="btn-accent w-full text-center text-xs flex items-center justify-center gap-2"
                  href={site.telegram.hub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Open Telegram Desk</span>
                </a>
              </div>
            </div>

            {/* DIRECT TEAM DEPARTMENT INQUIRIES */}
            <div className="card p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Department Channels</h4>
              
              <ul className="space-y-2.5 text-xs font-mono">
                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-semibold text-ink block">Marcus Vance</span>
                    <span className="text-muted">Partnerships &amp; Accounts</span>
                  </div>
                  <a href={`mailto:${site.email.hello}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-semibold text-ink block">Dr. Elena Rostova</span>
                    <span className="text-muted">Curriculum &amp; Training</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-semibold text-ink block">Aris Thorne</span>
                    <span className="text-muted">Quality Assurance</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-semibold text-ink block">Kaelen Diaz</span>
                    <span className="text-muted">Security &amp; Containment</span>
                  </div>
                  <a href={`mailto:${site.email.security}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-ink block">Sora Tanaka</span>
                    <span className="text-muted">Contributor Relations</span>
                  </div>
                  <a href={`mailto:${site.email.access}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
