export type TeamMember = {
  name: string;
  roles: string[];
  bio: string;
  imageSrc: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Mirza Aryan Tariq",
    roles: ["Founder", "Business Growth Specialist", "Performance Marketer"],
    bio:
      "Mirza Aryan leads growth strategy and performance marketing—pairing funnel architecture with disciplined media buying to turn digital investment into measurable revenue.",
    imageSrc: "/images/team/aryan.jpg",
  },
  {
    name: "Shaukat Ayaz",
    roles: ["CEO", "Marketing Specialist"],
    bio:
      "Shaukat Ayaz sets the vision for The Capital Gainers and oversees marketing strategy—aligning campaigns, positioning, and client outcomes with long-term business growth.",
    imageSrc: "",
  },
  {
    name: "Sheikh Zain Jaffar",
    roles: ["Branding & Creative Expert", "AI Content Specialist"],
    bio:
      "Zain builds bold brand identities and creative systems, using AI-assisted content workflows to keep messaging consistent, on-brand, and built for performance.",
    imageSrc: "/images/team/zain.jpg",
  },
  {
    name: "Abdul Mohaiman Lodhi",
    roles: ["SEO & Google Ads", "AI Automation", "System Building"],
    bio:
      "Abdul Mohaiman engineers SEO, Google Ads, and automation systems that compound traffic and conversions—designing reliable growth infrastructure for scaling brands.",
    imageSrc: "/images/team/mohaiman.jpg",
  },
  {
    name: "Mubshar Saleem",
    roles: ["Graphic Designer", "Video Editor"],
    bio:
      "Mubshar designs high-impact graphics and edits conversion-focused video that strengthens brand perception and lifts creative performance across channels.",
    imageSrc: "/images/team/mubshar.jpg",
  },
  {
    name: "Shumaila Usman",
    roles: ["Custom Coding", "WordPress & Shopify Developer"],
    bio:
      "Shumaila builds fast, responsive, SEO-ready stores and sites on Shopify and WordPress, plus custom-coded experiences tuned for conversion and scale.",
    imageSrc: "/images/team/developer.jpg",
  },
];
