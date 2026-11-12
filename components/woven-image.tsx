import Image from "next/image";
import type { CSSProperties } from "react";

type WovenImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** How many vertical threads cover the image before it is woven open. */
  threads?: number;
  position?: string;
};

// An image that opens like a loom: coloured vertical threads cover it and pull
// away up and down, alternately, as it scrolls into view. Without scroll-driven
// animation support, or with reduced motion, the threads never show.
export function WovenImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  threads = 7,
  position
}: WovenImageProps) {
  return (
    <div className={`woven${className ? ` ${className}` : ""}`}>
      <Image
        alt={alt}
        className="woven-img"
        fill
        priority={priority}
        sizes={sizes}
        src={src}
        style={position ? { objectPosition: position } : undefined}
      />
      <span aria-hidden="true" className="woven-threads">
        {Array.from({ length: threads }, (_, index) => (
          <i key={index} style={{ "--t": index } as CSSProperties} />
        ))}
      </span>
    </div>
  );
}
