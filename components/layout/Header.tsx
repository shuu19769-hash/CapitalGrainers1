"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { megaMenuGroups } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <>
      <div
        className={cn(
          "bg-teal text-sand transition-opacity",
          mobileOpen && "pointer-events-none opacity-0 lg:opacity-100"
        )}
      >
        <div className="container-tcg flex flex-col items-stretch gap-1.5 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2 sm:text-center md:text-sm">
          <p className="text-center text-[0.7rem] leading-snug sm:text-left sm:text-xs">
            <span className="text-copper">●</span>{" "}
            <span className="hidden min-[400px]:inline">
              Performance marketing built for measurable growth.
            </span>
            <span className="min-[400px]:hidden">Measurable growth for ambitious brands.</span>
          </p>
          <Link
            href="/contact"
            className="touch-target mx-auto inline-flex min-h-10 items-center justify-center text-center text-xs font-semibold text-copper underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper sm:mx-0 sm:text-sm"
          >
            <span className="hidden sm:inline">Request a Free Strategy Call</span>
            <span className="sm:hidden">Free Strategy Call</span>
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-sand bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-sand-light"
        )}
      >
        <div className="container-tcg flex h-14 min-w-0 items-center justify-between gap-2 sm:h-16 md:h-20">
          <Link href="/" className="relative z-[210] shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Capital Gainers"
              width={160}
              height={48}
              className="h-9 w-auto sm:h-10 md:h-12"
              priority
            />
          </Link>

          <nav className="hidden min-w-0 items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) =>
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
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-copper",
                      pathname.startsWith("/services") ? "text-copper" : "text-teal"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" aria-hidden />
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
                                      className="text-sm text-teal/80 hover:text-copper"
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
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-copper",
                    pathname === link.href ? "text-copper" : "text-teal"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" className="!w-auto !py-2.5 !text-xs md:!text-sm">
              Get a Free Growth Audit
            </Button>
          </div>

          <button
            type="button"
            className="touch-target relative z-[210] flex h-11 w-11 shrink-0 items-center justify-center text-teal lg:hidden"
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
              className="fixed inset-0 z-[200] flex flex-col bg-sand-light lg:hidden"
              style={{
                paddingTop: "max(0.5rem, env(safe-area-inset-top))",
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="container-tcg flex h-14 shrink-0 items-center justify-between border-b border-sand">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="The Capital Gainers"
                    width={140}
                    height={42}
                    className="h-9 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="touch-target flex h-11 w-11 items-center justify-center text-teal"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-[max(0.875rem,env(safe-area-inset-left))] pb-6">
                {navLinks.map((link) =>
                  link.mega ? (
                    <div key={link.href} className="border-b border-sand py-2">
                      <button
                        type="button"
                        className="touch-target flex w-full min-h-12 items-center justify-between py-2 text-left text-lg font-semibold text-teal"
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
                              className="flex min-h-10 items-center text-copper"
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
                                  className="flex min-h-10 items-center break-anywhere text-sm text-teal/80"
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
                      className="flex min-h-12 items-center border-b border-sand py-3 text-lg font-semibold text-teal"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="mt-6 shrink-0">
                  <Button href="/contact" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                    Get a Free Growth Audit
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
