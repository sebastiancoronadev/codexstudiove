import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-[#FF007F]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-white drop-shadow-[0_0_10px_rgba(255,107,0,0.2)]">
            {t('sponsors.title')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">{t('sponsors.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-gray-800 hover:border-[#FF6B00] transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-[rgba(255,107,0,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <i className="fas fa-flag-checkered text-3xl text-[#FF6B00]"></i>
                <h3 className="text-2xl font-bold text-white">SimRacing Sponsor</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
                Codex Studio es un orgulloso patrocinador activo dentro de la comunidad de SimRacing. Mis diseños y marca tienen presencia en vallas publicitarias dentro de los circuitos virtuales de competición más importantes, apoyando a pilotos y eventos de alto nivel a nivel global.
              </p>
              <div className="flex gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-white/50 group-hover:text-white transition-colors border border-gray-800">
                  <i className="fas fa-car"></i>
                </div>
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-white/50 group-hover:text-[#FF007F] transition-colors border border-gray-800">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-white/50 group-hover:text-[#FF6B00] transition-colors border border-gray-800">
                  <i className="fas fa-trophy"></i>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-800 group"
          >
            {/* Banner placeholder for SimRacing billboard image */}
            <div className="absolute inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center text-gray-500">
               <i className="fas fa-image text-4xl mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500"></i>
               <p className="text-sm font-mono tracking-widest text-center px-4">IMG DE VALLA PUBLICITARIA</p>
               <span className="text-xs mt-2 opacity-50">/public/payments/billboard.png</span>
               <img src="/payments/billboard.png" alt="SimRacing Billboard" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
