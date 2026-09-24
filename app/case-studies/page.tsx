import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { caseStudies } from "@/data/case-studies";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Case Studies",
  description: "Results-oriented stories from ZAZAAR, Rehan Malik Store, Vape Coil UK, and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]}
      />
      <PageHero
        label="Case Studies"
        title="Credible stories of strategy and execution"
        subtitle="Verified outcomes where available—always grounded in the work we delivered."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg space-y-16">
          {caseStudies.map((study, i) => (
            <article
              key={study.slug}
              className={`grid gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[16/10] border border-sand">
                <Image src={study.imageSrc} alt={study.brand} fill className="object-cover" sizes="50vw" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-copper">{study.industry}</p>
                <h2 className="mt-2 text-2xl font-bold text-teal">{study.brand}</h2>
                <p className="mt-4 text-sm font-semibold text-copper">{study.result}</p>
                <p className="mt-4 text-teal/75"><strong>Challenge:</strong> {study.challenge}</p>
                <p className="mt-2 text-teal/75"><strong>Strategy:</strong> {study.strategy}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-block font-semibold text-teal hover:text-copper"
                >
                  Read full case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
