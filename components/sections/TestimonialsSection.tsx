"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = useCallback(
    () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1)),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1)),
    []
  );

  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light" aria-label="Testimonials">
      <div className="container-tcg max-w-4xl">
        <Reveal className="text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase tracking-tight text-ink">
            Testimonials
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
            Our clients trust us to deliver results. Read their stories to see how we&apos;ve helped
            brands grow traffic, conversions, and revenue.
          </p>
        </Reveal>

        <Reveal className="relative mt-10 rounded-xl border border-sand bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12" delay={0.1}>
          <p className="text-5xl leading-none text-copper/30" aria-hidden>&ldquo;</p>
          <div className="mt-2 min-h-[10rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-8 text-sm font-bold uppercase tracking-wide text-ink md:text-base">
                  {t.brand}
                  {t.service ? ` · ${t.service}` : ""}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-cream text-ink hover:border-copper hover:text-copper"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-cream text-ink hover:border-copper hover:text-copper"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
