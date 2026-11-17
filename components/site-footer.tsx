"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CornerArrow } from "@/components/page-parts";
import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import { getLocaleFromPathname, localizePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];
  const content = getContent(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="tiles">
        <div className="tile tile-say f-white">
          <p className="title">{copy.footer.copy}</p>
          <p className="small">
            © {year} {copy.footer.rights} · {company.court}, {company.register}
          </p>
        </div>

        <nav aria-label={copy.footer.navTitle} className="tile tile-nav f-plaster">
          <h2 className="small">
            <strong>{copy.footer.navTitle}</strong>
          </h2>
          <ul>
            {copy.navigation.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(item.href, locale)}>{item.label}</Link>
              </li>
            ))}
            {copy.footer.services.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(item.href, locale)}>{item.label}</Link>
              </li>
            ))}
            {copy.footer.links.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(item.href, locale)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tile tile-where f-lime">
          <h2 className="small">
            <strong>{content.common.address}</strong>
          </h2>
          <address style={{ fontStyle: "normal" }}>
            {company.name}
            <br />
            {company.street}
            <br />
            {company.postalCode} {company.city}
          </address>
        </div>

        <div className="tile tile-mail f-gold">
          <h2 className="small">
            <strong>{copy.footer.contactTitle}</strong>
          </h2>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
          </p>
        </div>

        <div className="tile tile-mark f-white">
          <img
            alt="SIFK GmbH – Bridging Germany & Africa"
            height={400}
            loading="lazy"
            src="/logo-horizontal-lg.png"
            width={1200}
          />
        </div>

        <Link className="tile tile-go f-glut" href={localizePath(content.common.firstCall.href, locale)}>
          <span className="display">{content.common.firstCall.label}</span>
          <CornerArrow />
        </Link>
      </div>
    </footer>
  );
}
