import type { ContentSection } from "@/components/pages/RichPageLayout";
import { growthProcess, whyPillars } from "@/data/process";

export const howWeWorkSections: ContentSection[] = [
  {
    heading: "Partnership, not vendor theater",
    paragraphs: [
      "We built The Capital Gainers for founders and marketing leaders who are tired of slide decks that never match Friday’s numbers. Our job is to make growth understandable, accountable, and repeatable.",
      "That means we show our work: what we tested, what we learned, what we’re doing next—and what we deliberately chose not to do.",
    ],
  },
  {
    heading: "What we believe",
    body: "These principles shape every engagement, whether you need SEO, paid media, Shopify, or automation.",
    bullets: whyPillars.map((p) => `${p.title}: ${p.description}`),
  },
  {
    heading: "Our six-step growth process",
    body: "No black boxes. Every retainer maps to this spine so you always know where we are in the journey.",
    bullets: growthProcess.map((s) => `Step ${s.step} — ${s.title}: ${s.description}`),
  },
  {
    heading: "How we communicate",
    bullets: [
      "Shared Slack or WhatsApp channel for fast questions",
      "Weekly written performance summaries",
      "Monthly live strategy review with leadership",
      "Documented test log (hypothesis → result → decision)",
      "Direct access to specialists—not layers of account managers",
    ],
  },
  {
    heading: "What we need from you",
    bullets: [
      "Access to analytics, ad accounts, and storefront (read/manage as agreed)",
      "A single decision-maker for priorities when trade-offs arise",
      "Honest margin and capacity constraints so we scale safely",
      "Timely feedback on creative and landing page drafts",
    ],
  },
  {
    heading: "Team structure",
    body: "You work with a pod: strategy lead plus channel owners (SEO, paid, dev/CRO, creative as needed). Pods scale up for launches, not indefinitely for overhead.",
    bullets: [
      "Strategy & account direction",
      "SEO / content coordination",
      "Paid media (Google, Meta, TikTok)",
      "Development & CRO implementation",
      "Automation & reporting where relevant",
    ],
  },
  {
    heading: "Tools & transparency",
    paragraphs: [
      "We meet you where you are—GA4, Shopify, Google Ads, Meta, Looker Studio, or your BI stack. Dashboards are built for decisions, not decoration.",
      "You retain ownership of all accounts and assets we work in. If we part ways, you keep the history and the playbooks.",
    ],
  },
  {
    heading: "Getting started",
    bullets: [
      "Free growth audit to baseline opportunities",
      "90-day roadmap option for new partners",
      "Channel-specific retainers when scope is narrow",
      "Project-based work for launches and migrations",
    ],
  },
];

export const growthAuditSections: ContentSection[] = [
  {
    heading: "What a growth audit is (and is not)",
    paragraphs: [
      "Our audit is a structured review of how your business acquires and converts customers today—not a generic PDF or a sales trap.",
      "You’ll get prioritized recommendations with rationale, effort level, and expected impact so you can act with or without us afterward.",
    ],
  },
  {
    heading: "What we review",
    bullets: [
      "Analytics & tracking integrity (GA4, pixels, conversions)",
      "SEO visibility, technical health, and content gaps",
      "Google Ads / Meta structure, spend efficiency, creative themes",
      "Website or Shopify UX on mobile and desktop",
      "Funnel leaks: forms, checkout, speed, trust signals",
      "Competitive positioning (high-level, category-relevant)",
    ],
  },
  {
    heading: "Deliverables",
    bullets: [
      "Written summary of top constraints on growth",
      "Ranked opportunity list (quick wins vs strategic bets)",
      "Suggested 90-day focus areas and KPI targets",
      "Optional follow-up call to walk through findings",
    ],
  },
  {
    heading: "Who should request an audit",
    bullets: [
      "Ecommerce brands plateauing after early scale",
      "Lead-gen sites with rising CPL",
      "Teams switching agencies or bringing marketing in-house",
      "Founders before a major spend increase or fundraise",
    ],
  },
  {
    heading: "Timeline",
    body: "Typical turnaround is 3–5 business days after we receive access and context. Larger sites or multi-location brands may take slightly longer—we’ll confirm upfront.",
    bullets: [
      "Day 1–2: Access, data pull, stakeholder questions",
      "Day 3–4: Analysis and draft recommendations",
      "Day 5: Delivery + optional review call",
    ],
  },
  {
    heading: "What we need from you",
    bullets: [
      "Read access to analytics and ad platforms (or exports)",
      "Your primary revenue goal for the next 6–12 months",
      "Known constraints: margin, inventory, compliance, capacity",
      "Contact form submission or WhatsApp intro via our contact page",
    ],
  },
  {
    heading: "After the audit",
    paragraphs: [
      "Many partners move into a focused 90-day roadmap retainer; others implement internally using our plan. There is no obligation to continue.",
      "If we’re not the right fit, we’ll tell you—and point you toward the constraint that matters most anyway.",
    ],
  },
  {
    heading: "FAQ",
    bullets: [
      "Is it really free? Yes—for qualified businesses seriously exploring growth support.",
      "NDA? Available on request for sensitive categories.",
      "Will you pitch endlessly on the call? No—we focus on findings and options.",
      "International brands? Yes—we serve partners in 27+ countries.",
    ],
  },
];
