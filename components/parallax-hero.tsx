"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { cloodyBadge as cloodyBadgeDefault, homeContent } from "@/lib/site-content";

type CloodyBadge = {
  kicker: string;
  tagline: string;
  href: string;
};

type ParallaxHeroProps = {
  content?: typeof homeContent;
  bridgeCopy?: {
    kicker: string;
    text: string;
    from: string;
    to: string;
    canvasAlt: string;
  };
  cloodyBadge?: CloodyBadge;
};

const FRAME_COUNT = 143;
const FRAME_URLS = Array.from(
  { length: FRAME_COUNT },
  (_, index) => `/parallax/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
);

const PRELOAD_RADIUS = 10;

export function ParallaxHero({
  content = homeContent,
  bridgeCopy = {
    kicker: "Deutschland nach Afrika",
    text: "Wir setzen die Brücke von Deutschland nach Afrika.",
    from: "Deutschland",
    to: "Afrika",
    canvasAlt: "Frankfurt skyline transitioning toward Cape Town"
  },
  cloodyBadge = cloodyBadgeDefault
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef(0);
  const cacheRef = useRef(new Map<number, HTMLImageElement>());
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setCanvasSize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.round(bounds.width * ratio));
      canvas.height = Math.max(1, Math.round(bounds.height * ratio));
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);
    };

    const drawImageCover = (image: HTMLImageElement) => {
      const { width, height } = canvas.getBoundingClientRect();
      const imageWidth = image.naturalWidth || image.width || width;
      const imageHeight = image.naturalHeight || image.height || height;
      const scale = Math.max(width / imageWidth, height / imageHeight);
      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;
      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      context.clearRect(0, 0, width, height);
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    const getNearestLoadedFrame = (index: number) => {
      const cached = cacheRef.current.get(index);

      if (cached?.complete) {
        return cached;
      }

      for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
        const previous = cacheRef.current.get(index - distance);

        if (previous?.complete) {
          return previous;
        }

        const next = cacheRef.current.get(index + distance);

        if (next?.complete) {
          return next;
        }
      }

      return null;
    };

    const drawFrame = (index: number) => {
      const image = getNearestLoadedFrame(index);

      if (!image) {
        return;
      }

      drawImageCover(image);
    };

    const loadFrame = (index: number) => {
      if (index < 0 || index >= FRAME_COUNT || cacheRef.current.has(index)) {
        return;
      }

      const image = new window.Image();
      image.decoding = "async";
      image.src = FRAME_URLS[index];
      image.onload = () => {
        if (index === frameRef.current || index === 0) {
          drawFrame(frameRef.current);
        }
      };

      cacheRef.current.set(index, image);
    };

    const primeFrames = (center: number) => {
      for (let index = center - PRELOAD_RADIUS; index <= center + PRELOAD_RADIUS; index += 1) {
        loadFrame(index);
      }

      for (let index = center + PRELOAD_RADIUS; index < center + PRELOAD_RADIUS * 3; index += 4) {
        loadFrame(index);
      }
    };

    let frameHandle = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = reducedMotionRef.current
        ? 0
        : Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const introOpacity = Math.max(0, Math.min(1, 1 - (progress - 0.28) / 0.29));
      const bridgeOpacity = Math.max(0, Math.min(1, (progress - 0.5) / 0.24));
      const targetFrame = Math.min(
        FRAME_COUNT - 1,
        Math.round(progress * (FRAME_COUNT - 1))
      );

      frameRef.current = targetFrame;
      section.style.setProperty("--sequence-progress", progress.toFixed(4));
      section.style.setProperty("--intro-opacity", introOpacity.toFixed(4));
      section.style.setProperty("--bridge-opacity", bridgeOpacity.toFixed(4));

      primeFrames(targetFrame);
      drawFrame(targetFrame);
      frameHandle = 0;
    };

    const requestUpdate = () => {
      if (frameHandle) {
        return;
      }

      frameHandle = window.requestAnimationFrame(update);
    };

    setCanvasSize();
    loadFrame(0);
    primeFrames(0);
    requestUpdate();

    const handleResize = () => {
      setCanvasSize();
      requestUpdate();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      if (frameHandle) {
        window.cancelAnimationFrame(frameHandle);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="parallax-hero" ref={sectionRef}>
      <div className="parallax-hero-sticky">
        <canvas
          aria-label={bridgeCopy.canvasAlt}
          className="parallax-canvas"
          ref={canvasRef}
        />
        <div className="parallax-sheen" aria-hidden="true" />
        <div className="parallax-grid" aria-hidden="true" />

        <div className="shell parallax-overlay">
          {cloodyBadge && (
            <Link className="parallax-cloody-badge" href={cloodyBadge.href}>
              <svg
                aria-hidden="true"
                className="parallax-cloody-badge-icon"
                fill="none"
                viewBox="0 0 56 56"
              >
                {/* Stylised Africa silhouette */}
                <path
                  d="M28 6c-2.2 1-4.8 2.8-6.4 5.6-1.2 2.2-1.6 4-2.8 6.8-.8 1.8-2.4 3.6-3.6 6-.8 1.6-1.2 3.6-.8 6 .4 2.8 1.6 5.2 3.2 7.2 1.6 2 3.2 3.6 4.4 5.6 1 1.6 1.6 3.2 2.4 4.8.4.8 1.2 2 2 2.4.8.4 1.6-.4 2.4-1.2 1.2-1.2 2-2.8 2.8-4.4.8-1.6 2-3.2 3.2-5.2 1.6-2.4 2.4-4.4 2.8-7.2.4-2 .4-4.4-.4-6.4-1.2-2.8-2-4.8-2.8-7.2-1-2.8-1.6-5.2-3.2-7.6C30.2 8.8 29.2 7 28 6Z"
                  fill="oklch(0.62 0.16 53 / 0.25)"
                  stroke="oklch(0.62 0.16 53 / 0.7)"
                  strokeWidth="1"
                />
                {/* Trade route nodes */}
                <circle cx="26" cy="20" fill="oklch(0.82 0.12 53)" r="2" />
                <circle cx="30" cy="32" fill="oklch(0.82 0.12 53)" r="2" />
                <circle cx="24" cy="38" fill="oklch(0.82 0.12 53)" r="1.5" />
                {/* Connection lines between nodes */}
                <line
                  stroke="oklch(0.82 0.12 53 / 0.5)"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                  x1="26" x2="30" y1="22" y2="30"
                />
                <line
                  stroke="oklch(0.82 0.12 53 / 0.5)"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                  x1="29" x2="25" y1="34" y2="37"
                />
                {/* Outgoing trade lines to edges */}
                <line
                  opacity="0.3"
                  stroke="oklch(0.9 0.06 53)"
                  strokeDasharray="3 3"
                  strokeWidth="0.8"
                  x1="26" x2="10" y1="20" y2="14"
                />
                <line
                  opacity="0.3"
                  stroke="oklch(0.9 0.06 53)"
                  strokeDasharray="3 3"
                  strokeWidth="0.8"
                  x1="30" x2="46" y1="32" y2="28"
                />
              </svg>
              <div className="parallax-cloody-badge-copy">
                <span>{cloodyBadge.kicker}</span>
                <strong>Cloody</strong>
                <em>{cloodyBadge.tagline}</em>
                <p className="parallax-cloody-badge-live">
                  <span aria-hidden="true" />
                  In Entwicklung
                </p>
              </div>
            </Link>
          )}

          <div className="parallax-copy">
            <div className="parallax-intro">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>

              <div className="hero-actions">
                <Link className="button" href={content.hero.primaryCta.href}>
                  {content.hero.primaryCta.label}
                </Link>
                <Link className="button button-secondary" href={content.hero.secondaryCta.href}>
                  {content.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="parallax-bridge">
              <span className="parallax-bridge-kicker">{bridgeCopy.kicker}</span>
              <p>{bridgeCopy.text}</p>
              <div className="parallax-bridge-route">
                <strong>{bridgeCopy.from}</strong>
                <span className="parallax-bridge-line parallax-bridge-line-static" aria-hidden="true" />
                <span className="parallax-bridge-logo">
                  <Image alt="SIFK GmbH" height={400} src="/logo-horizontal-lg.png" width={1200} />
                </span>
                <span className="parallax-bridge-line" aria-hidden="true" />
                <strong>{bridgeCopy.to}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
