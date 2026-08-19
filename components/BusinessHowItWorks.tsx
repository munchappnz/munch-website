import Image from "next/image";
import { StoreButtons } from "./StoreButtons";

const STEPS = [
  {
    number: "01",
    title: "Download Munch",
    copy: "Download the same Munch app your customers use.",
  },
  {
    number: "02",
    title: "List your business",
    copy: "Select the business option in the app and create your venue profile.",
  },
  {
    number: "03",
    title: "Create your deals",
    copy: "Choose your offer and when you want customers to see it.",
  },
];

export function BusinessHowItWorks() {
  return (
    <section className="bg-munch-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-3xl border border-munch-border bg-munch-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold tracking-wide text-munch-orange">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-munch-black">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-munch-muted">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 rounded-[2rem] border border-munch-border bg-munch-white p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-extrabold text-munch-black sm:text-3xl">
              Get your business on Munch
            </h3>
            <p className="mt-2 text-munch-muted">
              Download Munch and select the business option when getting
              started.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </div>

          <div className="mx-auto w-[170px] overflow-hidden rounded-[1.75rem] shadow-xl sm:w-[190px] lg:ml-auto lg:mr-0">
            <Image
              src="/app/deal-screen.png"
              alt="A Munch business profile and deal, as seen by customers once your venue is listed"
              width={530}
              height={1076}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
