// src/components/sections/ProjectsGrid.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, ImageIcon } from "lucide-react";

const VIEWPORT = { once: true, margin: "-80px" } as const;

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-800">
            {project.cover?.src ? (
              <>
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt || project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0 group-hover:from-slate-900/30 group-hover:to-slate-900/5 transition-all duration-500"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600">
                <ImageIcon size={36} className="mb-2" />
                <span className="text-xs">No preview</span>
              </div>
            )}

            {project.status && (
              <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900 shadow-sm">
                {project.status === "active"
                  ? "● Active"
                  : project.status === "planned"
                  ? "○ Planned"
                  : "◌ Archived"}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-4 pt-3 mt-auto border-t border-slate-100 dark:border-slate-800">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1.5 font-medium"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1.5 font-medium"
                >
                 
                  Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}