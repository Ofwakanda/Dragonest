/**
 * Middlemen (MM) brand mark.
 * High-contrast monochrome geometric MM monogram.
 * Adapts seamlessly to light and dark modes via text-ink / text-bg tokens.
 */
export function Logo({ className = "h-9 w-9", size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 transition-transform duration-200 group-hover:scale-105`}
      aria-hidden="true"
      width={size}
      height={size}
    >
      <rect width="32" height="32" rx="6" fill="currentColor" className="text-ink" />
      <path
        d="M 6 23 V 9 L 11 17 L 16 9 V 23 M 16 23 V 9 L 21 17 L 26 9 V 23"
        stroke="currentColor"
        className="text-bg"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
