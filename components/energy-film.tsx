"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { MOTION_QUERY, STACK_QUERY, flowTop } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The retrofit film, cut into stills. Scrolling runs it forwards and backwards. */
const FRAMES = 61;
/** The film is pinned only where a whole screen is tall enough to hold it. */
export const ENERGY_PIN_QUERY = `${STACK_QUERY} and (min-height: 44rem)`;

type EnergyFilmProps = {
  before: string;
  after: string;
  beforeTitle: string;
  beforeText: string;
  afterTitle: string;
  afterText: string;
  beforeAlt: string;
  afterAlt: string;
  hotspots: Array<{ id: string; label: string }>;
};

/** The point of the film (0 to 1) where each measure shows up. */
const SPOT_AT: Record<string, number> = { pv: 0.36, heat: 0.56, charge: 0.8 };

/**
 * One company building, today and after the consultation. Without motion it is
 * two pictures side by side. With motion the scroll plays the film between them:
 * the red ribbons of lost energy go, the measures arrive one by one.
 */
export function EnergyFilm(props: EnergyFilmProps) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      const stage = el?.querySelector<HTMLElement>(".energy-stage");
      const canvas = el?.querySelector<HTMLCanvasElement>("canvas");
      const wrap = el?.closest<HTMLElement>(".energy-wrap");
      if (!el || !stage || !canvas) return;

      const mm = gsap.matchMedia();

      mm.add({ motion: MOTION_QUERY, pin: ENERGY_PIN_QUERY, small: "(max-width: 44rem)" }, (context) => {
        const { motion, pin, small } = context.conditions as { motion: boolean; pin: boolean; small: boolean };
        if (!motion) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const stills = Array.from(el.querySelectorAll<HTMLImageElement>(".energy-shot img"));
        const fill = el.querySelector<HTMLElement>(".energy-track i");
        const chips = Array.from(el.querySelectorAll<HTMLElement>(".hot li"));
        const set = small ? "s" : "l";
        const frames: Array<HTMLImageElement | undefined> = [];
        const state = { p: 0 };
        let started = false;
        let shown = -1;

        canvas.width = small ? 800 : 1600;
        canvas.height = small ? 600 : 1200;
        el.classList.add("is-live");

        const ready = (img?: HTMLImageElement) => Boolean(img && img.complete && img.naturalWidth > 0);

        const draw = (force = false) => {
          const exact = state.p * (FRAMES - 1);
          let index = Math.round(exact);
          // Until a frame has arrived, the nearest one that has stands in for it.
          for (let step = 0; !ready(frames[index]) && step < FRAMES; step += 1) {
            const down = index - step;
            const up = index + step;
            if (ready(frames[down])) index = down;
            else if (ready(frames[up])) index = up;
          }
          const frame = frames[index];
          if (!ready(frame)) return;
          const key = Math.round(exact * 4);
          if (!force && key === shown) return;
          shown = key;

          ctx.drawImage(frame as HTMLImageElement, 0, 0, canvas.width, canvas.height);

          // At both ends the full-size still lies over the film, so the picture
          // at rest is as sharp as the photograph it started from.
          const head = 1 - exact / 3;
          const tail = 1 - (FRAMES - 1 - exact) / 3;
          const still = head > 0 ? stills[0] : tail > 0 ? stills[1] : undefined;
          if (ready(still)) {
            ctx.globalAlpha = Math.min(1, Math.max(head, tail));
            ctx.drawImage(still as HTMLImageElement, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
          }
          canvas.classList.add("is-on");
        };

        const load = () => {
          if (started) return;
          started = true;
          for (let i = 0; i < FRAMES; i += 1) {
            const img = new Image();
            img.decoding = "async";
            img.onload = () => draw(true);
            img.src = `/world/energy/${set}-${String(i).padStart(3, "0")}.webp`;
            frames[i] = img;
          }
        };

        const sync = () => {
          draw();
          const done = state.p >= 0.5;
          if (fill) fill.style.transform = `scaleX(${state.p})`;
          el.dataset.state = done ? "after" : "before";
          chips.forEach((chip) => {
            chip.dataset.on = String(state.p >= Number(chip.dataset.at ?? 1));
          });
        };

        // The frames are fetched just before the film comes into view.
        const near = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              load();
              near.disconnect();
            }
          },
          { rootMargin: "150% 0px" }
        );
        near.observe(stage);
        stills.forEach((img) => img.addEventListener("load", () => draw(true), { once: true }));

        const scrollTrigger =
          pin && wrap
            ? {
                trigger: wrap,
                start: () => flowTop(wrap) + window.innerHeight * 0.08,
                end: () => flowTop(wrap) + wrap.offsetHeight - window.innerHeight * 1.18,
                scrub: 0.5
              }
            : { trigger: stage, start: "top 68%", end: "top 8%", scrub: 0.5 };

        gsap.to(state, { p: 1, ease: "none", onUpdate: sync, scrollTrigger });
        sync();

        return () => {
          near.disconnect();
          el.classList.remove("is-live");
          canvas.classList.remove("is-on");
          delete el.dataset.state;
          chips.forEach((chip) => delete chip.dataset.on);
          if (fill) fill.style.transform = "";
        };
      });
    },
    { scope: root }
  );

  return (
    <div className="energy-wrap">
      <div className="energy-pin">
        <div className="shell energy-film" ref={root}>
          <div className="energy-stage">
            <figure className="energy-shot is-before">
              <img alt={props.beforeAlt} decoding="async" height={1200} loading="lazy" src="/world/energy-before.webp" width={1600} />
              <figcaption>{props.before}</figcaption>
            </figure>
            <figure className="energy-shot is-after">
              <img alt={props.afterAlt} decoding="async" height={1200} loading="lazy" src="/world/energy-after.webp" width={1600} />
              <figcaption>{props.after}</figcaption>
            </figure>
            <canvas aria-hidden="true" />
          </div>

          <div className="energy-side">
            <p aria-hidden="true" className="energy-track">
              <span>{props.before}</span>
              <b>
                <i />
              </b>
              <span>{props.after}</span>
            </p>

            <div className="energy-note">
              <div className="is-before">
                <h3>{props.beforeTitle}</h3>
                <p>{props.beforeText}</p>
              </div>
              <div className="is-after">
                <h3>{props.afterTitle}</h3>
                <p>{props.afterText}</p>
              </div>
            </div>

            <ul className="hot">
              {props.hotspots.map((spot) => (
                <li data-at={SPOT_AT[spot.id] ?? 0.5} key={spot.id}>
                  {spot.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
