import type { CSSProperties } from "react";

import { CtaBand, PageHero } from "@/components/page-parts";
import { WeaveScene } from "@/components/weave-scene";
import { getContent, type CountryCode } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";

// The order of the logo: black, red, gold; the facts below are green.
const PRINCIPLE_FIELDS = ["f-ink", "f-glut", "f-gold"];
const PLACE_ORDER: CountryCode[] = ["de", "gh", "zm", "ug", "ke", "et", "tz"];

export function AboutView({ locale }: { locale: Locale }) {
  const { about, home, common, countries, places } = getContent(locale);

  return (
    <>
      <PageHero
        art={{ src: "/world/de.webp", alt: home.intro.germanyAlt, width: 900, height: 900 }}
        text={about.intro.text}
        title={about.intro.title}
      />

      <WeaveScene africa={home.weave.africa} germany={home.weave.germany} markAlt={home.weave.markAlt}>
        <h2 className="display" data-split>
          {about.mark.title}
        </h2>
        <p className="copy" data-rv>
          {about.mark.text}
        </p>
      </WeaveScene>

      <section className="tabsheets sheet field f-plaster">
        <div className="shell tabsheets-head">
          <h2 className="display" data-split>
            {about.principlesTitle}
          </h2>
        </div>
        {about.principles.map((principle, index) => (
          <article
            className={`tabsheet field ${PRINCIPLE_FIELDS[index % PRINCIPLE_FIELDS.length]}`}
            key={principle.title}
            style={{ "--i": index } as CSSProperties}
          >
            <div className="tabsheet-in">
              <h3 className="display">{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="facts sheet field f-laub">
        <div className="shell grid facts-in">
          <div className="facts-col">
            <h2 className="display" data-split>
              {about.facts.title}
            </h2>
            <dl data-rv="kids">
              {about.facts.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="facts-col">
            <h2 className="display" data-split>
              {about.working.title}
            </h2>
            <ul className="ticks" data-rv="kids">
              {about.working.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ul className="facts-places" data-rv="kids">
            {PLACE_ORDER.map((code) => (
              <li key={code}>
                <img alt={places.alt[code]} decoding="async" height={900} loading="lazy" src={`/world/${code}.webp`} width={900} />
                <span>{countries[code]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        href={localizePath(common.firstCall.href, locale)}
        text={about.close.text}
        title={about.close.title}
        word={home.closeWord}
      />
    </>
  );
}
