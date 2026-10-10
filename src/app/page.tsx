// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ---------------------------- HERO ---------------------------- */}
      <SectionShell className="min-h-screen flex items-center justify-center overflow-hidden relative">
        {/* Dekorasi gradient biru lembut */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 via-blue-300/10 to-transparent blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent blur-[120px] rounded-full" />
          {/* Grid pattern halus */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="text-center max-w-3xl">
          {/* Role / label kecil */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-blue-600 uppercase font-semibold border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            {profile.role}
          </motion.p>

          {/* Headline utama */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mt-6 text-slate-900 tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-slate-600 font-medium"
          >
            {profile.tagline}
          </motion.p>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {profile.about.description}
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Tombol utama — biru solid elegan */}
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-xl font-medium text-white bg-blue-600 shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Tombol sekunder — putih dengan border biru */}
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-medium text-slate-700 border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
            </div>
          </motion.div>
        </div>
      </SectionShell>

      {/* ------------------------- SECTIONS ------------------------- */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
