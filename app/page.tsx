import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { ConsumerHowItWorks } from "@/components/ConsumerHowItWorks";
import { AppShowcase } from "@/components/AppShowcase";
import { FeatureCards } from "@/components/FeatureCards";
import { BusinessSection } from "@/components/BusinessSection";
import { BusinessHowItWorks } from "@/components/BusinessHowItWorks";
import { FAQ } from "@/components/FAQ";
import { DownloadSection } from "@/components/DownloadSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ConsumerHowItWorks />
      <AppShowcase />
      <FeatureCards />
      <BusinessSection />
      <BusinessHowItWorks />
      <DownloadSection
        id="download"
        heading="Your next deal is probably nearby."
        supporting="Download Munch and see what's around you."
        showQrCode
      />
      <FAQ />
      <DownloadSection
        heading="Ready to Munch?"
        supporting="Good food. Better deals. Right when they're available."
        showBusinessLink
        variant="dark"
      />
    </>
  );
}
