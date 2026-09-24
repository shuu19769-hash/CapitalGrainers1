export type Testimonial = {
  brand: string;
  quote: string;
  service?: string;
  logoSrc?: string;
};

export const testimonials: Testimonial[] = [
  {
    brand: "ZAZAAR",
    quote:
      "The Capital Gainers completely transformed our ecommerce growth. Their SEO and ad strategy pushed us into a new revenue tier — Rs 13.5M in sessions-driven sales in a single quarter.",
    service: "SEO & Meta Ads",
    logoSrc: "/images/brands/zazaar.png",
  },
  {
    brand: "Vape Coil UK",
    quote:
      "They engineered a high-converting funnel for us from the ground up. Profitable ROAS, scalable creatives, and a partner that actually understands ecommerce.",
    service: "Meta Ads & Funnels",
  },
  {
    brand: "Rehan Malik Store",
    quote:
      "From conversion rate to brand identity — every detail was elevated. We crossed 4,400+ orders in one quarter with a 2.48% conversion rate.",
    service: "Shopify & CRO",
    logoSrc: "/images/brands/rehan-malik.png",
  },
  {
    brand: "Austin Style",
    quote:
      "Their creative strategy unlocked a level of social ad performance we hadn't seen before. Product visibility and engagement multiplied.",
    service: "Social Ads",
    logoSrc: "/images/brands/austin-style.png",
  },
  {
    brand: "Kidzaar",
    quote:
      "They rebuilt our ecommerce experience from a customer-first lens. Smoother checkout, better retention, more repeat customers.",
    service: "Shopify & CRO",
  },
];
