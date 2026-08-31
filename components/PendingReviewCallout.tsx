import { ClockIcon } from "./icons";

export function PendingReviewCallout() {
  return (
    <section className="bg-munch-cream">
      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="flex flex-col items-start gap-4 rounded-[2rem] border-2 border-munch-orange bg-munch-orange-soft/60 p-8 sm:flex-row sm:items-center sm:gap-6 sm:p-10">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-munch-orange text-munch-white">
            <ClockIcon className="h-7 w-7" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold text-munch-black sm:text-3xl">
              Create now. Go live after approval.
            </h2>
            <p className="mt-2 leading-relaxed text-munch-black/80">
              You do not need to wait for your business review before
              preparing your offers. Create your recurring deal while your
              profile is pending. Once your business is approved, eligible
              deals automatically become visible to diners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
