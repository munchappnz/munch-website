const TRANSCRIPT_STEPS = [
  "Download Munch.",
  "Switch to business sign-up.",
  "Create your account.",
  "Verify your email.",
  "Add the Little Fig Kitchen business details.",
  "Submit the profile for review.",
  "Create an Early Dinner recurring offer.",
  "Set the discount, days, availability and times.",
  "Once approved, the deal appears to diners.",
];

export function BusinessOnboardingVideo() {
  return (
    <section id="setup-video" className="scroll-mt-20 bg-munch-cream-deep">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
          See the full setup in 60 seconds
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-munch-muted">
          Follow Little Fig Kitchen from downloading Munch through to
          creating a recurring deal that becomes visible to diners.
        </p>

        <div className="mx-auto mt-10 w-full max-w-[360px] sm:max-w-[400px]">
          <video
            className="h-auto w-full rounded-[2rem] border border-munch-border bg-munch-black shadow-lg"
            style={{ aspectRatio: "9 / 16" }}
            width={720}
            height={1280}
            controls
            playsInline
            muted
            preload="metadata"
            poster="/business-onboarding/munch-business-onboarding-poster.webp"
            aria-label="60-second walkthrough of setting up Little Fig Kitchen on Munch, from downloading the app to publishing a recurring Early Dinner deal"
          >
            <source src="/business-onboarding/munch-business-onboarding.mp4" type="video/mp4" />
            Your browser does not support embedded video.{" "}
            <a
              href="/business-onboarding/munch-business-onboarding.mp4"
              className="underline"
            >
              Download the video
            </a>{" "}
            instead.
          </video>
        </div>

        <details className="mx-auto mt-8 max-w-xl rounded-2xl border border-munch-border bg-munch-white p-5 text-left">
          <summary className="cursor-pointer list-none font-semibold text-munch-black marker:content-none">
            Read the video transcript
          </summary>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-munch-muted">
            {TRANSCRIPT_STEPS.map((line, index) => (
              <li key={line} className="flex gap-2">
                <span className="font-semibold text-munch-orange">
                  {index + 1}.
                </span>
                {line}
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
