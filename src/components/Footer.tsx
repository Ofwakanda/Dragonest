import Link from "next/link";
import { legalDocs, nav, site } from "@/config/site";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./CookieConsent";
import { DigestForm } from "./forms/DigestForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>

      {/* Daily Digest / News Channel Banner */}
      <div className="border-b border-line bg-surface-2/40 py-10">
        <div className="container grid items-center gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Daily News Channel</p>
            <h3 className="mt-1 text-xl font-bold">Get the Morning AI Training Digest</h3>
            <p className="mt-1 text-sm text-muted">
              Platform policy shifts, qualification openings, and hourly rate benchmarks delivered every weekday.
            </p>
          </div>
          <div>
            <DigestForm compact />
          </div>
        </div>
      </div>

      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-bold">{site.name}</span>
          </div>
          <p className="mt-3 text-[0.95rem] text-muted">
            Managed staffing for AI-training accounts. {site.trustLine}
          </p>
        </div>
        <FooterList title="Company" links={[...nav.map((n) => ({ href: n.href, label: n.label })), { href: "/#digest", label: "Daily Digest" }, { href: "/about#contact", label: "Contact" }]} />
        <FooterList title="Legal" links={legalDocs.map((d) => ({ href: `/legal/${d.slug}`, label: d.title }))} />
        <div>
          <h3 className="text-base font-semibold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <a 
                className="link font-bold flex items-center gap-1.5 text-ink hover:text-[#24A1DE]" 
                href={site.telegram.hub} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-[#24A1DE]">✈</span> Telegram Hub
              </a>
              <span className="text-xs text-muted block ml-5">Live Agents & Admins</span>
            </li>
            <li><a className="link" href={`mailto:${site.email.hello}`}>{site.email.hello}</a></li>
            <li><a className="link" href={`mailto:${site.email.access}`}>Accessibility requests</a></li>
            <li><a className="link" href={`mailto:${site.email.security}`}>Report a security issue</a></li>
            <li><CookieSettingsButton /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-6 text-sm text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalEntity}. We do not guarantee income. Earnings depend on platform task availability.</p>
          <p>Account owners remain responsible for platform taxes and legal compliance.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-base font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}><Link className="text-ink underline decoration-line-strong hover:decoration-primary" href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
