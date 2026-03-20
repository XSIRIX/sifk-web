"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input name="name" placeholder="Ihr Name" required type="text" />
        </label>

        <label>
          <span>Unternehmen</span>
          <input name="company" placeholder="Organisation oder Firma" type="text" />
        </label>
      </div>

      <div className="field-grid">
        <label>
          <span>E-Mail</span>
          <input name="email" placeholder="name@unternehmen.de" required type="email" />
        </label>

        <label>
          <span>Anliegen</span>
          <select defaultValue="allgemein" name="topic">
            <option value="international">Internationale Geschäftsentwicklung</option>
            <option value="energie">Energieberatung Deutschland</option>
            <option value="allgemein">Allgemeine Anfrage</option>
          </select>
        </label>
      </div>

      <label>
        <span>Projekt oder Fragestellung</span>
        <textarea
          name="message"
          placeholder="Beschreiben Sie kurz Ihr Vorhaben, den Kontext und den gewünschten nächsten Schritt."
          required
          rows={7}
        />
      </label>

      <div className="form-actions">
        <button className="button" type="submit">
          Anfrage vorbereiten
        </button>
        <p>
          Formularversand ist im Boilerplate bewusst noch nicht an eine Inbox angebunden.
        </p>
      </div>

      {submitted ? (
        <p className="form-notice" role="status">
          Danke. Die Struktur steht; als Nächstes kann das Formular an die gewünschte
          E-Mail oder ein CRM angebunden werden.
        </p>
      ) : null}
    </form>
  );
}
