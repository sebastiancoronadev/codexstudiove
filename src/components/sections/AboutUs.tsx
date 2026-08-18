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
    '@id': 'https://codexstudiove.com/#sebastian-corona',
    name: 'Sebastián Ernesto Corona Bencomo',
    alternateName: 'Sebastián Corona',
    jobTitle: 'Senior Full-Stack Developer',
    description: 'Desarrollador full-stack senior con más de 7 años de experiencia y +100 proyectos completados.',
    url: 'https://codexstudiove.com/#about',
    image: 'https://codexstudiove.com/images/sebastian-corona.png',
    sameAs: ['https://github.com/sebastiancoronadev', 'https://linkedin.com/in/sebastiancoronadev', 'https://youtube.com/@codexstudiove'],
    worksFor: { '@id': 'https://codexstudiove.com/#organization' }
  }

  return (
    <section id="about" className="relative py-16 md:py-32 pb-32 md:pb-40 bg-zinc-950 overflow-visible">
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">{t('about.whoweare')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-end">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="pb-0 md:pb-8 order-2 lg:order-1">
            <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6"><span className="text-gradient">Sebastián Corona</span></h3>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-8">{t('about.description')}</p>
            <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-8">
              <div className="text-center"><div className="text-2xl md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={7} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-xs md:text-sm">{t('about.years')}</div></div>
  return (
    <section id="about" className="relative py-16 md:py-32 pb-32 md:pb-40 bg-zinc-950 overflow-visible">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-end">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="pb-0 md:pb-8 order-2 lg:order-1">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6"><span className="text-gradient">{t('about.title')}</span></h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-8">{t('about.description')}</p>
            <div className="flex items-center gap-4 md:gap-8 mb-4 md:mb-8">
              <div className="text-center"><div className="text-2xl md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={5} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-xs md:text-sm">{t('about.years')}</div></div>
              <div className="w-px h-10 md:h-16 bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent"></div>
              <div className="text-center"><div className="text-2xl md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={100} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-xs md:text-sm">{t('about.projects')}</div></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-6 md:mb-0">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={cvFiles[lang] || cvFiles.es} download className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white text-xs md:text-base font-semibold rounded-full text-center hover:shadow-lg transition-all"><i className="fa-solid fa-download mr-2"></i>{t('about.cvButton')}</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/sebastiancoronadev" target="_blank" rel="noopener noreferrer" className="px-4 md:px-6 py-2 md:py-3 border border-zinc-700 text-white text-xs md:text-base font-semibold rounded-full text-center hover:border-brand-pink/50 transition-all"><i className="fa-brands fa-github mr-2"></i>{t('about.githubButton')}</motion.a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center mt-16 md:mt-[200px] order-1 lg:order-2">
            <div className="relative w-40 md:w-80">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-brand-pink/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[50%] bg-brand-orange/10 rounded-full blur-[60px] pointer-events-none"></div>
              <div className="relative bg-[#0F0F0F] rounded-2xl border border-zinc-800 overflow-visible -mt-16 md:-mt-[200px]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/10 via-transparent to-brand-orange/10 rounded-2xl"></div>
                <div className="h-44 md:h-72"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] z-10">
                  <img src="/images/sebastian-corona.png" alt="Sebastián Ernesto Corona Bencomo - Senior Full-Stack Developer" className="w-full h-auto object-contain object-bottom" style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' }} />
                  <img src="/images/sebastian-corona.png" alt="Sebastián Corona" className="w-full h-auto object-contain object-bottom" style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' }} />
                </div>
          </motion.div>
        </div>
    </section>
  )
}
