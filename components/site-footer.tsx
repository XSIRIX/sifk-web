"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { WeaveMark } from "@/components/weave-mark";
import { company } from "@/lib/company";
import { getLocaleFromPathname, localizePath, switchLocalePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];

  return (
    <footer className="site-footer" data-tone="dark">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <WeaveMark className="footer-mark" weave="view" />
          <p className="footer-name">SIFK GmbH</p>
          <p className="footer-copy">{copy.footer.copy}</p>
        </div>

        <nav aria-label={copy.footer.navTitle} className="footer-col">
          <h2 className="footer-title">{copy.footer.navTitle}</h2>
          <ul>
            {copy.navigation.map((item) => (
              <li key={item.href}>
                <Link className="footer-link" href={localizePath(item.href, locale)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="footer-link" href={localizePath("/kontakt", locale)}>
                {copy.header.contactLabel}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-title">{copy.footer.contactTitle}</h2>
          <address>
            <a className="footer-link" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
            <a className="footer-link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <span>
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </span>
          </address>
        </div>

        <nav aria-label={copy.footer.legalTitle} className="footer-col">
          <h2 className="footer-title">{copy.footer.legalTitle}</h2>
          <ul>
            {copy.footer.links.map((item) => (
              <li key={item.href}>
                <Link className="footer-link" href={localizePath(item.href, locale)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="footer-link"
                href={switchLocalePath(pathname, locale === "de" ? "en" : "de")}
                hrefLang={locale === "de" ? "en" : "de"}
              >
                {locale === "de" ? "English" : "Deutsch"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="shell footer-base">
        <span aria-hidden="true" className="thread thread-full" />
        <p>
          © {new Date().getFullYear()} {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
