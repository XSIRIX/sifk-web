import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { WeaveBand } from "@/components/weave-band";
import type { CountryCode } from "@/lib/content";

type PageHeroProps = {
  title: string;
  text: string;
  image?: { src: string; alt: string; position?: string };
  /** Replaces the photo, for example with a woven mosaic. */
  media?: ReactNode;
  children?: ReactNode;
  className?: string;
};

// Full-bleed opener for inner pages: a photo that drifts slower than the page,
// the title on top, and a woven band as the seam into the next section.
export function PageHero({ title, text, image, media, children, className = "" }: PageHeroProps) {
  return (
    <section className={`page-hero${className ? ` ${className}` : ""}`} data-tone="dark">
      <div className="page-hero-media">
        {media ??
          (image ? (
            <Image
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              src={image.src}
              style={image.position ? { objectPosition: image.position } : undefined}
            />
          ) : null)}
      </div>
      <div aria-hidden="true" className="page-hero-shade" />
      <div className="shell page-hero-inner">
        <h1 className="display-1 page-hero-title">{title}</h1>
        <p className="lead page-hero-text">{text}</p>
        {children}
      </div>
      <WeaveBand className="page-hero-band" />
    </section>
  );
}

const MOSAIC: CountryCode[] = ["ke", "de", "tz", "gh", "zm", "ug", "et"];

// The seven places as vertical threads of one cloth. Strips drift up and down
// against each other as the page scrolls.
export function WovenMosaic() {
  return (
    <div aria-hidden="true" className="mosaic">
      {MOSAIC.map((code, index) => (
        <div className="mosaic-strip" key={code} style={{ "--m": index } as CSSProperties}>
          <Image alt="" fill priority={index < 4} sizes="(max-width: 720px) 34vw, 16vw" src={`/brand/places/${code}.webp`} />
        </div>
      ))}
    </div>
  );
}
