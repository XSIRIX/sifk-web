export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) {
    return defaultLocale;
  }

  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function localizePath(path: string, locale: Locale) {
  if (!path.startsWith("/")) {
    return path;
  }

  const normalized = path === "/en" || path.startsWith("/en/") ? path.slice(3) || "/" : path;

  if (locale === "de") {
    return normalized;
  }

  return normalized === "/" ? "/en" : `/en${normalized}`;
}

// Pages that exist in one language only. The language switch sends visitors to the
// closest real page in the other language instead of a 404.
const localeFallbacks: Record<string, Partial<Record<Locale, string>>> = {
  "/beratungsgutscheine-afrika": { en: "/en/leistungen/markteintritt-afrika" }
};

export function switchLocalePath(pathname: string, locale: Locale) {
  const normalized = localizePath(pathname, "de");
  return localeFallbacks[normalized]?.[locale] ?? localizePath(pathname, locale);
}
