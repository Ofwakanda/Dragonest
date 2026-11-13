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
  CheckCircle2,
  Banknote,
  CalendarCheck,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About MIDDLEMEN",
  description:
    "MIDDLEMEN connects AI training accounts with trained specialists who do the work every day. You keep 55% of what it earns — paid every Friday.",
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
      {/* ── 1. SIMPLE HERO — speaks to everyone ── */}
      <PageHero
        eyebrow="About MIDDLEMEN"
        title="We turn idle AI accounts into weekly income."
        subhead="Got an account on Outlier, Alignerr, Scale AI or DataAnnotation that isn't earning? We connect it with trained specialists who do the work — and you get paid every Friday. No tasks. No stress. Just your share."
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="/account-owners#submit" className="btn-accent">
            Check my account — it&apos;s free
          </Link>
          <Link
            href="#about-mm"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
          >
            About the company <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* ── 2. WHY IT EXISTS — the plain pitch ── */}
      <section className="border-b border-line bg-surface py-16">
        <div className="container max-w-3xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Why we exist
          </p>
          <h2 className="text-2xl font-semibold text-ink mb-5 leading-snug">
            Thousands of AI accounts sit unused every day.
          </h2>
          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              AI platforms like Outlier and Scale AI pay well — but the work is demanding, the
              tests are hard, and life gets in the way. Many accounts either never get through
              the entry test, or they go quiet because the owner doesn&apos;t have the time.
            </p>
            <p>
              That is where we come in. We act as the <strong className="text-ink">middlemen</strong> —
              connecting your account with a trained specialist who does the tasks every day,
              keeps the quality score high, and makes sure the account keeps earning.
            </p>
            <p>
              You keep <strong className="text-ink">55% of everything it earns</strong>. The
              specialist who does the work gets at least 30%. We take 15% to keep the lights on.
              Every Friday you get a clear statement showing every number.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THREE SIMPLE FACTS ── */}
      <section className="border-b border-line py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="card text-center">
              <Banknote className="h-6 w-6 text-muted mx-auto mb-3" />
              <span className="text-3xl font-semibold font-mono text-ink block">55%</span>
              <p className="mt-2 text-sm font-semibold text-ink">You keep</p>
              <p className="mt-1 text-xs text-muted">Of every dollar your account earns</p>
            </div>
            <div className="card text-center">
              <CalendarCheck className="h-6 w-6 text-muted mx-auto mb-3" />
              <span className="text-3xl font-semibold font-mono text-ink block">Every Fri</span>
              <p className="mt-2 text-sm font-semibold text-ink">You get paid</p>
              <p className="mt-1 text-xs text-muted">With a full itemized statement</p>
            </div>
            <div className="card text-center">
              <UserCheck className="h-6 w-6 text-muted mx-auto mb-3" />
              <span className="text-3xl font-semibold font-mono text-ink block">0 hrs</span>
              <p className="mt-2 text-sm font-semibold text-ink">Your time needed</p>
              <p className="mt-1 text-xs text-muted">Specialists handle everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHO IT IS FOR ── */}
      <Section
        id="who"
        tone="tint"
        eyebrow="Who this is for"
        title="You don't need to be a tech expert."
      >
        <p className="text-base text-muted max-w-2xl -mt-4 mb-8 leading-relaxed">
          If any of these sound like you, we can probably help.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Clock,
              who: "Too busy to do the tasks",
              body: "You have an account but work, family or life means you just don't have time to sit down and grind through AI tasks every day.",
            },
            {
              icon: Lock,
              who: "Stuck at the entry test",
              body: "Your account is new and you haven't passed the qualification test yet. Our specialists help with that so your queue can open up.",
            },
            {
              icon: Wallet,
              who: "Account sitting idle",
              body: "You qualified a while ago but haven't logged in for weeks. The account is there — it just isn't earning anything.",
            },
            {
              icon: Globe2,
              who: "Not in the right timezone",
              body: "The best-paying tasks appear at odd hours. A specialist in the right timezone picks them up for you while you sleep.",
            },
            {
              icon: Home,
              who: "Looking for a passive income",
              body: "You want your account to earn without you having to show up every day. This is exactly what we set up.",
            },
            {
              icon: Laptop,
              who: "Not sure where to start",
              body: "You've heard about AI training work but don't know if your account qualifies or how much it could earn. We tell you for free.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.who} className="card flex flex-col">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                  <IconComp className="h-4 w-4 text-muted" />
                </div>
                <h3 className="text-base font-semibold text-ink">{item.who}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-card border border-line bg-surface text-center">
          <p className="text-base font-semibold text-ink mb-1">Not sure if your account qualifies?</p>
          <p className="text-sm text-muted mb-4">
            Tell us which platform it is on and we will check it for free. No obligation, no pressure.
          </p>
          <Link href="/account-owners#submit" className="btn-accent text-sm px-6 py-2.5">
            Check my account for free
          </Link>
        </div>
      </Section>

      {/* ── 5. HOW IT WORKS — plain 3 steps ── */}
      <Section
        id="how"
        eyebrow="How it works"
        title="Three steps. Then you just wait for Friday."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Tell us about your account",
              body: "Let us know which platform it is on and whether it is active or still at the test stage. Takes two minutes. We never ask for your password on this site.",
            },
            {
              step: "02",
              title: "We match a specialist",
              body: "A trained person with the right skills is paired with your account. If it is stuck at an entry test, we sort that out first.",
            },
            {
              step: "03",
              title: "You get paid every Friday",
              body: "Earnings go to your payout channel. Every Friday you get a statement: what came in, what the specialist earned, and our 15% fee.",
            },
          ].map((item) => (
            <div key={item.step} className="card flex flex-col">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 6. TRUST SIGNALS — plain language ── */}
      <Section id="trust" tone="tint" eyebrow="Why people trust us" title="A few things worth knowing.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "We never ask for your password",
              body: "Specialists log in through secure remote sessions. Your credentials stay with you. We handle everything through an encrypted channel.",
            },
            {
              icon: Eye,
              title: "Every penny is accounted for",
              body: "Your Friday statement shows exactly what the account earned, what went to the specialist, and what we kept. Nothing is hidden.",
            },
            {
              icon: HandCoins,
              title: "Specialists are paid fairly",
              body: "The person doing the work always gets at least 30% of gross earnings. We believe if the work is good, the worker should earn well.",
            },
            {
              icon: Scale,
              title: "We work within the platform rules",
              body: "We regularly review the terms of each partner platform and operate only within what is allowed.",
            },
            {
              icon: Users,
              title: "Real people answer your messages",
              body: "You can reach us on Telegram any time. A real person replies — usually within a few hours.",
            },
            {
              icon: Accessibility,
              title: "Built for everyone",
              body: "Whether you are a student, a parent, between jobs, or just curious — if you have an account, we can work with you.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card flex flex-col">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2">
                  <IconComp className="h-4 w-4 text-muted" />
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 7. CHAT CTA STRIP ── */}
      <section className="border-y border-line bg-surface py-14">
        <div className="container text-center max-w-xl">
          <p className="text-xl font-semibold text-ink mb-2">Still got questions?</p>
          <p className="text-sm text-muted mb-6">
            Chat with us on Telegram. A real person replies. Checking is free and there is no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={site.telegram.hub}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" /> Chat on Telegram
            </a>
            <Link
              href="/account-owners#submit"
              className="inline-flex items-center justify-center gap-1 rounded-card border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink hover:bg-surface-2 transition-colors"
            >
              Start my free check
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. ABOUT MM — institutional / professional section
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="about-mm"
        title="About MM"
        eyebrow="Operations & Infrastructure"
        intro="Behind our simple interface is institutional infrastructure. We maintain rigorous session isolation, weekly quality audits, and transparent financial reconciliation across every account we manage."
      >
        {/* Infrastructure cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">
              Containment Architecture
            </span>
            <h4 className="text-lg font-semibold text-ink">Isolated Virtual Sessions</h4>
            <p className="text-sm text-muted leading-relaxed">
              Taskers operate inside sandboxed remote virtual machines with disabled local
              clipboards and blocked file transfers. Credentials never touch unmonitored endpoints.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">
              Quality Control
            </span>
            <h4 className="text-lg font-semibold text-ink">Independent Blind Audits</h4>
            <p className="text-sm text-muted leading-relaxed">
              Continuous sampling audits ensure project tasks maintain a 4.9/5.0 target score,
              protecting account standing and unlocking higher-tier project queues.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <span className="text-xs font-mono font-semibold text-muted uppercase">
              Financial Transparency
            </span>
            <h4 className="text-lg font-semibold text-ink">Weekly Friday Settlement</h4>
            <p className="text-sm text-muted leading-relaxed">
              Automated itemized accounting statements every Friday detail gross earnings, tasker
              pay floors (30%+), and operational fees for full auditability.
            </p>
          </div>
        </div>

        {/* Leadership team */}
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
                <a
                  href={`mailto:${member.email}`}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}

          {/* Join card */}
          <div className="card p-6 flex flex-col justify-between border-dashed">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded border border-line bg-surface-2 font-mono text-sm font-semibold text-ink">
                +
              </span>
              <h4 className="mt-4 text-base font-semibold text-ink">Join the Specialist Fleet</h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Engineers, mathematicians, and linguists: we match your expertise with active
                project queues with weekly compensation.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-line">
              <Link href="/taskers#apply" className="btn-accent w-full text-center text-sm">
                Apply as an Evaluator
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory disclosure */}
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

      {/* ── 9. CONTACT ── */}
      <Section
        id="contact"
        tone="tint"
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
                Connect directly with verified operations coordinators for onboarding, audit
                review, or credential coordination.
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

            <div className="card p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                Department Channels
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                {[
                  { name: "Marcus Vance", dept: "Partnerships & Accounts", email: site.email.hello },
                  { name: "Dr. Elena Rostova", dept: "Curriculum & Training", email: site.email.support },
                  { name: "Aris Thorne", dept: "Quality Assurance", email: site.email.support },
                  { name: "Kaelen Diaz", dept: "Security & Containment", email: site.email.security },
                  { name: "Sora Tanaka", dept: "Contributor Relations", email: site.email.access },
                ].map((person, i, arr) => (
                  <li
                    key={person.name}
                    className={`flex items-center justify-between${i < arr.length - 1 ? " pb-2 border-b border-line" : ""}`}
                  >
                    <div>
                      <span className="font-semibold text-ink block">{person.name}</span>
                      <span className="text-muted">{person.dept}</span>
                    </div>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-muted hover:text-ink transition-colors"
                    >
                      Email &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
