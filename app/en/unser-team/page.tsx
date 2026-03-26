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
        <div className="team-profile-grid">
          {teamPageContentEn.profiles.map((profile, index) => (
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
