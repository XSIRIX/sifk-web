import type { Metadata, Viewport } from "next";

import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { siteUrl } from "@/lib/seo";

// The site-wide defaults each page builds on. Every page sets its own title,
// description and social data through createPageMetadata; these are the fallbacks.
const meta = getContent("de").meta;
const ogImage = { url: "/brand/og.jpg", width: 1200, height: 630, alt: "SIFK GmbH" };

// Search Console and Bing Webmaster Tools ownership tags. Set the variables in Vercel;
// a missing or empty variable adds nothing.
function verification(): Metadata["verification"] {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  if (!google && !bing) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {})
  };
}

// The locale is taken now so that per-language additions have one place to go.
export function rootMetadata(_locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    verification: verification(),
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
