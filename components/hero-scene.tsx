"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

import { ArrowIcon } from "@/components/icons";
import { MOTION_QUERY, STACK_QUERY } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeroSceneProps = {
  title: string[];
  text: string;
  primary: { href: string; label: string };
  sceneAlt: string;
  indexLabel: string;
  index: Array<{ href: string; label: string; text: string }>;
};

/** Where the repeating part of the hero film starts, in seconds. */
const LOOP_FROM = 3.5;

// The order of the logo: black, red, gold, then the two greens.
const INDEX_FIELDS = ["f-ink", "f-glut", "f-gold", "f-lime", "f-laub"];

export function HeroScene({
  title,
  text,
  primary,
  sceneAlt,
  indexLabel,
  index
}: HeroSceneProps) {
  const root = useRef<HTMLElement | null>(null);
  const video = useRef<HTMLVideoElement | null>(null);
  // True when the film cannot play: then the finished picture is shown instead.
  const [woven, setWoven] = useState(false);

  // The still inside <picture> is not found early by the browser, so ask for it in the head.
  // One request per source that applies with motion on, each with that source's media query.
  // Reduced-motion visitors get the woven picture instead, so they are left out here.
  preload("/world/hero-start-m.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 44rem) and (prefers-reduced-motion: no-preference)"
  });
  preload("/world/hero-start.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 44.0625rem) and (prefers-reduced-motion: no-preference)"
  });

  // The film is an enhancement: the empty table is the first paint, the film fades in over it.
  useEffect(() => {
    const el = video.current;
    if (!el || !window.matchMedia(MOTION_QUERY).matches) return;

    const file = window.matchMedia("(max-width: 44rem)").matches ? "/world/hero-m.mp4" : "/world/hero.mp4";
    if (!el.src.endsWith(file)) el.src = file;
    const onPlaying = () => el.classList.add("is-on");
    // The first 3.5 seconds weave the ribbons in and play once. After that
    // only the living scene repeats, from that mark.
    const onEnded = () => {
      el.currentTime = LOOP_FROM;
      el.play().catch(() => undefined);
    };
    el.addEventListener("playing", onPlaying, { once: true });
    el.addEventListener("ended", onEnded);
    // Only a real refusal to play counts. A play() that was merely interrupted
    // (the effect running twice in development) must not swap in the finished picture.
    el.play().catch((error: unknown) => {
      if ((error as DOMException | null)?.name === "NotAllowedError") setWoven(true);
    });
    return () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_QUERY, () => {
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".hero-title span > span", { yPercent: 110, duration: 1.3, stagger: 0.12 }, 0.15)
          .from(".hero-text, .hero-actions", { y: 28, autoAlpha: 0, duration: 1.1, stagger: 0.1 }, 0.55)
          .from(".chapter-link", { yPercent: 100, duration: 1, stagger: 0.07 }, 0.7);
      });

      mm.add(STACK_QUERY, () => {
        const scrollTrigger = { trigger: root.current, start: 0, end: () => window.innerHeight, scrub: true };
        gsap.to(".hero-media", { scale: 1.12, transformOrigin: "50% 78%", ease: "none", scrollTrigger });
        gsap.to(".hero-copy", { yPercent: -28, autoAlpha: 0, ease: "none", scrollTrigger });
      });
    },
    { scope: root }
  );

  return (
    <section className="hero sheet" ref={root}>
      <div className="hero-media">
        <picture>
          {/* The film starts on an empty table and weaves the ribbons in, so the
              first paint is that same empty table. The finished, woven picture is
              only for visitors who get no film. */}
          {woven ? (
            <>
              <source media="(max-width: 44rem)" srcSet="/world/hero-m.webp" />
              <source sizes="100vw" srcSet="/world/hero-1440.webp 1440w, /world/hero.webp 2560w" />
            </>
          ) : (
            <>
              <source media="(prefers-reduced-motion: reduce) and (max-width: 44rem)" srcSet="/world/hero-m.webp" />
              <source
                media="(prefers-reduced-motion: reduce)"
                sizes="100vw"
                srcSet="/world/hero-1440.webp 1440w, /world/hero.webp 2560w"
              />
              <source media="(max-width: 44rem)" srcSet="/world/hero-start-m.webp" />
            </>
          )}
          <img alt={sceneAlt} fetchPriority="high" height={1080} src="/world/hero-start.webp" width={1920} />
        </picture>
        <video aria-hidden="true" muted playsInline preload="none" ref={video} tabIndex={-1} />
      </div>

      <div className="shell hero-copy">
        <h1 className="hero-title">
          {title.map((line, index) => (
            <Fragment key={line}>
              {/* A space between the lines, so the raw text reads "Afrika. Effizienz". */}
              {index > 0 ? " " : null}
              <span style={{ overflow: "clip", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <span>{line}</span>
              </span>
            </Fragment>
          ))}
        </h1>
        <p className="hero-text">{text}</p>
        <div className="hero-actions f-plaster">
          <Link className="btn" href={primary.href}>
            {primary.label}
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <nav aria-label={indexLabel} className="chapters">
        {index.map((item, i) => (
          <a className={`chapter-link ${INDEX_FIELDS[i % INDEX_FIELDS.length]}`} href={item.href} key={item.href}>
            <strong>{item.label}</strong>
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
