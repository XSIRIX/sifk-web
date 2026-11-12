"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { WeaveBand } from "@/components/weave-band";
import { ArrowIcon, PauseIcon, PlayIcon } from "@/components/icons";
import type { Locale } from "@/lib/locale-routing";
import { localizePath } from "@/lib/locale-routing";
import { getContent } from "@/lib/content";

const EASE_OUT_QUART = (t: number) => 1 - Math.pow(1 - t, 4);

export function WeaveHero({ locale }: { locale: Locale }) {
  const { home, common } = getContent(locale);
  const hero = home.hero;
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const proofRef = useRef<HTMLDListElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const userPausedRef = useRef(false);

  // Video: autoplay only when motion is welcome, pause while off-screen.
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      userPausedRef.current = true;
      return;
    }

    const tryPlay = () => {
      video.play().then(
        () => setPlaying(true),
        () => setPlaying(false)
      );
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPausedRef.current) {
        tryPlay();
      } else if (!entry.isIntersecting) {
        video.pause();
      }
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Proof numbers count up once, after the headline has landed.
  useEffect(() => {
    const root = proofRef.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    const frames: number[] = [];

    items.forEach((element, index) => {
      const target = Number(element.dataset.count);
      const delay = 640 + index * 60;
      let start: number | null = null;

      element.textContent = "0";

      const step = (time: number) => {
        if (start === null) {
          start = time;
        }

        const progress = Math.min(1, Math.max(0, (time - start - delay) / 900));
        element.textContent = String(Math.round(target * EASE_OUT_QUART(progress)));

        if (progress < 1) {
          frames[index] = requestAnimationFrame(step);
        }
      };

      frames[index] = requestAnimationFrame(step);
    });

    return () => {
      frames.forEach((frame) => cancelAnimationFrame(frame));
      items.forEach((element) => {
        element.textContent = element.dataset.count ?? "";
      });
    };
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      userPausedRef.current = false;
      video.play().then(() => setPlaying(true), () => setPlaying(false));
    } else {
      userPausedRef.current = true;
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero" data-tone="dark" ref={sectionRef}>
      <div aria-hidden="true" className="hero-media">
        <video
          className="hero-video"
          loop
          muted
          playsInline
          poster="/brand/weave-poster.webp"
          preload="metadata"
          ref={videoRef}
        >
          <source media="(max-width: 720px)" src="/brand/weave-loop-sm.mp4" type="video/mp4" />
          <source src="/brand/weave-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" />
      </div>

      <div className="shell hero-inner">
        <h1 className="hero-title">
          {hero.title.map((line, index) => (
            <span className="hero-line" key={line} style={{ ["--i" as string]: index }}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-text">{hero.text}</p>

        <div className="hero-actions">
          {hero.actions.map((action, index) => (
            <Link
              className={`button ${index === 0 ? "button-primary" : "button-light"}`}
              href={localizePath(action.href, locale)}
              key={action.href}
            >
              {action.label}
              <ArrowIcon className="icon button-arrow" />
            </Link>
          ))}
        </div>

        <dl className="hero-proof" ref={proofRef}>
          {hero.proof.map((item) => (
            <div className="hero-proof-item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                <span className="hero-proof-value" data-count={item.value}>
                  {item.value}
                </span>
                <span aria-hidden="true" className="thread" />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        aria-label={playing ? common.pauseVideo : common.playVideo}
        className="media-toggle hero-video-toggle"
        onClick={toggleVideo}
        type="button"
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <WeaveBand className="page-hero-band" />
    </section>
  );
}
