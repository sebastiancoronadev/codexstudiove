"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { trustLogos } from "@/lib/data/trust";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function Trust() {
  const { t } = useTranslation();

  return (
    <section id="confianza" className="relative py-16 md:py-20 bg-[#0a0a0a]" aria-label="Clientes que confían en Codex Studio VE">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl">
        <SectionTitle title={t("sections.trust")} subtitle={t("sections.trustSub")} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-[20px] bg-white/[0.94] backdrop-blur-xl border border-white/40 hover:border-white/80 transition-all duration-500 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-white/80" />

              <div className="relative p-4 md:p-6 flex flex-col h-full">
                <div className="relative w-full aspect-[2/1] mb-3 flex items-center justify-center z-10">
                  <Image
                    src={logo.image}
                    alt={`${logo.name} - Cliente de Codex Studio VE`}
                    fill
                    sizes="(max-width: 768px) 45vw, 22vw"
                    className="object-contain p-1"
                  />
                </div>

                <div className="text-center relative z-10 mt-auto">
                  <p className="font-outfit text-[11px] md:text-[13px] font-bold text-neutral-900 leading-tight">
                    {logo.name}
                  </p>
                  <p className="font-outfit text-[9px] md:text-[10px] font-light text-neutral-500 mt-0.5 uppercase tracking-wider">
                    {t(`sectors.${logo.sectorKey}`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}