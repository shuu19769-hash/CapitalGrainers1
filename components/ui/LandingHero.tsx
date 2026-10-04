import Image from "next/image";
import Link from "next/link";

export type BreadcrumbItem = { name: string; href: string };

type LandingHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  label: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function LandingHero({
  breadcrumbs,
  label,
  title,
  subtitle,
  heroImage,
  heroImageAlt = "",
}: LandingHeroProps) {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-teal-dark text-white">
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/95 via-teal-dark/85 to-teal-dark/70" />
        </>
      )}
      {!heroImage && (
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(166,109,79,0.25) 0%, transparent 55%), linear-gradient(135deg, #1f1814 0%, #2f2620 50%, #1a2f3d 100%)",
          }}
        />
      )}

      <div className="relative z-[1] section-padding !pb-12 !pt-8 md:!pb-16 md:!pt-12">
        <div className="container-tcg min-w-0 max-w-5xl">
          <nav className="mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-white/70" aria-label="Breadcrumb">
            {breadcrumbs.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/90">{item.name}</span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-copper-soft">
                    {item.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-copper-soft">{label}</p>
          <h1 className="mt-4 text-balance text-[clamp(2rem,5.5vw,3.25rem)] font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg md:leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 h-1 w-20 origin-left rounded-full bg-cta" />
        </div>
      </div>
    </section>
  );
}
