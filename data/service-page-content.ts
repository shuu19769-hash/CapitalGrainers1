import type { Service } from "@/data/services";
import type { ContentSection } from "@/components/pages/RichPageLayout";

type ServiceExtra = {
  idealFor: string[];
  deliverablesDetail: string[];
  process: string[];
  kpis: string[];
  faq: string[];
};

const serviceExtras: Record<string, ServiceExtra> = {
  "search-engine-optimization": {
    idealFor: ["Ecommerce catalogs", "Lead-gen sites", "Brands recovering from migration or penalty"],
    deliverablesDetail: [
      "Crawl budget and indexation fixes",
      "Schema and SERP feature opportunities",
      "Content briefs aligned to revenue pages",
      "Link-worthy assets and digital PR angles",
    ],
    process: [
      "Technical baseline and competitor gap analysis",
      "Priority roadmap by impact and effort",
      "Sprint-based implementation with dev tickets",
      "Monthly ranking, traffic, and revenue reporting",
    ],
    kpis: ["Organic sessions", "Non-brand clicks", "Revenue from organic", "Core Web Vitals"],
    faq: [
      "How long until SEO results? Meaningful movement often 3–6 months; technical wins can be faster.",
      "Do you write content? We strategy + brief; writing can be yours or ours via partners.",
      "International SEO? Yes—hreflang, markets, and localized structure.",
    ],
  },
  "google-ads": {
    idealFor: ["Shopping-heavy ecommerce", "High-intent service keywords", "Brands scaling PMax carefully"],
    deliverablesDetail: [
      "Account restructure or greenfield build",
      "Feed and merchant center hygiene",
      "Search term mining and negative lists",
      "Bid strategy aligned to margin data",
    ],
    process: [
      "Tracking and conversion value validation",
      "Campaign build by intent and product margin",
      "Weekly optimization and query reviews",
      "Scale tests with guardrail ROAS/MER targets",
    ],
    kpis: ["ROAS / POAS", "CPA", "Impression share on brand vs non-brand", "New customer %"],
    faq: [
      "Minimum ad spend? We advise based on data volume—often $3K+/mo for learning.",
      "Performance Max? We use it with clear asset groups and search themes—not blind automation.",
      "Who owns the account? You retain ownership; we manage with documented changes.",
    ],
  },
  "meta-ads": {
    idealFor: ["DTC fashion and lifestyle", "Offers with visual proof", "Brands with creative supply"],
    deliverablesDetail: [
      "Funnel mapping: prospecting → retargeting → retention",
      "Creative testing matrix (hook, format, angle)",
      "Audience exclusions and frequency controls",
      "Landing page alignment workshops",
    ],
    process: [
      "Account and pixel/CAPI audit",
      "Creative sprint launch",
      "Bi-weekly test readouts",
      "Budget shifts toward winning ad sets",
    ],
    kpis: ["MER", "NC CPA", "Thumb-stop and hold rates", "Landing page CVR"],
    faq: [
      "Do you produce creative? We direct and iterate; production can be in-house or UGC partners.",
      "iOS / attribution issues? We model blended metrics and use server-side tracking where possible.",
      "TikTok too? Often paired—see TikTok Ads service.",
    ],
  },
  "ecommerce-scaling": {
    idealFor: ["Shopify brands past first $50K/mo", "Teams juggling multiple agencies", "Founders wanting one growth lead"],
    deliverablesDetail: [
      "Channel economics model",
      "Merchandising and promo calendar alignment",
      "Retention and email coordination",
      "Executive dashboard (revenue, MER, CAC)",
    ],
    process: [
      "Full-funnel diagnostic",
      "90-day integrated roadmap",
      "Cross-channel war room cadence",
      "Quarterly planning and budget reforecast",
    ],
    kpis: ["Revenue growth", "MER", "Repeat rate", "Contribution margin"],
    faq: [
      "Replace my agency stack? We often consolidate SEO, paid, and CRO under one plan.",
      "Ops and fulfillment? We coordinate with your team; we do not run warehouse.",
      "International expansion? Channel mix adjusted per market.",
    ],
  },
  "shopify-development": {
    idealFor: ["Stores on generic themes", "Brands needing custom sections", "Merchants with speed issues"],
    deliverablesDetail: [
      "Theme customization or headless where justified",
      "App audit and conflict resolution",
      "Checkout extensibility and upsells",
      "Mobile-first UX improvements",
    ],
    process: [
      "Store audit and backlog prioritization",
      "Staging theme with QA checklist",
      "Launch with monitoring",
      "Post-launch CRO recommendations",
    ],
    kpis: ["Load time", "Mobile CVR", "App-related errors", "Theme maintainability"],
    faq: [
      "Shopify Plus required? Not always—scope depends on features.",
      "Ongoing support? Yes—retainer or ticket-based after launch.",
      "Migrate from WooCommerce? We handle redirects and data migration planning.",
    ],
  },
  "conversion-rate-optimization": {
    idealFor: ["Traffic-rich, conversion-poor sites", "Brands before major ad scale", "Checkout drop-off issues"],
    deliverablesDetail: [
      "Quantitative analytics review",
      "Qualitative insights (surveys, session patterns)",
      "Hypothesis backlog and test design",
      "Implementation support with dev",
    ],
    process: [
      "Funnel mapping and leak identification",
      "Quick wins vs test queue",
      "A/B or MVT execution",
      "Documented learnings library",
    ],
    kpis: ["CVR", "AOV", "Cart abandonment", "Revenue per session"],
    faq: [
      "How many tests per month? Depends on traffic volume—low traffic needs bigger swings.",
      "Tools? GA4, Hotjar-class tools, your stack—we adapt.",
      "Only ecommerce? No—lead gen forms and B2B demos too.",
    ],
  },
  "ai-automation": {
    idealFor: ["Teams drowning in reporting", "Lead routing and follow-up gaps", "Content ops at scale"],
    deliverablesDetail: [
      "Workflow mapping (ads, CRM, sheets, Slack)",
      "Automation builds (Zapier, Make, custom APIs)",
      "AI-assisted reporting and anomaly alerts",
      "Documentation and handoff training",
    ],
    process: [
      "Discovery of repetitive tasks",
      "Pilot automation with clear ROI",
      "Rollout and monitoring",
      "Iterate with new triggers",
    ],
    kpis: ["Hours saved weekly", "Error rate reduction", "Speed-to-lead", "Report freshness"],
    faq: [
      "Replace staff? No—automate busywork so people focus on strategy.",
      "Data security? We use your accounts; credentials stay with you.",
      "Custom AI models? We focus on practical ops automations first.",
    ],
  },
  "website-development": {
    idealFor: ["Rebrands", "WordPress marketing sites", "Landing hubs for campaigns"],
    deliverablesDetail: [
      "UX wireframes and component library",
      "Responsive build and accessibility basics",
      "CMS training and editor guides",
      "SEO-ready structure and redirects",
    ],
    process: [
      "Requirements and sitemap",
      "Design approval milestones",
      "Development sprints",
      "Launch + 30-day hypercare",
    ],
    kpis: ["Launch on date", "Accessibility score", "Organic crawl health", "Form conversion"],
    faq: [
      "WordPress or custom? We recommend based on editor needs and scale.",
      "Hosting? We advise; you own hosting accounts.",
      "Maintenance? Optional retainer for updates and security.",
    ],
  },
  "tiktok-ads": {
    idealFor: ["Younger demos", "Product-led visual brands", "Meta winners seeking incremental reach"],
    deliverablesDetail: [
      "Spark ads and creator-style creative briefs",
      "Campaign structure by creative theme",
      "Shop and catalog integrations where applicable",
      "Cross-learn with Meta creative insights",
    ],
    process: [
      "Account and pixel setup",
      "Creative batch launch",
      "Rapid iteration on hooks first 3 seconds",
      "Scale winners with frequency caps",
    ],
    kpis: ["CPA", "ROAS", "Video view rate", "Creative win rate"],
    faq: [
      "B2B on TikTok? Possible for some offers—we validate fit first.",
      "Organic + paid? We align content themes where you post organically.",
      "Budget floor? Lower than Meta for tests but needs creative volume.",
    ],
  },
  "branding-creative": {
    idealFor: ["Rebrands", "Paid social-heavy brands", "Low creative throughput teams"],
    deliverablesDetail: [
      "Visual identity direction and guidelines",
      "Ad creative templates by funnel stage",
      "Social asset packs",
      "Campaign concepting support",
    ],
    process: [
      "Brand discovery workshop",
      "Mood boards and direction sign-off",
      "Asset production sprints",
      "Handoff to media team for testing",
    ],
    kpis: ["Brand consistency score (internal rubric)", "Ad CTR lift", "Creative refresh cadence", "Time-to-launch"],
    faq: [
      "Logo only? We prefer identity + application for marketing use.",
      "Video? Short-form ad edits and storyboards—full production via partners if needed.",
      "Work with existing brand? Yes—we extend systems, not always replace.",
    ],
  },
};

