import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RichPageLayout } from "@/components/pages/RichPageLayout";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import {
  buildCaseStudySections,
  getCaseStudyPageAssets,
} from "@/lib/rich-page-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({
    title: `${study.brand} Case Study`,
    description: study.challenge,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const { hero, gallery } = getCaseStudyPageAssets(study);
  const metricSidebar =
    study.metrics?.map((m) => ({ label: m.label, value: m.value })) ?? [
      { label: "Industry", value: study.industry },
      { label: "Result", value: study.result },
    ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.brand, href: `/case-studies/${slug}` },
        ]}
      />
      <RichPageLayout
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.brand, href: `/case-studies/${slug}` },
        ]}
        label="Case study"
        title={study.brand}
        subtitle={study.result}
        heroImage={hero.src}
        heroImageAlt={hero.alt}
        gallery={gallery}
        sections={buildCaseStudySections(study)}
        sidebarTitle="Results"
        sidebarItems={metricSidebar}
        relatedLinks={[
          { label: "More case studies", href: "/case-studies" },
          { label: "Full portfolio", href: "/portfolio" },
        ]}
        ctaTitle="Want results like this?"
        ctaButton={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
