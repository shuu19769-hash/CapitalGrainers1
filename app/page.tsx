import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesIntro } from "@/components/sections/ServicesIntro";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { AISection } from "@/components/sections/AISection";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
      <LogoMarquee />
      <StatsSection />
      <ServicesIntro />
      <FeaturedCaseStudies />
      <PortfolioPreview />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamPreview />
      <AISection />
      <FinalCTA />
    </>
  );
}
