import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RichPageLayout } from "@/components/pages/RichPageLayout";
import { audiences, getAudienceBySlug } from "@/data/audiences";
import {
  buildAudienceSections,
  getAudiencePageAssets,
} from "@/lib/rich-page-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) return {};
  return createMetadata({
    title: audience.title,
    description: audience.shortDescription,
    path: `/who-we-serve/${slug}`,
  });
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) notFound();

  const { hero, gallery } = getAudiencePageAssets(audience);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Who We Serve", href: "/who-we-serve" },
          { name: audience.title, href: `/who-we-serve/${slug}` },
        ]}
      />
      <RichPageLayout
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Who We Serve", href: "/who-we-serve" },
          { name: audience.title, href: `/who-we-serve/${slug}` },
        ]}
        label="Who we serve"
        title={audience.title}
        subtitle={audience.shortDescription}
        heroImage={hero.src}
        heroImageAlt={hero.alt}
        gallery={gallery}
        sections={buildAudienceSections(audience)}
        sidebarItems={[
          { label: "Ideal partner", value: audience.title },
          { label: "Engagement", value: "Strategy + execution" },
          { label: "Reporting", value: "Revenue-focused dashboards" },
        ]}
        relatedLinks={
          audience.relatedServiceHref
            ? [{ label: "Related service", href: audience.relatedServiceHref }]
            : [{ label: "Contact us", href: "/contact" }]
        }
      />
    </>
  );
}
