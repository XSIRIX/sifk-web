import type { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { MotionRoot } from "@/components/motion-root";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import type { Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";
import { companyStructuredData } from "@/lib/structured-data";

import "@/app/globals.css";

// DIN-style family: the condensed cut sets headlines (long German compounds
// stay on two lines), the regular cut sets everything that is read.
const textFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap"
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap"
});

// Runs before paint: marks the document as scripted, switches the stacked
// chapters on for wide screens, and guarantees content shows if motion never starts.
const bootScript = `(function(){var d=document.documentElement;d.classList.add("js");try{if(matchMedia("(min-width: 1089px) and (prefers-reduced-motion: no-preference)").matches){d.classList.add("stack")}}catch(e){}setTimeout(function(){d.classList.add("motion-ready")},3500)})();`;

/**
 * The whole document for one language. Each root layout (app/(de), app/(en))
 * renders it, so the server sends the right `lang` with no script needed.
 */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html className={`${textFont.variable} ${displayFont.variable}`} lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {sharedCopy[locale].skipLink}
        </a>
        <StructuredData data={companyStructuredData} />
        <HashScrollController />
        <MotionRoot />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
