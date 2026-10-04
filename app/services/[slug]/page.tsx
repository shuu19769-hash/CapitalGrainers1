import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RichPageLayout } from "@/components/pages/RichPageLayout";
import { getServiceBySlug, services } from "@/data/services";
import { buildServiceSections, getServicePageAssets } from "@/lib/rich-page-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const { hero, gallery } = getServicePageAssets(service);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "The Capital Gainers" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
      />
      <RichPageLayout
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
        label="Service"
        title={service.title}
        subtitle={service.shortDescription}
        heroImage={hero.src}
        heroImageAlt={hero.alt}
        gallery={gallery}
        sections={buildServiceSections(service)}
        sidebarItems={[
          { label: "Best for", value: service.bestFor },
          { label: "Expected outcome", value: service.outcome },
          { label: "Category", value: service.category.replace("-", " ") },
        ]}
        relatedLinks={[
          { label: "All services", href: "/services" },
          { label: "View case studies", href: "/case-studies" },
        ]}
      />
    </>
  );
}
