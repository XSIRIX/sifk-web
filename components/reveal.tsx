import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Position in a group. Each step shifts the entrance slightly; capped so groups settle fast. */
  index?: number;
  as?: ElementType;
  variant?: "rise" | "clip";
};

// Visible by default. Browsers with scroll-driven animations add a short entrance;
// everyone else, and anyone who prefers reduced motion, simply sees the content.
export function Reveal({ children, className = "", index = 0, as: Tag = "div", variant = "rise" }: RevealProps) {
  return (
    <Tag
      className={`reveal reveal-${variant}${className ? ` ${className}` : ""}`}
      style={{ "--i": Math.min(index, 6) } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
