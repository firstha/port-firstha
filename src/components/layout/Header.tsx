// src/components/layout/Header.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 20;
const ACTIVE_OFFSET = 140;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const SPRING_PILL = { type: "spring" as const, stiffness: 380, damping: 32 };

const getSectionId = (href: string) =>
  href === "/" ? "" : href.replace("/#", "");

function findActiveHref(): string {
  let current = "/";
  for (const item of navigation) {
    const id = getSectionId(item.href);
    if (!id) continue;
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) {
      current = item.href;
    }
  }
  return current;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      setActiveHref(findActiveHref());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
      if (href === "/") {
        window.scrollTo({ top: 0, behavior });
        return;
      }
      document.getElementById(getSectionId(href))?.scrollIntoView({ behavior });
    },
    [reduceMotion]
  );

  const headerClass = useMemo(
    () =>
      cn(
        "flex h-14 items-center justify-between rounded-full border px-5",
        "transition-all duration-500 ease-out",
        isScrolled || isMobileMenuOpen
          ? [
              "border-slate-200",
              "bg-white/80",
              "backdrop-blur-xl",
              "shadow-lg shadow-blue-100/50",
            ]
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
            onClick={(e) => handleNavClick(e, "/")}
            className="group flex items-center gap-2 rounded-full text-lg font-semibold tracking-tight text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
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
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium outline-none",
                    "transition-colors duration-300",
                    "focus-visible:ring-2 focus-visible:ring-blue-400/70",
                    isActive
                      ? "text-blue-700"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-blue-50 ring-1 ring-inset ring-blue-200/50"
                      transition={SPRING_PILL}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Tombol menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="-mr-2 rounded-full p-2 text-slate-600 outline-none transition hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-400/70 md:hidden"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
              className={cn(
                "mt-2 overflow-hidden rounded-2xl p-2 md:hidden",
                "border border-slate-200",
                "bg-white/95 backdrop-blur-xl",
                "shadow-lg shadow-blue-100/50"
              )}
            >
              {navigation.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium outline-none",
                      "transition-colors focus-visible:ring-2 focus-visible:ring-blue-400/70",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-blue-600"
                      />
                    )}
                  </a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
