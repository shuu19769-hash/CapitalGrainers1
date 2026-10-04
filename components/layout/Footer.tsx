import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { megaMenuGroups } from "@/data/services";
import { agencyStats } from "@/data/stats";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai", label: "AI Solutions" },
  { href: "/contact", label: "Contact" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-sand/80 transition-colors hover:text-copper"
    >
      <span>{children}</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const highlightStats = agencyStats.filter((s) => s.label !== "Founded").slice(0, 3);

  return (
    <footer className="relative w-full max-w-full overflow-hidden bg-teal-dark text-sand">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-copper to-transparent" aria-hidden />

      <div className="pointer-events-none absolute -right-4 top-12 select-none font-bold text-[clamp(3.5rem,16vw,11rem)] leading-none tracking-tighter text-white/[0.03] sm:-right-8 sm:top-16">
        TCG
      </div>

      <div
        className="container-tcg relative pt-12 pb-8 sm:pt-14 md:pt-16 md:pb-10"
        style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block rounded-sm bg-sand-light p-3 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="The Capital Gainers"
                width={200}
                height={60}
                className="h-11 w-auto md:h-12"
              />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-sand/80">
              Engineering profitable digital ecosystems through SEO, paid media, ecommerce, and
              AI—since {siteConfig.founded}.
            </p>
            <p className="mt-3 text-sm italic text-copper/90">
              Performance marketing built for measurable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/growth-audit"
                className="inline-flex items-center justify-center bg-copper px-5 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-copper-soft"
              >
                Get a Free Growth Audit
              </Link>
              <a
                href={siteConfig.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-sand/25 px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:border-copper hover:text-copper"
              >
                <Phone className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Explore + Services */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-8">
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-copper">
                Explore
              </h3>
              <ul className="space-y-3">
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-copper">
                Services
              </h3>
              <div className="space-y-5">
                {megaMenuGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-sand/45">
                      {group.title}
                    </p>
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <FooterLink href={link.href}>{link.label}</FooterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact + newsletter */}
          <div className="lg:col-span-3">
            <div className="border border-sand/15 bg-teal/40 p-6 md:p-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
                Get in touch
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-start gap-3 text-sand/85 transition-colors hover:text-copper"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
                    <span>
                      <span className="block font-semibold text-sand">{siteConfig.phone}</span>
                      <span className="text-sand/55">WhatsApp & calls</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sand/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
                  <span>
                    <span className="block font-semibold text-sand">{siteConfig.location}</span>
                    <span className="text-sand/55">Serving clients worldwide</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 border-t border-sand/15 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand/50">
                  Growth insights
                </p>
                <p className="mt-1 text-xs text-sand/55">Occasional strategies—no spam.</p>
                <form className="mt-3 flex flex-col gap-2 sm:flex-row" action="#" method="post">
                  <label className="sr-only" htmlFor="footer-newsletter-email">Email</label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="min-w-0 flex-1 border border-sand/20 bg-teal-dark/80 px-3 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-copper focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-copper px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-teal transition-colors hover:bg-copper-soft"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-sand/10 py-6 md:justify-between">
          <p className="text-xs uppercase tracking-[0.15em] text-sand/45">
            Founded {siteConfig.founded}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-lg font-bold text-copper md:text-xl">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-sand/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-sand/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6" aria-label="Legal">
            <Link href="/privacy-policy" className="transition-colors hover:text-copper">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-copper">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
