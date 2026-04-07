import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { teamPageContentEn } from "@/lib/site-content-en";
import { buildTeamEmail } from "@/lib/team-email";

export default function TeamPageEn() {
  const executiveEmail = buildTeamEmail(teamPageContentEn.executiveLead.name);
  const energyLeadEmail = buildTeamEmail(teamPageContentEn.practiceLeads[0].name);
  const africaLeadEmail = buildTeamEmail(teamPageContentEn.practiceLeads[1].name);

  return (
    <>
      <section className="page-intro">
        <Reveal className="shell page-intro-grid page-intro-grid-visual">
          <div className="page-intro-copy">
            <div>
              <p className="eyebrow">{teamPageContentEn.intro.eyebrow}</p>
              <h1>{teamPageContentEn.intro.title}</h1>
            </div>
            <p className="page-intro-text">{teamPageContentEn.intro.text}</p>
          </div>

          <div className="hero-stage team-stage">
            <Image
              alt="Team-oriented collaboration at SIFK"
              className="hero-stage-image"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 42vw"
              src="/homepage/team.jpg"
            />

            <div className="hero-stage-panel hero-stage-tag">Our Team</div>

            <div className="hero-stage-panel hero-stage-note">
              <strong>Working style</strong>
              <p>Strategic clarity, durable relationships, and disciplined execution.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">{teamPageContentEn.sectionLeadership.eyebrow}</p>
            <h2>{teamPageContentEn.sectionLeadership.title}</h2>
          </div>
        </Reveal>
        <div className="team-spotlight">
          <Reveal>
            <article className="team-profile-card team-profile-card-spotlight">
              <div className="team-profile-media">
                <div
                  className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContentEn.executiveLead.accent}`}
                >
                  <span className="team-profile-hero-flag">
                    {teamPageContentEn.executiveLead.flags[0]}
                  </span>
                  <div className="team-profile-emblem team-profile-emblem-compact">
                    <span className="team-profile-country">
                      {teamPageContentEn.executiveLead.country}
                    </span>
                  </div>
                  {teamPageContentEn.executiveLead.flags.length > 1 && (
                    <span className="team-profile-flags">
                      {teamPageContentEn.executiveLead.flags.slice(1).map((flag) => (
                        <span key={flag}>{flag}</span>
                      ))}
                    </span>
                  )}
                </div>
                <p className="team-profile-languages">{teamPageContentEn.executiveLead.languages}</p>
              </div>
              <div className="team-profile-copy">
                <div className="team-profile-head">
                  <p className="eyebrow">{teamPageContentEn.executiveLead.role}</p>
                  <h2>{teamPageContentEn.executiveLead.name}</h2>
                </div>
                <p>{teamPageContentEn.executiveLead.text}</p>
                <ul className="team-profile-list">
                  {teamPageContentEn.executiveLead.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                <div className="team-contact">
                  <p className="team-contact-label">Email</p>
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
            <p>Energy Lead</p>
          </section>
        </Reveal>

        <div className="team-lead-stack">
          <Reveal delay={100}>
            <div className="team-energy-section">
              <div className="section-head section-head-compact section-head-left">
                <p className="eyebrow">Energy Practice</p>
                <h3>Technical energy advisory with clear ownership for audits, systems, and economically practical measures.</h3>
              </div>

              <article className="team-profile-card team-profile-card-lead team-profile-card-energy">
                <div className="team-profile-media">
                  <div
                    className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContentEn.practiceLeads[0].accent}`}
                  >
                    <span className="team-profile-hero-flag">
                      {teamPageContentEn.practiceLeads[0].flags[0]}
                    </span>
                    <div className="team-profile-emblem team-profile-emblem-compact">
                      <span className="team-profile-country">
                        {teamPageContentEn.practiceLeads[0].country}
                      </span>
                    </div>
                  </div>
                  <p className="team-profile-languages">
                    {teamPageContentEn.practiceLeads[0].languages}
                  </p>
                </div>
                <div className="team-profile-copy">
                  <div className="team-profile-head">
                    <p className="eyebrow">{teamPageContentEn.practiceLeads[0].role}</p>
                    <h2>{teamPageContentEn.practiceLeads[0].name}</h2>
                  </div>
                  <p>{teamPageContentEn.practiceLeads[0].text}</p>
                  <ul className="team-profile-list">
                    {teamPageContentEn.practiceLeads[0].areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  <div className="team-contact">
                    <p className="team-contact-label">Email</p>
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
                <p className="eyebrow">Africa Practice</p>
                <h3>Strategic market development, partnerships, and reliable execution for African business contexts.</h3>
              </div>

              <article className="team-profile-card team-profile-card-lead team-profile-card-branch-root">
                <div className="team-profile-media">
                  <div
                    className={`team-profile-portrait team-profile-portrait-lead team-profile-portrait-centered team-profile-portrait-${teamPageContentEn.practiceLeads[1].accent}`}
                  >
                    <span className="team-profile-hero-flag">
                      {teamPageContentEn.practiceLeads[1].flags[0]}
                    </span>
                    <div className="team-profile-emblem team-profile-emblem-compact">
                      <span className="team-profile-country">
                        {teamPageContentEn.practiceLeads[1].country}
                      </span>
                    </div>
                    {teamPageContentEn.practiceLeads[1].flags.length > 1 && (
                      <span className="team-profile-flags">
                        {teamPageContentEn.practiceLeads[1].flags.slice(1).map((flag) => (
                          <span key={flag}>{flag}</span>
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="team-profile-languages">
                    {teamPageContentEn.practiceLeads[1].languages}
                  </p>
                </div>
                <div className="team-profile-copy">
                  <div className="team-profile-head">
                    <p className="eyebrow">{teamPageContentEn.practiceLeads[1].role}</p>
                    <h2>{teamPageContentEn.practiceLeads[1].name}</h2>
                  </div>
                  <p>{teamPageContentEn.practiceLeads[1].text}</p>
                  <ul className="team-profile-list">
                    {teamPageContentEn.practiceLeads[1].areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  <div className="team-contact">
                    <p className="team-contact-label">Email</p>
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
                  <p className="eyebrow">Team Under Rainer Bardtke</p>
                  <h3>{teamPageContentEn.africaDesk.title}</h3>
                </div>

                <div className="team-africa-grid team-africa-grid-branch">
                  {teamPageContentEn.africaDesk.members.map((member, index) => {
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
                          <p className="team-contact-label">Email</p>
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
          <p>{teamPageContentEn.sectionInternational.eyebrow}</p>
          <h3 className="team-connector-copy">{teamPageContentEn.sectionInternational.title}</h3>
        </section>
      </Reveal>

      <section className="section shell" id="internationales-team">
        <div className="team-intl-grid">
          {teamPageContentEn.intlTeam.map((member, index) => {
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
                    <p className="team-contact-label">Email</p>
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
            <p className="eyebrow">Collaboration</p>
            <h2>A team model with clear leadership and disciplined alignment.</h2>
          </div>

          <ul className="detail-list detail-list-spacious">
            {teamPageContentEn.collaboration.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>If you want to get to know the team behind SIFK, let’s continue the conversation.</h2>
          </div>

          <div className="cta-copy">
            <p>
              In conversation, we clarify which contacts and which service field best fit your
              project.
            </p>
            <Link className="button" href={teamPageContentEn.cta.href}>
              {teamPageContentEn.cta.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
