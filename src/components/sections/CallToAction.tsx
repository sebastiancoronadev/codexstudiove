import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function CallToAction() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToDiscord = () => {
    document.getElementById('discord')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToMinecraft = () => {
    document.getElementById('minecraft')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="py-24 bg-[#000000] text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-r from-[#FF007F] via-[#5865F2] to-[#4CAF50] opacity-5 blur-[120px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-1000"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 font-sans bg-gradient-to-r from-[#FF007F] via-[#FF6B00] to-[#FF0000] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">
          {t('cta.title') || 'Haz una web conmigo'}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-12 drop-shadow-md font-sans">
          {t('cta.desc') || 'Transforma tu idea en una realidad digital. Aportando una sólida experiencia, garantizo soluciones web profesionales, optimizadas y de alto rendimiento que impulsarán tu negocio.'}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToContact} 
            className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#FF007F] to-[#FF0000] text-white rounded-lg font-bold text-lg hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 border border-transparent"
          >
            {t('cta.btn.web') || 'Haz una web conmigo'}
          </button>
          <button 
            onClick={scrollToVideo} 
            className="cursor-pointer px-6 py-4 bg-[#111111] text-white rounded-lg font-semibold border border-gray-700 hover:border-[#FF007F] hover:text-[#FF007F] hover:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            {t('cta.btn.video') || 'Edita videos conmigo'}
          </button>
          <button 
            onClick={scrollToDiscord} 
            className="cursor-pointer px-6 py-4 bg-[#111111] text-white rounded-lg font-semibold border border-gray-700 hover:border-[#5865F2] hover:text-[#5865F2] hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            {t('cta.btn.discord') || 'Crea tu Discord'}
          </button>
          <button 
            onClick={scrollToMinecraft} 
            className="cursor-pointer px-6 py-4 bg-[#111111] text-white rounded-lg font-semibold border border-gray-700 hover:border-[#4CAF50] hover:text-[#4CAF50] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            {t('cta.btn.mc') || 'Configura Minecraft'}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
