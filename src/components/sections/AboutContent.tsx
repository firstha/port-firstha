"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

const SKILLS = ["Laravel", "React", "Next.js", "TypeScript", "MySQL"] as const;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export function AboutContent() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 32;

  return (
    <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -offset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      >
        <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
          {profile.about.headline}
        </h2>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg md:leading-8">
          {profile.about.description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Teknologi">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="group/chip flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-950/50"
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

      <motion.div
        initial={{ opacity: 0, x: offset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="flex justify-center md:justify-end"
      >
        <div className="group relative w-64 md:w-80">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-full blur-3xl bg-gradient-to-br from-blue-400/25 via-sky-400/15 to-transparent dark:from-blue-600/25 dark:via-blue-500/15 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-blue-200 dark:border-blue-800 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-blue-100/50 dark:shadow-blue-950/50">
            <Image
              src="/profil.png"
              alt={`Foto profil ${profile.name}`}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 dark:ring-white/10"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}