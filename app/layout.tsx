import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { LocaleDocumentController } from "@/components/locale-document-controller";
import { MotionRoot } from "@/components/motion-root";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getContent } from "@/lib/content";
import { siteUrl } from "@/lib/seo";
import { companyStructuredData } from "@/lib/structured-data";

import "./globals.css";

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

const meta = getContent("de").meta;
const ogImage = { url: "/brand/og.jpg", width: 1200, height: 630, alt: "SIFK GmbH" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.name,
    template: `%s | ${meta.name}`
  },
  description: meta.description,
  icons: {
    icon: { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", sizes: "512x512" }
  },
  openGraph: {
    title: meta.name,
    description: meta.description,
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: meta.name,
    description: meta.description,
    images: [ogImage.url]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ECEBE9"
};

// Runs before paint: marks the document as scripted, switches the stacked
// chapters on for wide screens, and guarantees content shows if motion never starts.
const bootScript = `(function(){var d=document.documentElement;d.classList.add("js");try{if(matchMedia("(min-width: 1089px) and (prefers-reduced-motion: no-preference)").matches){d.classList.add("stack")}}catch(e){}setTimeout(function(){d.classList.add("motion-ready")},3500)})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${textFont.variable} ${displayFont.variable}`} lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt / Skip to content
        </a>
        <StructuredData data={companyStructuredData} />
        <LocaleDocumentController />
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
