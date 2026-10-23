import { AudioLines, Captions, Clock, Coffee, Keyboard, Mic, ScrollText, Split, UserRound } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FeatureGrid, Note, PageHero, Section } from "@/components/ui";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Accessibility",
  description: "Screen-reader support, captions and transcripts, keyboard-only and voice control, break reminders, plain-language instructions, task splitting, extra time and a human coach.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Accessible work, not just an accessible website"
        subhead="Many good taskers are disabled, neurodivergent, chronically ill or live far from cities. We design the work, the tools and the pay around that. Accommodations are free and private.">
        <a href="#request" className="btn-primary">Request an accommodation</a>
      </PageHero>

      <Section id="support" title="What we offer">
        <FeatureGrid items={[
          { icon: AudioLines, title: "Screen-reader support", body: "Our dashboard and session tools are tested with NVDA, JAWS, VoiceOver and TalkBack. We'll tell you honestly if a platform's own task tool isn't screen-reader friendly." },
          { icon: Captions, title: "Captions and transcripts", body: "Every training video has accurate captions and a text transcript. Live calls can have captions or a written summary." },
          { icon: Keyboard, title: "Keyboard-only navigation", body: "Everything on our site and dashboard works with a keyboard alone, with a visible focus outline." },
          { icon: Mic, title: "Voice control", body: "Supported in our sessions through Dragon, Voice Access and Voice Control. We'll help you set it up." },
          { icon: Coffee, title: "Break reminders", body: "Gentle reminders at intervals you choose. Sessions pause safely, and breaks never count against reliability." },
          { icon: ScrollText, title: "Plain-language instructions", body: "We rewrite project guidelines into short, clear steps with examples, alongside the original." },
          { icon: Split, title: "Task splitting", body: "Long tasks broken into smaller steps with checkpoints, where the platform allows it." },
          { icon: Clock, title: "Extra time options", body: "Extra time on our skills tests, and longer shift windows. Platform time limits we can't change are flagged before you accept." },
          { icon: UserRound, title: "Human support and coaching", body: "A named coach for setup, questions and check-ins — by chat, email, phone or video, your choice." },
        ]} />
      </Section>

      <Section id="principles" tone="tint" title="Our principles">
        <ul className="grid max-w-3xl list-disc gap-3 pl-6 text-lg">
          <li>You never need to share a diagnosis. Tell us what helps; that&apos;s enough.</li>
          <li>Accommodations never lower your pay share, your ratings or your chances of getting work.</li>
          <li>Only your coach and our accommodations lead can see your accommodation details. Account owners can&apos;t.</li>
          <li>Rural and low-bandwidth workers get low-bandwidth session settings and offline-friendly training materials.</li>
          <li>If something doesn&apos;t work for you, that&apos;s our problem to fix, not yours.</li>
        </ul>
      </Section>

      <Section id="website" title="This website">
        <div className="max-w-3xl space-y-4">
          <p>We aim to meet WCAG 2.2 Level AA across this site. That includes text contrast of at least 4.5:1, a visible focus outline, labels on every form field, no autoplaying media, no flashing content, support for 200% zoom and reduced motion, and light and dark themes.</p>
          <Note title="Found a barrier?">Tell us at <a className="link" href={`mailto:${site.email.access}`}>{site.email.access}</a> or with the form below. We reply within 2 business days and fix confirmed issues within 30 days.</Note>
        </div>
      </Section>

      <Section id="request" tone="tint" title="Request an accommodation" intro="Tell us what would help, in your own words. You can also email, or ask us to call you.">
        <div className="max-w-2xl"><ContactForm defaultTopic="accommodation" /></div>
      </Section>
    </>
  );
}
