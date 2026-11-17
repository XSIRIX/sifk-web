import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/page-parts";
import { StructuredData } from "@/components/structured-data";
import { getContent } from "@/lib/content";
import type { ServicePageContent, ServiceSection } from "@/lib/content-services";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { siteUrl } from "@/lib/seo";
import { breadcrumbStructuredData, servicePageStructuredData } from "@/lib/structured-data";

// Each topic keeps its own colour for its one bold chapter. No red (f-glut) on these pages.
const ACCENT: Record<ServicePageContent["topic"], string> = { energie: "f-laub", international: "f-gold" };

export const homeCrumb: Record<Locale, string> = { de: "Start", en: "Home" };

/** /leistungen/energieberatung and /leistungen/markteintritt-afrika, in both languages. */
export function ServicePageView({ locale, page }: { locale: Locale; page: ServicePageContent }) {
  const { home, common } = getContent(locale);
  const contactHref = `${localizePath("/kontakt", locale)}?thema=${page.topic}`;
  const accent = ACCENT[page.topic];
  // Plain sheets alternate so two neighbours never share a colour. The hero is plaster.
  let plain = 0;
  const nextPlain = () => (plain++ % 2 === 0 ? "f-white" : "f-plaster");

  const section = (part: ServiceSection) => {
    switch (part.kind) {
      case "prose":
        return (
          <section className={`chapter sheet field ${nextPlain()}`} key={part.title}>
            <div className="shell">
              <h2 className="display chapter-head" data-split>
                {part.title}
              </h2>
              <div className="grid film-intro">
                <div>
                  {part.paragraphs.map((text) => (
                    <p className="copy" data-rv key={text}>
                      {text}
                    </p>
                  ))}
                  {part.stand ? <p className="small">{page.stand}</p> : null}
                </div>
              </div>
            </div>
          </section>
        );
      case "ledger":
        return (
          <section className={`chapter sheet field ${accent}`} key={part.title}>
            <div className="shell">
              {/* Plain Mega: the titles are short; is-long would shrink them below the item headings on phones. */}
              <h2 className="mega chapter-head" data-split>
                {part.title}
              </h2>
              {part.lead ? (
                <p className="lead" data-rv>
                  {part.lead}
                </p>
              ) : null}
              <ul className="ledger is-wide" data-rv="kids">
                {part.items.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      case "steps":
        return (
          <section className={`process sheet field ${nextPlain()}`} key={part.title}>
            <div className="shell">
              <h2 className="display" data-split>
                {part.title}
              </h2>
              <div className="steps-wrap">
                <div aria-hidden="true" className="steps-bar">
                  <i data-grow />
                </div>
                <ol className="steps" data-rv="kids">
                  {part.items.map((step) => (
                    <li className="step" key={step.title}>
                      <h3 className="display">{step.title}</h3>
                      <p className="copy">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="process-foot" data-rv>
                <Link className="link" href={contactHref}>
                  {common.firstCall.label}
                  <ArrowIcon />
                </Link>
              </p>
            </div>
          </section>
        );
      case "funding":
        return (
          <section className={`chapter sheet field ${nextPlain()}`} key={part.title}>
            <div className="shell">
              <h2 className="display chapter-head" data-split>
                {part.title}
              </h2>
              <ul className="ledger is-wide" data-rv="kids">
                {part.items.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.link ? (
                      // Written as given: a German-only page must not get an /en prefix.
                      // In a <p>, so the grid row does not squeeze the link to its narrowest width.
                      <p>
                        <a className="link" href={item.link.href} hrefLang={item.link.hrefLang}>
                          {item.link.label}
                          <ArrowIcon />
                        </a>
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="small">{page.stand}</p>
            </div>
          </section>
        );
      case "places":
        return (
          <section className={`chapter sheet field ${nextPlain()}`} key={part.title}>
            <div className="shell">
              <h2 className="display chapter-head" data-split>
                {part.title}
              </h2>
              <div className="grid film-intro">
                <div>
                  <p className="copy" data-rv>
                    {part.text}
                  </p>
                </div>
                <ul className="ticks" data-rv="kids">
                  {part.places.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <>
      <PageHero
        art={page.hero.art}
        before={
          <Breadcrumbs
            items={[
              { label: homeCrumb[locale], href: localizePath("/", locale) },
              { label: page.crumbs.services, href: localizePath("/leistungen", locale) },
              { label: page.crumbs.page }
            ]}
          />
        }
        field="f-plaster"
        text={page.hero.lead}
        title={page.hero.title}
      />

      {page.sections.map(section)}

      <section className={`chapter sheet field ${nextPlain()}`}>
        <div className="shell">
          <h2 className="display chapter-head" data-split>
            {page.faq.title}
          </h2>
          <ul className="ledger is-wide" data-rv="kids">
            {page.faq.items.map((item) => (
              <li key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand field="f-ink" href={contactHref} text={page.close.text} title={page.close.title} word={home.closeWord} />
    </>
  );
}

/** The whole route: search data for the service and the breadcrumb, then the page. */
export function ServicePageRoute({ locale, page, description }: { locale: Locale; page: ServicePageContent; description: string }) {
  const url = (path: string) => new URL(localizePath(path, locale), siteUrl).href;
  return (
    <>
      <StructuredData data={servicePageStructuredData(page, locale, description)} />
      <StructuredData
        data={breadcrumbStructuredData([
          { name: homeCrumb[locale], url: url("/") },
          { name: page.crumbs.services, url: url("/leistungen") },
          { name: page.crumbs.page, url: url(page.path) }
        ])}
      />
      <ServicePageView locale={locale} page={page} />
    </>
  );
}
