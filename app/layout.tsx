import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Schibsted_Grotesk } from "next/font/google";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeColorController } from "@/components/theme-color-controller";
import { siteMeta } from "@/lib/site-content";

import "./globals.css";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"]
});

const bodyFont = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.name,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description,
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png"
  },
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    images: [
      {
        url: "/logo-horizontal.png",
        alt: `${siteMeta.name} logo`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.name,
    description: siteMeta.description,
    images: ["/logo-horizontal.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f1e7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${displayFont.variable} ${bodyFont.variable}`} lang="de">
      <body>
        <HashScrollController />
        <SmoothScroll />
        <ThemeColorController />
        <div className="page-frame">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
