import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const DesignIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z"/></svg>)
const SecurityIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM249.6 183.5l6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7l0 5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3l0-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z"/></svg>)
const BotsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-7 h-7"><path fill="white" d="M86.3 197.8c-8-.1-15.9 1.7-23.1 5.1s-13.5 8.6-18.4 14.9l0-61.9c0-2.2-.9-4.3-2.4-5.8s-3.6-2.4-5.8-2.4l-28.4 0c-2.2 0-4.3 .9-5.8 2.4S0 153.8 0 156L0 333.6c0 1.1 .2 2.1 .6 3.1s1 1.9 1.8 2.7 1.7 1.4 2.7 1.8 2.1 .6 3.1 .6l28.4 0c1.1 0 2.1-.2 3.1-.6s1.9-1 2.7-1.8 1.4-1.7 1.8-2.7 .6-2.1 .6-3.1l0-8.1c11.6 13.4 25.9 19.8 41.6 19.8 34.6 0 61.9-26.2 61.9-73.8 0-45.9-27-73.6-61.9-73.6zM71.5 305.7c-9.6 0-21.2-4.9-26.7-12.5l0-43c5.5-7.6 17.2-12.8 26.7-12.8 17.7 0 31.1 13.1 31.1 34 0 21.2-13.4 34.3-31.1 34.3zm156.4-59a17.4 17.4 0 1 0 0 34.8 17.4 17.4 0 1 0 0-34.8zm46.1-90l0-44.7c2.8-1.2 5.2-3.3 6.6-6s1.9-5.8 1.3-8.9-2.2-5.7-4.6-7.7-5.4-3-8.4-3-6.1 1.1-8.4 3-4 4.7-4.6 7.7-.1 6.1 1.3 8.9 3.8 4.8 6.6 6l0 44.7c-28 1.3-54.4 13.6-73.6 34.1s-29.5 47.7-28.8 75.8 12.3 54.7 32.4 74.3 47 30.6 75.1 30.6 55-11 75.1-30.6 31.7-46.3 32.4-74.3-9.7-55.3-28.8-75.8-45.5-32.8-73.6-34.1zm86 107.4c0 30.5-40.8 55.3-91.1 55.3s-91.1-24.7-91.1-55.3 40.8-55.3 91.1-55.3 91.1 24.7 91.1 55.3zm-50.2 17.4c3.4 0 6.8-1 9.7-2.9s5.1-4.6 6.4-7.8 1.7-6.7 1-10.1-2.3-6.5-4.8-8.9-5.5-4.1-8.9-4.8-6.9-.3-10.1 1-5.9 3.5-7.8 6.4-2.9 6.2-2.9 9.7c0 4.6 1.8 9 5.1 12.3s7.7 5.1 12.3 5.1zm270.9-31c-14.8-2.6-22.4-3.8-22.4-9.9 0-5.5 7.3-9.9 17.7-9.9 12.2 .1 24.2 3.6 34.5 10.1 1.8 1.2 4 1.6 6.2 1.1s4-1.7 5.1-3.6l8.6-14.9c1.1-1.9 1.4-4.1 .8-6.1s-1.9-3.9-3.7-5c-15.7-9.4-33.7-14.3-52-14.1-39 0-60.2 21.5-60.2 46.2 0 36.3 33.7 41.9 57.6 45.6 13.4 2.3 24.1 4.4 24.1 11 0 6.4-5.5 10.8-18.9 10.8-13.6 0-31-6.2-42.6-13.6-.9-.6-1.9-1-3-1.2s-2.1-.2-3.2 .1-2.1 .7-2.9 1.3-1.6 1.4-2.2 2.3l-10.2 16.9c-1.1 1.8-1.4 4-1 6s1.7 3.9 3.5 5c15.2 10.3 37.7 16.7 59.4 16.7 40.4 0 64-19.8 64-46.5 0-38.1-35.5-43.9-59.3-48.3zm-95.9 60.8c-.5-2-1.8-3.7-3.6-4.8s-3.9-1.5-5.9-1.1c-1.4 .3-2.8 .4-4.2 .4-7.8 0-12.5-6.1-12.5-14.2l0-51.2 20.3 0c2.2 0 4.2-.9 5.8-2.4s2.4-3.6 2.4-5.8l0-22.7c0-2.2-.9-4.2-2.4-5.8s-3.6-2.4-5.8-2.4l-20.3 0 0-30.2c0-2.2-.9-4.2-2.4-5.8s-3.6-2.4-5.8-2.4l-28.2 0c-2.2 0-4.2 .9-5.8 2.4s-2.4 3.6-2.4 5.8l0 30.2-15.1 0c-1.1 0-2.1 .2-3.1 .6s-1.9 1-2.6 1.8-1.4 1.7-1.8 2.6-.6 2-.6 3.1l0 22.7c0 1.1 .2 2.1 .6 3.1s1 1.9 1.8 2.6 1.7 1.4 2.6 1.8 2 .6 3.1 .6l15.1 0 0 63.7c0 27 15.4 41.3 43.9 41.3 12.2 0 21.4-2.2 27.6-5.4 1.6-.8 2.9-2.2 3.7-3.9s.9-3.6 .5-5.4l-5-19.3z"/></svg>)
const EconomyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M288-16c-13.3 0-24 10.7-24 24l0 12-1.8 0c-36.6 0-66.2 29.7-66.2 66.2 0 33.4 24.9 61.6 58 65.7l61 7.6c5.1 .6 9 5 9 10.2 0 5.7-4.6 10.2-10.2 10.2L240 180c-15.5 0-28 12.5-28 28s12.5 28 28 28l24 0 0 12c0 13.3 10.7 24 24 24s24-10.7 24-24l0-12 1.8 0c36.6 0 66.2-29.7 66.2-66.2 0-33.4-24.9-61.6-58-65.7l-61-7.6c-5.1-.6-9-5-9-10.2 0-5.7 4.6-10.2 10.2-10.2L328 76c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0 0-12c0-13.3-10.7-24-24-24zM109.3 341.5L66.7 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l320.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 280 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152.2 0c-33.9 0-66.5 13.5-90.5 37.5z"/></svg>)
const TicketsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M64 64C28.7 64 0 92.7 0 128l0 64C0 200.8 7.4 207.7 15.7 210.6 34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6-18.8-6.5-32.3-24.4-32.3-45.4s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zM416 336l0-160-256 0 0 160 256 0zM112 160c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192z"/></svg>)
const NotifIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7"><path fill="white" d="M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"/></svg>)
const StatsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"/></svg>)

