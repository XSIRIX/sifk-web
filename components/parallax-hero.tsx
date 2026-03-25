"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { homeContent } from "@/lib/site-content";

const FRAME_COUNT = 143;
const FRAME_URLS = Array.from(
  { length: FRAME_COUNT },
  (_, index) => `/parallax/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
);

const PRELOAD_RADIUS = 10;

export function ParallaxHero() {
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
      const introOpacity = Math.max(0, Math.min(1, 1 - (progress - 0.34) / 0.29));
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
          aria-label="Frankfurt skyline transitioning toward Cape Town"
          className="parallax-canvas"
          ref={canvasRef}
        />
        <div className="parallax-sheen" aria-hidden="true" />
        <div className="parallax-grid" aria-hidden="true" />

        <div className="shell parallax-overlay">
          <div className="parallax-copy">
            <div className="parallax-intro">
              <p className="eyebrow">{homeContent.hero.eyebrow}</p>
              <h1>{homeContent.hero.title}</h1>

              <div className="hero-actions">
                <Link className="button" href={homeContent.hero.primaryCta.href}>
                  {homeContent.hero.primaryCta.label}
                </Link>
                <Link className="button button-secondary" href={homeContent.hero.secondaryCta.href}>
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="parallax-bridge">
              <span className="parallax-bridge-kicker">Deutschland nach Afrika</span>
              <p>Wir setzen die Brücke von Deutschland nach Afrika.</p>
              <div className="parallax-bridge-route">
                <strong>Deutschland</strong>
                <span />
                <strong>Afrika</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