export function getServicePageSections(service: Service): ContentSection[] {
  const extra = serviceExtras[service.slug];
  if (!extra) {
    return [];
  }

  return [
    {
      heading: "Service overview",
      body: service.description,
      paragraphs: [
        service.shortDescription,
        `Our ${service.title} engagements are built for operators who need accountable execution—clear scope, documented changes, and reporting tied to ${service.outcome.toLowerCase()}.`,
      ],
    },
    {
      heading: "The challenge we solve",
      body: service.challenge,
      paragraphs: [
        "Left unaddressed, this challenge compounds: wasted spend, slower growth, and teams firefighting instead of building systems.",
      ],
    },
    {
      heading: "Who this is for",
      bullets: extra.idealFor,
    },
    {
      heading: "Core deliverables",
      body: "Every scope is customized, but most retainers include the following building blocks:",
      bullets: [...service.includes, ...extra.deliverablesDetail],
    },
    {
      heading: "How we deliver",
      bullets: extra.process,
    },
    {
      heading: "Success metrics",
      body: service.outcome,
      bullets: extra.kpis,
    },
    {
      heading: "Best fit",
      body: service.bestFor,
      bullets: [
        "You have access to analytics and can implement recommendations within agreed timelines",
        "Stakeholders align on one primary KPI for the first 90 days",
        "You value transparency over vanity reporting",
      ],
    },
    {
      heading: "Frequently asked questions",
      bullets: extra.faq,
    },
  ];
}
