/** Set to e.g. `/images/who-we-serve.jpg` after you add artwork; `null` hides the image column. */
export const whoWeServeImage: string | null = "/images/pages/executive-strategy.jpg";

export type WhoWeServeItem = {
  title: string;
  description: string;
  href: string;
};

export const whoWeServeIntro =
  "We partner with ambitious businesses across ecommerce, lead generation, lifestyle, and B2B—engineering SEO, paid media, storefronts, and automation that compound traffic, leads, and revenue. Whether you are scaling an established brand or building momentum in a competitive category, we align strategy to your margins, audience, and growth goals. Common partners we serve include:";

export const whoWeServeItems: WhoWeServeItem[] = [
  {
    title: "Ecommerce brands",
    description:
      "We scale DTC and online retail with coordinated SEO, paid social, Google Ads, CRO, and storefront optimization—so traffic converts and revenue compounds.",
    href: "/who-we-serve/ecommerce-brands",
  },
  {
    title: "Lead generation websites",
    description:
      "High-intent funnels, landing pages, and performance media built to capture qualified leads and improve cost per acquisition at scale.",
    href: "/who-we-serve/lead-generation",
  },
  {
    title: "Multi-location businesses",
    description:
      "Local SEO, location-based paid targeting, and consistent brand experiences that perform across every market you operate in.",
    href: "/who-we-serve/multi-location",
  },
  {
    title: "Shopify & WordPress brands",
    description:
      "Fast, conversion-ready stores and sites—custom development, merchandising, and technical SEO that support profitable growth.",
    href: "/who-we-serve/shopify-wordpress",
  },
  {
    title: "Performance-driven startups",
    description:
      "Lean growth stacks: paid acquisition, creative, analytics, and automation without the overhead of a full in-house team.",
    href: "/who-we-serve/startups",
  },
  {
    title: "B2B & service companies",
    description:
      "Authority-building SEO, LinkedIn and Google demand capture, and nurture systems that connect with decision-makers.",
    href: "/who-we-serve/b2b-services",
  },
];
