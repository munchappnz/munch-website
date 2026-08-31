import { ClockIcon, SlidersIcon, RepeatIcon } from "./icons";

const BENEFITS = [
  {
    icon: ClockIcon,
    title: "Fill quiet periods",
    copy: "Run deals only on the days and during the hours when you want more customers.",
  },
  {
    icon: SlidersIcon,
    title: "Stay in control",
    copy: "Choose the discount, repeating days, start and end times, and how many codes are available.",
  },
  {
    icon: RepeatIcon,
    title: "Set it once",
    copy: "Create recurring weekly offers that continue running until they are changed or paused.",
  },
];

export function BusinessBenefits() {
  return (
    <section className="bg-munch-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="sr-only">Why businesses use Munch</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-munch-border bg-munch-cream p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-munch-orange-soft text-munch-orange">
                <benefit.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-munch-black">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-munch-muted">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
