"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";
import { team } from "@/lib/data/team";
import { useTranslation } from "@/lib/i18n/useTranslation";

/**
 * CONTENEDOR DE IMAGEN DEL EQUIPO:
 * - aspect-[3/4]  → proporción 3 ancho x 4 alto
 * - object-contain object-bottom → mantiene la imagen sin recortar
 *
 * TAMAÑO RECOMENDADO DE IMÁGENES PNG: 900 x 1200 px (proporción 3:4)
 */
export function Team() {
  const { t } = useTranslation();
  const translatedMembers = t("team.members") as Array<{ role: string; description: string }>;

  return (
    <section id="equipo" className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionTitle title={t("sections.team")} subtitle={t("sections.teamSub")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {team.map((member, index) => {
            const tr = translatedMembers[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <GlowCard glow={member.accent}>
                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-[3/4] mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06]">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${tr?.role || member.role} en Codex Studio VE`}
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    </div>

                    <h3 className="font-outfit text-[18px] md:text-[19px] font-bold text-white mb-1.5 leading-tight tracking-tight">
                      {member.name}
                    </h3>

                    <p className="font-outfit text-[13px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-3 tracking-wide">
                      {tr?.role || member.role}
                    </p>

                    <p className="font-outfit text-[12px] font-light text-white/40 mb-4 flex items-center gap-1.5">
                      <i className="bi bi-geo-alt" />
                      {member.location}
                    </p>

                    <p className="font-outfit text-[14px] font-light text-white/55 leading-[1.7] mb-6 flex-grow">
                      {tr?.description || member.description}
                    </p>

                    <div className="flex justify-center gap-6 text-[11px] text-white/40 mb-6 w-full pt-5 border-t border-white/[0.06]">
                      <span className="flex flex-col items-center gap-0.5">
                        <strong className="text-white/90 font-outfit text-sm font-bold">
                          {member.experience}
                        </strong>
                        <span className="uppercase tracking-wider">
                          {t("team.experience")}
                        </span>
                      </span>
                      <span className="w-px bg-white/10" />
                      <span className="flex flex-col items-center gap-0.5">
                        <strong className="text-white/90 font-outfit text-sm font-bold">
                          {member.projects}
                        </strong>
                        <span className="uppercase tracking-wider">
                          {t("team.projects")}
                        </span>
                      </span>
                    </div>

                    <div className="flex justify-center gap-3">
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                          aria-label={`GitHub de ${member.name}`}
                        >
                          <i className="bi bi-github text-base" />
                        </a>
                      )}

                      {member.social.linkedin ? (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <i className="bi bi-linkedin text-base" />
                        </a>
                      ) : (
                        <span
                          className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white/15 cursor-not-allowed"
                          aria-label="LinkedIn no disponible"
                        >
                          <i className="bi bi-linkedin text-base" />
                        </span>
                      )}

                      {member.social.whatsapp && (
                        <a
                          href={member.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-300"
                          aria-label={`WhatsApp de ${member.name}`}
                        >
                          <i className="bi bi-whatsapp text-base" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}