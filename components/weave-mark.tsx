"use client";

import { useEffect, useId, useRef } from "react";

type WeaveMarkProps = {
  className?: string;
  /** "mount" weaves once on load, "view" weaves once when scrolled into view. */
  weave?: "mount" | "view" | false;
  delay?: number;
};

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

function weaveParts(svg: SVGSVGElement, delay: number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parts = Array.from(svg.querySelectorAll<SVGGraphicsElement>(".h rect, .v rect, path.s")).map((el) => {
    const box = el.getBBox();
    const kind = el.closest(".h") ? "h" : el.closest(".v") ? "v" : "s";
    return { el, kind, key: box.y * 0.9 + box.x * 0.55 };
  });

  parts.sort((a, b) => a.key - b.key);
  parts.forEach((part, index) => {
    part.el.getAnimations().forEach((animation) => animation.cancel());

    if (reduce) {
      part.el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, delay, easing: "ease", fill: "backwards" });
      return;
    }

    const from =
      part.kind === "h" ? "scaleX(0.001)" : part.kind === "v" ? "scaleY(0.001)" : "translateY(10px)";
    const keyframes =
      part.kind === "s"
        ? [{ transform: from, opacity: 0 }, { transform: "none", opacity: 1 }]
        : [{ transform: from }, { transform: "none" }];

    part.el.animate(keyframes, {
      duration: part.kind === "s" ? 420 : 560,
      delay: delay + index * 36,
      easing: EASE_OUT,
      fill: "backwards"
    });
  });
}

export function WeaveMark({ className = "", weave = false, delay = 0 }: WeaveMarkProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `${name}-${uid}`;
  const url = (name: string) => `url(#${id(name)})`;

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg || !weave || typeof svg.animate !== "function") {
      return;
    }

    if (weave === "mount") {
      weaveParts(svg, delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          weaveParts(svg, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, [weave, delay]);

  return (
    <svg
      aria-hidden="true"
      className={`weave-mark ${className}`}
      focusable="false"
      ref={svgRef}
      viewBox="200 126 606 656"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id("gV")} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8CC21C" />
          <stop offset="1" stopColor="#1D6E22" />
        </linearGradient>
        <linearGradient id={id("gR")} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#E03B03" />
          <stop offset="1" stopColor="#EE6A05" />
        </linearGradient>
        <linearGradient id={id("gG")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#F59A05" />
          <stop offset="1" stopColor="#FDB600" />
        </linearGradient>
        <linearGradient id={id("gH")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7CB416" />
          <stop offset="1" stopColor="#1D6E22" />
        </linearGradient>
        <linearGradient id={id("gO")} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F7A302" />
          <stop offset="1" stopColor="#EC7A06" />
        </linearGradient>
      </defs>
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
      </g>
      <g className="v" fill={url("gR")}>
        <rect height="144" width="22" x="388" y="306" />
        <rect height="144" width="24" x="433" y="306" />
      </g>
      <g className="v" fill="#E03B03">
        <rect height="143" width="24" x="527" y="187" />
        <rect height="143" width="23" x="575" y="187" />
      </g>
      <path className="s" d="M621 200 L640 203 L655 222 L651 240 L705 330 L621 330 Z" fill={url("gO")} />
      <g className="h">
        <rect fill="#E03B03" height="25" width="152" x="210" y="355" />
        <rect fill={url("gG")} height="24" width="119" x="243" y="403" />
        <rect fill="#FDB600" height="25" width="270" x="482" y="355" />
        <rect fill="#FDB600" height="24" width="314" x="482" y="403" />
      </g>
      <path className="s" d="M458 452 L505 452 L505 712 L494 700 L481 642 L470 612 L487 582 L472 522 L461 482 Z" fill={url("gO")} />
      <g className="v" fill={url("gV")}>
        <rect height="320" width="24" x="527" y="452" />
        <rect height="320" width="23" x="575" y="452" />
      </g>
      <g className="h" fill={url("gH")}>
        <rect height="24" width="141" x="621" y="452" />
        <rect height="24" width="114" x="621" y="498" />
      </g>
      <path className="s" d="M621 545 L701 545 L705 582 L712 622 L700 642 L660 672 L656 702 L621 740 Z" fill="#1F7A26" />
    </svg>
  );
}
