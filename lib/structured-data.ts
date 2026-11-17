import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import type { ServicePageContent } from "@/lib/content-services";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { organizationId, pageUrl, siteUrl } from "@/lib/seo";

const dayUrl = (day: string) => `https://schema.org/${day}`;

/** Company and website, in the page's language. Owner facts appear only once they are set. */
export function companyStructuredData(locale: Locale) {
  const { home } = getContent(locale);
  const sameAs = [company.googleProfileUrl, company.linkedinUrl].filter((url): url is string => Boolean(url));
  const logo = `${siteUrl}/logo-horizontal.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: company.name,
        legalName: company.name,
        url: `${siteUrl}/`,
        logo,
        image: logo,
        // The plain-words line from the home page, in the page's language.
        description: home.hero.text,
        email: company.email,
        telephone: company.phoneInternational,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.street,
          postalCode: company.postalCode,
          addressLocality: company.city,
          addressRegion: company.region,
          addressCountry: company.country
        },
        geo: { "@type": "GeoCoordinates", latitude: company.geo.latitude, longitude: company.geo.longitude },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Metropolregion Rhein-Neckar" },
          { "@type": "Country", name: "Deutschland" }
        ],
        ...(company.openingHours
          ? {
              openingHoursSpecification: company.openingHours.map((slot) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: slot.days.map(dayUrl),
                opens: slot.opens,
                closes: slot.closes
              }))
            }
          : {}),
        ...(sameAs.length > 0 ? { sameAs } : {})
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
}

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

/** One BreadcrumbList that matches the visible breadcrumb line. URLs are absolute. */
export function breadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/** One Service node for a service page, pointing at the company node. */
export function servicePageStructuredData(page: ServicePageContent, locale: Locale, description: string) {
  const url = new URL(localizePath(page.path, locale), siteUrl).href;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.schema.name,
    description,
    serviceType: page.schema.serviceTypes,
    url,
    provider: { "@id": organizationId }
  };
}
