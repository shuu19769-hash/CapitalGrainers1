import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { AwardBadgesSection } from "@/components/sections/AwardBadgesSection";
import { MarketingServicesIntro } from "@/components/sections/MarketingServicesIntro";
import { MediaPillarsSection } from "@/components/sections/MediaPillarsSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { ReviewsCTASection } from "@/components/sections/ReviewsCTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";

export const metadata = createMetadata({
  title: "Premium Digital Growth Agency",
  description:
    "SEO, paid ads, ecommerce, Shopify, CRO, and AI automation for brands that want measurable growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AwardBadgesSection />
      <MarketingServicesIntro />
      <MediaPillarsSection />
      <WhoWeServeSection />
      <DifferenceSection />
      <ReviewsCTASection />
      <TestimonialsSection />
      <WhyPartnerSection />
    </>
  );
}
