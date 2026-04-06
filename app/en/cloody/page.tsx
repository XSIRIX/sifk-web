import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { cloodyPageContentEn } from "@/lib/site-content-en";

export default function CloodyPageEn() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{cloodyPageContentEn.intro.eyebrow}</p>
            <h1>{cloodyPageContentEn.intro.title}</h1>
          </div>
          <p className="page-intro-text">{cloodyPageContentEn.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cloody-vision">
          <div>
            <p className="eyebrow">{cloodyPageContentEn.vision.eyebrow}</p>
            <h2>{cloodyPageContentEn.vision.title}</h2>
            <p>{cloodyPageContentEn.vision.text}</p>
          </div>
          <ul className="detail-list">
            {cloodyPageContentEn.vision.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cloody-concept">
          <p className="eyebrow">{cloodyPageContentEn.concept.eyebrow}</p>
          <h2 className="cloody-concept-headline">
            {cloodyPageContentEn.concept.title}
          </h2>
          <p>{cloodyPageContentEn.concept.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">{cloodyPageContentEn.howItWorks.eyebrow}</p>
          <h2>{cloodyPageContentEn.howItWorks.title}</h2>
        </Reveal>

        <div className="process-grid">
          {cloodyPageContentEn.howItWorks.steps.map((step, index) => (
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
          <p className="eyebrow">{cloodyPageContentEn.audience.eyebrow}</p>
          <h2>{cloodyPageContentEn.audience.title}</h2>
        </Reveal>

        <div className="cloody-audience-grid">
          {cloodyPageContentEn.audience.groups.map((group, index) => (
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
            <p className="eyebrow">{cloodyPageContentEn.cta.eyebrow}</p>
            <h2>{cloodyPageContentEn.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{cloodyPageContentEn.cta.text}</p>
            <Link className="button" href={cloodyPageContentEn.cta.action.href}>
              {cloodyPageContentEn.cta.action.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
