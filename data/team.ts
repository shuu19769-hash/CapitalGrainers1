export type TeamBrandExperience = {
  name: string;
  url: string;
  description: string;
};

export type TeamProfileSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  brands?: TeamBrandExperience[];
  industries?: string[];
  quote?: string;
  note?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  roles: string[];
  /** Short line under name on profile hero */
  tagline?: string;
  bio: string;
  imageSrc: string;
  overview?: string;
  expertise?: string[];
  approach?: string[];
  profileSections?: TeamProfileSection[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "shaukat-ayaz",
    name: "Dr. Shaukat Ayaz",
    roles: ["Founder & CEO", "Digital Marketing Strategist", "Ph.D. in Marketing", "SMEDA Trainer"],
    tagline:
      "Digital Marketing Strategist · Ph.D. in Marketing · Academic Researcher · SMEDA Trainer",
    bio:
      "Dr. Shaukat Ayaz is a digital marketing strategist, marketing researcher, entrepreneur, and educator. As Co-Founder and CEO of The Capital Gainers, he combines academic research, industry experience, and practical business understanding to help brands build meaningful digital presence and sustainable growth.",
    imageSrc: "/images/team/shaukat.jpg",
    profileSections: [
      {
        title: "About",
        paragraphs: [
          "Dr. Shaukat Ayaz is a digital marketing strategist, marketing researcher, entrepreneur, and educator with expertise spanning digital marketing, brand development, performance marketing, and digital business growth.",
          "As the Co-Founder and CEO of The Capital Gainers (TCG), he brings together academic research, industry experience, and practical business understanding to help brands build meaningful digital presence, connect with their target audiences, and unlock sustainable growth.",
        ],
      },
      {
        title: "Research & strategic lens",
        paragraphs: [
          "With a Ph.D. in Marketing and international academic exposure as a Visiting Scholar at the University of Illinois Urbana-Champaign, Dr. Shaukat approaches digital marketing through the combined lens of consumer psychology, persuasive communication, marketing strategy, and technology.",
          "His professional experience includes working with brands across fashion, accessories, perfumes, skincare and cosmetics, healthcare, food, and service industries, helping businesses strengthen their digital positioning and pursue measurable commercial outcomes.",
          "He believes that effective marketing is not simply about attracting attention—it is about understanding people, creating relevant experiences, and translating business objectives into strategic digital action.",
        ],
      },
      {
        title: "Selected brand experience",
        paragraphs: [
          "The following businesses represent selected brands and organizations with which Dr. Shaukat has worked or been involved in digital marketing and business development initiatives.",
        ],
        brands: [
          { name: "ZAZAAR", url: "https://zazaar.com.pk/", description: "Fashion and consumer brand" },
          { name: "KidZaar", url: "https://www.kidzaar.pk", description: "Children's fashion and retail" },
          {
            name: "Rehan Malik",
            url: "https://www.rehanmalikstore.com",
            description: "E-commerce brand",
          },
          { name: "Meda Glow", url: "https://www.medaglow.com", description: "Skincare and beauty" },
          {
            name: "Nestro",
            url: "https://www.nestro.ae",
            description: "Interior design and furniture services",
          },
        ],
        note:
          "The exact scope of work and engagement period for each brand can be added to create more detailed case studies.",
      },
      {
        title: "Leadership at The Capital Gainers",
        paragraphs: [
          "As Founder and CEO of The Capital Gainers, Dr. Shaukat is building a digital marketing and solutions agency focused on helping businesses convert digital opportunities into meaningful business growth.",
          "TCG operates around a simple principle: businesses deserve more than digital visibility—they deserve digital strategies that contribute to growth.",
          "Under his leadership, the agency aims to bring together strategic marketing, creative communication, digital technologies, and performance-driven execution to support businesses in an increasingly competitive marketplace.",
        ],
      },
      {
        title: "Areas of strategic focus",
        paragraphs: [
          "Through TCG, Dr. Shaukat seeks to bridge the gap between business ambition and effective digital execution.",
        ],
        bullets: [
          "Digital Marketing Strategy",
          "Brand Development and Positioning",
          "Performance Marketing",
          "Search Engine Optimization",
          "Social Media Marketing",
          "E-commerce Growth",
          "Marketing Automation",
          "AI-Powered Marketing Solutions",
          "Digital Business Transformation",
        ],
      },
      {
        title: "Industry experience & brand growth",
        paragraphs: [
          "Dr. Shaukat has worked with a diverse range of businesses across consumer and service industries, developing experience in digital marketing strategy, brand communication, and online business development.",
          "His work has involved helping businesses establish and strengthen their digital presence, develop marketing strategies, engage relevant audiences, and pursue commercial growth through digital channels.",
        ],
        industries: [
          "Fashion",
          "Accessories",
          "Perfumes",
          "Skincare & Cosmetics",
          "Healthcare",
          "Food",
          "Interior Design",
          "Professional Services",
        ],
      },
      {
        title: "SME development & professional training",
        paragraphs: [
          "Dr. Shaukat is an official trainer associated with the Small and Medium Enterprises Development Authority (SMEDA), Pakistan, where he has trained small and medium-sized enterprises in digital business development.",
          "Through this work, he contributes to improving the digital capabilities of entrepreneurs and SMEs, helping them understand and utilize digital channels for business development. His involvement in SME training reflects his commitment to making practical marketing knowledge accessible to businesses seeking to compete and grow in the digital economy.",
        ],
        bullets: [
          "Establishing and strengthening digital presence",
          "Digital Marketing Strategy",
          "Performance Marketing",
          "Online Customer Acquisition",
          "Digital Tools for Business Growth",
        ],
      },
      {
        title: "Vision for The Capital Gainers",
        paragraphs: [
          "Dr. Shaukat envisions The Capital Gainers as a globally oriented digital marketing and solutions agency that helps businesses transform digital potential into business value. Through the integration of marketing expertise, consumer insights, technology, and practical execution, he aims to create solutions that enable businesses to strengthen their market presence, reach the right audiences, and pursue sustainable growth.",
        ],
        quote:
          "Every business has untapped potential. Our role is to help transform that potential into measurable growth and lasting business value.",
      },
    ],
  },
  {
    slug: "mirza-aryan-tariq",
    name: "Mirza Aryan Tariq",
    roles: ["Co-Founder", "Business Growth Specialist", "Performance Marketer"],
    bio:
      "Mirza Aryan leads growth strategy and performance marketing—pairing funnel architecture with disciplined media buying to turn digital investment into measurable revenue.",
    imageSrc: "/images/team/aryan.jpg",
    overview:
      "Aryan co-founded The Capital Gainers to give ambitious brands a partner who thinks in margins, LTV, and accountable execution—not vanity metrics. He works directly with founders on channel strategy, funnel design, and scaling decisions.",
    expertise: [
      "Growth strategy and revenue roadmaps",
      "Performance marketing across Google and Meta",
      "Funnel architecture and offer positioning",
      "Executive reporting and stakeholder alignment",
    ],
    approach: [
      "Start with economics: what must be true for scale to be profitable",
      "Align creative, media, and landing experience to one narrative",
      "Test with discipline—document learnings, kill losers fast",
      "Scale only what the data and margins support",
    ],
  },
  {
    slug: "sheikh-zain-jaffar",
    name: "Sheikh Zain Jaffar",
    roles: ["Branding & Creative Expert", "AI Content Specialist"],
    bio:
      "Zain builds bold brand identities and creative systems, using AI-assisted content workflows to keep messaging consistent, on-brand, and built for performance.",
    imageSrc: "/images/team/zain.jpg",
    overview:
      "Zain bridges brand craft and performance marketing—so creative earns attention and converts. He develops visual systems, ad creative direction, and AI-assisted content pipelines that scale without losing brand voice.",
    expertise: [
      "Brand identity and visual systems",
      "Paid social creative strategy",
      "AI-assisted content production workflows",
      "Campaign concepting and art direction",
    ],
    approach: [
      "Anchor creative in audience insight and funnel stage",
      "Build repeatable templates without looking templated",
      "Iterate hooks and formats with media team weekly",
      "Protect brand quality as spend increases",
    ],
  },
  {
    slug: "abdul-mohaiman-lodhi",
    name: "Abdul Mohaiman Lodhi",
    roles: ["SEO & Google Ads", "AI Automation", "System Building"],
    bio:
      "Abdul Mohaiman engineers SEO, Google Ads, and automation systems that compound traffic and conversions—designing reliable growth infrastructure for scaling brands.",
    imageSrc: "/images/team/mohaiman.jpg",
    overview:
      "Mohaiman owns technical growth infrastructure—search visibility, paid search structure, and automations that reduce manual work. He builds systems that keep performing after the initial launch sprint.",
    expertise: [
      "Technical and content SEO",
      "Google Ads account architecture",
      "Tracking, tagging, and conversion setup",
      "Workflow automation and reporting",
    ],
    approach: [
      "Fix measurement before scaling spend",
      "Prioritize technical SEO blockers that cap rankings",
      "Structure accounts for clarity and scalable optimization",
      "Automate repetitive reporting and alerts",
    ],
  },
  {
    slug: "mubshar-saleem",
    name: "Mubshar Saleem",
    roles: ["Graphic Designer", "Video Editor"],
    bio:
      "Mubshar designs high-impact graphics and edits conversion-focused video that strengthens brand perception and lifts creative performance across channels.",
    imageSrc: "/images/team/mubshar.jpg",
    overview:
      "Mubshar produces the visual assets campaigns run on—static ads, social content, and edited video tuned for thumb-stop and clarity. He works closely with media buyers to refresh creative before fatigue hits.",
    expertise: [
      "Graphic design for ads and social",
      "Short-form video editing",
      "Motion graphics for paid social",
      "Asset organization for rapid testing",
    ],
    approach: [
      "Design for mobile-first viewing",
      "Lead with product and offer clarity in first seconds",
      "Version assets for fast A/B tests",
      "Maintain brand consistency across formats",
    ],
  },
  {
    slug: "shumaila-usman",
    name: "Shumaila Usman",
    roles: [
      "Full Stack Developer",
      "Custom Web Development",
      "WordPress & Shopify",
      "Deployment",
    ],
    tagline: "Websites · Custom development · WordPress · Shopify · Deployment",
    bio:
      "Shumaila is a Full Stack Developer focused on responsive websites, custom builds, WordPress and Shopify stores, and reliable deployment—delivering clean, SEO-friendly experiences aligned with client and marketing goals.",
    imageSrc: "/images/team/developer.jpg",
    profileSections: [
      {
        title: "About",
        paragraphs: [
          "Shumaila Usman is a Full Stack Developer passionate about building high-performing, user-focused digital experiences. She specializes in custom web development, WordPress and Shopify builds, and deployment—turning requirements into live sites that are fast, maintainable, and ready for growth.",
          "From e-commerce and business websites to content-driven platforms, she delivers efficient, SEO-optimized solutions tailored to each client’s needs.",
        ],
      },
      {
        title: "Education",
        paragraphs: ["Bachelor of Science (BS) in Information Technology."],
      },
      {
        title: "Web & custom development",
        paragraphs: [
          "She builds responsive, scalable websites using HTML, CSS, JavaScript, React.js, and Next.js, with solid backend foundations in SQL and related data layers.",
          "When off-the-shelf themes are not enough, she implements custom layouts, components, and integrations so marketing and product teams get exactly the experience they need.",
        ],
        bullets: [
          "Business and corporate websites",
          "E-commerce storefronts (custom front-end)",
          "Educational and content platforms",
          "SEO-friendly structure and performance basics",
        ],
      },
      {
        title: "WordPress & Shopify",
        paragraphs: [
          "Experienced in WordPress and Shopify, Shumaila designs and develops customized CMS and store experiences that balance functionality, aesthetics, and performance—optimized for search and conversion.",
        ],
        bullets: [
          "Theme customization and section development",
          "Plugin and app configuration",
          "Checkout and catalog UX improvements",
          "Handoff documentation for client teams",
        ],
      },
      {
        title: "Deployment & launch",
        paragraphs: [
          "She supports the full path from staging to production: environment setup, deployment, smoke testing, and launch checklists so sites go live smoothly and stay easy to update.",
        ],
        bullets: [
          "Staging and production deployments",
          "Pre-launch QA and cross-device checks",
          "Core Web Vitals and speed basics where possible",
          "Clear documentation for ongoing updates",
        ],
      },
      {
        title: "Core technologies",
        industries: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Next.js",
          "SQL",
          "WordPress",
          "Shopify",
        ],
      },
      {
        title: "How she works with clients",
        paragraphs: [
          "Shumaila scopes with marketing and CRO needs upfront, collaborates closely with strategists and designers, and ships in stages so feedback is easy to incorporate before launch.",
        ],
        quote:
          "I’m always eager to collaborate on thoughtful builds and deliver websites that create real value for the business.",
      },
    ],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
