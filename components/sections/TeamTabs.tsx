"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { cn } from "@/lib/utils";

const PANEL_IMAGE_MIN_H = "min-h-[22rem] sm:min-h-[26rem] lg:min-h-[30rem]";

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamPanelImage({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <div
        className={cn(
          "relative flex w-full items-center justify-center bg-sand lg:w-[42%] lg:shrink-0",
          PANEL_IMAGE_MIN_H
        )}
      >
        <span className="text-5xl font-bold tracking-wide text-copper/35" aria-hidden>
          {initialsFromName(alt)}
        </span>
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-sand lg:w-[42%] lg:shrink-0",
        PANEL_IMAGE_MIN_H
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

type TeamTabsProps = {
  showAboutLink?: boolean;
};

export function TeamTabs({ showAboutLink = false }: TeamTabsProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const member = teamMembers[active];

  return (
    <div className="min-w-0 max-w-full">
      <div
        className="mb-8 flex max-w-full flex-nowrap justify-center gap-1.5 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] sm:gap-2 md:gap-2.5 lg:gap-2 xl:gap-3"
        role="tablist"
        aria-label="Team members"
      >
        {teamMembers.map((m, index) => {
          const selected = index === active;
          return (
            <button
              key={m.name}
              type="button"
              role="tab"
              id={`team-tab-${index}`}
              aria-selected={selected}
              aria-controls="team-panel"
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-left text-xs font-semibold transition-all duration-200 sm:px-3.5 sm:py-2.5 sm:text-sm md:px-4 md:py-2.5 lg:px-3 lg:text-[0.8125rem] xl:px-4 xl:text-sm",
                selected
                  ? "bg-cta text-white shadow-md"
                  : "bg-sand text-ink/85 hover:bg-sand/90 hover:text-ink"
              )}
            >
              {m.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={member.name}
          id="team-panel"
          role="tabpanel"
          aria-labelledby={`team-tab-${active}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-full overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_12px_40px_-16px_rgba(47,38,32,0.18)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            <TeamPanelImage src={member.imageSrc} alt={member.name} />

            <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <h3 className="break-words text-xl font-bold tracking-tight text-ink sm:text-2xl md:text-3xl">
                {member.name}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Roles">
                {member.roles.map((role) => (
                  <li key={role}>
                    <span className="inline-block rounded-md bg-cta/10 px-3 py-1.5 text-xs font-semibold text-cta sm:text-sm">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-[1.0625rem]">{member.bio}</p>

              <Link
                href={`/about/team/${member.slug}`}
                className="mt-8 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-wide text-copper hover:underline"
              >
                View full profile →
              </Link>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      {showAboutLink && (
        <p className="mt-10 text-center">
          <Link href="/about" className="font-semibold text-copper hover:underline">
            Meet the full team on our About page
          </Link>
        </p>
      )}
    </div>
  );
}
