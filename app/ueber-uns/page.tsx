import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { aboutPageContent } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid">
          <div>
            <p className="eyebrow">{aboutPageContent.intro.eyebrow}</p>
            <h1>{aboutPageContent.intro.title}</h1>
          </div>
          <p className="page-intro-text">{aboutPageContent.intro.text}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <div className="principles-grid">
          {aboutPageContent.principles.map((principle, index) => (
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
            <p className="eyebrow">Arbeitsweise</p>
            <h2>Beratung mit präziser Führung statt diffuser Komplexität.</h2>
          </div>

          <ul className="detail-list detail-list-spacious">
            {aboutPageContent.workingStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Gespräch</p>
            <h2>Wenn die Brückenrolle zu Ihrem Vorhaben passt, sprechen wir weiter.</h2>
          </div>

          <div className="cta-copy">
            <p>
              SIFK arbeitet dort, wo Orientierung, Struktur und belastbare Beziehungen
              entscheidend sind.
            </p>
            <Link className="button" href={aboutPageContent.cta.href}>
              {aboutPageContent.cta.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
