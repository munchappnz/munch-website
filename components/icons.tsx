// Small, hand-rolled line icons used across the site.
// Kept as inline SVG (no icon-library dependency) to stay lightweight and
// fully on-brand — simple rounded strokes that match the Munch UI.

type IconProps = {
  className?: string;
};

export function AppleLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.42 2.06-1.26 2.86-.92.87-2.02 1.36-3.1 1.28a3.1 3.1 0 0 1-.03-.4c0-1.1.47-2.1 1.24-2.83.4-.4.94-.75 1.55-1a4.9 4.9 0 0 1 1.55-.36c.02.15.04.3.05.45zm3.87 15.6c-.42.98-.62 1.42-1.16 2.29-.75 1.2-1.8 2.7-3.11 2.72-1.16.02-1.46-.76-3.04-.75-1.57.01-1.9.77-3.06.75-1.31-.02-2.3-1.36-3.05-2.56-2.1-3.33-2.32-7.24-1.02-9.32.92-1.48 2.38-2.35 3.75-2.35 1.4 0 2.28.77 3.44.77 1.12 0 1.8-.77 3.44-.77 1.22 0 2.52.67 3.45 1.82-3.03 1.66-2.54 5.98.36 7.4z" />
    </svg>
  );
}

export function PlayLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4.2 2.7c-.3.3-.5.7-.5 1.2v16.2c0 .5.2.9.5 1.2l.1.1L13.7 12l-9.4-9.4-.1.1z"
        fill="#00D2B8"
      />
      <path
        d="M16.9 15.2l-3.2-3.2v-.1l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.1z"
        fill="#FBBC04"
      />
      <path
        d="M17 15.1l-3.3-3.3-9.5 9.5c.4.4 1 .4 1.6.1L17 15.1z"
        fill="#EA4335"
      />
      <path
        d="M17 8.9L9.7 4.7c-.7-.4-1.3-.4-1.6.1l9.5 9.5 3.3-3.3z"
        fill="#34A853"
      />
    </svg>
  );
}

export function SearchPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10.5c0 5.5-8 11.5-8 11.5s-8-6-8-11.5a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10.5" r="2.8" />
    </svg>
  );
}

export function TicketIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" />
      <path d="M13 6v12" strokeDasharray="2 3" />
    </svg>
  );
}

export function ForkPlateIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="16" rx="3" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8.5 14h1M12 14h1M15.5 14h1M8.5 17.5h1M12 17.5h1" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="8.5" r="3" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17.5" cy="9.5" r="2.3" />
      <path d="M15.8 12.8A5.5 5.5 0 0 1 21.5 18" />
    </svg>
  );
}

export function SlidersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6h9M17 6h3M4 12h3M9 12h11M4 18h13M19 18h1" />
      <circle cx="13" cy="6" r="2" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 2h-3v13.6a2.9 2.9 0 1 1-2.4-2.86v-3.05a6 6 0 1 0 5.4 5.97V8.9a7.6 7.6 0 0 0 4.5 1.45v-3a4.6 4.6 0 0 1-4.5-4.55V2z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.5-6.5a1 1 0 0 0 0-1.7l-10.5-6.5A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

export function RepeatIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.66 5.66L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}

export function StoreIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5 9v10h14V9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}
