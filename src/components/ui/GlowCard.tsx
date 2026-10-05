"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "pink" | "orange" | "mixed";
}

export function GlowCard({ children, className, glow = "mixed" }: GlowCardProps) {
  const glowColors = {
    pink: "from-pink-500/40 via-pink-500/5 to-transparent",
    orange: "from-orange-500/40 via-orange-500/5 to-transparent",
    mixed: "from-pink-500/30 via-orange-500/10 to-transparent",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn("group relative h-full rounded-[24px] md:rounded-[28px] overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[24px] md:rounded-[28px] p-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-700",
          "bg-gradient-to-br",
          glowColors[glow]
        )}
      >
        <div className="absolute inset-0 rounded-[24px] md:rounded-[28px] bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent" />
      </div>

      <div className="relative h-full rounded-[23px] md:rounded-[27px] bg-[#0a0a0a]/70 backdrop-blur-2xl backdrop-saturate-150 p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />
        <div
          className={cn(
            "absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700",
            "bg-gradient-to-br",
            glowColors[glow]
          )}
        />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 flex flex-col h-full">{children}</div>
      </div>
    </motion.div>
  );
}