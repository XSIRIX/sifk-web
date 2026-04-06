import Link from "next/link";

import { ParallaxHero } from "@/components/parallax-hero";
import { PillarCards } from "@/components/pillar-cards";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { Reveal } from "@/components/reveal";
import { StoryScroll } from "@/components/story-scroll";
import { cloodyPromo, homeContent, pillars } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      <section className="section shell">
        <Reveal delay={80}>
          <ReferenceMarquee />
        </Reveal>

        <div className="overview-cards">
          {homeContent.overview.map((card, index) => (
            <Reveal delay={index * 80} key={card.title}>
              <Link className={`overview-card overview-card-${card.accent}`} href={card.href}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="overview-stats">
          {homeContent.stats.map((stat) => (
            <div className="overview-stat" key={stat.label}>
              <span className="overview-stat-value">{stat.value}</span>
              <span className="overview-stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Zwei Geschäftsfelder</p>
          <h2>Eigenständig lesbar, sichtbar zusammengehörig.</h2>
        </Reveal>

        <PillarCards pillars={pillars} />

        <Reveal className="cloody-promo">
          <div className="cloody-promo-copy">
            <p className="eyebrow">{cloodyPromo.eyebrow}</p>
            <h2>{cloodyPromo.title}</h2>
            <p className="cloody-promo-text">{cloodyPromo.text}</p>
          </div>

          <div className="cloody-promo-aside">
            <p className="cloody-promo-tagline">{cloodyPromo.tagline}</p>
            <ul className="cloody-promo-highlights">
              {cloodyPromo.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button" href={cloodyPromo.action.href}>
              {cloodyPromo.action.label}
            </Link>
          </div>

          <div className="cloody-promo-orb" aria-hidden="true" />
        </Reveal>
      </section>

      <StoryScroll
        eyebrow="Differenzierung"
        points={homeContent.story.points}
        quote={homeContent.story.quote}
      />

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
