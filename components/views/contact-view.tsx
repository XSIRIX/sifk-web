import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-parts";
import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

export function ContactView({ locale }: { locale: Locale }) {
  const { contact, common, places } = getContent(locale);

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
                </p>
              </div>
            </div>
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
