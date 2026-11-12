import type { CSSProperties } from "react";

const COLUMNS = 72;

// A strip of real weave: three horizontal threads (Germany) and a row of
// vertical threads (Africa) that pass over and under them. On scroll the
// horizontals run in from the left and the verticals drop in one by one,
// the same way the logo weaves itself.
export function WeaveBand({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`weave-band${className ? ` ${className}` : ""}`}>
      <span className="weave-band-weft">
        <i />
        <i />
        <i />
      </span>
      <span className="weave-band-warp">
        {Array.from({ length: COLUMNS }, (_, index) => (
          <i data-odd={index % 2 === 1 ? "" : undefined} key={index} style={{ "--c": index } as CSSProperties} />
        ))}
      </span>
    </div>
  );
}
