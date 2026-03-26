"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, localizePath, switchLocalePath } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = sharedCopy[locale];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">{copy.footer.kicker}</p>
          <p className="footer-copy">{copy.footer.copy}</p>
        </div>

        <div className="footer-links">
          {copy.footer.links.map((item) => (
            <Link href={localizePath(item.href, locale)} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={switchLocalePath(pathname ?? "/", locale === "de" ? "en" : "de")}>
            {locale === "de" ? "English" : "Deutsch"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
