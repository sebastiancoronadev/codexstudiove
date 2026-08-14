import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export default function StatsCounter() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const stats = [
    { value: 100, suffix: '+', label: t('stats.projects'), color: '#FF007F', glow: 'rgba(255,0,127,0.3)' },
    { value: 5, suffix: '+', label: t('stats.experience'), color: '#FF6B00', glow: 'rgba(255,107,0,0.3)' },
    { value: 100, suffix: '+', label: t('stats.clients'), color: '#00F0FF', glow: 'rgba(0,240,255,0.3)' },
    { value: 24, suffix: '/7', label: t('stats.support'), color: '#FFD700', glow: 'rgba(255,215,0,0.3)' },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  color: stat.color,
                  textShadow: `0 0 30px ${stat.glow}, 0 0 60px ${stat.glow}`
                }}
              >
                {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
              </div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}
