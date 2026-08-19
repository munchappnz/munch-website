import { SearchPinIcon, TicketIcon, ForkPlateIcon } from "./icons";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    icon: SearchPinIcon,
    title: "Find deals near you",
    copy: "Browse deals from nearby restaurants, cafés and bars.",
  },
  {
    number: "02",
    label: "Claim",
    icon: TicketIcon,
    title: "Grab a deal",
    copy: "Choose an available offer and claim it through Munch.",
  },
  {
    number: "03",
    label: "Enjoy",
    icon: ForkPlateIcon,
    title: "Go Munch",
    copy: "Visit the venue during the deal period and follow the redemption instructions in the app.",
  },
];

export function ConsumerHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-munch-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
            Good food. Better timing.
          </h2>
          <p className="mt-3 text-lg text-munch-muted">
            Munch makes finding a good deal as easy as deciding where to eat.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-3xl border border-munch-border bg-munch-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold tracking-wide text-munch-orange">
                {step.number} — {step.label}
              </span>
              <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-munch-orange-soft text-munch-orange">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-munch-black">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-munch-muted">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
