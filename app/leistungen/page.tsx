import Link from "next/link";

import { pillars, servicePageContent } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{servicePageContent.intro.eyebrow}</p>
            <h1>{servicePageContent.intro.title}</h1>
          </div>
          <p className="page-intro-text">{servicePageContent.intro.text}</p>
        </div>
      </section>

      <section className="section shell">
        <div className="stack-grid">
          {pillars.map((pillar) => (
            <article className="service-block" id={pillar.id} key={pillar.id}>
              <div className={`service-accent service-accent-${pillar.accent}`} aria-hidden="true" />
              <div className="service-block-copy">
                <p className="eyebrow">{pillar.shortTitle}</p>
                <h2>{pillar.title}</h2>
                <p className="pillar-lead">{pillar.lead}</p>
                <p>{pillar.description}</p>
              </div>

              <ul className="detail-list">
                {pillar.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <p className="eyebrow">Prozess</p>
          <h2>Ein klarer Ablauf statt unverbundener Einzelleistungen.</h2>
        </div>

        <div className="process-grid">
          {servicePageContent.process.map((step) => (
            <article className="process-card" key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">Anfrage</p>
            <h2>{servicePageContent.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{servicePageContent.cta.text}</p>
            <Link className="button" href={servicePageContent.cta.action.href}>
              {servicePageContent.cta.action.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
