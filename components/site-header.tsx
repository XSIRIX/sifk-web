"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { getLocaleFromPathname, localizePath, switchLocalePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoUnavailable, setLogoUnavailable] = useState(false);
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];
  const homeHref = localizePath("/", locale);
  const localeHref = useMemo(
    () => switchLocalePath(pathname ?? "/", locale === "de" ? "en" : "de"),
    [locale, pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link className="brandmark" href={homeHref}>
          {logoUnavailable ? (
            <>
              <span className="brandmark-symbol" aria-hidden="true">
                <span className="brandmark-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </span>
              <span className="brandmark-copy">
                <strong>SIFK GmbH</strong>
                <span>Bridging Germany & Africa</span>
              </span>
            </>
          ) : (
            <span className="brandmark-logo-wrap">
              <Image
                alt="SIFK GmbH"
                className="brandmark-logo"
                height={400}
                onError={() => setLogoUnavailable(true)}
                priority
                src="/logo-menu.png"
                width={1200}
              />
            </span>
          )}
        </Link>

        <button
          aria-expanded={isOpen}
          aria-label={copy.header.toggleLabel}
          className="nav-toggle"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>

        <div className={`nav-wrap${isOpen ? " is-open" : ""}`}>
          <nav className="main-nav" aria-label={copy.header.navAriaLabel}>
            {copy.navigation.map((item) => (
              <Link
                key={item.href}
                href={localizePath(item.href, locale)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            aria-label={locale === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            className="header-locale-link"
            href={localeHref}
            onClick={() => setIsOpen(false)}
          >
            <strong>{copy.header.localeLabel}</strong>
          </Link>

          <Link
            className="button button-small"
            href={localizePath("/kontakt", locale)}
            onClick={() => setIsOpen(false)}
          >
            {copy.header.contactLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
