import type { Metadata, Viewport } from "next";

import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { siteUrl } from "@/lib/seo";

// The site-wide defaults each page builds on. Every page sets its own title,
// description and social data through createPageMetadata; these are the fallbacks.
const meta = getContent("de").meta;
const ogImage = { url: "/brand/og.jpg", width: 1200, height: 630, alt: "SIFK GmbH" };

// The locale is taken now so that per-language additions have one place to go.
export function rootMetadata(_locale: Locale): Metadata {
  return {
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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ECEBE9"
};