const discordServices = [
  { icon: DesignIcon, title: 'Diseño de Servidores', description: 'Canales, categorías, roles jerárquicos y permisos estables.', color: 'bg-indigo-500' },
  { icon: SecurityIcon, title: 'Seguridad (Raid-Proof)', description: 'Sistemas de verificación, anti-spam, anti-raids y auto-moderación.', color: 'bg-red-500' },
  { icon: BotsIcon, title: 'Bots Personalizados', description: 'Programación de bots en JS/Python a medida para tu comunidad.', color: 'bg-purple-500' },
  { icon: EconomyIcon, title: 'Economía & Minijuegos', description: 'Sistemas de niveles, economía virtual, tiendas y juegos integrados.', color: 'bg-amber-500' },
  { icon: TicketsIcon, title: 'Sistema de Tickets', description: 'Tickets de soporte, asignación automática.', color: 'bg-teal-500' },
  { icon: NotifIcon, title: 'Notificaciones', description: 'Welcome messages, reaction roles.', color: 'bg-rose-500' },
  { icon: StatsIcon, title: 'Estadísticas y Logs', description: 'Tracking de usuarios, reportes.', color: 'bg-sky-500' },
]

export default function DiscordConfig() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="discord" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('discord.title')}</span></h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">{t('discord.subtitle')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {discordServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} whileHover={{ y: -4 }} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><service.icon /></div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all inline-block">{t('discord.title')}</a>
        </div>
    </section>
  )
}
