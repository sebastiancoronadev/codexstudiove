"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, href, ...props }: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-outfit font-semibold tracking-wide transition-all duration-500 rounded-full overflow-hidden group";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-pink-600 to-orange-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.55)] shadow-[0_0_20px_rgba(236,72,153,0.25)]",
    glass:
      "text-white bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(236,72,153,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]",
    outline:
      "border border-pink-500/50 text-white bg-transparent hover:bg-pink-500/10 hover:border-pink-500",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {variant === "glass" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-100 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </motion.button>
  );
}