import Image from "next/image";
import Link from "next/link";
import { LandingHero, type BreadcrumbItem } from "@/components/ui/LandingHero";
import { Button } from "@/components/ui/Button";
import type { PageImage } from "@/lib/page-media";

export type ContentSection = {
  heading: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type RichPageLayoutProps = {
  breadcrumbs: BreadcrumbItem[];
  label: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: PageImage[];
  sections: ContentSection[];
  sidebarTitle?: string;
  sidebarItems?: { label: string; value: string }[];
  relatedLinks?: { label: string; href: string }[];
  ctaTitle?: string;
  ctaButton?: { label: string; href: string };
};

export function RichPageLayout({
  breadcrumbs,
  label,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  gallery,
  sections,
  sidebarTitle = "At a glance",
  sidebarItems = [],
  relatedLinks = [],
  ctaTitle = "Ready to grow with clarity?",
  ctaButton = { label: "Get a free growth audit", href: "/growth-audit" },
}: RichPageLayoutProps) {
  return (
    <>
      <LandingHero
        breadcrumbs={breadcrumbs}
        label={label}
        title={title}
        subtitle={subtitle}
        heroImage={heroImage}
        heroImageAlt={heroImageAlt}
      />

      <section className="section-padding bg-white">
        <div className="container-tcg">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-copper">
            In the field
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {gallery.map((img, i) => (
              <figure
                key={img.src + i}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-sand shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {img.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 text-xs font-semibold text-white">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-tcg grid min-w-0 gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="min-w-0 space-y-10 lg:col-span-2">
            {sections.map((section) => (
              <article key={section.heading} className="rounded-lg border border-sand bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-ink md:text-2xl">{section.heading}</h2>
                {section.body && (
                  <p className="mt-4 leading-relaxed text-ink/75 md:text-lg">{section.body}</p>
                )}
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-4 leading-relaxed text-ink/75 md:text-lg">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            {sidebarItems.length > 0 && (
              <div className="rounded-lg border border-sand bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-copper">{sidebarTitle}</p>
                <dl className="mt-4 space-y-4">
                  {sidebarItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-medium text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {relatedLinks.length > 0 && (
              <div className="rounded-lg border border-sand bg-sand-light p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-copper">Explore more</p>
                <ul className="mt-4 space-y-2">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-semibold text-ink transition-colors hover:text-copper"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button href={ctaButton.href} className="w-full justify-center">
              {ctaButton.label}
            </Button>
          </aside>
        </div>
      </section>

      <section className="border-t border-sand bg-teal-dark py-14 text-center text-white md:py-16">
        <div className="container-tcg max-w-2xl">
          <h2 className="text-2xl font-bold md:text-3xl">{ctaTitle}</h2>
          <p className="mt-4 text-white/80">
            Tell us about your goals—we&apos;ll respond with a clear plan, not a generic pitch deck.
          </p>
          <Link
            href={ctaButton.href}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta-hover"
          >
            {ctaButton.label}
          </Link>
        </div>
      </section>
    </>
  );
}
