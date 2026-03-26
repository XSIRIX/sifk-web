"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Reveal } from "@/components/reveal";
import type { Pillar } from "@/lib/site-content";

const PILLAR_IMAGE_BY_ID: Record<string, string> = {
  "internationale-geschaeftsentwicklung": "/homepage/home-pillar-international.png",
  "energieberatung-deutschland": "/homepage/home-pillar-energy.png"
};

const MAX_SCROLL_OFFSET = 44;
const MAX_POINTER_OFFSET = 22;

type PillarCardsProps = {
  pillars: Pillar[];
  linkLabel?: string;
};

export function PillarCards({ pillars, linkLabel = "Mehr erfahren" }: PillarCardsProps) {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotionRef = useRef(true);
  const finePointerRef = useRef(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const syncPreferences = () => {
      reducedMotionRef.current = reducedMotionQuery.matches;
      finePointerRef.current = finePointerQuery.matches;

      if (reducedMotionRef.current) {
        cardRefs.current.forEach((card) => {
          card?.style.setProperty("--pillar-scroll-shift", "0px");
          card?.style.setProperty("--pillar-pointer-x", "0px");
          card?.style.setProperty("--pillar-pointer-y", "0px");
        });
      }
    };

    syncPreferences();

    let frameHandle = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      cardRefs.current.forEach((card) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (cardCenter - viewportHeight / 2) / (viewportHeight / 2)));
        const offset = reducedMotionRef.current ? 0 : progress * -MAX_SCROLL_OFFSET;

        card.style.setProperty("--pillar-scroll-shift", `${offset.toFixed(2)}px`);
      });

      frameHandle = 0;
    };

    const requestUpdate = () => {
      if (frameHandle) {
        return;
      }

      frameHandle = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotionQuery.addEventListener("change", syncPreferences);
    reducedMotionQuery.addEventListener("change", requestUpdate);
    finePointerQuery.addEventListener("change", syncPreferences);

    return () => {
      if (frameHandle) {
        window.cancelAnimationFrame(frameHandle);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotionQuery.removeEventListener("change", syncPreferences);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      finePointerQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  return (
    <div className="pillar-grid">
      {pillars.map((pillar, index) => {
        const imageSrc = PILLAR_IMAGE_BY_ID[pillar.id];

        return (
          <Reveal delay={index * 120} key={pillar.id}>
            <article
              className={`pillar-card pillar-${pillar.accent}`}
              id={pillar.id}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty("--pillar-pointer-x", "0px");
                event.currentTarget.style.setProperty("--pillar-pointer-y", "0px");
              }}
              onPointerMove={(event) => {
                if (reducedMotionRef.current || !finePointerRef.current) {
                  return;
                }

                const bounds = event.currentTarget.getBoundingClientRect();
                const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * MAX_POINTER_OFFSET * 2;
                const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * MAX_POINTER_OFFSET * 2;

                event.currentTarget.style.setProperty("--pillar-pointer-x", `${offsetX.toFixed(2)}px`);
                event.currentTarget.style.setProperty("--pillar-pointer-y", `${offsetY.toFixed(2)}px`);
              }}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
            >
              <div className="pillar-visual" aria-hidden="true">
                {imageSrc ? (
                  <Image
                    alt=""
                    className="pillar-visual-image"
                    fill
                    sizes="(max-width: 980px) 100vw, 40vw"
                    src={imageSrc}
                  />
                ) : null}
                <span>{pillar.shortTitle}</span>
              </div>

              <div className="pillar-content">
                <h3>{pillar.title}</h3>
                <p className="pillar-lead">{pillar.lead}</p>
                <p>{pillar.description}</p>

                <ul className="detail-list">
                  {pillar.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>

                <Link className="text-link" href={pillar.href}>
                  {linkLabel}
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
