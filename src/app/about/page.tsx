import { 
  Accessibility, 
  Eye, 
  HandCoins, 
  Scale, 
  ShieldCheck, 
  Users,
  Wallet,
  Smartphone,
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
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  CreditCard,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FeatureGrid, PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Middlemen : Turn AI Training into Weekly Income",
  description: "AI companies pay real humans billions to train their models. Whether you have an idle account or want to earn from home, Middlemen makes getting paid simple and reliable.",
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
    badge: "Operations",
    initials: "MV",
    focus: "Platform partnerships, account management & creator revenue splits",
    bio: "Pioneered managed human-in-the-loop workflows across Outlier, Alignerr, and Scale AI. Dedicated to closing the gap between idle accounts and reliable online income.",
    telegram: site.telegram.hub,
    email: site.email.hello,
  },
  {
    name: "Dr. Elena Rostova",
    role: "Head of Contributor Onboarding",
    badge: "Training",
    initials: "ER",
    focus: "Step-by-step task guides, test preparation & contributor support",
    bio: "Former researcher in educational technology. Builds simple, practical learning guides so everyday contributors can pass platform tests and maintain top ratings.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Aris Thorne",
    role: "Head of Quality Assurance",
    badge: "Quality & QA",
    initials: "AT",
    focus: "Quality score protection (4.9/5.0 target) & weekly account health",
    bio: "Manages quality reviews across active accounts to ensure task accuracy stays high, preventing suspensions and maximizing weekly earning volume.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Kaelen Diaz",
    role: "Security & Systems Lead",
    badge: "Security",
    initials: "KD",
    focus: "Encrypted Telegram channels, private VM sessions & account protection",
    bio: "Information security veteran. Ensures account passwords and personal logins are never exposed on public web forms or shared with unauthorized parties.",
    telegram: site.telegram.hub,
    email: site.email.security,
  },
  {
    name: "Sora Tanaka",
    role: "Community & Contributor Support",
    badge: "Support",
    initials: "ST",
    focus: "24/7 Telegram help desk, weekly payout verification & worker advocacy",
    bio: "Ensures every contributor gets quick answers on Telegram, fair pay floors (at least 30% guaranteed), and reliable weekly disbursements every Friday.",
    telegram: site.telegram.hub,
    email: site.email.access,
  },
];

