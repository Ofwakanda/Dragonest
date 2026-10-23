"use client";
import { useId } from "react";
import { AlertCircle, CheckCircle2, Upload } from "lucide-react";

/* Accessible form primitives.
   - Every control has a visible <label>.
   - Hints and errors are linked with aria-describedby.
   - Errors set aria-invalid and use text + icon (not color alone).
   - Required fields say "(required)" in text, not just an asterisk. */

const control =
  "mt-2 block w-full rounded-control border-2 border-line-strong bg-bg px-4 py-3 text-base text-ink placeholder:text-muted " +
  "aria-[invalid=true]:border-danger";

type Base = { name: string; label: string; hint?: string; error?: string; required?: boolean; optional?: boolean };

function Label({ htmlFor, label, required, optional }: { htmlFor: string; label: string; required?: boolean; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block font-semibold">
      {label}
      {required && <span className="ml-1 font-normal text-muted">(required)</span>}
      {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
    </label>
  );
}

function Described({ id, hint, error }: { id: string; hint?: string; error?: string }) {
  return (
    <>
      {hint && <p id={`${id}-hint`} className="mt-1 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} aria-live="polite" className="mt-2 flex items-start gap-2 text-sm font-semibold text-ink underline decoration-line-strong underline-offset-4">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span><span className="font-mono text-xs uppercase mr-1">Error:</span>{error}</span>
        </p>
      )}
    </>
  );
}

const describedBy = (id: string, hint?: string, error?: string) =>
  [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

export function TextField({ name, label, hint, error, required, optional, type = "text", autoComplete, inputMode, defaultValue }: Base & {
  type?: string; autoComplete?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; defaultValue?: string;
}) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} label={label} required={required} optional={optional} />
      <input
        id={id} name={name} type={type} required={required} autoComplete={autoComplete} inputMode={inputMode} defaultValue={defaultValue}
        aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} className={control}
      />
      <Described id={id} hint={hint} error={error} />
    </div>
  );
}

export function TextArea({ name, label, hint, error, required, optional, rows = 4 }: Base & { rows?: number }) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} label={label} required={required} optional={optional} />
      <textarea
        id={id} name={name} rows={rows} required={required}
        aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} className={control}
      />
      <Described id={id} hint={hint} error={error} />
    </div>
  );
}

export function SelectField({ name, label, hint, error, required, optional, options, placeholder = "Choose one" }: Base & {
  options: { value: string; label: string }[]; placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} label={label} required={required} optional={optional} />
      <select
        id={id} name={name} required={required} defaultValue=""
        aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} className={control}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <Described id={id} hint={hint} error={error} />
    </div>
  );
}

export function Checkbox({ name, label, hint, error, required, value = "yes" }: Base & { label: string; value?: string }) {
  const id = useId();
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id} name={name} type="checkbox" value={value} required={required}
          aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)}
          className="mt-1 h-6 w-6 shrink-0 accent-[rgb(var(--primary))]"
        />
        <label htmlFor={id} className="font-medium">
          {label}{required && <span className="ml-1 font-normal text-muted">(required)</span>}
        </label>
      </div>
      <div className="ml-9"><Described id={id} hint={hint} error={error} /></div>
    </div>
  );
}

export function CheckboxGroup({ name, legend, hint, error, options, required }: {
  name: string; legend: string; hint?: string; error?: string; required?: boolean; options: { value: string; label: string }[];
}) {
  const id = useId();
  return (
    <fieldset aria-describedby={describedBy(id, hint, error)} aria-invalid={error ? true : undefined}>
      <legend className="font-semibold">
        {legend}{required ? <span className="ml-1 font-normal text-muted">(choose at least one)</span> : <span className="ml-1 font-normal text-muted">(optional)</span>}
      </legend>
      <Described id={id} hint={hint} error={error} />
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <label key={o.value} className="flex items-start gap-3 rounded-control border border-line p-3 hover:bg-surface">
            <input type="checkbox" name={name} value={o.value} className="mt-1 h-5 w-5 shrink-0 accent-[rgb(var(--primary))]" />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function RadioGroup({ name, legend, hint, error, options, required }: {
  name: string; legend: string; hint?: string; error?: string; required?: boolean; options: { value: string; label: string; description?: string }[];
}) {
  const id = useId();
  return (
    <fieldset aria-describedby={describedBy(id, hint, error)}>
      <legend className="font-semibold">{legend}{required && <span className="ml-1 font-normal text-muted">(required)</span>}</legend>
      <Described id={id} hint={hint} error={error} />
      <div className="mt-3 grid gap-3">
        {options.map((o) => (
          <label key={o.value} className="flex items-start gap-3 rounded-control border border-line p-3 hover:bg-surface">
            <input type="radio" name={name} value={o.value} required={required} aria-invalid={error ? true : undefined} className="mt-1 h-5 w-5 shrink-0 accent-[rgb(var(--primary))]" />
            <span><span className="font-medium">{o.label}</span>{o.description && <span className="block text-[0.95rem] text-muted">{o.description}</span>}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export const UPLOAD_RULES = {
  maxFiles: 5,
  maxBytes: 10 * 1024 * 1024,
  accept: ["application/pdf", "image/png", "image/jpeg"],
  acceptAttr: ".pdf,.png,.jpg,.jpeg",
};

export function FileUpload({ name, label, hint, error, optional }: Base) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} label={label} optional={optional} />
      <div className="mt-2 rounded-control border-2 border-dashed border-line-strong bg-surface p-5">
        <div className="flex items-center gap-3 text-muted">
          <Upload aria-hidden="true" className="h-5 w-5" />
          <span className="text-[0.95rem]">PDF, PNG or JPG. Up to {UPLOAD_RULES.maxFiles} files, 10 MB each.</span>
        </div>
        <input
          id={id} name={name} type="file" multiple accept={UPLOAD_RULES.acceptAttr}
          aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)}
          className="mt-3 block w-full text-base file:mr-4 file:min-h-[44px] file:cursor-pointer file:rounded-control file:border-0 file:bg-primary file:px-4 file:font-semibold file:text-on-primary"
        />
      </div>
      <Described id={id} hint={hint} error={error} />
    </div>
  );
}

export function ErrorSummary({ errors, refEl }: { errors: Record<string, string>; refEl: React.RefObject<HTMLDivElement | null> }) {
  const entries = Object.entries(errors);
  return (
    <div ref={refEl} tabIndex={-1} role="alert" aria-labelledby="error-summary-title"
      className={entries.length ? "rounded-card border-2 border-line-strong bg-surface p-5 shadow-sm" : "sr-only"}>
      {entries.length > 0 && (
        <>
          <h3 id="error-summary-title" className="text-base font-bold text-ink flex items-center gap-2">
            <AlertCircle aria-hidden="true" className="h-5 w-5 text-ink" />
            Please fix {entries.length === 1 ? "1 problem" : `${entries.length} problems`}
          </h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-ink font-medium">
            {entries.map(([k, v]) => <li key={k}>{v}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

export function SuccessPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="status" aria-live="polite" className="rounded-card border-2 border-line-strong bg-surface p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-xl font-bold text-ink">
        <CheckCircle2 aria-hidden="true" className="h-6 w-6 text-accent" />
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}
