import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { teamPageContentEn } from "@/lib/site-content-en";

export default function TeamPageEn() {
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
        <div className="team-profile-grid team-profile-grid-2">
          {teamPageContentEn.coreTeam.map((member, index) => (
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
            <p className="eyebrow">{teamPageContentEn.sectionInternational.eyebrow}</p>
            <h2>{teamPageContentEn.sectionInternational.title}</h2>
          </div>
        </Reveal>
        <div className="team-intl-grid">
          {teamPageContentEn.intlTeam.map((member, index) => (
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
