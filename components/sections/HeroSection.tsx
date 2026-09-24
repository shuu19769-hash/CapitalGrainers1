"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroStats } from "@/data/stats";
import { HeroVisual } from "@/components/sections/HeroVisual";

const easePremium = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium },
  },
};

const lineGrow = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, delay: 0.05, ease: easePremium },
  },
};

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-sand-light pt-6 sm:pt-8 md:pt-12">
      {/* Background motion */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-1/4 top-0 h-[480px] w-[480px] rounded-full bg-teal/[0.04] blur-3xl"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-copper/[0.08] blur-3xl"
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,59,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,59,58,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-tcg relative grid min-w-0 items-center gap-8 pb-12 sm:gap-10 sm:pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <motion.div
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.p variants={reduce ? undefined : fadeUp} className="section-label">
            Premium Digital Growth
          </motion.p>

          <h1 className="text-balance text-[clamp(1.65rem,5.2vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-teal">
            <motion.span variants={reduce ? undefined : fadeUp} className="block">
              Turning Digital Investment Into
            </motion.span>
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="mt-1 block italic text-copper md:mt-2"
            >
              Measurable Growth
            </motion.span>
          </h1>

          <motion.div
            variants={reduce ? undefined : lineGrow}
            className="mt-6 h-px w-24 origin-left bg-copper"
            aria-hidden
          />

          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-teal/75 sm:mt-6 sm:text-base md:text-lg"
          >
            The Capital Gainers helps ambitious brands grow through SEO, paid media, ecommerce,
            development, conversion optimization, and AI-powered solutions—engineering profitable
            digital ecosystems.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button href="/contact">Get a Free Growth Audit</Button>
            <Button href="/portfolio" variant="secondary">Explore Our Work</Button>
          </motion.div>

          <motion.ul
            variants={reduce ? undefined : stagger}
            className="mt-10 grid grid-cols-2 gap-4 border-t border-sand pt-6 sm:mt-12 sm:flex sm:flex-wrap sm:gap-8 sm:pt-8"
          >
            {heroStats.map((s, i) => (
              <motion.li
                key={s.label}
                variants={reduce ? undefined : fadeUp}
                custom={i}
              >
                <motion.p
                  className="text-xl font-bold text-copper sm:text-2xl md:text-3xl"
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.5, ease: easePremium }}
                >
                  {s.value}
                </motion.p>
                <p className="mt-1 text-xs uppercase tracking-wider text-teal/60">{s.label}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
