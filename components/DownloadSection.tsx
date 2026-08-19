import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "./StoreButtons";
import { DownloadQRCode } from "./DownloadQRCode";
import { ArrowRightIcon } from "./icons";

type DownloadSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  supporting: string;
  showQrCode?: boolean;
  showBusinessLink?: boolean;
  variant?: "cream" | "dark";
};

/**
 * Shared download-focused section, used for both the mid-page "Download"
 * section and the homepage's Final CTA — same component, different copy,
 * so the store-button treatment and icon presentation stay identical.
 */
export function DownloadSection({
  id,
  eyebrow,
  heading,
  supporting,
  showQrCode = false,
  showBusinessLink = false,
  variant = "cream",
}: DownloadSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`scroll-mt-20 ${isDark ? "bg-munch-black text-munch-white" : "bg-munch-cream"}`}
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-munch-white shadow-md">
          <Image
            src="/brand/munch-icon.png"
            alt="Munch"
            width={64}
            height={64}
            className="h-11 w-11 rounded-xl"
          />
        </div>

        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-munch-orange">
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-3 text-3xl font-extrabold sm:text-4xl ${isDark ? "text-munch-white" : "text-munch-black"}`}
        >
          {heading}
        </h2>
        <p className={`mt-3 text-lg ${isDark ? "text-white/70" : "text-munch-muted"}`}>
          {supporting}
        </p>

        <div className="mt-8 flex flex-col items-center gap-6">
          <StoreButtons size="lg" />
          {showQrCode && <DownloadQRCode />}
        </div>

        {showBusinessLink && (
          <div className="mt-8">
            <Link
              href="#for-businesses"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:text-munch-orange ${isDark ? "text-white/80" : "text-munch-black"}`}
            >
              Own a restaurant, café or bar? Get your business on Munch
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
