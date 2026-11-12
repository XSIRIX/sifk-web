import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { WovenImage } from "@/components/woven-image";
import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

export function ContactView({ locale }: { locale: Locale }) {
  const { contact, common, places } = getContent(locale);

  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <h1 className="display-1 intro-title">{contact.intro.title}</h1>
          <p className="lead">{contact.intro.text}</p>

          <div className="contact-direct">
            <h2 className="display-4">{contact.direct}</h2>
            <a className="contact-line" href={company.phoneHref}>
              <PhoneIcon />
              <span>
                <span className="contact-line-label">{common.phone}</span>
                {company.phoneDisplay}
              </span>
            </a>
            <a className="contact-line" href={`mailto:${company.email}`}>
              <MailIcon />
              <span>
                <span className="contact-line-label">{common.email}</span>
                {company.email}
              </span>
            </a>
            <p className="contact-line">
              <PinIcon />
              <span>
                <span className="contact-line-label">{common.address}</span>
                {company.name}, {company.street}, {company.postalCode} {company.city}
              </span>
            </p>
          </div>

          <WovenImage
            alt={places.alt.de}
            className="contact-photo"
            position="70% 30%"
            sizes="(max-width: 960px) 100vw, 40vw"
            src="/brand/places/de.webp"
          />
        </div>

        <div className="contact-panel">
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
