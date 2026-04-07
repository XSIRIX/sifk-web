const TITLE_TOKENS = new Set([
  "dr",
  "dr.",
  "prof",
  "prof.",
  "mr",
  "mrs",
  "ms",
  "ing",
  "dipl",
  "mag"
]);

function normalizeToken(token: string) {
  return token
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[’']/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-]/g, "");
}

export function buildTeamEmail(name: string) {
  const tokens = name
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token) => !TITLE_TOKENS.has(token.toLowerCase()));

  const firstToken = tokens.find((token) => normalizeToken(token).length > 0) ?? "team";
  const lastToken =
    [...tokens].reverse().find((token) => normalizeToken(token).length > 1) ?? firstToken;

  const first = normalizeToken(firstToken);
  const last = normalizeToken(lastToken);

  return `${first.charAt(0)}.${last}@sifk.de`;
}
