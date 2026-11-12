import Link from "next/link";
import { Send } from "lucide-react";
import { site } from "@/config/site";
import { Monogram3D } from "./Monogram3D";
import { CookieSettingsButton } from "./CookieConsent";

export function Footer() {
  const footerNav = [
    { href: "/ai-study", label: "AI Study & Automations" },
    { href: "/ratings", label: "Ratings" },
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/about#contact", label: "Contact" },
  ];

  return (
    <footer className="mt-24 border-t border-line bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>

      <div className="container py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-line">
          <div className="flex items-center gap-3">
            <Monogram3D size={28} />
            <div>
              <span className="font-bold text-lg text-ink">{site.name}</span>
              <p className="text-sm text-muted">
                MIDDLEMEN connects people with AI training work. Free to check. Paid every week.
              </p>
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-6 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${site.email.support}`} className="hover:text-ink transition-colors">
              {site.email.support}
            </a>
            <span>·</span>
            <a
              href="https://t.me/middlemenhub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink transition-colors"
            >
              <Send className="h-3 w-3" /> Telegram: t.me/middlemenhub
            </a>
            <span>·</span>
            <span>{site.legalEntity} · London, United Kingdom</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
