"use client";

import { useEffect, useState } from "react";

type ReferenceLogo = {
  alt: string;
  src: string;
};

const PRIORITY_LOGOS: ReferenceLogo[] = [
  { alt: "BackWerk", src: "/references/backwerk.png" },
  { alt: "Eichbaum", src: "/references/eichbaum.svg" },
  { alt: "Back Factory", src: "/references/backfactory.jpg" },
];

const OTHER_LOGOS: ReferenceLogo[] = [
  { alt: "TIA", src: "/references/tia.png" },
  { alt: "Pharmatek", src: "/references/pharmatek.svg" },
  { alt: "Horn", src: "/references/horn.jpg" },
  { alt: "Proland", src: "/references/proland.png" },
  { alt: "Sameer", src: "/references/sameer.png" },
  { alt: "Werther", src: "/references/werther.png" },
  { alt: "Kochlöffel", src: "/references/kochlöffel.jpg" },
  { alt: "Kautex", src: "/references/kautex.png" },
  { alt: "Multimatic", src: "/references/multimatic.png" },
  { alt: "Walther", src: "/references/walther.webp" },
  { alt: "Just Property", src: "/references/justproperty.png" },
  { alt: "Sport", src: "/references/sport.png" },
  { alt: "Keninvest", src: "/references/keninvest.jpg" },
  { alt: "Naburi", src: "/references/naburi.png" },
  { alt: "JD Hahn", src: "/references/jdhahn.png" },
  { alt: "Best Western", src: "/references/best-western.jpg" },
  { alt: "Banange", src: "/references/banange.png" },
  { alt: "Fairquer", src: "/references/fairquer.jpeg" },
  { alt: "MVZ", src: "/references/mvz.png" },
  { alt: "Weingut", src: "/references/weingut.png" },
  { alt: "Axel", src: "/references/axel.jpeg" },
  { alt: "Motsch", src: "/references/motsch.gif" },
  { alt: "Landry", src: "/references/landry.png" },
  { alt: "NYC Pizza", src: "/references/nycpizza.png" },
  { alt: "SMS", src: "/references/sms.jpg" },
  { alt: "African", src: "/references/african.jpeg" },
  { alt: "Ecolo", src: "/references/ecolo.webp" },
  { alt: "Hensel", src: "/references/hensel.jpg" },
  { alt: "Coffee Beans", src: "/references/coffeebeans.png" },
];

function shuffleLogos(logos: ReferenceLogo[]) {
  const shuffled = [...logos];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

export function ReferenceMarquee() {
  const [logos, setLogos] = useState(() => [...PRIORITY_LOGOS, ...OTHER_LOGOS]);

  useEffect(() => {
    setLogos([...PRIORITY_LOGOS, ...shuffleLogos(OTHER_LOGOS)]);
  }, []);

  const leadLogos = logos.slice(0, PRIORITY_LOGOS.length);
  const trailingLogos = logos.slice(PRIORITY_LOGOS.length);
  const loopedLogos = [...trailingLogos, ...leadLogos, ...trailingLogos, ...leadLogos];

  return (
    <section className="reference-band" aria-labelledby="references-title">
      <div className="reference-band-copy">
        <p className="eyebrow">Referenzen</p>
        <p className="reference-band-title" id="references-title">
          Kunden und Partner, die auf unsere Arbeit vertrauen.
        </p>
      </div>

      <div className="reference-band-inner">
        <div className="reference-marquee" aria-label="Referenzlogos">
          <div className="reference-marquee-track">
            {loopedLogos.map((logo, index) => (
              <div
                className="reference-logo-chip"
                key={`${logo.src}-${index}`}
              >
                <img
                  alt={logo.alt}
                  className="reference-logo-image"
                  decoding="async"
                  fetchPriority={index < 8 ? "high" : "auto"}
                  loading={index < 8 ? "eager" : "lazy"}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
