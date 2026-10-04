"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroWaveBackground } from "@/components/sections/HeroWaveBackground";

const easePremium = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easePremium },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="hero-ignite relative -mt-[4.25rem] w-full max-w-full overflow-hidden md:-mt-[5.25rem]"
      aria-label="Introduction"
    >
      <div className="hero-ignite__outer relative">
        <HeroWaveBackground />

        <div className="hero-ignite__content">
          <div className="container-tcg min-w-0 max-w-full">
            <motion.div
              className="hero-ignite__wrap mx-auto max-w-5xl min-w-0 text-center break-words"
              variants={reduce ? undefined : stagger}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              <motion.h1
                variants={reduce ? undefined : fadeUp}
                className="text-balance text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.12] tracking-tight text-white"
              >
                Turning Digital Investment Into
                <br />
                <span className="mt-1 inline-block italic text-white md:mt-2">Measurable Growth</span>
              </motion.h1>

              <motion.p
                variants={reduce ? undefined : fadeUp}
                className="mx-auto mt-4 max-w-3xl text-pretty text-[clamp(1.125rem,3vw,2.125rem)] font-medium leading-snug text-white/90 sm:mt-5"
              >
                Get a free growth audit to uncover your biggest opportunities for scale.
              </motion.p>

              <motion.div variants={reduce ? undefined : fadeUp} className="mt-8 sm:mt-10">
                <Button
                  href="/growth-audit"
                  className="hero-ignite__cta !w-auto !rounded-full !px-10 !py-4 !text-lg !font-semibold sm:!px-14 sm:!text-xl"
                  showArrow={false}
                >
                  Get a Free Growth Audit
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
