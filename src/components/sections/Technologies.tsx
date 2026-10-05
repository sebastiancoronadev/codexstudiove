"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { technologies, techCategories } from "@/lib/data/technologies";
import { useTranslation } from "@/lib/i18n/useTranslation";

const colorMap: Record<
  string,
  {
    border: string;
    glow: string;
    text: string;
    iconBg: string;
    accentLine: string;
    cardBorder: string;
  }
> = {
  pink: { border: "hover:border-pink-500/40", glow: "bg-pink-600/15", text: "text-pink-400", iconBg: "bg-pink-500/15 border-pink-500/25", accentLine: "via-pink-500/40", cardBorder: "from-pink-500/20 via-white/[0.02] to-transparent" },
  orange: { border: "hover:border-orange-500/40", glow: "bg-orange-600/15", text: "text-orange-400", iconBg: "bg-orange-500/15 border-orange-500/25", accentLine: "via-orange-500/40", cardBorder: "from-orange-500/20 via-white/[0.02] to-transparent" },
  rose: { border: "hover:border-rose-500/40", glow: "bg-rose-600/15", text: "text-rose-400", iconBg: "bg-rose-500/15 border-rose-500/25", accentLine: "via-rose-500/40", cardBorder: "from-rose-500/20 via-white/[0.02] to-transparent" },
  purple: { border: "hover:border-purple-500/40", glow: "bg-purple-600/15", text: "text-purple-400", iconBg: "bg-purple-500/15 border-purple-500/25", accentLine: "via-purple-500/40", cardBorder: "from-purple-500/20 via-white/[0.02] to-transparent" },
  amber: { border: "hover:border-amber-500/40", glow: "bg-amber-600/15", text: "text-amber-400", iconBg: "bg-amber-500/15 border-amber-500/25", accentLine: "via-amber-500/40", cardBorder: "from-amber-500/20 via-white/[0.02] to-transparent" },
};

export function Technologies() {
  const { t } = useTranslation();
  const categories = Object.keys(techCategories) as Array<keyof typeof techCategories>;

  return (
    <section id="tecnologias" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <SectionTitle title={t("sections.technologies")} subtitle={t("sections.technologiesSub")} />

        <div className="space-y-6 md:space-y-10">
          {categories.map((catKey, catIndex) => {
            const cat = techCategories[catKey];
            const colors = colorMap[cat.color];
            const items = technologies.filter((tech) => tech.category === catKey);
            const catLabel = t(`techCategories.${catKey}`) as string;

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`relative rounded-[24px] md:rounded-[28px] p-[1px] bg-gradient-to-br ${colors.cardBorder}`}
              >
                <div className="rounded-[23px] md:rounded-[27px] bg-[#0a0a0a]/60 backdrop-blur-2xl backdrop-saturate-150 p-5 md:p-8 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${colors.accentLine} to-transparent`} />

                  <div className="flex items-center gap-3 mb-5 md:mb-6 pb-4 md:pb-5 border-b border-white/[0.06]">
                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} border flex items-center justify-center`}>
                      <i className={`bi ${cat.icon} text-lg ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-white text-sm md:text-base tracking-tight">{catLabel}</h3>
                      <p className="font-outfit text-[11px] font-light text-white/35">{items.length} tech</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2 md:gap-3">
                    {items.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className={`group relative flex flex-col items-center justify-center p-2.5 md:p-3 rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] ${colors.border} transition-all duration-300 overflow-hidden cursor-default`}
                        title={`${tech.name} - Tecnología dominada por Codex Studio VE`}
                      >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow} pointer-events-none`} />

                        <i
                          className={`${tech.icon} text-2xl md:text-3xl mb-1.5 relative z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                          aria-label={`${tech.name} logo`}
                          style={tech.customColor ? { color: tech.customColor } : undefined}
                        />

                        <span className="font-outfit text-[9px] md:text-[10px] font-light text-white/40 group-hover:text-white/80 transition-colors text-center tracking-wide relative z-10 leading-tight">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}