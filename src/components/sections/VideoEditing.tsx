import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

const VideoSlider = ({ id }: { id: string }) => {
  return (
    <div className="relative group/slider max-w-[100vw] overflow-hidden mb-16">
      {/* Scroll Buttons */}
      <button 
        onClick={() => {
          const slider = document.getElementById(id);
          if (slider) slider.scrollBy({ left: -320, behavior: 'smooth' });
        }}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-opacity hover:bg-white/20 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Previous"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>
      
      <button 
        onClick={() => {
          const slider = document.getElementById(id);
          if (slider) slider.scrollBy({ left: 320, behavior: 'smooth' });
        }}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-opacity hover:bg-white/20 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Next"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>

      <motion.div 
        id={id}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex overflow-x-auto pb-8 pt-4 gap-6 snap-x hide-scrollbar scroll-smooth px-4 sm:px-12" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* Slide 1 - YouTube */}
        <div className="w-[300px] md:w-[400px] shrink-0 snap-center rounded-xl overflow-hidden bg-black flex flex-col justify-center border border-gray-800 hover:border-[#FF0000] transition-colors hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
          <iframe width="100%" height="225" src="https://www.youtube.com/embed/x1zqYWDEMSw" frameBorder="0" allowFullScreen className="w-full text-center"></iframe>
        </div>

        {/* Slide 2 - YouTube */}
        <div className="w-[300px] md:w-[400px] shrink-0 snap-center rounded-xl overflow-hidden bg-black flex flex-col justify-center border border-gray-800 hover:border-[#FF0000] transition-colors hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
           <iframe width="100%" height="225" src="https://www.youtube.com/embed/S0kl4_UNMXk" frameBorder="0" allowFullScreen className="w-full text-center"></iframe>
        </div>

        {/* Slide 3 - YouTube */}
        <div className="w-[300px] md:w-[400px] shrink-0 snap-center rounded-xl overflow-hidden bg-black flex flex-col justify-center border border-gray-800 hover:border-[#FF0000] transition-colors hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
           <iframe width="100%" height="225" src="https://www.youtube.com/embed/T2iorvtS5Nk?si=PFQHan23G2Bf5pZ9" frameBorder="0" allowFullScreen className="w-full text-center"></iframe>
        </div>

      </motion.div>
    </div>
  );
};

export default function VideoEditing() {
  const { t } = useLanguage();

  const services: any[] = [
    { imgSrc: '/icons/web-regulacion-audio-video.svg', title: t('video.svc1.title'), desc: t('video.svc1.desc') },
    { imgSrc: '/icons/web-subtitulos-videos.svg', title: t('video.svc2.title'), desc: t('video.svc2.desc') },
    { imgSrc: '/icons/web-transiciones-creativas.svg', title: t('video.svc3.title'), desc: t('video.svc3.desc') },
    { imgSrc: '/icons/web-efectos-audio-video.svg', title: t('video.svc4.title'), desc: t('video.svc4.desc') },
    { imgSrc: '/icons/web-pantallaverde-videos.svg', title: t('video.svc5.title'), desc: t('video.svc5.desc') },
    { imgSrc: '/icons/web-exportacion-calidad-discord.svg', title: t('video.svc6.title'), desc: t('video.svc6.desc') },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="video" className="py-24 bg-[#0A0A0A] border-t border-gray-900 border-b relative overflow-hidden group">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-white" dangerouslySetInnerHTML={{ __html: t('video.title') }} />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">{t('video.subtitle')}</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((svc, idx) => (
            <motion.div variants={itemVariants} key={idx} className="bg-[#111111] p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-[#FF0000] transition-colors flex items-start gap-3 sm:gap-4 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[rgba(255,0,0,0.1)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {svc.imgSrc ? (
                  <div 
                    className="w-6 h-6 sm:w-7 sm:h-7 bg-[#FF0000] group-hover:bg-[#FF6B00] transition-colors relative z-10"
                    style={{
                      WebkitMaskImage: `url(${svc.imgSrc})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${svc.imgSrc})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center'
                    }}
                  />
                ) : (
                  <i className={`fas ${svc.icon} text-[#FF0000] text-lg sm:text-xl group-hover:text-[#FF6B00] transition-colors`}></i>
                )}
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white group-hover:text-[#FF0000] transition-colors">{svc.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          <button 
            onClick={scrollToContact} 
            className="cursor-pointer px-6 py-3 bg-[#FF007F] text-white rounded-lg font-semibold hover:bg-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 text-center"
          >
            {t('video.btn.edit')}
          </button>
          <button 
            onClick={scrollToContact} 
            className="cursor-pointer px-6 py-3 bg-[#1A1A1A] text-white rounded-lg font-semibold border border-gray-700 hover:border-[#FF0000] hover:text-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 text-center"
          >
            {t('btn.quote')}
          </button>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          {t('video.refs')}
        </motion.h3>

        <VideoSlider id="video-slider-bottom" />
      </div>
    </section>
  );
}
