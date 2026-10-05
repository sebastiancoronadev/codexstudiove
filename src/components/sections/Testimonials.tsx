"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("testimonials") as Array<{
    quote: string;
    author: string;
    company: string;
    location: string;
  }>;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const active = testimonials[current];

  return (
    <section id="testimonios" className="relative py-20 md:py-32 bg-[#050505]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionTitle title={t("sections.testimonials")} subtitle={t("sections.testimonialsSub")} />

        <div className="max-w-3xl mx-auto relative">
          <div className="relative rounded-[24px] md:rounded-[28px] p-[1px] bg-gradient-to-br from-pink-500/30 via-white/5 to-orange-500/30">
            <div className="rounded-[23px] md:rounded-[27px] bg-[#0a0a0a]/70 backdrop-blur-2xl backdrop-saturate-150 p-8 md:p-16 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center min-h-[220px]"
                >
                  <i className="bi bi-quote text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-6 leading-none" />

                  <p className="font-outfit text-base md:text-xl font-light text-white/80 italic leading-[1.6] mb-8">
                    {active.quote}
                  </p>

                  <div className="pt-6 border-t border-white/[0.08] w-full max-w-sm">
                    <p className="font-outfit font-bold text-white text-[14px] md:text-[15px] mb-1">
                      {active.author}
                    </p>
                    <p className="font-outfit text-[12px] font-light text-white/40 tracking-wide">
                      {active.company} — {active.location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current
                        ? "bg-gradient-to-r from-pink-500 to-orange-400 w-8"
                        : "bg-white/15 w-1.5 hover:bg-white/30"
                    }`}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}