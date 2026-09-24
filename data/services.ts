export type ServiceCategory = "earned" | "paid" | "owned" | "intelligent";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  includes: string[];
  bestFor: string;
  outcome: string;
  category: ServiceCategory;
};

export const serviceCategories: {
  id: ServiceCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "earned",
    title: "Earned Growth",
    description: "Organic visibility, search demand, and content systems that compound over time.",
  },
  {
    id: "paid",
    title: "Paid Growth",
    description: "Performance media engineered for profitable acquisition, retargeting, and scale.",
  },
  {
    id: "owned",
    title: "Owned Growth",
    description: "Stores, websites, and conversion experiences you control and optimize continuously.",
  },
  {
    id: "intelligent",
    title: "Intelligent Growth",
    description: "AI automation, reporting, and workflow systems that sharpen decisions and execution.",
  },
];

export const services: Service[] = [
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription:
      "Technical and content-led SEO that captures high-intent demand and builds durable organic traffic.",
    description:
      "We engineer SEO programs that align search visibility with revenue—not vanity rankings. From technical foundations to content architecture and authority building, our approach is built for ecommerce and growth-stage brands.",
    challenge:
      "Brands invest in ads while organic demand leaks to competitors because search foundations, content, and technical SEO are misaligned with buying intent.",
    includes: [
      "Technical SEO audits and remediation",
      "Keyword and search intent mapping",
      "On-page optimization and content strategy",
      "Internal linking and site architecture",
      "Performance tracking and reporting",
    ],
    bestFor: "Ecommerce brands, lead-generation sites, and businesses ready to compound organic revenue.",
    outcome: "Sustainable organic traffic growth tied to measurable business outcomes.",
    category: "earned",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortDescription:
      "High-intent search and shopping campaigns engineered for profitable ROAS at scale.",
    description:
      "Our Google Ads practice focuses on profitable acquisition—structuring campaigns around intent, margins, and scalable conversion data rather than broad spend.",
    challenge:
      "Rising CPCs and fragmented account structures make it difficult to maintain profitable ROAS as you scale.",
    includes: [
      "Account structure and campaign architecture",
      "Search, Shopping, and Performance Max management",
      "Conversion tracking and attribution setup",
      "Ongoing optimization and scaling tests",
      "Transparent performance reporting",
    ],
    bestFor: "Brands with clear conversion paths and products suited to search and shopping demand.",
    outcome: "Profitable paid search growth with clear visibility into what drives revenue.",
    category: "paid",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortDescription:
      "Full-funnel paid social with creative-led media buying that converts cold audiences into customers.",
    description:
      "We pair creative strategy with disciplined media buying across Meta—building funnels that move prospects from awareness to purchase with measurable efficiency.",
    challenge:
      "Creative fatigue and inconsistent funnel structure limit Meta performance even when spend increases.",
    includes: [
      "Campaign and audience strategy",
      "Creative testing frameworks",
      "Retargeting and prospecting balance",
      "Landing page and offer alignment",
      "ROAS-focused optimization",
    ],
    bestFor: "DTC, ecommerce, and lifestyle brands scaling paid social profitably.",
    outcome: "Scalable Meta performance with creative and media working as one system.",
    category: "paid",
  },
  {
    slug: "ecommerce-scaling",
    title: "Ecommerce Scaling",
    shortDescription:
      "Integrated growth across SEO, paid media, CRO, and storefront operations to scale revenue.",
    description:
      "Ecommerce scaling requires every lever—traffic, conversion, retention, and operations—to move together. We build coordinated growth systems for online stores ready to expand.",
    challenge:
      "Isolated tactics create short-term spikes without a repeatable system for revenue growth.",
    includes: [
      "Growth audit across channels",
      "Channel mix and budget planning",
      "Storefront and funnel optimization",
      "Retention and lifecycle considerations",
      "Executive-level growth reporting",
    ],
    bestFor: "Shopify and ecommerce brands pursuing multi-channel, profitable scale.",
    outcome: "A coordinated ecommerce growth engine aligned to revenue and margin goals.",
    category: "owned",
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortDescription:
      "High-performance Shopify experiences built for speed, conversion, and scalable merchandising.",
    description:
      "We develop and refine Shopify stores that load fast, merchandise clearly, and support conversion-focused customer journeys.",
    challenge:
      "Template-heavy stores with slow performance and weak UX cap conversion before marketing can scale.",
    includes: [
      "Theme customization and development",
      "Checkout and PDP optimization",
      "App integration and performance tuning",
      "Mobile-first responsive builds",
      "SEO-ready storefront structure",
    ],
    bestFor: "Brands on Shopify—or migrating to Shopify—that need a conversion-ready foundation.",
    outcome: "A storefront built to support paid and organic growth without friction.",
    category: "owned",
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    shortDescription:
      "Data-driven CRO sprints across landing pages, PDPs, and checkout flows that lift conversion rates.",
    description:
      "We run structured CRO programs—hypothesis-led tests, UX improvements, and funnel diagnostics—to turn more existing traffic into revenue.",
    challenge:
      "Traffic costs rise while conversion leaks at key steps in the journey, eroding ROAS and margins.",
    includes: [
      "Funnel and analytics review",
      "UX and messaging improvements",
      "A/B testing on high-impact pages",
      "Checkout and PDP optimization",
      "Iteration based on performance data",
    ],
    bestFor: "Brands with meaningful traffic volume seeking higher efficiency from every visit.",
    outcome: "Higher conversion rates and improved unit economics across the customer journey.",
    category: "owned",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription:
      "Custom AI agents that automate lead qualification, CRM enrichment, reporting, and growth ops.",
    description:
      "We implement practical AI automation—workflows, integrations, and assistants—that reduce manual work and sharpen marketing and operations decisions.",
    challenge:
      "Teams lose hours to repetitive tasks while insights stay trapped in disconnected tools.",
    includes: [
      "Workflow and process mapping",
      "AI-assisted reporting and insights",
      "Lead qualification and routing automation",
      "Ecommerce and support workflow automation",
      "Integration with your existing stack",
    ],
    bestFor: "Growth teams ready to automate operations without sacrificing quality or control.",
    outcome: "Faster execution, cleaner data, and more time focused on strategy and scale.",
    category: "intelligent",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription:
      "Fast, responsive, SEO-ready websites on Shopify, WordPress, or custom-coded stacks.",
    description:
      "We build websites that establish credibility, load quickly, and support search visibility and conversion—from marketing sites to custom builds.",
    challenge:
      "Outdated or slow websites undermine trust and limit both organic discovery and paid performance.",
    includes: [
      "UX-focused design implementation",
      "Responsive development",
      "SEO-ready technical setup",
      "CMS or custom stack delivery",
      "Performance and accessibility basics",
    ],
    bestFor: "Brands launching or refreshing their primary digital presence.",
    outcome: "A professional web foundation that supports growth across channels.",
    category: "owned",
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads",
    shortDescription:
      "Scroll-stopping creative strategy and performance media buying on a fast-growing platform.",
    description:
      "We help brands test and scale TikTok advertising with creative-first campaigns aligned to your funnel and margins.",
    challenge:
      "Platforms evolve quickly; without native creative and testing discipline, TikTok spend fails to convert.",
    includes: [
      "Campaign setup and structure",
      "Creative concepting and iteration",
      "Audience and funnel alignment",
      "Performance monitoring",
      "Scale planning",
    ],
    bestFor: "Brands with visual products and audiences active on short-form video.",
    outcome: "A disciplined TikTok channel that complements your broader paid mix.",
    category: "paid",
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    shortDescription:
      "Brand identity and creative production that earns attention and trust across channels.",
    description:
      "We develop cohesive brand and creative assets that strengthen perception and support performance marketing.",
    challenge:
      "Inconsistent creative weakens trust and reduces ad performance across paid and organic touchpoints.",
    includes: [
      "Brand identity direction",
      "Campaign and ad creative",
      "Visual systems for social and web",
      "UGC and content support",
      "Creative aligned to funnel stages",
    ],
    bestFor: "Brands refreshing identity or scaling creative volume for paid social.",
    outcome: "Clearer brand presence and creative that supports measurable growth.",
    category: "earned",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const megaMenuGroups = [
  {
    title: "Earned Growth",
    links: [
      { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
      { label: "Branding & Creative", href: "/services/branding-creative" },
    ],
  },
  {
    title: "Paid Growth",
    links: [
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "TikTok Ads", href: "/services/tiktok-ads" },
    ],
  },
  {
    title: "Owned Growth",
    links: [
      { label: "Ecommerce Scaling", href: "/services/ecommerce-scaling" },
      { label: "Shopify Development", href: "/services/shopify-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization" },
    ],
  },
  {
    title: "Intelligent Growth",
    links: [{ label: "AI Automation", href: "/services/ai-automation" }],
  },
];
