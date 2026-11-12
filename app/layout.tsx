import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { LocaleDocumentController } from "@/components/locale-document-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";
import { ThemeColorController } from "@/components/theme-color-controller";
import { getContent } from "@/lib/content";
import { siteUrl } from "@/lib/seo";
import { companyStructuredData } from "@/lib/structured-data";

import "./globals.css";

// One variable family carries the whole voice: wide for headlines,
// normal width for reading, condensed for labels and data.
const brandFont = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
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
  themeColor: "#F6F5F1"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={brandFont.variable} lang="de">
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt / Skip to content
        </a>
        <StructuredData data={companyStructuredData} />
        <LocaleDocumentController />
        <HashScrollController />
        <SmoothScroll />
        <ThemeColorController />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
