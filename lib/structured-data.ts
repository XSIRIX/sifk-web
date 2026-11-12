import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { organizationId, pageUrl, siteUrl } from "@/lib/seo";

const de = getContent("de");

// Company facts are already published in the site's legal notice.
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: company.name,
      legalName: company.name,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo-horizontal.png`,
      description: de.meta.description,
      email: company.email,
      telephone: company.phoneInternational,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.postalCode,
        addressLocality: company.city,
        addressCountry: company.country
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: company.name,
      inLanguage: ["de", "en"],
      publisher: { "@id": organizationId }
    }
  ]
};

export function serviceStructuredData(locale: Locale) {
  const { services } = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@graph": services.fields.map((field) => ({
      "@type": "Service",
      "@id": `${pageUrl("/leistungen", locale)}#${field.id}`,
      name: field.title.replace(/\u00AD/g, ""),
      description: field.text,
      serviceType: field.services.map((service) => service.title),
      url: `${pageUrl("/leistungen", locale)}#${field.id}`,
      provider: { "@id": organizationId }
    }))
  };
}
