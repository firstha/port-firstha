"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionShell } from "@/components/layout/SectionShell";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-2">
          My Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Tech Stack & Tools
        </h2>
        <p className="mt-4 text-gray-400">
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
            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/20 transition"
          >
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-white/30 transition"
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