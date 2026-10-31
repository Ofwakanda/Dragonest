import { NextResponse } from "next/server";

/**
 * Form intake endpoint for /api/account, /api/tasker, /api/assessment, /api/contact and /api/digest.
 * Re-validates everything server-side (never trust the client).
 * Sends real-time submission alerts directly to the Middlemen Telegram management group.
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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendTelegramAlert(form: string, reference: string, fd: FormData, files: File[]) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const titleMap: Record<string, string> = {
    account: "💼 NEW ACCOUNT OWNER SUBMISSION",
    tasker: "⚡ NEW TASKER APPLICATION",
    assessment: "🎯 NEW ASSESSMENT TAKER INTAKE",
    contact: "📬 NEW CONTACT MESSAGE",
    digest: "📰 NEW NEWSLETTER SUBSCRIBER",
  };

  const title = titleMap[form] || "📋 NEW FORM SUBMISSION";
  const name = escapeHtml(String(fd.get("name") ?? "N/A").trim());
  const email = escapeHtml(String(fd.get("email") ?? "N/A").trim());
  const country = escapeHtml(String(fd.get("country") ?? "").trim());
  const now = new Date().toUTCString();

  let body = `<b>${title}</b>\n`;
  body += `━━━━━━━━━━━━━━━━━━━━\n`;
  body += `🔖 <b>Reference:</b> <code>${reference}</code>\n`;
  if (name !== "N/A") body += `👤 <b>Name:</b> ${name}\n`;
  body += `📧 <b>Email:</b> ${email}\n`;
  if (country) body += `🌍 <b>Country:</b> ${country}\n`;

  if (form === "account") {
    body += `🏢 <b>Platform:</b> ${escapeHtml(String(fd.get("platform") ?? "N/A"))}\n`;
    body += `📊 <b>Status:</b> ${escapeHtml(String(fd.get("status") ?? "N/A"))}\n`;
    const policy = fd.get("policyUrl");
    if (policy) body += `🔗 <b>Profile/Policy:</b> ${escapeHtml(String(policy))}\n`;
  } else if (form === "tasker") {
    body += `⏰ <b>Timezone:</b> ${escapeHtml(String(fd.get("timezone") ?? "N/A"))}\n`;
    body += `⏳ <b>Hours/Week:</b> ${escapeHtml(String(fd.get("hours") ?? "N/A"))}\n`;
  } else if (form === "assessment") {
    body += `🔬 <b>Domain:</b> ${escapeHtml(String(fd.get("domain") ?? "N/A"))}\n`;
    body += `🎯 <b>Project Target:</b> ${escapeHtml(String(fd.get("projectTarget") ?? "N/A"))}\n`;
    body += `📝 <b>Experience:</b> ${escapeHtml(String(fd.get("experience") ?? "N/A"))}\n`;
  } else if (form === "contact") {
    body += `💬 <b>Topic:</b> ${escapeHtml(String(fd.get("topic") ?? "N/A"))}\n`;
    body += `💭 <b>Message:</b>\n${escapeHtml(String(fd.get("message") ?? "N/A"))}\n`;
  }

  if (files.length > 0) {
    const fileList = files.map((f) => escapeHtml(f.name)).join(", ");
    body += `📎 <b>Attachments (${files.length}):</b> ${fileList}\n`;
  }

  body += `━━━━━━━━━━━━━━━━━━━━\n`;
  body += `⏱️ <i>Submitted: ${now}</i>`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: body,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Telegram alert dispatch failed:", err);
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ form: string }> }) {
  const { form } = await params;
  const required = REQUIRED[form];
  if (!required) return NextResponse.json({ errors: { form: "Unknown form." } }, { status: 404 });

  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ errors: { form: "We couldn't read that submission." } }, { status: 400 });
  }

  // Bot honeypot check: reject if hidden hp field is populated
  const hp = String(fd.get("hp_field") ?? "").trim();
  if (hp) {
    return NextResponse.json({ ok: true, reference: "PROCESSED" });
  }

  const errors: Record<string, string> = {};
  for (const key of fd.keys()) {
    if (FORBIDDEN.test(key)) {
      errors[key] = "For your security, don't send passwords, codes or card numbers through this form.";
    }
  }
  for (const key of required) {
    if (!String(fd.get(key) ?? "").trim()) {
      errors[key] = `Please complete “${key}”.`;
    }
  }
  const email = String(fd.get("email") ?? "").trim().toLowerCase();
  if (email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const files = [...fd.getAll("files"), ...fd.getAll("cv")].filter(
    (f): f is File => f instanceof File && f.size > 0
  );
  if (files.length > 5) errors.files = "Upload 5 files or fewer.";
  for (const f of files) {
    if (!TYPES.includes(f.type)) errors.files = `“${f.name}” isn't a PDF, PNG or JPG.`;
    if (f.size > MAX_FILE) errors.files = `“${f.name}” is larger than 10 MB.`;
  }

  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const prefix =
    { account: "ACC", tasker: "TSK", contact: "MSG", digest: "DIG", assessment: "ASM" }[
      form as "account" | "tasker" | "contact" | "digest" | "assessment"
    ] ?? "REF";
  const reference = `${prefix}-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  // Dispatch real-time Telegram alert to the EMPIRE admin group
  await sendTelegramAlert(form, reference, fd, files);

  return NextResponse.json({ ok: true, reference });
}
