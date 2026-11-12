import { CtaBand, Statement } from "@/components/page-parts";
import { ShipScene } from "@/components/ship-scene";
import { getContent } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";

// Four promises, four ribbons side by side.
const RIBBON_FIELDS = ["f-ink", "f-gold", "f-lime", "f-laub"];
const TRIO_FIELDS = ["f-white", "f-ink", "f-gold"];

export function CloodyView({ locale }: { locale: Locale }) {
  const { cloody, common, home, places } = getContent(locale);
  // Where each step happens: at the grower, in the harbour, at the buyer's door.
  const stepArt = [
    { src: "/world/gh.webp", alt: places.alt.gh, field: "f-ink", width: 900, height: 900 },
    { src: "/world/africa.webp", alt: home.africa.imageAlt, field: "f-glut", width: 1600, height: 1200 },
    { src: "/world/de.webp", alt: places.alt.de, field: "f-laub", width: 900, height: 900 }
  ];

  return (
    <>
      <ShipScene alt={cloody.imageAlt} as="h1" tag={common.inDevelopment} text={cloody.intro.text} title={cloody.intro.title} top />

      <section className="stair is-solo sheet field f-gold">
        <div className="shell stair-in">
          <Statement lines={cloody.intro.statement} />
        </div>
      </section>

      <section className="band has-ribbons sheet field f-plaster">
        <div className="shell">
          <div className="band-head">
            <h2 className="mega" data-split>
              {cloody.vision.title}
            </h2>
            <p className="lead" data-rv>
              {cloody.vision.text}
            </p>
          </div>
        </div>
        <ul className="ribbons" data-rv="kids">
          {cloody.vision.points.map((point, index) => (
            <li className={`ribbon ${RIBBON_FIELDS[index % RIBBON_FIELDS.length]}`} key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band sheet field f-glut">
        <div className="shell">
          <div className="band-head">
            <h2 className="mega" data-split lang="en">
              {cloody.concept.title}
            </h2>
            <p className="lead" data-rv>
              {cloody.concept.text}
            </p>
          </div>
          <ul className="ledger is-wide" data-rv="kids">
            {cloody.concept.pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process sheet field f-white">
        <div className="shell">
          <h2 className="display" data-split>
            {cloody.how.title}
          </h2>
          <div className="steps-wrap">
            <div aria-hidden="true" className="steps-bar">
              <i data-grow />
            </div>
            <ol className="steps is-three" data-rv="kids">
              {cloody.how.steps.map((step, index) => (
                <li className="step" key={step.title}>
                  <div className={`step-pic ${stepArt[index].field}`}>
                    <img
                      alt={stepArt[index].alt}
                      decoding="async"
                      height={stepArt[index].height}
                      loading="lazy"
                      src={stepArt[index].src}
                      width={stepArt[index].width}
                    />
                  </div>
                  <h3 className="display">{step.title}</h3>
                  <p className="copy">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="band sheet field f-lime">
        <div className="shell">
          <div className="band-head">
            <h2 className="display" data-split>
              {cloody.audience.title}
            </h2>
          </div>
          <ul className="trio" data-rv="kids">
            {cloody.audience.groups.map((group, index) => (
              <li className={`tile ${TRIO_FIELDS[index % TRIO_FIELDS.length]}`} key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        href={localizePath(common.contact.href, locale)}
        text={cloody.close.text}
        title={cloody.close.title}
        word={home.closeWord}
      />
    </>
  );
}
