import React from 'react';
import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { useLanguage } from '../../i18n/LanguageContext';

import CountUp from '../ui/CountUp';

export default function Services() {
  const { t } = useLanguage();

  const services: any[] = [
    {
      id: 'web',
      imgSrc: '/icons/web-desarrollo.svg',
      title: t('services.web.title'),
      desc: t('services.web.desc'),
      list: ['HTML5, CSS3, JavaScript', 'React, Vue, Angular', 'Node.js, PHP, Python'],
      baseColor: '#FF007F',
      hoverColor: '#FF6B00',
      preserveColor: false
    },
    {
      id: 'api',
      imgSrc: '/icons/web-serveryapis.svg',
      title: t('services.api.title'),
      desc: t('services.api.desc'),
      list: ['Microservicios y API REST', 'Autenticación y seguridad', 'Cloud (AWS, Azure, GCP)'],
      baseColor: '#FF007F',
      hoverColor: '#FF0000',
      preserveColor: false
    },
    {
      id: 'ui',
      imgSrc: '/icons/web-uix.svg',
      title: t('services.ui.title'),
      desc: t('services.ui.desc'),
      list: ['Diseño responsivo', 'Prototipos interactivos', 'Research y testing'],
      baseColor: '#FF007F',
      hoverColor: '#FF6B00',
      preserveColor: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF007F] to-[#FF6B00] text-transparent bg-clip-text inline-block mb-4">{t('services.title') || 'Servicios Profesionales'}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">{t('services.desc') || 'Soluciones integrales de desarrollo adaptadas a las necesidades específicas de tu negocio.'}</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service) => (
            <motion.div variants={itemVariants} key={service.id}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="group snake-border p-[1px] md:p-[2px] cursor-pointer hover:glow-effect transition-all duration-300 h-full">
                <div className="bg-[#0A0A0A] h-full p-6 sm:p-8 rounded-[14px] flex flex-col items-start transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div 
                    className="w-16 h-16 rounded-2xl bg-[#111111] border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10"
                    style={{ borderColor: `${service.baseColor}40` }}
                  >
                    {service.imgSrc ? (
                      service.preserveColor ? (
                        <img 
                          src={service.imgSrc} 
                          alt={service.title}
                          className="w-full h-full p-2 object-contain drop-shadow-md"
                        />
                      ) : (
                        <div 
                          className="w-10 h-10 relative z-10"
                          style={{
                            backgroundColor: service.baseColor,
                            WebkitMaskImage: `url(${service.imgSrc})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${service.imgSrc})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                          }}
                        />
                      )
                    ) : (
                      <i 
                        className={`fas ${service.icon} text-4xl drop-shadow-md`}
                        style={{ color: service.baseColor }}
                      ></i>
                    )}
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-4 relative z-10 transition-colors group-hover:drop-shadow-[0_0_10px_currentColor]"
                    style={{ color: service.baseColor }}
                  >
                    {service.title}
                  </h3>
                  {service.desc && <p className="text-white/70 mb-8 flex-grow relative z-10">{service.desc}</p>}
                  {service.list && service.list.length > 0 && (
                    <ul className="space-y-3 w-full border-t border-gray-800 pt-6 relative z-10">
                      {service.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 transition-colors">
                          <i 
                            className="fas fa-check text-xs transition-transform group-hover:scale-125"
                            style={{ color: service.baseColor }}
                          ></i>
                          <span className="group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="stats" 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#0A0A0A] p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-800 relative overflow-hidden group transition-colors cursor-default"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#FF007F] to-[#FF0000] opacity-0 group-hover:opacity-5 blur-[100px] rounded-full transition-opacity duration-1000"></div>
          
          <div className="text-center relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF007F] mb-2 font-sans drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]">
              <CountUp end={100} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">{t('stats.projects')}</div>
          </div>
          <div className="text-center relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF0000] mb-2 font-sans drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
               <CountUp end={5} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">{t('stats.experience')}</div>
          </div>
          <div className="text-center relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF6B00] mb-2 font-sans drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]">
              <CountUp end={100} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">{t('stats.clients')}</div>
          </div>
          <div className="text-center relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-sans drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <CountUp end={24} suffix="/7" />
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">{t('stats.support')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
