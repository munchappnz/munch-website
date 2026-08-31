import Image from "next/image";
import Link from "next/link";
import { DownloadMunchButton } from "./DownloadMunchButton";

export function BusinessFinalCTA() {
  return (
    <section className="bg-munch-black text-munch-white">
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

        <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
          Ready to create your first Munch deal?
        </h2>
        <p className="mt-3 text-lg text-white/70">
          Download Munch, set up your business and create your first
          recurring offer today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadMunchButton size="lg" />
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Need help getting set up?
          </Link>
        </div>
      </div>
    </section>
  );
}
