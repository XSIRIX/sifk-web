import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { pillarsEn, servicePageContentEn } from "@/lib/site-content-en";

export default function ServicesPageEn() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{servicePageContentEn.intro.eyebrow}</p>
            <h1>{servicePageContentEn.intro.title}</h1>
          </div>
          <p className="page-intro-text">{servicePageContentEn.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <div className="stack-grid">
          {pillarsEn.map((pillar, index) => (
            <Reveal delay={index * 100} key={pillar.id}>
              <article className="service-block" id={pillar.id}>
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
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Process</p>
          <h2>A clear process instead of disconnected one-off services.</h2>
        </Reveal>

        <div className="process-grid">
          {servicePageContentEn.process.map((step, index) => (
            <Reveal delay={index * 100} key={step.step}>
              <article className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Inquiry</p>
            <h2>{servicePageContentEn.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{servicePageContentEn.cta.text}</p>
            <Link className="button" href={servicePageContentEn.cta.action.href}>
              {servicePageContentEn.cta.action.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
