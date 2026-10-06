"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import Image from "next/image";

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
            About ME
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
            <Image
              src="/profil.png"
              alt="Foto Profil"
              fill // Biar gambarnya otomatis memenuhi div (w-64 h-64)
              className="object-cover" 
              priority 
            />
          </div>
        </motion.div>

      </div>
    </SectionShell>
  );
}
