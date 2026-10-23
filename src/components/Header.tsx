"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation and on Escape.
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
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center rounded no-underline py-1" aria-label={`${site.name} home`}>
          <span className="flex items-center gap-1.5 whitespace-nowrap text-xl font-black tracking-tight text-ink transition-colors group-hover:text-accent">
            <span>{site.name}</span>
            <span 
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-line-strong bg-surface text-[9px] font-mono font-bold text-muted -translate-y-1.5 select-none"
              title="Trademark"
              aria-label="Trademark"
            >
              ™
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`whitespace-nowrap rounded-control px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:bg-surface hover:text-ink hover:shadow-[0_0_12px_rgba(200,255,46,0.35)] active:scale-95 ${active ? "text-ink font-semibold underline decoration-accent decoration-2 underline-offset-8" : "text-muted"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.telegram.hub}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-control border border-[#24A1DE]/40 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/20 px-3 py-1.5 text-xs font-bold text-ink transition-colors whitespace-nowrap"
            title="Join Telegram Hub"
          >
            <span className="text-[#24A1DE]">✈</span> Telegram
          </a>
          <LanguageSelector />
          <Link href="/account-owners#submit" className="btn-accent hidden whitespace-nowrap !min-h-[40px] !py-2 !px-4 text-xs tracking-wide uppercase sm:inline-flex">
            Get Started
          </Link>
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-control border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-line bg-bg xl:hidden">
        <ul className="container flex flex-col py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block rounded-control px-3 py-3 text-lg font-medium text-ink no-underline hover:bg-surface"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 grid gap-2 pb-2 sm:hidden">
            <a 
              href={site.telegram.hub} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 rounded-control border border-[#24A1DE]/40 bg-[#24A1DE]/10 p-3 text-sm font-bold text-ink"
            >
              <span className="text-[#24A1DE]">✈</span> Join Telegram Hub
            </a>
            <Link href="/account-owners#submit" className="btn-primary">Submit your account</Link>
            <Link href="/taskers#apply" className="btn-secondary">Join as a tasker</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
