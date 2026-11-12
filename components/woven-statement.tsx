import { WeaveMark } from "@/components/weave-mark";
import type { CountryCode } from "@/lib/content";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";

const AFRICA: CountryCode[] = ["gh", "zm", "ug", "ke", "et", "tz"];

// Two lines of oversized type that slide in opposite directions as the page
// scrolls: Germany and Africa, woven together; then the six countries.
export function WovenStatement({ locale }: { locale: Locale }) {
  const { home, countries } = getContent(locale);
  const pair = [home.bridge.from, home.bridge.to];
  const lineOne = [...pair, ...pair, ...pair];
  const lineTwo = [...AFRICA, ...AFRICA].map((code) => countries[code]);

  return (
    <section aria-label={home.statement.label} className="woven-statement" data-tone="dark">
      <p aria-hidden="true" className="woven-row woven-row-fill">
        {lineOne.map((word, index) => (
          <span className="woven-word" key={`${word}-${index}`}>
            {word}
            <WeaveMark className="woven-sep" />
          </span>
        ))}
      </p>
      <p aria-hidden="true" className="woven-row woven-row-outline">
        {lineTwo.map((word, index) => (
          <span className="woven-word" key={`${word}-${index}`}>
            {word}
            <i className="woven-dot" />
          </span>
        ))}
      </p>
    </section>
  );
}
