import type { Config } from "tailwindcss";

// All colors resolve to CSS variables defined in src/app/globals.css,
// so light/dark themes swap in one place. Values are "R G B" triplets.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        "line-strong": token("line-strong"),
        primary: token("primary"),
        "primary-hover": token("primary-hover"),
        "on-primary": token("on-primary"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "accent-soft": token("accent-soft"),
        danger: token("danger"),
        "danger-soft": token("danger-soft"),
        warn: token("warn"),
        "warn-soft": token("warn-soft"),
        focus: token("focus"),
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        // Base is 17px for readability; scale is ~1.25
        base: ["1.0625rem", { lineHeight: "1.7" }],
        lg: ["1.1875rem", { lineHeight: "1.65" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.3" }],
        "3xl": ["2.125rem", { lineHeight: "1.2" }],
        "4xl": ["2.625rem", { lineHeight: "1.12" }],
        "5xl": ["3.25rem", { lineHeight: "1.08" }],
      },
      borderRadius: { card: "1rem", control: "0.625rem" },
      boxShadow: {
        card: "0 1px 3px rgb(0 0 0 / 0.05), 0 4px 16px rgb(0 0 0 / 0.04)",
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};

export default config;
