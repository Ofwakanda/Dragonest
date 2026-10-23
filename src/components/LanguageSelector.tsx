"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (options: { pageLanguage: string; autoDisplay?: boolean }, elementId: string) => void;
      };
    };
  }
}

export function LanguageSelector() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Google Translate widget if not already injected
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", autoDisplay: false },
            "google_translate_element"
          );
        }
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative inline-flex items-center gap-1.5 rounded-control border border-line bg-surface/80 px-2 py-1 text-xs text-ink hover:border-line-strong transition-colors">
      <Globe className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
      <div id="google_translate_element" className="notranslate leading-none" />
    </div>
  );
}
