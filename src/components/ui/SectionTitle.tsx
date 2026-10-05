"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const words = title.split(" ");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className={`font-outfit text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white ${
          align === "center" ? "mx-auto max-w-4xl" : ""
        }`}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className={
              i === words.length - 1
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400"
                : ""
            }
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 font-outfit text-base md:text-lg font-light text-white/45 leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}