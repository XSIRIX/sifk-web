import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { aboutPageContentEn } from "@/lib/site-content-en";

export default function AboutPageEn() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{aboutPageContentEn.intro.eyebrow}</p>
            <h1>{aboutPageContentEn.intro.title}</h1>
          </div>
          <p className="page-intro-text">{aboutPageContentEn.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <div className="principles-grid">
          {aboutPageContentEn.principles.map((principle, index) => (
            <Reveal delay={index * 100} key={principle.title}>
              <article className="principle-card">
                <h2>{principle.title}</h2>
                <p>{principle.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="about-band">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>Consulting with precise direction instead of diffuse complexity.</h2>
          </div>

          <ul className="detail-list detail-list-spacious">
            {aboutPageContentEn.workingStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Conversation</p>
            <h2>If this bridging role fits your project, we should talk.</h2>
          </div>

          <div className="cta-copy">
            <p>
              SIFK works where orientation, structure, and durable relationships are decisive.
            </p>
            <Link className="button" href={aboutPageContentEn.cta.href}>
              {aboutPageContentEn.cta.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
