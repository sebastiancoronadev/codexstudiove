"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";
import { projects } from "@/lib/data/projects";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function Portfolio() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="portafolio" className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionTitle title={t("sections.portfolio")} subtitle={t("sections.portfolioSub")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <GlowCard glow={project.glow}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center backdrop-blur-xl overflow-hidden relative">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          alt={`${project.title} - Proyecto de Codex Studio VE`}
                          fill
                          sizes="64px"
                          className="object-contain p-2"
                        />
                      ) : (
                        <i className={`bi ${project.icon} text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400`} aria-hidden="true" />
                      )}
                    </div>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                        aria-label={`Ver ${project.title}`}
                      >
                        <i className="bi bi-arrow-up-right text-base" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <p className="font-outfit text-[20px] md:text-[22px] font-bold text-white mb-3 leading-tight tracking-tight">
                    {project.title}
                  </p>

                  <p className="font-outfit text-[14px] font-light text-white/50 leading-[1.7] mb-6 flex-grow">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-[11px] font-outfit font-medium text-white/60 bg-white/[0.03] border border-white/[0.08] rounded-full tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenIndex(index)}
                    className="mt-auto pt-5 border-t border-white/[0.06] flex items-center justify-between w-full group/btn"
                  >
                    <span className="font-outfit text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                      {t("projectModal.readMore")}
                    </span>
                    <i className="bi bi-arrow-right text-pink-400 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-[100] bg-[#050505]/85 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[28px] p-[1px] bg-gradient-to-br from-pink-500/40 via-white/10 to-orange-500/40"
            >
              <div className="rounded-[27px] bg-[#0a0a0a]/95 backdrop-blur-2xl p-6 md:p-10 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-gradient-to-br from-pink-600 to-orange-500 border border-white/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label={t("projectModal.close")}
                >
                  <i className="bi bi-x-lg text-lg font-bold" aria-hidden="true" />
                </button>

                <div className="mb-6 pt-8 md:pt-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center overflow-hidden relative mb-5">
                    {projects[openIndex].logo ? (
                      <Image
                        src={projects[openIndex].logo!}
                        alt={`${projects[openIndex].title} - Logo del proyecto`}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <i className={`bi ${projects[openIndex].icon} text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400`} aria-hidden="true" />
                    )}
                  </div>

                  <p className="font-outfit text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    {projects[openIndex].title}
                  </p>

                  <p className="font-outfit text-sm font-light text-white/50">
                    {t(projects[openIndex].descriptionKey)}
                  </p>
                </div>

                <div className="font-outfit text-[15px] font-light text-white/70 leading-[1.8] mb-8 space-y-4">
                  {(t(projects[openIndex].longDescriptionKey) as string).split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="font-outfit text-xs uppercase tracking-widest text-white/40 mb-3">
                    {t("projectModal.tech")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[openIndex].tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-[12px] font-outfit font-medium text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-full tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {projects[openIndex].url !== "#" && (
                  <a
                    href={projects[openIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-outfit font-bold hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-300"
                  >
                    <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                    {t("projectModal.visit")}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}