import { ContactForm } from "@/components/contact-form";
import { contactPageContent } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{contactPageContent.intro.eyebrow}</p>
            <h1>{contactPageContent.intro.title}</h1>
          </div>
          <p className="page-intro-text">{contactPageContent.intro.text}</p>
        </div>
      </section>

      <section className="section shell contact-layout">
        <div className="contact-options">
          {contactPageContent.options.map((option) => (
            <article className="contact-option" key={option.title}>
              <h2>{option.title}</h2>
              <p>{option.text}</p>
            </article>
          ))}
        </div>

        <ContactForm />
      </section>
    </>
  );
}
