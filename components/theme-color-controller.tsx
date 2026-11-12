"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LIGHT = "#F6F5F1";
const DARK = "#0F0E0E";

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

// Browser chrome follows the section at the top of the screen.
export function ThemeColorController() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const overDark = Array.from(document.querySelectorAll<HTMLElement>('[data-tone="dark"]')).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 1 && rect.bottom > 1;
      });
      setThemeColor(overDark ? DARK : LIGHT);
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [pathname]);

  return null;
}
