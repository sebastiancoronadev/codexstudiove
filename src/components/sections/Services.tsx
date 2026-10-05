"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowCard } from "@/components/ui/GlowCard";
import { useTranslation } from "@/lib/i18n/useTranslation";

const serviceMeta = [
  { icon: "bi-code-slash", tech: ["Next.js", "React", "TypeScript", "Node.js"], glow: "pink" as const },
  { icon: "bi-controller", tech: ["Java", "Spigot", "Paper", "MySQL"], glow: "orange" as const },
  { icon: "bi-discord", tech: ["Python", "Node.js", "Discord.js"], glow: "mixed" as const },
  { icon: "bi-camera-video", tech: ["Premiere Pro", "After Effects", "DaVinci"], glow: "pink" as const },
  { icon: "bi-gear-wide-connected", tech: ["Python", "Odoo", "PostgreSQL", "Pandas"], glow: "orange" as const },
  { icon: "bi-truck", tech: ["Supabase", "Stripe", "REST APIs"], glow: "mixed" as const },
];

export function Services() {
  const { t } = useTranslation();
  const services = t("services") as Array<{ title: string; description: string }>;

  return (
    <section id="servicios" className="relative py-20 md:py-32 bg-[#050505]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionTitle
          title={t("sections.services")}
          subtitle={t("sections.servicesSub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, index) => {
            const meta = serviceMeta[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <GlowCard glow={meta.glow}>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-7 backdrop-blur-xl">
                    <i className={`bi ${meta.icon} text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400`} />
                  </div>

                  <h3 className="font-outfit text-[20px] md:text-[22px] font-bold text-white mb-3 leading-[1.2] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="font-outfit text-[14px] font-light text-white/50 leading-[1.7] mb-7 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/[0.06]">
                    {meta.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[11px] font-outfit font-medium text-white/60 bg-white/[0.03] border border-white/[0.08] rounded-full tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
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