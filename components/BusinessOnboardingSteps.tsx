import Image from "next/image";
import { littleFig, littleFigDeal } from "@/lib/littleFig";
import { ClockIcon } from "./icons";

type Step = {
  number: number;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  highlight?: boolean;
};

const STEPS: Step[] = [
  {
    number: 1,
    title: "Download Munch",
    description:
      'Search "Munch: Local Food Deals" in the App Store and download the app.',
    images: [
      {
        src: "/business-onboarding/step-01-download-munch.webp",
        alt: "App Store listing for Munch: Local Food Deals.",
      },
    ],
  },
  {
    number: 2,
    title: "Switch to business sign-up",
    description:
      'Open the sign-up screen and tap "Signing up as a business? Switch here".',
    images: [
      {
        src: "/business-onboarding/step-02-switch-to-business.webp",
        alt: "Munch sign-up screen with the Switch to business link highlighted.",
      },
    ],
  },
  {
    number: 3,
    title: "Create your business account",
    description:
      'Enter your full name, email address and password, then tap "Create account".',
    images: [
      {
        src: "/business-onboarding/step-03-create-account.webp",
        alt: "Munch business account creation screen with name, email and password fields.",
      },
    ],
  },
  {
    number: 4,
    title: "Verify your email",
    description:
      "Open the confirmation email from Munch and tap the verification link.",
    images: [
      {
        src: "/business-onboarding/step-04-verify-email.webp",
        alt: `Email confirmation screen for ${littleFig.email}, prompting you to verify your email address.`,
      },
    ],
  },
  {
    number: 5,
    title: "Start your business setup",
    description: 'Return to Munch and tap "Set up business".',
    images: [
      {
        src: "/business-onboarding/step-05-start-business-setup.webp",
        alt: "Munch Business dashboard with the Set up business button highlighted.",
      },
    ],
  },
  {
    number: 6,
    title: "Add your business details",
    description:
      "Upload your business image and enter the information diners will see.",
    images: [
      {
        src: "/business-onboarding/step-06-add-business-details.webp",
        alt: `Business details form filled in for ${littleFig.name}: ${littleFig.description}, ${littleFig.address}, ${littleFig.suburb}, ${littleFig.venueType}, ${littleFig.cuisine}, ${littleFig.email}.`,
      },
    ],
  },
  {
    number: 7,
    title: "Create deals while under review",
    description:
      "Your profile is reviewed before it appears to diners, but you can create deals immediately. Your saved deals automatically become visible once your business is approved.",
    images: [
      {
        src: "/business-onboarding/step-07-pending-review.webp",
        alt: "Munch Business dashboard showing the business pending review, with the Recurring button highlighted.",
      },
    ],
    highlight: true,
  },
  {
    number: 8,
    title: "Create a recurring deal",
    description:
      "Enter the offer name, description, repeating days, discount, daily availability and start and end times.",
    images: [
      {
        src: "/business-onboarding/step-08-create-recurring-deal.webp",
        alt: `Recurring ${littleFigDeal.name} deal form with weekday schedule and ${littleFigDeal.discount} discount.`,
      },
      {
        src: "/business-onboarding/step-08b-set-deal-times.webp",
        alt: `Recurring deal form showing ${littleFigDeal.codesPerDay} codes per day, a ${littleFigDeal.startTime} start time and a ${littleFigDeal.endTime} end time.`,
      },
    ],
  },
  {
    number: 9,
    title: "Your deal goes live",
    description: `Once ${littleFig.name} is approved, the ${littleFigDeal.name} deal automatically becomes visible to diners in the Munch app.`,
    images: [
      {
        src: "/business-onboarding/step-09-deal-live.webp",
        alt: `${littleFig.name} deal visible to diners in the Munch app.`,
      },
    ],
  },
];

export function BusinessOnboardingSteps() {
  return (
    <section id="onboarding-steps" className="scroll-mt-20 bg-munch-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
            Create your first recurring deal
          </h2>
          <p className="mt-3 text-lg text-munch-muted">
            Follow these steps to set up your business and prepare your
            first offer. You do not need to wait for approval before
            creating your deal.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className={`flex flex-col rounded-3xl border p-6 ${
                step.highlight
                  ? "border-munch-orange bg-munch-orange-soft/50"
                  : "border-munch-border bg-munch-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-munch-orange text-sm font-bold text-munch-white"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                {step.highlight && (
                  <span className="flex items-center gap-1.5 rounded-full bg-munch-orange px-3 py-1 text-xs font-semibold text-munch-white">
                    <ClockIcon className="h-3.5 w-3.5" />
                    No waiting required
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold text-munch-black">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-munch-muted">
                {step.description}
              </p>

              <div
                className={`mt-5 grid gap-3 ${
                  step.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {step.images.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-munch-border shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={720}
                      height={1280}
                      loading="lazy"
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
