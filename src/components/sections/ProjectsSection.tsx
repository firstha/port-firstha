"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionShell } from "@/components/layout/SectionShell";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  // Ambil 3 project terbaik (featured atau 3 pertama)
  const featuredProjects = projects
    .filter((p) => p.featured)
    .slice(0, 3);

  const displayProjects = featuredProjects.length > 0 
    ? featuredProjects 
    : projects.slice(0, 3);

  return (
    <SectionShell id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-2">
          My Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured Work
        </h2>
        <p className="mt-4 text-gray-400">
          Beberapa project yang pernah saya kerjakan
        </p>
      </motion.div>

      {/* Grid Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all hover:scale-[1.02] hover:bg-white/10"
          >
            {/* Cover Image Placeholder */}
            <div className="w-full h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/5 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-center text-gray-600">
                <svg
                  className="w-12 h-12 mx-auto mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs text-gray-500">Project image</p>
              </div>
            </div>

            {/* Status Badge */}
            {project.status && (
              <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-400 mb-2">
                {project.status === "active" ? "🟢 Active" : 
                 project.status === "planned" ? "📋 Planned" : 
                 "📦 Archived"}
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 text-gray-400"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 text-gray-500">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1"
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
                  className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1"
                >
                  
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="/projects"
          className="inline-block px-6 py-3 border border-white/20 rounded-xl hover:border-white transition text-sm"
        >
          View All Projects →
        </a>
      </motion.div>
    </SectionShell>
  );
}