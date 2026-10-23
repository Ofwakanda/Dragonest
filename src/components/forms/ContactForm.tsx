"use client";
import { ErrorSummary, SelectField, SuccessPanel, TextArea, TextField } from "./fields";
import { isEmail, str, useSubmit } from "./useSubmit";

function validate(fd: FormData) {
  const e: Record<string, string> = {};
  if (!str(fd, "name")) e.name = "Enter your name.";
  if (!isEmail(str(fd, "email"))) e.email = "Enter an email address like name@example.com.";
  if (!str(fd, "topic")) e.topic = "Choose what your message is about.";
  if (str(fd, "message").length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const { errors, status, reference, summaryRef, onSubmit } = useSubmit("/api/contact", validate);
  if (status === "done") {
    return <SuccessPanel title="Message sent"><p>Reference <strong>{reference}</strong>. A person will reply within 2 business days.</p></SuccessPanel>;
  }
  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <ErrorSummary errors={errors} refEl={summaryRef} />
      <TextField name="name" label="Name" autoComplete="name" required error={errors.name} />
      <TextField name="email" label="Email" type="email" autoComplete="email" required error={errors.email} />
      <SelectField name="topic" label="What is this about?" required error={errors.topic} options={[
        { value: "owner", label: "I have an account to submit" }, { value: "tasker", label: "I'm a tasker or want to be" },
        { value: "platform", label: "I represent an AI company or platform" }, { value: "quote", label: "I'd like a quote" },
        { value: "accommodation", label: "Accessibility or an accommodation" }, { value: "security", label: "Security or privacy" },
        { value: "other", label: "Something else" },
      ]} />
      {defaultTopic && <input type="hidden" name="source" value={defaultTopic} />}
      <TextArea name="message" label="Message" required error={errors.message} rows={5} />
      <button type="submit" className="btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
    </form>
  );
}
