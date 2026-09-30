"use client";

import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function LogoMarquee({
  dark = false,
  overlapHero = true,
}: {
  dark?: boolean;
  overlapHero?: boolean;
}) {
  const items = [...clientLogos, ...clientLogos];

  return (
    <section
      className={`relative z-10 w-full max-w-full overflow-x-hidden ${overlapHero ? "-mt-24 sm:-mt-28 md:-mt-32" : ""} ${
        dark ? "bg-teal-dark py-12 md:py-16" : "border-y border-sand/80 bg-white py-10 md:py-14"
      }`}
      aria-label="Client logos"
    >
      <p
        className={`container-tcg mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-sand/70" : "text-teal/60"
        }`}
      >
        Trusted by ambitious brands
      </p>
      <div className="marquee-shell group">
        <div className="flex w-max max-w-none animate-marquee gap-4 safe-px sm:gap-6 md:gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-3">
          {items.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-[5.5rem] w-[8.75rem] shrink-0 items-center justify-center rounded-sm border border-sand/20 bg-white px-2 py-2 shadow-sm transition-shadow duration-300 hover:shadow-md min-[375px]:h-24 min-[375px]:w-40 sm:px-4 sm:py-3 md:h-28 md:w-56 md:px-5 md:py-4"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.size ?? 200}
                height={80}
                className="max-h-12 w-auto max-w-[7.5rem] object-contain object-center sm:max-h-16 sm:max-w-[170px] md:max-h-[4.5rem] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
