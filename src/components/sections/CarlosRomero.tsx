import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Helmet } from 'react-helmet-async'

const carlosTexts: Record<string, { title: string; description: string; years: string; negotiations: string; cv: string }> = {
  es: { title: 'Carlos Gabriel Romero Marín', description: 'Soy Carlos Gabriel Romero Marín, un ejecutivo de ventas y estratega corporativo apasionado por impulsar negociaciones de alto nivel. Detrás de cada acuerdo que gestiono, busco la excelencia y la confianza, acompañando cada proceso de principio a fin para transformar las metas comerciales en resultados sólidos y duraderos.', years: 'Años de Experiencia', negotiations: 'Negociaciones Exitosas', cv: 'Descargar CV de Carlos Romero' },
  en: { title: 'Carlos Gabriel Romero Marín', description: 'I am Carlos Gabriel Romero Marín, a sales executive and corporate strategist passionate about driving high-level negotiations.', years: 'Years of Experience', negotiations: 'Successful Negotiations', cv: 'Download Carlos Romero CV' },
  zh: { title: '卡洛斯·加布里埃尔·罗梅罗·马林', description: '我是卡洛斯·加布里埃尔·罗梅罗·马林，一名销售高管和企业战略家。', years: '年经验', negotiations: '成功谈判', cv: '下载简历' },
  ja: { title: 'カルロス・ガブリエル・ロメロ・マリン', description: '私はカルロス・ガブリエル・ロメロ・マリンです。営業幹部兼企業戦略家です。', years: '年の経験', negotiations: '成功した交渉', cv: '履歴書をダウンロード' }
}

export default function CarlosRomero() {
  const { lang } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const texts = carlosTexts[lang] || carlosTexts.es

  return (
    <section id="carlos" className="relative py-4 md:py-32 pb-24 md:pb-40 bg-zinc-950 overflow-visible">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:gap-12 items-end">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative flex justify-center md:mt-[200px]">
            <div className="relative w-full md:w-80 max-w-[160px] md:max-w-none">
              <div className="relative bg-[#0F0F0F] rounded-2xl border border-zinc-800 overflow-visible md:-mt-[200px]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/10 via-transparent to-brand-orange/10 rounded-2xl"></div>
                <div className="h-32 md:h-72"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] z-10">
                  <img src="/images/carlos-romero.png" alt="Carlos Gabriel Romero Marín" className="w-full h-auto object-contain object-bottom" style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' }} />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-sm md:text-4xl font-bold mb-2 md:mb-6"><span className="text-gradient">{texts.title}</span></h2>
            <p className="text-zinc-400 text-[10px] md:text-lg leading-relaxed mb-2 md:mb-8">{texts.description}</p>
            <div className="flex items-center gap-2 md:gap-8 mb-2 md:mb-8">
              <div className="text-center"><div className="text-lg md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={6} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-[8px] md:text-sm">{texts.years}</div></div>
              <div className="w-px h-8 md:h-16 bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent"></div>
              <div className="text-center"><div className="text-lg md:text-5xl font-bold text-white mb-1">{inView && <CountUp end={150} duration={2} suffix="+" />}</div><div className="text-zinc-500 text-[8px] md:text-sm">{texts.negotiations}</div></div>
            </div>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/cv/CV_Carlos_Romero.pdf" download className="px-3 md:px-6 py-1.5 md:py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white text-[10px] md:text-base font-semibold rounded-full text-center hover:shadow-lg transition-all"><i className="fa-solid fa-download mr-1 md:mr-2"></i>{texts.cv}</motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
