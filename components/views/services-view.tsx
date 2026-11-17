import Link from "next/link";

import { EnergyFilm } from "@/components/energy-film";
import { ArrowIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/page-parts";
import { StructuredData } from "@/components/structured-data";
import { getContent } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { serviceStructuredData } from "@/lib/structured-data";

export function ServicesView({ locale }: { locale: Locale }) {
  const { services, home, common, energyScene, voucherTeaser } = getContent(locale);
  const [africa, energy] = services.fields;

  return (
    <>
      <StructuredData data={serviceStructuredData(locale)} />

      <PageHero
        field="f-gold"
        side={
          <nav aria-label={services.intro.title} className="doors" data-rv="kids">
            <a className="door f-glut" href={`#${africa.id}`}>
              <img alt="" height={900} src="/world/tz.webp" width={900} />
              <span>
                {africa.label}
                <ArrowIcon />
              </span>
            </a>
            <a className="door f-laub" href={`#${energy.id}`}>
              <img alt="" height={900} src="/world/de.webp" width={900} />
              <span>
                {energy.label}
                <ArrowIcon />
              </span>
            </a>
          </nav>
        }
        text={services.intro.text}
        title={services.intro.title}
      />

      <section className="chapter sheet field f-glut" id={africa.id}>
        <div className="shell">
          <h2 className="mega is-long chapter-head" data-split>
            {africa.title}
          </h2>
          <div className="grid chapter-body">
            <div className="chapter-copy">
              <p className="lead" data-rv>
                {africa.lead}
              </p>
              <p className="copy" data-rv>
                {africa.text}
              </p>
              <ul className="ledger" data-rv="kids">
                {africa.services.map((service) => (
                  <li key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </li>
                ))}
              </ul>
              {voucherTeaser ? (
                <>
                  <p className="copy" data-rv>
                    {voucherTeaser.text}
                  </p>
                  <Link className="link" data-rv href={voucherTeaser.link.href}>
                    {voucherTeaser.link.label}
                    <ArrowIcon />
                  </Link>
                </>
              ) : null}
              <Link className="btn" href={localizePath(africa.more.href, locale)}>
                {africa.more.label}
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

      <section className="chapter sheet field f-laub" id={energy.id}>
        <div className="shell">
          <h2 className="mega is-long chapter-head" data-split>
            {energy.title}
          </h2>
          <div className="grid film-intro">
            <div>
              <p className="lead" data-rv>
                {energy.lead}
              </p>
              <p className="copy" data-rv>
                {energy.text}
              </p>
            </div>
            <div>
              <ul className="ledger" data-rv="kids">
                {energy.services.map((service) => (
                  <li key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </li>
                ))}
              </ul>
              <Link className="btn" href={localizePath(energy.more.href, locale)}>
                {energy.more.label}
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

      <section className="process sheet field f-plaster">
        <div className="shell">
          <h2 className="display" data-split>
            {services.process.title}
          </h2>
          <div className="steps-wrap">
            <div aria-hidden="true" className="steps-bar">
              <i data-grow />
            </div>
            <ol className="steps" data-rv="kids">
              {services.process.steps.map((step) => (
                <li className="step" key={step.title}>
                  <h3 className="display">{step.title}</h3>
                  <p className="copy">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="process-foot" data-rv>
            <Link className="link" href={localizePath(common.firstCall.href, locale)}>
              {common.firstCall.label}
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        field="f-ink"
        href={localizePath(common.firstCall.href, locale)}
        text={services.close.text}
        title={services.close.title}
        word={home.closeWord}
      />
    </>
  );
}
