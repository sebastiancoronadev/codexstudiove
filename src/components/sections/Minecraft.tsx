ï»¿import React from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import InViewSEO from '../InViewSEO';

export default function Minecraft() {
  const { t } = useLanguage();

  const services = [
    { title: t('mc.svc3.title'), desc: t('mc.svc3.desc'), icon: "web-minecraft-optimizacion.svg" },
    { title: t('mc.svc4.title'), desc: t('mc.svc4.desc'), icon: "web-minecraft-plugin.svg" },
    { title: t('mc.svc10.title'), desc: t('mc.svc10.desc'), icon: "web-minecraft-minijuegospersonalizados.svg" },
    { title: t('mc.svc2.title'), desc: t('mc.svc2.desc'), icon: "web-minecraft-modpack.svg" },
    { title: t('mc.svc8.title'), desc: t('mc.svc8.desc'), icon: "web-minecraft-anticheat.svg" },
    { title: t('mc.svc6.title'), desc: t('mc.svc6.desc'), icon: "web-minecraft-dashboard.svg" }
  ];

  return (
    <section id="minecraft" className="py-24 relative overflow-hidden bg-[#050505] border-t border-[#111]" itemScope itemType="https://schema.org/Service">
      <InViewSEO 
        title="Servidores Minecraft Profesionales | BungeeCord, Plugins y Modpacks"
        description="ConfiguraciÃ³n avanzada de servidores Minecraft con BungeeCord, plugins personalizados, modpacks Forge/Fabric, anticheat y dashboards. Redes multigamemode Survival, Skyblock y Factions."
        keywords="servidor minecraft, bungeecord, plugins minecraft, modpacks, minecraft hosting, pterodactyl, anticheat minecraft"
      />
      <meta itemProp="serviceType" content="Minecraft Server Hosting & Configuration" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4CAF50]/5 blur-[120px] rounded-full pointer-events-none"></div>

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
            dangerouslySetInnerHTML={{ __html: t('mc.title') || 'Minecraft Servers' }}
          />
          <p itemProp="description" className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            {t('mc.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111]/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 hover:bg-[#4CAF50]/5 transition-all duration-300 group flex flex-col"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Offer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center group-hover:border-[#4CAF50]/50 group-hover:bg-[#4CAF50]/20 transition-all shrink-0">
                  <img src={`/icons/${svc.icon}`} className="w-6 h-6 object-contain filter invert brightness-0 group-hover:brightness-100 group-hover:invert-0 group-hover:filter-none transition-all duration-300" alt="" />
                </div>
                <h3 itemProp="itemOffered" className="text-xl font-bold text-[#4CAF50] m-0 leading-tight">{svc.title}</h3>
              </div>
              <p itemProp="description" className="text-gray-400 text-sm leading-relaxed flex-grow">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
