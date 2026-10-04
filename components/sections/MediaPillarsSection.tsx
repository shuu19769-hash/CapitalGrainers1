"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { agencyStats } from "@/data/stats";

const pillars = [
  {
    id: "earned",
    title: "Earned media",
    image: "/images/pages/web-analytics-dashboard.png",
    imageAlt: "Organic growth, SEO, and website analytics",
    align: "left" as const,
    items: [
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Content Marketing",
      "Digital PR",
      "Organic Social Media",
      "Generative Engine Optimization",
    ],
    href: "/services",
    overlay: "chart" as const,
  },
  {
    id: "paid",
    title: "Paid media",
    image: "/images/pages/paid-media-analytics.png",
    imageAlt: "Google and Meta paid media analytics",
    align: "right" as const,
    items: [
      "Pay-Per-Click Advertising (PPC)",
      "Google Ads & Shopping",
      "Paid Social (Meta, TikTok, LinkedIn)",
      "Retargeting / Remarketing",
      "Creative & Media Buying",
      "Performance Reporting",
    ],
    href: "/services",
    overlay: "stats" as const,
  },
  {
    id: "owned",
    title: "Owned media",
    image: "/images/pages/custom-admin-dashboard.png",
    imageAlt: "Custom websites, dashboards, and owned digital experiences",
    align: "left" as const,
    items: [
      "Shopify & Ecommerce Development",
      "WordPress & Custom Coding",
      "Conversion Rate Optimization (CRO)",
      "Website Design & Development",
      "Email & Lifecycle Marketing",
      "AI Automation & Analytics Dashboards",
    ],
    href: "/services",
    overlay: "none" as const,
  },
];

function TrafficChart() {
  return (
    <div className="rounded-lg bg-white px-5 py-4 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wide text-ink">Traffic overview</p>
      <div className="mt-4 flex h-24 items-end justify-between gap-2">
        {[40, 100, 35, 90].map((h, i) => (
          <div
            key={i}
            className="w-5 rounded-sm bg-gradient-to-t from-copper to-ink/70 animate-pulse"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PaidStatsOverlay() {
  const spend = agencyStats.find((s) => s.label.includes("Ad Spend"));
  const brands = agencyStats.find((s) => s.label.includes("Brands"));

  return (
    <>
      <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-lg bg-white px-5 py-4 text-center shadow-lg md:block md:-left-8 lg:-left-14">
        <p className="text-xs font-semibold uppercase text-ink">We manage</p>
        <p className="text-3xl font-bold text-copper">{spend?.value ?? "$1M"}</p>
        <p className="text-xs font-semibold uppercase text-ink">in ad spend</p>
      </div>
      <div className="absolute right-1 top-[12%] z-10 max-w-[46%] rounded-lg bg-white px-2 py-2 text-center shadow-lg sm:right-2 sm:px-4 sm:py-3 md:-right-6 md:max-w-none">
        <p className="text-[0.65rem] font-semibold uppercase leading-tight text-ink">
          Brands scaled
        </p>
        <p className="text-2xl font-bold text-copper">{brands?.value ?? "190+"}</p>
        <p className="text-[0.65rem] font-semibold uppercase text-ink">globally</p>
      </div>
    </>
  );
}

export function MediaPillarsSection() {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-cream pb-8 md:pb-16" aria-label="Marketing services">
      {pillars.map((pillar, pillarIndex) => {
        const imageFirst = pillar.align === "left";

        return (
          <div key={pillar.id} className="section-padding !py-10 md:!py-14">
            <div className="container-tcg">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  !imageFirst ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal
                  className="relative mx-auto w-full min-w-0 max-w-xl overflow-hidden pb-6 sm:pb-0 lg:max-w-none"
                  delay={pillarIndex * 0.06}
                  y={imageFirst ? 36 : 36}
                >
                  <div className="absolute -left-4 top-[35%] z-0 hidden h-56 w-[90%] rounded-lg bg-copper/25 md:block" />
                  <div className="relative z-[1] overflow-hidden rounded-lg border border-sand shadow-md">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {pillar.overlay === "chart" && (
                    <div className="absolute bottom-0 right-0 z-10 w-[min(11rem,72%)] sm:-bottom-4 sm:w-[min(240px,55%)] md:-right-6">
                      <TrafficChart />
                    </div>
                  )}
                  {pillar.overlay === "stats" && <PaidStatsOverlay />}
                </Reveal>

                <Reveal delay={0.12 + pillarIndex * 0.06} y={32}>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                    {pillar.title}
                  </h3>
                  <ul className="mt-6 space-y-2 text-sm text-ink/80 sm:text-base">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-copper">&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pillar.href}
                    className="mt-8 inline-flex min-h-11 items-center justify-center bg-cta px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta-hover"
                  >
                    Learn more
                  </Link>
                </div>
                </Reveal>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
