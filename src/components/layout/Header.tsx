import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isHome = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/zh';

  const scrollToHash = (hash: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (isHome) {
        if (hash === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80; // height of the fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      } else {
        let newPath = '/';
        if (location.pathname.startsWith('/en')) newPath = '/en';
        if (location.pathname.startsWith('/zh')) newPath = '/zh';
        navigate(newPath + '#' + hash);
      }
    }, 50);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
    
    // Determine base path by stripping current language prefix
    let basePath = location.pathname;
    if (basePath.startsWith('/en')) {
      basePath = basePath.replace('/en', '') || '/';
    } else if (basePath.startsWith('/zh')) {
      basePath = basePath.replace('/zh', '') || '/';
    }

    if (lang === 'es') {
      navigate(basePath + location.hash);
    } else {
      let newPath = `/${lang}${basePath === '/' ? '' : basePath}`;
      navigate(newPath + location.hash);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <img src="https://ik.imagekit.io/phqg3onxg/1001187949-1.png?updatedAt=1771257135536" alt="Codex Logo" className="h-10 w-auto" />
        </Link>
        
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <>
              <button onClick={() => scrollToHash('home')} className="hover:text-[#FF6B00] transition-colors">{t('nav.home')}</button>
              <button onClick={() => scrollToHash('cta')} className="hover:text-[#FF6B00] transition-colors">{t('nav.services')}</button>
              <button onClick={() => scrollToHash('payments')} className="hover:text-[#FF6B00] transition-colors">{t('payments.title')}</button>
              <button onClick={() => scrollToHash('contact')} className="hover:text-[#FF6B00] transition-colors">{t('nav.make_web')}</button>
              <button onClick={() => scrollToHash('contact')} className="bg-gradient-to-r from-[#FF007F] to-[#FF0000] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90">{t('nav.contact')}</button>
            </>

          <div className="relative group cursor-pointer w-10 h-10">
            <div className="w-full h-full rounded-md border border-gray-700 group-hover:border-[#FF007F] flex items-center justify-center transition-colors bg-[#111]">
              <img src="/icons/web-traduccion.svg" className="w-[24px] h-[24px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} alt="translate" />
            </div>
            
            <div className="absolute top-[120%] right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#111] border border-gray-700 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex flex-col w-28 overflow-hidden z-[100]">
              <button 
                onClick={() => changeLanguage('es')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'es' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                Español
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'en' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => changeLanguage('zh')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'zh' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                中文
              </button>
            </div>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <div className="relative group cursor-pointer w-10 h-10">
            <div className="w-full h-full rounded-md border border-gray-700 bg-[#111] flex items-center justify-center transition-colors group-hover:border-[#FF007F]">
              <img src="/icons/web-traduccion.svg" className="w-[24px] h-[24px] object-contain pointer-events-none" style={{ filter: 'brightness(0) invert(1)' }} alt="translate" />
            </div>
            
            <div className="absolute top-[120%] right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#111] border border-gray-700 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex flex-col w-28 overflow-hidden z-[100]">
              <button 
                onClick={() => changeLanguage('es')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'es' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                Español
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'en' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => changeLanguage('zh')}
                className={`px-4 py-2 text-left text-sm hover:bg-[#222] transition-colors ${language === 'zh' ? 'text-[#FF007F] font-bold' : 'text-white'}`}
              >
                中文
              </button>
            </div>
          </div>
          <motion.button 
            onClick={toggleMobileMenu} 
            className="w-10 h-10 flex flex-col justify-center items-center gap-[6px] text-white bg-white/5 rounded-full border border-white/10 relative overflow-hidden" 
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span 
              className="w-5 h-[2px] bg-white rounded-full block origin-center"
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            ></motion.span>
            <motion.span 
              className="w-5 h-[2px] bg-white rounded-full block origin-center"
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            ></motion.span>
            <motion.span 
              className="w-5 h-[2px] bg-white rounded-full block origin-center"
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            ></motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
          >
            {[
              { id: 'home', labelKey: 'nav.home' },
              { id: 'cta', labelKey: 'nav.services' },
              { id: 'payments', labelKey: 'payments.title' },
              { id: 'contact', labelKey: 'nav.contact' }
            ].map((item, idx) => (
              <motion.button 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollToHash(item.id)} 
                className="text-left text-lg py-2 border-b border-white/5 text-gray-300 hover:text-white hover:bg-white/5 px-4 rounded-lg transition-all flex items-center justify-between"
              >
                {t(item.labelKey)}
                <i className="fas fa-chevron-right text-xs opacity-50"></i>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

