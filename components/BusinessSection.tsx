import { ClockIcon, UsersIcon, SlidersIcon, CheckIcon } from "./icons";

const CAPABILITIES = [
  "Choose an offer",
  "Choose a discount",
  "Choose when it runs",
  "Publish it to Munch",
  "Let nearby users discover it",
];

const BENEFITS = [
  {
    icon: ClockIcon,
    title: "Fill quieter hours",
    copy: "Run deals when your venue has spare capacity.",
  },
  {
    icon: UsersIcon,
    title: "Reach nearby customers",
    copy: "Be discovered by people actively looking for somewhere to eat or drink.",
  },
  {
    icon: SlidersIcon,
    title: "You're in control",
    copy: "Choose the deal, discount, availability and conditions.",
  },
];

export function BusinessSection() {
  return (
    <section
      id="for-businesses"
      className="scroll-mt-20 bg-munch-black text-munch-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-munch-orange">
            Munch for businesses
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Turn quiet hours into busy ones.
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Munch helps restaurants, cafés and bars promote offers during the
            times they want more customers.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {CAPABILITIES.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-munch-orange text-munch-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-munch-orange/20 text-munch-orange">
                <benefit.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
