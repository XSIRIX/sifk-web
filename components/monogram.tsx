import type { CountryCode } from "@/lib/content";

// Woven monogram: horizontal threads for people based in Germany,
// vertical threads for people based in Africa, both where a person bridges the two.
export function Monogram({ name, countries, size = "md" }: { name: string; countries: CountryCode[]; size?: "sm" | "md" | "lg" }) {
  const parts = name
    .replace(/^(Dr\.|Prof\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  const initials = `${parts[0]?.[0] ?? ""}${parts.length > 1 ? parts[parts.length - 1][0] : ""}`.toUpperCase();
  const germany = countries.includes("de");
  const africa = countries.some((code) => code !== "de");
  const weave = germany && africa ? "both" : germany ? "de" : "africa";

  return (
    <span aria-hidden="true" className={`monogram monogram-${size}`} data-weave={weave}>
      <span className="monogram-threads" />
      <span className="monogram-initials">{initials}</span>
    </span>
  );
}
