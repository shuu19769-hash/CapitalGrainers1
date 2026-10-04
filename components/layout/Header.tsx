"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavMenus } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const mobileExtraLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ai", label: "AI" },
  { href: "/contact", label: "Contact" },
];

function MobileNavAccordion({
  itemId,
  label,
  overviewHref,
  overviewLabel,
  columns,
  isOpen,
  onToggle,
  onNavigate,
}: {
  itemId: string;
  label: string;
  overviewHref: string;
  overviewLabel: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        id={`mobile-nav-${itemId}`}
        className="flex w-full min-h-12 items-center justify-between gap-3 py-3 text-left text-lg font-bold text-ink"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`mobile-nav-panel-${itemId}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-copper transition-transform duration-200", isOpen && "rotate-180")}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`mobile-nav-panel-${itemId}`}
            role="region"
            aria-labelledby={`mobile-nav-${itemId}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-l-2 border-copper/25 pb-4 pl-3">
              <Link
                href={overviewHref}
                className="flex min-h-11 items-center rounded-md bg-sand-light px-3 text-sm font-bold uppercase tracking-wide text-copper"
                onClick={onNavigate}
              >
                {overviewLabel} overview →
              </Link>
              {columns.map((column) => (
                <div key={column.title} className="min-w-0">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-copper/90">
                    {column.title}
                  </p>
                  <ul className="space-y-0.5">
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.href}-${link.label}`}>
                        <Link
                          href={link.href}
                          className="flex min-h-11 items-center break-words py-1.5 pr-2 text-base leading-snug text-ink/85 active:text-copper"
                          onClick={onNavigate}
                        >
                          {link.label}
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
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMobile();
    setActiveMenu(null);
  }, [pathname, closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  const linkActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeItem = mainNavMenus.find((item) => item.id === activeMenu);
  const isHome = pathname === "/";
  const solidHeader = scrolled || Boolean(activeMenu) || mobileOpen;
  const overlayHeader = isHome && !solidHeader;

  const toggleMobileSection = (id: string) => {
    setMobileExpanded((current) => (current === id ? null : id));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full max-w-full transition-[background-color,border-color,box-shadow] duration-300",
        mobileOpen ? "z-[500]" : "z-[100]",
        solidHeader
          ? "border-b border-sand/80 bg-white shadow-sm"
          : "border-b border-transparent bg-transparent",
        overlayHeader && "header--overlay"
      )}
      onMouseLeave={() => {
        if (!mobileOpen) setActiveMenu(null);
      }}
    >
      <div className="container-tcg flex h-[4.25rem] min-w-0 items-center justify-between gap-3 md:h-[5.25rem] lg:gap-6">
        <Link href="/" className="relative z-[210] shrink-0" onClick={() => mobileOpen && closeMobile()}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={220}
            height={66}
            className="h-11 w-auto sm:h-12 md:h-14"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex" aria-label="Main">
          {mainNavMenus.map((item) => {
            const isOpen = activeMenu === item.id;
            const isActive = linkActive(item.href);
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "nav-mega-trigger flex items-center gap-1 px-3 py-2 text-base font-bold transition-colors xl:px-4 xl:text-lg",
                    overlayHeader
                      ? "text-white/95 hover:text-white"
                      : "text-ink hover:text-copper",
                    (isActive || isOpen) &&
                      (overlayHeader ? "text-copper-soft" : "text-copper"),
                    isOpen && "nav-mega-trigger--open"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "whitespace-nowrap text-base font-bold transition-colors xl:text-lg",
              overlayHeader
                ? "text-white/95 hover:text-white"
                : "text-ink hover:text-copper"
            )}
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
          className={cn(
            "touch-target relative z-[210] flex h-11 w-11 shrink-0 items-center justify-center lg:hidden",
            overlayHeader && !mobileOpen ? "text-white" : "text-ink"
          )}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {activeItem && !mobileOpen && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="nav-mega-panel absolute left-0 right-0 top-full z-[110] hidden border-t border-white/10 bg-teal-dark shadow-xl lg:block"
            onMouseEnter={() => setActiveMenu(activeItem.id)}
          >
            <div className="container-tcg flex min-w-0 gap-8 py-8 md:gap-10 md:py-10">
              <div className="hidden w-44 shrink-0 border-r border-white/15 pr-6 md:block lg:w-52">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                  {activeItem.sidebarLabel}
                </p>
                <Link
                  href={activeItem.href}
                  className="mt-4 inline-block text-sm font-semibold text-copper-soft hover:text-white"
                >
                  View overview →
                </Link>
              </div>
              <div
                className={cn(
                  "grid min-w-0 flex-1 gap-8",
                  activeItem.columns.length >= 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : activeItem.columns.length === 2
                      ? "sm:grid-cols-2"
                      : "grid-cols-1"
                )}
              >
                {activeItem.columns.map((column) => (
                  <div key={column.title} className="min-w-0">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-copper-soft">
                      {column.title}
                    </p>
                    <ul className="space-y-2.5">
                      {column.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link
                            href={link.href}
                            className="text-base text-white/85 transition-colors hover:text-white hover:underline"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-[400] bg-ink/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[410] flex w-full max-w-[min(100%,24rem)] flex-col bg-white shadow-2xl lg:hidden"
              style={{
                paddingTop: "env(safe-area-inset-top, 0px)",
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
              }}
            >
              <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-sand px-[max(0.875rem,env(safe-area-inset-left))] pr-[max(0.875rem,env(safe-area-inset-right))]">
                <Link href="/" onClick={closeMobile}>
                  <Image
                    src="/images/logo.png"
                    alt={siteConfig.name}
                    width={160}
                    height={48}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="touch-target flex h-11 w-11 items-center justify-center text-ink"
                  onClick={closeMobile}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div
                className="flex min-h-0 flex-1 flex-col overflow-hidden"
                style={{
                  paddingLeft: "max(0.875rem, env(safe-area-inset-left))",
                  paddingRight: "max(0.875rem, env(safe-area-inset-right))",
                }}
              >
                <nav
                  className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-2"
                  aria-label="Mobile"
                >
                  {mainNavMenus.map((item) => (
                    <MobileNavAccordion
                      key={item.id}
                      itemId={item.id}
                      label={item.label}
                      overviewHref={item.href}
                      overviewLabel={item.sidebarLabel}
                      columns={item.columns}
                      isOpen={mobileExpanded === item.id}
                      onToggle={() => toggleMobileSection(item.id)}
                      onNavigate={closeMobile}
                    />
                  ))}
                  {mobileExtraLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex min-h-12 items-center border-b border-sand py-3 text-lg font-bold text-ink"
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="shrink-0 space-y-3 border-t border-sand bg-white py-4">
                  <a
                    href={siteConfig.phoneHref}
                    className="block text-center text-base font-bold text-ink"
                  >
                    {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex min-h-12 w-full items-center justify-center rounded-full bg-cta px-6 text-base font-semibold text-white hover:bg-cta-hover"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
