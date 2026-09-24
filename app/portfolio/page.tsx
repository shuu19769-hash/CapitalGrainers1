"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { portfolioFilters, portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const featured = portfolioProjects[0];
  const filtered =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Work across ecommerce, lifestyle, and performance brands"
        subtitle="Real projects with verified outcomes from our partnership with ambitious businesses."
      />
      <section className="section-padding bg-white">
        <div className="container-tcg min-w-0">
          <article className="mb-12 grid min-w-0 gap-0 overflow-hidden border border-sand bg-sand-light sm:mb-16 sm:gap-8 lg:grid-cols-2">
            <div className="relative min-h-[220px] w-full sm:min-h-[280px] lg:min-h-full">
              <Image
                src={featured.imageSrc}
                alt={featured.brand}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-12">
              <p className="text-xs uppercase tracking-widest text-copper">Featured project</p>
              <h2 className="mt-2 text-2xl font-bold text-teal sm:text-3xl">{featured.brand}</h2>
              <p className="mt-4 text-teal/75">{featured.summary}</p>
              <p className="mt-4 font-semibold text-copper">{featured.result}</p>
              <Link
                href={`/case-studies/${featured.slug}`}
                className="mt-6 font-semibold text-teal hover:text-copper"
              >
                View case study →
              </Link>
            </div>
          </article>

          <div className="-mx-1 flex flex-wrap gap-2">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`min-h-11 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-wider sm:px-4 sm:text-xs ${
                  filter === f ? "bg-teal text-sand" : "border border-teal/20 text-teal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article key={project.slug} id={project.slug} className="scroll-mt-28 border border-sand">
                <div className="group relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src={project.imageSrc}
                    alt={project.brand}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase text-copper">{project.category}</p>
                  <h3 className="text-lg font-bold text-teal">{project.brand}</h3>
                  <p className="mt-2 text-sm text-teal/70">{project.summary}</p>
                  <p className="mt-3 text-xs text-teal/60">{project.services.join(" · ")}</p>
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-copper"
                  >
                    Project details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
