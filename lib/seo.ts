import type { Metadata } from "next";

import { localizePath, type Locale } from "@/lib/locale-routing";

export const siteUrl = "https://www.sifk.de";
export const organizationId = `${siteUrl}/#organization`;

type PageCopy = { title: string; description: string };

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
  }
} satisfies Record<string, Record<Locale, PageCopy>>;

export type SeoPagePath = keyof typeof seoPages;

export function pageUrl(path: SeoPagePath, locale: Locale) {
  return new URL(localizePath(path, locale), siteUrl).href;
}

export function languageAlternates(path: SeoPagePath) {
  return {
    de: pageUrl(path, "de"),
    en: pageUrl(path, "en"),
    "x-default": pageUrl(path, "de")
  };
}

export function createPageMetadata(path: SeoPagePath, locale: Locale): Metadata {
  const { title, description } = seoPages[path][locale];
  const fullTitle = `${title} | SIFK GmbH`;
  const image = {
    url: `${siteUrl}/logo-horizontal.png`,
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
      alternateLocale: locale === "de" ? "en_GB" : "de_DE",
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
