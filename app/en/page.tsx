import Link from "next/link";

import { ParallaxHero } from "@/components/parallax-hero";
import { PillarCards } from "@/components/pillar-cards";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { Reveal } from "@/components/reveal";
import { StoryScroll } from "@/components/story-scroll";
import { cloodyBadgeEn, cloodyPromoEn, homeContentEn, pillarsEn } from "@/lib/site-content-en";

export default function HomePageEn() {
  return (
    <>
      <ParallaxHero
        bridgeCopy={{
          kicker: "Germany to Africa",
          text: "We build the bridge from Germany to Africa.",
          from: "Germany",
          to: "Africa",
          canvasAlt: "Frankfurt skyline transitioning toward Cape Town"
        }}
        cloodyBadge={cloodyBadgeEn}
        content={homeContentEn}
      />

      <section className="section shell">
        <Reveal delay={80}>
          <ReferenceMarquee
            ariaLabel="Reference logos"
            eyebrow="References"
            title="Clients and partners who place their trust in our work."
          />
        </Reveal>

        <div className="overview-cards">
          {homeContentEn.overview.map((card, index) => (
            <Reveal delay={index * 80} key={card.title}>
              <Link className={`overview-card overview-card-${card.accent}`} href={card.href}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="overview-stats">
          {homeContentEn.stats.map((stat) => (
            <div className="overview-stat" key={stat.label}>
              <span className="overview-stat-value">{stat.value}</span>
              <span className="overview-stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Two service fields</p>
          <h2>Distinct on their own, clearly connected together.</h2>
        </Reveal>

        <PillarCards linkLabel="Learn more" pillars={pillarsEn} />

        <Reveal className="cloody-promo">
          <div className="cloody-promo-copy">
            <p className="eyebrow">{cloodyPromoEn.eyebrow}</p>
            <h2>{cloodyPromoEn.title}</h2>
            <p className="cloody-promo-text">{cloodyPromoEn.text}</p>
          </div>

          <div className="cloody-promo-aside">
            <p className="cloody-promo-tagline">{cloodyPromoEn.tagline}</p>
            <ul className="cloody-promo-highlights">
              {cloodyPromoEn.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button" href={cloodyPromoEn.action.href}>
              {cloodyPromoEn.action.label}
            </Link>
          </div>

          <div className="cloody-promo-orb" aria-hidden="true" />
        </Reveal>
      </section>

      <StoryScroll
        eyebrow="Differentiation"
        imageAlts={{
          default: "Stylised map of Africa",
          growth: "Growth illustration",
          partnership: "Partnership illustration"
        }}
        points={homeContentEn.story.points}
        quote={homeContentEn.story.quote}
      />

      <section className="section shell">
        <Reveal className="cta-banner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>{homeContentEn.cta.title}</h2>
          </div>

          <div className="cta-copy">
            <p>{homeContentEn.cta.text}</p>
            <Link className="button" href={homeContentEn.cta.action.href}>
              {homeContentEn.cta.action.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
