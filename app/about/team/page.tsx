import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { LandingHero } from "@/components/ui/LandingHero";
import { TeamTabs } from "@/components/sections/TeamTabs";
import { getPageImages } from "@/lib/page-media";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Our Team",
  description:
    "Meet the strategists, media buyers, developers, and creatives behind The Capital Gainers.",
  path: "/about/team",
});

export default function TeamPage() {
  const { hero, gallery } = getPageImages("about-team", "Our team");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Our Team", href: "/about/team" },
        ]}
      />
      <LandingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Our Team", href: "/about/team" },
        ]}
        label="About"
        title="The people behind your growth"
        subtitle="Specialists across SEO, paid media, Shopify, CRO, and automation—working as one team with transparent communication and owner-level accountability."
        heroImage={hero.src}
        heroImageAlt={hero.alt}
      />

      <section className="section-padding bg-white">
        <div className="container-tcg">
          <div className="grid gap-4 sm:grid-cols-3">
            {gallery.map((img, i) => (
              <div
                key={img.src + i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-tcg mx-auto max-w-3xl space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-ink">Specialists, not generalists</h2>
          <p className="leading-relaxed text-ink/75">
            Growth today requires depth across search, paid social, Google, storefronts, and data. Our
            team is structured in pods so you get experts who own outcomes—not a single generalist
            stretched across every channel.
          </p>
          <p className="leading-relaxed text-ink/75">
            Below you&apos;ll meet leads across strategy, media, development, and creative. We keep
            teams stable on accounts so context compounds and you always know who is doing the work.
          </p>
          <ul className="grid gap-3 text-left sm:grid-cols-2">
            {[
              "Direct access to channel owners",
              "Weekly written updates you can forward to leadership",
              "Honest pushback when a tactic won’t serve your margins",
              "Documentation so knowledge stays in your business",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-ink/80">
                <span className="text-copper" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="container-tcg">
          <TeamTabs />
        </div>
      </section>

      <section className="bg-teal-dark py-12 text-center text-white">
        <div className="container-tcg">
          <p className="text-lg font-semibold">Work with a team that knows your numbers</p>
          <Link
            href="/growth-audit"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-10 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-cta-hover"
          >
            Get a free growth audit
          </Link>
        </div>
      </section>
    </>
  );
}
