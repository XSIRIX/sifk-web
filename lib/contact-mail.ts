// Pure helpers for the contact route. No imports, so the unit tests can load this file directly.

const LANGUAGES = ["de", "en"];

/** "de" or "en"; anything else counts as German, the site's main language. */
function language(locale: string) {
  return LANGUAGES.includes(locale) ? locale : "de";
}

/** The e-mail subject. The [DE]/[EN] tag lets the owner count enquiries per language. */
export function enquirySubject(input: { topicLabel: string; company: string; locale: string }): string {
  const tag = language(input.locale).toUpperCase();
  return `Neue Anfrage [${tag}]: ${input.topicLabel}${input.company ? ` (${input.company})` : ""}`;
}

/**
 * Where a form post without JavaScript lands: the contact page in the visitor's language,
 * with a fragment that shows the matching note. Never a query, so nothing is cached or indexed.
 */
export function formRedirectPath(locale: string, ok: boolean): string {
  const page = language(locale) === "en" ? "/en/kontakt" : "/kontakt";
  return `${page}#${ok ? "gesendet" : "fehler"}`;
}
