import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Helmet } from 'react-helmet-async'

export default function AboutUs() {
  const { t, lang } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const cvFiles: Record<string, string> = { es: '/cv/CV_Harvard_Sebastian_Corona_2026.pdf', en: '/cv/CV_Harvard_Sebastian_Corona_2026_EN.pdf', zh: '/cv/CV_Harvard_Sebastian_Corona_2026_ZH.pdf', ja: '/cv/CV_Harvard_Sebastian_Corona_2026_JA.pdf' }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sebastián Ernesto Corona Bencomo',
    jobTitle: 'Senior Full-Stack Developer',
    description: 'Desarrollador full-stack senior con más de 7 años de experiencia y +100 proyectos completados.',
    url: 'https://codexstudiove.com/#about',
    image: 'https://codexstudiove.com/images/sebastian-corona.png'
  }

  return (
    <section id="about" className="relative py-4 md:py-32 pb-24 md:pb-40 bg-zinc-950 overflow-visible">
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-2 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white">¿Quiénes Somos?</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-12 items-end">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="pb-0 md:pb-8">
            <h3 className="text-sm md:text-4xl font-bold mb-2 md:mb-6"><span className="text-gradient">Sebastián Ernesto Corona Bencomo</span></h3>
            <p className="text-zinc-400 text-[10px] md:text-lg leading-relaxed mb-2 md:mb-8">{t('about.description')}</p>
            <div className="flex items-center gap-2 md:gap-8 mb-2 md:mb-8">
              <div className="text-center"><div className="text-lg md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={7} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-[8px] md:text-sm">{t('about.years')}</div></div>
              <div className="w-px h-8 md:h-16 bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent"></div>
              <div className="text-center"><div className="text-lg md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={100} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-[8px] md:text-sm">{t('about.projects')}</div></div>
            </div>
            <div className="flex flex-col gap-1.5 md:gap-4">
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={cvFiles[lang] || cvFiles.es} download className="px-3 md:px-6 py-1.5 md:py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white text-[10px] md:text-base font-semibold rounded-full text-center hover:shadow-lg transition-all"><i className="fa-solid fa-download mr-1 md:mr-2"></i>{t('about.cvButton')}</motion.a>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="https://github.com/sebastiancoronadev" target="_blank" rel="noopener noreferrer" className="px-3 md:px-6 py-1.5 md:py-3 border border-zinc-700 text-white text-[10px] md:text-base font-semibold rounded-full text-center hover:border-brand-pink/50 transition-all"><i className="fa-brands fa-github mr-1 md:mr-2"></i>{t('about.githubButton')}</motion.a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center md:mt-[200px]">
            <div className="relative w-full md:w-80 max-w-[160px] md:max-w-none">
              <div className="relative bg-[#0F0F0F] rounded-2xl border border-zinc-800 overflow-visible md:-mt-[200px]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/10 via-transparent to-brand-orange/10 rounded-2xl"></div>
                <div className="h-32 md:h-72"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] z-10">
                  <img src="/images/sebastian-corona.png" alt="Sebastián Ernesto Corona Bencomo" className="w-full h-auto object-contain object-bottom" style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
