import Link from "next/link";
import { appLinks, hasAppStoreLink } from "@/lib/appLinks";

type DownloadMunchButtonProps = {
  size?: "md" | "lg";
  className?: string;
};

/**
 * Single, clearly-labelled "Download Munch" call to action for the business
 * landing page. Reuses the same App Store URL / availability check as
 * StoreButtons so it never links to a fake or dead App Store listing —
 * it falls back to a disabled "Coming soon" state instead.
 */
export function DownloadMunchButton({
  size = "lg",
  className = "",
}: DownloadMunchButtonProps) {
  const available = hasAppStoreLink();
  const padding = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-150 ${padding}`;

  if (!available) {
    return (
      <span
        className={`${base} cursor-not-allowed border border-munch-border bg-munch-white/60 text-munch-muted ${className}`}
        aria-disabled="true"
        role="button"
        tabIndex={-1}
        aria-label="Download Munch — coming soon to the App Store"
      >
        Download Munch — coming soon
      </span>
    );
  }

  return (
    <Link
      href={appLinks.appStore}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Munch on the App Store (opens in a new tab)"
      className={`${base} bg-munch-orange text-munch-white hover:-translate-y-0.5 hover:bg-munch-orange-dark active:translate-y-0 ${className}`}
    >
      Download Munch
    </Link>
  );
}
