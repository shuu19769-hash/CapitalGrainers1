"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { awardBadges } from "@/data/awards";

export function AwardBadgesSection() {
  const items = [...awardBadges, ...awardBadges];

  return (
    <section
      className="relative z-10 -mt-24 w-full max-w-full overflow-x-hidden sm:-mt-28 md:-mt-32"
      aria-label="Recognition"
    >
      <Reveal className="marquee-shell safe-px" amount={0.05} y={20}>
        <div
          className="group flex w-max max-w-none animate-marquee gap-3 md:gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-3"
        >
          {items.map((badge, index) => (
            <article
              key={`${badge.id}-${index}`}
              className="flex w-[11.5rem] shrink-0 items-center justify-center p-3 shadow-md min-[400px]:w-[13.5rem] min-[400px]:p-4 sm:w-[15.75rem] sm:p-5"
              style={{ backgroundColor: badge.accent }}
            >
              <div className="flex h-24 w-full items-center justify-center rounded-sm bg-white px-3 py-2 sm:h-28">
                <Image
                  src={badge.logoSrc}
                  alt={badge.logoAlt}
                  width={160}
                  height={72}
                  className="max-h-16 w-auto max-w-[9rem] object-contain object-center sm:max-h-[4.5rem]"
                />
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
