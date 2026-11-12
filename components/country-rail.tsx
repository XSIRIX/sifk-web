"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type { CountryCode } from "@/lib/content";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

const ORDER: CountryCode[] = ["de", "gh", "zm", "ug", "ke", "et", "tz"];

type RailProps = {
  locale: Locale;
  /** Optional heading level for the cards. */
  headingLevel?: "h3" | "h4";
};

// Seven places, one thread. On wide screens the section pins and the cards
// travel sideways while you scroll down; a spectrum thread fills along the top.
// Narrow screens and reduced motion get a plain swipeable row.
export function CountryRail({ locale, headingLevel: Heading = "h3" }: RailProps) {
  const { countries, places, map, team } = getContent(locale);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLOListElement | null>(null);

  const people = [...team.leadership.members, ...team.africaDesk.members, ...team.onSite.members];
  const byCountry = (code: CountryCode) => people.filter((person) => person.countries.includes(code));

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const query = window.matchMedia("(min-width: 961px) and (prefers-reduced-motion: no-preference)");
    let distance = 0;
    let frame = 0;
    let pinned = false;

    const update = () => {
      frame = 0;
      if (!pinned) {
        return;
      }
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(distance, 1), 0), 1);
      track.style.transform = `translate3d(${(-progress * distance).toFixed(1)}px, 0, 0)`;
      section.style.setProperty("--rail-p", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    const measure = () => {
      pinned = query.matches;
      section.dataset.pinned = pinned ? "true" : "false";

      if (!pinned) {
        track.style.transform = "";
        section.style.removeProperty("--rail-distance");
        section.style.setProperty("--rail-p", "1");
        return;
      }

      distance = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      section.style.setProperty("--rail-distance", `${distance}px`);
      requestUpdate();
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    query.addEventListener("change", measure);
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      resizeObserver.disconnect();
      query.removeEventListener("change", measure);
      window.removeEventListener("scroll", requestUpdate);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="rail" data-pinned="false" ref={sectionRef}>
      <div className="rail-sticky">
        <div className="shell rail-head">
          <div>
            <p className="rail-kicker">{places.title}</p>
            <p className="rail-text">{places.text}</p>
          </div>
          <span aria-hidden="true" className="rail-progress">
            <i />
          </span>
        </div>

        <div className="rail-viewport" ref={viewportRef}>
          <ol className="rail-track" ref={trackRef}>
            {ORDER.map((code, index) => {
              const members = byCountry(code);
              const count = members.length;
              const meta =
                code === "de"
                  ? `${places.hq} · ${count} ${map.people}`
                  : `${count} ${count === 1 ? places.person : places.people}`;

              return (
                <li className="rail-card" data-country={code} key={code}>
                  <div className="rail-media">
                    <Image
                      alt={places.alt[code]}
                      fill
                      sizes="(max-width: 720px) 78vw, (max-width: 960px) 46vw, 30rem"
                      src={`/brand/places/${code}.webp`}
                    />
                  </div>
                  <div className="rail-body">
                    <span aria-hidden="true" className="rail-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Heading className="rail-country">{countries[code]}</Heading>
                    <p className="rail-meta">{meta}</p>
                    <p className="rail-names">{members.map((member) => member.name).join(" · ")}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
