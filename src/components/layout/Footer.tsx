import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const langPrefix = language === 'es' ? '' : `/${language}`;

  return (
    <footer id="footer" className="bg-[#0A0A0A] border-t border-gray-900 pt-16 pb-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <p className="text-white/70 mb-6 max-w-sm mt-8 mx-auto md:mx-0">
            {t('footer.desc') || 'Transformando Ideas en Realidad Digital. Soluciones web profesionales, optimizadas y de alto rendimiento.'}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#FF007F] transition-colors" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#FF007F] transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#FF007F] transition-colors" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://discord.com/users/793142687858950144" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#5865F2] transition-colors" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">{t('footer.contact')}</h4>
          <ul className="space-y-4">
            <li className="flex items-start justify-center md:justify-start gap-3 group">
              <div 
                className="w-5 h-5 mt-0.5 bg-[#FF007F] shrink-0 transition-colors"
                style={{ WebkitMaskImage: 'url(/icons/web-email-piedepagina.svg)', maskImage: 'url(/icons/web-email-piedepagina.svg)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }}
              />
              <a href="mailto:codex.studio.ve@gmail.com" className="hover:text-[#FF6B00] transition-colors">codex.studio.ve@gmail.com</a>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3 text-white/50 group">
              <div 
                className="w-5 h-5 mt-0.5 bg-[#FF007F] shrink-0 transition-colors"
                style={{ WebkitMaskImage: 'url(/icons/web-telefono-piedepagina.svg)', maskImage: 'url(/icons/web-telefono-piedepagina.svg)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }}
              />
              <span>N/A</span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3 text-white/50 group">
              <div 
                className="w-5 h-5 mt-0.5 bg-[#FF007F] shrink-0 transition-colors"
                style={{ WebkitMaskImage: 'url(/icons/web-ubicacion-piedepagina.svg)', maskImage: 'url(/icons/web-ubicacion-piedepagina.svg)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }}
              />
              <span>Venezuela, Carabobo, Valencia</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">{t('footer.legal')}</h4>
          <ul className="space-y-3">
            <li>
              <Link to={`${langPrefix}/terminos`} className="hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-xs text-[#FF007F]"></i>
                {t('footer.terms')}
              </Link>
            </li>
            <li>
              <Link to={`${langPrefix}/faq`} className="hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-xs text-[#FF007F]"></i>
                {t('footer.faq')}
              </Link>
            </li>
            <li>
              <Link to={`${langPrefix}/privacidad`} className="hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-xs text-[#FF007F]"></i>
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-gray-900 pt-8 flex flex-col items-center justify-center text-sm text-white/50 w-full relative z-10">
        <span className="text-gray-600 block text-center mb-2">© {new Date().getFullYear()} Codex. {t('footer.rights')}</span>
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-400">{t('footer.created')}</span>
          <img src="https://ik.imagekit.io/phqg3onxg/1001187949-1.png?updatedAt=1771257135536" alt="Codex Logo" className="w-12 h-12 object-contain hover:scale-105 transition-transform cursor-pointer -translate-y-1" />
        </div>
      </div>
    </footer>
  );
}
