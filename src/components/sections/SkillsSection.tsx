"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionShell } from "@/components/layout/SectionShell";

const VIEWPORT = { once: true, margin: "-80px" } as const;

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      className="bg-slate-50/50 dark:bg-slate-900/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-3 font-semibold">
          My Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Tech Stack & Tools
        </h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Teknologi yang saya gunakan dalam pengembangan web
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all duration-300"
          >
            <h3 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-sm rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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