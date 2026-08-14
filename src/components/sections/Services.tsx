import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 h-10">
    <path fill="white" d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
  </svg>
)

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10">
    <path fill="white" d="M318.1 154l-9.4 7.6c-22.5-19.3-51.5-33.6-83.3-33.6-71.6 0-129.4 60.8-129.4 132.3 0 6.6 .4 13.1 1.4 19.4-2-56 41.8-97.4 92.6-97.4 24.2 0 46.2 9.4 62.6 24.7l-25.2 20.4c-8.3-.9-16.8 1.8-23.1 8.1-11.1 11-11.1 28.9 0 40 11.1 11 28.9 11 40 0 6.3-6.3 9-14.9 8.1-23.1l75.2-88.8c6.3-6.5-3.3-15.9-9.5-9.6zM213.7 246.5a14 14 0 1 1 20.6 19 14 14 0 1 1 -20.6-19zM224 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320z"/>
  </svg>
)

const DesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 h-10">
    <path fill="white" d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4-118.4 0C111.2 62.7 89.3 48 64 48 28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1 8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1 59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36 35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36l-118.4 0 0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z"/>
  </svg>
)

export default function Services() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    { icon: WebIcon, title: t('services.web.title'), description: t('services.web.description'), bullets: ['HTML5, CSS3, JavaScript', 'React, Vue, Angular', 'Node.js, PHP, Python'] },
    { icon: ServerIcon, title: t('services.backend.title'), description: t('services.backend.description'), bullets: ['Microservicios y API REST', 'Autenticación y seguridad', 'Cloud (AWS, Azure, GCP)'] },
    { icon: DesignIcon, title: t('services.ux.title'), description: t('services.ux.description'), bullets: ['Diseño responsivo', 'Prototipos interactivos', 'Research y testing'] },
  ]

  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('services.title')}</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-brand-pink/30 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-500">
                    <i className="fa-solid fa-check text-brand-pink text-xs"></i>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
    </section>
  )
}
