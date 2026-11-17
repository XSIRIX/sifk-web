// Contact links may preselect a topic: `/kontakt?thema=energie`.
// Only known values are accepted. No imports, so Node can load this file in tests.

export function topicFromQuery(search: string, allowed: string[]): string | null {
  const value = new URLSearchParams(search).get("thema");
  return value !== null && allowed.includes(value) ? value : null;
}
