import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Globe from 'react-globe.gl'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

export default function GlobalPresence() {
  const { t, lang } = useLanguage()
  const globeRef = useRef<any>(null)
  const [countryIndex, setCountryIndex] = useState(0)
  const [dimensions, setDimensions] = useState(700)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const countries = useMemo(() => [
    { id: 've', name: 'Venezuela', lat: 8.0, lng: -66.0, color: '#FF007F', size: 1.5 },
    { id: 'at', name: 'Austria', lat: 47.5, lng: 14.5, color: '#00F0FF', size: 1.0 },
    { id: 'ar', name: 'Argentina', lat: -38.4, lng: -63.6, color: '#FF6B00', size: 1.0 },
    { id: 'co', name: 'Colombia', lat: 4.6, lng: -74.0, color: '#FFD700', size: 1.0 },
    { id: 'ec', name: 'Ecuador', lat: -1.8, lng: -78.1, color: '#FF0000', size: 1.0 },
    { id: 'cl', name: 'Chile', lat: -35.6, lng: -71.5, color: '#FFFFFF', size: 1.0 },
    { id: 'mx', name: 'México', lat: 23.6, lng: -102.5, color: '#4CAF50', size: 1.0 },
    { id: 'ca', name: 'Canadá', lat: 56.1, lng: -106.3, color: '#FF0000', size: 1.0 },
    { id: 'us', name: 'Estados Unidos', lat: 37.0, lng: -95.7, color: '#3B82F6', size: 1.0 },
    { id: 'es', name: 'España', lat: 40.4, lng: -3.7, color: '#FFD700', size: 1.0 },
    { id: 'cn', name: 'China', lat: 35.8, lng: 104.1, color: '#FF0000', size: 1.0 },
    { id: 'jp', name: 'Japón', lat: 36.2048, lng: 138.2529, color: '#FF3B30', size: 1.0 },
  ], [])

  const countryNames: Record<string, Record<string, string>> = {
    ve: { es: 'Venezuela', en: 'Venezuela', zh: '委内瑞拉', ja: 'ベネズエラ' },
    at: { es: 'Austria', en: 'Austria', zh: '奥地利', ja: 'オーストリア' },
    ar: { es: 'Argentina', en: 'Argentina', zh: '阿根廷', ja: 'アルゼンチン' },
    co: { es: 'Colombia', en: 'Colombia', zh: '哥伦比亚', ja: 'コロンビア' },
    ec: { es: 'Ecuador', en: 'Ecuador', zh: '厄瓜多尔', ja: 'エクアドル' },
    cl: { es: 'Chile', en: 'Chile', zh: '智利', ja: 'チリ' },
    mx: { es: 'México', en: 'Mexico', zh: '墨西哥', ja: 'メキシコ' },
    ca: { es: 'Canadá', en: 'Canada', zh: '加拿大', ja: 'カナダ' },
    us: { es: 'Estados Unidos', en: 'United States', zh: '美国', ja: 'アメリカ' },
    es: { es: 'España', en: 'Spain', zh: '西班牙', ja: 'スペイン' },
    cn: { es: 'China', en: 'China', zh: '中国', ja: '中国' },
    jp: { es: 'Japón', en: 'Japan', zh: '日本', ja: '日本' },
  }

  const connectingTexts: Record<string, string> = {
    es: 'Conectando el mundo con',
    en: 'Connecting the world with',
    zh: '连接世界与',
    ja: '世界を繋ぐ',
  }

  const isMobile = dimensions <= 320

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth < 768) setDimensions(320); else if (window.innerWidth < 1024) setDimensions(600); else setDimensions(700) }
    handleResize(); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => { if (globeRef.current) globeRef.current.controls().autoRotate = false }, [])
  useEffect(() => { const interval = setInterval(() => setCountryIndex(prev => (prev + 1) % countries.length), 4000); return () => clearInterval(interval) }, [countries.length])
  useEffect(() => { if (globeRef.current && inView) { const target = countries[countryIndex]; globeRef.current.pointOfView({ lat: target.lat, lng: target.lng, altitude: 2 }, 1000) } }, [countryIndex, countries, inView])

  const currentCountry = countries[countryIndex]
  const venezuela = countries[0]

  return (
    <section id="global" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.05),transparent_70%)]"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('global.title')}</span></h2>
          <p className="text-zinc-400 text-lg inline-flex items-center gap-2 flex-wrap justify-center">
            {t('global.subtitle')}{' '}
            <AnimatePresence mode="popLayout">
              <motion.span key={countryIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }} className="font-bold" style={{ color: currentCountry.color }}>
                {countryNames[currentCountry.id]?.[lang] || currentCountry.name}
              </motion.span>
            </AnimatePresence>
          </p>
        </motion.div>

        <div className="flex justify-center pointer-events-none cursor-default">
          <Globe
            ref={globeRef} width={dimensions} height={dimensions} globeImageUrl="/images/earth.jpg" backgroundColor="rgba(0,0,0,0)" atmosphereColor="#0066FF" atmosphereAltitude={0.15}
            pointsData={countries} pointLat="lat" pointLng="lng" pointColor="color" pointAltitude={(d: any) => d.size * 0.05} pointRadius={(d: any) => d.size * 0.5}
            arcsData={currentCountry.id !== 've' ? [{ startLat: venezuela.lat, startLng: venezuela.lng, endLat: currentCountry.lat, endLng: currentCountry.lng }] : []} arcColor={() => '#0066FF'} arcDashLength={0.1} arcDashGap={0.05} arcDashAnimateTime={3000} arcStroke={1}
            htmlElementsData={[{ lat: currentCountry.lat, lng: currentCountry.lng, name: countryNames[currentCountry.id]?.[lang] || currentCountry.name, color: currentCountry.color, text: connectingTexts[lang] || connectingTexts.es }]}
            htmlElement={(d: any) => {
              const el = document.createElement('div')
              const padding = isMobile ? '6px 10px' : '10px 16px'
              const fontSize = isMobile ? '10px' : '13px'
              const strongSize = isMobile ? '13px' : '18px'
              const borderRadius = isMobile ? '8px' : '12px'
              el.innerHTML = `<div style="background: rgba(10,10,10,0.9); border: 2px solid ${d.color}; padding: ${padding}; border-radius: ${borderRadius}; color: white; backdrop-filter: blur(8px); box-shadow: 0 4px 20px rgba(0,0,0,0.6); transform: translate(-50%, -50%); text-align: center; white-space: nowrap;"><span style="color: #9CA3AF; font-size: ${fontSize}; display: block; margin-bottom: 4px;">${d.text}</span><strong style="color: ${d.color}; font-size: ${strongSize};">${d.name}</strong></div>`
              return el
            }}
          />
        </div>
      </div>
    </section>
  )
}
