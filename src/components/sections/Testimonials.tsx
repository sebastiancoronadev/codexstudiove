import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";

const getTestimonials = (t: (key: string) => string) => [
  {
    client: "Veraux Ropa",
    logo: "/images/clients/veraux-ropa.png",
    text: t('testimonials.1.text') || "Codex Studio revolucionó nuestra tienda en línea. Su atención al detalle y el diseño moderno incrementaron nuestras ventas de manera increíble.",
    bg: "from-[#FF007F]/20 to-[#0A0A0A]",
  },
  {
    client: "Altivan Inmobiliaria",
    logo: "/images/clients/altivan-inmmobiliaria.png",
    text: t('testimonials.2.text') || "El equipo entendió perfectamente nuestra visión corporativa. La plataforma es rápida, segura y transmite la confianza que buscábamos.",
    bg: "from-[#00F0FF]/20 to-[#0A0A0A]",
  },
  {
    client: "Concretera Solidexa",
    logo: "/images/clients/concretera.png",
    text: t('testimonials.3.text') || "Nuestro portal empresarial ha dado un salto generacional. Operaciones más rápidas y una interfaz sumamente intuitiva. Totalmente recomendados.",
    bg: "from-[#FFBD2E]/20 to-[#0A0A0A]",
  },
  {
    client: "Concesionario La Fé",
    logo: "/images/clients/concesionario.png",
    text: t('testimonials.4.text') || "La calidad visual que entregaron superó todas las expectativas. Nuestros clientes disfrutan un catálogo moderno, responsivo y dinámico.",
    bg: "from-[#32cd96]/20 to-[#0A0A0A]",
  },
  {
    client: "Velmor Arquitecto",
    logo: "/images/clients/velmor-arquitecto.png",
    text: t('testimonials.5.text') || "Transformaron mi portafolio arquitectónico en una obra de arte digital. Un equipo comprometido, profesional y con ideas innovadoras.",
    bg: "from-[#FF6B00]/20 to-[#0A0A0A]",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);

  return (
    <section id="testimonials" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-white">
            {t("testimonials.title") || "Testimonios"}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            {t("testimonials.subtitle") || "Lo que dicen de nuestro trabajo"}
          </p>
        </motion.div>
      </div>

      <div
        className="relative w-full overflow-hidden flex flex-col gap-6 py-6"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Marquee Row */}
        <div className="flex w-max animate-marquee-slow space-x-4 md:space-x-6 hover:[animation-play-state:paused] py-4">
          {[
            ...testimonials,
            ...testimonials,
            ...testimonials,
            ...testimonials,
          ].map((testimonial, i) => (
            <div
              key={`testimonial-${i}`}
              className={`w-[200px] md:w-[380px] p-4 md:p-8 flex flex-col justify-between rounded-2xl border border-gray-800 bg-gradient-to-b ${testimonial.bg} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
            >
              <div className="mb-4 md:mb-6">
                <i className="fas fa-quote-left text-xl md:text-3xl text-gray-700/50 mb-2 md:mb-4 block"></i>
                <p className="text-gray-300 text-xs md:text-base leading-relaxed font-sans">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-4 mt-auto">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-2 md:p-3 border border-gray-800 shadow-xl shrink-0">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.client}
                    className="max-w-full max-h-full object-contain drop-shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sans text-[10px] md:text-sm">
                    {testimonial.client}
                  </h4>
                  <div className="flex text-[#FFBD2E] text-[8px] md:text-xs gap-1 mt-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
