"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      className="inline-flex h-12 w-12 items-center justify-center rounded-control border border-line text-ink hover:bg-surface"
    >
      <span className="sr-only">Dark mode</span>
      {isDark ? <Moon aria-hidden="true" className="h-5 w-5" /> : <Sun aria-hidden="true" className="h-5 w-5" />}
    </button>
  );
}

/** Inline script that sets the theme before paint (prevents a flash). */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;
