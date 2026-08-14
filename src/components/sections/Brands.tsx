import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const brands = [
  { name: 'Velmor Arquitecto', logo: '/images/clients/velmor-arquitecto.png' },
  { name: 'Veraux Ropa', logo: '/images/clients/veraux-ropa.png' },
  { name: 'Altivan Inmobiliaria', logo: '/images/clients/altivan-inmmobiliaria.png' },
  { name: 'Concretera Solidexa', logo: '/images/clients/concretera.png' },
  { name: 'Concesionario La Fé', logo: '/images/clients/concesionario.png' },
]

const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]

export default function Brands() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="brands" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-ambient-glow-center"></div>
      
      <div ref={ref} className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('brands.title')}</span>
          </h2>
          <p className="text-zinc-400 text-lg">{t('brands.subtitle')}</p>
        </motion.div>

        <div className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}>
          <div className="flex gap-6" style={{ animation: 'marquee 20s linear infinite' }}>
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 md:w-56 md:h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
    </section>
  )
}
