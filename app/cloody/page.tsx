import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { cloodyPageContent } from "@/lib/site-content";

export default function CloodyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="cloody-hero">
        <div className="cloody-hero-bg" aria-hidden="true">
          <div className="cloody-hero-orb cloody-hero-orb-1" />
          <div className="cloody-hero-orb cloody-hero-orb-2" />
          <div className="cloody-hero-line" />
        </div>

        <div className="shell cloody-hero-inner">
          <p className="eyebrow">{cloodyPageContent.intro.eyebrow}</p>
          <h1 className="cloody-hero-title">
            {cloodyPageContent.intro.title}
          </h1>
          <p className="cloody-hero-text">
            {cloodyPageContent.intro.text}
          </p>

          <div className="cloody-stats">
            {cloodyPageContent.intro.stats.map((stat) => (
              <div className="cloody-stat" key={stat.label}>
                <span className="cloody-stat-value">{stat.value}</span>
                <span className="cloody-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────── */}
      <section className="section shell">
        <Reveal className="cloody-vision-v2">
          <div className="cloody-vision-copy">
            <p className="eyebrow">{cloodyPageContent.vision.eyebrow}</p>
            <h2>{cloodyPageContent.vision.title}</h2>
            <p className="cloody-vision-text">{cloodyPageContent.vision.text}</p>
          </div>
          <div className="cloody-vision-points">
            {cloodyPageContent.vision.points.map((point, i) => (
              <div className="cloody-vision-point" key={point.title}>
                <span className="cloody-vision-point-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Concept — the showstopper ────────────────────── */}
      <section className="cloody-concept-band">
        <div className="cloody-concept-bg" aria-hidden="true">
          <div className="cloody-concept-circle" />
        </div>
        <div className="shell">
          <Reveal className="cloody-concept-v2">
            <p className="cloody-concept-eyebrow">{cloodyPageContent.concept.eyebrow}</p>
            <h2 className="cloody-concept-title">
              {cloodyPageContent.concept.title}
            </h2>
            <p className="cloody-concept-text">{cloodyPageContent.concept.text}</p>
            <div className="cloody-concept-pillars">
              {cloodyPageContent.concept.pillars.map((pillar) => (
                <div className="cloody-concept-pillar" key={pillar.label}>
                  <strong>{pillar.label}</strong>
                  <span>{pillar.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">{cloodyPageContent.howItWorks.eyebrow}</p>
          <h2>{cloodyPageContent.howItWorks.title}</h2>
        </Reveal>

        <div className="cloody-steps">
          <div className="cloody-steps-line" aria-hidden="true" />
          {cloodyPageContent.howItWorks.steps.map((step, index) => (
            <Reveal delay={index * 120} key={step.step}>
              <article className="cloody-step">
                <div className="cloody-step-marker">
                  <span>{step.step}</span>
                </div>
                <div className="cloody-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Audience ─────────────────────────────────────── */}
      <section className="section shell">
        <Reveal className="section-head">
          <p className="eyebrow">{cloodyPageContent.audience.eyebrow}</p>
          <h2>{cloodyPageContent.audience.title}</h2>
        </Reveal>

        <div className="cloody-audience-v2">
          {cloodyPageContent.audience.groups.map((group, index) => (
            <Reveal delay={index * 100} key={group.title}>
              <article className={`cloody-audience-item cloody-audience-item-${group.icon}`}>
                <div className="cloody-audience-accent" aria-hidden="true" />
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section shell">
        <Reveal className="cloody-cta">
          <div className="cloody-cta-content">
            <p className="eyebrow">{cloodyPageContent.cta.eyebrow}</p>
            <h2>{cloodyPageContent.cta.title}</h2>
            <p className="cloody-cta-subtitle">{cloodyPageContent.cta.subtitle}</p>
          </div>

          <div className="cloody-cta-action">
            <p>{cloodyPageContent.cta.text}</p>
            <Link className="button" href={cloodyPageContent.cta.action.href}>
              {cloodyPageContent.cta.action.label}
            </Link>
          </div>

          <div className="cloody-cta-orb" aria-hidden="true" />
        </Reveal>
      </section>
    </>
  );
}
