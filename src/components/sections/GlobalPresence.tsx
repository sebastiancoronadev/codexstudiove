import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";
import Globe from "react-globe.gl";

const countries = [
  { id: "ve", name: "Venezuela", color: "#FF007F", lat: 8.0, lng: -66.0 },
  { id: "at", name: "Austria", color: "#00F0FF", lat: 47.5, lng: 14.5 },
  { id: "ar", name: "Argentina", color: "#FF6B00", lat: -38.4, lng: -63.6 },
  { id: "co", name: "Colombia", color: "#FFD700", lat: 4.6, lng: -74.0 },
  { id: "ec", name: "Ecuador", color: "#FF0000", lat: -1.8, lng: -78.1 },
  { id: "cl", name: "Chile", color: "#FFFFFF", lat: -35.6, lng: -71.5 },
  { id: "mx", name: "México", color: "#4CAF50", lat: 23.6, lng: -102.5 },
  { id: "ca", name: "Canadá", color: "#FF0000", lat: 56.1, lng: -106.3 },
  { id: "us", name: "Estados Unidos", color: "#3B82F6", lat: 37.0, lng: -95.7 },
  { id: "es", name: "España", color: "#FFD700", lat: 40.4, lng: -3.7 },
  { id: "cn", name: "China", color: "#FF0000", lat: 35.8, lng: 104.1 },
];

const countryTranslations: Record<string, Record<string, string>> = {
  "ve": { es: "Venezuela", en: "Venezuela", zh: "委内瑞拉" },
  "at": { es: "Austria", en: "Austria", zh: "奥地利" },
  "ar": { es: "Argentina", en: "Argentina", zh: "阿根廷" },
  "co": { es: "Colombia", en: "Colombia", zh: "哥伦比亚" },
  "ec": { es: "Ecuador", en: "Ecuador", zh: "厄瓜多尔" },
  "cl": { es: "Chile", en: "Chile", zh: "智利" },
  "mx": { es: "México", en: "Mexico", zh: "墨西哥" },
  "ca": { es: "Canadá", en: "Canada", zh: "加拿大" },
  "us": { es: "Estados Unidos", en: "United States", zh: "美国" },
  "es": { es: "España", en: "Spain", zh: "西班牙" },
  "cn": { es: "China", en: "China", zh: "中国" },
};

const pointsData = countries.map(c => ({
  lat: c.lat,
  lng: c.lng,
  size: c.id === 've' ? 1.5 : 1,
  color: c.color,
  label: c.name,
  id: c.id
}));

export default function GlobalPresence() {
  const { t, language } = useLanguage();
  const [countryIndex, setCountryIndex] = useState(0);
  const globeRef = useRef<any>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountryIndex((prev) => (prev + 1) % countries.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
      const targetCountry = countries[countryIndex];
      globeRef.current.pointOfView({ 
        lat: targetCountry.lat, 
        lng: targetCountry.lng, 
        altitude: 2 
      }, 1000);
    }
  }, [countryIndex]);

  const currentCountry = countries[countryIndex];
  const activeArcsData = currentCountry.id !== 've' ? [{
    startLat: 8.0,
    startLng: -66.0,
    endLat: currentCountry.lat,
    endLng: currentCountry.lng,
    color: '#FF007F' // Single color for all arcs
  }] : [];

  const htmlElementsData = [{
    lat: currentCountry.lat,
    lng: currentCountry.lng,
    text: countryTranslations[currentCountry.id]?.[language] || currentCountry.name,
    color: currentCountry.color
  }];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,127,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-0 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            {t("global.title") || "Tenemos presencia en distintos países"}
          </h2>

          <div className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto flex flex-col items-center justify-center gap-y-1 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 w-full">
              <span>{t("global.subtitle") || "Conectando al mundo, impulsando el futuro en "}</span>
              <div className="relative w-[180px] h-8 flex justify-center md:justify-start items-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={countryIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 font-semibold whitespace-nowrap"
                    style={{ color: countries[countryIndex].color }}
                  >
                    {countryTranslations[countries[countryIndex].id]?.[language] || countries[countryIndex].name}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Earth visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto flex justify-center mt-4 md:mt-0"
        >
          <div className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] cursor-grab active:cursor-grabbing flex justify-center items-center">
            <Globe
              ref={globeRef}
              globeImageUrl="/images/earth.jpg"
              backgroundColor="rgba(0,0,0,0)"
              width={window.innerWidth < 768 ? 320 : (window.innerWidth < 1024 ? 600 : 700)}
              height={window.innerWidth < 768 ? 320 : (window.innerWidth < 1024 ? 600 : 700)}
              arcsData={activeArcsData}
              arcColor={(d: any) => [d.color, d.color]}
              arcDashLength={0.1}
              arcDashGap={0.05}
              arcDashAnimateTime={3000}
              arcStroke={1}
              pointsData={pointsData}
              pointColor={(d: any) => d.color}
              pointAltitude={(d: any) => d.size * 0.05}
              pointRadius={(d: any) => d.size * 0.5}
              pointsMerge={false}
              htmlElementsData={htmlElementsData}
              htmlElement={(d: any) => {
                const isMobile = window.innerWidth < 768;
                const el = document.createElement('div');
                el.innerHTML = `
                  <div style="background: rgba(10, 10, 10, 0.85); border: 1px solid ${d.color}; padding: ${isMobile ? '4px 8px' : '8px 12px'}; border-radius: 8px; color: white; font-family: sans-serif; font-size: 14px; white-space: nowrap; pointer-events: none; backdrop-filter: blur(4px); box-shadow: 0 4px 15px rgba(0,0,0,0.5); transform: translate(-50%, ${isMobile ? '30px' : '-50%'}); text-align: center;">
                    <span style="color: #9CA3AF; font-size: ${isMobile ? '10px' : '12px'}; line-height: 1.2; display: block; margin-bottom: 2px;">Conectando al mundo,<br/>impulsando el futuro en</span>
                    <strong style="color: ${d.color}; font-size: ${isMobile ? '14px' : '16px'};">${d.text}</strong>
                  </div>
                `;
                return el;
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
