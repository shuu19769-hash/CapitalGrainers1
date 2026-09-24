import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const aiCapabilities = [
  {
    title: "Marketing Workflow Automation",
    description: "Reduce manual reporting, briefing, and handoffs with connected workflows.",
  },
  {
    title: "AI-Assisted Customer Support",
    description: "Faster responses and routing while keeping brand voice and escalation paths clear.",
  },
  {
    title: "Lead Qualification",
    description: "Score and route inbound leads so sales and growth teams focus on the right opportunities.",
  },
  {
    title: "Ecommerce Automation",
    description: "Inventory alerts, order workflows, and operational tasks that support scale.",
  },
  {
    title: "Reporting & Data Insights",
    description: "Consolidated views across ads, analytics, and storefront data for clearer decisions.",
  },
  {
    title: "Custom Business Integrations",
    description: "Connect CRM, ads, and ops tools with automation tailored to your stack.",
  },
];

export const metadata = createMetadata({
  title: "AI Solutions",
  description: "Practical AI automation for marketing, ecommerce, and growth operations.",
  path: "/ai",
});

export default function AIPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "AI", href: "/ai" }]} />
      <PageHero
        label="AI"
        title="AI automation for growing businesses"
        subtitle="Business-focused automation—not exaggerated promises. We implement systems that save time and improve decisions."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg">
          <SectionHeader
            label="Capabilities"
            title="Where AI supports your growth team"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item) => (
              <div key={item.title} className="border border-sand bg-sand-light p-8">
                <h3 className="font-bold text-teal">{item.title}</h3>
                <p className="mt-3 text-sm text-teal/75">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services/ai-automation">AI Automation service details</Button>
          </div>
        </div>
      </section>
      <section className="section-padding bg-teal text-sand">
        <div className="container-tcg max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">How we implement AI</h2>
          <p className="mt-4 text-sand/80">
            We map processes, identify high-ROI automation, pilot with your team, then integrate and
            optimize—aligned with the same Discover → Scale methodology we use for marketing.
          </p>
        </div>
      </section>
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
