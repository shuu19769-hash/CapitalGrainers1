"use client";

import {
  Award,
  Handshake,
  LineChart,
  MessageSquare,
  Scale,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealStagger } from "@/components/animations/Reveal";
import { whyPillars } from "@/data/process";

const icons = [MessageSquare, Award, Handshake, LineChart, Sparkles, Scale];

export function DifferenceSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding w-full max-w-full overflow-x-hidden bg-sand-light">
      <div className="container-tcg">
        <Reveal className="text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase tracking-tight text-ink">
            The Capital Gainers difference
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
            We blend creativity with data—crafting tailored strategies across SEO, paid media, content,
            and development. With transparency and a long-term partnership mindset, we work as an
            extension of your team so your brand thrives in a fast-changing digital world.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPillars.map((pillar, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <motion.article
                key={pillar.title}
                whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25 } }}
                className="rounded-lg border border-sand bg-white px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-copper/10 text-copper">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink md:text-base">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
