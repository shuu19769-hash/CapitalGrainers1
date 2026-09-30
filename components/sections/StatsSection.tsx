"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { CountUp } from "@/components/animations/CountUp";
import { agencyStats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-white">
      <div className="container-tcg">
        <SectionHeader
          label="Results"
          title="Growth grounded in verified experience"
          subtitle="Outcomes and scale reflected in our work with ecommerce and performance-driven brands."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {agencyStats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 border-l-2 border-copper bg-sand-light p-5 sm:p-6 md:p-8"
            >
              <p className="text-2xl font-bold text-copper sm:text-3xl md:text-4xl">
                {stat.numeric !== undefined && stat.label !== "Founded" ? (
                  <CountUp
                    value={stat.numeric}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-teal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
