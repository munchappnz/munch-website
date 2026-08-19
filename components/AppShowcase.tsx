import Image from "next/image";
import { CheckIcon } from "./icons";

const HIGHLIGHTS = [
  "Featured deals",
  "Popular near you",
  "Café, restaurant & bar filters",
  "Live deal discounts",
  "Deal countdowns",
  "Business profiles",
  "Saved businesses & deals",
  "Claim deals in a tap",
];

export function AppShowcase() {
  return (
    <section className="bg-munch-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 mx-auto w-full max-w-xs lg:order-1 lg:mx-0 lg:max-w-sm">
          <div className="mx-auto w-[230px] overflow-hidden rounded-[2rem] shadow-2xl sm:w-[260px]">
            <Image
              src="/app/home-screen.png"
              alt="Munch home screen with featured deals, category filters and popular spots nearby"
              width={748}
              height={1442}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h2 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
            See what&rsquo;s good nearby.
          </h2>
          <p className="mt-3 text-lg text-munch-muted">
            Open Munch and instantly see deals happening around you.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-munch-border bg-munch-cream px-4 py-3 text-left text-sm font-medium text-munch-black"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-munch-orange text-munch-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
