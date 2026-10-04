export type PageImage = {
  src: string;
  alt: string;
  caption?: string;
};

/** Brand / lifestyle imagery for marketing pages (replaces portfolio rotation on rich pages). */
export const sitePageImages: PageImage[] = [
  {
    src: "/images/pages/development-workspace.jpg",
    alt: "Dual-monitor creative and development workspace",
  },
  {
    src: "/images/pages/marketing-analytics.jpg",
    alt: "Marketing analytics and content strategy on laptop",
  },
  {
    src: "/images/pages/marketing-funnel-strategy.jpg",
    alt: "Team planning a marketing funnel strategy",
  },
  {
    src: "/images/pages/web-design-wireframes.jpg",
    alt: "UX wireframes and website design planning",
  },
  {
    src: "/images/pages/executive-strategy.jpg",
    alt: "Executive strategy meeting room",
  },
  {
    src: "/images/pages/customer-journey-planning.jpg",
    alt: "Collaborative customer journey mapping",
  },
  {
    src: "/images/pages/growth-analytics.jpg",
    alt: "Growth analytics review with charts and reports",
  },
  {
    src: "/images/pages/web-development.jpg",
    alt: "Web development and CMS work on laptop",
  },
  {
    src: "/images/pages/performance-marketing.jpg",
    alt: "Performance marketing planning and metrics",
  },
  {
    src: "/images/pages/night-developer-workspace.png",
    alt: "Developer workspace with dual monitors and UI design",
  },
  {
    src: "/images/pages/developer-coding-mobile.png",
    alt: "Full stack development on laptop and mobile",
  },
  {
    src: "/images/pages/web-analytics-dashboard.png",
    alt: "Website analytics and performance dashboard",
  },
  {
    src: "/images/pages/digital-connectivity.png",
    alt: "Connected digital experiences across web and mobile",
  },
  {
    src: "/images/pages/collaborative-design.png",
    alt: "Collaborative website design and planning session",
  },
  {
    src: "/images/pages/paid-media-analytics.png",
    alt: "Google and Meta paid media analytics",
  },
  {
    src: "/images/pages/remote-development.png",
    alt: "Remote development and client collaboration",
  },
  {
    src: "/images/pages/marketing-strategy-brainstorm.png",
    alt: "Marketing strategy and team brainstorming",
  },
  {
    src: "/images/pages/digital-technology-network.png",
    alt: "Digital technology and cloud-connected systems",
  },
  {
    src: "/images/pages/growth-strategy-dashboard.png",
    alt: "Growth strategy with analytics and targeting",
  },
  {
    src: "/images/pages/custom-admin-dashboard.png",
    alt: "Custom web application and admin dashboard",
  },
];

const portfolioMedia: PageImage[] = [
  { src: "/images/portfolio/zazaar.jpg", alt: "Ecommerce campaign results" },
  { src: "/images/portfolio/rehan-malik.jpg", alt: "Luxury retail digital experience" },
  { src: "/images/portfolio/vape-coil.jpg", alt: "Performance marketing funnel" },
  { src: "/images/portfolio/austin-style.jpg", alt: "Fashion brand social growth" },
  { src: "/images/portfolio/kidzaar.jpg", alt: "Shopify conversion optimization" },
];

const pageImagePool =
  sitePageImages.length >= 3 ? sitePageImages : portfolioMedia;

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Three distinct images per page, stable per slug/seed */
export function getPageImages(seed: string, heroAlt?: string): {
  hero: PageImage;
  gallery: PageImage[];
} {
  const start = hashSeed(seed) % pageImagePool.length;
  const picked: PageImage[] = [];
  for (let i = 0; i < 3; i += 1) {
    picked.push(pageImagePool[(start + i) % pageImagePool.length]);
  }
  const hero = { ...picked[0], alt: heroAlt ?? picked[0].alt };
  return { hero, gallery: picked };
}
