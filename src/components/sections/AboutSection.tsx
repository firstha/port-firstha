"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { Container } from "@/components/common/Container";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Kiri - Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-2">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {profile.about.headline}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {profile.about.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
              Laravel
            </span>
            <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
              React
            </span>
            <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
              Next.js
            </span>
            <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
              TypeScript
            </span>
            <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
              MySQL
            </span>
          </div>
        </motion.div>

        {/* Kanan - Card / Foto placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg
                className="w-20 h-20 mx-auto mb-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="text-sm">Photo placeholder</p>
              <p className="text-xs text-gray-600">Ganti nanti</p>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionShell>
  );
}