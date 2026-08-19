import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "./StoreButtons";
import { ArrowRightIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-munch-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-28 lg:pt-16">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-munch-orange">
            Deals worth leaving the house for.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-munch-black sm:text-5xl lg:text-6xl">
            Eat more. Spend less.
            <br />
            Munch better.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-munch-muted lg:mx-0">
            Discover limited-time food and drink deals from restaurants,
            cafés and bars near you.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons size="lg" />
          </div>

          <div className="mt-6 flex flex-col items-center gap-1 lg:items-start">
            <p className="text-sm text-munch-muted">
              Own a restaurant, café or bar?
            </p>
            <Link
              href="#for-businesses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-munch-black hover:text-munch-orange"
            >
              Get your business on Munch
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex h-[340px] w-full max-w-sm items-center justify-center sm:h-[420px] lg:mx-0 lg:h-[520px] lg:max-w-none">
          <div className="animate-float absolute right-[8%] top-2 w-[150px] rotate-[8deg] overflow-hidden rounded-[2rem] shadow-xl sm:w-[190px] lg:w-[230px]">
            <Image
              src="/app/deal-screen.png"
              alt="Munch business and deal screen showing a claimable 35% off offer at Harbourline Eatery"
              width={530}
              height={1076}
              className="h-auto w-full"
              priority={false}
            />
          </div>
          <div className="relative w-[190px] -rotate-[4deg] overflow-hidden rounded-[2rem] shadow-2xl sm:w-[230px] lg:w-[270px]">
            <Image
              src="/app/home-screen.png"
              alt="Munch home screen showing featured deals and popular spots nearby"
              width={576}
              height={1136}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
