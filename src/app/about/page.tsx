import Link from "next/link";
import { Send, ArrowRight, BookOpen, Home, Briefcase, Car, Globe2 } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About MIDDLEMEN : AI is Paying People Like You Right Now",
  description: "AI companies need real people to check and improve their answers. You do not need a degree or coding skills to get started. We connect you with the work and you get paid every week.",
  path: "/about",
});

const faqItems = [
  {
    q: "Is it really free to start?",
    a: <p>Yes. Checking your account, applying, training and testing cost nothing. Our share comes out of what your account earns.</p>,
  },
  {
    q: "Do I need a degree or experience?",
    a: <p>Account owners do not need any. Taskers need different skills depending on the track. Some need coding or maths, others just good English or your own language.</p>,
  },
  {
    q: "How much can I earn?",
    a: <p>It depends on the platform, the project and how much work is available. The pay ranges we show are typical, not promised. The calculator gives you an estimate.</p>,
  },
  {
    q: "When do I get paid?",
    a: <p>Every Friday, with a statement that shows exactly where the money came from.</p>,
  },
  {
    q: "Do you need my password?",
    a: <p>No. We never ask for a password on a web form. Access is set up in an encrypted chat with a verified admin.</p>,
  },
  {
    q: "How do I know I can trust you?",
    a: <p>You can see your dashboard, your weekly statements and your session records. Our ratings are public and our check is free. You can also reach us at {site.email.support} and {site.legalEntity}.</p>,
  },
  {
    q: "What if something goes wrong with my account?",
    a: <p>Tell us straight away on Telegram. We will look into what happened and explain it clearly.</p>,
  },
  {
    q: "Which countries do you work with?",
    a: <p>Most countries. Payout options depend on where you live: direct bank transfer, wire, SEPA, and local payout channels.</p>,
  },
  {
    q: "Can I stop any time?",
    a: <p>Yes. You can pause or stop managed work at any time. We settle what was earned up to that point and send your final statement.</p>,
  },
];

export default function About() {
  return (
    <>
      {/* 1. TOP SECTION */}
      <PageHero 
        eyebrow="ABOUT MIDDLEMEN" 
        title="AI is paying people like you right now."
        subhead="AI companies need real people to check and improve their answers. You do not need a degree or coding skills to get started. We connect you with the work, protect your account, and you get paid every week."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#qualify" className="btn-accent">See if I qualify</Link>
            <a href="#how" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink transition-colors px-3 py-2">
              How the money works &rarr;
            </a>
          </div>
          <div>
            <a 
              href={site.telegram.hub} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-mono text-muted hover:text-ink transition-colors inline-flex items-center gap-1"
            >
              <Send className="h-3 w-3" /> Join us on Telegram
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. SOUND FAMILIAR? */}
      <Section id="sound-familiar" tone="tint" title="Sound familiar?">
        <div className="max-w-3xl space-y-6">
          <blockquote className="text-xl sm:text-2xl font-medium text-ink italic border-l-2 border-line-strong pl-4">
            &ldquo;I need money, but I do not have a degree. I am not a programmer. And I cannot afford to wait months to get started.&rdquo;
          </blockquote>

          <p className="text-base text-muted leading-relaxed">
            We hear this every day. We help people in exactly that situation get started, and many begin earning within 48 hours. You do not need experience. You need a phone or laptop, an internet connection, and the ability to follow simple instructions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono text-muted">
            <div className="rounded border border-line bg-surface p-3 text-center">Weekly payouts</div>
            <div className="rounded border border-line bg-surface p-3 text-center">Phone or laptop</div>
            <div className="rounded border border-line bg-surface p-3 text-center">Most countries</div>
            <div className="rounded border border-line bg-surface p-3 text-center">Your own hours</div>
          </div>
        </div>
      </Section>

      {/* 3. WHO THIS IS FOR */}
      <Section id="who" title="This is for people like you.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Students",
              body: "Classes only some days, rent to cover. Work in your free hours.",
            },
            {
              icon: Home,
              title: "Parents at home",
              body: "Cannot do 9 to 5? Work around nap time and school runs.",
            },
            {
              icon: Briefcase,
              title: "Between jobs",
              body: "Applications going nowhere? Start earning this week, no interview.",
            },
            {
              icon: Car,
              title: "Drivers and delivery riders",
              body: "Long hours, low pay. Earn from home with a phone or laptop.",
            },
            {
              icon: Globe2,
              title: "Anywhere in the world",
              body: "Paid in US dollars, so even a few hours a week adds up.",
            },
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.title} className="card p-6 flex flex-col justify-between">
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

      {/* 4. HOW IT WORKS */}
      <Section 
        id="how" 
        tone="tint" 
        title="Here is how you earn"
        intro="AI companies pay people to review and improve AI answers. The work is done online, from your phone or laptop, on your own schedule."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                1
              </div>
              <h3 className="text-lg font-semibold text-ink">You get a verified account</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Use your own, or we match you with one.
              </p>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                2
              </div>
              <h3 className="text-lg font-semibold text-ink">You do the tasks, or we do them</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Pick what suits you: do the tasks yourself, or let our specialists work your queue.
              </p>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded border border-line bg-surface-2 font-mono text-xs font-semibold text-muted">
                3
              </div>
              <h3 className="text-lg font-semibold text-ink">You get paid every week</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                With a clear statement every Friday showing what came in and where it went.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. WHAT MIDDLEMEN IS & PROOF */}
      <Section id="who-we-are" title="Who we are">
        <div className="max-w-3xl space-y-6">
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            MIDDLEMEN connects people with AI training work. Account owners keep 55%, specialists earn at least 30%, and 15% runs the service. Everything shows in your dashboard, payouts come weekly, and we never ask for your password on a web form.
          </p>

          <div className="rounded-card border border-line bg-surface p-6 space-y-2">
            <p className="font-mono text-base font-semibold text-ink">
              611 active accounts · 99.4% account health · 4.9 out of 5 average score
            </p>
            <p className="text-xs text-muted">
              Real people earning real income from AI training work. Updated monthly.
            </p>
            <div className="pt-2">
              <Link href="/ratings" className="inline-flex items-center gap-1 text-xs font-mono text-ink underline underline-offset-4 hover:text-muted">
                See live stats &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section id="faq" tone="tint" title="FAQ">
        <div className="max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* 7. CLOSING / CHECK IF YOU QUALIFY */}
      <section id="qualify" className="border-b border-line bg-surface py-16">
        <div className="container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-ink">Check if you qualify.</h2>
          <p className="text-base text-muted">
            It is free, it takes about two minutes, and there is no obligation.
          </p>
          <div className="pt-2">
            <Link href="/account-owners#submit" className="btn-accent inline-flex">
              See if I qualify
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONTACT FORM */}
      <Section id="contact" title="Get in touch" intro="Send a message or reach us directly on Telegram.">
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
