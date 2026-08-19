import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ChevronDownIcon } from "./icons";

function buildFaqs() {
  return [
    {
      q: "What is Munch?",
      a: "Munch helps people discover limited-time food and drink deals from nearby restaurants, cafés and bars.",
    },
    {
      q: "How do Munch deals work?",
      a: "Participating businesses create offers and choose when they are available. Munch users can discover and claim eligible deals through the app.",
    },
    {
      q: "How do I claim a deal?",
      a: "Choose an available offer in Munch, claim it and follow the redemption instructions shown in the app.",
    },
    {
      q: "Where can I use Munch?",
      a: `Munch is launching in ${siteConfig.launchLocation}, with more locations to come.`,
    },
    {
      q: "Does Munch cost anything?",
      a: "Munch is completely free for customers. Download the app, discover deals and claim them at no cost.",
    },
    {
      q: "I own a restaurant, café or bar. How do I join?",
      a: "Download the Munch app and select the business option when getting started. You can create and manage your venue directly through Munch.",
    },
    {
      q: "Can businesses choose when deals run?",
      a: "Yes. Businesses control when their offers are available and the conditions attached to them.",
    },
    {
      q: "How do I contact Munch?",
      a: "contact-support",
    },
  ];
}

export function FAQ() {
  const faqs = buildFaqs();

  return (
    <section id="faq" className="scroll-mt-20 bg-munch-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-3xl font-extrabold text-munch-black sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-munch-border rounded-3xl border border-munch-border bg-munch-cream">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-munch-black marker:content-none">
                {faq.q}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-munch-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-3 text-sm leading-relaxed text-munch-muted">
                {faq.a === "contact-support" ? (
                  <>
                    Get in touch through our{" "}
                    <Link
                      href="/support"
                      className="font-semibold text-munch-orange underline underline-offset-2"
                    >
                      support page
                    </Link>
                    .
                  </>
                ) : (
                  faq.a
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
