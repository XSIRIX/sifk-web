"use client";

import Link from "next/link";
import { type SubmitEvent, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

type FormStatus = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ locale = "de" }: { locale?: Locale }) {
  const copy = sharedCopy[locale].contactForm;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const successRef = useRef<HTMLDivElement | null>(null);

  const validate = (data: Record<string, FormDataEntryValue>) => {
    const next: FieldErrors = {};
    if (!String(data.name ?? "").trim()) next.name = copy.required;
    if (!EMAIL_PATTERN.test(String(data.email ?? "").trim())) next.email = copy.invalidEmail;
    if (!String(data.message ?? "").trim()) next.message = copy.required;
    return next;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = (["name", "email", "message"] as const).find((key) => nextErrors[key]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-success" ref={successRef} role="status" tabIndex={-1}>
        <p className="form-success-title">{copy.successTitle}</p>
        <p>{copy.successText}</p>
        <button className="link" onClick={() => setStatus("idle")} type="button">
          {copy.successAgain}
        </button>
      </div>
    );
  }

  const fieldError = (key: keyof FieldErrors) =>
    errors[key] ? (
      <span className="field-error" id={`${key}-error`}>
        {errors[key]}
      </span>
    ) : null;

  return (
    <form className="contact-form" data-rv="kids" noValidate onSubmit={handleSubmit}>
      <fieldset className="topic-field">
        <legend className="field-label">{copy.fields.topic}</legend>
        <div className="topic-options">
          {copy.options.map((option, index) => (
            <label className="topic-option" key={option.value}>
              <input defaultChecked={index === 0} name="topic" type="radio" value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field-row">
        <label className="field-box">
          <span className="field-label">{copy.fields.name}</span>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            placeholder={copy.fields.namePlaceholder}
            required
            type="text"
          />
          {fieldError("name")}
        </label>

        <label className="field-box">
          <span className="field-label">
            {copy.fields.company} <span className="field-optional">({copy.fields.optional})</span>
          </span>
          <input autoComplete="organization" name="company" placeholder={copy.fields.companyPlaceholder} type="text" />
        </label>
      </div>

      <label className="field-box">
        <span className="field-label">{copy.fields.email}</span>
        <input
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          inputMode="email"
          name="email"
          placeholder={copy.fields.emailPlaceholder}
          required
          type="email"
        />
        {fieldError("email")}
      </label>

      <label className="field-box">
        <span className="field-label">{copy.fields.message}</span>
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          name="message"
          placeholder={copy.fields.messagePlaceholder}
          required
          rows={6}
        />
        {fieldError("message")}
      </label>

      <label aria-hidden="true" className="field-trap">
        Website
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>

      {status === "error" ? (
        <p className="form-error" role="alert">
          {copy.error}
        </p>
      ) : null}

      <div className="form-actions">
        <button className="btn" disabled={status === "sending"} type="submit">
          {status === "sending" ? copy.sending : copy.submit}
          <ArrowIcon />
        </button>
        <p className="form-note">
          {copy.disclaimer}{" "}
          <Link className="inline-link" href={localizePath("/datenschutz", locale)}>
            {copy.privacyLink}
          </Link>
        </p>
      </div>
    </form>
  );
}
