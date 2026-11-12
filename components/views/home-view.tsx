import Link from "next/link";
import { CountryTrack, type CountryPlace } from "@/components/country-track";
import { EnergyFilm } from "@/components/energy-film";
import { HeroScene } from "@/components/hero-scene";
import { ArrowIcon } from "@/components/icons";
import { CornerArrow, CtaBand } from "@/components/page-parts";
import { ReferenceMarquee } from "@/components/reference-marquee";
import { ShipScene } from "@/components/ship-scene";
import { WeaveScene } from "@/components/weave-scene";
import { getContent, type CountryCode } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";

const PLACE_ORDER: CountryCode[] = ["de", "gh", "zm", "ug", "ke", "et", "tz"];

// The ground each model stands on. Picked so its own ribbon stays visible.
export const PLACE_FIELD: Record<CountryCode, string> = {
  de: "f-laub",
  gh: "f-ink",
  zm: "f-glut",
  ug: "f-gold",
  ke: "f-lime",
  et: "f-laub",
  tz: "f-ink"
};

export function HomeView({ locale }: { locale: Locale }) {
  const { home, common, countries, places, team, energyScene, cloody } = getContent(locale);
  const to = (href: string) => localizePath(href, locale);

  // Everyone is counted once, in the country they work from first.
  const everyone = [...team.leadership.members, ...team.africaDesk.members, ...team.onSite.members];
  const byCountry = new Map<CountryCode, string[]>();
  for (const member of everyone) {
    const code = member.countries[0];
    byCountry.set(code, [...(byCountry.get(code) ?? []), member.name]);
  }

  const trackPlaces: CountryPlace[] = PLACE_ORDER.map((code) => {
    const people = byCountry.get(code) ?? [];
    return {
      code,
      name: countries[code],
      alt: places.alt[code],
      label: code === "de" ? places.hq : people.length === 1 ? places.person : places.people,
      people,
      field: PLACE_FIELD[code]
    };
  });

  const tally = [...byCountry.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <>
      <HeroScene
        index={home.index.items}
        indexLabel={home.index.label}
        pauseLabel={common.pauseVideo}
        playLabel={common.playVideo}
        primary={{ href: to(common.firstCall.href), label: common.firstCall.label }}
        sceneAlt={home.hero.places.africa.sceneAlt}
        secondary={{ href: to(home.hero.more.href), label: home.hero.more.label }}
        text={home.hero.text}
        title={home.hero.title}
      />

      <ReferenceMarquee
        ariaLabel={home.references.ariaLabel}
        title={home.references.title}
      />

      <section className="duo sheet field f-gold">
        <div className="shell duo-in">
          <div className="duo-head">
            <div className="duo-say">
              <h2 className="display" data-split>
                {home.intro.title.split("\n").map((line) => (
                  <span key={line}>{line} </span>
                ))}
              </h2>
              <p className="lead" data-rv>
                {home.intro.lead}
              </p>
            </div>
            <p className="duo-note">{home.intro.note}</p>
          </div>
          <div className="duo-doors" data-rv="kids">
            <a className="duo-door f-glut" href="#afrika">
              <span className="duo-top">
                {home.intro.africa}
                <CornerArrow />
              </span>
              <span className="duo-pic">
                <img alt={home.intro.africaAlt} decoding="async" height={900} loading="lazy" src="/world/tz.webp" width={900} />
              </span>
              <strong>{home.intro.africaClaim}</strong>
            </a>
            <a className="duo-door f-laub" href="#energie">
              <span className="duo-top">
                {home.intro.germany}
                <CornerArrow />
              </span>
              <span className="duo-pic">
                <img alt={home.intro.germanyAlt} decoding="async" height={900} loading="lazy" src="/world/de.webp" width={900} />
              </span>
              <strong>{home.intro.germanyClaim}</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="chapter sheet field f-glut" id="afrika">
        <div className="shell">
          <h2 className="mega chapter-head" data-split>
            {home.africa.title}
          </h2>
          <div className="grid chapter-body">
            <div className="chapter-copy">
              <p className="lead" data-rv>
                {home.africa.text}
              </p>
              <ul className="ledger" data-rv="kids">
                {home.africa.services.map((service) => (
                  <li key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </li>
                ))}
              </ul>
              <Link className="btn" href={to(home.africa.link.href)}>
                {home.africa.link.label}
                <ArrowIcon />
              </Link>
            </div>
            <div className="chapter-art">
              <img
                alt={home.africa.imageAlt}
                data-parallax="5"
                decoding="async"
                height={1200}
                loading="lazy"
                src="/world/africa.webp"
                width={1600}
              />
            </div>
          </div>
        </div>
      </section>

      <CountryTrack places={trackPlaces} text={places.text} title={places.title} />

      <section className="chapter sheet field f-laub" id="energie">
        <div className="shell">
          <h2 className="mega is-long chapter-head" data-split>
            {home.energy.title}
          </h2>
          <div className="grid film-intro">
            <div>
              <p className="lead" data-rv>
                {home.energy.text}
              </p>
            </div>
            <div>
              <ul className="ticks" data-rv="kids">
                {home.energy.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn" href={to(home.energy.link.href)}>
                {home.energy.link.label}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
        <EnergyFilm
          after={energyScene.after}
          afterAlt={energyScene.afterAlt}
          afterText={energyScene.afterText}
          afterTitle={energyScene.afterTitle}
          before={energyScene.before}
          beforeAlt={energyScene.beforeAlt}
          beforeText={energyScene.beforeText}
          beforeTitle={energyScene.beforeTitle}
          hotspots={energyScene.hotspots}
        />
      </section>

      <WeaveScene africa={home.weave.africa} germany={home.weave.germany} markAlt={home.weave.markAlt}>
        <h2 className="display" data-split>
          {home.bridge.statement}
        </h2>
        <Link className="link" href={to(home.weave.link.href)}>
          {home.weave.link.label}
          <ArrowIcon />
        </Link>
      </WeaveScene>

      <section className="figure sheet field f-lime" id="team">
        <div className="shell figure-in">
          <h2 className="display figure-claim" data-split>
            {home.figure.claim}
          </h2>
          <div className="figure-num">
            <b data-count={everyone.length}>{everyone.length}</b>
            <p className="title">{home.figure.unit}</p>
          </div>
          <div className="figure-list">
            <ul className="tally" data-rv="kids">
              {tally.map(([code, names]) => (
                <li key={code}>
                  <span className="tally-name">
                    {countries[code]}
                    <img alt="" className="flag" decoding="async" height={512} loading="lazy" src={`/flags/${code}.svg`} width={512} />
                  </span>
                  <span>{names.length}</span>
                </li>
              ))}
            </ul>
            <p className="copy" data-rv>
              {home.people.text}
            </p>
            <Link className="btn" href={to(home.people.link.href)}>
              {home.people.link.label}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <ShipScene
        alt={cloody.imageAlt}
        id="cloody"
        link={{ href: to(home.cloody.link.href), label: home.cloody.link.label }}
        tag={common.inDevelopment}
        text={home.cloody.text}
        title={home.cloody.title}
      />

      <CtaBand
        href={to(common.firstCall.href)}
        id="kontakt"
        text={home.close.text}
        title={home.close.title}
        word={home.closeWord}
      />
    </>
  );
}
