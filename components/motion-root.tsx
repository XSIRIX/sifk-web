"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export const STACK_QUERY = "(min-width: 1089px) and (prefers-reduced-motion: no-preference)";
export const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Where an element sits in the page when nothing is stuck. A stuck sheet
 * reports its stuck position, so its place is summed from the sheets before it.
 */
export function flowTop(el: HTMLElement): number {
  const sheet = el.closest<HTMLElement>(".sheet");
  const parent = sheet?.parentElement;
  if (!sheet || !parent || !document.documentElement.classList.contains("stack")) {
    return el.getBoundingClientRect().top + window.scrollY;
  }
  let top = parent.getBoundingClientRect().top + window.scrollY;
  for (let node = parent.firstElementChild; node && node !== sheet; node = node.nextElementSibling) {
    top += (node as HTMLElement).offsetHeight;
  }
  return top + (el === sheet ? 0 : el.getBoundingClientRect().top - sheet.getBoundingClientRect().top);
}

/**
 * One motion layer for every page. Server-rendered markup opts in with data
 * attributes, so the text stays in the HTML and nothing depends on script to exist:
 *   data-split         headline lines rise out of a mask
 *   data-rv            the element rises in; data-rv="kids" staggers its children,
 *                      data-rv="weft" shoots its children in from the left
 *   data-shift="n"     slides n percent sideways while its section crosses the screen
 *   data-grow          a ribbon bar draws in along its length
 *   data-parallax="n"  drifts n percent while its section crosses the screen
 *   data-count         counts up to its number
 *   .sheet             chapters stack like sheets of cloth (wide screens)
 */
export function MotionRoot() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const lastPath = useRef<string | null>(null);
  const viaHistory = useRef(false);

  // A new page starts at its top. The first chapter of every page is a stuck
  // sheet, which the router leaves alone, so the page is put there by hand.
  // Back and forward keep the place the browser remembers.
  useEffect(() => {
    const onPop = () => {
      viaHistory.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useIsoLayoutEffect(() => {
    const previous = lastPath.current;
    lastPath.current = pathname;
    const back = viaHistory.current;
    viaHistory.current = false;
    if (previous === null || previous === pathname || back || window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  // A link to the page already open (the logo on the home page) goes back to
  // its top and drops the chapter from the address. The router alone would
  // leave the page where it is, because the first chapter is a stuck sheet.
  // Runs in the capture phase, so it decides before the router's link does.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      const here = window.location;
      if (url.origin !== here.origin || url.pathname !== here.pathname || url.search !== here.search || url.hash) {
        return;
      }
      event.preventDefault();
      if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.2, force: true });
      else window.scrollTo({ top: 0, behavior: "auto" });
      if (here.hash) history.replaceState(history.state, "", url.pathname + url.search);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Smooth scroll, driven by the same clock as the scroll animations.
  useEffect(() => {
    const root = document.documentElement;
    const stackQuery = window.matchMedia(STACK_QUERY);
    const syncStack = () => root.classList.toggle("stack", stackQuery.matches);
    syncStack();
    stackQuery.addEventListener("change", syncStack);

    if (!window.matchMedia(MOTION_QUERY).matches) {
      return () => stackQuery.removeEventListener("change", syncStack);
    }

    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true, syncTouch: false });
    lenisRef.current = lenis;
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const observer = new MutationObserver(() => {
      if (root.dataset.menu === "open") lenis.stop();
      else lenis.start();
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-menu"] });

    // In-page chapter links glide instead of jumping.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target || id === "main") return;
      event.preventDefault();
      lenis.scrollTo(flowTop(target), { duration: 1.4 });
      history.replaceState(history.state, "", `#${id}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      stackQuery.removeEventListener("change", syncStack);
      document.removeEventListener("click", onClick);
      observer.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add({ motion: MOTION_QUERY, stack: STACK_QUERY }, (context) => {
      const { motion, stack } = context.conditions as { motion: boolean; stack: boolean };
      const cleanups: Array<() => void> = [];

      if (!motion) {
        root.classList.add("motion-ready");
        return;
      }

      // Headlines: each line rises out of its own mask.
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 130,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.09,
              scrollTrigger: { trigger: el, start: "top 90%", once: true }
            });
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) => {
        const mode = el.dataset.rv;
        const targets = mode === "kids" || mode === "weft" ? Array.from(el.children) : el;
        gsap.from(targets, {
          ...(mode === "weft" ? { xPercent: -14 } : { y: 36 }),
          autoAlpha: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: mode === "weft" ? 0.11 : 0.07,
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-grow]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        if (!Number.isFinite(end)) return;
        // The number waits at zero, so it is never seen finished before it counts.
        const state = { value: 0 };
        el.textContent = "0";
        gsap.to(state, {
          value: end,
          duration: 1.8,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
          scrollTrigger: { trigger: el, start: "top 80%", once: true }
        });
        cleanups.push(() => {
          el.textContent = String(end);
        });
      });

      const across = (el: HTMLElement) => {
        const section = el.closest<HTMLElement>("section") ?? el;
        return {
          trigger: section,
          start: () => flowTop(section) - window.innerHeight,
          end: () => flowTop(section) + section.offsetHeight,
          scrub: true,
          invalidateOnRefresh: true
        };
      };

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 0;
        gsap.fromTo(el, { yPercent: amount }, { yPercent: -amount, ease: "none", scrollTrigger: across(el) });
      });

      gsap.utils.toArray<HTMLElement>("[data-shift]").forEach((el) => {
        const amount = Number(el.dataset.shift) || 0;
        gsap.fromTo(el, { xPercent: amount }, { xPercent: -amount, ease: "none", scrollTrigger: across(el) });
      });

      if (stack) {
        const sheets = gsap.utils.toArray<HTMLElement>(".sheet");
        const place = () => {
          sheets.forEach((sheet) => {
            sheet.style.setProperty("--sheet-top", `${Math.min(0, window.innerHeight - sheet.offsetHeight)}px`);
          });
        };
        place();
        const resize = new ResizeObserver(place);
        sheets.forEach((sheet) => resize.observe(sheet));
        window.addEventListener("resize", place);
        cleanups.push(() => {
          resize.disconnect();
          window.removeEventListener("resize", place);
        });
      }

      root.classList.add("motion-ready");

      return () => cleanups.forEach((fn) => fn());
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.clearTimeout(settle);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
