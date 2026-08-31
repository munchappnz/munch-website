import { DownloadMunchButton } from "./DownloadMunchButton";

/**
 * Restrained mobile-only sticky download bar. Fixed (not scroll-triggered,
 * so no client JS is needed) and padded for the device safe area; the
 * business page adds matching bottom padding so it never covers content.
 */
export function BusinessStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-munch-border bg-munch-cream/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-munch-cream/85 md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <DownloadMunchButton size="md" className="w-full" />
    </div>
  );
}
