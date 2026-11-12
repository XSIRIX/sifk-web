"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

const STRIPS = 9;

// Where each measure sits on the "after" photo, in percent of the frame.
const HOTSPOT_POSITION: Record<string, { x: number; y: number }> = {
  pv: { x: 36, y: 40 },
  heat: { x: 59.5, y: 70 },
  charge: { x: 82, y: 80 }
};

type State = "before" | "after";

// The same building, today and after our advice. Switching weaves the second
// photo in, strip by strip, alternately from the top and from the bottom.
export function EnergyScene({ locale }: { locale: Locale }) {
  const copy = getContent(locale).energyScene;
  const [state, setState] = useState<State>("before");
  const touchedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Show the change once, when the scene is well in view, unless someone already chose.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !touchedRef.current) {
          timer = window.setTimeout(() => {
            if (!touchedRef.current) {
              touchedRef.current = true;
              setState("after");
            }
          }, 900);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const choose = (next: State) => {
    touchedRef.current = true;
    setState(next);
  };

  const isAfter = state === "after";

  return (
    <div className="energy-scene" data-state={state} ref={rootRef}>
      <div aria-label={isAfter ? copy.afterAlt : copy.beforeAlt} className="energy-stage" role="img">
        <Image alt="" className="energy-photo" fill sizes="100vw" src="/brand/energy-before.webp" />

        <div aria-hidden="true" className="energy-strips">
          {Array.from({ length: STRIPS }, (_, index) => (
            <span
              className="energy-strip"
              key={index}
              style={{ "--s": index, "--n": STRIPS } as CSSProperties}
            >
              <span className="energy-strip-inner">
                <Image alt="" className="energy-photo" fill sizes="100vw" src="/brand/energy-after.webp" />
              </span>
            </span>
          ))}
        </div>

        <ul aria-hidden="true" className="energy-hotspots">
          {copy.hotspots.map((spot, index) => (
            <li
              className="energy-hotspot"
              data-flip={HOTSPOT_POSITION[spot.id].x > 70 ? "" : undefined}
              key={spot.id}
              style={
                {
                  left: `${HOTSPOT_POSITION[spot.id].x}%`,
                  top: `${HOTSPOT_POSITION[spot.id].y}%`,
                  "--h": index
                } as CSSProperties
              }
            >
              <i />
              <span>{spot.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="energy-panel">
        <div aria-label={copy.toggleLabel} className="segmented" role="group">
          <span aria-hidden="true" className="segmented-thumb" data-state={state} />
          <button aria-pressed={!isAfter} className="segmented-option" onClick={() => choose("before")} type="button">
            {copy.before}
          </button>
          <button aria-pressed={isAfter} className="segmented-option" onClick={() => choose("after")} type="button">
            {copy.after}
          </button>
        </div>

        <div aria-live="polite" className="energy-caption">
          <p className="energy-caption-title">{isAfter ? copy.afterTitle : copy.beforeTitle}</p>
          <p className="energy-caption-text">{isAfter ? copy.afterText : copy.beforeText}</p>
        </div>

        <ul className="energy-measures">
          {copy.hotspots.map((spot, index) => (
            <li key={spot.id} style={{ "--h": index } as CSSProperties}>
              {spot.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
