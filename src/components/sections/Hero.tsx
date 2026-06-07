import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-32 sm:pt-24 sm:pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            particles: {
              color: { value: ["#FF007F", "#FF0000", "#FF6B00"] },
              links: {
                color: "#FF0000",
                distance: 180,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: { value: 0.6 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 1,
                    color: "#FF007F"
                  },
                },
                push: {
                  quantity: 4,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 mx-auto inline-block"
        >
          <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="snake-border p-[2px] glow-effect w-full h-full">
            <div className="bg-[#0A0A0A] rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden group h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight relative z-10" dangerouslySetInnerHTML={{ __html: t('hero.title') === 'hero.title' ? 'Transformando Ideas en <span class="bg-gradient-to-r from-[#FF007F] to-[#FF6B00] text-transparent bg-clip-text animate-pulse">Realidad Digital</span>' : t('hero.title') }} />
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                {t('hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button onClick={scrollToContact} className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-gradient-to-r from-[#FF007F] to-[#FF0000] text-white rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95">
                  {t('hero.btn1')}
                </button>
                <button onClick={scrollToContact} className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-[#111111] border border-gray-700 text-white rounded-lg font-bold text-lg hover:border-[#FF007F] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95">
                  {t('hero.btn2')}
                </button>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#FF007F] hover:text-[#FF6B00] cursor-pointer transition-colors" 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Descubre</span>
        <i className="fas fa-chevron-down animate-bounce text-xl"></i>
      </motion.div>
    </section>
  );
}
