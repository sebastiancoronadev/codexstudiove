"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface BackButtonProps {
  label?: string;
}

export function BackButton({ label = "Volver al Inicio" }: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/25 hover:shadow-[0_8px_32px_rgba(236,72,153,0.15)] transition-all duration-300 font-outfit text-sm font-medium group"
      >
        <i className="bi bi-arrow-left transition-transform group-hover:-translate-x-1" />
        {label}
      </Link>
    </motion.div>
  );
}