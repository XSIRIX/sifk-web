import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type CtaBandProps = {
  href: string;
  title: string;
  text: string;
  word: string;
  field?: string;
  id?: string;
};

/**
 * Four short lines that step down to the right like weave. The first two are
 * the heading, the last two the sentence that follows it.
 */
export function Statement({ lines }: { lines: string[] }) {
  const line = (text: string, index: number) => (
    <span className={index % 2 ? "is-box" : undefined} key={text} style={{ "--i": index } as CSSProperties}>
      {text}{" "}
    </span>
  );

  return (
    <div className="stair-lines">
      <h2 data-rv="weft">{lines.slice(0, 2).map((text, index) => line(text, index))}</h2>
      <p data-rv="weft">{lines.slice(2).map((text, index) => line(text, index + 2))}</p>
    </div>
  );
}

export function CornerArrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" focusable="false" viewBox="0 0 48 48">
      <path d="M10 38 38 10M16 10h22v22" stroke="currentColor" strokeLinecap="square" strokeWidth="5" />
    </svg>
  );
}

/** The closing band. The whole band is one link; the word is the size of the page. */
export function CtaBand({ href, title, text, word, field = "f-gold", id }: CtaBandProps) {
  return (
    <Link className={`cta sheet ${field}`} href={href} id={id}>
      <div className="cta-top">
        <div>
          <h2 className="display" data-split>
            {title}
          </h2>
          <p data-rv>{text}</p>
        </div>
        <CornerArrow className="cta-arrow" />
      </div>
      <div aria-hidden="true" className="cta-word" data-shift="3">
        {word}
      </div>
    </Link>
  );
}

type PageHeroProps = {
  title: string;
  text: string;
  field?: string;
  art?: { src: string; alt: string; width: number; height: number };
  /** A photograph instead of a model: it stands as a plain rectangle. */
  photo?: { src: string; alt: string; width: number; height: number };
  /** Anything else that should stand in the right-hand columns instead of a picture. */
  side?: ReactNode;
  /** A small line above the headline, such as a breadcrumb. */
  before?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ title, text, field = "f-plaster", art, photo, side, before, children }: PageHeroProps) {
  return (
    <section className={`page-hero sheet field ${field}${art || photo || side ? "" : " is-wide"}`}>
      <div className="shell grid page-hero-in">
        <div className="page-hero-copy">
          {before}
          <h1 className="mega" data-split>
            {title.includes("\n")
              ? title.split("\n").map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))
              : title}
          </h1>
          <p className="lead" data-rv>
            {text}
          </p>
          {children}
        </div>
        {art ? (
          <div className="page-hero-art">
            <img alt={art.alt} data-parallax="5" fetchPriority="high" height={art.height} src={art.src} width={art.width} />
          </div>
        ) : null}
        {photo ? (
          <figure className="page-hero-photo" data-rv>
            <img alt={photo.alt} fetchPriority="high" height={photo.height} src={photo.src} width={photo.width} />
          </figure>
        ) : null}
        {side ? <div className="page-hero-side">{side}</div> : null}
      </div>
    </section>
  );
}
