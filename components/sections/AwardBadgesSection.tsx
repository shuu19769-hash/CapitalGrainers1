"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { awardBadges } from "@/data/awards";
import { cn } from "@/lib/utils";

/** Same tan frame on every marquee card (matches ZAZAAR / MegaCore / etc.) */
const LOGO_CARD_BORDER_COLOR = "#8a6d4f";

function LogoCard({ badge }: { badge: (typeof awardBadges)[number] }) {
  const isCrystalMedia = badge.logoSrc.includes("crystal-media");

  const frameClass = cn(
    "w-[11.5rem] shrink-0 p-1 shadow-sm min-[400px]:w-[13.5rem] sm:w-[15.75rem] sm:p-1.5",
    "border border-solid"
  );

  const innerClass = cn(
    "flex h-24 w-full items-center justify-center bg-white sm:h-28",
    isCrystalMedia ? "px-3 py-3 sm:px-4 sm:py-4" : "px-1.5 py-1 sm:px-2 sm:py-1.5"
  );

  const frameStyle = {
    backgroundColor: LOGO_CARD_BORDER_COLOR,
    borderColor: LOGO_CARD_BORDER_COLOR,
  };

  const content = (
    <div className={frameClass} style={frameStyle}>
      <div className={innerClass}>
        <Image
          src={badge.logoSrc}
          alt={badge.logoAlt}
          width={200}
          height={96}
          className={cn(
            "w-auto object-contain object-center",
            isCrystalMedia
              ? "max-h-[3.25rem] max-w-[9rem] sm:max-h-[3.75rem] sm:max-w-[10rem]"
              : "max-h-[5.25rem] max-w-[11.5rem] sm:max-h-24 sm:max-w-[12.5rem]"
          )}
        />
      </div>
    </div>
  );

  if (badge.websiteUrl) {
    return (
      <a
        href={badge.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block shrink-0 cursor-pointer transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
        aria-label={`Visit ${badge.logoAlt} website`}
      >
        {content}
      </a>
    );
  }

  return <article className="shrink-0">{content}</article>;
}

export function AwardBadgesSection() {
  const items = [...awardBadges, ...awardBadges];
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative z-10 -mt-24 w-full max-w-full overflow-x-hidden sm:-mt-28 md:-mt-32"
      aria-label="Recognition"
    >
      <Reveal amount={0.05} y={20}>
        <div
          className="marquee-shell safe-px py-3 md:py-4"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <div
            className={cn(
              "flex w-max max-w-none animate-marquee gap-3 md:gap-4 motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-3",
              paused && "marquee-paused"
            )}
          >
            {items.map((badge, index) => (
              <LogoCard key={`${badge.id}-${index}`} badge={badge} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
