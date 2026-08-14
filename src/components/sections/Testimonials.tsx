import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const testimonialsData = [
  { quote: 'Transformaron mi portafolio arquitectónico en una obra de arte digital. Un equipo comprometido, profesional y con ideas innovadoras.', name: 'Velmor Arquitecto', company: 'Velmor Arquitecto', logo: '/images/clients/velmor-arquitecto.png', gradient: 'from-[#FF6B00]/20', rating: 5 },
  { quote: 'Codex Studio revolucionó nuestra tienda en línea. Su atención al detalle y el diseño moderno incrementaron nuestras ventas de manera increíble.', name: 'Veraux Ropa', company: 'Veraux Ropa', logo: '/images/clients/veraux-ropa.png', gradient: 'from-[#FF007F]/20', rating: 5 },
  { quote: 'El equipo entendió perfectamente nuestra visión corporativa. La plataforma es rápida, segura y transmite la confianza que buscábamos.', name: 'Altivan Inmobiliaria', company: 'Altivan Inmobiliaria', logo: '/images/clients/altivan-inmmobiliaria.png', gradient: 'from-[#00F0FF]/20', rating: 5 },
  { quote: 'Nuestro portal empresarial ha dado un salto generacional. Operaciones más rápidas y una interfaz sumamente intuitiva.', name: 'Concretera Solidexa', company: 'Concretera Solidexa', logo: '/images/clients/concretera.png', gradient: 'from-[#FFBD2E]/20', rating: 5 },
  { quote: 'La calidad visual que entregaron superó todas las expectativas. Nuestros clientes disfrutan un catálogo moderno, responsivo y dinámico.', name: 'Concesionario La Fé', company: 'Concesionario La Fé', logo: '/images/clients/concesionario.png', gradient: 'from-[#32cd96]/20', rating: 5 },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const scrollPosRef = useRef(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const animate = () => {
      scrollPosRef.current += 0.8
      if (scrollPosRef.current >= container.scrollWidth / 2) {
        scrollPosRef.current = 0
      }
      container.scrollLeft = scrollPosRef.current
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData]

  return (
    <section id="testimonials" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div ref={ref} className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{t('testimonials.title')}</span>
          </h2>
          <p className="text-zinc-400 text-lg">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #09090b 0%, transparent 100%)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #09090b 0%, transparent 100%)' }}></div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden px-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[380px] rounded-2xl border border-zinc-800 overflow-hidden group hover:border-brand-pink/30 transition-all duration-300">
                <div className={`relative p-6 bg-gradient-to-b ${testimonial.gradient} to-[#0A0A0A]`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-[#FFBD2E] text-sm"></i>
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-6 leading-relaxed text-sm md:text-base">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-800 shadow-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={testimonial.logo} alt={testimonial.company} className="w-8 h-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      <p className="text-zinc-500 text-xs">{testimonial.company}</p>
                    </div>
            ))}
          </div>
    </section>
  )
}
