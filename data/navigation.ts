import { megaMenuGroups } from "@/data/services";

export type NavMenuLink = {
  label: string;
  href: string;
};

export type NavMenuColumn = {
  title: string;
  links: NavMenuLink[];
};

export type NavMenuItem = {
  id: string;
  label: string;
  href: string;
  sidebarLabel: string;
  columns: NavMenuColumn[];
};

const whoWeServeColumns: NavMenuColumn[] = [
  {
    title: "Business types",
    links: [
      { label: "Ecommerce brands", href: "/who-we-serve/ecommerce-brands" },
      { label: "Lead generation websites", href: "/who-we-serve/lead-generation" },
      { label: "Multi-location businesses", href: "/who-we-serve/multi-location" },
      { label: "Shopify & WordPress brands", href: "/who-we-serve/shopify-wordpress" },
      { label: "Performance-driven startups", href: "/who-we-serve/startups" },
      { label: "B2B & service companies", href: "/who-we-serve/b2b-services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Fashion & lifestyle", href: "/who-we-serve/fashion-lifestyle" },
      { label: "Food & beverage", href: "/who-we-serve/food-beverage" },
      { label: "Home services", href: "/who-we-serve/home-services" },
      { label: "Health & wellness", href: "/who-we-serve/health-wellness" },
      { label: "Technology & SaaS", href: "/who-we-serve/technology-saas" },
      { label: "View all audiences", href: "/who-we-serve" },
    ],
  },
];

const servicesColumns: NavMenuColumn[] = megaMenuGroups.map((group) => ({
  title: group.title,
  links: [...group.links],
}));

const aboutColumns: NavMenuColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/about/team" },
      { label: "How we work", href: "/about/how-we-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "AI solutions", href: "/ai" },
      { label: "All services", href: "/services" },
      { label: "Get a growth audit", href: "/growth-audit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

const caseStudyColumns: NavMenuColumn[] = [
  {
    title: "Featured work",
    links: [
      { label: "All case studies", href: "/case-studies" },
      { label: "ZAZAAR", href: "/case-studies/zazaar" },
      { label: "Rehan Malik Store", href: "/case-studies/rehan-malik" },
      { label: "Vape Coil UK", href: "/case-studies/vape-coil" },
    ],
  },
  {
    title: "More results",
    links: [
      { label: "Austin Style", href: "/case-studies/austin-style" },
      { label: "Kidzaar", href: "/case-studies/kidzaar" },
      { label: "Full portfolio", href: "/portfolio" },
      { label: "Start a project", href: "/growth-audit" },
    ],
  },
];

export const mainNavMenus: NavMenuItem[] = [
  {
    id: "who-we-serve",
    label: "Who We Serve",
    href: "/who-we-serve",
    sidebarLabel: "Who we serve",
    columns: whoWeServeColumns,
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    sidebarLabel: "Services",
    columns: servicesColumns,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    sidebarLabel: "About",
    columns: aboutColumns,
  },
  {
    id: "case-studies",
    label: "Case Studies",
    href: "/case-studies",
    sidebarLabel: "Case studies",
    columns: caseStudyColumns,
  },
];

export const mobileNavMenus = mainNavMenus;
