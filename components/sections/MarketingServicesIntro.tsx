import { Reveal } from "@/components/animations/Reveal";

export function MarketingServicesIntro() {
  return (
    <section className="relative -mt-10 w-full max-w-full overflow-x-hidden bg-white/90 pb-12 pt-16 text-center sm:pt-20 md:pb-16 md:pt-24">
      <Reveal className="container-tcg max-w-4xl">
        <h2 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-ink/90">
          Award-winning growth services
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink/75 md:text-xl">
          The Capital Gainers offers a comprehensive suite of marketing services under one roof. We
          don&apos;t believe in one-size-fits-all. Our specialists craft tailored strategies aligned
          with your business goals and audience—delivering campaigns that drive measurable revenue,
          not vanity metrics.
        </p>
      </Reveal>
    </section>
  );
}
