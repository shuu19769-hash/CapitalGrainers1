export type PortfolioProject = {
  slug: string;
  brand: string;
  category: string;
  result: string;
  tags: string[];
  imageSrc: string;
  logoSrc?: string;
  summary: string;
  services: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "zazaar",
    brand: "ZAZAAR",
    category: "Ecommerce",
    result: "Rs 13.5M+ revenue scaled — 218K+ sessions driven",
    tags: ["Shopify", "SEO", "Meta"],
    imageSrc: "/images/portfolio/zazaar.jpg",
    logoSrc: "/images/brands/zazaar.png",
    summary:
      "Integrated Shopify, SEO, and Meta growth to move ZAZAAR into a new revenue tier with session and revenue gains.",
    services: ["Shopify Development", "SEO", "Meta Ads", "Ecommerce Scaling"],
  },
  {
    slug: "rehan-malik",
    brand: "Rehan Malik Store",
    category: "Luxury Apparel",
    result: "4,400+ orders / quarter — 2.48% conversion rate",
    tags: ["Shopify", "CRO", "Ads"],
    imageSrc: "/images/portfolio/rehan-malik.jpg",
    logoSrc: "/images/brands/rehan-malik.png",
    summary:
      "Elevated conversion rate and brand experience across the store journey, driving strong quarterly order volume.",
    services: ["Shopify Development", "Conversion Rate Optimization", "Paid Media"],
  },
  {
    slug: "vape-coil",
    brand: "Vape Coil UK",
    category: "Vape Ecommerce",
    result: "+$419K ad revenue — profitable ROAS scaling",
    tags: ["SEO", "Meta Ads", "Funnels"],
    imageSrc: "/images/portfolio/vape-coil.jpg",
    summary:
      "Engineered a high-converting funnel with scalable creatives and disciplined paid social performance.",
    services: ["SEO", "Meta Ads", "Conversion Rate Optimization"],
  },
  {
    slug: "austin-style",
    brand: "Austin Style",
    category: "Fashion & Lifestyle",
    result: "Higher product visibility — elevated brand perception",
    tags: ["Branding", "Social Ads"],
    imageSrc: "/images/portfolio/austin-style.jpg",
    logoSrc: "/images/brands/austin-style.png",
    summary:
      "Creative-led social strategy that improved product visibility and brand engagement.",
    services: ["Branding & Creative", "Meta Ads"],
  },
  {
    slug: "kidzaar",
    brand: "Kidzaar",
    category: "Kids Ecommerce",
    result: "Optimized CX & retention — more repeat customers",
    tags: ["Shopify", "CRO"],
    imageSrc: "/images/portfolio/kidzaar.jpg",
    summary:
      "Customer-first ecommerce improvements across checkout and retention for a smoother buying experience.",
    services: ["Shopify Development", "Conversion Rate Optimization"],
  },
];

export const portfolioFilters = ["All", "Shopify", "SEO", "Meta", "CRO", "Ads", "Branding"];

export function getPortfolioBySlug(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
