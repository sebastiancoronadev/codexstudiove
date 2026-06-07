import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function PaymentMethods() {
  const { t } = useLanguage();

  const methods = [
    { name: 'Visa', file: 'visa.png' },
    { name: 'Mastercard', file: 'mastercard.png' },
    { name: 'American Express', file: 'american-express.png' },
    { name: 'Discover', file: 'discover.png' },
    { name: 'Diners Club', file: 'diners-club.png' },
    { name: 'PayPal', file: 'paypal.png' },
    { name: 'Binance', file: 'binance.png' },
    { name: 'Apple Pay', file: 'applepay.png' },
    { name: 'Google Pay', file: 'googlepay.png' },
    { name: 'Banesco', file: 'banesco.png' },
    { name: 'BNC', file: 'bnc.png' },
    { name: 'Zinli', file: 'zinli.png' },
    { name: 'Brubank', file: 'brubank.png' }
  ];

  // duplicate array to allow infinite seamless scroll
  const scrollItems = [...methods, ...methods];
  const scrollItemsReverse = [...[...methods].reverse(), ...[...methods].reverse()];

  return (
    <section id="payments" className="py-20 bg-[#0A0A0A] border-t border-gray-900 border-b relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {t('payments.title')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-sans">{t('payments.subtitle')}</p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Gradients to fade left and right edge */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-col gap-6">
          {/* Row 1 (moving left) */}
          <div className="flex w-max animate-marquee">
            {scrollItems.map((item, idx) => (
              <div key={`r1-${idx}`} className="pr-6 md:pr-8">
                <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 sm:p-4 transition-all relative overflow-hidden group">
                  <img src={`/payments/${item.file}`} alt={item.name} className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (moving right) */}
          <div className="flex w-max animate-marquee-reverse">
            {scrollItemsReverse.map((item, idx) => (
              <div key={`r2-${idx}`} className="pr-6 md:pr-8">
                <div className="w-24 h-16 md:w-32 md:h-20 shrink-0 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 sm:p-4 transition-all relative overflow-hidden group">
                  <img src={`/payments/${item.file}`} alt={item.name} className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
