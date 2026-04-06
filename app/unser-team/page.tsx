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
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">{teamPageContent.sectionLeadership.eyebrow}</p>
            <h2>{teamPageContent.sectionLeadership.title}</h2>
          </div>
        </Reveal>
        <div className="team-profile-grid team-profile-grid-2">
          {teamPageContent.coreTeam.map((member, index) => (
            <Reveal delay={index * 100} key={member.name}>
              <article className="team-profile-card">
                <div className={`team-profile-portrait team-profile-portrait-${member.accent}`}>
                  <span className="team-profile-initials">{member.initials}</span>
                  <span className="team-profile-flags">
                    {member.flags.map((flag) => (
                      <span key={flag}>{flag}</span>
                    ))}
                  </span>
                </div>
                <div className="team-profile-head">
                  <p className="eyebrow">{member.role}</p>
                  <h2>{member.name}</h2>
                </div>
                <p className="team-profile-languages">{member.languages}</p>
                <p>{member.text}</p>
                <ul className="team-profile-list">
                  {member.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">{teamPageContent.sectionInternational.eyebrow}</p>
            <h2>{teamPageContent.sectionInternational.title}</h2>
          </div>
        </Reveal>
        <div className="team-intl-grid">
          {teamPageContent.intlTeam.map((member, index) => (
            <Reveal delay={index * 80} key={member.name}>
              <article className="team-intl-card">
                <div className="team-intl-avatar">
                  <span className="team-intl-initials">{member.initials}</span>
                  <span className="team-intl-flag">{member.flags[0]}</span>
                </div>
                <div className="team-intl-info">
                  <h3>{member.name}</h3>
                  <p className="eyebrow">{member.role}</p>
                  <p className="team-intl-qual">{member.qualification}</p>
                  {member.org && <p className="team-intl-org">{member.org}</p>}
                  {member.text && <p className="team-intl-text">{member.text}</p>}
                </div>
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
