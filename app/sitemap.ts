import type { MetadataRoute } from "next";

import { languageAlternates, pageLocales, pageUrl, seoPages, type SeoPagePath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(seoPages) as SeoPagePath[]).flatMap((path) =>
    pageLocales(path).map((locale) => ({
      url: pageUrl(path, locale),
      alternates: { languages: languageAlternates(path) }
    }))
  );
}
