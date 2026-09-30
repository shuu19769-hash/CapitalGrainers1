import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export function WhyPartnerSection() {
  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-white text-center">
      <Reveal className="container-tcg max-w-3xl">
        <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-bold uppercase tracking-tight text-ink">
          Why partner with The Capital Gainers?
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg md:text-xl">
          <p>
            We understand the challenges brands face in today&apos;s competitive digital landscape—
            scaling efficiently, integrating channels, and staying ahead of platform changes. We build
            customized, data-driven strategies that deliver measurable results across SEO, paid
            media, ecommerce, and automation.
          </p>
          <p>
            With hands-on specialists and transparent reporting, you always know where your
            investment is going. When you partner with us, you get a dedicated growth team committed
            to long-term revenue—not short-term vanity metrics.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-cta-hover sm:text-base md:text-lg"
        >
          Get your free growth audit
        </Link>
      </Reveal>
    </section>
  );
}
