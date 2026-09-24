import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyPillars } from "@/data/process";

export function WhySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tcg">
        <SectionHeader
          label="Why Partner With Us"
          title="Why Capital Gainers"
          subtitle="We combine the discipline of performance marketing with the clarity of a strategic growth partner."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="relative border border-sand bg-sand-light p-8 pt-10"
            >
              <span className="absolute left-6 top-4 text-sm font-bold text-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-4 h-px w-12 bg-copper" />
              <h3 className="text-lg font-bold text-teal">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
