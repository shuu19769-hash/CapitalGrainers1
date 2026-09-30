export type AwardBadge = {
  id: string;
  label: string;
  accent: string;
  logoSrc: string;
  logoAlt: string;
};

export const awardBadges: AwardBadge[] = [
  {
    id: "1",
    label: "Ecommerce Growth Excellence",
    accent: "#8a6d4f",
    logoSrc: "/images/brands/zazaar.png",
    logoAlt: "ZAZAAR",
  },
  {
    id: "2",
    label: "Top Performance Marketing Partner",
    accent: "#a08060",
    logoSrc: "/images/brands/megacore.png",
    logoAlt: "MegaCore International",
  },
  {
    id: "3",
    label: "#1 ROI-Focused Digital Agency",
    accent: "#6b5340",
    logoSrc: "/images/brands/austin-style.png",
    logoAlt: "Austin Style",
  },
  {
    id: "4",
    label: "Best SEO & Paid Media Campaign",
    accent: "#8a6d4f",
    logoSrc: "/images/brands/rehan-malik.png",
    logoAlt: "Rehan Malik Store",
  },
  {
    id: "5",
    label: "Most Innovative AI Marketing Systems",
    accent: "#a66d4f",
    logoSrc: "/images/brands/crystal-media.png",
    logoAlt: "Crystal Media",
  },
];
