"use client";

import { useEffect, useRef } from "react";

import { WeaveMark } from "@/components/weave-mark";
import type { Locale } from "@/lib/locale-routing";
import { getContent } from "@/lib/content";

const FRAME_COUNT = 143;
// Landscape screens get 2048px frames; portrait phones get a 900x1600 centre crop.
const frameUrl = (index: number, portrait: boolean) =>
  `/film/${portrait ? "m/" : ""}f${String(index + 1).padStart(3, "0")}.webp`;
const KEEP_RADIUS = 20;
const EVICT_RADIUS = 48;

type Frame = { image: HTMLImageElement; ready: boolean };

export function BridgeFilm({ locale }: { locale: Locale }) {
  const copy = getContent(locale).home.bridge;
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.still = "true";
      return;
    }

    const cache = new Map<number, Frame>();
    const portraitQuery = window.matchMedia("(max-aspect-ratio: 4/5)");
    let portrait = portraitQuery.matches;
    let current = 0;
    let drawn = -1;
    let active = false;
    let rafHandle = 0;

    const sizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      drawn = -1;
    };

    const draw = (index: number) => {
      let frame = cache.get(index);
      let found = index;

      if (!frame?.ready) {
        for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
          const before = cache.get(index - distance);
          if (before?.ready) {
            frame = before;
            found = index - distance;
            break;
          }
          const after = cache.get(index + distance);
          if (after?.ready) {
            frame = after;
            found = index + distance;
            break;
          }
        }
      }

      if (!frame?.ready || found === drawn) {
        return;
      }

      const { width, height } = canvas;
      const image = frame.image;
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;

      context.drawImage(image, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
      drawn = found;
      section.dataset.ready = "true";
    };

    const load = (index: number) => {
      if (index < 0 || index >= FRAME_COUNT || cache.has(index)) {
        return;
      }

      const image = new Image();
      const frame: Frame = { image, ready: false };
      image.src = frameUrl(index, portrait);
      cache.set(index, frame);
      image
        .decode()
        .then(() => {
          frame.ready = true;
          if (Math.abs(index - current) <= 2 || drawn === -1) {
            draw(current);
          }
        })
        .catch(() => cache.delete(index));
    };

    const prime = (center: number) => {
      for (let offset = 0; offset <= KEEP_RADIUS; offset += 1) {
        load(center + offset);
        load(center - offset);
      }

      cache.forEach((_, index) => {
        if (Math.abs(index - center) > EVICT_RADIUS) {
          cache.delete(index);
        }
      });
    };

    const update = () => {
      rafHandle = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      current = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)));
      section.style.setProperty("--p", progress.toFixed(4));
      prime(current);
      draw(current);
    };

    const requestUpdate = () => {
      if (active && !rafHandle) {
        rafHandle = requestAnimationFrame(update);
      }
    };

    // Only load and listen while the film is near the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          sizeCanvas();
          requestUpdate();
        }
      },
      { rootMargin: "100% 0px" }
    );

    const handleResize = () => {
      if (portraitQuery.matches !== portrait) {
        portrait = portraitQuery.matches;
        cache.clear();
      }
      sizeCanvas();
      requestUpdate();
    };

    observer.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      if (rafHandle) {
        cancelAnimationFrame(rafHandle);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
      cache.clear();
    };
  }, []);

  return (
    <section aria-label={copy.statement} className="bridge" data-tone="dark" ref={sectionRef}>
      <div className="bridge-sticky">
        <canvas aria-label={copy.canvasLabel} className="bridge-canvas" ref={canvasRef} role="img" />
        <div aria-hidden="true" className="bridge-shade" />

        <p aria-hidden="true" className="bridge-caption bridge-caption-start">
          {copy.startCaption}
        </p>
        <p aria-hidden="true" className="bridge-caption bridge-caption-end">
          {copy.endCaption}
        </p>

        <div className="shell bridge-copy">
          <p className="bridge-statement">{copy.statement}</p>
          <div aria-hidden="true" className="bridge-route">
            <span>{copy.from}</span>
            <i className="bridge-line bridge-line-from" />
            <WeaveMark className="bridge-mark" />
            <i className="bridge-line bridge-line-to" />
            <span>{copy.to}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
