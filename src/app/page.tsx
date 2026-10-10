// src/app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SectionShell className="min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden relative">
        {/* Dekorasi background */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 via-blue-300/10 to-transparent blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent blur-[120px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-blue-600 uppercase font-semibold border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <Sparkles size={12} className="text-blue-500" />
            {profile.role}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
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
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-6 text-lg md:text-xl text-slate-600 font-medium"
          >
            {profile.tagline}
          </motion.p>

          {/* Deskripsi singkat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {profile.about.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT_EXPO }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white bg-blue-600 shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-slate-700 border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </SectionShell>
    </main>
  );
}
