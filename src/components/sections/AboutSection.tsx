"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { cn } from "@/lib/utils";

/* ----------------------------- Konstanta ----------------------------- */

const SKILLS = ["Laravel", "React", "Next.js", "TypeScript", "MySQL"] as const;

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/* ------------------------------ Component ---------------------------- */

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 32;

  return (
    <SectionShell id="about">
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        {/* ------------------------- Kiri: Teks ------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        >
          {/* Label kecil dengan garis gradient */}
          <div className="mb-5 flex items-center gap-3 text-sm font-medium">
            <span
              aria-hidden
              className="h-px w-8 bg-gradient-to-r from-indigo-500 to-pink-500"
            />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About me
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
            {profile.about.headline}
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 md:text-lg md:leading-8">
            {profile.about.description}
          </p>

          {/* Chip skill — glass pastel */}
          <ul
            className="mt-8 flex flex-wrap gap-2.5"
            aria-label="Teknologi yang saya gunakan"
          >
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className={cn(
                  "group/chip flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
                  "border border-white/70",
                  "bg-gradient-to-br from-white/80 to-white/60",
                  "backdrop-blur-sm",
                  "text-slate-600",
                  "shadow-[0_2px_8px_-2px_rgba(99,102,241,0.12)]",
                  "transition-all duration-300",
                  "hover:-translate-y-0.5",
                  "hover:border-indigo-300/60",
                  "hover:text-slate-900",
                  "hover:shadow-[0_6px_16px_-4px_rgba(99,102,241,0.25)]"
                )}
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 transition-transform duration-300 group-hover/chip:scale-125"
                />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ------------------------- Kanan: Foto ------------------------ */}
        <motion.div
          initial={{ opacity: 0, x: offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="flex justify-center md:justify-end"
        >
          <div className="group relative w-64 md:w-80">
            {/* ✨ Glow gradient lembut di belakang foto */}
            <div
              aria-hidden
              className={cn(
                "absolute -inset-8 rounded-full blur-3xl",
                "bg-gradient-to-br from-indigo-400/30 via-purple-400/25 to-pink-400/30",
                "opacity-70 transition-opacity duration-700",
                "group-hover:opacity-100"
              )}
            />

            {/* Frame garis bergeser — gradient border */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 translate-x-4 translate-y-4 rounded-3xl",
                "border border-indigo-300/40",
                "transition-transform duration-500",
                "group-hover:translate-x-2 group-hover:translate-y-2"
              )}
            />

            {/* Foto utama */}
            <div
              className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-3xl",
                "border border-white/70",
                "bg-white/50",
                "shadow-[0_20px_50px_-20px_rgba(99,102,241,0.35)]",
                "backdrop-blur-sm"
              )}
            >
              <Image
                src="/profil.png"
                alt={`Foto profil ${profile.name}`}
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Overlay gradient lembut (bukan hitam) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent"
              />

              {/* Ring dalam halus */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}