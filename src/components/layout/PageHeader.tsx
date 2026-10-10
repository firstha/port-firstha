"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      className={cn("text-center max-w-2xl mx-auto mb-16", className)}
    >
      <p className="text-xs tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-3 font-semibold">
        {eyebrow}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}