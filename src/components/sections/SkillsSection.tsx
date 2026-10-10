// src/components/sections/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionShell } from "@/components/layout/SectionShell";

export function SkillsSection() {
  return (
    <SectionShell id="skills" className="bg-slate-50/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-blue-600 uppercase mb-3 font-semibold">
          My Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Tech Stack & Tools
        </h2>
        <p className="mt-4 text-slate-500">
          Teknologi yang saya gunakan dalam pengembangan web
        </p>
      </motion.div>

      {/* Grid Skills */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300"
          >
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-sm rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}