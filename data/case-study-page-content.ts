import type { CaseStudy } from "@/data/case-studies";
import type { ContentSection } from "@/components/pages/RichPageLayout";

const narrativeBySlug: Record<
  string,
  { context: string; learnings: string[]; nextSteps: string[] }
> = {
  zazaar: {
    context:
      "ZAZAAR entered the engagement with strong product-market fit in apparel but uneven channel performance—paid spikes without durable organic demand.",
    learnings: [
      "Integrated SEO and Meta outperformed siloed channel sprints",
      "Collection-level content unlocked long-tail revenue",
      "Creative refresh cadence prevented ROAS decay during scale",
    ],
    nextSteps: [
      "Expand into retention email and lifecycle",
      "Continue technical SEO for new collections",
      "Test international shipping markets with localized ads",
    ],
  },
  "rehan-malik": {
    context:
      "Rehan Malik Store needed a premium digital experience aligned with a luxury fragrance positioning—conversion and brand perception had to move together.",
    learnings: [
      "Store UX changes lifted conversion before additional ad spend",
      "Merchandising clarity reduced bounce on mobile",
      "Retargeting worked best with storytelling creative, not discount-only",
    ],
    nextSteps: [
      "Bundle offers and gift-set landing pages",
      "Influencer-seeded content for prospecting",
      "Subscription or replenishment tests",
    ],
  },
  "vape-coil": {
    context:
      "Vape Coil UK operated in a competitive regulated category—scaling required disciplined funnels and creative iteration, not raw budget increases.",
    learnings: [
      "Landing page-message match cut wasted clicks",
      "SEO supported branded and category demand between paid bursts",
      "Structured creative tests beat ad set proliferation",
    ],
    nextSteps: [
      "Expand winning creatives into new geos",
      "Email win-back for lapsed buyers",
      "Inventory-linked ad pausing automation",
    ],
  },
  "austin-style": {
    context:
      "Austin Style competed in lifestyle fashion where attention is earned through creative, not only media spend.",
    learnings: [
      "Product-forward creative beat generic lifestyle shots for ROAS",
      "Seasonal drops benefited from waitlist + retargeting",
      "Organic social themes fed paid creative hooks",
    ],
    nextSteps: [
      "UGC creator pipeline",
      "Collection-specific SEO hubs",
      "Loyalty program tied to email/SMS",
    ],
  },
  kidzaar: {
    context:
      "Kidzaar focused on family buyers—friction in checkout and post-purchase experience limited repeat revenue.",
    learnings: [
      "Checkout simplification had faster payback than new traffic",
      "Size guides and trust content reduced returns anxiety",
      "Post-purchase email increased second-order rate",
    ],
    nextSteps: [
      "Subscription boxes for essentials",
      "Referral program for parents",
      "Paid scale once CVR plateau sustained",
    ],
  },
};

export function getCaseStudyPageSections(study: CaseStudy): ContentSection[] {
  const extra = narrativeBySlug[study.slug];

  return [
    {
      heading: "Project background",
      body: study.summary,
      paragraphs: extra
        ? [extra.context]
        : [
            `${study.brand} partnered with The Capital Gainers to align marketing execution with measurable business outcomes in ${study.industry}.`,
          ],
    },
    {
      heading: "Challenge",
      body: study.challenge,
      paragraphs: [
        "Without a coordinated strategy, channels compete for credit while the core constraint—often conversion or offer-market fit—stays unaddressed.",
      ],
    },
    {
      heading: "Strategy",
      body: study.strategy,
      bullets: [
        "Align channel goals to one revenue narrative",
        "Prioritize fixes by impact on margin and volume",
        "Document tests for institutional learning",
      ],
    },
    {
      heading: "Execution",
      body: study.execution,
      bullets: study.services.map((s) => `Delivered: ${s}`),
    },
    {
      heading: "Results",
      body: study.result,
      bullets: study.metrics?.map((m) => `${m.label}: ${m.value}`) ?? [
        "Performance improved across agreed KPIs",
        "Reporting cadence established for ongoing optimization",
      ],
    },
    {
      heading: "Key learnings",
      bullets: extra?.learnings ?? [
        "Cross-functional alignment accelerated wins",
        "Data quality enabled faster decisions",
        "Creative and landing page parity mattered at scale",
      ],
    },
    {
      heading: "What we would do next",
      body: "Growth does not stop at a case study milestone—these are typical next horizons for a similar engagement:",
      bullets: extra?.nextSteps ?? [
        "Scale winning channels with guardrails",
        "Expand retention programs",
        "Enter adjacent audiences or geographies",
      ],
    },
    {
      heading: "Services delivered",
      bullets: study.services,
    },
  ];
}
