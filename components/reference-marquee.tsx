type ReferenceLogo = { alt: string; src: string };

const LOGOS: ReferenceLogo[] = [
  { alt: "BackWerk", src: "/references/backwerk.png" },
  { alt: "Eichbaum", src: "/references/eichbaum.svg" },
  { alt: "Back-Factory", src: "/references/backfactory.jpg" },
  { alt: "Top Image Africa", src: "/references/tia.png" },
  { alt: "Pharmatek", src: "/references/pharmatek.svg" },
  { alt: "Horn", src: "/references/horn.jpg" },
  { alt: "Proland", src: "/references/proland.png" },
  { alt: "Sameer", src: "/references/sameer.png" },
  { alt: "Werther", src: "/references/werther.png" },
  { alt: "Kochlöffel", src: "/references/kochloffel.jpg" },
  { alt: "Kautex", src: "/references/kautex.png" },
  { alt: "Multimatic", src: "/references/multimatic.png" },
  { alt: "Walther", src: "/references/walther.webp" },
  { alt: "Just Property", src: "/references/justproperty.png" },
  { alt: "Sport Mix Team", src: "/references/sport.png" },
  { alt: "KenInvest", src: "/references/keninvest.jpg" },
  { alt: "Naburi Fashion House", src: "/references/naburi.png" },
  { alt: "JD Hahn", src: "/references/jdhahn.png" },
  { alt: "Best Western", src: "/references/best-western.jpg" },
  { alt: "Banange Brewing Company", src: "/references/banange.png" },
  { alt: "Fair & Quer", src: "/references/fairquer.jpeg" },
  { alt: "MVZ", src: "/references/mvz.png" },
  { alt: "Weingut", src: "/references/weingut.png" },
  { alt: "Präzisionstechnik Axel Stadel", src: "/references/axel.jpeg" },
  { alt: "Motsch", src: "/references/motsch.gif" },
  { alt: "Landry", src: "/references/landry.png" },
  { alt: "NYC Pizza", src: "/references/nycpizza.png" },
  { alt: "SMS Media", src: "/references/sms.jpg" },
  { alt: "The African Way Coffee Shop", src: "/references/african.jpeg" },
  { alt: "Ecolo", src: "/references/ecolo.webp" },
  { alt: "Hensel", src: "/references/hensel.jpg" },
  { alt: "Coffee Beans", src: "/references/coffeebeans.png" }
];

const ROWS = 2;
/** Seconds one row needs for a full round; the second one runs the other way. */
const ROUND = [72, 84];

type ReferenceMarqueeProps = {
  title: string;
  ariaLabel: string;
};

/**
 * Clients and partners: a band of our woven ribbons on top, the sentence in
 * the middle, and below it two rows of logos gliding slowly past each other.
 */
export function ReferenceMarquee({ title, ariaLabel }: ReferenceMarqueeProps) {
  const rows = Array.from({ length: ROWS }, (_unused, row) => LOGOS.filter((_logo, index) => index % ROWS === row));

  return (
    <section aria-labelledby="references-title" className="refs sheet field f-white">
      {/* Our own weave, moving in a soft breeze: the picture of working together. */}
      <div aria-hidden="true" className="refs-weave">
        <img alt="" decoding="async" src="/brand/weave-poster.webp" />
        <video autoPlay loop muted playsInline poster="/brand/weave-poster.webp" preload="metadata">
          <source media="(max-width: 40rem)" src="/brand/weave-loop-sm.mp4" type="video/mp4" />
          <source src="/brand/weave-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="shell refs-say">
        <h2 className="display" data-split id="references-title">
          {title}
        </h2>
      </div>
      <div aria-label={ariaLabel} className="refs-stage" role="group">
        {rows.map((logos, row) => (
          <ul
            className={`refs-run${row % 2 === 1 ? " is-back" : ""}`}
            key={row}
            style={{ animationDuration: `${ROUND[row % ROUND.length]}s` }}
          >
            {/* Twice in a row, so the loop has no seam. The second set is for the eye only. */}
            {[false, true].flatMap((copy) =>
              logos.map((logo) => (
                <li aria-hidden={copy || undefined} key={`${logo.src}${copy ? "-2" : ""}`}>
                  <img alt={copy ? "" : logo.alt} decoding="async" src={logo.src} />
                </li>
              ))
            )}
          </ul>
        ))}
      </div>
    </section>
  );
}
