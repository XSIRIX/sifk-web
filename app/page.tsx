import Link from "next/link";

import { ParallaxHero } from "@/components/parallax-hero";
import { PillarCards } from "@/components/pillar-cards";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { Reveal } from "@/components/reveal";
import { StoryScroll } from "@/components/story-scroll";
import { homeContent, pillars } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      <section className="section shell routing-cluster">
        <Reveal delay={80}>
          <ReferenceMarquee />
        </Reveal>

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

        <PillarCards pillars={pillars} />
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
