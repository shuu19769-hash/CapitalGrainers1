"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { megaMenuGroups } from "@/data/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const desktopNavLinks = [
  { href: "/#who-we-serve", label: "Who We Serve" },
  { href: "/services", label: "Services", mega: true },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
];

const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#who-we-serve", label: "Who We Serve" },
  { href: "/services", label: "Services", mega: true },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai", label: "AI" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full max-w-full overflow-x-hidden border-b border-sand/80 bg-white transition-shadow duration-300",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container-tcg flex h-16 min-w-0 items-center justify-between gap-3 md:h-[4.75rem] lg:gap-6">
        <Link href="/" className="relative z-[210] shrink-0">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={180}
            height={54}
            className="h-9 w-auto sm:h-10 md:h-11"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
          aria-label="Main"
        >
          {desktopNavLinks.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-base font-bold text-ink transition-colors hover:text-copper xl:px-4 xl:text-lg",
                    linkActive(link.href) && "text-copper"
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-6 rounded border border-sand bg-white p-6 shadow-lg md:grid-cols-4">
                        {megaMenuGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-copper">
                              {group.title}
                            </p>
                            <ul className="space-y-2">
                              {group.links.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-ink/80 hover:text-copper md:text-base"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-base font-bold text-ink transition-colors hover:text-copper xl:px-4 xl:text-lg",
                  linkActive(link.href) && "text-copper"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
          <a
            href={siteConfig.phoneHref}
            className="whitespace-nowrap text-base font-bold text-ink transition-colors hover:text-copper xl:text-lg"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-cta px-6 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cta-hover xl:px-8 xl:text-lg"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="touch-target relative z-[210] flex h-11 w-11 shrink-0 items-center justify-center text-ink lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col bg-white lg:hidden"
            style={{
              paddingTop: "max(0.5rem, env(safe-area-inset-top))",
              paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            }}
          >
            <div className="container-tcg flex h-14 shrink-0 items-center justify-between border-b border-sand">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                type="button"
                className="touch-target flex h-11 w-11 items-center justify-center text-ink"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-[max(0.875rem,env(safe-area-inset-left))] pb-6">
              {mobileNavLinks.map((link) =>
                link.mega ? (
                  <div key={link.href} className="border-b border-sand py-2">
                    <button
                      type="button"
                      className="touch-target flex w-full min-h-12 items-center justify-between py-2 text-left text-lg font-bold text-ink"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 transition-transform",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="mb-2 space-y-1 pl-1">
                        <li>
                          <Link
                            href="/services"
                            className="flex min-h-10 items-center font-semibold text-copper"
                            onClick={() => setMobileOpen(false)}
                          >
                            All Services
                          </Link>
                        </li>
                        {megaMenuGroups.flatMap((g) =>
                          g.links.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="flex min-h-10 items-center break-anywhere text-base text-ink/80"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex min-h-12 items-center border-b border-sand py-3 text-lg font-bold text-ink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={siteConfig.phoneHref}
                className="mt-4 text-center text-base font-bold text-ink"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cta px-6 text-base font-semibold text-white hover:bg-cta-hover"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
