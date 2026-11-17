"use client";

import { useEffect, useRef } from "react";

import { MOTION_QUERY } from "@/components/motion-root";

type ReferenceLogo = { alt: string; src: string };

const LOGOS: ReferenceLogo[] = [
  { alt: "BackWerk", src: "/references/backwerk.png" },
  { alt: "Eichbaum", src: "/references/eichbaum.svg" },
  { alt: "Back-Factory", src: "/references/backfactory.jpg" },
  { alt: "Top Image Africa", src: "/references/tia.png" },
  { alt: "Pharmatek", src: "/references/pharmatek.svg" },
  { alt: "Horn", src: "/references/horn.jpg" },
  { alt: "Proland", src: "/references/proland.png" },
  { alt: "Sameer", src: "/references/sameer.png" },
  { alt: "Werther", src: "/references/werther.png" },
  { alt: "Kochlöffel", src: "/references/kochloffel.jpg" },
  { alt: "Kautex", src: "/references/kautex.png" },
  { alt: "Multimatic", src: "/references/multimatic.png" },
  { alt: "Walther", src: "/references/walther.webp" },
  { alt: "Just Property", src: "/references/justproperty.png" },
  { alt: "Sport Mix Team", src: "/references/sport.png" },
  { alt: "KenInvest", src: "/references/keninvest.jpg" },
  { alt: "Naburi Fashion House", src: "/references/naburi.png" },
  { alt: "JD Hahn", src: "/references/jdhahn.png" },
  { alt: "Best Western", src: "/references/best-western.jpg" },
  { alt: "Banange Brewing Company", src: "/references/banange.png" },
  { alt: "Fair & Quer", src: "/references/fairquer.jpeg" },
  { alt: "MVZ", src: "/references/mvz.png" },
  { alt: "Weingut", src: "/references/weingut.png" },
  { alt: "Präzisionstechnik Axel Stadel", src: "/references/axel.jpeg" },
  { alt: "Motsch", src: "/references/motsch.gif" },
  { alt: "Landry", src: "/references/landry.png" },
  { alt: "NYC Pizza", src: "/references/nycpizza.png" },
  { alt: "SMS Media", src: "/references/sms.jpg" },
  { alt: "The African Way Coffee Shop", src: "/references/african.jpeg" },
  { alt: "Ecolo", src: "/references/ecolo.webp" },
  { alt: "Hensel", src: "/references/hensel.jpg" },
  { alt: "Coffee Beans", src: "/references/coffeebeans.png" }
];

const ROWS = 2;
/** Seconds one row needs for a full round; the second one runs the other way. */
const ROUND = [72, 84];

type ReferenceMarqueeProps = {
  title: string;
  ariaLabel: string;
};

/**
 * Clients and partners: the sentence, then the model street of businesses on
 * the five ribbons, and below it two rows of logos gliding past each other.
 */
export function ReferenceMarquee({ title, ariaLabel }: ReferenceMarqueeProps) {
  const root = useRef<HTMLElement | null>(null);

  // The street stands first; a moment later the sentence rises from behind it.
  useEffect(() => {
    const el = root.current;
    const street = el?.querySelector<HTMLImageElement>(".refs-street img");
    if (!el || !street || !window.matchMedia(MOTION_QUERY).matches) return;
    el.classList.add("is-armed");
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        seen.disconnect();
        // Only once the picture is really painted may the sentence follow.
        street
          .decode()
          .catch(() => undefined)
          .then(() => el.classList.add("is-in"));
      },
      { threshold: 0.08 }
    );
    seen.observe(street);
    return () => {
      seen.disconnect();
      el.classList.remove("is-armed", "is-in");
    };
  }, []);

  const rows = Array.from({ length: ROWS }, (_unused, row) => LOGOS.filter((_logo, index) => index % ROWS === row));

  return (
    <section aria-labelledby="references-title" className="refs sheet field f-plaster" ref={root}>
      <div className="shell refs-say">
        <h2 className="display" id="references-title">
          {title}
        </h2>
      </div>
      {/* The street of businesses on the five ribbons. Decoration: the logos below carry the names. */}
      <div aria-hidden="true" className="refs-street">
        <img alt="" height={800} loading="lazy" src="/world/clients-street.webp" width={2736} />
      </div>
      <div aria-label={ariaLabel} className="refs-stage" role="group">
        {rows.map((logos, row) => (
          <ul
            className={`refs-run${row % 2 === 1 ? " is-back" : ""}`}
            key={row}
            style={{ animationDuration: `${ROUND[row % ROUND.length]}s` }}
          >
            {/* Twice in a row, so the loop has no seam. The second set is for the eye only. */}
            {[false, true].flatMap((copy) =>
              logos.map((logo) => (
                <li aria-hidden={copy || undefined} key={`${logo.src}${copy ? "-2" : ""}`}>
                  <img alt={copy ? "" : logo.alt} decoding="async" loading="lazy" src={logo.src} />
                </li>
              ))
            )}
          </ul>
        ))}
      </div>
    </section>
  );
}
