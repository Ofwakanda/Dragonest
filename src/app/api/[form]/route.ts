import { NextResponse } from "next/server";

/**
 * Form intake endpoint for /api/account, /api/tasker and /api/contact.
 * Re-validates everything server-side (never trust the client).
 *
 * PRODUCTION TODO:
 *  - Add rate limiting + a bot check (e.g. Cloudflare Turnstile).
 *  - Stream uploads to encrypted object storage (S3/GCS with SSE-KMS) via
 *    short-lived pre-signed URLs, run malware scanning, strip EXIF.
 *  - Persist to your database / CRM and send the confirmation email.
 *  - Never accept or store passwords here — credentials go only via Telegram's encrypted chat.
 */
const MAX_FILE = 10 * 1024 * 1024;
const TYPES = ["application/pdf", "image/png", "image/jpeg"];
const REQUIRED: Record<string, string[]> = {
  account: ["name", "email", "country", "platform", "policyUrl", "status", "ownsAccount", "platformAllows", "taxResponsibility", "agree"],
  tasker: ["name", "email", "country", "timezone", "hours", "adult", "verification", "recording", "agree"],
  contact: ["name", "email", "topic", "message"],
  digest: ["email"],
  assessment: ["name", "email", "domain", "projectTarget", "experience", "agree"],
};
// Fields that must never be submitted through forms.
const FORBIDDEN = /pass(word)?|otp|2fa_code|secret|card|ssn/i;

export async function POST(req: Request, { params }: { params: Promise<{ form: string }> }) {
  const { form } = await params;
  const required = REQUIRED[form];
  if (!required) return NextResponse.json({ errors: { form: "Unknown form." } }, { status: 404 });

  let fd: FormData;
  try { fd = await req.formData(); } catch { return NextResponse.json({ errors: { form: "We couldn't read that submission." } }, { status: 400 }); }

  // Bot honeypot check: reject if hidden hp field is populated
  const hp = String(fd.get("hp_field") ?? "").trim();
  if (hp) {
    return NextResponse.json({ ok: true, reference: "PROCESSED" });
  }

  const errors: Record<string, string> = {};
  for (const key of fd.keys()) if (FORBIDDEN.test(key)) errors[key] = "For your security, don't send passwords, codes or card numbers through this form.";
  for (const key of required) if (!String(fd.get(key) ?? "").trim()) errors[key] = `Please complete “${key}”.`;
  const email = String(fd.get("email") ?? "").trim().toLowerCase();
  if (email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const files = [...fd.getAll("files"), ...fd.getAll("cv")].filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > 5) errors.files = "Upload 5 files or fewer.";
  for (const f of files) {
    if (!TYPES.includes(f.type)) errors.files = `“${f.name}” isn't a PDF, PNG or JPG.`;
    if (f.size > MAX_FILE) errors.files = `“${f.name}” is larger than 10 MB.`;
  }

  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const prefix = { account: "ACC", tasker: "TSK", contact: "MSG", digest: "DIG", assessment: "ASM" }[form as "account" | "tasker" | "contact" | "digest" | "assessment"] ?? "REF";
  const reference = `${prefix}-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  return NextResponse.json({ ok: true, reference });
}
