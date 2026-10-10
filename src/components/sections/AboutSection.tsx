// src/components/sections/AboutSection.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { cn } from "@/lib/utils";

const SKILLS = ["Laravel", "React", "Next.js", "TypeScript", "MySQL"] as const;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 32;

  return (
    <SectionShell id="about" className="bg-white">
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        {/* Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        >
          <div className="mb-5 flex items-center gap-3 text-sm font-medium">
            <span aria-hidden className="h-px w-8 bg-blue-600" />
            <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold">
              About me
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
            {profile.about.headline}
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 md:text-lg md:leading-8">
            {profile.about.description}
          </p>

          {/* Chip skill — putih dengan border biru */}
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Teknologi">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className={cn(
                  "group/chip flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                  "border border-slate-200 bg-white text-slate-600",
                  "shadow-sm",
                  "transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100"
                )}
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform duration-300 group-hover/chip:scale-125"
                />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Kanan: Foto */}
        <motion.div
          initial={{ opacity: 0, x: offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="flex justify-center md:justify-end"
        >
          <div className="group relative w-64 md:w-80">
            {/* Glow biru lembut */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full blur-3xl bg-gradient-to-br from-blue-400/25 via-sky-400/15 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Frame garis bergeser */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-blue-200 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />

            {/* Foto utama */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50">
              <Image
                src="/profil.png"
                alt={`Foto profil ${profile.name}`}
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Overlay biru tipis */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"
              />

              {/* Ring dalam */}
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