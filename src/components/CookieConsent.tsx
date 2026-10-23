"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Consent = { necessary: true; analytics: boolean; decidedAt: string };
const KEY = "cookie-consent-v1";
const OPEN_EVENT = "open-cookie-settings";

function read(): Consent | null {
  try { const v = localStorage.getItem(KEY); return v ? (JSON.parse(v) as Consent) : null; } catch { return null; }
}
function save(analytics: boolean) {
  const c: Consent = { necessary: true, analytics, decidedAt: new Date().toISOString() };
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
  // Hook analytics loading here, only when c.analytics === true.
  window.dispatchEvent(new CustomEvent("cookie-consent", { detail: c }));
}

/**
 * Non-modal consent banner (a region, not a dialog) so it never traps focus
 * or blocks the page. Analytics is OFF until the visitor opts in.
 */
export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const existing = read();
    if (!existing) setOpen(true); else setAnalytics(existing.analytics);
    const reopen = () => { setOpen(true); setDetails(true); setTimeout(() => headingRef.current?.focus(), 0); };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;
  const decide = (a: boolean) => { save(a); setAnalytics(a); setOpen(false); };

  return (
    <section
      aria-labelledby="cookie-heading"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-primary bg-bg shadow-card"
    >
      <div className="container py-5">
        <h2 id="cookie-heading" ref={headingRef} tabIndex={-1} className="text-lg">Cookies on this site</h2>
        <p className="mt-1 max-w-prose text-[0.95rem] text-muted">
          We use necessary cookies to keep the site working and secure. With your permission we also use
          analytics cookies to learn which pages help people. We never sell your data.{" "}
          <Link className="link" href="/legal/privacy#cookies">Read the cookie section of our Privacy Policy</Link>.
        </p>
        {details && (
          <fieldset className="mt-4 space-y-3">
            <legend className="font-semibold">Choose cookies</legend>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1 h-5 w-5" />
              <span><strong>Necessary</strong> — security, sign-in and remembering this choice. Always on.</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-[rgb(var(--primary))]" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span><strong>Analytics</strong> — anonymous page-visit counts. Off unless you turn it on.</span>
            </label>
          </fieldset>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="btn-primary" onClick={() => decide(true)}>Accept all</button>
          <button type="button" className="btn-secondary" onClick={() => decide(false)}>Necessary only</button>
          {details ? (
            <button type="button" className="btn-ghost" onClick={() => decide(analytics)}>Save my choices</button>
          ) : (
            <button type="button" className="btn-ghost" onClick={() => setDetails(true)}>Choose cookies</button>
          )}
        </div>
      </div>
    </section>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" className="link text-left" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
