import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/dict'

const flagIcons: Record<string, string> = { es: 'https://flagcdn.com/w40/es.png', en: 'https://flagcdn.com/w40/us.png', zh: 'https://flagcdn.com/w40/cn.png', ja: 'https://flagcdn.com/w40/jp.png' }

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll) }, [])

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'ES', flag: flagIcons.es }, { code: 'en', label: 'EN', flag: flagIcons.en }, { code: 'zh', label: '中文', flag: flagIcons.zh }, { code: 'ja', label: '日本語', flag: flagIcons.ja }
  ]

  const navigateTo = (id: string) => {
    setMobileMenuOpen(false)
    const doScroll = () => { setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.scrollTo(0, 0) }, 150) }
    if (window.location.pathname !== '/') { navigate('/'); setTimeout(doScroll, 200) } else doScroll()
  }

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img src="https://ik.imagekit.io/phqg3onxg/1001187949-1.png?updatedAt=1771257135536" alt="Codex Studio VE" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigateTo('home')} className="text-zinc-400 hover:text-white text-sm font-medium">{t('nav.home')}</button>
            <button onClick={() => navigateTo('services')} className="text-zinc-400 hover:text-white text-sm font-medium">{t('nav.services')}</button>
            <button onClick={() => navigateTo('payment')} className="text-zinc-400 hover:text-white text-sm font-medium">{t('nav.payment')}</button>
            <button onClick={() => navigateTo('cta')} className="text-zinc-400 hover:text-white text-sm font-medium">{t('nav.cta')}</button>
            <button onClick={() => navigateTo('contact')} className="text-zinc-400 hover:text-white text-sm font-medium">{t('nav.contact')}</button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5"><path fill="currentColor" d="M160 0c17.7 0 32 14.3 32 32v32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-9.6l-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45H325.5l-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2H32C14.3 128 0 113.7 0 96S14.3 64 32 64h96V32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384h100.6L416 270.8z"/></svg>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-40 bg-black/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                    {languages.map(({ code, label, flag }) => (
                      <button key={code} onClick={() => { setLang(code); setLangMenuOpen(false) }} className={`w-full px-4 py-2.5 text-sm text-left flex items-center gap-3 transition-all ${lang === code ? 'bg-brand-pink/20 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}>
                        <img src={flag} alt={label} className="w-5 h-4 object-cover rounded-sm" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800 rounded-b-2xl">
              <div className="py-4 space-y-1">
                <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white text-base">{t('nav.home')}</button>
                <button onClick={() => navigateTo('services')} className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white text-base">{t('nav.services')}</button>
                <button onClick={() => navigateTo('payment')} className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white text-base">{t('nav.payment')}</button>
                <button onClick={() => navigateTo('cta')} className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white text-base">{t('nav.cta')}</button>
                <button onClick={() => navigateTo('contact')} className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white text-base">{t('nav.contact')}</button>
                <div className="px-4 pt-4 border-t border-zinc-800 mt-2">
                  <div className="flex gap-2 flex-wrap">
                    {languages.map(({ code, label, flag }) => (
                      <button key={code} onClick={() => { setLang(code); setMobileMenuOpen(false) }} className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${lang === code ? 'bg-brand-pink/20 text-brand-pink' : 'text-zinc-500'}`}>
                        <img src={flag} alt={label} className="w-5 h-4 object-cover rounded-sm" />{label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
