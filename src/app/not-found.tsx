import Link from "next/link";
import { Compass } from "lucide-react";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="container flex flex-col items-start py-24">
      <Compass aria-hidden="true" className="h-12 w-12 text-primary" />
      <p className="eyebrow mt-6">Error 404</p>
      <h1 className="mt-2 text-4xl">We can&apos;t find that page</h1>
      <p className="mt-4 max-w-prose text-lg text-muted">The link may be old, or the page may have moved. These pages might help:</p>
      <ul className="mt-6 grid gap-3 text-lg">
        <li><Link className="link" href="/">Home</Link></li>
        <li><Link className="link" href="/account-owners">For account owners</Link></li>
        <li><Link className="link" href="/taskers">For taskers</Link></li>
        <li><Link className="link" href="/pricing">Pricing</Link></li>
        <li><Link className="link" href="/about#contact">Contact us</Link></li>
      </ul>
    </div>
  );
}
