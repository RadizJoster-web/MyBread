"use client";

import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Jangan render pagination jika halaman hanya 1 atau kosong
  if (totalPages <= 1) return null;

  return (
    <div className="w-full max-w-5xl flex items-center justify-center gap-6 mt-12 font-inter select-none">
      {/* ── TOMBOL PREVIOUS ── */}
      <motion.button
        whileHover={currentPage > 1 ? { scale: 1.05, x: -2 } : {}}
        whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-200 outline-none
          ${
            currentPage === 1
              ? "border-[#EDE4D8] text-muted-cocoa/30 bg-transparent cursor-not-allowed"
              : "border-[#EDE4D8] bg-white text-dark-chocolate hover:border-primary hover:text-primary cursor-pointer shadow-xs"
          }
        `}
      >
        <FiChevronLeft size={18} />
      </motion.button>

      {/* ── DAFTAR ANGKA HALAMAN ── */}
      <ul className="flex items-center gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <li key={page}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm font-bold rounded-xl border transition-all duration-200 cursor-pointer outline-none
                  ${
                    isActive
                      ? "bg-primary border-primary text-light shadow-md shadow-primary/20"
                      : "bg-white/80 border-[#EDE4D8] text-muted-cocoa hover:bg-white hover:border-primary hover:text-primary shadow-xs"
                  }
                `}
              >
                {page}
              </motion.button>
            </li>
          );
        })}
      </ul>

      {/* ── TOMBOL NEXT ── */}
      <motion.button
        whileHover={currentPage < totalPages ? { scale: 1.05, x: 2 } : {}}
        whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-200 outline-none
          ${
            currentPage === totalPages
              ? "border-[#EDE4D8] text-muted-cocoa/30 bg-transparent cursor-not-allowed"
              : "border-[#EDE4D8] bg-white text-dark-chocolate hover:border-primary hover:text-primary cursor-pointer shadow-xs"
          }
        `}
      >
        <FiChevronRight size={18} />
      </motion.button>
    </div>
  );
}
