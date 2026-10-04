import type { Audience } from "@/data/audiences";
import type { ContentSection } from "@/components/pages/RichPageLayout";
import { growthProcess } from "@/data/process";

type AudienceCopy = {
  partnerTypes: string[];
  painPoints: string[];
  plays: string[];
  metrics: string[];
  extraParagraph?: string;
};

const audienceCopyBySlug: Record<string, AudienceCopy> = {
  "ecommerce-brands": {
    partnerTypes: [
      "Shopify and DTC brands doing $20K–$2M+ monthly revenue",
      "Catalog-led stores scaling SKUs across seasons",
      "Brands rebuilding after agency churn or flat ROAS",
    ],
    painPoints: [
      "Paid social works until creative fatigues—then CAC spikes overnight",
      "Organic traffic under-invested while ad costs rise",
      "Checkout, shipping, and merchandising friction cap conversion",
      "No single view of margin by channel and product line",
    ],
    plays: [
      "Margin-aware media mix across Meta, Google, and retention",
      "Technical SEO + collection architecture for compounding demand",
      "CRO sprints on PDP, cart, and post-purchase flows",
      "Creative testing tied to SKU-level performance",
    ],
    metrics: ["MER / blended ROAS", "CVR by device", "Organic revenue %", "LTV cohort trends"],
  },
  "lead-generation": {
    partnerTypes: [
      "B2C and B2B sites selling services, appointments, or high-ticket offers",
      "Franchise and multi-offer funnels needing cleaner attribution",
      "Teams spending on Google without landing page discipline",
    ],
    painPoints: [
      "High CPL with weak lead quality and sales follow-up gaps",
      "Forms and calls not tracked end-to-end",
      "Landing pages that do not match ad intent or keyword theme",
      "Budget increases without structured testing",
    ],
    plays: [
      "Intent mapping from keyword → ad → landing page",
      "Form, call, and CRM integration for true CPA",
      "Offer and copy testing on high-intent pages",
      "Geo and schedule bid adjustments for qualified leads",
    ],
    metrics: ["Cost per qualified lead", "Lead-to-close rate", "Speed-to-lead", "Channel CPA"],
  },
  "multi-location": {
    partnerTypes: [
      "Retail chains, clinics, and service brands with 3–100+ locations",
      "Franchisors balancing brand standards and local performance",
      "Businesses investing in GBP but not connecting to paid",
    ],
    painPoints: [
      "Inconsistent NAP, GBP, and local landing experiences",
      "Paid campaigns bleeding budget across overlapping geos",
      "Corporate site wins rankings but locations do not convert",
      "Franchisees with uneven digital execution",
    ],
    plays: [
      "Location page templates with unique local proof",
      "Geo-fenced paid structure and call tracking by store",
      "Local SEO + review velocity programs",
      "Playbooks franchisees can run without reinventing strategy",
    ],
    metrics: ["Calls and directions by location", "Local pack visibility", "Store-level ROAS", "Review rating trend"],
  },
  "shopify-wordpress": {
    partnerTypes: [
      "Merchants on Shopify Plus, standard Shopify, or WooCommerce/WordPress",
      "Content-heavy brands needing speed and technical SEO",
      "Teams outgrowing themes and plugin conflicts",
    ],
    painPoints: [
      "Slow mobile performance hurting SEO and conversion",
      "Theme limits blocking merchandising and UX upgrades",
      "Plugin bloat and security exposure on WordPress",
      "Marketing and dev teams shipping changes without QA",
    ],
    plays: [
      "Performance budgets and Core Web Vitals remediation",
      "Custom sections, apps, and checkout optimizations",
      "Structured content models for SEO scale",
      "Release cadence with staging and regression checks",
    ],
    metrics: ["Page speed scores", "Organic landing growth", "Checkout completion rate", "Deploy frequency"],
  },
  startups: {
    partnerTypes: [
      "Seed to Series A brands validating channels",
      "Bootstrapped founders needing senior execution without full hires",
      "Teams launching new markets or product lines",
    ],
    painPoints: [
      "Limited runway—every test must be decisive",
      "Founders pulled into ads and analytics instead of product",
      "Agencies delivering reports, not learning loops",
      "No documented playbook when scaling spend",
    ],
    plays: [
      "90-day channel validation sprints",
      "Creative + media + landing page as one experiment",
      "Lightweight dashboards founders actually read",
      "Clear kill/scale rules per channel",
    ],
    metrics: ["CAC payback period", "Test velocity", "Activation rate", "Weekly revenue trend"],
  },
  "b2b-services": {
    partnerTypes: [
      "Consultancies, SaaS, and professional services with long sales cycles",
      "Firms relying on referrals but needing predictable pipeline",
      "Marketing teams without in-house SEO or paid specialists",
    ],
    painPoints: [
      "Content that does not rank for buyer-intent queries",
      "LinkedIn and Google spend without SQL tracking",
      "Sales and marketing disagree on lead definition",
      "Long cycles make attribution feel impossible",
    ],
    plays: [
      "Topic clusters and authority content for decision-makers",
      "LinkedIn ABM-style campaigns with landing paths per segment",
      "Lead scoring alignment with sales",
      "Nurture email and retargeting by funnel stage",
    ],
    metrics: ["SQL volume", "Pipeline influenced", "Organic demo requests", "Cost per SQL"],
  },
  "fashion-lifestyle": {
    partnerTypes: [
      "Apparel, accessories, and lifestyle DTC brands",
      "Labels launching seasonal drops and collabs",
      "Brands competing on creative, not just discounting",
    ],
    painPoints: [
      "Creative fatigue on Meta and TikTok within weeks",
      "Inconsistent brand story across site and social",
      "Influencer and paid working in separate silos",
      "Returns and sizing hurting unit economics",
    ],
    plays: [
      "Creative systems: hooks, formats, and refresh calendar",
      "Drop campaigns with waitlist and retargeting flows",
      "UGC and studio asset pipelines for paid",
      "Merchandising tests on hero collections",
    ],
    metrics: ["Thumb-stop rate", "ROAS by creative theme", "AOV", "Repeat purchase rate"],
  },
  "food-beverage": {
    partnerTypes: [
      "Restaurants, cloud kitchens, CPG-style food brands",
      "Delivery-first concepts and local chains",
      "Brands running promos without margin guardrails",
    ],
    painPoints: [
      "Delivery app fees compress margin—owned channels under-built",
      "Local SEO neglected vs aggregators",
      "Promo-heavy social without retention",
      "Seasonal staffing and offer chaos",
    ],
    plays: [
      "Local SEO + map pack + review programs",
      "Offer-led paid social with geo targeting",
      "Direct ordering funnels and loyalty hooks",
      "Ramadan/seasonal campaign playbooks",
    ],
    metrics: ["Orders from owned channel", "Map pack actions", "Promo ROAS", "Repeat order rate"],
  },
  "home-services": {
    partnerTypes: [
      "HVAC, plumbing, cleaning, and trades with service areas",
      "Franchise home services and regional operators",
      "Teams buying shared leads and wanting owned demand",
    ],
    painPoints: [
      "Paying for junk calls and form fills",
      "Service area targeting too broad on Google",
      "No trust signals on local landing pages",
      "Seasonality swings without plan",
    ],
    plays: [
      "ZIP / radius campaign architecture",
      "Call tracking and recording QA",
      "Before/after content and review widgets",
      "Emergency vs planned service ad splits",
    ],
    metrics: ["Cost per booked job", "Call duration quality", "GBP calls", "Close rate by source"],
  },
  "health-wellness": {
    partnerTypes: [
      "Clinics, wellness brands, and supplement sellers",
      "Practices expanding telehealth or multi-location",
      "Brands in regulated or trust-sensitive categories",
    ],
    painPoints: [
      "Ad policies limiting claims and creative",
      "Patients researching long before converting",
      "Generic content that does not build authority",
      "Booking funnels with drop-off",
    ],
    plays: [
      "Educational SEO content reviewed for compliance tone",
      "Conservative paid messaging with strong social proof",
      "Appointment funnels with reminder automation",
      "Local + telehealth landing paths",
    ],
    metrics: ["Cost per appointment", "Organic health queries", "Form completion", "No-show rate"],
  },
  "technology-saas": {
    partnerTypes: [
      "B2B SaaS from early traction to scale",
      "Dev tools and IT services with technical buyers",
      "Products with free trial or demo-led motion",
    ],
    painPoints: [
      "Paid search CPCs high for competitive categories",
      "Content not matching product-led growth loops",
      "Trials that do not activate or convert",
      "Attribution across product, ads, and sales",
    ],
    plays: [
      "Technical SEO for docs, comparisons, and integrations",
      "Google and LinkedIn campaigns by persona",
      "Trial onboarding CRO and lifecycle email",
      "ABM lists for enterprise segments",
    ],
    metrics: ["Trial-to-paid", "CAC vs LTV", "Demo SQL rate", "Organic signups"],
  },
};

