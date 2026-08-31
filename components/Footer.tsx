import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { InstagramIcon, TikTokIcon } from "./icons";

const FOOTER_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "For businesses", href: "/business" },
  { label: "Download", href: "/#download" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hasSocial = Boolean(siteConfig.instagramUrl || siteConfig.tiktokUrl);

  return (
    <footer className="border-t border-munch-border bg-munch-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Image
              src="/brand/munch-wordmark.png"
              alt="Munch"
              width={130}
              height={73}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-munch-muted">
              Eat more. Spend less. Munch better.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-10">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-munch-black/80 hover:text-munch-orange"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-munch-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-munch-muted">
            © {year} Munch. All rights reserved.
          </p>

          {hasSocial && (
            <div className="flex items-center gap-4">
              {siteConfig.instagramUrl && (
                <Link
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Munch on Instagram"
                  className="text-munch-black/70 hover:text-munch-orange"
                >
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.tiktokUrl && (
                <Link
                  href={siteConfig.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Munch on TikTok"
                  className="text-munch-black/70 hover:text-munch-orange"
                >
                  <TikTokIcon className="h-5 w-5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
