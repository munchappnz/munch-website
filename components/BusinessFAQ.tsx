import { ChevronDownIcon } from "./icons";

export const BUSINESS_FAQS = [
  {
    q: "Can I create a deal before my business is approved?",
    a: "Yes. You can create your recurring or one-off deals while your profile is under review. They remain unpublished and automatically become visible once your business is approved.",
  },
  {
    q: "What is a recurring deal?",
    a: "A recurring deal runs every week on the days and during the times you choose. You can set the discount and the number of codes available each day.",
  },
  {
    q: "Can I control how many customers claim an offer?",
    a: "Yes. When creating the deal, choose how many codes are available per day.",
  },
  {
    q: "How do customers pay?",
    a: "Customers pay your business as normal. Munch helps customers discover and claim the deal; it does not replace your existing till or point-of-sale system.",
  },
  {
    q: "Do Munch redemptions reconcile with my point-of-sale system?",
    a: "Not automatically. Redemptions shown in Munch are not directly verified by your POS, so they may not reconcile exactly with your till.",
  },
] as const;

export function BusinessFAQ() {
  return (
    <section id="business-faq" className="scroll-mt-20 bg-munch-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-3xl font-extrabold text-munch-black sm:text-4xl">
          Questions from business owners
        </h2>

        <div className="mt-10 divide-y divide-munch-border rounded-3xl border border-munch-border bg-munch-white">
          {BUSINESS_FAQS.map((faq) => (
            <details key={faq.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-munch-black marker:content-none">
                {faq.q}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-munch-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-3 text-sm leading-relaxed text-munch-muted">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
