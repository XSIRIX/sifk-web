"use client";

import { FormEvent, useState } from "react";

import type { Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

type ContactFormProps = {
  locale?: Locale;
};

export function ContactForm({ locale = "de" }: ContactFormProps) {
  const copy = sharedCopy[locale].contactForm;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
        <button className="button" type="submit">
          {copy.submit}
        </button>
        <p>{copy.disclaimer}</p>
      </div>

      {submitted ? (
        <p className="form-notice" role="status">
          {copy.success}
        </p>
      ) : null}
    </form>
  );
}
