"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, autoRaf: true, smoothWheel: true, syncTouch: false });
    const root = document.documentElement;

    // Freeze page scroll while the mobile menu is open.
    const observer = new MutationObserver(() => {
      if (root.dataset.menu === "open") {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-menu"] });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
