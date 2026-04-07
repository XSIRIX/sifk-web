import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { teamPageContent } from "@/lib/site-content";
import { buildTeamEmail } from "@/lib/team-email";

export default function TeamPage() {
  const executiveEmail = buildTeamEmail(teamPageContent.executiveLead.name);
  const energyLeadEmail = buildTeamEmail(teamPageContent.practiceLeads[0].name);
  const africaLeadEmail = buildTeamEmail(teamPageContent.practiceLeads[1].name);

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
        <div className="team-spotlight">
          <Reveal>
            <article className="team-profile-card team-profile-card-spotlight">
              <div className="team-profile-media">
                <div
                  className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContent.executiveLead.accent}`}
                >
                  <span className="team-profile-hero-flag">
                    {teamPageContent.executiveLead.flags[0]}
                  </span>
                  <div className="team-profile-emblem team-profile-emblem-compact">
                    <span className="team-profile-country">
                      {teamPageContent.executiveLead.country}
                    </span>
                  </div>
                  {teamPageContent.executiveLead.flags.length > 1 && (
                    <span className="team-profile-flags">
                      {teamPageContent.executiveLead.flags.slice(1).map((flag) => (
                        <span key={flag}>{flag}</span>
                      ))}
                    </span>
                  )}
                </div>
                <p className="team-profile-languages">{teamPageContent.executiveLead.languages}</p>
              </div>
              <div className="team-profile-copy">
                <div className="team-profile-head">
                  <p className="eyebrow">{teamPageContent.executiveLead.role}</p>
                  <h2>{teamPageContent.executiveLead.name}</h2>
                </div>
                <p>{teamPageContent.executiveLead.text}</p>
                <ul className="team-profile-list">
                  {teamPageContent.executiveLead.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                <div className="team-contact">
                  <p className="team-contact-label">E-Mail</p>
                  <a className="button-secondary button-small team-contact-link" href={`mailto:${executiveEmail}`}>
                    {executiveEmail}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <section className="team-connector-band team-connector-band-layer" aria-hidden="true">
            <div className="team-connector-line" />
            <div className="team-connector-node" />
            <p>Leitung Bereich Energie und Afrika</p>
          </section>
        </Reveal>

        <div className="team-lead-stack">
          <Reveal delay={100}>
            <div className="team-energy-section">
              <div className="section-head section-head-compact section-head-left">
                <p className="eyebrow">Bereich Energie</p>
                <h3>Technische Energieberatung mit klarer Verantwortung für Audits, Systeme und wirtschaftlich umsetzbare Maßnahmen.</h3>
              </div>

              <article className="team-profile-card team-profile-card-lead team-profile-card-energy">
                <div className="team-profile-media">
                  <div
                    className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContent.practiceLeads[0].accent}`}
                  >
                    <span className="team-profile-hero-flag">
                      {teamPageContent.practiceLeads[0].flags[0]}
                    </span>
                    <div className="team-profile-emblem team-profile-emblem-compact">
                      <span className="team-profile-country">
                        {teamPageContent.practiceLeads[0].country}
                      </span>
                    </div>
                  </div>
                  <p className="team-profile-languages">
                    {teamPageContent.practiceLeads[0].languages}
                  </p>
                </div>
                <div className="team-profile-copy">
                  <div className="team-profile-head">
                    <p className="eyebrow">{teamPageContent.practiceLeads[0].role}</p>
                    <h2>{teamPageContent.practiceLeads[0].name}</h2>
                  </div>
                  <p>{teamPageContent.practiceLeads[0].text}</p>
                  <ul className="team-profile-list">
                    {teamPageContent.practiceLeads[0].areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  <div className="team-contact">
                    <p className="team-contact-label">E-Mail</p>
                    <a className="button-secondary button-small team-contact-link" href={`mailto:${energyLeadEmail}`}>
                      {energyLeadEmail}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="team-branch">
              <div className="section-head section-head-compact section-head-left">
                <p className="eyebrow">Bereich Afrika</p>
                <h3>Strategische Markterschließung, Partnerschaften und belastbare Umsetzung für afrikanische Geschäftskontexte.</h3>
              </div>

              <article className="team-profile-card team-profile-card-lead team-profile-card-branch-root">
                <div className="team-profile-media">
                  <div
                    className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContent.practiceLeads[1].accent}`}
                  >
                    <span className="team-profile-hero-flag">
                      {teamPageContent.practiceLeads[1].flags[0]}
                    </span>
                    <div className="team-profile-emblem team-profile-emblem-compact">
                      <span className="team-profile-country">
                        {teamPageContent.practiceLeads[1].country}
                      </span>
                    </div>
                    {teamPageContent.practiceLeads[1].flags.length > 1 && (
                      <span className="team-profile-flags">
                        {teamPageContent.practiceLeads[1].flags.slice(1).map((flag) => (
                          <span key={flag}>{flag}</span>
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="team-profile-languages">
                    {teamPageContent.practiceLeads[1].languages}
                  </p>
                </div>
                <div className="team-profile-copy">
                  <div className="team-profile-head">
                    <p className="eyebrow">{teamPageContent.practiceLeads[1].role}</p>
                    <h2>{teamPageContent.practiceLeads[1].name}</h2>
                  </div>
                  <p>{teamPageContent.practiceLeads[1].text}</p>
                  <ul className="team-profile-list">
                    {teamPageContent.practiceLeads[1].areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  <div className="team-contact">
                    <p className="team-contact-label">E-Mail</p>
                    <a className="button-secondary button-small team-contact-link" href={`mailto:${africaLeadEmail}`}>
                      {africaLeadEmail}
                    </a>
                  </div>
                </div>
              </article>

              <div className="team-connector-band team-connector-band-compact">
                <div className="team-connector-line team-connector-line-soft" />
                <div className="team-connector-node team-connector-node-soft" />
              </div>

              <div className="team-branch-team">
                <div className="section-head section-head-compact section-head-branch">
                  <p className="eyebrow">Team unter Rainer Bardtke</p>
                  <h3>{teamPageContent.africaDesk.title}</h3>
                </div>

                <div className="team-africa-grid team-africa-grid-branch">
                  {teamPageContent.africaDesk.members.map((member, index) => {
                    const memberEmail = buildTeamEmail(member.name);

                    return (
                    <Reveal delay={260 + index * 70} key={member.name}>
                      <article className="team-africa-card">
                        {(member.flags?.length || member.country) && (
                          <div className="team-africa-portrait">
                            {member.flags?.length ? (
                              <div className="team-africa-portrait-flags">
                                {member.flags.map((flag) => (
                                  <span className="team-africa-portrait-flag" key={flag}>
                                    {flag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                            {member.country && (
                              <span className="team-africa-portrait-country">{member.country}</span>
                            )}
                          </div>
                        )}
                        <div className="team-africa-head">
                          <div>
                            <p className="eyebrow">{member.role}</p>
                            <h3>{member.name}</h3>
                          </div>
                        </div>
                        {member.text && <p className="team-africa-text">{member.text}</p>}
                        <div className="team-contact">
                          <p className="team-contact-label">E-Mail</p>
                          <a className="button-secondary button-small team-contact-link" href={`mailto:${memberEmail}`}>
                            {memberEmail}
                          </a>
                        </div>
                      </article>
                    </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="shell">
        <section className="team-connector-band">
          <div className="team-connector-line team-connector-line-soft" />
          <div className="team-connector-node team-connector-node-soft" />
          <p>{teamPageContent.sectionInternational.eyebrow}</p>
          <h3 className="team-connector-copy">{teamPageContent.sectionInternational.title}</h3>
        </section>
      </Reveal>

      <section className="section shell" id="internationales-team">
        <div className="team-intl-grid">
          {teamPageContent.intlTeam.map((member, index) => {
            const memberEmail = buildTeamEmail(member.name);

            return (
            <Reveal delay={index * 80} key={member.name}>
              <article className="team-intl-card">
                <div className="team-intl-avatar">
                  <span className="team-intl-flag">{member.flags[0]}</span>
                </div>
                <div className="team-intl-info">
                  <h3>{member.name}</h3>
                  <p className="eyebrow">{member.role}</p>
                  <p className="team-intl-country">{member.country}</p>
                  <p className="team-intl-qual">{member.qualification}</p>
                  {member.org && <p className="team-intl-org">{member.org}</p>}
                  {member.text && <p className="team-intl-text">{member.text}</p>}
                  <div className="team-contact team-contact-compact">
                    <p className="team-contact-label">E-Mail</p>
                    <a className="button-secondary button-small team-contact-link" href={`mailto:${memberEmail}`}>
                      {memberEmail}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
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
