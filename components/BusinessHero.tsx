import Link from "next/link";
import { DownloadMunchButton } from "./DownloadMunchButton";
import { BusinessOnboardingSteps } from "./BusinessOnboardingSteps";
import { PlayIcon } from "./icons";

export function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-munch-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:items-start lg:gap-12 lg:pb-24 lg:pt-16">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-munch-orange">
            Munch for Business
          </p>
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

        {/* Step-by-step guide */}
        <BusinessOnboardingSteps />
      </div>
    </section>
  );
}
