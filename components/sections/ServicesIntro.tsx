"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Globe, Layers, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceCategories, services } from "@/data/services";

const icons = {
  earned: Globe,
  paid: BarChart3,
  owned: Layers,
  intelligent: Sparkles,
};

export function ServicesIntro() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light">
      <div className="container-tcg">
        <SectionHeader
          label="Services"
          title="Growth Services Built Around Business Outcomes"
          subtitle="From organic search to paid media, storefronts to AI systems—we align every lever with revenue and efficiency."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((cat, i) => {
            const Icon = icons[cat.id];
            const catServices = services.filter((s) => s.category === cat.id);
            return (
              <motion.article
                key={cat.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border border-sand bg-white p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-copper/40 text-copper">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-teal">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal/70">{cat.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-teal/80">
                  {catServices.slice(0, 4).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1 hover:text-copper"
                      >
                        {s.title}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-copper"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
