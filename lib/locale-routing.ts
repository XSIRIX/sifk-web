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

export function switchLocalePath(pathname: string, locale: Locale) {
  return localizePath(pathname, locale);
}
