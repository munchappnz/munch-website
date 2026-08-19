import { SearchPinIcon, ClockIcon, TicketIcon, ForkPlateIcon } from "./icons";

const FEATURES = [
  {
    icon: SearchPinIcon,
    title: "Deals nearby",
    copy: "Discover restaurants, cafés and bars offering deals around you.",
  },
  {
    icon: ClockIcon,
    title: "Right now",
    copy: "See when each offer is available and how long is left.",
  },
  {
    icon: TicketIcon,
    title: "Easy to claim",
    copy: "Find something you like and claim the deal directly through Munch.",
  },
  {
    icon: ForkPlateIcon,
    title: "New places",
    copy: "Use deals as an excuse to discover somewhere new.",
  },
];

export function FeatureCards() {
  return (
    <section className="bg-munch-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-munch-border bg-munch-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-munch-orange-soft text-munch-orange">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-munch-black">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-munch-muted">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
