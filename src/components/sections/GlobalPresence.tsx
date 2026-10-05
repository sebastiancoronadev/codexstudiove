"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { countries } from "@/lib/data/countries";
import { useTranslation } from "@/lib/i18n/useTranslation";

const VIDEO_SOURCES = [
  { webm: "/assets/videos/earth/earth-1.webm" },
  { webm: "/assets/videos/earth/earth-2.webm" },
  { webm: "/assets/videos/earth/earth-3.webm" },
];

function useTypewriterCycle(
  text: string,
  typeSpeed: number = 110,
  holdTime: number = 4500,
  eraseSpeed: number = 55
) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    setDisplay("");
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let phase: "typing" | "holding" | "erasing" = "typing";

    const step = () => {
      if (phase === "typing") {
        if (i < text.length) {
          i++;
          setDisplay(text.slice(0, i));
          timeoutId = setTimeout(step, typeSpeed);
        } else {
          phase = "holding";
          timeoutId = setTimeout(step, holdTime);
        }
      } else if (phase === "holding") {
        phase = "erasing";
        timeoutId = setTimeout(step, 200);
      } else {
        if (i > 0) {
          i--;
          setDisplay(text.slice(0, i));
          timeoutId = setTimeout(step, eraseSpeed);
        }
      }
    };

    timeoutId = setTimeout(step, 300);
    return () => clearTimeout(timeoutId);
  }, [text, typeSpeed, holdTime, eraseSpeed]);
  return display;
}

export function GlobalPresence() {
  const { t } = useTranslation();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [countryIndex, setCountryIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEO_SOURCES.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountryIndex((prev) => (prev + 1) % countries.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  const currentCountry = countries[countryIndex];
  const countryName = t(`countries.${currentCountry.nameKey}`) as string;
  const video = VIDEO_SOURCES[currentVideo];
  const typedCountry = useTypewriterCycle(countryName, 110, 4500, 55);

  return (
    <section id="presencia" className="relative py-20 md:py-32 bg-[#050505] max-w-full" aria-label="Presencia global de Codex Studio VE">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative w-full h-[55vh] md:h-[85vh] mb-16 md:mb-24 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            ref={videoRef}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={video.webm} type="video/webm" />
            
          </motion.video>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-[#050505]/30 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 md:px-6 text-center pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-outfit text-[10px] md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] text-white/70 mb-4 md:mb-6 max-w-full"
          >
            {t("presence.title")}
          </motion.p>

          <h3 className="font-outfit text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-orange-400 tracking-tight min-h-[1.2em] max-w-full">
            {typedCountry}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] md:w-[5px] h-[0.85em] bg-gradient-to-b from-pink-500 to-orange-400 ml-2 align-middle"
            />
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-outfit text-[11px] md:text-sm text-white/55 mt-6 md:mt-8 max-w-2xl"
          >
            {t("presence.description")}
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-full">
        <div className="text-center mb-8">
          <h4 className="font-outfit text-base md:text-2xl font-bold text-white mb-2">
            {t("presence.countries")}
          </h4>
          <p className="font-outfit text-xs md:text-sm text-white/40">
            {countries.length} {t("presence.active")}
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2 md:gap-4 max-w-6xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.08 }}
              className={`group relative flex flex-col items-center justify-center p-2.5 md:p-3 rounded-2xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-300 cursor-default ${
                countryIndex === index
                  ? "border-pink-500/60 bg-gradient-to-br from-pink-500/15 to-orange-500/10 shadow-[0_0_25px_rgba(236,72,153,0.3)]"
                  : "border-white/[0.08] hover:border-pink-500/30"
              }`}
              title={`${t(`countries.${country.nameKey}`)} - Presencia activa de Codex Studio VE`}
            >
              <img
                src={country.flag}
                alt={`Bandera de ${t(`countries.${country.nameKey}`)}`}
                width={28}
                height={20}
                loading="lazy"
                className="rounded-sm object-cover mb-1.5 md:mb-2"
              />
              <span className="font-outfit text-[8px] md:text-[10px] font-light text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">
                {t(`countries.${country.nameKey}`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}