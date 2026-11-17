// Facts that expire. A dated block carries its text for while it is valid and for after.
// Dates are calendar days in German time. No imports, so Node can load this file in tests.

export type Dated<T> = {
  /** Last valid day, `YYYY-MM-DD`, in German time. */
  until: string;
  open: T;
  ended: T;
};

const berlinDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Berlin",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

/** True once the German calendar day is later than `until`. */
export function isEnded(until: string, now: Date): boolean {
  return berlinDay.format(now) > until;
}

export function resolveDated<T>(block: Dated<T>, now: Date): T {
  return isEnded(block.until, now) ? block.ended : block.open;
}

export function resolveText(value: string | Dated<string>, now: Date): string {
  return typeof value === "string" ? value : resolveDated(value, now);
}

const englishMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

/** `2026-11-17` → "Stand: 17.11.2026" or "As of 17 November 2026". */
export function formatStand(iso: string, locale: "de" | "en"): string {
  const [year, month, day] = iso.split("-");
  if (locale === "de") {
    return `Stand: ${day}.${month}.${year}`;
  }
  return `As of ${Number(day)} ${englishMonths[Number(month) - 1]} ${year}`;
}
