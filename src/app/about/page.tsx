import { 
  Accessibility, 
  Award, 
  BookOpen, 
  Bot, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  ExternalLink, 
  Eye, 
  GraduationCap, 
  HandCoins, 
  Network, 
  Scale, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Users 
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FeatureGrid, PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Our Mission, Vision & Team",
  description: "Ushering in a new wave of competent AI trainers to work for you. Meet our leadership team and explore our ecosystem alignment with pioneering AI creators and research collectives.",
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
    bio: "Over 8 years designing rigorous evaluation pipelines for high-stakes ML systems. Manages our independent blind-sampling audits and quality appeal tribunals.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Kaelen Diaz",
    role: "Director of Systems & Security Engineering",
    badge: "Zero-Trust & Cryptography",
    initials: "KD",
    focus: "Isolated VM sandboxes, zero-clipboard confinement & Telegram encrypted dispatch",
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

interface EcosystemOrg {
  name: string;
  category: "Research Collective" | "AI Creator" | "Alignment Lab";
  handle: string;
  url: string;
  description: string;
  methodology: string;
  tag: string;
}

const ecosystemOrgs: EcosystemOrg[] = [
  {
    name: "Nous Research",
    category: "Research Collective",
    handle: "nousresearch.com",
    url: "https://nousresearch.com",
    tag: "Synthetic Data & Reasoning",
    description: "Renowned creators of the open Hermes-series models, world-class synthetic reasoning datasets, and agentic benchmark datasets.",
    methodology: "We calibrate our taskers on multi-step reasoning validation and chain-of-thought error verification standards established by Nous Research architectures.",
  },
  {
    name: "EleutherAI",
    category: "Research Collective",
    handle: "eleuther.ai",
    url: "https://www.eleuther.ai",
    tag: "Evaluation Harness & Ethics",
    description: "Pioneering non-profit AI research lab behind the standard LM Evaluation Harness, Pythia interpretability suite, and open alignment studies.",
    methodology: "Our internal QA scoring rubrics incorporate standardized bias metrics and adversarial prompt testing frameworks inspired by EleutherAI research.",
  },
  {
    name: "CarperAI (LAION Ecosystem)",
    category: "Alignment Lab",
    handle: "carper.ai",
    url: "https://carper.ai",
    tag: "Open RLHF & Reward Models",
    description: "Grassroots research lab dedicated to advancing open-source Reinforcement Learning from Human Feedback (RLHF) and fine-tuning datasets.",
    methodology: "Taskers are trained directly on multi-attribute preference ranking, pairwise comparison matrices, and reward model verification protocols.",
  },
  {
    name: "Matthew Berman",
    category: "AI Creator",
    handle: "youtube.com/@MatthewBerman",
    url: "https://www.youtube.com/@MatthewBerman",
    tag: "Model Benchmarks & Agentic Workflows",
    description: "One of the most trusted independent AI educators and technical evaluators analyzing local LLM performance, open weights, and autonomous tools.",
    methodology: "We integrate weekly stress-test analyses and practical agent evaluation frameworks highlighted in Matthew Berman's research into our continuing education briefings.",
  },
  {
    name: "Yannic Kilcher / AI Pub",
    category: "AI Creator",
    handle: "youtube.com/@YannicKilcher",
    url: "https://www.youtube.com/@YannicKilcher",
    tag: "Paper Audits & Red Teaming",
    description: "Influential machine learning researcher and creator known for deep-dive paper critiques, adversarial prompt testing, and AI safety verification.",
    methodology: "Our senior quality reviewers adopt red-teaming methodologies and critical paper breakdown rubrics popularized by Yannic Kilcher's technical breakdowns.",
  },
];

interface Enabler {
  name: string;
  category: string;
  role: string;
  description: string;
  badge: string;
  url: string;
}

const enablers: Enabler[] = [
  {
    name: "Google",
    category: "Cloud Infrastructure & Global Translation",
    role: "Multilingual Infrastructure Enabler",
    badge: "Infrastructure & Translation",
    url: "https://translate.google.com",
    description: "Powers our real-time 30+ language interface translation, cross-border contributor accessibility, and low-latency cloud model benchmarking pipelines.",
  },
  {
    name: "Telegram Open Network",
    category: "Cryptographic Privacy Protocol",
    role: "Zero-Knowledge Communication Enabler",
    badge: "Encrypted Custody & Chat",
    url: "https://telegram.org",
    description: "Enables end-to-end encrypted secret chats for host credential handover, real-time admin dispatch, and 24/7 technical customer support.",
  },
  {
    name: "Cloudflare",
    category: "Zero-Trust Edge & DDoS Defense",
    role: "Session Isolation & Security Enabler",
    badge: "Edge Confinement",
    url: "https://cloudflare.com",
    description: "Secures intake endpoints against malicious bots and wraps remote desktop tasker sessions in strict zero-trust perimeter policies.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <PageHero 
        eyebrow="About Us · Mission & Vision" 
        title="Ushering in a new wave of competent AI trainers to work for you."
        backgroundImage="/images/about-bold-mission.jpg"
        subhead="AI models learn from human judgment. We think human evaluators deserve dignified pay, accessible tooling, and rigorous calibration — giving account owners and AI labs a verified, high-performance fleet."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href="#vision" className="btn-accent">Our Vision</a>
          <a href="#team" className="btn-secondary">Meet Our Leadership</a>
          <a 
            href={site.telegram.hub} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-control border border-[#24A1DE]/40 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/25 px-4 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-colors"
          >
            <span className="text-[#24A1DE]">✈</span> Join Telegram Hub
          </a>
        </div>
      </PageHero>

      {/* OUR VISION */}
      <Section 
        id="vision" 
        eyebrow="Strategic Horizon"
        title="Our Vision" 
        intro="To help usher in a new wave of competent, rigorously vetted, and specialized AI trainers to work for you."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card space-y-3 border-accent/40 bg-surface">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-control bg-accent text-bg font-extrabold text-xl">
              01
            </div>
            <h3 className="text-xl font-bold text-ink">Elite Domain Competency</h3>
            <p className="text-sm text-muted leading-relaxed">
              Crowdwork and low-quality data scraping have hit a ceiling. Frontier reasoning models demand subject-matter specialists — mathematicians, software engineers, linguists, and legal scholars — calibrated to evaluate subtle chain-of-thought arguments without hallucination.
            </p>
          </div>

          <div className="card space-y-3 border-line bg-surface">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-control bg-surface-2 text-ink font-mono font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-bold text-ink">Radical Economic Transparency</h3>
            <p className="text-sm text-muted leading-relaxed">
              Taskers receive at least 30% of gross earnings directly with zero hidden kickbacks. Account owners retain 100% legal ownership and receive clean monthly balance sheets. We take a transparent 15% operational fee. No surprises, ever.
            </p>
          </div>

          <div className="card space-y-3 border-line bg-surface">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-control bg-surface-2 text-ink font-mono font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-bold text-ink">Zero-Trust Operational Armor</h3>
            <p className="text-sm text-muted leading-relaxed">
              No passwords sent over web forms. All credentials route via Telegram&apos;s end-to-end encrypted secret chats. Tasking occurs exclusively in locked-down remote desktop environments with clipboard isolation and dedicated residential proxies.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-card border-2 border-line bg-surface-2/40 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">Active Fleet Health Index</span>
              <h4 className="text-2xl font-black text-ink">611 Managed Accounts · 99.4% Platform Health · 4.9/5.0 QA Score</h4>
              <p className="text-sm text-muted">Operated strictly within terms on platforms that explicitly authorize managed contracting.</p>
            </div>
            <Link href="/ratings" className="btn-accent shrink-0">
              View Live Telemetry
            </Link>
          </div>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section id="values" tone="tint" title="Our Operating Values" eyebrow="Guiding Principles">
        <FeatureGrid items={[
          { icon: Scale, title: "Compliance first", body: "If a platform does not allow subcontracting, we turn the account away. Zero gray-hat workarounds." },
          { icon: Eye, title: "Open ledger pricing", body: "Every split is published. Account owners and taskers see the exact math before any work begins." },
          { icon: HandCoins, title: "Guaranteed pay floor", body: "Taskers always receive at least 30% of task earnings, paid weekly without delays." },
          { icon: Accessibility, title: "Universal accessibility", body: "Asynchronous tasking designed for disabled, neurodivergent, and remote workers from day one." },
          { icon: ShieldCheck, title: "Cryptographic privacy", body: "Passcodes and sensitive logins are handled strictly through Telegram's encrypted channels." },
          { icon: Users, title: "Human dignity", body: "We replace high-churn crowdwork with long-term specialist careers and direct admin support." },
        ]} />
      </Section>

      {/* LEADERSHIP TEAM */}
      <Section 
        id="team" 
        title="Our Leadership Team" 
        eyebrow="Specialized Operations"
        intro="Domain specialists across data annotation, quality assurance, offensive security, and inclusive digital labor."
        backgroundImage="/images/telegram-ops-hub.jpg"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card relative flex flex-col justify-between border-line bg-surface/95 backdrop-blur hover:border-accent transition-colors">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-control bg-accent-soft font-mono text-xl font-black text-ink border border-accent/40">
                    {member.initials}
                  </div>
                  <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-muted uppercase">
                    {member.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-ink">{member.name}</h3>
                <p className="text-sm font-semibold text-accent">{member.role}</p>
                <p className="mt-3 text-xs font-mono font-medium text-ink/80">{member.focus}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs font-mono">
                <a 
                  href={member.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link flex items-center gap-1 font-bold text-ink hover:text-[#24A1DE]"
                >
                  <span className="text-[#24A1DE]">✈</span> Telegram Hub
                </a>
                <a href={`mailto:${member.email}`} className="text-muted hover:text-ink">
                  {member.email}
                </a>
              </div>
            </div>
          ))}

          {/* JOIN THE TEAM CARD */}
          <div className="card flex flex-col justify-between border-dashed border-2 border-accent/60 bg-accent-soft/30 p-6">
            <div className="space-y-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-control bg-accent text-bg font-black">
                +
              </span>
              <h3 className="text-xl font-extrabold text-ink">Join Our Trainer Fleet</h3>
              <p className="text-sm text-muted leading-relaxed">
                Are you a mathematician, software engineer, translator, or multimodal domain expert? We provide vetted accounts, hourly guarantees, and weekly direct payouts.
              </p>
            </div>
            <div className="mt-6 pt-4">
              <Link href="/taskers#apply" className="btn-accent w-full text-center">
                Apply as an AI Tasker
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ECOSYSTEM ALIGNMENT: 5 KNOWN AI CREATORS & ORGANIZATIONS */}
      <Section 
        id="ecosystem" 
        tone="tint" 
        title="Industry Ecosystem & Benchmark Alignment" 
        eyebrow="Frontier Methodologies"
        intro="We actively track, benchmark, and align our human evaluation rubrics with the open research, datasets, and critique published by leading independent AI creators and research collectives."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemOrgs.map((org) => (
            <div key={org.name} className="card flex flex-col justify-between border-line bg-surface hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                    {org.category}
                  </span>
                  <span className="text-xs font-mono text-accent font-semibold">{org.tag}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-ink">{org.name}</h3>
                  <a 
                    href={org.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-accent transition-colors"
                  >
                    <span>{org.handle}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {org.description}
                </p>

                <div className="rounded border border-line bg-surface-2/60 p-3 text-xs">
                  <span className="font-mono font-bold text-ink uppercase tracking-wide block mb-1">Our Training Alignment:</span>
                  <p className="text-muted leading-normal">{org.methodology}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-line text-xs font-mono text-muted flex items-center justify-between">
                <span>Verified Benchmark Source</span>
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
            </div>
          ))}

          {/* STANDARDS CARD */}
          <div className="card flex flex-col justify-between border-line bg-surface-2/30">
            <div className="space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-accent/20 text-accent font-mono font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-ink">Continuous Rubric Evolution</h3>
              <p className="text-xs text-muted leading-relaxed">
                As reasoning models (o1, R1, Hermes, Claude 3.7) introduce extended test-time compute, our taskers receive weekly briefings on emerging hallucination vectors, prompt drifts, and synthetic dataset decontamination.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-line">
              <Link href="/ai-study" className="link text-xs font-mono font-bold flex items-center gap-1 text-ink">
                Explore AI Study Lab &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SUPPORTERS & TECHNOLOGY ENABLERS */}
      <Section
        id="enablers"
        title="Our Supporters & Technology Enablers"
        eyebrow="Infrastructure & Tooling"
        intro="The global platforms and cloud services that enable our high-availability operations, multilingual accessibility, and zero-trust security."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {enablers.map((item) => (
            <div key={item.name} className="card flex flex-col justify-between border-line bg-surface hover:border-accent transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                  <p className="text-xs font-mono text-accent font-semibold">{item.role}</p>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-line text-xs font-mono">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-ink font-semibold"
                >
                  <span>Learn more</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT US */}
      <Section 
        id="contact" 
        title="Contact Us & Direct Leadership Directory" 
        eyebrow="24/7 Response Desk"
        intro="Have an account to submit, want to apply as a tasker, or need an enterprise staffing quote? A real person reads every inquiry within 2 business days."
      >
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1.2fr]">
          <div>
            <h3 className="text-xl font-bold text-ink mb-4">Send an Encrypted Inquiry</h3>
            <ContactForm />
          </div>

          <div className="space-y-6">
            {/* TELEGRAM 24/7 SUPPORT HUB */}
            <div className="rounded-xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-5 font-mono">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-sans font-bold text-lg text-ink">
                  <span className="text-[#24A1DE] text-xl">✈</span> Telegram Community Hub
                </span>
                <span className="rounded bg-[#24A1DE]/25 text-[#24A1DE] dark:text-[#64B5F6] text-xs px-2 py-0.5 font-bold">
                  24/7 Live
                </span>
              </div>
              <p className="mt-2 text-xs text-muted font-sans leading-relaxed">
                Connect immediately with verified customer care agents and leadership admins to speed up account audits, review qualifications, or request accommodations.
              </p>
              <div className="mt-4">
                <a 
                  className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-[#24A1DE] px-4 py-2.5 font-sans text-sm font-bold text-white hover:bg-[#2092CA] transition-colors" 
                  href={site.telegram.hub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>✈ Join Official Telegram Hub</span>
                </a>
              </div>
            </div>

            {/* DIRECT TEAM DEPARTMENT INQUIRIES */}
            <div className="rounded-card border border-line bg-surface p-5 space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-ink">Direct Team Channels</h4>
              
              <ul className="space-y-3 text-xs font-mono">
                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Marcus Vance · Managing Partner</span>
                    <span className="text-muted">Partnerships &amp; Accounts</span>
                  </div>
                  <a href={`mailto:${site.email.hello}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Dr. Elena Rostova · Learning Lead</span>
                    <span className="text-muted">Tasker Curriculum &amp; Onboarding</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Aris Thorne · Head of QA</span>
                    <span className="text-muted">Sampling Audits &amp; Scorecards</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Kaelen Diaz · Security Lead</span>
                    <span className="text-muted">Encrypted Channels &amp; VM Sessions</span>
                  </div>
                  <a href={`mailto:${site.email.security}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-ink block">Sora Tanaka · Contributor Care</span>
                    <span className="text-muted">Accessibility &amp; 24/7 TG Support</span>
                  </div>
                  <a href={`mailto:${site.email.access}`} className="link text-accent">Email &rarr;</a>
                </li>
              </ul>
            </div>

            {/* GENERAL ADDRESSES */}
            <dl className="rounded-card border border-line bg-surface p-5 space-y-2.5 text-xs">
              <div className="flex justify-between"><dt className="font-semibold text-muted">Legal &amp; Compliance:</dt><dd><a className="link font-mono" href={`mailto:${site.email.legal}`}>{site.email.legal}</a></dd></div>
              <div className="flex justify-between"><dt className="font-semibold text-muted">Security Vulnerabilities:</dt><dd><a className="link font-mono" href={`mailto:${site.email.security}`}>{site.email.security}</a></dd></div>
              <div className="flex justify-between"><dt className="font-semibold text-muted">Governing Entity:</dt><dd className="font-mono text-ink">{site.legalEntity}</dd></div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
