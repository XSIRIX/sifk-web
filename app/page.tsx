import Image from "next/image";
import Link from "next/link";

import { ParallaxHero } from "@/components/parallax-hero";
import { Reveal } from "@/components/reveal";
import { homeContent, pillars, serviceOverview } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      <section className="section shell routing-cluster">
        <div className="routing-grid">
          {homeContent.routing.map((item) => (
            <Reveal delay={item.title.includes("Internationale") ? 0 : 120} key={item.title}>
              <Link className={`routing-panel routing-panel-${item.accent}`} href={item.href}>
                <span className="routing-badge">{item.badge}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="routing-link">Zum Bereich</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="positioning-block positioning-bridge">
          <div className="positioning-connector" aria-hidden="true">
            <span className="connector-arm connector-arm-atlas" />
            <span className="connector-node">
              <span />
            </span>
            <span className="connector-arm connector-arm-signal" />
          </div>
          <p className="positioning-kicker">Gemeinsame Plattform</p>
          <p>{homeContent.positioning}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Zwei Geschäftsfelder</p>
          <h2>Eigenständig lesbar, sichtbar zusammengehörig.</h2>
        </Reveal>

        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal delay={index * 120} key={pillar.id}>
              <article className={`pillar-card pillar-${pillar.accent}`} id={pillar.id}>
                <div className="pillar-visual" aria-hidden="true">
                  {pillar.id === "internationale-geschaeftsentwicklung" ? (
                    <Image
                      alt=""
                      className="pillar-visual-image"
                      fill
                      sizes="(max-width: 980px) 100vw, 40vw"
                      src="/homepage/home-pillar-international.png"
                    />
                  ) : pillar.id === "energieberatung-deutschland" ? (
                    <Image
                      alt=""
                      className="pillar-visual-image"
                      fill
                      sizes="(max-width: 980px) 100vw, 40vw"
                      src="/homepage/home-pillar-energy.png"
                    />
                  ) : null}
                  <span>{pillar.shortTitle}</span>
                </div>

                <div className="pillar-content">
                  <h3>{pillar.title}</h3>
                  <p className="pillar-lead">{pillar.lead}</p>
                  <p>{pillar.description}</p>

                  <ul className="detail-list">
                    {pillar.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>

                  <Link className="text-link" href={pillar.href}>
                    Mehr erfahren
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="shell story-grid">
          <Reveal>
            <p className="eyebrow">Differenzierung</p>
            <h2>{homeContent.story.quote}</h2>
          </Reveal>

          <Reveal className="story-points" delay={120}>
            {homeContent.story.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Leistungsüberblick</p>
          <h2>Scanbar aufgebaut, ohne generische Feature-Kacheln.</h2>
        </Reveal>

        <div className="service-overview-grid">
          {serviceOverview.map((group, index) => (
            <Reveal delay={index * 120} key={group.title}>
              <article className="service-overview-card">
                <h3>{group.title}</h3>
                <ul className="service-lines">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="trust-grid">
          {homeContent.trust.map((item, index) => (
            <Reveal delay={index * 80} key={item}>
              <article className="trust-card">
                <p>{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Nächster Schritt</p>
            <h2>{homeContent.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{homeContent.cta.text}</p>
            <Link className="button" href={homeContent.cta.action.href}>
              {homeContent.cta.action.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
