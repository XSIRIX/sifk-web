import Image from "next/image";
import Link from "next/link";

import { teamPageContent } from "@/lib/site-content";

export default function TeamPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell page-intro-grid page-intro-grid-visual">
          <div className="page-intro-copy">
            <div>
              <p className="eyebrow">{teamPageContent.intro.eyebrow}</p>
              <h1>{teamPageContent.intro.title}</h1>
            </div>
            <p className="page-intro-text">{teamPageContent.intro.text}</p>
          </div>

          <div className="hero-stage team-stage">
            <Image
              alt="Teamorientierte Zusammenarbeit bei SIFK"
              className="hero-stage-image"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 42vw"
              src="/homepage/team.jpg"
            />

            <div className="hero-stage-panel hero-stage-tag">Unser Team</div>

            <div className="hero-stage-panel hero-stage-note">
              <strong>Arbeitsweise</strong>
              <p>Strategische Klarheit, belastbare Beziehungen und saubere Umsetzung.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="principles-grid">
          {teamPageContent.focus.map((item) => (
            <article className="principle-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="about-band">
          <div>
            <p className="eyebrow">Zusammenarbeit</p>
            <h2>Ein Teammodell mit klarer Führung und sauberer Abstimmung.</h2>
          </div>

          <ul className="detail-list detail-list-spacious">
            {teamPageContent.collaboration.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section shell">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">Nächster Schritt</p>
            <h2>Wenn Sie das Team hinter SIFK kennenlernen möchten, sprechen wir weiter.</h2>
          </div>

          <div className="cta-copy">
            <p>
              Im Gespräch klären wir, welche Ansprechpartner und welches Leistungsfeld
              zu Ihrem Vorhaben passen.
            </p>
            <Link className="button" href={teamPageContent.cta.href}>
              {teamPageContent.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
