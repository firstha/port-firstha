"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

// "/" -> "" (atas halaman), "/#about" -> "about"
const getSectionId = (href: string) => (href === "/" ? "" : href.replace("/#", ""));

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const reduceMotion = useReducedMotion();

  // Deteksi scroll + section yang sedang aktif
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "/";
      for (const item of navigation) {
        const id = getSectionId(item.href);
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.href;
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

    if (href === "/") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    document.getElementById(getSectionId(href))?.scrollIntoView({ behavior });
  };

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
    >
      <Container>
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full border px-5 transition-all duration-300",
            isScrolled || isMobileMenuOpen
              ? "border-white/10 bg-black/60 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="group flex items-center gap-2 rounded-full text-lg font-semibold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
          >
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-indigo-400 transition-transform duration-300 group-hover:scale-150"
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
                    "relative rounded-full px-4 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-300/70",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
            className="-mr-2 rounded-full p-2 text-gray-300 outline-none transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-300/70 md:hidden"
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
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 shadow-xl shadow-black/40 backdrop-blur-xl md:hidden"
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
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-300/70",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />}
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
