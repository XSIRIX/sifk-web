import Image from "next/image";

import { BridgeFilm } from "@/components/bridge-film";
import { CountryRail } from "@/components/country-rail";
import { EnergyScene } from "@/components/energy-scene";
import { Monogram } from "@/components/monogram";
import { CloseBand, TextLink } from "@/components/page-parts";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { Reveal } from "@/components/reveal";
import { WeaveBand } from "@/components/weave-band";
import { WeaveHero } from "@/components/weave-hero";
import { WovenImage } from "@/components/woven-image";
import { WovenStatement } from "@/components/woven-statement";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

export function HomeView({ locale }: { locale: Locale }) {
  const { home, common, team, cloody } = getContent(locale);
  const people = [...team.leadership.members, ...team.africaDesk.members, ...team.onSite.members];

  return (
    <>
      <WeaveHero locale={locale} />

      <ReferenceMarquee
        ariaLabel={home.references.ariaLabel}
        pauseLabel={common.pauseLogos}
        playLabel={common.playLogos}
        title={home.references.title}
      />

      <BridgeFilm locale={locale} />

      <WovenStatement locale={locale} />

      <section className="chapter chapter-africa" data-tone="dark" id="afrika">
        <div className="shell chapter-head">
          <h2 className="display-2">{home.africa.title}</h2>
          <p className="lead">{home.africa.text}</p>
        </div>

        <CountryRail locale={locale} />

        <div className="shell chapter-split">
          <WovenImage
            alt={home.africa.imageAlt}
            className="chapter-photo"
            sizes="(max-width: 960px) 100vw, 50vw"
            src="/brand/africa-business.webp"
          />

          <div className="chapter-services">
            <ol className="numbered-list">
              {home.africa.services.map((service, index) => (
                <Reveal as="li" index={index} key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </Reveal>
              ))}
            </ol>
            <TextLink href={home.africa.link.href} locale={locale}>
              {home.africa.link.label}
            </TextLink>
          </div>
        </div>
      </section>

      <WeaveBand className="seam seam-africa" />

      <section className="chapter chapter-energy" data-tone="dark" id="energie">
        <div className="shell chapter-head">
          <h2 className="display-2">{home.energy.title}</h2>
          <p className="lead">{home.energy.text}</p>
        </div>

        <div className="shell">
          <EnergyScene locale={locale} />
        </div>

        <div className="shell chapter-split chapter-split-reverse">
          <div className="chapter-services">
            <ul className="check-list check-list-large">
              {home.energy.deliverables.map((item, index) => (
                <Reveal as="li" index={index} key={item}>
                  {item}
                </Reveal>
              ))}
            </ul>
            <TextLink href={home.energy.link.href} locale={locale}>
              {home.energy.link.label}
            </TextLink>
          </div>
          <WovenImage
            alt={home.energy.imageAlt}
            className="chapter-photo"
            sizes="(max-width: 960px) 100vw, 50vw"
            src="/brand/energy-team.webp"
          />
        </div>
      </section>

      <section className="section people">
        <div className="shell people-grid">
          <div className="people-copy">
            <h2 className="display-2">{home.people.title}</h2>
            <p className="lead">{home.people.text}</p>
            <TextLink href={home.people.link.href} locale={locale}>
              {home.people.link.label}
            </TextLink>
          </div>
          <ul className="people-wall">
            {people.map((person, index) => (
              <Reveal as="li" className="people-wall-item" index={index % 4} key={person.name}>
                <Monogram countries={person.countries} name={person.name} />
                <span className="people-wall-name">{person.name}</span>
                <span className="people-wall-place">{person.location}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="cloody-teaser" data-tone="dark">
        <div className="cloody-teaser-media">
          <Image alt={cloody.imageAlt} fill sizes="100vw" src="/brand/cloody-port.webp" />
        </div>
        <div aria-hidden="true" className="cloody-teaser-shade" />
        <div className="shell cloody-teaser-inner">
          <p className="status-pill status-pill-dark">
            <span aria-hidden="true" />
            {common.inDevelopment}
          </p>
          <h2 className="display-2">{home.cloody.title}</h2>
          <p className="lead">{home.cloody.text}</p>
          <TextLink href={home.cloody.link.href} locale={locale}>
            {home.cloody.link.label}
          </TextLink>
        </div>
      </section>

      <CloseBand locale={locale} text={home.close.text} title={home.close.title} />
    </>
  );
}
