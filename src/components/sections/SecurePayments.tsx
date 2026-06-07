import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../i18n/LanguageContext";

const cards = [
  { id: 6, name: "BNC", file: null, orientation: "vertical" },
  { id: 1, name: "Visa", file: null, orientation: "horizontal" },
  { id: 2, name: "Mastercard", file: null, orientation: "horizontal" },
  { id: 7, name: "Brubank", file: null, orientation: "vertical" },
  { id: 3, name: "Binance", file: null, orientation: "horizontal" },
  { id: 4, name: "Zinli", file: null, orientation: "vertical" },
  { id: 5, name: "Banesco", file: null, orientation: "horizontal" },
];

export default function SecurePayments() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const featureWords = [
    { text: t("secure.feature.1") || "compras seguras.", color: "#FF6B00" },
    { text: t("secure.feature.2") || "total garantía.", color: "#FF007F" },
    { text: t("secure.feature.3") || "privacidad protegida.", color: "#00F0FF" },
    { text: t("secure.feature.4") || "respaldo constante.", color: "#FFFFFF" },
    { text: t("secure.feature.5") || "procesos protegidos.", color: "#FF6B00" },
  ];
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % featureWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActive((prev) => (prev + newDirection + cards.length) % cards.length);
  };

  // Preload images to avoid flickering if possible
  useEffect(() => {
    cards.forEach((card) => {
      if (card.file) {
        const img = new Image();
        img.src = `/cards/${card.file}`;
      }
    });
  }, []);

  return (
    <section id="cards" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Dynamic Background to create contrast and depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#FF007F]/10 via-transparent to-[#00F0FF]/10 blur-[120px] rounded-full opacity-50"></div>
        {/* Floor grid / Depth lines */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/[0.03] to-transparent bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0aCBkPSJNMCAwdjQwTTAgMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] [perspective:1000px] [transform:rotateX(60deg)_scale(2)] opacity-30 transform-origin-bottom"></div>
        {/* Pedestal glow */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-12 bg-white/5 blur-xl rounded-[100%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            {t("secure.title")}
          </h2>

          <div className="text-lg md:text-xl text-gray-400 w-full flex flex-col md:flex-row items-center justify-center gap-x-2 gap-y-1 text-center">
            <span>{t("secure.subtitle")}</span>
            <div className="relative w-[210px] md:w-[260px] h-8 flex justify-center md:justify-start items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={featureIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 font-semibold whitespace-nowrap"
                  style={{ color: featureWords[featureIndex].color }}
                >
                  {featureWords[featureIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* 3D Carousel Stage */}
        <div className="relative h-[300px] sm:h-[380px] md:h-[450px] w-full max-w-5xl mx-auto flex items-center justify-center [perspective:1200px]">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-8 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF007F]/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <i className="fas fa-chevron-left text-lg md:text-xl"></i>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-8 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#FF007F]/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <i className="fas fa-chevron-right text-lg md:text-xl"></i>
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] scale-[0.6] sm:scale-75 md:scale-100 origin-center">
            {cards.map((card, idx) => {
              // Calculate relative offset for endless rotation feel
              let offset = idx - active;
              if (offset > cards.length / 2) offset -= cards.length;
              if (offset < -cards.length / 2) offset += cards.length;

              const isVertical = card.orientation === "vertical";
              const w = isVertical ? 220 : 360;
              const h = isVertical ? 360 : 220;
              const isActive = offset === 0;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute flex items-center justify-center rounded-2xl shadow-2xl pointer-events-auto cursor-[inherit] group`}
                  initial={false}
                  onClick={() => {
                    if (!isActive) paginate(offset);
                  }}
                  animate={{
                    x: offset * 220,
                    z: isActive ? 0 : -Math.abs(offset) * 150,
                    rotateY: offset * -25,
                    scale: isActive ? 1.05 : 1 - Math.abs(offset) * 0.15,
                    opacity:
                      Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  transition={{ duration: 1.0, type: "spring", bounce: 0.15 }}
                  style={{
                    width: w,
                    height: h,
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.05}
                    transitionSpeed={2500}
                    className="relative w-full h-full [transform-style:preserve-3d]"
                    tiltEnable={true}
                    glareEnable={true}
                    glareMaxOpacity={0.4}
                    glareColor="white"
                    glarePosition="all"
                    glareBorderRadius="16px"
                  >
                    {/* Thickness Layers (3D Extrusion) */}
                    <div className="absolute inset-0 w-full h-full rounded-2xl bg-white/10 border border-white/10 [transform:translateZ(-1px)] pointer-events-none"></div>
                    <div className="absolute inset-0 w-full h-full rounded-2xl bg-white/10 border border-white/10 [transform:translateZ(-2px)] pointer-events-none"></div>
                    <div className="absolute inset-0 w-full h-full rounded-2xl bg-white/10 border border-white/10 [transform:translateZ(-3px)] pointer-events-none"></div>
                    <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#090909] border border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.8)] [transform:translateZ(-4px)] pointer-events-none"></div>

                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#111] border border-gray-800 [transform:translateZ(0px)] group-hover:border-white/30 transition-colors">
                      {card.file ? (
                        <img
                          src={`/cards/${card.file}`}
                          alt={card.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback visually if image doesn't load
                            e.currentTarget.style.display = "none";
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-[#090909] text-gray-700 rounded-xl border border-gray-800"><span class="font-mono text-sm opacity-50 uppercase tracking-wider">${card.name}</span></div>`;
                            }
                          }}
                        />
                      ) : card.name === "Mastercard" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative shadow-inner"
                          style={{
                            backgroundImage:
                              "url('/cards/mastercard-tarjeta.png')",
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                          {/* Connection - arriba a la derecha con giro a la derecha de 90 grados */}
                          <div className="absolute top-6 right-6 z-10 w-11 h-11 rotate-90">
                            <img
                              src="/card-textures/conection-texture.png"
                              alt="Connection"
                              className="w-full h-full object-contain opacity-80"
                            />
                          </div>

                          {/* Chip - lado izquierdo y bien posicionado */}
                          <div className="absolute top-[calc(45%-50px)] left-8 z-10">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-12 h-9 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                              style={{
                                filter:
                                  "grayscale(100%) brightness(1.3) contrast(1.2)",
                              }}
                            />
                          </div>

                          {/* Mastercard Logo - abajo a la derecha y grandecito */}
                          <div className="absolute bottom-6 right-6 w-20 z-10">
                            <img
                              src="/card-textures/mastercard-texture.png"
                              alt="Mastercard"
                              className="w-full object-contain drop-shadow-md"
                            />
                          </div>
                        </div>
                      ) : card.name === "Visa" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative shadow-inner"
                          style={{
                            backgroundImage: "url('/cards/visa-tarjeta.png')",
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                          {/* Connection - izquierda del chip */}
                          <div className="absolute top-[calc(48%-35px)] left-4 z-10 w-11 h-11 -translate-y-1/2 rotate-90">
                            <img
                              src="/card-textures/conection-texture.png"
                              alt="Connection"
                              className="w-full h-full object-contain opacity-80"
                            />
                          </div>

                          {/* Chip - bien posicionado */}
                          <div className="absolute top-[calc(48%-35px)] left-[65px] z-10 -translate-y-1/2">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-12 h-9 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                              style={{
                                filter:
                                  "grayscale(100%) brightness(1.3) contrast(1.2)",
                              }}
                            />
                          </div>

                          {/* Visa Logo */}
                          <div className="absolute bottom-6 right-6 w-20 z-10">
                            <img
                              src="/card-textures/visa-texture.png"
                              alt="Visa"
                              className="w-full object-contain filter brightness-0 invert opacity-90"
                            />
                          </div>
                        </div>
                      ) : card.name === "Binance" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative shadow-inner"
                          style={{
                            backgroundImage:
                              "url('/cards/binance-tarjeta.png')",
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                          {/* Binance Logo (Silver Metallic) */}
                          <div
                            className="absolute top-[15px] left-[36px] w-36 h-10 z-10"
                            style={{
                              background:
                                "linear-gradient(135deg, #ffffff 0%, #a6acb0 40%, #686e73 50%, #ccd1d4 100%)",
                              WebkitMaskImage:
                                "url('/card-textures/binance-texture.png')",
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "left",
                              maskImage:
                                "url('/card-textures/binance-texture.png')",
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "left",
                              filter:
                                "drop-shadow(0px 1px 1px rgba(0,0,0,0.5))",
                            }}
                          ></div>

                          {/* Chip */}
                          <div className="absolute top-[65px] left-8 z-10">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-12 h-9 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                              style={{
                                filter:
                                  "grayscale(100%) brightness(1.3) contrast(1.2)",
                              }}
                            />
                          </div>

                          {/* Visa logo (Silver Metallic) */}
                          <div
                            className="absolute bottom-3 right-6 w-20 h-10 z-10"
                            style={{
                              background:
                                "linear-gradient(135deg, #ffffff 0%, #a6acb0 40%, #686e73 50%, #ccd1d4 100%)",
                              WebkitMaskImage:
                                "url('/card-textures/visa-texture.png')",
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "right",
                              maskImage:
                                "url('/card-textures/visa-texture.png')",
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "right",
                              filter:
                                "drop-shadow(0px 1px 1px rgba(0,0,0,0.5))",
                            }}
                          ></div>
                        </div>
                      ) : card.name === "Banesco" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative shadow-inner"
                          style={{
                            backgroundImage:
                              "url('/cards/banesco-vzla-debito.png')",
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                          {/* Banesco Logo */}
                          <div className="absolute top-[2.5px] left-[19px] w-40 z-10">
                            <img
                              src="/card-textures/banesco-texture.png"
                              alt="Banesco Logo"
                              className="w-full object-contain drop-shadow-md"
                            />
                          </div>

                          {/* Chip */}
                          <div className="absolute top-[calc(35%-20px)] left-8 z-10">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-12 h-9 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                            />
                          </div>

                          {/* Mastercard symbol */}
                          <div className="absolute bottom-6 right-6 z-10">
                            <img
                              src="/card-textures/mastercard-texture.png"
                              alt="Mastercard"
                              className="w-14 h-9 object-contain"
                            />
                          </div>
                        </div>
                      ) : card.name === "Brubank" ? (
                        <div
                          className="w-full h-full relative shadow-inner overflow-hidden flex items-center justify-center bg-black"
                        >
                          <img 
                            src="/cards/brubank-tarjeta.png" 
                            className="absolute object-cover rotate-90 scale-[1.1]" 
                            style={{ minWidth: '330px', minHeight: '330px', marginLeft: '-3px', marginTop: '3px' }}
                            alt="Brubank background"
                          />
                          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                          {/* Brubank Logo */}
                          <div className="absolute bottom-4 left-4 w-24 z-10">
                            <img
                              src="/card-textures/brubank-texture.png"
                              alt="Brubank Logo"
                              className="w-full object-contain filter brightness-0 invert drop-shadow-md"
                            />
                          </div>

                          {/* Chip */}
                          <div className="absolute bottom-[285px] right-[60px] z-10 rotate-90">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-10 h-8 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                              style={{
                                filter:
                                  "grayscale(100%) brightness(1.3) contrast(1.2)",
                              }}
                            />
                          </div>

                          {/* Connection texture */}
                          <div
                            className="absolute bottom-[285px] right-[30px] z-10 w-8 h-8 bg-white rotate-90"
                            style={{
                              WebkitMaskImage:
                                "url('/card-textures/conection-texture.png')",
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskImage:
                                "url('/card-textures/conection-texture.png')",
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",
                            }}
                          ></div>

                          {/* Visa logo */}
                          <div className="absolute bottom-4 right-4 w-16 z-10">
                            <img
                              src="/card-textures/visa-texture.png"
                              alt="Visa"
                              className="w-full object-contain filter brightness-0 invert opacity-90"
                            />
                          </div>
                        </div>
                      ) : card.name === "Zinli" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative shadow-inner"
                          style={{
                            backgroundImage: "url('/cards/zinli-tarjeta.png')",
                          }}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                          {/* Zinli Logo */}
                          <div className="absolute bottom-[205px] left-5 w-32 z-10">
                            <img
                              src="/card-textures/zinli-texture.png"
                              alt="Zinli Logo"
                              className="w-full object-contain drop-shadow-md"
                            />
                          </div>

                          {/* Chip */}
                          <div className="absolute bottom-[285px] right-[60px] z-10 rotate-90">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-10 h-8 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                              style={{
                                filter:
                                  "grayscale(100%) brightness(1.3) contrast(1.2)",
                              }}
                            />
                          </div>

                          {/* Connection texture (colored #32cd96 with CSS mask) */}
                          <div
                            className="absolute bottom-[285px] right-[30px] z-10 w-8 h-8 bg-[#32cd96] rotate-90"
                            style={{
                              WebkitMaskImage:
                                "url('/card-textures/conection-texture.png')",
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskImage:
                                "url('/card-textures/conection-texture.png')",
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",
                            }}
                          ></div>

                          {/* Visa logo */}
                          <div className="absolute bottom-4 right-4 w-20 z-10">
                            <img
                              src="/card-textures/visa-texture.png"
                              alt="Visa"
                              className="w-full object-contain filter brightness-0 invert opacity-90"
                            />
                          </div>
                        </div>
                      ) : card.name === "BNC" ? (
                        <div
                          className="w-full h-full bg-cover bg-center relative p-5 flex flex-col shadow-inner"
                          style={{
                            backgroundImage: "url('/cards/bnc-tarjeta.png')",
                          }}
                        >
                          {/* Filter/Overlay to blend the background smoothly */}
                          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                          {/* Chip */}
                          <div className="absolute top-10 right-[30px] rotate-90 z-10">
                            <img
                              src="/card-textures/chip-texture.png"
                              alt="Chip"
                              className="w-10 h-8 flex-shrink-0 object-cover rounded-[5px] opacity-90 drop-shadow-sm"
                            />
                          </div>

                          {/* BNC Logo */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 z-10">
                            <img
                              src="/card-textures/bnc-texture.png"
                              alt="BNC Logo"
                              className="w-full object-contain filter brightness-0 invert"
                            />
                          </div>

                          {/* Contactless symbol - rotated 90 deg right */}
                          <div className="absolute bottom-6 left-6 z-10">
                            <img
                              src="/card-textures/conection-texture.png"
                              alt="Contactless"
                              className="w-8 h-8 object-contain rotate-90 opacity-80"
                            />
                          </div>

                          {/* Mastercard symbol */}
                          <div className="absolute bottom-6 right-6 z-10">
                            <img
                              src="/card-textures/mastercard-texture.png"
                              alt="Mastercard"
                              className="w-12 h-8 object-contain"
                            />
                          </div>
                        </div>
                      ) : null}

                      {/* Subtle persistent shine for depth */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                      )}
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const offset = idx - active;
                paginate(offset);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === idx ? "bg-[#FF007F] w-8" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
