import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const paymentMethods = [
  { name: 'Visa', logo: '/images/payments/visa.png' },
  { name: 'Mastercard', logo: '/images/payments/mastercard.png' },
  { name: 'American Express', logo: '/images/payments/american-express.png' },
  { name: 'Discover', logo: '/images/payments/discover.png' },
  { name: 'Diners Club', logo: '/images/payments/diners-club.png' },
  { name: 'PayPal', logo: '/images/payments/paypal.png' },
  { name: 'Binance', logo: '/images/payments/binance.png' },
  { name: 'Apple Pay', logo: '/images/payments/applepay.png' },
  { name: 'Google Pay', logo: '/images/payments/googlepay.png' },
  { name: 'Banesco', logo: '/images/payments/banesco.png' },
  { name: 'BNC', logo: '/images/payments/bnc.png' },
  { name: 'Zinli', logo: '/images/payments/zinli.png' },
  { name: 'Brubank', logo: '/images/payments/brubank.png' }
]

const duplicatedRow1 = [...paymentMethods, ...paymentMethods, ...paymentMethods]
const duplicatedRow2 = [...paymentMethods, ...paymentMethods, ...paymentMethods].reverse()

export default function PaymentMethods() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="payment" className="relative py-24 bg-black overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{t('payment.title')}</span>
          </h2>
          <p className="text-zinc-400 text-lg">{t('payment.subtitle')}</p>
        </motion.div>

        <div className="relative mb-8 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}>
          <div className="flex gap-8" style={{ animation: 'marquee 20s linear infinite' }}>
            {duplicatedRow1.map((method, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3">
                <img src={method.logo} alt={method.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

        <div className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}>
          <div className="flex gap-8" style={{ animation: 'marquee 20s linear infinite', animationDirection: 'reverse' }}>
            {duplicatedRow2.map((method, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3">
                <img src={method.logo} alt={method.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
    </section>
  )
}
