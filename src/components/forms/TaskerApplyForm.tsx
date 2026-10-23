"use client";
import Link from "next/link";
import { Checkbox, CheckboxGroup, ErrorSummary, FileUpload, SelectField, SuccessPanel, TextArea, TextField } from "./fields";
import { checkFiles, isEmail, str, useSubmit } from "./useSubmit";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  if (!str(fd, "name")) e.name = "Enter your full name.";
  if (!isEmail(str(fd, "email"))) e.email = "Enter an email address like name@example.com.";
  if (!str(fd, "country")) e.country = "Enter the country where you'll work from.";
  if (!str(fd, "timezone")) e.timezone = "Choose your time zone.";
  if (!fd.getAll("skills").length) e.skills = "Choose at least one skill area.";
  if (!str(fd, "hours")) e.hours = "Choose how many hours a week you'd like.";
  const fileErr = checkFiles(fd, "cv"); if (fileErr) e.cv = fileErr;
  if (!fd.get("adult")) e.adult = "Confirm that you're 18 or older.";
  if (!fd.get("verification")) e.verification = "Agree to identity verification to continue.";
  if (!fd.get("recording")) e.recording = "Agree to the remote-session rules to continue.";
  if (!fd.get("agree")) e.agree = "Agree to the Tasker Agreement to continue.";
  return e;
}

const timezones = ["UTC−08:00 Pacific", "UTC−05:00 Eastern", "UTC+00:00 London / Accra", "UTC+01:00 Lagos / Central Europe", "UTC+02:00 Johannesburg / Cairo", "UTC+03:00 Nairobi", "UTC+05:30 India", "UTC+08:00 Manila / Singapore", "Other"];

export function TaskerApplyForm() {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/tasker", validate);

  if (status === "done") {
    return (
      <SuccessPanel title="Application received">
        <p>Your reference is <strong>{reference}</strong>. Check your email for a link to the identity check and your first skills test.</p>
        <p className="mt-2">If you asked for accommodations, a coach will contact you before the tests so they&apos;re set up the way you need.</p>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-8">
      <p className="text-muted">About 8 minutes. Applying is free — we never charge taskers to join, train or get work.</p>
      <ErrorSummary errors={errors} refEl={summaryRef} />

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">About you</legend>
        <TextField name="name" label="Full name" autoComplete="name" required error={errors.name}
          hint="Use the name on your ID. You can also tell us the name you'd like us to call you in the notes." />
        <TextField name="email" label="Email" type="email" autoComplete="email" required error={errors.email} />
        <TextField name="country" label="Country you'll work from" autoComplete="country-name" required error={errors.country}
          hint="Platforms set which countries can work on them. We only assign accounts where your location is allowed." />
        <SelectField name="timezone" label="Time zone" required error={errors.timezone} options={timezones.map((t) => ({ value: t, label: t }))} />
        <TextField name="languages" label="Languages you work in well" optional hint="For example: English, Yoruba, French." />
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">Skills and availability</legend>
        <CheckboxGroup name="skills" legend="Skill areas" required error={errors.skills} options={[
          { value: "rating", label: "Rating and comparing AI answers" }, { value: "writing", label: "Writing and editing" },
          { value: "coding", label: "Coding" }, { value: "stem", label: "Math and science" },
          { value: "multimodal", label: "Image, audio or video review" }, { value: "language", label: "Translation or non-English work" },
        ]} />
        <SelectField name="hours" label="Hours per week you'd like" required error={errors.hours} options={[
          { value: "lt10", label: "Under 10" }, { value: "10-20", label: "10 – 20" }, { value: "20-30", label: "20 – 30" }, { value: "30plus", label: "30 or more" },
        ]} hint="You can change this any time. Short weeks are fine." />
        <CheckboxGroup name="times" legend="When do you usually prefer to work?" options={[
          { value: "morning", label: "Mornings" }, { value: "afternoon", label: "Afternoons" },
          { value: "evening", label: "Evenings" }, { value: "overnight", label: "Overnight" }, { value: "varies", label: "It varies — I'll set it weekly" },
        ]} />
        <SelectField name="connection" label="Your internet connection" optional options={[
          { value: "fiber", label: "Fiber or cable" }, { value: "mobile", label: "Mobile data or hotspot" },
          { value: "satellite", label: "Satellite" }, { value: "shared", label: "Shared or public connection" },
        ]} hint="Our remote sessions work on connections from about 5 Mbps. We'll test yours before your first shift." />
        <FileUpload name="cv" label="CV or work samples" optional error={errors.cv} hint="Not required. A short list of past work in the notes is fine too." />
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-semibold">Accommodations</legend>
        <p className="text-muted">Optional and private. You don&apos;t need to share a diagnosis — just tell us what helps you work well. Only your coach and the accommodations lead can see this.</p>
        <CheckboxGroup name="accommodations" legend="Things that would help" options={[
          { value: "screenreader", label: "Screen-reader-friendly task setup" }, { value: "captions", label: "Captions or transcripts" },
          { value: "extraTime", label: "Extra time on tests and tasks" }, { value: "splitting", label: "Tasks split into smaller steps" },
          { value: "breaks", label: "Break reminders" }, { value: "writtenComms", label: "Written instead of spoken communication" },
          { value: "voice", label: "Voice control" }, { value: "flexibleSchedule", label: "Very flexible scheduling" },
        ]} />
        <TextArea name="accommodationNotes" label="Anything else that helps you work well?" optional rows={3} />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold">Confirmations</legend>
        <Checkbox name="adult" label="I'm 18 or older." required error={errors.adult} />
        <Checkbox name="verification" label="I agree to a one-time identity check through our verification partner." required error={errors.verification}
          hint="We check that you are who you say you are. We keep the result, not a copy of your ID." />
        <Checkbox name="recording" label="I understand work happens in a recorded, secure remote session with no clipboard or USB access." required error={errors.recording}
          hint="Recordings are used only for quality checks, security and disputes." />
        <div>
          <Checkbox name="agree" label="I agree to the Tasker Agreement." required error={errors.agree} />
          <p className="ml-9 mt-1 text-[0.95rem]"><Link className="link" href="/legal/tasker-agreement">Read the Tasker Agreement</Link></p>
        </div>
      </fieldset>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Apply to task"}
      </button>
      <p className="text-[0.95rem] text-muted">Work depends on accounts and platform task supply, so we can&apos;t promise a set number of hours or income.</p>
    </form>
  );
}
