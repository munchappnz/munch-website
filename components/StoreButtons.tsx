import Link from "next/link";
import { appLinks, hasAppStoreLink, hasGooglePlayLink } from "@/lib/appLinks";
import { AppleLogo, PlayLogo } from "./icons";

type StoreButtonsProps = {
  /** Visual size. "lg" is used in the hero / final CTA, "md" everywhere else. */
  size?: "md" | "lg";
  /** Optional extra classes for the wrapping element. */
  className?: string;
};

const base =
  "inline-flex items-center gap-3 rounded-2xl border font-semibold transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Reusable store download buttons.
 *
 * Renders real links when a URL is configured in lib/siteConfig.ts, and a
 * clearly-disabled "Coming soon" state when it isn't — so we never ship a
 * fake or dead app store link. Used identically in the Hero, Business
 * section, main Download section and the Final CTA.
 */
export function StoreButtons({ size = "md", className = "" }: StoreButtonsProps) {
  const padding = size === "lg" ? "px-6 py-4 text-base" : "px-5 py-3.5 text-sm";
  const iconSize = size === "lg" ? "h-7 w-7" : "h-6 w-6";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <StoreButton
        href={appLinks.appStore}
        available={hasAppStoreLink()}
        icon={<AppleLogo className={iconSize} />}
        eyebrow="Download on the"
        label="App Store"
        padding={padding}
      />
      <StoreButton
        href={appLinks.googlePlay}
        available={hasGooglePlayLink()}
        icon={<PlayLogo className={iconSize} />}
        eyebrow="Get it on"
        label="Google Play"
        padding={padding}
      />
    </div>
  );
}

function StoreButton({
  href,
  available,
  icon,
  eyebrow,
  label,
  padding,
}: {
  href: string;
  available: boolean;
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
  padding: string;
}) {
  const textBlock = (
    <span className="flex flex-col items-start leading-tight">
      <span className="text-[11px] font-medium opacity-80">
        {available ? eyebrow : "Coming soon to"}
      </span>
      <span className="text-current">{label}</span>
    </span>
  );

  if (!available) {
    return (
      <span
        className={`${base} ${padding} cursor-not-allowed border-munch-border bg-munch-white/60 text-munch-muted`}
        aria-disabled="true"
        role="button"
        tabIndex={-1}
        aria-label={`${label} — coming soon`}
      >
        {icon}
        {textBlock}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${padding} border-munch-black bg-munch-black text-munch-white hover:-translate-y-0.5 active:translate-y-0`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {textBlock}
    </Link>
  );
}
