"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, type Certificate } from "@/data/certificates";
import {
  X,
  ExternalLink,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const VIEWPORT = { once: true, margin: "-80px" } as const;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const ITEMS_PER_PAGE = 6;

export function CertificatesGrid() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedCerts = useMemo(
    () =>
      [...certificates].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const totalPages = Math.ceil(sortedCerts.length / ITEMS_PER_PAGE);

  const currentCerts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedCerts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedCerts, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCerts.map((cert, idx) => (
            <motion.button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: EASE_OUT_EXPO,
              }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              aria-label={`Preview sertifikat ${cert.title}`}
            >
              <div className="absolute inset-0 pointer-events-none">
                <iframe
                  src={`${cert.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0"
                  title={`Preview ${cert.title}`}
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0 group-hover:from-slate-900/40 group-hover:to-slate-900/10 transition-all duration-300 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg shadow-blue-500/25">
                  <ZoomIn size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-300/50 dark:group-hover:ring-blue-700/50 transition-all duration-300 pointer-events-none"
              />
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {sortedCerts.length === 0 && (
        <div className="text-center py-20 text-slate-400 dark:text-slate-500">
          <p>Belum ada sertifikat yang ditampilkan.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ${selectedCert.title}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              className="relative w-full max-w-5xl h-[90vh] rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 truncate pr-4">
                  {selectedCert.title}
                </span>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={selectedCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-all"
                  >
                    <ExternalLink size={14} />
                    Buka PDF
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Tutup"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-slate-100 dark:bg-slate-950 overflow-hidden">
                <iframe
                  src={`${selectedCert.pdfPath}#toolbar=1&navpanes=0`}
                  className="w-full h-full"
                  title={`Sertifikat ${selectedCert.title}`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------------------- Pagination ---------------------------- */

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = useMemo(() => {
    const result: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) result.push(i);
      return result;
    }

    result.push(1);
    if (currentPage > 3) result.push("ellipsis");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) result.push(i);

    if (currentPage < totalPages - 2) result.push("ellipsis");
    result.push(totalPages);

    return result;
  }, [currentPage, totalPages]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="Navigasi halaman sertifikat"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "inline-flex items-center justify-center h-10 w-10 rounded-xl border transition-all",
          currentPage === 1
            ? "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed"
            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50"
        )}
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-1.5">
        {pages.map((page, idx) => {
          if (page === "ellipsis") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="inline-flex items-center justify-center h-10 w-10 text-slate-400 dark:text-slate-600 text-sm select-none"
              >
                …
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center justify-center h-10 min-w-10 px-3 rounded-xl border text-sm font-medium transition-all",
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "inline-flex items-center justify-center h-10 w-10 rounded-xl border transition-all",
          currentPage === totalPages
            ? "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed"
            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50"
        )}
        aria-label="Halaman berikutnya"
      >
        <ChevronRight size={18} />
      </button>
    </motion.nav>
  );
}