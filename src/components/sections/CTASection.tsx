import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const buttons = [
    { label: t('ctaSection.buttons.web'), href: '#contact', color: 'from-brand-pink to-brand-orange', icon: 'fa-solid fa-globe' },
    { label: t('ctaSection.buttons.video'), href: '#contact', color: 'from-brand-orange to-yellow-500', icon: 'fa-solid fa-video' },
    { label: t('ctaSection.buttons.discord'), href: '#contact', color: 'from-indigo-500 to-purple-500', icon: 'fa-brands fa-discord' },
    { label: t('ctaSection.buttons.minecraft'), href: '#contact', color: 'from-green-500 to-emerald-500', icon: 'fa-solid fa-cubes' },
  ]

  return (
    <section id="cta" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-ambient-glow-center"></div>
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-gradient">{t('ctaSection.title')}</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          {t('ctaSection.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {buttons.map((btn, index) => (
            <motion.a
              key={index}
              href={btn.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-4 bg-gradient-to-r ${btn.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2`}
            >
              <i className={btn.icon}></i>
              {btn.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
