"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { whoWeServeImage, whoWeServeIntro, whoWeServeItems } from "@/data/who-we-serve";
import { cn } from "@/lib/utils";

export function WhoWeServeSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="who-we-serve"
      className="section-padding w-full max-w-full overflow-x-hidden bg-white scroll-mt-24"
    >
      <div className="container-tcg">
        <Reveal className="text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase tracking-tight text-ink">
            Who we serve
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
            {whoWeServeIntro}
          </p>
        </Reveal>

        <Reveal
          className={cn(
            "mt-12",
            whoWeServeImage
              ? "grid gap-10 lg:grid-cols-2 lg:gap-14"
              : "mx-auto max-w-3xl"
          )}
          delay={0.08}
        >
          {whoWeServeImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand shadow-sm lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src={whoWeServeImage}
                alt="Partners we work with"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          <div className="min-w-0">
            {whoWeServeItems.map((entry, index) => {
              const open = index === active;
              return (
                <div key={entry.title} className="border-b border-sand">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase tracking-wide transition-colors sm:text-base",
                      open ? "text-copper" : "text-ink hover:text-copper"
                    )}
                    aria-expanded={open}
                    onClick={() => setActive(index)}
                  >
                    {entry.title}
                    <span className="text-copper">{open ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5">
                          <p className="text-sm leading-relaxed text-ink/75 md:text-base">
                            {entry.description}
                          </p>
                          <Link
                            href={entry.href}
                            className="mt-3 inline-block text-sm font-semibold text-copper hover:underline md:text-base"
                          >
                            Learn more
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
