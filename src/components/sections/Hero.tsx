"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTypewriter } from "@/lib/hooks/useTypewriter";
import { useTranslation } from "@/lib/i18n/useTranslation";

interface HeroProps {
  onIntroComplete?: () => void;
}

export function Hero({ onIntroComplete }: HeroProps) {
  const { t } = useTranslation();
  const [introDone, setIntroDone] = useState(false);

  const line1 = t("hero.line1") as string;
  const line2 = t("hero.line2") as string;
  const fullText = `${line1} ${line2}`;

  const { displayText, isComplete } = useTypewriter(fullText, 65, 1000, () => {
    setIntroDone(true);
    if (onIntroComplete) onIntroComplete();
  });

  useEffect(() => {
    if (introDone) {
      document.body.style.overflow = "";
    }
  }, [introDone]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Presentación de Codex Studio VE"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.6 }}
        animate={isComplete ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.6 }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 -translate-y-1/2 -left-40 md:left-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-pink-600/25 rounded-full blur-[180px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.6 }}
        animate={isComplete ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.6 }}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 -translate-y-1/2 -right-40 md:right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-orange-500/25 rounded-full blur-[180px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComplete ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComplete ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 2, delay: 0.9 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/15 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="sr-only">Codex Studio VE - Desarrollo Software y Arquitectura Web</h1>

        <p
          aria-hidden="true"
          className="font-outfit text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 min-h-[5rem] md:min-h-[7rem] leading-[1.15]"
        >
          {displayText}
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="inline-block w-[3px] md:w-[4px] h-[2rem] md:h-[3rem] bg-white ml-2 align-middle"
            />
          )}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-outfit text-sm md:text-lg font-light text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href="#servicios" size="lg">
            {t("hero.ctaPrimary")}
          </Button>
          <Button href="#contacto" variant="glass" size="lg">
            {t("hero.ctaSecondary")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}