export default function About() {
  return (
    <>
      {/* 1. SIMPLE, HIGH-CONVERTING HERO */}
      <PageHero 
        eyebrow="The AI Income Opportunity" 
        title="AI is paying people every week. Here is how you get in."
        subhead="AI companies like OpenAI, Google, and Meta spend billions paying real people to review and train their models. Whether you have an idle account sitting unused, or you are an everyday person who wants to start earning from home, Middlemen is the bridge. We make getting paid simple, safe, and consistent."
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="#ways-to-earn" className="btn-accent text-center">
            See How to Start
          </Link>
          <Link 
            href="/account-owners#submit"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-2 py-1"
          >
            Have an existing account? Connect it <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.telegram.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors border border-line rounded px-3 py-2 bg-surface"
          >
            <Send className="h-3.5 w-3.5" /> 24/7 Telegram Desk
          </a>
        </div>
      </PageHero>

      {/* 2. FOUR CORE REASONS THIS WORKS */}
      <section className="border-b border-line bg-surface py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-center font-mono">
            <div className="card">
              <span className="text-3xl font-semibold text-ink">Every Fri</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Guaranteed Weekly Pay</p>
              <p className="mt-1 text-xs text-muted font-sans">Direct payouts every single Friday with clear accounting</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">Anywhere</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Phone or Laptop</p>
              <p className="mt-1 text-xs text-muted font-sans">Work from home or on the move. An internet connection is all you need</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">Flexible</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">Your Own Hours</p>
              <p className="mt-1 text-xs text-muted font-sans">Log in whenever you want. Complete tasks at your own pace</p>
            </div>
            <div className="card">
              <span className="text-3xl font-semibold text-ink">Guided</span>
              <p className="mt-2 text-sm font-sans font-semibold text-ink">No Experience Needed</p>
              <p className="mt-1 text-xs text-muted font-sans">We provide practice guides, test support, and active queues</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE TWO WAYS TO EARN (SELLING BOTH AUDIENCES) */}
      <Section 
        id="ways-to-earn"
        eyebrow="Two Simple Paths"
        title="Whether you own an account or want to do the work, there is a place for you."
        intro="Middlemen solves the hardest problems for both sides: account owners who do not have time to do tasks, and everyday people who want to earn money training AI."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* PATH A: ACCOUNT OWNERS */}
          <div className="card flex flex-col justify-between border-line bg-surface p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge">
                  For Account Owners · 100% Passive
                </span>
                <Briefcase className="h-5 w-5 text-muted" />
              </div>

              <h3 className="text-2xl font-semibold text-ink">
                You have an account. We do the work. You keep 55%.
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                If you opened an account on Outlier, Alignerr, Scale AI, or DataAnnotation and never touched it, you are sitting on weekly income. We match your account with verified specialists who do the tasks every day.
              </p>

              <div className="space-y-2 pt-2 border-t border-line text-xs font-mono text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>You retain 100% legal ownership of your account at all times</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Account checking, queue audit, and onboarding are completely free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Direct payouts deposit to you every Friday with itemized statements</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-line">
              <Link href="/account-owners#submit" className="btn-accent w-full text-center">
                Connect Your Account &rarr;
              </Link>
            </div>
          </div>

          {/* PATH B: EVERYDAY TASKERS */}
          <div className="card flex flex-col justify-between border-line bg-surface p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge">
                  For Everyday People · Flexible Work
                </span>
                <UserCheck className="h-5 w-5 text-muted" />
              </div>

              <h3 className="text-2xl font-semibold text-ink">
                You want to earn money. We give you active tasks and training.
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                Haven&apos;t opened an account yet? No problem. We guide you through the sign up process, help you practice and pass platform qualification tests, and connect you with active queues so you can start earning.
              </p>

              <div className="space-y-2 pt-2 border-t border-line text-xs font-mono text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Guaranteed minimum 30% pay floor on all tasks you complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Work from your phone or laptop whenever you have free time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-ink shrink-0" />
                  <span>Clear task guides and practice rubrics so you feel confident</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-line">
              <Link href="/taskers#apply" className="btn-accent w-full text-center">
                Apply to Start Tasking &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. THE EXPLANATION: WHAT DO YOU ACTUALLY DO? */}
      <Section 
        id="the-work" 
        tone="tint"
        eyebrow="The Work Explained Simply"
        title="What do AI companies actually pay you to do?"
        intro="AI models like ChatGPT or Claude are trained on massive amounts of data, but they make mistakes. Humans are needed to teach them what good answers look like. Here is what real tasks look like:"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: MessageSquare,
              title: "Comparing Two Answers",
              body: "The AI generates two responses to the same question. You read both and choose which one is more helpful, accurate, and easy to read. Anyone can do this with clear common sense.",
            },
            {
              icon: PenTool,
              title: "Writing Creative Prompts",
              body: "You write questions or prompts to challenge the AI, testing how well it follows instructions, handles tricky phrasing, or avoids repetitive phrasing.",
            },
            {
              icon: SearchCheck,
              title: "Fact Checking & Source Verification",
              body: "AI often hallucinates dates, names, or quotes. You do quick online research to verify whether the AI's claims are accurate and cite real sources.",
            },
            {
              icon: Languages,
              title: "Language & Translation Review",
              body: "If you speak more than one language, you review translated text, verify slang, and make sure localized outputs sound natural to native speakers.",
            },
            {
              icon: Binary,
              title: "Math & Logic Checking",
              body: "Review step-by-step math problems or logical puzzles to make sure the AI did not make subtle calculation errors between steps.",
            },
            {
              icon: Code2,
              title: "Coding & Software Review",
              body: "For programmers: review AI-generated Python, JavaScript, or SQL code, run tests, and fix bugs. These technical tasks pay the highest hourly rates ($40 to $85/hr).",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 text-ink">
                    <IconComp className="h-4 w-4 text-muted" />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5. WHO IS THIS FOR? (RELATABLE PROFILES) */}
      <Section id="who" eyebrow="Who Is This For?" title="Real people who are earning with Middlemen right now">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BookOpen,
              who: "University Students",
              situation: "Want flexible income between lectures and exams without having to work rigid retail or hospitality shifts.",
              benefit: "Task in 30-minute blocks between classes. Direct Friday deposits to help cover books and living costs.",
            },
            {
              icon: Home,
              who: "Stay-at-Home Parents",
              situation: "Need flexible remote income that fits around childcare, school drop-offs, and family schedules.",
              benefit: "Work from your kitchen table on your phone or laptop whenever you have a quiet window.",
            },
            {
              icon: Briefcase,
              who: "Unemployed & Career Changers",
              situation: "Tired of submitting hundreds of job applications with no reply and waiting months for interviews.",
              benefit: "Start completing tasks and earning within days. No drawn-out interview rounds or gatekeepers.",
            },
            {
              icon: Globe2,
              who: "International Contributors",
              situation: "Living in countries where local job opportunities are scarce or local currency exchange rates make USD earnings powerful.",
              benefit: "Earn international platform payouts in USD equivalent, delivered transparently every week.",
            },
            {
              icon: Laptop,
              who: "Remote Freelancers & Writers",
              situation: "Looking to avoid endless client proposals, unpaid pitches, and delayed freelance invoicing.",
              benefit: "The queue is already there and ready. You just log in, complete tasks, and get paid automatically.",
            },
            {
              icon: Code2,
              who: "Engineers & Domain Specialists",
              situation: "Software developers, mathematicians, or linguists looking to monetize their spare hours on top-tier technical queues.",
              benefit: "Access premium $40 to $85/hr coding and STEM benchmark tasks with guaranteed 30%+ revenue splits.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.who} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded border border-line bg-surface-2 flex items-center justify-center shrink-0">
                      <IconComp className="h-4 w-4 text-muted" />
                    </div>
                    <h3 className="text-base font-semibold text-ink">{item.who}</h3>
                  </div>
                  <p className="text-xs text-muted mb-3 leading-relaxed">&ldquo;{item.situation}&rdquo;</p>
                </div>
                <div className="pt-3 border-t border-line text-xs font-mono text-ink/90 flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-ink shrink-0 mt-0.5" />
                  <span>{item.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 6. HOW TO GET STARTED */}
      <Section
        id="how-to-start"
        tone="tint"
        title="Three simple steps to start earning"
        eyebrow="Simple Process"
        intro="Whether you are connecting an existing account or applying to task, getting started takes less than five minutes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Reach out on Telegram or web",
              body: "Tell us if you have an account (Outlier, Alignerr, Scale AI) or if you want to join our contributor team. There are zero upfront fees.",
            },
            {
              step: "02",
              title: "Review & onboarding",
              body: "For account owners, we audit your queue for free. For taskers, we share clear practice rubrics and match you with active accounts.",
            },
            {
              step: "03",
              title: "Weekly settlements every Friday",
              body: "Work is done in secure virtual sessions. Every Friday, you receive a transparent statement and direct payouts with zero hidden deductions.",
            },
          ].map((item) => (
            <div key={item.step} className="card flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. CORE PROMISES & STANDARDS */}
      <Section id="values" title="Our Promises to Every Contributor & Owner" eyebrow="Trust & Transparency">
        <FeatureGrid items={[
          { icon: Eye, title: "Zero Hidden Fees", body: "Every revenue split is published upfront. Account owners keep 55%, taskers get at least 30%, and Middlemen takes 15% for management and QA." },
          { icon: HandCoins, title: "30%+ Guaranteed Pay Floor", body: "Taskers never work for pennies. We enforce a non-negotiable 30%+ share of gross earnings on every project, paid weekly." },
          { icon: ShieldCheck, title: "Passwords Kept Private", body: "We never ask for passwords on public web forms. Account access is managed securely through isolated, recorded VM sessions." },
          { icon: Scale, title: "100% Owner Control", body: "Account owners retain full legal title. You can inspect logs, review earnings statements, or pause work at any time." },
          { icon: Users, title: "Real Humans on Telegram", body: "You get a real operations coordinator who responds in hours on Telegram, not an automated chatbot or slow support ticket queue." },
          { icon: Accessibility, title: "Accessible to Everyone", body: "Designed for everyday people, neurodivergent contributors, and global workers looking for honest, reliable online income." },
        ]} />
      </Section>

      {/* 8. LEADERSHIP & OPERATIONS TEAM */}
      <Section 
        id="team" 
        tone="tint"
        title="The People Behind Middlemen" 
        eyebrow="Leadership"
        intro="Real people running daily operations, onboarding, and quality assurance."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface-2 font-mono text-sm font-semibold text-ink">
                    {member.initials}
                  </div>
                  <span className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] font-medium text-muted">
                    {member.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-ink">{member.name}</h3>
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
          <div className="card flex flex-col justify-between border-dashed">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded border border-line bg-surface-2 font-mono text-sm font-semibold text-ink">
                +
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">Start Earning With Us</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Whether you have an account or want to complete tasks from home, we have open spots every week.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-line">
              <Link href="/taskers#apply" className="btn-accent w-full text-center text-sm">
                Apply to Start Tasking
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. CONTACT OPERATIONS & ENTITY DISCLOSURE */}
      <Section 
        id="contact" 
        title="Have Questions? We Are Here." 
        eyebrow="Get In Touch"
        intro="Whether you have an account to review, want to understand how the money works, or need help getting started, send a message or message us directly on Telegram."
      >
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1.2fr]">
          <div>
            <h3 className="text-lg font-semibold text-ink mb-4">Send a Message</h3>
            <ContactForm />
          </div>

          <div className="space-y-4">
            {/* TELEGRAM 24/7 SUPPORT HUB */}
            <div className="card p-5 font-mono">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-sans font-semibold text-base text-ink">
                  <Send className="text-muted h-4 w-4" /> 24/7 Telegram Operations
                </span>
                <span className="rounded border border-line bg-surface-2 text-muted text-xs px-2 py-0.5">
                  Fast Response
                </span>
              </div>
              <p className="mt-2 text-xs text-muted font-sans leading-relaxed">
                Connect directly with verified operations coordinators to audit your account, review qualification guidelines, or ask general questions.
              </p>
              <div className="mt-4">
                <a 
                  className="btn-accent w-full text-center text-xs flex items-center justify-center gap-2"
                  href={site.telegram.hub} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Message Us on Telegram</span>
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
                    <span className="text-muted">Contributor Onboarding</span>
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
                    <span className="text-muted">Contributor Care</span>
                  </div>
                  <a href={`mailto:${site.email.access}`} className="text-muted hover:text-ink transition-colors">Email &rarr;</a>
                </li>
              </ul>
            </div>

            {/* LEGAL ENTITY */}
            <dl className="card p-5 space-y-2 text-xs">
              <div className="flex justify-between"><dt className="text-muted">Legal Entity:</dt><dd className="font-mono text-ink font-semibold">{site.legalEntity}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Jurisdiction:</dt><dd className="font-mono text-ink">{site.jurisdiction}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Security Inquiries:</dt><dd><a className="text-muted hover:text-ink font-mono" href={`mailto:${site.email.security}`}>{site.email.security}</a></dd></div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
