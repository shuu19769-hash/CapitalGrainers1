import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RichPageLayout } from "@/components/pages/RichPageLayout";
import { getPageImages } from "@/lib/page-media";
import { growthAuditSections } from "@/data/company-page-content";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Free Growth Audit",
  description:
    "Request a complimentary growth audit—SEO, paid media, storefront, and funnel review from The Capital Gainers.",
  path: "/growth-audit",
});

export default function GrowthAuditPage() {
  const { hero, gallery } = getPageImages("growth-audit", "Growth audit");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Free Growth Audit", href: "/growth-audit" },
        ]}
      />
      <RichPageLayout
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Growth Audit", href: "/growth-audit" },
        ]}
        label="Get started"
        title="Free growth audit"
        subtitle="A structured review of your SEO, paid media, ecommerce, and conversion paths—with prioritized recommendations you can act on immediately."
        heroImage={hero.src}
        heroImageAlt={hero.alt}
        gallery={gallery}
        sections={growthAuditSections}
        sidebarItems={[
          { label: "Cost", value: "Complimentary" },
          { label: "Duration", value: "~30 min review call" },
          { label: "Deliverable", value: "Prioritized action plan" },
        ]}
        relatedLinks={[
          { label: "Contact form", href: "/contact" },
          { label: "View services", href: "/services" },
        ]}
        ctaTitle="Request your audit"
        ctaButton={{ label: "Go to contact form", href: "/contact" }}
      />
      <section className="bg-cream pb-16 text-center">
        <p className="text-ink/70">
          Prefer WhatsApp?{" "}
          <Link href="/contact" className="font-semibold text-copper hover:underline">
            Message us on the contact page
          </Link>
        </p>
      </section>
    </>
  );
}
