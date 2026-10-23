"use client";
import { useRef, useState } from "react";
import { UPLOAD_RULES } from "./fields";

export type Validator = (fd: FormData) => Record<string, string>;

/** Shared submit flow: validate → show error summary and focus it → POST → success. */
export function useSubmit(endpoint: string, validate: Validator) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [reference, setReference] = useState<string>("");
  const summaryRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(json.errors ?? { form: "Something went wrong on our side. Your answers are still here — please try again." });
        setStatus("failed");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }
      setReference(json.reference ?? "");
      setStatus("done");
    } catch {
      setErrors({ form: "We couldn't reach the server. Check your connection and try again." });
      setStatus("failed");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }
  return { errors, status, reference, summaryRef, onSubmit };
}

export const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function checkFiles(fd: FormData, key: string): string | undefined {
  const files = fd.getAll(key).filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > UPLOAD_RULES.maxFiles) return `Upload ${UPLOAD_RULES.maxFiles} files or fewer.`;
  for (const f of files) {
    if (!UPLOAD_RULES.accept.includes(f.type)) return `“${f.name}” isn't a PDF, PNG or JPG.`;
    if (f.size > UPLOAD_RULES.maxBytes) return `“${f.name}” is larger than 10 MB.`;
  }
}
