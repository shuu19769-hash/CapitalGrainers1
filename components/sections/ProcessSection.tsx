import { SectionHeader } from "@/components/ui/SectionHeader";
import { growthProcess } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light">
      <div className="container-tcg">
        <SectionHeader
          label="Process"
          title="A clear path from insight to scale"
          align="center"
        />
        <ol className="mt-10 flex flex-col gap-4 sm:mt-12 md:flex-row md:gap-0">
          {growthProcess.map((step, i) => (
            <li
              key={step.title}
              className="relative min-w-0 flex-1 border-l-2 border-copper/40 py-4 pl-5 sm:py-6 sm:pl-6 md:border-l-0 md:border-t-2 md:px-3 md:py-0 md:pt-8 lg:px-4"
            >
              <span className="text-2xl font-bold text-copper">{step.step}</span>
              <h3 className="mt-2 font-bold text-teal">{step.title}</h3>
              <p className="mt-2 text-sm text-teal/70">{step.description}</p>
              {i < growthProcess.length - 1 && (
                <span className="absolute right-0 top-8 hidden h-2 w-2 rotate-45 border-r border-t border-copper md:block" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
