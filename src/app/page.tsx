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
    <main className="min-h-screen">
      {/* ---------------------------- HERO ---------------------------- */}
      <SectionShell className="min-h-screen flex items-center justify-center overflow-hidden relative">
        {/* Dekorasi gradient lembut di belakang */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/40 via-purple-400/30 to-pink-400/40 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-sky-400/30 via-cyan-400/25 to-indigo-400/30 blur-[120px] rounded-full" />
        </div>

        <div className="text-center max-w-3xl">
          {/* Role / label kecil */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent uppercase font-medium"
          >
            {profile.role}
          </motion.p>

          {/* Headline utama */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mt-4 text-slate-900"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-slate-600"
          >
            {profile.tagline}
          </motion.p>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-slate-500 max-w-xl mx-auto"
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
            {/* Tombol utama — gradient indigo → pink */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg shadow-indigo-300/40 hover:shadow-xl hover:shadow-indigo-400/50 hover:scale-[1.03] transition-all duration-300"
            >
              View Projects
            </a>

            {/* Tombol sekunder — glass lembut */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-medium text-slate-700 border border-slate-200 bg-white/60 backdrop-blur-sm hover:border-indigo-300 hover:text-slate-900 hover:bg-white transition-all duration-300"
            >
              Contact Me
            </a>
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
