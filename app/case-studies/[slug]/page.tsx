import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.brand, href: `/case-studies/${slug}` },
        ]}
      />
      <PageHero label="Case Study" title={study.brand} subtitle={study.result} />
      <section className="section-padding bg-white">
        <div className="container-tcg grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[16/10] border border-sand">
            <Image src={study.imageSrc} alt={study.brand} fill className="object-cover" sizes="50vw" />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-teal">Challenge</h2>
              <p className="mt-2 text-teal/75">{study.challenge}</p>
            </div>
            <div>
              <h2 className="font-bold text-teal">Strategy</h2>
              <p className="mt-2 text-teal/75">{study.strategy}</p>
            </div>
            <div>
              <h2 className="font-bold text-teal">Execution</h2>
              <p className="mt-2 text-teal/75">{study.execution}</p>
            </div>
            <div>
              <h2 className="font-bold text-teal">Services</h2>
              <p className="mt-2 text-teal/75">{study.services.join(" · ")}</p>
            </div>
            {study.metrics && (
              <div className="grid grid-cols-2 gap-4 border-t border-sand pt-6">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-copper">{m.value}</p>
                    <p className="text-xs uppercase tracking-wider text-teal/60">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
            <Button href="/contact">Discuss a similar project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
