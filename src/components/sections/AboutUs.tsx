import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-black border-t border-gray-900 border-b"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FF007F]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-white leading-tight">
            {t("about.title") || "¿Quiénes Somos?"}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            {t("about.description1")}
          </p>

          <div className="pt-8 flex flex-row gap-12">
            <div>
              <span className="block text-4xl font-sans text-white font-bold mb-2">+5</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-sans">
                {t("about.stats.years")}
              </span>
            </div>
            <div className="w-px h-12 bg-gray-800 hidden md:block"></div>
            <div>
              <span className="block text-4xl font-sans text-white font-bold mb-2">+100</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-sans">
                {t("about.stats.projects")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Image / Out of bounds effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 relative w-full md:w-auto flex justify-center mt-6 md:mt-0"
        >
          {/* Contenedor principal relativo */}
          <div className="relative w-[300px] md:w-[320px] aspect-[3/4] group about-visual mx-auto text-center flex flex-col items-center justify-end">
            {/* El "cuadro" de fondo */}
            <div className="absolute inset-x-0 bottom-0 top-16 md:top-24 rounded-2xl bg-[#0F0F0F] border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden">
               {/* Decoración interior */}
               <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black to-transparent rounded-b-2xl pointer-events-none z-[5]"></div>
            </div>
            
            {/* La foto de Sebastián Corona */}
            <img
              src="/images/sebastian-corona.png"
              alt="Founder"
              className="absolute bottom-0 md:-bottom-0 left-1/2 -translate-x-1/2 w-auto h-[110%] md:h-[115%] max-w-none z-10 origin-bottom shadow-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.05] object-contain"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
