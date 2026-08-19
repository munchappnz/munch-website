import { SearchPinIcon, TicketIcon, ForkPlateIcon } from "./icons";

const STEPS = [
  {
    icon: SearchPinIcon,
    title: "Find",
    copy: "See nearby deals.",
  },
  {
    icon: TicketIcon,
    title: "Claim",
    copy: "Choose one you want.",
  },
  {
    icon: ForkPlateIcon,
    title: "Munch",
    copy: "Show up and enjoy.",
  },
];

export function ValueStrip() {
  return (
    <section
      aria-label="How Munch works, in short"
      className="border-y border-munch-border bg-munch-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-munch-black sm:text-3xl">
          Find it. Claim it. Munch it.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="flex items-center justify-center gap-3 rounded-2xl border border-munch-border bg-munch-cream px-5 py-4 sm:flex-col sm:text-center"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-munch-orange-soft text-munch-orange">
                <step.icon className="h-5 w-5" />
              </span>
              <div className="sm:mt-1">
                <p className="font-semibold text-munch-black">{step.title}</p>
                <p className="text-sm text-munch-muted">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
