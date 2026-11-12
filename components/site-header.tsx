"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons";
import { getContent } from "@/lib/content";
import { getLocaleFromPathname, localizePath, switchLocalePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

const FIELD = /\bf-(plaster|white|ink|glut|gold|lime|laub)\b/;

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];
  const firstCall = getContent(locale).common.firstCall;
  const otherLocale = locale === "de" ? "en" : "de";
  const [open, setOpen] = useState(false);
  const [field, setField] = useState("plaster");
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const bar = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 480 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar takes the colour of the chapter that lies under it. Chapters stack
  // like sheets, so the one on top is asked for directly at the bar's lower edge.
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = (bar.current?.offsetHeight ?? 72) + 2;
      for (const node of document.elementsFromPoint(window.innerWidth / 2, y)) {
        if (node.closest(".site-header, .menu")) continue;
        const host = node.closest<HTMLElement>(".sheet, section, footer");
        if (!host) continue;
        const name = FIELD.exec(host.className)?.[1];
        setField(host.classList.contains("hero") ? "hero" : name ?? (host.matches("footer") ? "ink" : "plaster"));
        return;
      }
    };
    const queue = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };
    queue();
    // The page may still be settling (fonts, the hero's entrance): ask again a few times.
    const settles = [500, 1500, 3000].map((ms) => window.setTimeout(queue, ms));
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      window.cancelAnimationFrame(frame);
      settles.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.menu = "open";
    else delete root.dataset.menu;
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === localizePath(href, locale);
  // The open menu is a sheet in the colour the bar already has.
  const ground = field;
  const menuField = field === "hero" ? "plaster" : field;

  return (
    <>
      <header
        className={`site-header on-${ground}${solid || open ? " is-solid" : ""}${hidden && !open ? " is-hidden" : ""}`}
        ref={bar}
      >
        <div className="shell header-in">
          <Link aria-label={copy.header.homeLabel} className="brand" href={localizePath("/", locale)}>
            <img alt="SIFK GmbH – Bridging Germany & Africa" height={80} src="/logo-horizontal.png" width={240} />
          </Link>

          <nav aria-label={copy.header.navAriaLabel} className="nav">
            {copy.navigation.map((item) => (
              <Link
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className="nav-link"
                href={localizePath(item.href, locale)}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-side">
            <Link
              aria-label={copy.header.localeAriaLabel}
              className="locale"
              href={switchLocalePath(pathname, otherLocale)}
              hrefLang={otherLocale}
              lang={otherLocale}
            >
              {copy.header.localeLabel}
            </Link>
            <Link className="btn" href={localizePath(firstCall.href, locale)}>
              {firstCall.label}
              <ArrowIcon />
            </Link>
            <button
              aria-controls="site-menu"
              aria-expanded={open}
              aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
              className="menu-btn"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu f-${menuField}${open ? " is-open" : ""}`} id="site-menu" inert={!open}>
        <nav aria-label={copy.header.navAriaLabel} className="menu-links">
          {copy.navigation.map((item) => (
            <Link href={localizePath(item.href, locale)} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={localizePath("/kontakt", locale)}>{copy.header.contactLabel}</Link>
        </nav>
        <div className="menu-foot">
          <Link className="btn" href={localizePath(firstCall.href, locale)}>
            {firstCall.label}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
