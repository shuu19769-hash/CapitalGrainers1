import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/case-studies";

export function FeaturedCaseStudies() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-white">
      <div className="container-tcg min-w-0">
        <SectionHeader
          label="Case Studies"
          title="Results that speak in revenue and efficiency"
          align="center"
        />
        <div className="mt-12 space-y-16">
          {featured.map((study, index) => (
            <article
              key={study.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-sand bg-sand-light">
                <Image
                  src={study.imageSrc}
                  alt={`${study.brand} project`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                {study.logoSrc && (
                  <Image
                    src={study.logoSrc}
                    alt={study.brand}
                    width={160}
                    height={64}
                    className="mb-4 h-12 w-auto max-w-[180px] object-contain md:h-14"
                  />
                )}
                <p className="text-xs uppercase tracking-widest text-copper">{study.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-teal md:text-3xl">{study.brand}</h3>
                <p className="mt-4 text-teal/75">{study.challenge}</p>
                <p className="mt-2 text-sm font-semibold text-copper">{study.result}</p>
                <p className="mt-4 text-sm text-teal/60">
                  Services: {study.services.join(" · ")}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:text-copper"
                >
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
