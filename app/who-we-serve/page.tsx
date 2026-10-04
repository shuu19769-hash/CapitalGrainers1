import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { LandingHero } from "@/components/ui/LandingHero";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { audiences } from "@/data/audiences";
import { whoWeServeIntro } from "@/data/who-we-serve";
import { getPageImages } from "@/lib/page-media";

export const metadata = createMetadata({
  title: "Who We Serve",
  description:
    "The Capital Gainers partners with ecommerce, lead gen, multi-location, B2B, and industry-specific brands worldwide.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  const { hero, gallery } = getPageImages("who-we-serve-index", "Who we serve");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Who We Serve", href: "/who-we-serve" },
        ]}
      />
      <LandingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Who We Serve", href: "/who-we-serve" },
        ]}
        label="Who we serve"
        title="Growth partners for ambitious brands"
        subtitle={whoWeServeIntro}
        heroImage={hero.src}
        heroImageAlt={hero.alt}
      />
      <section className="section-padding bg-cream">
        <div className="container-tcg grid gap-4 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <div key={img.src + i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-tcg mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Built for how you actually grow</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Whether you sell online, generate leads, or serve customers across locations, we tailor SEO,
            paid media, development, and automation to your margins and sales cycle—not a generic
            playbook.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Select an audience below for a detailed view of pain points, tactics, metrics, and how we
            partner day to day. Every profile links to a full page with deliverables, process, and FAQs.
          </p>
        </div>
        <div className="container-tcg mt-12 grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <Link
              key={item.slug}
              href={`/who-we-serve/${item.slug}`}
              className="group border border-sand bg-cream p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-teal group-hover:text-copper">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-teal/75">{item.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-copper">Learn more →</span>
            </Link>
          ))}
        </div>
        <div className="container-tcg mt-12 text-center">
          <Button href="/growth-audit">Get a Free Growth Audit</Button>
        </div>
      </section>
    </>
  );
}
