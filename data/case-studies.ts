import type { PortfolioProject } from "./portfolio";
import { portfolioProjects } from "./portfolio";

export type CaseStudy = PortfolioProject & {
  industry: string;
  challenge: string;
  strategy: string;
  execution: string;
  metrics?: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    ...portfolioProjects[0],
    industry: "Ecommerce",
    challenge:
      "ZAZAAR needed to scale ecommerce revenue beyond paid spikes—with stronger organic demand and a cohesive Meta strategy.",
    strategy:
      "We aligned technical SEO, content visibility, and Meta campaigns around high-intent product demand and margin-safe scaling.",
    execution:
      "Storefront refinements, search optimization, and structured paid social testing were run as one growth program with shared reporting.",
    metrics: [
      { label: "Revenue", value: "Rs 13.5M+" },
      { label: "Sessions", value: "218K+" },
      { label: "Organic traffic", value: "+340%" },
    ],
  },
  {
    ...portfolioProjects[1],
    industry: "Luxury Apparel",
    challenge:
      "Rehan Malik Store required higher conversion efficiency and a more premium digital experience to match the brand.",
    strategy:
      "We diagnosed funnel leaks, refined UX and merchandising, and aligned paid traffic with conversion-ready landing paths.",
    execution:
      "CRO improvements, Shopify enhancements, and performance media were coordinated to lift order volume and conversion rate.",
    metrics: [
      { label: "Orders", value: "4,400+ / quarter" },
      { label: "Conversion rate", value: "2.48%" },
    ],
  },
  {
    ...portfolioProjects[2],
    industry: "Vape Ecommerce",
    challenge:
      "Vape Coil UK needed profitable paid scale without sacrificing ROAS as creative and audience fatigue set in.",
    strategy:
      "We rebuilt funnel architecture with SEO support, structured Meta testing, and creative iteration tied to purchase intent.",
    execution:
      "Landing paths, ad creative systems, and ongoing optimization focused on scalable, profitable revenue.",
    metrics: [{ label: "Ad revenue", value: "+$419K" }],
  },
  {
    ...portfolioProjects[3],
    industry: "Fashion & Lifestyle",
    challenge:
      "Austin Style sought stronger product visibility and social performance in a competitive lifestyle market.",
    strategy:
      "Creative-led social campaigns paired with brand-forward assets to earn attention and improve engagement.",
    execution:
      "Social ad creative, positioning, and campaign structure emphasized product storytelling and performance.",
    metrics: [{ label: "Outcome", value: "Higher product visibility" }],
  },
  {
    ...portfolioProjects[4],
    industry: "Kids Ecommerce",
    challenge:
      "Kidzaar needed a smoother customer experience to improve retention and repeat purchases.",
    strategy:
      "We approached the store from a customer-first lens—checkout, UX, and retention touchpoints.",
    execution:
      "Shopify improvements and CRO sprints focused on reducing friction and encouraging repeat customers.",
    metrics: [{ label: "Outcome", value: "Improved CX & retention" }],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
