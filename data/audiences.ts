export type Audience = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  relatedServiceHref?: string;
};

export const audiences: Audience[] = [
  {
    slug: "ecommerce-brands",
    title: "Ecommerce brands",
    shortDescription:
      "Coordinated SEO, paid media, CRO, and storefront optimization for DTC and online retail.",
    description:
      "We help ecommerce brands scale profitably with integrated growth—organic search, Meta and Google Ads, conversion optimization, and Shopify operations working as one system.",
    highlights: [
      "Channel mix aligned to margin and LTV",
      "Creative and media testing at scale",
      "Technical SEO and storefront performance",
    ],
    relatedServiceHref: "/services/ecommerce-scaling",
  },
  {
    slug: "lead-generation",
    title: "Lead generation websites",
    shortDescription: "High-intent funnels and performance media built to capture qualified leads.",
    description:
      "From landing page architecture to Google Ads and conversion tracking, we engineer lead gen programs that improve cost per acquisition while maintaining lead quality.",
    highlights: [
      "Intent-based keyword and offer strategy",
      "Landing page and form optimization",
      "Transparent attribution and reporting",
    ],
    relatedServiceHref: "/services/google-ads",
  },
  {
    slug: "multi-location",
    title: "Multi-location businesses",
    shortDescription: "Local SEO and location-based paid targeting across every market you serve.",
    description:
      "We unify brand consistency with location-level performance—local search visibility, geo-targeted campaigns, and landing experiences that convert in each region.",
    highlights: [
      "Local SEO and Google Business Profile support",
      "Geo-structured paid campaigns",
      "Location landing page frameworks",
    ],
    relatedServiceHref: "/services/search-engine-optimization",
  },
  {
    slug: "shopify-wordpress",
    title: "Shopify & WordPress brands",
    shortDescription: "Fast, conversion-ready stores and sites with technical SEO built in.",
    description:
      "Whether you sell on Shopify or publish on WordPress, we combine development, merchandising, and search foundations so your owned properties support revenue growth.",
    highlights: [
      "Shopify theme and app optimization",
      "WordPress performance and SEO",
      "Checkout and UX improvements",
    ],
    relatedServiceHref: "/services/shopify-development",
  },
  {
    slug: "startups",
    title: "Performance-driven startups",
    shortDescription: "Lean growth stacks without the overhead of a full in-house team.",
    description:
      "Early-stage brands need speed and clarity. We deploy paid acquisition, creative, analytics, and automation so you can validate channels and scale what works.",
    highlights: [
      "Rapid channel testing",
      "Founder-friendly reporting",
      "Flexible engagement models",
    ],
    relatedServiceHref: "/services/meta-ads",
  },
  {
    slug: "b2b-services",
    title: "B2B & service companies",
    shortDescription: "Authority SEO and demand capture that reaches decision-makers.",
    description:
      "B2B growth requires trust and timing. We build SEO authority, LinkedIn and Google demand programs, and nurture paths that connect with buyers researching solutions.",
    highlights: [
      "Thought leadership and content SEO",
      "LinkedIn and search demand capture",
      "Pipeline-focused reporting",
    ],
    relatedServiceHref: "/contact",
  },
  {
    slug: "fashion-lifestyle",
    title: "Fashion & lifestyle",
    shortDescription: "Creative-led social and brand-forward campaigns in competitive categories.",
    description:
      "Lifestyle brands win on story and performance together. We pair Meta and TikTok media with creative systems that earn attention and drive purchases.",
    highlights: [
      "Creative testing frameworks",
      "Seasonal campaign planning",
      "Influencer and UGC alignment",
    ],
    relatedServiceHref: "/case-studies/austin-style",
  },
  {
    slug: "food-beverage",
    title: "Food & beverage",
    shortDescription: "Local and DTC growth for restaurants, delivery, and CPG-style brands.",
    description:
      "Food brands face tight margins and fierce competition. We focus on high-intent search, local visibility, and paid social that fills tables and carts profitably.",
    highlights: [
      "Local SEO and map visibility",
      "Offer-led paid social",
      "Repeat purchase and retention hooks",
    ],
    relatedServiceHref: "/services/google-ads",
  },
  {
    slug: "home-services",
    title: "Home services",
    shortDescription: "Lead gen and local search for contractors, trades, and service areas.",
    description:
      "Home service businesses need calls and booked jobs—not vanity clicks. We structure Google Ads, local SEO, and landing pages around service areas and high-intent queries.",
    highlights: [
      "Service-area campaign structure",
      "Call tracking and form optimization",
      "Review and trust signals on-site",
    ],
    relatedServiceHref: "/services/search-engine-optimization",
  },
  {
    slug: "health-wellness",
    title: "Health & wellness",
    shortDescription: "Compliant, trust-first marketing for practices and wellness brands.",
    description:
      "Health and wellness categories demand credibility. We build educational SEO content, careful ad messaging, and conversion paths that respect regulations and patient trust.",
    highlights: [
      "Educational content and SEO",
      "Policy-aware paid campaigns",
      "Appointment and inquiry funnels",
    ],
    relatedServiceHref: "/contact",
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    shortDescription: "Demand gen and content systems for software and tech services.",
    description:
      "SaaS and tech services need pipeline clarity. We align SEO, paid search, and landing experiences to trial signups, demos, and sales-qualified leads.",
    highlights: [
      "Product-led and sales-led funnel support",
      "Technical SEO for docs and blogs",
      "LinkedIn and Google ABM-style campaigns",
    ],
    relatedServiceHref: "/services/website-development",
  },
];

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
