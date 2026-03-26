"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HERO_THEME_COLOR = "#0f171d";
const DEFAULT_THEME_COLOR = "#f6f1e7";

function setThemeColor(color: string) {
  let meta = document.querySelector('meta[name="theme-color"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }

  if (meta.getAttribute("content") !== color) {
    meta.setAttribute("content", color);
  }
}

export function ThemeColorController() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setThemeColor(DEFAULT_THEME_COLOR);
      return;
    }

    const hero = document.querySelector<HTMLElement>(".parallax-hero");

    if (!hero) {
      setThemeColor(DEFAULT_THEME_COLOR);
      return;
    }

    let frame = 0;

    const updateThemeColor = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const nextColor = heroBottom > 0 ? HERO_THEME_COLOR : DEFAULT_THEME_COLOR;
      setThemeColor(nextColor);
      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateThemeColor);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      setThemeColor(DEFAULT_THEME_COLOR);
    };
  }, [pathname]);

  return null;
}
