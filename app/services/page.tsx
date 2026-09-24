import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQList } from "@/components/ui/FAQList";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { services, serviceCategories } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { caseStudies } from "@/data/case-studies";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Services",
  description: "SEO, paid media, ecommerce, Shopify, CRO, AI automation, and web development for measurable growth.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <PageHero
        label="Services"
        title="Every growth lever, one strategic partner"
        subtitle="We organize capabilities around business outcomes—earned, paid, owned, and intelligent growth."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.id}>
              <h2 className="text-2xl font-bold text-teal">{cat.title}</h2>
              <p className="mt-2 max-w-2xl text-teal/70">{cat.description}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {services
                  .filter((s) => s.category === cat.id)
                  .map((service) => (
                    <article
                      key={service.slug}
                      className="flex flex-col border border-sand bg-sand-light p-8"
                    >
                      <h3 className="text-xl font-bold text-teal">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm text-teal/75">{service.shortDescription}</p>
                      <p className="mt-4 text-sm font-semibold text-copper">Outcome: {service.outcome}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-copper"
                      >
                        View service <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProcessSection />
      <section className="section-padding bg-sand-light">
        <div className="container-tcg">
          <SectionHeader label="Proof" title="Related case studies" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="border border-sand bg-white p-6 hover:border-copper"
              >
                <p className="text-xs uppercase tracking-widest text-copper">{c.brand}</p>
                <p className="mt-2 font-bold text-teal">{c.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-tcg max-w-3xl">
          <SectionHeader label="FAQ" title="Common questions" align="center" />
          <div className="mt-10">
            <FAQList items={generalFaqs} />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
