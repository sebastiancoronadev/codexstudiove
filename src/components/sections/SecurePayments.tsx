import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const cards = [
  { id: 7, name: 'BNC', orientation: 'vertical', background: '/images/cards/bnc-tarjeta.png' },
  { id: 1, name: 'Visa', orientation: 'horizontal', background: '/images/cards/visa-tarjeta.png' },
  { id: 2, name: 'Mastercard', orientation: 'horizontal', background: '/images/cards/mastercard-tarjeta.png' },
  { id: 3, name: 'Binance', orientation: 'horizontal', background: '/images/cards/binance-tarjeta.png' },
  { id: 4, name: 'Banesco', orientation: 'horizontal', background: '/images/cards/banesco-vzla-debito.png' },
  { id: 5, name: 'Brubank', orientation: 'vertical', background: '/images/cards/brubank-tarjeta.png' },
  { id: 6, name: 'Zinli', orientation: 'vertical', background: '/images/cards/zinli-tarjeta.png' },
]

const words = [
  { text: 'compras seguras.', color: '#FF6B00' },
  { text: 'total garantia.', color: '#FF007F' },
  { text: 'privacidad protegida.', color: '#00F0FF' },
  { text: 'respaldo constante.', color: '#FFFFFF' },
  { text: 'procesos protegidos.', color: '#FF6B00' },
]

