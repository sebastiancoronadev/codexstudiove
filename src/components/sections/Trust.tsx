ï»¿import React from "react";
import React from "react";
import { motion, useAnimationControls } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Trust() {
  const { t } = useLanguage();

  // Placerholders for you to replace with real info
  // You can set src to e.g. "/images/clients/client1.png"
  const clients = [
    { id: 1, name: "Veraux Ropa", src: "/images/clients/veraux-ropa.png" },
    {
      id: 2,
      name: "Altivan Inmobiliaria",
      src: "/images/clients/altivan-inmmobiliaria.png",
    },
    { id: 3, name: "Concretera", src: "/images/clients/concretera.png" },
    { id: 4, name: "Concesionario", src: "/images/clients/concesionario.png" },
    {
      id: 5,
      name: "Velmor Arquitecto",
      src: "/images/clients/velmor-arquitecto.png",
    },
  ];

  // Carousel items duplicated for seamless infinite scrolling
  const carouselItems = [
    ...clients,
    ...clients,
    ...clients,
    ...clients,
    ...clients,
    ...clients,
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A] border-b border-gray-900">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF007F]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6">
            {t('trust.title') || 'Por quÃ© ellos confÃ­an en nosotros'}
          </h2>
          <p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
            {t('trust.desc') || 'Hemos colaborado con grandes marcas y proyectos para llevar sus ideas al siguiente nivel.'}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full flex overflow-hidden mask-image-fade">
          {/* Animated Track */}
          <div className="flex w-max animate-marquee-slow items-center py-4 space-x-4 md:space-x-8 hover:[animation-play-state:paused]">
            {carouselItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-24 h-16 sm:w-32 sm:h-20 md:w-56 md:h-32 bg-white rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 p-3 md:p-4"
              >
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                ) : (
                  <span className="text-gray-300 font-mono text-sm">
                    Logo {client.id}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
