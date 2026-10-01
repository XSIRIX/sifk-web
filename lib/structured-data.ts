import type { Locale } from "@/lib/locale-routing";
import { organizationId, pageUrl, siteUrl } from "@/lib/seo";
import { pillars, siteMeta } from "@/lib/site-content";
import { pillarsEn } from "@/lib/site-content-en";

// Company facts are already published in the site's legal notice.
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteMeta.name,
      legalName: siteMeta.name,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo-horizontal.png`,
      description: siteMeta.description,
      email: "info@sifk.de",
      telephone: "+49 6203 9375175",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carl-Benz-Straße 4",
        postalCode: "69198",
        addressLocality: "Schriesheim",
        addressCountry: "DE"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteMeta.name,
      inLanguage: ["de", "en"],
      publisher: { "@id": organizationId }
    }
  ]
};

export function serviceStructuredData(locale: Locale) {
  const content = locale === "de" ? pillars : pillarsEn;

  return {
    "@context": "https://schema.org",
    "@graph": content.map((pillar) => ({
      "@type": "Service",
      "@id": `${pageUrl("/leistungen", locale)}#${pillar.id}`,
      name: pillar.title,
      description: pillar.description,
      serviceType: pillar.services,
      url: `${pageUrl("/leistungen", locale)}#${pillar.id}`,
      provider: { "@id": organizationId }
    }))
  };
}
