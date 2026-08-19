"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { label: "How it works", hash: "#how-it-works" },
  { label: "For businesses", hash: "#for-businesses" },
  { label: "FAQ", hash: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b border-munch-border bg-munch-cream/90 backdrop-blur supports-[backdrop-filter]:bg-munch-cream/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Munch home">
          <Image
            src="/brand/munch-wordmark.png"
            alt="Munch"
            width={140}
            height={79}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.hash}
              href={hrefFor(link.hash)}
              className="text-sm font-medium text-munch-black/80 transition-colors hover:text-munch-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={hrefFor("#download")}
            className="inline-flex items-center rounded-full bg-munch-orange px-5 py-2.5 text-sm font-semibold text-munch-white transition-transform hover:-translate-y-0.5 hover:bg-munch-orange-dark"
          >
            Get Munch
          </Link>
        </div>

        {/* Mobile: CTA + menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={hrefFor("#download")}
            className="inline-flex items-center rounded-full bg-munch-orange px-4 py-2 text-sm font-semibold text-munch-white"
          >
            Get Munch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-munch-border text-munch-black"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-munch-border bg-munch-cream px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <Link
                  href={hrefFor(link.hash)}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-munch-black hover:bg-munch-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
