"use client";

import { useState } from "react";

import { PauseIcon, PlayIcon } from "@/components/icons";

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

type ReferenceMarqueeProps = {
  title: string;
  ariaLabel: string;
  pauseLabel: string;
  playLabel: string;
};

export function ReferenceMarquee({ title, ariaLabel, pauseLabel, playLabel }: ReferenceMarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="references-title" className={`references${paused ? " is-paused" : ""}`}>
      <div className="shell references-head">
        <h2 className="references-title" id="references-title">
          {title}
        </h2>
        <button
          aria-label={paused ? playLabel : pauseLabel}
          className="media-toggle media-toggle-light"
          onClick={() => setPaused((value) => !value)}
          type="button"
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>

      <div className="marquee">
        <ul aria-label={ariaLabel} className="marquee-track">
          {LOGOS.map((logo) => (
            <li className="marquee-item" key={logo.src}>
              <img alt={logo.alt} decoding="async" loading="lazy" src={logo.src} />
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className="marquee-track">
          {LOGOS.map((logo) => (
            <li className="marquee-item" key={logo.src}>
              <img alt="" decoding="async" loading="lazy" src={logo.src} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
