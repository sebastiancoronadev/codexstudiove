import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import InViewSEO from '../InViewSEO';

export default function Discord() {
  const { t } = useLanguage();

  const services = [
    { title: t('discord.svc1.title'), desc: t('discord.svc1.desc'), icon: "web-diseño-servidores-discord.svg" },
    { title: t('discord.svc2.title'), desc: t('discord.svc2.desc'), icon: "web-seguridad-servidor-discord.svg" },
    { title: t('discord.svc3.title'), desc: t('discord.svc3.desc'), icon: "web-discord-bot.svg" },
    { title: t('discord.svc4.title'), desc: t('discord.svc4.desc'), icon: "web-minecraft-economia.svg" },
    { title: t('discord.svc5.title'), desc: t('discord.svc5.desc'), icon: "web-discord-ticket.svg" },
    { title: t('discord.svc6.title'), desc: t('discord.svc6.desc'), icon: "web-notificacion-discord.svg" },
    { title: t('discord.svc7.title'), desc: t('discord.svc7.desc'), icon: "web-estadisticas-discord.svg" }
  ];

  return (
    <section id="discord" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-[#111]" itemScope itemType="https://schema.org/Service">
      <InViewSEO 
        title="Servidores Discord Profesionales | Configuración, Bots y Seguridad"
        description="Configuración profesional de servidores Discord con bots personalizados, sistemas de tickets, economía, minijuegos y protección anti-raid. Ideal para comunidades gaming y corporativas."
        keywords="servidor discord, bots discord, configurar discord, discord profesional, discord seguridad, discord tickets, discord economía"
      />
      <meta itemProp="serviceType" content="Discord Server Setup" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5865F2]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          className="text-center mb-16"
        >
          <h2 
            itemProp="name"
            className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans"
            dangerouslySetInnerHTML={{ __html: t('discord.title') || 'Discord Setup' }}
          />
          <p itemProp="description" className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            {t('discord.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111]/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5 hover:border-[#5865F2]/50 hover:bg-[#5865F2]/5 transition-all duration-300 group flex flex-col"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Offer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center group-hover:border-[#5865F2]/50 group-hover:bg-[#5865F2]/20 transition-all shrink-0">
                  <img src={`/icons/${svc.icon}`} className="w-6 h-6 object-contain filter invert brightness-0 group-hover:brightness-100 group-hover:invert-0 group-hover:filter-none transition-all duration-300" alt="" />
                </div>
                <h3 itemProp="itemOffered" className="text-xl font-bold text-[#5865F2] m-0 leading-tight">{svc.title}</h3>
              </div>
              <p itemProp="description" className="text-gray-400 text-sm leading-relaxed flex-grow">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
