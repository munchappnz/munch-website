import Image from "next/image";
import { littleFig, littleFigDeal } from "@/lib/littleFig";

const LABELS = [
  `${littleFigDeal.discount} off`,
  littleFigDeal.name,
  littleFig.suburb,
  "Ends soon",
];

export function LiveDealPreview() {
  return (
    <section className="bg-munch-white">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
          See your offer the way diners see it
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-munch-muted">
          Once approved, your deal can appear in Munch&rsquo;s featured and
          nearby-deal sections, helping diners discover {littleFig.name} when
          the offer is available.
        </p>

        <div className="mx-auto mt-10 w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-munch-border shadow-lg">
          <Image
            src="/business-onboarding/step-09-deal-live.webp"
            alt={`${littleFig.name} deal visible to diners in the Munch app.`}
            width={720}
            height={1280}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>

        <ul className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
          {LABELS.map((label) => (
            <li
              key={label}
              className="rounded-full border border-munch-border bg-munch-cream px-3.5 py-1.5 text-xs font-semibold text-munch-black"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
