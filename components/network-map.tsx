"use client";

import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/locale-routing";
import { getContent, type CountryCode } from "@/lib/content";

const STATIONS: Array<{ code: Exclude<CountryCode, "de">; people: number }> = [
  { code: "gh", people: 1 },
  { code: "zm", people: 1 },
  { code: "ug", people: 3 },
  { code: "ke", people: 1 },
  { code: "et", people: 1 },
  { code: "tz", people: 1 }
];

const GERMANY_PEOPLE = 5;

type NetworkMapProps = {
  locale: Locale;
  tone?: "on-dark" | "on-light";
  className?: string;
};

export function NetworkMap({ locale, tone = "on-dark", className = "" }: NetworkMapProps) {
  const { countries, map } = getContent(locale);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<"static" | "armed" | "drawn">("static");

  useEffect(() => {
    const root = rootRef.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setState("armed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Two frames so the hidden state paints before the lines draw.
          requestAnimationFrame(() => requestAnimationFrame(() => setState("drawn")));
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const unit = (count: number) => `${count} ${count === 1 ? map.person : map.people}`;

  return (
    <div className={`network-map network-map-${tone} is-${state} ${className}`} ref={rootRef}>
      {/* Wide layout: routes leave Germany horizontally and arrive in Africa vertically. */}
      <svg
        aria-hidden="true"
        className="network-map-wide"
        focusable="false"
        viewBox="0 0 960 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text className="map-label map-label-strong" x="24" y="28">
          {countries.de}
        </text>
        <text className="map-label" x="24" y="48">
          {unit(GERMANY_PEOPLE)} · {map.hq}
        </text>
        <rect className="map-terminal-k" height="22" width="16" x="24" y="62" />
        <rect className="map-terminal-r" height="22" width="16" x="24" y="88" />
        <rect className="map-terminal-g" height="22" width="16" x="24" y="114" />

        {STATIONS.map((station, index) => {
          const x = 230 + index * 128;
          const y = 130 - index * 12;
          return (
            <g key={station.code} style={{ ["--i" as string]: index }}>
              <path
                className="map-route"
                d={`M40 ${y} H${x - 22} Q${x} ${y} ${x} ${y + 22} V290`}
                pathLength={1}
              />
              <circle className="map-station" cx={x} cy={302} r={10} />
              <text className="map-label map-label-strong" textAnchor="middle" x={x} y={342}>
                {countries[station.code]}
              </text>
              <text className="map-label" textAnchor="middle" x={x} y={364}>
                {unit(station.people)}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Narrow layout: the same idea turned upright for phones. */}
      <svg
        aria-hidden="true"
        className="network-map-narrow"
        focusable="false"
        viewBox="0 0 340 520"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text className="map-label map-label-strong" x="20" y="24">
          {countries.de}
        </text>
        <text className="map-label" x="20" y="44">
          {unit(GERMANY_PEOPLE)} · {map.hq}
        </text>
        <rect className="map-terminal-k" height="14" width="30" x="20" y="58" />
        <rect className="map-terminal-r" height="14" width="30" x="54" y="58" />
        <rect className="map-terminal-g" height="14" width="30" x="88" y="58" />

        {STATIONS.map((station, index) => {
          const x = 30 + index * 16;
          const y = 130 + index * 66;
          return (
            <g key={station.code} style={{ ["--i" as string]: index }}>
              <path
                className="map-route"
                d={`M${x} 72 V${y - 16} Q${x} ${y} ${x + 16} ${y} H186`}
                pathLength={1}
              />
              <circle className="map-station" cx={198} cy={y} r={10} />
              <text className="map-label map-label-strong" x={220} y={y - 2}>
                {countries[station.code]}
              </text>
              <text className="map-label" x={220} y={y + 17}>
                {unit(station.people)}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="visually-hidden">{map.label}</p>
    </div>
  );
}