export default function SecurePayments() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const wordTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    wordTimer.current = setInterval(() => setWordIndex(prev => (prev + 1) % words.length), 2500)
    return () => { if (wordTimer.current) clearInterval(wordTimer.current) }
  }, [])

  const paginate = useCallback((dir: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActive(prev => { let next = prev + dir; if (next < 0) next = cards.length - 1; if (next >= cards.length) next = 0; return next })
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const getPos = (index: number) => {
    const total = cards.length
    let offset = index - active
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total
    const isActive = offset === 0
    const isH = cards[index].orientation === 'horizontal'
    const w = isH ? 360 : 220; const h = isH ? 220 : 360
    return { offset, isActive, w, h, x: offset * 220, z: isActive ? 0 : -Math.abs(offset) * 150, rotateY: offset * -25, scale: isActive ? 1.05 : 1 - Math.abs(offset) * 0.15, opacity: isActive ? 1 : 0.35, zIndex: 10 - Math.abs(offset) }
  }

  return (
    <section id="secure" className="relative py-24 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[800px] h-[500px] bg-gradient-to-r from-[#FF007F]/10 via-transparent to-[#00F0FF]/10 blur-[120px]"></div></div>
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">{t('secure.title')}</h2>
          <div className="text-lg md:text-xl text-gray-400 w-full flex flex-col md:flex-row items-center justify-center gap-x-2 gap-y-1">
            <span className="whitespace-nowrap">{t('secure.subtitle')} </span>
            <span className="relative inline-block" style={{ width: '210px', height: '32px' }}>
              <AnimatePresence mode="popLayout">
                <motion.span key={wordIndex} initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -25, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="absolute inset-0 flex items-center font-semibold whitespace-nowrap" style={{ color: words[wordIndex].color }}>{words[wordIndex].text}</motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <div className="relative h-[300px] sm:h-[380px] md:h-[450px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          <button onClick={() => paginate(-1)} className="absolute left-2 md:left-0 z-50 w-12 h-12 md:w-14 md:h-14 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-110 active:scale-95 transition-all" style={{ pointerEvents: 'auto' }}><i className="fa-solid fa-chevron-left"></i></button>
          <button onClick={() => paginate(1)} className="absolute right-2 md:right-0 z-50 w-12 h-12 md:w-14 md:h-14 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-110 active:scale-95 transition-all" style={{ pointerEvents: 'auto' }}><i className="fa-solid fa-chevron-right"></i></button>

          <div className="relative flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100 origin-center" style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
            {cards.map((card, index) => {
              const pos = getPos(index)
              const isActive = pos.isActive
              const isHovered = hoveredCard === index
              return (
                <motion.div key={card.id} className="absolute" style={{ width: pos.w + 'px', height: pos.h + 'px', left: '50%', top: '50%', marginLeft: -(pos.w / 2) + 'px', marginTop: -(pos.h / 2) + 'px' }}
                  animate={{ x: pos.x, z: pos.z, rotateY: pos.rotateY, scale: pos.scale, opacity: pos.opacity, zIndex: pos.zIndex }} transition={{ duration: 0.5, ease: 'easeInOut' }}
                  onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}
                >
                  <Tilt tiltMaxAngleX={isActive || isHovered ? 15 : 0} tiltMaxAngleY={isActive || isHovered ? 15 : 0} scale={1} transitionSpeed={2500} glareEnable={isActive || isHovered} glareMaxOpacity={isActive ? 0.25 : isHovered ? 0.15 : 0} glareColor="#ffffff" glarePosition="all" glareBorderRadius="16px" className="w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="relative w-full h-full rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="absolute inset-0 rounded-2xl bg-white/10 [transform:translateZ(-1px)] pointer-events-none" /><div className="absolute inset-0 rounded-2xl bg-white/10 [transform:translateZ(-2px)] pointer-events-none" /><div className="absolute inset-0 rounded-2xl bg-white/10 [transform:translateZ(-3px)] pointer-events-none" /><div className="absolute inset-0 rounded-2xl bg-[#090909] border border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.8)] [transform:translateZ(-4px)] pointer-events-none" />
                      <div className="absolute inset-0 rounded-2xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${card.background})` }}>
                        {!isActive && !isHovered && <div className="absolute inset-0 bg-black/60 rounded-2xl" />}
                        {card.id === 7 && (<><div className="absolute inset-0 bg-black/5 rounded-2xl" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute top-10 right-[30px] w-10 h-8 object-contain rotate-90 rounded-[5px]" /><img src="/images/card-textures/bnc-texture.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 object-contain brightness-0 invert" /><img src="/images/card-textures/conection-texture.png" alt="" className="absolute bottom-6 left-6 w-8 h-8 object-contain rotate-90 opacity-80" /><img src="/images/card-textures/mastercard-texture.png" alt="" className="absolute bottom-6 right-6 w-12 h-8 object-contain" /></>)}
                        {card.id === 1 && (<><img src="/images/card-textures/conection-texture.png" alt="" className="absolute top-[calc(48%-35px)] left-4 -translate-y-1/2 w-11 h-11 object-contain rotate-90 opacity-80" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute top-[calc(48%-35px)] left-[65px] -translate-y-1/2 w-12 h-9 object-contain rounded-[5px]" style={{ filter: 'grayscale(100%) brightness(1.3) contrast(1.2)', opacity: 0.9 }} /><img src="/images/card-textures/visa-texture.png" alt="" className="absolute bottom-6 right-6 w-20 object-contain brightness-0 invert opacity-90" /></>)}
                        {card.id === 2 && (<><img src="/images/card-textures/conection-texture.png" alt="" className="absolute top-6 right-6 w-11 h-11 object-contain rotate-90 opacity-80" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute top-[calc(45%-50px)] left-8 w-12 h-9 object-contain rounded-[5px]" style={{ filter: 'grayscale(100%) brightness(1.3) contrast(1.2)', opacity: 0.9 }} /><img src="/images/card-textures/mastercard-texture.png" alt="" className="absolute bottom-6 right-6 w-20 object-contain drop-shadow-md" /></>)}
                        {card.id === 3 && (<><div className="absolute top-[15px] left-[36px] w-36 h-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #a6acb0 40%, #686e73 50%, #ccd1d4 100%)', maskImage: 'url(/images/card-textures/binance-texture.png)', WebkitMaskImage: 'url(/images/card-textures/binance-texture.png)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }} /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute top-[65px] left-8 w-12 h-9 object-contain rounded-[5px]" style={{ filter: 'grayscale(100%) brightness(1.3) contrast(1.2)', opacity: 0.9 }} /><div className="absolute bottom-3 right-6 w-20 h-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #a6acb0 40%, #686e73 50%, #ccd1d4 100%)', maskImage: 'url(/images/card-textures/visa-texture.png)', WebkitMaskImage: 'url(/images/card-textures/visa-texture.png)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }} /></>)}
                        {card.id === 4 && (<><img src="/images/card-textures/banesco-texture.png" alt="" className="absolute top-[2.5px] left-[19px] w-40 object-contain drop-shadow-md" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute top-[calc(35%-20px)] left-8 w-12 h-9 object-contain rounded-[5px]" /><img src="/images/card-textures/mastercard-texture.png" alt="" className="absolute bottom-6 right-6 w-14 h-9 object-contain" /></>)}
                        {card.id === 5 && (<><div className="absolute inset-0 overflow-hidden rounded-2xl"><img src={card.background} alt="" className="absolute object-cover rotate-90 scale-[1.1]" style={{ minWidth: '330px', minHeight: '330px', marginLeft: '-58px', marginTop: '11px' }} /></div><div className="absolute inset-0 bg-black/5 rounded-2xl" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute bottom-[285px] right-[60px] w-10 h-8 object-contain rotate-90 rounded-[5px]" style={{ filter: 'grayscale(100%) brightness(1.3) contrast(1.2)', opacity: 0.9 }} /><div className="absolute bottom-[285px] right-[30px] w-8 h-8 rotate-90" style={{ backgroundColor: 'white', maskImage: 'url(/images/card-textures/conection-texture.png)', WebkitMaskImage: 'url(/images/card-textures/conection-texture.png)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} /><img src="/images/card-textures/brubank-texture.png" alt="" className="absolute bottom-4 left-4 w-24 object-contain brightness-0 invert drop-shadow-md" /><img src="/images/card-textures/visa-texture.png" alt="" className="absolute bottom-4 right-4 w-16 object-contain brightness-0 invert opacity-90" /></>)}
                        {card.id === 6 && (<><div className="absolute inset-0 bg-black/5 rounded-2xl" /><img src="/images/card-textures/zinli-texture.png" alt="" className="absolute bottom-[205px] left-5 w-32 object-contain drop-shadow-md" /><img src="/images/card-textures/chip-texture.png" alt="" className="absolute bottom-[285px] right-[60px] w-10 h-8 object-contain rotate-90 rounded-[5px]" style={{ filter: 'grayscale(100%) brightness(1.3) contrast(1.2)', opacity: 0.9 }} /><div className="absolute bottom-[285px] right-[30px] w-8 h-8 rotate-90" style={{ backgroundColor: '#32cd96', maskImage: 'url(/images/card-textures/conection-texture.png)', WebkitMaskImage: 'url(/images/card-textures/conection-texture.png)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} /><img src="/images/card-textures/visa-texture.png" alt="" className="absolute bottom-4 right-4 w-20 object-contain brightness-0 invert opacity-90" /></>)}
                      </div>
                  </Tilt>
                </motion.div>
              )
            })}
          </div>

        <div className="flex justify-center items-center gap-3 mt-6">
          {cards.map((_, index) => (
            <button key={index} onClick={() => { if (!isAnimating) setActive(index) }} className={`h-2.5 rounded-full transition-all duration-300 ${index === active ? 'bg-[#FF007F] w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} style={{ pointerEvents: 'auto' }} />
          ))}
        </div>
    </section>
  )
}
