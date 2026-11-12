"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { flowTop } from "@/components/motion-root";

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>(".site-header");

  return (header?.offsetHeight ?? 72) + 24;
}

function scrollToHashTarget() {
  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));

  if (!target) {
    return;
  }

  // A whole chapter lands flush with the top; anything smaller clears the header.
  const offset = target.matches("section, .sheet") ? 0 : getHeaderOffset();
  const top = Math.max(0, flowTop(target) - offset);

  window.scrollTo({
    top,
    behavior: "auto"
  });
}

export function HashScrollController() {
  const pathname = usePathname();

  useEffect(() => {
    const syncHashScroll = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToHashTarget);
      });
    };

    syncHashScroll();
    window.addEventListener("hashchange", syncHashScroll);

    return () => {
      window.removeEventListener("hashchange", syncHashScroll);
    };
  }, [pathname]);

  return null;
}
