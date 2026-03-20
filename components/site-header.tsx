"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/lib/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoUnavailable, setLogoUnavailable] = useState(false);

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
        <Link className="brandmark" href="/">
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
                src="/logo-horizontal.png"
                width={1200}
              />
            </span>
          )}
        </Link>

        <button
          aria-expanded={isOpen}
          aria-label="Navigation umschalten"
          className="nav-toggle"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>

        <div className={`nav-wrap${isOpen ? " is-open" : ""}`}>
          <nav className="main-nav" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-small" href="/kontakt" onClick={() => setIsOpen(false)}>
            Anfrage
          </Link>
        </div>
      </div>
    </header>
  );
}
