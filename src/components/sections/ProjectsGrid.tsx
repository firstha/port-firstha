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
          className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Screenshot / Cover */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 border-b border-slate-100">
            {project.cover?.src ? (
              <>
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt || project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient saat hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0 group-hover:from-slate-900/30 group-hover:to-slate-900/5 transition-all duration-500"
                />
              </>
            ) : (
              // Fallback kalau belum ada cover
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                <ImageIcon size={36} className="mb-2" />
                <span className="text-xs">No preview</span>
              </div>
            )}

            {/* Status badge overlay */}
            {project.status && (
              <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/90 backdrop-blur-sm text-blue-700 border border-blue-100 shadow-sm">
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
            <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] rounded-full border border-slate-200 text-slate-500 bg-slate-50"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] rounded-full border border-slate-200 text-slate-400">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Links — di bawah, push ke bawah */}
            <div className="flex gap-4 pt-3 mt-auto border-t border-slate-100">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-blue-600 transition flex items-center gap-1.5 font-medium"
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
                  className="text-sm text-slate-500 hover:text-blue-600 transition flex items-center gap-1.5 font-medium"
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