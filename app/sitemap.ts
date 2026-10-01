import type { MetadataRoute } from "next";

import { locales } from "@/lib/locale-routing";
import { languageAlternates, pageUrl, seoPages, type SeoPagePath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(seoPages) as SeoPagePath[]).flatMap((path) =>
    locales.map((locale) => ({
      url: pageUrl(path, locale),
      alternates: { languages: languageAlternates(path) }
    }))
  );
}
