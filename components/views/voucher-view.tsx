import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/page-parts";
import { getContent } from "@/lib/content";

const contactHref = "/kontakt?thema=international";

/** /beratungsgutscheine-afrika. German only. */
export function VoucherView() {
  const { voucher, home, common } = getContent("de");
  if (!voucher) {
    throw new Error("The voucher page needs German copy");
  }
  const body = voucher;
  const stand = voucher.stand;

  return (
    <>
      <PageHero
        art={{ src: "/world/africa.webp", alt: home.africa.imageAlt, width: 1600, height: 1200 }}
        before={<Breadcrumbs items={[{ label: "Start", href: "/" }, { label: voucher.crumb }]} />}
        field="f-plaster"
        text={body.hero.lead}
        title={body.hero.title}
      />

      <section className="chapter sheet field f-white">
        <div className="shell">
          <h2 className="mega chapter-head" data-split>
            {body.programme.title}
          </h2>
          <div className="grid film-intro">
            <div>
              <p className="lead" data-rv>
                {body.programme.text}
              </p>
            </div>
            <div>
              <ul className="ledger" data-rv="kids">
                {body.programme.facts.map((fact) => (
                  <li key={fact.label}>
                    <h3>{fact.label}</h3>
                    <p>{fact.value}</p>
                  </li>
                ))}
              </ul>
              <p className="small">{stand}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process sheet field f-plaster">
        <div className="shell">
          <h2 className="display" data-split>
            {body.steps.title}
          </h2>
          <div className="steps-wrap">
            <div aria-hidden="true" className="steps-bar">
              <i data-grow />
            </div>
            <ol className="steps" data-rv="kids">
              {body.steps.items.map((step) => (
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

      <section className="chapter sheet field f-white">
        <div className="shell">
          <h2 className="display chapter-head" data-split>
            {body.listed.title}
          </h2>
          <div className="grid film-intro">
            <div>
              <p className="copy" data-rv>
                {body.listed.text}
              </p>
            </div>
            <div>
              <ul className="ticks" data-rv="kids">
                {body.listed.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <a className="link" href={body.listed.source.href} rel="noopener">
                {body.listed.source.label}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter sheet field f-plaster">
        <div className="shell">
          <h2 className="display chapter-head" data-split>
            {body.faq.title}
          </h2>
          <ul className="ledger is-wide" data-rv="kids">
            {body.faq.items.map((item) => (
              <li key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </li>
            ))}
          </ul>
          <p className="small">{stand}</p>
        </div>
      </section>

      <CtaBand field="f-ink" href={contactHref} text={body.close.text} title={body.close.title} word={home.closeWord} />
    </>
  );
}
