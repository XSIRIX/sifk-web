"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/icons";
import { getLocaleFromPathname, localizePath, switchLocalePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Header follows the section underneath it: light text over dark chapters.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = (headerRef.current?.offsetHeight ?? 72) / 2;
      const darkSections = document.querySelectorAll<HTMLElement>('[data-tone="dark"]');
      let overDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom >= probe) {
          overDark = true;
        }
      });

      setDark(overDark);
      setScrolled(window.scrollY > 8);
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;

    if (open) {
      root.dataset.menu = "open";
    } else {
      delete root.dataset.menu;
    }

    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      delete root.dataset.menu;
    };
  }, [open]);

  const tone = open ? "dark" : dark ? "dark" : "light";
  const isActive = (href: string) => {
    const target = localizePath(href, locale);
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      data-header-tone={tone}
      ref={headerRef}
    >
      <div className="shell header-bar">
        <Link aria-label={copy.header.homeLabel} className="brandmark" href={localizePath("/", locale)}>
          <Image
            alt=""
            className="brandmark-logo brandmark-logo-ink"
            height={400}
            priority
            src="/logo-menu.png"
            width={1200}
          />
          <Image
            alt=""
            className="brandmark-logo brandmark-logo-light"
            height={400}
            priority
            src="/logo-menu-light.png"
            width={1200}
          />
        </Link>

        <nav aria-label={copy.header.navAriaLabel} className="header-nav">
          {copy.navigation.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className="nav-link"
              href={localizePath(item.href, locale)}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            aria-label={copy.header.localeAriaLabel}
            className="locale-link"
            href={switchLocalePath(pathname, locale === "de" ? "en" : "de")}
            hrefLang={locale === "de" ? "en" : "de"}
          >
            {copy.header.localeLabel}
          </Link>
          <Link className="button button-primary button-small header-cta" href={localizePath("/kontakt", locale)}>
            {copy.header.contactLabel}
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            ref={toggleRef}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" hidden={!open} id="mobile-menu">
        <nav aria-label={copy.header.navAriaLabel} className="shell mobile-menu-inner">
          {[...copy.navigation, { href: "/kontakt", label: copy.header.contactLabel }].map((item, index) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className="mobile-link"
              href={localizePath(item.href, locale)}
              key={item.href}
              onClick={() => setOpen(false)}
              style={{ ["--i" as string]: index }}
            >
              {item.label}
              <ArrowIcon />
            </Link>
          ))}
          <Link
            className="mobile-locale"
            href={switchLocalePath(pathname, locale === "de" ? "en" : "de")}
            hrefLang={locale === "de" ? "en" : "de"}
            onClick={() => setOpen(false)}
          >
            {locale === "de" ? "English" : "Deutsch"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
