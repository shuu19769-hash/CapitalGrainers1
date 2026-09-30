"use client";

import { Reveal } from "@/components/animations/Reveal";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-sand-light pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16">
      <Reveal className="container-tcg min-w-0 max-w-4xl">
        {label && <p className="section-label">{label}</p>}
        <h1 className="text-balance text-[clamp(1.75rem,5.5vw,3rem)] font-bold leading-tight tracking-tight text-teal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-teal/75 sm:mt-6 sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 h-px w-24 origin-left bg-copper" />
      </Reveal>
    </section>
  );
}
