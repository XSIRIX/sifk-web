// Facts that expire. A dated block carries its text for while it is valid and for after.
// Dates are calendar days in German time. No imports, so Node can load this file in tests.

export type Dated<T> = {
  /** Last valid day, `YYYY-MM-DD`, in German time. */
  until: string;
  open: T;
  ended: T;
};

const berlinDay = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Berlin",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

/** Today's calendar day in German time, as `YYYY-MM-DD`. */
function germanToday(now: Date): string {
  const parts = Object.fromEntries(berlinDay.formatToParts(now).map((part) => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

/** True once the German calendar day is later than `until`. */
export function isEnded(until: string, now: Date): boolean {
  if (!ISO_DAY.test(until)) {
    throw new Error(`End date must be written YYYY-MM-DD, got "${until}"`);
  }
  return germanToday(now) > until;
}

/**
 * True when a page was rendered in one state but the date says the other.
 * A cached page rendered before the end date uses this to fetch the ended version.
 */
export function needsRefresh(until: string, renderedEnded: boolean, now: Date): boolean {
  return isEnded(until, now) !== renderedEnded;
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
