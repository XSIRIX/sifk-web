"use client";

import { FormEvent, useState } from "react";

import type { Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

type ContactFormProps = {
  locale?: Locale;
};

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale = "de" }: ContactFormProps) {
  const copy = sharedCopy[locale].contactForm;
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error();

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>{copy.fields.name}</span>
          <input name="name" placeholder={copy.fields.namePlaceholder} required type="text" />
        </label>

        <label>
          <span>{copy.fields.company}</span>
          <input name="company" placeholder={copy.fields.companyPlaceholder} type="text" />
        </label>
      </div>

      <div className="field-grid">
        <label>
          <span>{copy.fields.email}</span>
          <input name="email" placeholder={copy.fields.emailPlaceholder} required type="email" />
        </label>

        <label>
          <span>{copy.fields.topic}</span>
          <select defaultValue="allgemein" name="topic">
            {copy.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>{copy.fields.message}</span>
        <textarea
          name="message"
          placeholder={copy.fields.messagePlaceholder}
          required
          rows={7}
        />
      </label>

      <div className="form-actions">
        <button className="button" disabled={status === "sending"} type="submit">
          {status === "sending" ? copy.sending : copy.submit}
        </button>
        <p>{copy.disclaimer}</p>
      </div>

      {status === "sent" ? (
        <p className="form-notice" role="status">
          {copy.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-notice form-notice--error" role="alert">
          {copy.error}
        </p>
      ) : null}
    </form>
  );
}
