import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, services } from "@/data/services";

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
      <PageHero label="Service" title={service.title} subtitle={service.shortDescription} />
      <section className="section-padding bg-white">
        <div className="container-tcg grid min-w-0 gap-8 sm:gap-12 lg:grid-cols-3">
          <div className="min-w-0 space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl font-bold text-teal">Overview</h2>
              <p className="mt-4 leading-relaxed text-teal/75">{service.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-teal">The challenge we solve</h2>
              <p className="mt-4 leading-relaxed text-teal/75">{service.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-teal">What&apos;s included</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-teal/75">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="border border-sand bg-sand-light p-8 h-fit">
            <p className="text-xs uppercase tracking-widest text-copper">Best for</p>
            <p className="mt-2 text-teal/80">{service.bestFor}</p>
            <p className="mt-6 text-xs uppercase tracking-widest text-copper">Expected outcome</p>
            <p className="mt-2 font-semibold text-teal">{service.outcome}</p>
            <div className="mt-8">
              <Button href="/contact">Get a Free Growth Audit</Button>
            </div>
            <Link href="/services" className="mt-4 block text-sm text-copper hover:underline">
              ← All services
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
