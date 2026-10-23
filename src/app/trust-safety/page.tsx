import Link from "next/link";
import { FileLock2, FileSignature, Fingerprint, HardDrive, KeyRound, ListTree, MonitorX, ScanSearch, ShieldCheck, Smartphone, Video } from "lucide-react";
import { ComplianceNotice, FeatureGrid, FinalCta, Note, PageHero, Section } from "@/components/ui";
import { photos, site } from "@/config/site";
import { Media } from "@/components/Media";
import { SecureSessionDiagram } from "@/components/illustrations/Scenes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trust & safety",
  description: "Telegram encrypted secret chat, enforced 2FA, recorded isolated VMs with no clipboard or USB, NDAs, data-processing agreements, audit logs and anti-fraud checks.",
  path: "/trust-safety",
});

export default function TrustSafety() {
  return (
    <>
      <PageHero 
        eyebrow="Trust and safety" 
        title="Security built into every session"
        backgroundImage="/images/trust-security.jpg"
        subhead="Account owners trust us with access. Taskers trust us with their identity and pay. Here is exactly how we protect both."
      >
        <Link href="#policy" className="btn-accent">Read our security policy</Link>
      </PageHero>

      <Section id="session" title="How a work session is protected" intro="Your login is coordinated via Telegram's end-to-end encrypted chat with verified admins. From then on, taskers only ever see the screen of a locked-down, recorded machine." backgroundImage="/images/proxy-rdp-session.jpg">
        <div className="card"><SecureSessionDiagram className="h-auto w-full" /></div>
      </Section>

      <Section id="controls" tone="tint" title="Our controls">
        <FeatureGrid items={[
          { icon: KeyRound, title: "Telegram encrypted chat", body: "Logins are shared directly via Telegram's end-to-end encrypted secret chat with verified administrators. Credentials are never exposed to taskers and are injected directly into secure isolated sessions." },
          { icon: Smartphone, title: "2FA enforcement", body: "Two-factor sign-in must be on for every account we work on, and for every staff and tasker login to our systems. We use app-based codes or security keys, not SMS, where the platform allows." },
          { icon: Video, title: "Session recording", body: "Every work session is recorded for quality checks, security and disputes. Recordings are encrypted and deleted after 90 days unless a dispute is open." },
          { icon: MonitorX, title: "No clipboard or USB", body: "Copy-paste out of the session, file transfer, printing, screen sharing and USB devices are all blocked." },
          { icon: HardDrive, title: "Isolated virtual machines", body: "Each account runs in its own locked-down virtual machine with a fixed network location. Nothing from one account can reach another." },
          { icon: FileSignature, title: "NDAs", body: "Every tasker and staff member signs a plain-language confidentiality agreement before any access." },
          { icon: FileLock2, title: "Data-processing agreements", body: "We sign data-processing agreements with account owners and platforms on request, and follow GDPR and NDPR principles." },
          { icon: ListTree, title: "Audit logs", body: "Every session start and stop, admin login, and permission change is logged, tamper-evident and kept for 2 years. Owners can export their account's log." },
          { icon: ScanSearch, title: "Anti-fraud checks", body: "Identity verification, device checks, duplicate-identity detection and location checks against the platform's allowed countries." },
        ]} />
      </Section>

      <Section id="access" title="Who can see what">
        <div className="overflow-x-auto rounded-card border border-line bg-bg">
          <table className="w-full min-w-[560px] text-left">
            <caption className="sr-only">Access by role</caption>
            <thead className="bg-surface-2"><tr><th scope="col" className="px-5 py-3">Data</th><th scope="col" className="px-5 py-3">Tasker</th><th scope="col" className="px-5 py-3">QA staff</th><th scope="col" className="px-5 py-3">Account owner</th></tr></thead>
            <tbody className="divide-y divide-line">
              {[
                ["Account password", "Never", "Never", "Yes (it's theirs)"],
                ["Work session (live)", "Own sessions", "Samples", "On request"],
                ["Session recordings", "Own sessions", "Yes", "Their account only"],
                ["Tasker ID documents", "Own only", "Never", "Never"],
                ["Accommodation details", "Own only", "Never", "Never"],
                ["Audit log", "No", "Yes", "Their account only"],
              ].map(([d, ...cells]) => (
                <tr key={d}><th scope="row" className="px-5 py-3 font-semibold">{d}</th>{cells.map((c, i) => <td key={i} className="px-5 py-3">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="platforms" tone="tint" title="Platform compliance comes first">
        <div className="max-w-3xl space-y-5">
          <ComplianceNotice />
          <p>We re-check every platform&apos;s terms at least every quarter and whenever a platform announces changes. If a platform stops allowing managed work, we pause all work on that platform within one business day, tell owners and taskers, and help taskers move to other assignments.</p>
          <Note title="Things we will never do">Share one tasker&apos;s identity as another&apos;s, use tools to hide a tasker&apos;s location, get around platform identity checks, or work on accounts that weren&apos;t submitted by their owner.</Note>
        </div>
      </Section>

      <Section id="policy" title="Security policy summary">
        <div className="card max-w-3xl space-y-3">
          <p><ShieldCheck aria-hidden="true" className="mr-2 inline h-5 w-5 text-accent-ink" />Least-privilege access, reviewed monthly.</p>
          <p><ShieldCheck aria-hidden="true" className="mr-2 inline h-5 w-5 text-accent-ink" />Encryption at rest and in transit for all personal data and credentials.</p>
          <p><ShieldCheck aria-hidden="true" className="mr-2 inline h-5 w-5 text-accent-ink" />Incident response within 24 hours; affected owners and taskers notified within 72 hours.</p>
          <p><ShieldCheck aria-hidden="true" className="mr-2 inline h-5 w-5 text-accent-ink" />Annual third-party penetration test. Summary available under NDA.</p>
          <p><Fingerprint aria-hidden="true" className="mr-2 inline h-5 w-5 text-accent-ink" />Identity data kept only as long as the law requires.</p>
          <p className="pt-2">Report a vulnerability: <a className="link" href={`mailto:${site.email.security}`}>{site.email.security}</a>. We respond within 2 business days.</p>
          <p><Link className="link" href="/legal/data-processing">Read the Data Processing Agreement</Link> · <Link className="link" href="/legal/privacy">Read the Privacy Policy</Link></p>
        </div>
      </Section>

      <FinalCta title="Want the full security policy?" body="We share our complete policy, controls list and latest penetration-test summary with owners and platforms under NDA."
        primary={{ href: "/about#contact", label: "Read our security policy" }} secondary={{ href: "/account-owners#submit", label: "Submit your account" }} />
    </>
  );
}
