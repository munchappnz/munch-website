import QRCode from "qrcode";
import { appLinks, hasAppStoreLink, hasGooglePlayLink } from "@/lib/appLinks";

/**
 * Desktop-only QR code that lets someone browsing on a computer open the
 * Munch listing on their phone. Only renders when a real destination URL
 * is configured — never a placeholder or fake QR code.
 *
 * Heuristic: prefers the App Store URL, falls back to Google Play, and
 * renders nothing if neither is configured yet.
 */
export async function DownloadQRCode({ className = "" }: { className?: string }) {
  const target = hasAppStoreLink()
    ? appLinks.appStore
    : hasGooglePlayLink()
      ? appLinks.googlePlay
      : null;

  if (!target) return null;

  const svg = await QRCode.toString(target, {
    type: "svg",
    margin: 0,
    color: { dark: "#151515", light: "#00000000" },
  });

  return (
    <div
      className={`hidden lg:flex flex-col items-center gap-2 rounded-2xl border border-munch-border bg-munch-white p-4 shadow-sm ${className}`}
    >
      <div
        className="h-28 w-28 [&>svg]:h-full [&>svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
        role="img"
        aria-label="QR code to download Munch"
      />
      <p className="text-xs font-medium text-munch-muted">Scan to get Munch</p>
    </div>
  );
}
