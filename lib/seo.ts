import type { Metadata } from "next";

import { localizePath, locales, type Locale } from "@/lib/locale-routing";

export const siteUrl = "https://www.sifk.de";
export const organizationId = `${siteUrl}/#organization`;

type PageCopy = { title: string; description: string };

// German is required. A page without `en` exists in German only.
type SeoEntry = { de: PageCopy; en?: PageCopy };

export const seoPages = {
  "/": {
    de: {
      title: "Afrika-Geschäftsentwicklung & Energieberatung",
      description:
        "SIFK begleitet Unternehmen beim Markteintritt in Afrika, beim Aufbau von Partnerschaften und mit Energieberatung für Unternehmen in Deutschland."
    },
    en: {
      title: "Africa Business Development & Energy Consulting",
      description:
        "SIFK supports companies with market entry in Africa, strategic partnerships and project coordination, alongside energy consulting in Germany."
    }
  },
  "/leistungen": {
    de: {
      title: "Leistungen: Markteintritt Afrika & Energieberatung",
      description:
        "Markteintritt, Marktvalidierung und Partnerschaften in Afrika sowie Energieaudits nach DIN EN 16247 und Beratung für Nichtwohngebäude in Deutschland."
    },
    en: {
      title: "Services: Africa Market Entry & Energy Consulting",
      description:
        "Explore market validation, partnerships and project support in Africa, plus DIN EN 16247 energy audits and non-residential building consulting in Germany."
    }
  },
  "/unser-team": {
    de: {
      title: "Unser Team für Afrika-Geschäftsentwicklung & Energie",
      description:
        "Lernen Sie das SIFK-Team kennen: Fachkräfte für afrikanische Märkte, internationale Projektbegleitung und Energieberatung in Deutschland."
    },
    en: {
      title: "Our Team: Africa Business Development & Energy",
      description:
        "Meet the SIFK team and explore its expertise in African markets, international project coordination and energy consulting in Germany."
    }
  },
  "/ueber-uns": {
    de: {
      title: "Über uns: Verbindungen zwischen Deutschland & Afrika",
      description:
        "SIFK verbindet Märkte, Partner und Projekte. Erfahren Sie mehr über unseren Ansatz für Geschäftsentwicklung in Afrika und Energieeffizienz in Deutschland."
    },
    en: {
      title: "About Us: Connecting Germany & Africa",
      description:
        "SIFK connects markets, partners and projects. Learn about our approach to business development in Africa and energy efficiency in Germany."
    }
  },
  "/cloody": {
    de: {
      title: "Cloody: Handelsplattform für Europa & Afrika",
      description:
        "Cloody ist die Handelsplattform von SIFK in Entwicklung: direkter Handel zwischen Europa und Afrika, integrierte Zollabwicklung und Community-Logistik."
    },
    en: {
      title: "Cloody: Trading Platform for Europe & Africa",
      description:
        "Discover Cloody, SIFK’s trading platform in development, connecting Europe and Africa through direct trade, customs processing and community logistics."
    }
  },
  "/kontakt": {
    de: {
      title: "Kontakt für Afrika-Projekte & Energieberatung",
      description:
        "Kontaktieren Sie SIFK zu Markteintritt, Partnerschaften und Projekten in Afrika oder zu Energieaudits und Energieberatung für Unternehmen in Deutschland."
    },
    en: {
      title: "Contact Us for Africa Projects & Energy Consulting",
      description:
        "Contact SIFK about market entry, partnerships and projects in Africa, or energy audits and energy consulting for companies in Germany."
    }
  },
  "/impressum": {
    de: {
      title: "Impressum",
      description:
        "Unternehmensangaben der SIFK GmbH in Schriesheim: Anschrift, Geschäftsführung, Kontakt und Handelsregisterinformationen."
    },
    en: {
      title: "Legal Notice",
      description:
        "Company information for SIFK GmbH in Schriesheim, Germany: address, management, contact details and commercial register information."
    }
  },
  "/datenschutz": {
    de: {
      title: "Datenschutzerklärung",
      description:
        "Informationen der SIFK GmbH zur Verarbeitung personenbezogener Daten bei Website-Besuchen und Kontaktanfragen sowie zu Ihren Datenschutzrechten."
    },
    en: {
      title: "Privacy Policy",
      description:
        "Learn how SIFK GmbH processes personal data when you visit this website or send an inquiry, and find information about your privacy rights."
    }
  },
  "/leistungen/energieberatung": {
    de: {
      title: "Energieaudit & Energieberatung für Unternehmen",
      description:
        "Energieaudit nach DIN EN 16247-1 und Energieberatung für Nichtwohngebäude nach DIN V 18599. Für Unternehmen in Heidelberg, Mannheim und der Region Rhein-Neckar."
    },
    en: {
      title: "Energy Audits & Energy Consulting for Companies",
      description:
        "Energy audits to DIN EN 16247-1 and energy consulting for non-residential buildings to DIN V 18599, for companies in Heidelberg, Mannheim and the Rhine-Neckar region."
    }
  },
  "/beratungsgutscheine-afrika": {
    de: {
      title: "Beratungsgutscheine Afrika: Förderung & Beratung",
      description:
        "Beratungsgutscheine Afrika: das Förderprogramm des Bundes für Beratung zu Geschäftsvorhaben in Afrika, und wie SIFK Unternehmen beim Markteintritt berät."
    }
  }
} satisfies Record<string, SeoEntry>;

export type SeoPagePath = keyof typeof seoPages;

export function pageUrl(path: SeoPagePath, locale: Locale) {
  return new URL(localizePath(path, locale), siteUrl).href;
}

/** The languages a page exists in, German first. */
export function pageLocales(path: SeoPagePath): Locale[] {
  const entry: SeoEntry = seoPages[path];
  return locales.filter((locale) => entry[locale] !== undefined);
}

export function languageAlternates(path: SeoPagePath) {
  const languages: Partial<Record<Locale | "x-default", string>> = {};
  for (const locale of pageLocales(path)) {
    languages[locale] = pageUrl(path, locale);
  }
  languages["x-default"] = pageUrl(path, "de");
  return languages;
}

export function createPageMetadata(path: SeoPagePath, locale: Locale): Metadata {
  const entry: SeoEntry = seoPages[path];
  const copy = entry[locale];
  if (!copy) {
    throw new Error(`No ${locale} copy for ${path}`);
  }
  const { title, description } = copy;
  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const fullTitle = `${title} | SIFK GmbH`;
  const image = {
    url: `${siteUrl}/brand/og.jpg`,
    width: 1200,
    height: 630,
    alt: "SIFK GmbH"
  };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: pageUrl(path, locale),
      languages: languageAlternates(path)
    },
    openGraph: {
      type: "website",
      siteName: "SIFK GmbH",
      title: fullTitle,
      description,
      url: pageUrl(path, locale),
      locale: locale === "de" ? "de_DE" : "en_GB",
      ...(entry[otherLocale] ? { alternateLocale: otherLocale === "de" ? "de_DE" : "en_GB" } : {}),
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}
