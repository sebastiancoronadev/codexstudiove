"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTranslation } from "@/lib/i18n/useTranslation";

interface BioPerson {
  name: string;
  location: string;
  image: string;
  key: "sebastian" | "liang" | "carlos";
}

const BIO_PEOPLE: BioPerson[] = [
  { name: "Sebastián Ernesto Corona Bencomo", location: "Carabobo, Venezuela", image: "/assets/images/bio/sebastian.png", key: "sebastian" },
  { name: "Liang Zhao", location: "Shenzhen, China", image: "/assets/images/bio/liang.png", key: "liang" },
  { name: "Carlos Gabriel Romero Marín", location: "Nueva Esparta, Venezuela", image: "/assets/images/bio/carlos.png", key: "carlos" },
];

export function Biography() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  if (!clientReady) {
    return (
      <section id="biografia" className="relative py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="h-20 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[20px] bg-white/[0.02] border border-white/[0.06] h-[400px] animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="biografia" className="relative py-16 md:py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionTitle title={t("sections.biography")} subtitle={t("sections.biographySub")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {BIO_PEOPLE.map((person, index) => {
            const role = t(`bio.${person.key}.role`) as string;
            const highlights = t(`bio.${person.key}.highlights`) as string[];

            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="group relative h-full rounded-[22px] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 hover:from-white/30 hover:via-white/10 hover:to-white/20 transition-all duration-500">
                  <div className="rounded-[21px] bg-[#0a0a0a] overflow-hidden h-full flex flex-col">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      className="relative w-full aspect-[4/5] overflow-hidden bg-[#050505] cursor-pointer"
                      aria-label={`${t("biography.readBio")} - ${person.name}`}
                    >
                      <Image
                        src={person.image}
                        alt={`${person.name} - ${role} en Codex Studio VE`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={95}
                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </button>

                    <div className="p-4 md:p-5 flex flex-col flex-grow">
                      <h3 className="font-outfit text-[14px] md:text-[15px] font-bold text-white mb-1 leading-tight">
                        {person.name}
                      </h3>
                      <p className="font-outfit text-[11px] md:text-[12px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-1.5 tracking-wide">
                        {role}
                      </p>
                      <p className="font-outfit text-[10px] md:text-[11px] font-light text-white/40 mb-3 flex items-center gap-1.5">
                        <i className="bi bi-geo-alt" aria-hidden="true" />
                        {person.location}
                      </p>

                      <div className="space-y-1.5 mb-4 flex-grow">
                        {Array.isArray(highlights) &&
                          highlights.slice(0, 3).map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <i
                                className="bi bi-check-circle-fill text-pink-400 text-[10px] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span className="font-outfit text-[10px] md:text-[11px] font-light text-white/60 leading-snug">
                                {h}
                              </span>
                            </div>
                          ))}
                      </div>

                      <button
                        onClick={() => setOpenIndex(index)}
                        className="group/btn w-full mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between"
                        aria-label={`${t("biography.readBio")} - ${person.name}`}
                      >
                        <span className="font-outfit text-[11px] md:text-[12px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                          {t("biography.readBio")}
                        </span>
                        <i className="bi bi-arrow-right text-pink-400 text-sm group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-[100] bg-[#050505]/90 backdrop-blur-2xl flex items-center justify-center p-3 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-[24px] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10"
            >
              <div className="rounded-[23px] bg-[#0a0a0a]/98 backdrop-blur-2xl p-5 md:p-10 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-3 right-3 md:top-5 md:right-5 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-600 to-orange-500 border border-white/30 flex items-center justify-center text-white shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.9)] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label={t("biography.close")}
                >
                  <i className="bi bi-x-lg text-lg md:text-xl font-bold" aria-hidden="true" />
                </button>

                <div className="flex flex-col md:flex-row gap-5 mb-6 pt-8 md:pt-0">
                  <div className="relative w-full md:w-48 aspect-[4/5] rounded-2xl overflow-hidden bg-[#050505] shrink-0">
                    <Image
                      src={BIO_PEOPLE[openIndex].image}
                      alt={`${BIO_PEOPLE[openIndex].name} - Biografía completa`}
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      quality={100}
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-outfit text-xl md:text-3xl font-bold text-white mb-2 tracking-tight break-words">
                      {BIO_PEOPLE[openIndex].name}
                    </h2>
                    <p className="font-outfit text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-3">
                      {t(`bio.${BIO_PEOPLE[openIndex].key}.role`)}
                    </p>
                    <p className="font-outfit text-[12px] font-light text-white/40 flex items-center gap-1.5 mb-5">
                      <i className="bi bi-geo-alt" aria-hidden="true" />
                      {BIO_PEOPLE[openIndex].location}
                    </p>
                    <h4 className="font-outfit text-[11px] uppercase tracking-widest text-white/40 mb-3">
                      {t("biography.highlights")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(t(`bio.${BIO_PEOPLE[openIndex].key}.highlights`) as string[]).map((h, i) => (
                        <span key={i} className="px-3 py-1 text-[11px] font-outfit text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="font-outfit text-[14px] md:text-[15px] font-light text-white/70 leading-[1.8] space-y-4">
                  {(t(`bio.${BIO_PEOPLE[openIndex].key}.biography`) as string)
                    .split("\n\n")
                    .map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}