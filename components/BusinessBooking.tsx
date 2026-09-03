import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { CalendarIcon } from "./icons";

export function BusinessBooking() {
  if (!siteConfig.businessBookingUrl) return null;

  return (
    <section className="bg-munch-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-munch-border bg-munch-cream p-8 text-center sm:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-munch-orange-soft text-munch-orange">
            <CalendarIcon className="h-7 w-7" />
          </span>
          <h2 className="text-2xl font-extrabold text-munch-black sm:text-3xl">
            Book a free onboarding call
          </h2>
          <p className="max-w-md text-munch-muted">
            Prefer to talk it through? Book a free 30-minute call with the
            Munch team and we&rsquo;ll help you get your business and first
            deal set up.
          </p>
          <Link
            href={siteConfig.businessBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-munch-orange px-6 py-3.5 text-base font-semibold text-munch-white transition-transform hover:-translate-y-0.5 hover:bg-munch-orange-dark"
          >
            Book a call
            <span className="sr-only">(opens Calendly in a new tab)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
