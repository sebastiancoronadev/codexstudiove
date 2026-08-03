import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const AudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-7 h-7">
    <path fill="white" d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-96 60.3 0 48.8 62.7c5.1 6.6 13.3 10 21.6 9.1s15.5-6.1 19.1-13.6l42.9-91.2 9.9 19.8c4.1 8.1 12.4 13.3 21.5 13.3l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-57.2 0-25.4-50.7c-4.1-8.2-12.6-13.4-21.8-13.3s-17.5 5.5-21.4 13.8l-47.3 100.6-32-41.1C86.4 307.4 79.4 304 72 304L0 304 0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5z"/>
  </svg>
)
const SubtitleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm152 80l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8zm168 8c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80z"/></svg>
)
const TransitionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-7 h-7"><path fill="white" d="M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm156.5 11.5C472.1 100.4 464.4 96 456 96s-16.1 4.4-20.5 11.5l-54 88.3-17.9-25.6c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S279.1 288 288 288l256 0c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144zM144 128l0 160c0 61.9 50.1 112 112 112l192 0 0 16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l80 0zM52 196l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0zm0 96c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0z"/></svg>
)
const SoundIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"/></svg>
)
const GreenScreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"/></svg>
)
const ExportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M448 64c2 0 3.9 .1 5.8 .3l-95.7 95.7 67.9 0 72-72c8.8 11 14 24.9 14 40l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l70.1 0-96 96 67.9 0 95-95 1-1 92.1 0-96 96 67.9 0 95-95 1-1 86.1 0z"/></svg>
)

const videoServices = [
  { icon: AudioIcon, title: 'Regulación de Audio', description: 'Mezcla profesional, eliminación de ruido y optimización de sonido.', color: 'bg-orange-500' },
  { icon: SubtitleIcon, title: 'Subtítulos y Textos', description: 'Subtítulos sincronizados, títulos animados.', color: 'bg-pink-500' },
  { icon: TransitionIcon, title: 'Transiciones Creativas', description: 'Transiciones fluidas, efectos visuales.', color: 'bg-cyan-500' },
  { icon: SoundIcon, title: 'Efectos de Sonido', description: 'Biblioteca de efectos, sincronización musical.', color: 'bg-yellow-500' },
  { icon: GreenScreenIcon, title: 'Pantalla Verde', description: 'Chroma key profesional, reemplazo de fondos.', color: 'bg-emerald-500' },
  { icon: ExportIcon, title: 'Exportación Optimizada', description: 'Formatos YouTube, TikTok, Instagram.', color: 'bg-gray-500' },
]

export default function VideoEditing() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="video" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-ambient-glow-top"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('video.title')}</span></h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">{t('video.subtitle')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videoServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} whileHover={{ y: -4 }} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-brand-orange/30 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><service.icon /></div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-8">{t('video.reference')}</h3>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full text-center hover:shadow-lg hover:shadow-brand-pink/25 transition-all transform hover:scale-105">{t('video.cta')}</a>
          <a href="#contact" className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-full text-center hover:border-brand-pink/50 hover:bg-brand-pink/10 transition-all">{t('video.budget')}</a>
        </div>
      </div>
    </section>
  )
}
