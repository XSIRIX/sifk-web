"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon, PauseIcon, PlayIcon } from "@/components/icons";
import { MOTION_QUERY, STACK_QUERY } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeroSceneProps = {
  title: string[];
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  sceneAlt: string;
  pauseLabel: string;
  playLabel: string;
  indexLabel: string;
  index: Array<{ href: string; label: string; text: string }>;
};

/** Where the repeating part of the hero film starts, in seconds. */
const LOOP_FROM = 5;

const INDEX_FIELDS = ["f-glut", "f-laub", "f-lime", "f-ink", "f-gold"];

export function HeroScene({
  title,
  text,
  primary,
  secondary,
  sceneAlt,
  pauseLabel,
  playLabel,
  indexLabel,
  index
}: HeroSceneProps) {
  const root = useRef<HTMLElement | null>(null);
  const video = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  // The film is an enhancement: the still is the first paint, the loop fades in over it.
  useEffect(() => {
    const el = video.current;
    if (!el || !window.matchMedia(MOTION_QUERY).matches) return;

    // The still that is already on screen doubles as the poster: no second download.
    el.poster = root.current?.querySelector("img")?.currentSrc ?? "";
    el.src = window.matchMedia("(max-width: 44rem)").matches ? "/world/hero-m.mp4" : "/world/hero.mp4";
    const onPlaying = () => {
      el.classList.add("is-on");
      setPlaying(true);
      setCanPlay(true);
    };
    // The first five seconds weave the ribbons in and play once. After that
    // only the living scene repeats, from the five-second mark.
    const onEnded = () => {
      el.currentTime = LOOP_FROM;
      el.play().catch(() => undefined);
    };
    el.addEventListener("playing", onPlaying, { once: true });
    el.addEventListener("ended", onEnded);
    el.play().catch(() => undefined);
    return () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => undefined);
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

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
          <source media="(max-width: 44rem)" srcSet="/world/hero-m.webp" />
          <img
            alt={sceneAlt}
            fetchPriority="high"
            height={1437}
            sizes="100vw"
            src="/world/hero.webp"
            srcSet="/world/hero-1440.webp 1440w, /world/hero.webp 2560w"
            width={2560}
          />
        </picture>
        <video aria-hidden="true" muted playsInline preload="none" ref={video} tabIndex={-1} />
      </div>

      <div className="shell hero-copy">
        <h1 className="hero-title">
          {title.map((line) => (
            <span key={line} style={{ overflow: "clip", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-text">{text}</p>
        <div className="hero-actions f-plaster">
          <Link className="btn" href={primary.href}>
            {primary.label}
            <ArrowIcon />
          </Link>
          <Link className="link" href={secondary.href}>
            {secondary.label}
          </Link>
        </div>
      </div>

      {canPlay ? (
        <button
          aria-label={playing ? pauseLabel : playLabel}
          className="media-toggle hero-toggle"
          onClick={toggle}
          type="button"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      ) : null}

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
