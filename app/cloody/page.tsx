import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { cloodyPageContent } from "@/lib/site-content";

export default function CloodyPage() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{cloodyPageContent.intro.eyebrow}</p>
            <h1>{cloodyPageContent.intro.title}</h1>
          </div>
          <p className="page-intro-text">{cloodyPageContent.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cloody-vision">
          <div>
            <p className="eyebrow">{cloodyPageContent.vision.eyebrow}</p>
            <h2>{cloodyPageContent.vision.title}</h2>
            <p>{cloodyPageContent.vision.text}</p>
          </div>
          <ul className="detail-list">
            {cloodyPageContent.vision.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cloody-concept">
          <p className="eyebrow">{cloodyPageContent.concept.eyebrow}</p>
          <h2 className="cloody-concept-headline">
            {cloodyPageContent.concept.title}
          </h2>
          <p>{cloodyPageContent.concept.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">{cloodyPageContent.howItWorks.eyebrow}</p>
          <h2>{cloodyPageContent.howItWorks.title}</h2>
        </Reveal>

        <div className="process-grid">
          {cloodyPageContent.howItWorks.steps.map((step, index) => (
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
        <Reveal className="section-head">
          <p className="eyebrow">{cloodyPageContent.audience.eyebrow}</p>
          <h2>{cloodyPageContent.audience.title}</h2>
        </Reveal>

        <div className="cloody-audience-grid">
          {cloodyPageContent.audience.groups.map((group, index) => (
            <Reveal delay={index * 100} key={group.title}>
              <article className="cloody-audience-card">
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">{cloodyPageContent.cta.eyebrow}</p>
            <h2>{cloodyPageContent.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{cloodyPageContent.cta.text}</p>
            <Link className="button" href={cloodyPageContent.cta.action.href}>
              {cloodyPageContent.cta.action.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
