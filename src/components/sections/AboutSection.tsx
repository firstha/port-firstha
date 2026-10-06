"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";

const skills = ["Laravel", "React", "Next.js", "TypeScript", "MySQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 32;

  return (
    <SectionShell id="about">
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        {/* Kiri: teks */}
        <motion.div
          initial={{ opacity: 0, x: -offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 text-sm text-indigo-300">
            <span aria-hidden className="h-px w-8 bg-indigo-300/60" />
            About me
          </div>

          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
            {profile.about.headline}
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-gray-400 md:text-lg md:leading-8">
            {profile.about.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Teknologi yang saya gunakan">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-gray-300 transition-colors hover:border-indigo-300/40 hover:bg-indigo-300/10 hover:text-white"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Kanan: foto */}
        <motion.div
          initial={{ opacity: 0, x: offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="group relative w-64 md:w-80">
            {/* Cahaya lembut di belakang foto */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-indigo-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
            />

            {/* Frame garis yang bergeser */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-indigo-300/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />

            {/* Foto */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
