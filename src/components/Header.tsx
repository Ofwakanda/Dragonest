"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { nav, site } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { Monogram3D } from "./Monogram3D";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4 overflow-x-hidden">
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-2.5 rounded no-underline py-1 shrink-0" aria-label={`${site.name} home`}>
          <Monogram3D size={26} />
          <span className="text-xl font-bold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav — 5 links, shown at lg+ */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`whitespace-nowrap rounded px-3 py-2 text-sm font-medium transition-colors hover:text-ink hover:bg-surface ${
                      active
                        ? "text-ink font-semibold underline decoration-ink decoration-2 underline-offset-8"
                        : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          {/* Single primary CTA — lime accent, one job */}
          <Link
            href="/account-owners#submit"
            className="btn-accent hidden whitespace-nowrap !min-h-[38px] !py-2 !px-4 text-xs tracking-wide uppercase sm:inline-flex"
          >
            Get Started
          </Link>
          {/* Mobile menu toggle */}
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-line bg-bg lg:hidden">
        <ul className="container flex flex-col py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block rounded px-3 py-3 text-base font-medium text-ink no-underline hover:bg-surface"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 grid gap-2 pb-3 border-t border-line pt-3">
            <a
              href={site.telegram.hub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-line p-3 text-sm font-medium text-ink hover:bg-surface"
            >
              <Send className="h-4 w-4 text-muted" aria-hidden="true" /> Telegram Hub
            </a>
            <Link href="/account-owners#submit" className="btn-accent text-sm text-center">
              Get Started
            </Link>
            <div className="flex justify-center pt-1">
              <LanguageSelector />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
