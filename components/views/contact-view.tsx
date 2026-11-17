import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-parts";
import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

const HOURS: Record<Locale, { title: string; days: Record<string, string> }> = {
  de: {
    title: "Öffnungszeiten",
    days: { Monday: "Mo", Tuesday: "Di", Wednesday: "Mi", Thursday: "Do", Friday: "Fr", Saturday: "Sa", Sunday: "So" }
  },
  en: {
    title: "Opening hours",
    days: { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" }
  }
};

export function ContactView({ locale }: { locale: Locale }) {
  const hours = HOURS[locale];
  const { contact, common, places } = getContent(locale);
  const formCopy = sharedCopy[locale].contactForm;

  return (
    <>
      <PageHero
        field="f-gold"
        side={
          <aside className="contact-side">
            <h2 className="title contact-side-title">{contact.direct}</h2>
            <div className="contact-tiles" data-rv="kids">
              <div className="tile f-ink">
                <h3 className="small">
                  <strong>{common.phone}</strong>
                </h3>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </div>
              <div className="tile f-glut">
                <h3 className="small">
                  <strong>{common.email}</strong>
                </h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="tile f-lime">
                <h3 className="small">
                  <strong>{common.address}</strong>
                </h3>
                <p>
                  {company.street}
                  <br />
                  {company.postalCode} {company.city}
                  <br />
                  {/* Small, under the address: the tile keeps its two columns. */}
                  <a href={company.mapUrl}>
                    <span className="small">{contact.mapLabel}</span>
                  </a>
                </p>
              </div>
            </div>
            <p className="copy">{contact.area}</p>
            {/* Only once the owner gives the hours (lib/company.ts). */}
            {company.openingHours ? (
              <p className="copy">
                <strong>{hours.title}</strong>
                {company.openingHours.map((slot) => (
                  <span key={slot.days.join()} style={{ display: "block" }}>
                    {slot.days.map((day) => hours.days[day] ?? day).join(", ")}: {slot.opens}–{slot.closes}
                  </span>
                ))}
              </p>
            ) : null}
          </aside>
        }
        text={contact.intro.text}
        title={contact.intro.title}
      />

      <section aria-labelledby="contact-form-title" className="contact sheet field f-plaster">
        <div className="shell grid contact-in">
          <h2 className="sr-only" id="contact-form-title">
            {contact.formTitle}
          </h2>
          {/* Shown only after a form post without JavaScript, through the address fragment. */}
          <div className="form-success" id="gesendet" role="status" tabIndex={-1}>
            <p className="form-success-title">{formCopy.successTitle}</p>
            <p>{formCopy.successText}</p>
          </div>
          <p className="form-error" id="fehler" role="alert" tabIndex={-1}>
            {formCopy.error}
          </p>
          <ContactForm locale={locale} />

          <figure className="contact-place">
            <img
              alt={places.alt.de}
              data-parallax="4"
              decoding="async"
              height={900}
              loading="lazy"
              src="/world/de.webp"
              width={900}
            />
            <figcaption>{places.hq}</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
