type IconProps = { className?: string };

const common = {
  "aria-hidden": true,
  fill: "none",
  focusable: false,
  stroke: "currentColor",
  strokeLinecap: "square" as const,
  strokeWidth: 1.75,
  viewBox: "0 0 20 20"
};

export function ArrowIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M6.2 3.5h-2.7v2c0 6 5 11 11 11h2v-2.7l-3.3-1.3-1.5 1.5a8 8 0 0 1-4.5-4.5l1.5-1.5z" />
    </svg>
  );
}

export function MailIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M3 5h14v10H3z" />
      <path d="M3.5 5.5 10 11l6.5-5.5" />
    </svg>
  );
}

export function PinIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 0 0-11 0c0 4 5.5 9 5.5 9z" />
      <path d="M10 10.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z" />
    </svg>
  );
}

export function PauseIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" focusable="false" viewBox="0 0 20 20">
      <path d="M6 4.5h2.5v11H6zM11.5 4.5H14v11h-2.5z" />
    </svg>
  );
}

export function PlayIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" focusable="false" viewBox="0 0 20 20">
      <path d="M6.5 4.25 15.5 10l-9 5.75z" />
    </svg>
  );
}
