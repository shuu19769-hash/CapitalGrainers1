import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export function ReviewsCTASection() {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-white pb-12 pt-4 md:pb-16">
      <Reveal className="container-tcg text-center">
        <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-bold uppercase tracking-tight text-ink">
          Highly reviewed by growth-focused brands
        </h2>
      </Reveal>

      <div className="mt-8 bg-sand-light py-10 md:py-14">
        <div className="container-tcg">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-lg border border-sand shadow-md" delay={0.05}>
              <Image
                src="/images/pages/growth-analytics.jpg"
                alt="Growth analytics and performance review"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal className="text-center lg:text-left" delay={0.12}>
              <p className="text-lg font-bold uppercase tracking-wide text-ink sm:text-xl">
                See why our clients love The Capital Gainers
              </p>
              <Link
                href="/case-studies"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-cta-hover md:text-base"
              >
                View case studies
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="container-tcg mt-8 flex flex-wrap items-center justify-center gap-8 opacity-90" delay={0.1}>
        <p className="text-sm font-semibold uppercase tracking-widest text-copper md:text-base">
          5-star partnerships
        </p>
        <p className="text-sm font-semibold uppercase tracking-widest text-copper md:text-base">
          Verified results
        </p>
      </Reveal>
    </section>
  );
}
