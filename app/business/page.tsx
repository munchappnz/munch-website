import type { Metadata } from "next";
import { BusinessHero } from "@/components/BusinessHero";
import { BusinessBenefits } from "@/components/BusinessBenefits";
import { BusinessOnboardingVideo } from "@/components/BusinessOnboardingVideo";
import { BusinessOnboardingSteps } from "@/components/BusinessOnboardingSteps";
import { PendingReviewCallout } from "@/components/PendingReviewCallout";
import { LiveDealPreview } from "@/components/LiveDealPreview";
import { BusinessFAQ, BUSINESS_FAQS } from "@/components/BusinessFAQ";
import { BusinessFinalCTA } from "@/components/BusinessFinalCTA";
import { BusinessStickyCta } from "@/components/BusinessStickyCta";

const title = "Munch for Business | Create Food Deals & Reach More Diners";
const description =
  "Create recurring restaurant deals, control when they run and reach nearby diners with Munch. See how to set up your business and publish your first offer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business" },
  openGraph: {
    title,
    description,
    url: "/business",
    images: [
      {
        url: "/business-onboarding/munch-business-onboarding-poster.webp",
        width: 720,
        height: 1280,
        alt: "Munch Business setup walkthrough featuring Little Fig Kitchen.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/business-onboarding/munch-business-onboarding-poster.webp"],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BUSINESS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function BusinessPage() {
  return (
    <div className="pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <BusinessHero />
      <BusinessBenefits />
      <BusinessOnboardingVideo />
      <BusinessOnboardingSteps />
      <PendingReviewCallout />
      <LiveDealPreview />
      <BusinessFAQ />
      <BusinessFinalCTA />
      <BusinessStickyCta />
    </div>
  );
}
