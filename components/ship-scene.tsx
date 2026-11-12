"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { useRef } from "react";

import { ArrowIcon } from "@/components/icons";
import { MOTION_QUERY, flowTop } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type ShipSceneProps = {
  /** The page's own headline on the Cloody page, a chapter headline on the home page. */
  as?: "h1" | "h2";
  title: string;
  tag: string;
  text: string;
  alt: string;
  link?: { href: string; label: string };
  top?: boolean;
  id?: string;
};

/**
 * The container ship. When its chapter arrives it sails in from the left edge
 * of the screen; only once it is in place do the words come up. After that it
 * rides gently, and keeps drifting to the right while the page scrolls on.
 */
export function ShipScene({ as: Heading = "h2", title, tag, text, alt, link, top = false, id }: ShipSceneProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      const ship = el?.querySelector<HTMLElement>(".ship-art");
      const heading = el?.querySelector<HTMLElement>(".ship-title");
      if (!el || !ship || !heading) return;

      const mm = gsap.matchMedia();

      mm.add(MOTION_QUERY, () => {
        const side = gsap.utils.toArray<HTMLElement>(".ship-side > *");
        let arrived = false;

        const split = SplitText.create(heading, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            // Lines are cut again when the fonts land: keep whatever state they had.
            gsap.set(self.lines, { yPercent: arrived ? 0 : 130 });
          }
        });

        gsap.set(side, { autoAlpha: 0, y: 28 });

        const sail = gsap
          .timeline({ paused: true })
          .fromTo(
            ship,
            { x: () => -(window.innerWidth * 1.08) },
            { x: 0, duration: 2.6, ease: "power3.out", immediateRender: true },
            0
          )
          .call(
            () => {
              arrived = true;
              gsap.to(split.lines, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 });
            },
            [],
            1.15
          )
          .to(side, { autoAlpha: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.1 }, 1.45)
          // In port it rides on the swell.
          .to(ship, { y: -10, rotation: 0.35, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 }, 2.6);

        const arrive = ScrollTrigger.create({
          trigger: el,
          start: () => flowTop(el) - window.innerHeight * 0.5,
          once: true,
          onEnter: () => sail.play()
        });

        // The scroll keeps it under way, left to right.
        const drift = gsap.fromTo(
          ship,
          { xPercent: -3 },
          {
            xPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: () => flowTop(el) - window.innerHeight,
              end: () => flowTop(el) + el.offsetHeight,
              scrub: true
            }
          }
        );

        return () => {
          arrive.kill();
          drift.scrollTrigger?.kill();
          drift.kill();
          sail.kill();
          split.revert();
          gsap.set([ship, ...side], { clearProps: "all" });
        };
      });
    },
    { scope: root }
  );

  return (
    <section className={`ship sheet field f-ink${top ? " is-top" : ""}`} id={id} ref={root}>
      <div className="shell">
        <img
          alt={alt}
          className="ship-art"
          decoding="async"
          fetchPriority={top ? "high" : undefined}
          height={1011}
          loading={top ? undefined : "lazy"}
          src="/world/cloody.webp"
          width={1800}
        />
        <div className="grid ship-copy">
          <Heading className="mega ship-title">{title}</Heading>
          <div className="ship-side">
            <span className="tag">{tag}</span>
            <p className="copy">{text}</p>
            {link ? (
              <Link className="btn" href={link.href}>
                {link.label}
                <ArrowIcon />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
