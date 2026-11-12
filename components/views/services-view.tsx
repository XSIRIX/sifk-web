import Image from "next/image";
import Link from "next/link";

import { EnergyScene } from "@/components/energy-scene";
import { ArrowIcon } from "@/components/icons";
import { CloseBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { StructuredData } from "@/components/structured-data";
import { WeaveBand } from "@/components/weave-band";
import { WovenImage } from "@/components/woven-image";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { serviceStructuredData } from "@/lib/structured-data";

export function ServicesView({ locale }: { locale: Locale }) {
  const { services, home } = getContent(locale);
  const [africa, energy] = services.fields;
  const panels = [
    { field: africa, image: "/brand/africa-business.webp", alt: home.africa.imageAlt, tone: "africa" },
    { field: energy, image: "/brand/energy-team.webp", alt: home.energy.imageAlt, tone: "energy" }
  ];

  return (
    <>
      <StructuredData data={serviceStructuredData(locale)} />

      <section className="split-hero" data-tone="dark">
        <div className="shell split-hero-head">
          <h1 className="display-1">{services.intro.title}</h1>
          <p className="lead">{services.intro.text}</p>
        </div>
        <nav aria-label={locale === "de" ? "Geschäftsfelder" : "Lines of business"} className="split-panels">
          {panels.map(({ field, image, alt, tone }) => (
            <Link className={`split-panel split-panel-${tone}`} href={`#${field.id}`} key={field.id}>
              <Image alt={alt} fill priority sizes="(max-width: 720px) 100vw, 60vw" src={image} />
              <span aria-hidden="true" className="split-panel-shade" />
              <span className="split-panel-copy">
                <span className="split-panel-label">{field.label}</span>
                <span className="split-panel-title">{field.title}</span>
                <span className="split-panel-lead">{field.lead}</span>
              </span>
              <ArrowIcon className="split-panel-arrow" />
            </Link>
          ))}
        </nav>
        <WeaveBand className="page-hero-band" />
      </section>

      <section className="field-block field-block-africa" id={africa.id}>
        <div className="shell field-grid">
          <div className="field-copy">
            <p className="field-label">{africa.label}</p>
            <h2 className="display-2">{africa.title}</h2>
            <p className="field-lead">{africa.lead}</p>
            <p>{africa.text}</p>
          </div>
          <WovenImage
            alt={home.africa.imageAlt}
            className="field-photo"
            sizes="(max-width: 960px) 100vw, 45vw"
            src="/brand/africa-business.webp"
          />
        </div>
        <div className="shell">
          <ol className="service-rows">
            {africa.services.map((service, index) => (
              <Reveal as="li" index={index} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="field-block field-block-energy" data-tone="dark" id={energy.id}>
        <div className="shell field-grid">
          <div className="field-copy">
            <p className="field-label">{energy.label}</p>
            <h2 className="display-2">{energy.title}</h2>
            <p className="field-lead">{energy.lead}</p>
            <p>{energy.text}</p>
          </div>
          <WovenImage
            alt={home.energy.imageAlt}
            className="field-photo"
            sizes="(max-width: 960px) 100vw, 45vw"
            src="/brand/energy-team.webp"
          />
        </div>
        <div className="shell">
          <EnergyScene locale={locale} />
          <ol className="service-rows">
            {energy.services.map((service, index) => (
              <Reveal as="li" index={index} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <h2 className="display-2 section-title">{services.process.title}</h2>
          <ol className="process process-woven">
            {services.process.steps.map((step, index) => (
              <Reveal as="li" className="process-step" index={index} key={step.title}>
                <span aria-hidden="true" className="process-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CloseBand locale={locale} text={services.close.text} title={services.close.title} />
    </>
  );
}
