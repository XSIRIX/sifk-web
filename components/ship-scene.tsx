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
 * The container ship. When its chapter arrives it lies at the left edge of the
 * screen; scrolling sails it to the right, slightly downhill. The words come up on arrival. After that it
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

        // The words come up once, when the chapter arrives.
        const words = gsap
          .timeline({ paused: true })
          .call(() => {
            arrived = true;
            gsap.to(split.lines, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 });
          })
          .to(side, { autoAlpha: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.1 }, 0.3);

        const arrive = ScrollTrigger.create({
          trigger: el,
          start: () => flowTop(el) - window.innerHeight * 0.5,
          once: true,
          onEnter: () => words.play()
        });

        const fromEdge = { x: () => -(window.innerWidth * 0.2), y: () => -(window.innerWidth * 0.06) };

        // On its own page there is no scroll yet: the ship comes in by itself, from the
        // left edge along its heading. Scrolling then carries it a little further.
        // On the home page the scroll sails the whole trip.
        let sail: gsap.core.Animation;
        let onward: gsap.core.Animation | null = null;

        if (top) {
          sail = gsap.fromTo(
            ship,
            { ...fromEdge, autoAlpha: 0 },
            { x: 0, y: 0, autoAlpha: 1, duration: 3.2, ease: "power2.out", immediateRender: true, delay: 0.15 }
          );
          // xPercent / yPercent so the scroll never fights the entrance.
          onward = gsap.fromTo(
            ship,
            { xPercent: 0, yPercent: 0 },
            {
              xPercent: 105,
              yPercent: 56,
              ease: "power1.in",
              scrollTrigger: { trigger: el, start: 0, end: () => el.offsetHeight, scrub: 0.6 }
            }
          );
        } else {
          // No hold and no empty stretch. Coming in, the scroll brings the ship from the
          // left edge. Once the chapter stands still, the closing band slides over it,
          // and over exactly that stretch the ship sails out on the right.
          const stacked = () => document.documentElement.classList.contains("stack");
          const enter = () => flowTop(el) - window.innerHeight * 0.85;
          // Where the chapter comes to rest: its lower edge on the lower edge of the screen.
          const holdStart = () => flowTop(el) + (stacked() ? Math.max(0, el.offsetHeight - window.innerHeight) : 0);
          // The closing band and the footer behind it cover the chapter over one screen of scroll.
          const cover = () => (stacked() ? window.innerHeight : 0);

          // One even run: every bit of scroll moves the ship the same distance. It comes
          // in over the left edge of the screen when the chapter arrives and has left
          // over the right edge by the time the closing band has covered it.
          const HEADING = 0.12;
          const whole = () => window.innerWidth * 1.03;
          const tail = () => cover() * 0.7 || el.offsetHeight * 0.8;

          sail = gsap.fromTo(
            ship,
            { x: () => -whole(), y: () => -whole() * HEADING },
            {
              x: () => whole(),
              y: () => whole() * HEADING,
              ease: "none",
              immediateRender: true,
              scrollTrigger: {
                trigger: el,
                start: enter,
                end: () => holdStart() + tail(),
                scrub: 0.3,
                invalidateOnRefresh: true
              }
            }
          );
        }

        return () => {
          arrive.kill();
          sail.scrollTrigger?.kill();
          sail.kill();
          onward?.scrollTrigger?.kill();
          onward?.kill();
          words.kill();
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
