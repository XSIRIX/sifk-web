"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type StoryScrollProps = {
  eyebrow: string;
  quote: string;
  points: string[];
};

export function StoryScroll({ eyebrow, quote, points }: StoryScrollProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => [quote, ...points], [points, quote]);
  const slideImages = [
    {
      alt: "Stilisierte Karte von Afrika",
      src: "/homepage/africa-map.png"
    },
    {
      alt: "Wachstumsvisualisierung",
      src: "/homepage/growth.png"
    },
    ...points.slice(1).map(() => ({
      alt: "Partnerschaftsvisualisierung",
      src: "/homepage/partnership.png"
    }))
  ];
  const sideImage = slideImages[Math.min(activeIndex, slideImages.length - 1)];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameHandle = 0;

    const update = () => {
      frameHandle = 0;

      if (reducedMotion.matches) {
        setActiveIndex(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const nextIndex = Math.min(slides.length - 1, Math.round(progress * (slides.length - 1)));

      section.style.setProperty("--story-progress", progress.toFixed(4));
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frameHandle) {
        return;
      }

      frameHandle = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      if (frameHandle) {
        window.cancelAnimationFrame(frameHandle);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, [slides.length]);

  return (
    <section
      className="story-section story-scroll-section"
      ref={sectionRef}
      style={{ ["--story-steps" as string]: slides.length }}
    >
      <div className="story-scroll-sticky">
        <div className="shell story-grid story-scroll-grid">
          <div className="story-scroll-copy">
            <p className="eyebrow">{eyebrow}</p>
            <div className="story-copy-stage" aria-live="polite">
              {slides.map((slide, index) => (
                <h2
                  aria-hidden={activeIndex !== index}
                  className={`story-copy-slide${activeIndex === index ? " is-active" : ""}`}
                  key={slide}
                >
                  {slide}
                </h2>
              ))}
            </div>
          </div>

          <div className="story-scroll-side">
            <Image
              alt={sideImage.alt}
              className="story-point-image story-point-image-animated"
              height={1920}
              key={`${sideImage.src}-${activeIndex}`}
              sizes="(max-width: 1100px) min(100vw - 2rem, 28rem), 24rem"
              src={sideImage.src}
              width={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
