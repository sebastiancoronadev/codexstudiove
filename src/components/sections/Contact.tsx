import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const countryCodes = [
  { code: '+58', flag: 'https://flagcdn.com/w40/ve.png', name: 'Venezuela' },
  { code: '+43', flag: 'https://flagcdn.com/w40/at.png', name: 'Austria' },
  { code: '+54', flag: 'https://flagcdn.com/w40/ar.png', name: 'Argentina' },
  { code: '+57', flag: 'https://flagcdn.com/w40/co.png', name: 'Colombia' },
  { code: '+593', flag: 'https://flagcdn.com/w40/ec.png', name: 'Ecuador' },
  { code: '+56', flag: 'https://flagcdn.com/w40/cl.png', name: 'Chile' },
  { code: '+52', flag: 'https://flagcdn.com/w40/mx.png', name: 'México' },
  { code: '+1', flag: 'https://flagcdn.com/w40/ca.png', name: 'Canadá' },
  { code: '+1', flag: 'https://flagcdn.com/w40/us.png', name: 'Estados Unidos' },
  { code: '+34', flag: 'https://flagcdn.com/w40/es.png', name: 'España' },
  { code: '+86', flag: 'https://flagcdn.com/w40/cn.png', name: 'China' },
  { code: '+81', flag: 'https://flagcdn.com/w40/jp.png', name: 'Japón' },
]

const projectTypes = ['Desarrollo Web', 'E-commerce', 'Aplicación Web', 'Landing Page', 'API/Backend', 'Edición de Video', 'Servidor Discord', 'Servidor Minecraft', 'Otro']

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', details: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    try {
      await fetch('https://formsubmit.co/ajax/contacto@codexstudiove.com', { method: 'POST', body: data })
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', projectType: '', details: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {}
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950 overflow-visible">
      <AnimatePresence>
        {submitted && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} 
            className="fixed top-24 right-4 md:right-8 z-[100] bg-gradient-to-r from-brand-pink to-brand-orange text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-circle-check text-xl"></i></div>
            <div><p className="font-bold text-sm">¡Mensaje Enviado!</p><p className="text-xs opacity-90">Te responderemos en 24-48h</p></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-brand-pink/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-brand-cyan/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('contact.title')}</span></h2>
          <p className="text-zinc-400 text-base md:text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 md:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,127,0.05)]">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              <div><label className="block text-sm font-medium text-zinc-400 mb-1.5 md:mb-2">{t('contact.name')}</label><input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-black/50 border border-zinc-700 rounded-xl text-white text-sm md:text-base placeholder-zinc-600 focus:outline-none focus:border-brand-pink/50 transition-all" placeholder="Tu nombre completo" /></div>
              <div><label className="block text-sm font-medium text-zinc-400 mb-1.5 md:mb-2">{t('contact.email')}</label><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-black/50 border border-zinc-700 rounded-xl text-white text-sm md:text-base placeholder-zinc-600 focus:outline-none focus:border-brand-pink/50 transition-all" placeholder="tu@email.com" /></div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5 md:mb-2">{t('contact.phone')}</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <button type="button" onClick={() => { setPhoneOpen(!phoneOpen); setProjectOpen(false) }} className="w-[100px] md:w-[110px] h-[42px] md:h-[48px] px-2 md:px-3 bg-black/50 border border-zinc-700 rounded-xl text-white text-xs md:text-sm focus:outline-none focus:border-brand-pink/50 transition-all flex items-center gap-1.5 md:gap-2">
                      <img src={selectedCountry.flag} alt="" className="w-5 md:w-6 h-3 md:h-4 object-cover rounded-sm" /><span>{selectedCountry.code}</span><i className={`fa-solid fa-chevron-down text-[10px] md:text-xs ml-auto transition-transform ${phoneOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {phoneOpen && (
                      <div className="absolute top-full left-0 mt-1 w-40 md:w-44 bg-black/95 border border-zinc-700 rounded-xl overflow-hidden z-[60] max-h-48 md:max-h-60 overflow-y-auto">
                        {countryCodes.map((c) => (
                          <button key={c.code + c.name} type="button" onClick={() => { setSelectedCountry(c); setPhoneOpen(false) }} className={`w-full px-2.5 md:px-3 py-2 md:py-2.5 text-xs md:text-sm text-left flex items-center gap-2 md:gap-3 transition-all ${selectedCountry.code === c.code && selectedCountry.name === c.name ? 'bg-brand-pink/20 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}>
                            <img src={c.flag} alt="" className="w-5 md:w-6 h-3 md:h-4 object-cover rounded-sm" /><span>{c.code}</span><span className="text-[10px] md:text-xs text-zinc-600 ml-auto">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="flex-1 min-w-0 px-3 py-2.5 md:py-3 bg-black/50 border border-zinc-700 rounded-xl text-white text-sm md:text-base placeholder-zinc-600 focus:outline-none focus:border-brand-pink/50 transition-all" placeholder="4121234567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5 md:mb-2">{t('contact.projectType')}</label>
                <div className="relative">
                  <button type="button" onClick={() => { setProjectOpen(!projectOpen); setPhoneOpen(false) }} className="w-full h-[42px] md:h-[48px] px-3 md:px-4 bg-black/50 border border-zinc-700 rounded-xl text-white text-sm md:text-base focus:outline-none focus:border-brand-pink/50 transition-all flex items-center justify-between">
                    <span className={formData.projectType ? 'text-white' : 'text-zinc-600'}>{formData.projectType || 'Selecciona una opción'}</span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform ${projectOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {projectOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-zinc-700 rounded-xl overflow-hidden z-[60]">
                      {projectTypes.map((type) => (
                        <button key={type} type="button" onClick={() => { setFormData({...formData, projectType: type}); setProjectOpen(false) }} className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-left transition-all ${formData.projectType === type ? 'bg-brand-pink/20 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}>{type}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5 md:mb-2">{t('contact.details')}</label>
              <textarea name="details" value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} required rows={4} className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-black/50 border border-zinc-700 rounded-xl text-white text-sm md:text-base placeholder-zinc-600 focus:outline-none focus:border-brand-pink/50 transition-all resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
            </div>

            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-pink/25 transition-all text-base md:text-lg">
              <i className="fa-solid fa-paper-plane mr-2"></i>{t('contact.submit')}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
