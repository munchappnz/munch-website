import Image from "next/image";
import Link from "next/link";
import { DownloadMunchButton } from "./DownloadMunchButton";
import { PlayIcon, ClockIcon } from "./icons";

export function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-munch-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-munch-orange">
            Munch for Business
          </p>

          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-munch-orange bg-munch-orange-soft px-4 py-2 text-sm font-semibold text-munch-orange-dark lg:mx-0">
            <ClockIcon className="h-4 w-4 shrink-0" />
            Free until 2027 — set up in minutes
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-munch-black sm:text-5xl lg:text-[3.25rem]">
            Turn quiet hours into more customers.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-munch-muted lg:mx-0">
            Create time-limited offers, choose when they run and how many are
            available, and get discovered by nearby diners. Set up your
            business and first recurring deal in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <DownloadMunchButton size="lg" />
            <Link
              href="#setup-video"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-munch-black/15 px-6 py-4 text-base font-semibold text-munch-black transition-colors hover:border-munch-orange hover:text-munch-orange"
            >
              <PlayIcon className="h-4 w-4" />
              Watch the 60-second setup
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-sm text-munch-muted lg:mx-0">
            Create deals while your business is under review. They
            automatically go live once you are approved.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-munch-muted/80">
            Built for restaurants, cafés, bars and food trucks.
          </p>
        </div>

        {/* Video preview */}
        <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:mx-0 lg:max-w-[300px]">
          <Link
            href="#setup-video"
            aria-label="Watch the 60-second Munch Business setup video, starring Little Fig Kitchen"
            className="group relative block overflow-hidden rounded-[2.25rem] border-4 border-munch-black bg-munch-black shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <Image
              src="/business-onboarding/munch-business-onboarding-poster.webp"
              alt=""
              width={720}
              height={1280}
              className="h-auto w-full"
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center bg-munch-black/15 transition-colors group-hover:bg-munch-black/30">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-munch-white/95 text-munch-orange shadow-lg transition-transform group-hover:scale-105">
                <PlayIcon className="h-6 w-6 translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
