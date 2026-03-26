import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { contactPageContent } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{contactPageContent.intro.eyebrow}</p>
            <h1>{contactPageContent.intro.title}</h1>
          </div>
          <p className="page-intro-text">{contactPageContent.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell contact-layout">
        <div className="contact-options">
          {contactPageContent.options.map((option, index) => (
            <Reveal delay={index * 100} key={option.title}>
              <article className="contact-option">
              <h2>{option.title}</h2>
              <p>{option.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
