"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function getHeaderOffset() {
  const rootStyles = window.getComputedStyle(document.documentElement);
  const headerOffset = Number.parseFloat(rootStyles.getPropertyValue("--header-offset"));

  return Number.isFinite(headerOffset) ? headerOffset + 240 : 336;
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

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getHeaderOffset());

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
