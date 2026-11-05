import { 
  Accessibility, 
  Eye, 
  GraduationCap, 
  HandCoins, 
  Scale, 
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
  title: "Get Paid by AI : The Opportunity Explained",
  description: "AI companies pay real people to review and improve AI responses. Middlemen connects you with vetted accounts and weekly payouts. No experience needed : we train you.",
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
    bio: "Pioneered verified human in the loop workflows across major AI training platforms. Dedicated to closing the gap between idle accounts and competent talent.",
    telegram: site.telegram.hub,
    email: site.email.hello,
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Learning Officer & Head of Trainer Development",
    badge: "Curriculum & RLHF",
    initials: "ER",
    focus: "Specialist trainer onboarding, multi turn reasoning rubrics & cognitive ergonomics",
    bio: "Former researcher in computational linguistics and cognitive ergonomics. Authors our multi step chain of thought training modules and domain qualification tracks.",
    telegram: site.telegram.hub,
    email: site.email.support,
  },
  {
    name: "Aris Thorne",
    role: "Head of AI Quality Assurance & Evaluation Fleet",
    badge: "QA & Benchmarks",
    initials: "AT",
    focus: "Multi modal scoring rubrics, automated audit sampling & fleet scorecards (4.9/5.0 target)",
    bio: "Over 8 years designing rigorous evaluation pipelines for high stakes ML systems. Manages our independent blind sampling audits and quality appeal tribunals.",
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
    bio: "Advocate for neurodivergent and disabled digital workers. Champions our non negotiable 30%+ tasker pay floor and 24/7 real time Telegram response desk.",
    telegram: site.telegram.hub,
    email: site.email.access,
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <PageHero 
        eyebrow="Real Money. No Boss. No Degree. No Office." 
        title="AI Is Paying People Like You Right Now."
        backgroundImage="/images/about-bold-mission.jpg"
        subhead="If you are tired of being broke, working a job that does not pay enough, or just sitting at home with nothing to show for it, this is your way in. AI companies need real humans to help them. We connect you to verified accounts and you get paid every week."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href="#who" className="btn-accent">See If You Qualify</a>
          <a href="#opportunity" className="btn-secondary">How the Money Works</a>
          <a 
            href={site.telegram.hub} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-control border border-[#24A1DE]/40 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/25 px-4 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-colors"
          >
            <span className="text-[#24A1DE]">✈</span> Join Telegram Now
          </a>
        </div>
      </PageHero>

      {/* RELATABLE HOOK */}
      <section className="border-b border-line bg-surface-2/60 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block rounded-full border border-line bg-surface px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent">
            Sound familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-ink leading-snug">
            &ldquo;I need money but I do not have a degree, I am not a programmer, and I cannot afford to wait months to get started.&rdquo;
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            We hear this every day. And every day we onboard people in that exact situation and get them earning within 48 hours. 
            You do not need prior experience. You do not need to be smart in a traditional way. 
            You just need a phone or laptop, an internet connection, and the ability to follow simple instructions.
          </p>
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
            {[
              { emoji: "💸", label: "Weekly payouts", bg: "from-emerald-500/20 to-emerald-900/40 border-emerald-500/40" },
              { emoji: "📱", label: "Phone or laptop only", bg: "from-sky-500/20 to-sky-900/40 border-sky-500/40" },
              { emoji: "🌍", label: "Any country", bg: "from-amber-500/20 to-amber-900/40 border-amber-500/40" },
              { emoji: "⏰", label: "Your own hours", bg: "from-purple-500/20 to-purple-900/40 border-purple-500/40" },
            ].map((item) => (
              <div key={item.label} className="group rounded-2xl border border-line bg-surface p-4 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-b ${item.bg} border flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.4)]`}>
                  <span className="text-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform">{item.emoji}</span>
                </div>
                <span className="text-xs font-bold text-ink">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <Section 
        id="opportunity" 
        eyebrow="The AI Training Opportunity"
        title="Here Is How You Earn Money" 
        intro="AI companies like Outlier, Scale AI, and Alignerr pay people to review and improve AI responses. The work is done online, from your phone or laptop, on your own schedule."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card space-y-4 border-accent/40 bg-surface shadow-xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(245,158,11,0.35)]">
              01
            </div>
            <h3 className="text-xl font-bold text-ink">You Get a Verified Account</h3>
            <p className="text-sm text-muted leading-relaxed">
              We give you access to a fully approved, active account on AI training platforms like Outlier.ai, Alignerr, or Scale AI. These accounts are pre cleared and ready to earn. You do not need to apply or pass any entry tests because we handle that.
            </p>
          </div>

          <div className="card space-y-4 border-line bg-surface shadow-xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 text-slate-950 font-black text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(6,182,212,0.35)]">
              02
            </div>
            <h3 className="text-xl font-bold text-ink">You Do the Tasks, We Handle the Rest</h3>
            <p className="text-sm text-muted leading-relaxed">
              Log in and complete tasks such as rating AI responses, writing prompts, reviewing code, or evaluating answers. Our team trains and supports you so your quality scores stay high and your account stays active.
            </p>
          </div>

          <div className="card space-y-4 border-line bg-surface shadow-xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-slate-950 font-black text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(16,185,129,0.35)]">
              03
            </div>
            <h3 className="text-xl font-bold text-ink">You Get Paid Every Week</h3>
            <p className="text-muted leading-relaxed text-sm">
              Earnings go straight to your pocket weekly. You keep at least <strong className="text-ink">30% of everything the account earns</strong>. No hidden deductions. No delays. Just consistent income for the work you put in.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-card border-2 border-line bg-surface-2/40 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">Live Network Stats</span>
              <h4 className="text-2xl font-black text-ink">611 Active Accounts | 99.4% Account Health | 4.9/5.0 Average Score</h4>
              <p className="text-sm text-muted">Real people earning real income from AI training platforms right now.</p>
            </div>
            <Link href="/ratings" className="btn-accent shrink-0">
              View Live Stats
            </Link>
          </div>
        </div>
      </Section>

      {/* WHO IS THIS FOR */}
      <Section id="who" tone="tint" title="This Is for You : Yes, You." eyebrow="Who Can Do This?">
        <p className="text-base text-muted max-w-2xl mb-8 -mt-4">
          You do not need to be special. You do not need a degree. Here are real types of people who are earning right now through Middlemen:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { emoji: "🎓", who: "University Students", situation: "Broke between semesters, classes only 3 days a week, need money for rent and data.", howItHelps: "Work during free periods. Earn while you study. No boss to ask permission from.", glow: "from-blue-500/20 to-indigo-900/40 border-blue-500/40" },
            { emoji: "🏠", who: "Stay at Home Parents", situation: "Taking care of kids all day, cannot do a 9 to 5, but need income.", howItHelps: "Work during nap times, evenings, or whenever you get 30 free minutes. Weekly payout.", glow: "from-rose-500/20 to-pink-900/40 border-rose-500/40" },
            { emoji: "📉", who: "Unemployed & Job Hunting", situation: "Sending CVs every day with no response, bills piling up, dignity running low.", howItHelps: "Start earning this week with no interview and no waiting. AI does not care about your CV.", glow: "from-amber-500/20 to-amber-900/40 border-amber-500/40" },
            { emoji: "🚕", who: "Ride Hail & Delivery Workers", situation: "Long hours, bad weather, low pay, no benefits, no security.", howItHelps: "AI tasks pay more per hour than driving. Work from home. Keep your sanity.", glow: "from-yellow-500/20 to-amber-900/40 border-yellow-500/40" },
            { emoji: "🌍", who: "People in Developing Countries", situation: "Local salary is too low, exchange rate makes international income life changing.", howItHelps: "Paid in USD equivalent. Even $5 to $10 an hour is transformational in many countries.", glow: "from-emerald-500/20 to-emerald-900/40 border-emerald-500/40" },
            { emoji: "🛋️", who: "People Who Say They Are Lazy", situation: "Do not want a demanding job. Want easy, flexible income they can do at their own pace.", howItHelps: "Rate AI responses from your couch. Some tasks take 2 minutes. You just need consistency.", glow: "from-purple-500/20 to-violet-900/40 border-purple-500/40" },
            { emoji: "💻", who: "Remote Work Seekers", situation: "Tried Upwork, Fiverr, and other platforms with no clients and too much competition.", howItHelps: "We already have the accounts and task queues. You just show up and do the work.", glow: "from-cyan-500/20 to-sky-900/40 border-cyan-500/40" },
            { emoji: "☕", who: "Older Adults & Retirees", situation: "Pension not enough, do not want physical work, need something they can do from home.", howItHelps: "Simple tasks. No physical activity. Just reading, judging, and writing at your own speed.", glow: "from-orange-500/20 to-amber-900/40 border-orange-500/40" },
            { emoji: "✍️", who: "Writers, Bloggers & Creatives", situation: "Passion does not always pay. Need consistent income while building your craft.", howItHelps: "AI writing and prompt tasks are perfect for your skill set. And they pay weekly.", glow: "from-teal-500/20 to-emerald-900/40 border-teal-500/40" },
          ].map((item) => (
            <div key={item.who} className="group card flex flex-col border-line bg-surface hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-3.5 mb-3">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-b ${item.glow} border flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_6px_12px_rgba(0,0,0,0.35)]`}>
                  <span className="text-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform">{item.emoji}</span>
                </div>
                <h3 className="text-base font-extrabold text-ink">{item.who}</h3>
              </div>
              <p className="text-xs text-muted mb-3 leading-relaxed italic">&ldquo;{item.situation}&rdquo;</p>
              <div className="mt-auto pt-3 border-t border-line">
                <p className="text-xs font-semibold text-accent leading-relaxed">✓ {item.howItHelps}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 rounded-card border-2 border-accent/40 bg-accent-soft/20 text-center">
          <p className="text-lg font-black text-ink mb-1">If you recognise yourself in any of the above, you are already qualified.</p>
          <p className="text-sm text-muted mb-4">The only thing standing between you and your first payout is filling out a 2 minute application.</p>
          <Link href="/taskers#apply" className="btn-accent text-sm px-6 py-3">
            Apply Free : Takes 2 Minutes →
          </Link>
        </div>
      </Section>

      {/* HOW TO GET ACCEPTED */}
      <Section
        id="apply"
        title="How to Get Accepted & Start Earning"
        eyebrow="Getting Started"
        intro="The process is simple. Most people are matched and earning within a few days."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Apply as a Tasker", body: "Fill out a short form telling us your skills, timezone, and how many hours you can work per week. It takes less than 5 minutes.", grad: "from-amber-400 to-amber-600 text-slate-950" },
            { step: "02", title: "We Review & Match You", body: "Our team reviews your application within 24 hours and matches you to the best platform and account for your skills and location.", grad: "from-cyan-400 to-cyan-600 text-slate-950" },
            { step: "03", title: "Get Onboarded via Telegram", body: "We send you everything you need via Telegram including your account access, task guides, quality tips, and a direct line to your support manager.", grad: "from-purple-400 to-purple-600 text-white" },
            { step: "04", title: "Start Earning Immediately", body: "Log in, complete tasks, and get paid weekly. The more consistent and high quality your work, the more tasks and earnings come your way.", grad: "from-emerald-400 to-emerald-600 text-slate-950" },
          ].map((item) => (
            <div key={item.step} className="card space-y-3 border-line bg-surface hover:shadow-xl transition-shadow">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.grad} font-black text-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.3)]`}>
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/taskers#apply" className="btn-accent text-base px-8 py-4">
            Apply as a Tasker Now →
          </Link>
          <p className="mt-3 text-xs text-muted">Free to apply. No upfront fees. Weekly payouts guaranteed.</p>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section id="values" tone="tint" title="Our Promises to You" eyebrow="How We Operate">
        <FeatureGrid items={[
          { icon: Scale, title: "Platforms That Allow This", body: "We only work with platforms that explicitly permit managed contracting. Your account is always safe and compliant." },
          { icon: Eye, title: "No Hidden Fees", body: "Every split is published upfront. You see exactly what you earn and exactly what we take before you sign anything." },
          { icon: HandCoins, title: "30%+ Pay Floor Always", body: "No matter what, you receive at least 30% of task earnings, paid weekly. This is non negotiable and written into every agreement." },
          { icon: Accessibility, title: "Built for Everyone", body: "Flexible async tasks designed from day one to be accessible for disabled, neurodivergent, and workers across all time zones." },
          { icon: ShieldCheck, title: "Your Login Stays Private", body: "Account credentials are never entered into web forms. All sensitive access is handled via Telegram encrypted channels only." },
          { icon: Users, title: "Real Support, Real People", body: "You get a real manager on Telegram who responds within hours, not a chatbot, not a ticket system. A person who knows your account." },
        ]} />
      </Section>

      {/* LEADERSHIP TEAM */}
      <Section 
        id="team" 
        title="The Team Behind Middlemen™" 
        eyebrow="Who Runs This"
        intro="Real people managing real operations. Here is who you will be working with."
        backgroundImage="/images/telegram-ops-hub.jpg"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card relative flex flex-col justify-between border-line bg-surface/95 backdrop-blur hover:border-accent transition-colors">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 via-accent/20 to-surface-2 font-mono text-xl font-black text-ink border border-accent/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)]">
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
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-amber-500 text-bg font-black text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.3)]">
                +
              </span>
              <h3 className="text-xl font-extrabold text-ink">Join Our Trainer Fleet</h3>
              <p className="text-sm text-muted leading-relaxed">
                Are you a mathematician, software engineer, translator, or domain expert? We provide vetted accounts, hourly guarantees, and weekly direct payouts.
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

      {/* WHAT ARE AI COMPANIES PAYING FOR */}
      <Section 
        id="ecosystem" 
        tone="tint" 
        title="What Are AI Companies Actually Paying For?" 
        eyebrow="The Work Explained Simply"
        intro="Big AI companies like OpenAI, Google, and Meta need humans to teach their AI how to think better. They pay people like you to help them."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { emoji: "💬", title: "Rating AI Responses", body: "You read two AI answers to the same question and pick which one is better. Simple comparisons that help AI learn faster.", glow: "from-sky-500/25 to-blue-900/50 border-sky-400/40" },
            { emoji: "✍️", title: "Writing Prompts & Instructions", body: "You write questions or tasks for the AI to try to answer. The more creative your prompts, the better the AI gets and the more you earn.", glow: "from-emerald-500/25 to-teal-900/50 border-emerald-400/40" },
            { emoji: "🔢", title: "Checking Math & Reasoning", body: "AI often makes subtle logic errors. If you are good at math or science, you can earn top rates reviewing step by step reasoning for mistakes.", glow: "from-purple-500/25 to-indigo-900/50 border-purple-400/40" },
            { emoji: "💻", title: "Reviewing Code", body: "If you know any programming language like Python, JavaScript, or SQL, companies will pay you to verify that AI generated code actually works correctly.", glow: "from-amber-500/25 to-orange-900/50 border-amber-400/40" },
            { emoji: "🌍", title: "Translating & Localizing", body: "AI needs to work in every language. If you speak a second language fluently, you can earn by translating or reviewing AI content in that language.", glow: "from-teal-500/25 to-cyan-900/50 border-teal-400/40" },
            { emoji: "📖", title: "Fact Checking & Research", body: "You verify that AI answers are accurate, up to date, and not making things up. Great for people who enjoy researching and reading critically.", glow: "from-rose-500/25 to-pink-900/50 border-rose-400/40" },
          ].map((item) => (
            <div key={item.title} className="group card flex flex-col border-line bg-surface hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-b ${item.glow} border flex items-center justify-center mb-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_16px_rgba(0,0,0,0.35)]`}>
                <span className="text-3xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform">{item.emoji}</span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-card border border-accent/30 bg-accent-soft/20 text-center">
          <p className="text-base font-semibold text-ink">
            💡 You do not need to know AI. You just need to think clearly, follow instructions, and be consistent.
          </p>
          <p className="text-sm text-muted mt-1">Our team trains you on the specific tasks before you start. Most people are earning within 48 hours of joining.</p>
        </div>
      </Section>

      {/* TOOLS WE USE */}
      <Section
        id="enablers"
        title="Tools That Keep You Safe & Connected"
        eyebrow="How We Protect You"
        intro="We use trusted global platforms to keep your work secure, your earnings trackable, and your support team reachable 24/7."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              emoji: "🌐",
              name: "Google Translate",
              role: "30+ Languages Supported",
              description: "Our platform works in over 30 languages so anyone, anywhere can read, understand, and use the site in their own language.",
              url: "https://translate.google.com",
              glow: "from-blue-500/20 to-indigo-900/40 border-blue-500/40",
            },
            {
              emoji: "✈️",
              name: "Telegram",
              role: "Your Support & Payment Channel",
              description: "All communication, account access, support, and weekly payment confirmations happen through Telegram. It is encrypted, fast, and free.",
              url: "https://telegram.org",
              glow: "from-sky-500/20 to-cyan-900/40 border-sky-500/40",
            },
            {
              emoji: "🛡️",
              name: "Cloudflare",
              role: "Site Security & Speed",
              description: "Our website is protected and accelerated by Cloudflare, keeping your data safe and the site fast no matter where you access from.",
              url: "https://cloudflare.com",
              glow: "from-amber-500/20 to-orange-900/40 border-amber-500/40",
            },
          ].map((item) => (
            <div key={item.name} className="group card flex flex-col border-line bg-surface hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-b ${item.glow} border flex items-center justify-center mb-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_16px_rgba(0,0,0,0.35)]`}>
                <span className="text-3xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform">{item.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-ink">{item.name}</h3>
              <p className="text-xs font-mono text-accent font-semibold mb-2">{item.role}</p>
              <p className="text-sm text-muted leading-relaxed flex-1">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT US */}
      <Section 
        id="contact" 
        title="Have Questions? We Are Here." 
        eyebrow="Talk to a Real Person"
        intro="Whether you want to apply, have questions about how the money works, or just want to understand what we do, message us and a real person will reply within 24 hours."
      >
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1.2fr]">
          <div>
            <h3 className="text-xl font-bold text-ink mb-4">Send Us a Message</h3>
            <ContactForm />
          </div>

          <div className="space-y-6">
            {/* TELEGRAM 24/7 SUPPORT HUB */}
            <div className="rounded-2xl border-2 border-[#24A1DE]/40 bg-[#24A1DE]/10 p-5 font-mono shadow-xl">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-control bg-[#24A1DE] px-4 py-2.5 font-sans text-sm font-bold text-white hover:bg-[#2092CA] transition-colors shadow-lg" 
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
                    <span className="font-bold text-ink block">Marcus Vance : Managing Partner</span>
                    <span className="text-muted">Partnerships &amp; Accounts</span>
                  </div>
                  <a href={`mailto:${site.email.hello}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Dr. Elena Rostova : Learning Lead</span>
                    <span className="text-muted">Tasker Curriculum &amp; Onboarding</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Aris Thorne : Head of QA</span>
                    <span className="text-muted">Sampling Audits &amp; Scorecards</span>
                  </div>
                  <a href={`mailto:${site.email.support}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between pb-2 border-b border-line">
                  <div>
                    <span className="font-bold text-ink block">Kaelen Diaz : Security Lead</span>
                    <span className="text-muted">Encrypted Channels &amp; VM Sessions</span>
                  </div>
                  <a href={`mailto:${site.email.security}`} className="link text-accent">Email &rarr;</a>
                </li>

                <li className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-ink block">Sora Tanaka : Contributor Care</span>
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
