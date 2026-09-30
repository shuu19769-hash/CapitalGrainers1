"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioFilters, portfolioProjects } from "@/data/portfolio";

export function PortfolioPreview() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.tags.includes(filter));

  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light">
      <div className="container-tcg">
        <SectionHeader label="Portfolio" title="Selected work across ecommerce and lifestyle" align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`min-h-11 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors sm:px-4 sm:text-xs ${
                filter === f
                  ? "bg-teal text-sand"
                  : "border border-teal/20 bg-white text-teal hover:border-copper"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio#${project.slug}`}
              className="group overflow-hidden border border-sand bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={project.imageSrc}
                  alt={project.brand}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-teal/0 transition-colors group-hover:bg-teal/20" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-copper">{project.category}</p>
                <h3 className="mt-1 text-lg font-bold text-teal">{project.brand}</h3>
                <p className="mt-2 text-sm text-teal/70">{project.result}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/portfolio" className="font-semibold text-copper hover:underline">
            View full portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
