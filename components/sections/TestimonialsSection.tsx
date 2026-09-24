"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

const AUTO_INTERVAL_MS = 6000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const t = testimonials[index];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1)),
    []
  );

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1)),
    []
  );

  useEffect(() => {
    if (reduceMotion || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    timerRef.current = setInterval(next, AUTO_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused, reduceMotion]);

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -40 : 40,
    }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    next();
  };

  const goPrev = () => {
    setDirection(-1);
    prev();
  };

  return (
    <section
      className="section-padding bg-white"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div className="container-tcg min-w-0 max-w-4xl">
        <SectionHeader label="Testimonials" title="What our partners say" align="center" />
        <div className="relative mt-8 overflow-hidden border border-sand bg-sand-light p-5 sm:mt-10 sm:p-8 md:p-12">
          <Quote className="h-8 w-8 text-copper" aria-hidden />
          <div className="relative mt-5 min-h-[200px] sm:min-h-[160px] md:min-h-[120px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: reduceMotion ? 0.15 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-live="polite"
              >
                <blockquote className="break-anywhere text-base leading-relaxed text-teal sm:text-lg md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {t.logoSrc && (
                    <Image
                      src={t.logoSrc}
                      alt=""
                      width={140}
                      height={56}
                      className="h-12 w-auto max-w-[160px] object-contain md:h-14"
                    />
                  )}
                  <div>
                    <p className="font-bold text-teal">{t.brand}</p>
                    {t.service && <p className="text-sm text-teal/60">{t.service}</p>}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-6">
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-copper" : "w-2 bg-teal/25 hover:bg-teal/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center border border-teal/20 text-teal hover:border-copper hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center border border-teal/20 text-teal hover:border-copper hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
