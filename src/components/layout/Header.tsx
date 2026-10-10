// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 20;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const SPRING_PILL = { type: "spring" as const, stiffness: 380, damping: 32 };

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const headerClass = useMemo(
    () =>
      cn(
        "flex h-14 items-center justify-between gap-3 rounded-full border px-5 transition-all duration-500 ease-out",
        isScrolled || isMobileMenuOpen
          ? "border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-100/50 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-blue-950/50"
          : "border-transparent bg-transparent"
      ),
    [isScrolled, isMobileMenuOpen]
  );

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
    >
      <Container>
        <div className={headerClass}>
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
          >
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-sm shadow-blue-400/40 transition-transform duration-300 group-hover:scale-125"
            />
            {profile.name.split(" ")[0]}
          </Link>

          {/* Navigasi desktop */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium outline-none transition-colors duration-300",
                    "focus-visible:ring-2 focus-visible:ring-blue-400/70",
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-blue-50 ring-1 ring-inset ring-blue-200/50 dark:bg-blue-950/60 dark:ring-blue-800/50"
                      transition={SPRING_PILL}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Kanan: Theme Toggle + Menu Mobile */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="-mr-2 rounded-full p-2 text-slate-600 outline-none transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-blue-400/70 md:hidden"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Navigasi mobile"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl p-2 md:hidden border border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-100/50 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-blue-950/50"
            >
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-400/70",
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-blue-600"
                      />
                    )}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
