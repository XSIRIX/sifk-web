import Link from "next/link";

import { ParallaxHero } from "@/components/parallax-hero";
import { PillarCards } from "@/components/pillar-cards";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { Reveal } from "@/components/reveal";
import { StoryScroll } from "@/components/story-scroll";
import { cloodyBadgeEn, homeContentEn, pillarsEn } from "@/lib/site-content-en";

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

      <section className="section shell routing-cluster">
        <Reveal delay={80}>
          <ReferenceMarquee
            ariaLabel="Reference logos"
            eyebrow="References"
            title="Clients and partners who place their trust in our work."
          />
        </Reveal>

        <div className="routing-grid">
          {homeContentEn.routing.map((item, index) => (
            <Reveal delay={index === 0 ? 0 : 120} key={item.title}>
              <Link className={`routing-panel routing-panel-${item.accent}`} href={item.href}>
                <span className="routing-badge">{item.badge}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="routing-link">Go to section</span>
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
          <p className="positioning-kicker">Shared platform</p>
          <p>{homeContentEn.positioning}</p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">Two service fields</p>
          <h2>Distinct on their own, clearly connected together.</h2>
        </Reveal>

        <PillarCards linkLabel="Learn more" pillars={pillarsEn} />
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
