"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

import { MOTION_QUERY, STACK_QUERY, flowTop } from "@/components/motion-root";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type WeaveSceneProps = {
  children: ReactNode;
  markAlt: string;
  germany: string;
  africa: string;
  field?: string;
};

/**
 * The logo, drawn bar by bar, beside the sentence it stands for. Scrolling
 * weaves it: the horizontal bands (Germany) fly in from the left and right
 * edges of the screen, the vertical bands (Africa) from the bottom and, where
 * the sentence stands beside the mark, from the top as well.
 * Until the scroll reaches the scene every band waits outside the screen.
 */
export function WeaveScene({ children, markAlt, germany, africa, field = "f-white" }: WeaveSceneProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const el = root.current;
      const stage = el?.querySelector<HTMLElement>(".weave-stage");
      const art = el?.querySelector<HTMLElement>(".weave-art");
      const mark = el?.querySelector<SVGSVGElement>(".weave-mark");
      if (!el || !stage || !art || !mark) return;

      const weft = gsap.utils.toArray<SVGGraphicsElement>(".weave-mark .h rect");
      const warp = gsap.utils.toArray<SVGGraphicsElement>(".weave-mark .v rect");
      const coast = gsap.utils.toArray<SVGGraphicsElement>(".weave-mark .s");

      // Where a band sits on the stage once it is woven in, in screen pixels.
      // Read from the drawing itself, so it does not matter where the band is now.
      const place = (band: SVGGraphicsElement) => {
        const box = band.getBBox();
        const frame = mark.getBoundingClientRect();
        const base = stage.getBoundingClientRect();
        const unit = frame.width / 606 || 1;
        const left = frame.left - base.left + (box.x - 200) * unit;
        const top = frame.top - base.top + (box.y - 126) * unit;
        return { unit, left, top, right: left + box.width * unit, bottom: top + box.height * unit, wide: base.width, tall: base.height };
      };

      const fromSide = (band: SVGGraphicsElement, index: number) => {
        const at = place(band);
        return (index % 2 ? at.wide - at.left + 48 : -(at.right + 48)) / at.unit;
      };
      // On small screens the sentence stands above the mark, so nothing comes down through it.
      const fromEnd = (band: SVGGraphicsElement, index: number, fromTop: boolean) => {
        const at = place(band);
        return (fromTop && index % 3 === 2 ? -(at.bottom + 48) : at.tall - at.top + 48) / at.unit;
      };

      const build = (fromTop: boolean) =>
        gsap
          .timeline({ paused: true, defaults: { ease: "power3.out", immediateRender: true } })
          .fromTo(weft, { x: (index: number, band: SVGGraphicsElement) => fromSide(band, index) }, { x: 0, duration: 1, stagger: 0.1 }, 0)
          .fromTo(warp, { y: (index: number, band: SVGGraphicsElement) => fromEnd(band, index, fromTop) }, { y: 0, duration: 1, stagger: 0.06 }, 0.15)
          .fromTo(
            coast,
            { scale: 0, transformOrigin: "50% 50%" },
            { scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.6)" },
            1.5
          )
          .to({}, { duration: 0.3 });

      // Wide screens: the scene is pinned and the scroll is the shuttle.
      mm.add(STACK_QUERY, () => {
        const timeline = build(true).progress(0);
        const glide = (progress: number) =>
          gsap.to(timeline, { progress, duration: 0.6, ease: "power2.out", overwrite: true });
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: () => flowTop(el) - window.innerHeight * 0.12,
          end: () => flowTop(el) + (el.offsetHeight - window.innerHeight) * 0.86,
          onUpdate: (self) => glide(self.progress),
          onRefresh: (self) => {
            // A resize moves the edges of the screen: measure the flight again.
            gsap.killTweensOf(timeline);
            timeline.invalidate().progress(self.progress);
          }
        });
        return () => {
          trigger.kill();
          gsap.killTweensOf(timeline);
          timeline.progress(1).kill();
        };
      });

      // Small screens: no scroll-driven weaving and no GSAP. CSS transitions bring the
      // bands in from the screen edges when the mark scrolls in, and send them back
      // out when it is scrolled away again.
      mm.add(`${MOTION_QUERY} and (max-width: 1088px)`, () => {
        const bands = [...weft, ...warp, ...coast];
        const measure = () => {
          weft.forEach((band, index) => {
            band.style.setProperty("--from", `translateX(${fromSide(band, index)}px)`);
            band.style.setProperty("--wait", `${index * 0.08}s`);
          });
          warp.forEach((band, index) => {
            band.style.setProperty("--from", `translateY(${fromEnd(band, index, false)}px)`);
            band.style.setProperty("--wait", `${0.12 + index * 0.05}s`);
          });
          coast.forEach((band, index) => {
            band.style.setProperty("--from", "scale(0)");
            band.style.setProperty("--wait", `${1 + index * 0.1}s`);
          });
        };
        measure();
        el.classList.add("is-loose");
        // Only once the bands are parked outside may they start to move.
        const ready = window.requestAnimationFrame(() => el.classList.add("is-ready"));

        const watch = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) el.classList.add("is-woven");
            // Gone below the screen again: the reader scrolled back up.
            else if (entry.boundingClientRect.top > 0) el.classList.remove("is-woven");
          },
          { threshold: 0.3 }
        );
        watch.observe(art);
        window.addEventListener("resize", measure);

        return () => {
          window.cancelAnimationFrame(ready);
          watch.disconnect();
          window.removeEventListener("resize", measure);
          el.classList.remove("is-loose", "is-ready", "is-woven");
          bands.forEach((band) => {
            band.style.removeProperty("--from");
            band.style.removeProperty("--wait");
          });
        };
      });
    },
    { scope: root }
  );

  return (
    <section className={`weave-wrap sheet field ${field}`} ref={root}>
      <div className="weave-stage">
        <div className="weave-text">
          {children}
          <p className="weave-legend">
            <span className="is-h">
              <i />
              {germany}
            </span>
            <span className="is-v">
              <i />
              {africa}
            </span>
          </p>
        </div>

        <div className="weave-art">
          <svg aria-label={markAlt} className="weave-mark" role="img" viewBox="200 126 606 656">
            <g className="v">
              <rect className="k" height="88" width="23" x="245" y="242" />
              <rect className="k" height="140" width="24" x="292" y="190" />
              <rect className="k" height="23" width="24" x="338" y="162" />
              <rect className="k" height="49" width="22" x="388" y="136" />
              <rect className="k" height="49" width="24" x="433" y="136" />
            </g>
            <g className="h">
              <rect className="k" height="23" width="163" x="340" y="210" />
              <rect fill="#E03B03" height="24" width="163" x="340" y="258" />
            </g>
            <g className="v" fill="#E03B03">
              <rect height="24" width="22" x="340" y="306" />
              <rect height="24" width="23" x="480" y="306" />
              <rect height="144" width="22" x="388" y="306" />
              <rect height="144" width="24" x="433" y="306" />
              <rect height="143" width="24" x="527" y="187" />
              <rect height="143" width="23" x="575" y="187" />
            </g>
            <path className="s" d="M621 200 L640 203 L655 222 L651 240 L705 330 L621 330 Z" fill="#F59A05" />
            <g className="h">
              <rect fill="#E03B03" height="25" width="152" x="210" y="355" />
              <rect fill="#F59A05" height="24" width="119" x="243" y="403" />
              <rect fill="#FDB600" height="25" width="270" x="482" y="355" />
              <rect fill="#FDB600" height="24" width="314" x="482" y="403" />
            </g>
            <path
              className="s"
              d="M458 452 L505 452 L505 712 L494 700 L481 642 L470 612 L487 582 L472 522 L461 482 Z"
              fill="#F59A05"
            />
            <g className="v" fill="#7CB416">
              <rect height="320" width="24" x="527" y="452" />
              <rect height="320" width="23" x="575" y="452" />
            </g>
            <g className="h" fill="#1F7A26">
              <rect height="24" width="141" x="621" y="452" />
              <rect height="24" width="114" x="621" y="498" />
            </g>
            <path
              className="s"
              d="M621 545 L701 545 L705 582 L712 622 L700 642 L660 672 L656 702 L621 740 Z"
              fill="#1F7A26"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
