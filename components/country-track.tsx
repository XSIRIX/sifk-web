"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { STACK_QUERY, flowTop } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type CountryPlace = {
  code: string;
  name: string;
  alt: string;
  label: string;
  people: string[];
  field: string;
};

type CountryTrackProps = {
  title: string;
  text: string;
  places: CountryPlace[];
};

/**
 * Seven countries on one long table. On wide screens the page scroll pulls the
 * table sideways (the weft); on small screens it is a plain swipe row.
 */
export function CountryTrack({ title, text, places }: CountryTrackProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(STACK_QUERY, () => {
        const el = root.current;
        const track = el?.querySelector<HTMLElement>(".track");
        if (!el || !track) return;

        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: () => flowTop(el),
            end: () => flowTop(el) + el.offsetHeight - window.innerHeight * 1.15,
            scrub: 0.5,
            invalidateOnRefresh: true
          }
        });

        // Each model turns a little as it passes the middle of the screen.
        gsap.utils.toArray<HTMLElement>(".place-tile img").forEach((img, index) => {
          gsap.fromTo(
            img,
            { rotate: index % 2 ? 5 : -5, yPercent: 6 },
            {
              rotate: index % 2 ? -3 : 3,
              yPercent: -4,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: () => flowTop(el) - window.innerHeight,
                end: () => flowTop(el) + el.offsetHeight,
                scrub: true
              }
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="track-wrap sheet field f-plaster" ref={root}>
      <div className="track-stage">
        <div className="shell track-head">
          <h2 className="display" data-split>
            {title}
          </h2>
          <p className="copy" data-rv>
            {text}
          </p>
        </div>

        <ul className="track">
          {places.map((place) => (
            <li className="place" key={place.code}>
              <div className={`place-tile ${place.field}`}>
                <img alt={place.alt} decoding="async" height={900} loading="lazy" src={`/world/${place.code}.webp`} width={900} />
              </div>
              <div className="place-info">
                <h3>{place.name}</h3>
                <p className="small">
                  <strong>{place.label}</strong>
                </p>
                <p className="small">{place.people.join(", ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
