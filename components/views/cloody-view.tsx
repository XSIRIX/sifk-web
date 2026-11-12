import Image from "next/image";

import { CloseBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { WovenImage } from "@/components/woven-image";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

export function CloodyView({ locale }: { locale: Locale }) {
  const { cloody, common, places } = getContent(locale);

  return (
    <>
      <section className="cloody-hero" data-tone="dark">
        <div className="cloody-hero-media">
          <Image alt={cloody.imageAlt} fill priority sizes="100vw" src="/brand/cloody-port.webp" />
        </div>
        <div className="shell cloody-hero-inner">
          <h1 className="display-1">{cloody.intro.title}</h1>
          <p className="status-pill status-pill-dark">
            <span aria-hidden="true" />
            {common.inDevelopment}
          </p>
          <p className="lead">{cloody.intro.text}</p>
          <dl className="fact-row">
            {cloody.intro.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell vision-grid">
          <div>
            <h2 className="display-2">{cloody.vision.title}</h2>
            <p className="lead">{cloody.vision.text}</p>
            <WovenImage
              alt={places.alt.gh}
              className="vision-photo"
              sizes="(max-width: 960px) 100vw, 45vw"
              src="/brand/places/gh.webp"
            />
          </div>
          <dl className="vision-points">
            {cloody.vision.points.map((point, index) => (
              <Reveal index={index} key={point.title}>
                <dt>{point.title}</dt>
                <dd>{point.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="concept-band" data-tone="dark">
        <div className="shell">
          <h2 className="concept-title">{cloody.concept.title}</h2>
          <p className="lead">{cloody.concept.text}</p>
          <ul className="concept-pillars">
            {cloody.concept.pillars.map((pillar, index) => (
              <Reveal as="li" index={index} key={pillar.title}>
                <span aria-hidden="true" className="thread" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="display-2 section-title">{cloody.how.title}</h2>
          <ol className="process process-three">
            {cloody.how.steps.map((step, index) => (
              <Reveal as="li" className="process-step" index={index} key={step.title}>
                <span aria-hidden="true" className="process-index">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell">
          <h2 className="display-2 section-title">{cloody.audience.title}</h2>
          <ul className="audience">
            {cloody.audience.groups.map((group, index) => (
              <Reveal as="li" index={index} key={group.title}>
                <h3 className="display-4">{group.title}</h3>
                <p>{group.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CloseBand locale={locale} text={cloody.close.text} title={cloody.close.title} />
    </>
  );
}
