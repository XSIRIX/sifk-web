import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { CloseBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

export function AboutView({ locale }: { locale: Locale }) {
  const { about, places } = getContent(locale);

  return (
    <>
      <PageHero
        image={{ src: "/brand/places/de.webp", alt: places.alt.de, position: "60% 40%" }}
        text={about.intro.text}
        title={about.intro.title}
      />

      <section className="section mark-story" data-tone="dark">
        <div className="shell mark-story-grid">
          <div className="sculpture">
            <Image
              alt={about.mark.imageAlt}
              height={2048}
              sizes="(max-width: 960px) 80vw, 40vw"
              src="/brand/woven-africa.webp"
              width={2048}
            />
          </div>
          <div>
            <h2 className="display-2">{about.mark.title}</h2>
            <p className="lead">{about.mark.text}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ul className="principles">
            {about.principles.map((principle, index) => (
              <Reveal as="li" className="principle" index={index} key={principle.title}>
                <span aria-hidden="true" className="thread" />
                <h2 className="display-4">{principle.title}</h2>
                <p>{principle.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell about-split">
          <div>
            <h2 className="display-3">{about.facts.title}</h2>
            <dl className="facts">
              {about.facts.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="display-3">{about.working.title}</h2>
            <ul className="check-list check-list-ink">
              {about.working.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CloseBand locale={locale} text={about.close.text} title={about.close.title} />
    </>
  );
}