function buildSections(audience: Audience, copy: AudienceCopy): ContentSection[] {
  const title = audience.title;

  return [
    {
      heading: `Growth for ${title}`,
      body: audience.description,
      paragraphs: [
        audience.shortDescription,
        copy.extraParagraph ??
          `We work with ${title.toLowerCase()} that want revenue-linked marketing—not disconnected campaigns. Your engagement starts with understanding unit economics, sales cycle, and where demand already exists before we recommend channel spend.`,
      ],
      bullets: audience.highlights,
    },
    {
      heading: "Who we typically partner with",
      body: `The best fit for ${title.toLowerCase()} is not company size alone—it is readiness to test, share data, and act on recommendations.`,
      bullets: copy.partnerTypes,
    },
    {
      heading: "Problems we solve first",
      body: "Most partners come to us with one urgent constraint. We diagnose whether it is traffic quality, conversion, offer, or operations—and sequence fixes so budget is not wasted.",
      bullets: copy.painPoints,
    },
    {
      heading: "What we implement",
      body: "Execution is hands-on: specialists own SEO, paid, creative, and development with shared goals and weekly visibility.",
      bullets: copy.plays,
    },
    {
      heading: "Metrics that matter",
      body: "We agree on KPIs before launch and report against them—not vanity metrics that hide weak performance.",
      bullets: copy.metrics,
    },
    {
      heading: "How we work together",
      body: "You get a named team, async updates, and live reviews. We document tests, results, and next steps so knowledge stays in your business.",
      bullets: growthProcess.map((s) => `${s.title}: ${s.description}`),
    },
    {
      heading: "Engagement options",
      body: "We tailor scope to stage and budget—from focused channel management to full growth retainer.",
      bullets: [
        "Growth audit and 90-day roadmap (ideal starting point)",
        "Channel-specific retainers (SEO, Google, Meta, dev)",
        "Integrated ecommerce growth program",
        "Project-based launches (site, funnel, campaign)",
      ],
    },
    {
      heading: "Common questions",
      bullets: [
        `Do you only work with ${title.toLowerCase()}? We specialize here but also serve adjacent models—ask us if you are unsure.`,
        "Minimum engagement? We align scope to impact; audits often lead to phased retainers.",
        "Do you work with in-house teams? Yes—we augment, not replace, when you already have marketing staff.",
        "Reporting cadence? Typically weekly performance snapshots plus monthly strategy reviews.",
      ],
    },
  ];
}

export function getAudiencePageSections(audience: Audience): ContentSection[] {
  const copy = audienceCopyBySlug[audience.slug];
  if (!copy) {
    return [];
  }
  return buildSections(audience, copy);
}
