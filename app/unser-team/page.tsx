import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { teamPageContent } from "@/lib/site-content";

export default function TeamPage() {
  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid page-intro-grid-visual">
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
        </Reveal>
      </section>

      <section className="section shell">
        <div className="team-profile-grid">
          {teamPageContent.profiles.map((profile, index) => (
            <Reveal delay={index * 100} key={profile.name}>
              <article className="team-profile-card">
              <div className={`team-profile-portrait team-profile-portrait-${profile.accent}`}>
                <Image
                  alt={profile.imageAlt}
                  className="team-profile-portrait-image"
                  fill
                  sizes="(max-width: 1100px) 100vw, 30vw"
                  src={profile.image}
                />
              </div>
              <div className="team-profile-head">
                <p className="eyebrow">{profile.role}</p>
                <h2>{profile.name}</h2>
              </div>
              <p>{profile.text}</p>
              <ul className="team-profile-list">
                {profile.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="about-band">
          <div>
            <p className="eyebrow">Zusammenarbeit</p>
            <h2>Ein Teammodell mit klarer Führung und sauberer Abstimmung.</h2>
          </div>

          <ul className="detail-list detail-list-spacious">
            {teamPageContent.collaboration.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
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
        </Reveal>
      </section>
    </>
  );
}
