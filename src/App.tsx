import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Faq from './pages/Faq';
import MouseLight from './components/ui/MouseLight';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Route transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    // Only trigger loading effect if it's not the first render
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length && (navEntries[0] as PerformanceNavigationTiming).type === "navigate") {
       // Is navigate
    }
    
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          >
            <div className="w-12 h-12 border-[3px] border-[#333] border-t-[#FF007F] rounded-full animate-spin mb-6"></div>
            <motion.div 
               animate={{ opacity: [0.5, 1, 0.5] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
               className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-[#FF007F]"
            >
              {t && typeof t === 'function' && t('loading') ? t('loading') : 'Cargando'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow w-full"
      >
        {children}
      </motion.div>
    </>
  );
};

// Global back to top floating button
const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#FF007F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF0000] hover:-translate-y-1 transition-all z-50 text-white"
      aria-label="Volver arriba"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  ) : null;
};

const SyncLanguageWithUrl = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  
  React.useEffect(() => {
    if (pathname.startsWith('/en')) {
      if (language !== 'en') setLanguage('en');
    } else if (pathname.startsWith('/zh')) {
      if (language !== 'zh') setLanguage('zh');
    } else {
      // If it's a bare route like / or /faq, 
      // we assume it is the default language (Spanish) ONLY IF it's their first hit
      // But it's safer to just let the existing language state (or localStorage) take effect.
      // However for strict SEO, if they hit bare URL directly, it should be Spanish.
      // We will only force update if the language is not set to 'es' but they navigate intentionally to '/'.
      // Better to check if they clicked a raw link. Let's just leave it, user state handles better.
    }
  }, [pathname, language, setLanguage]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <SyncLanguageWithUrl />
        <div className="flex flex-col min-h-screen">
          <div className="bg-grid"></div>
          <MouseLight />
          <Header />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/en" element={<Home />} />
                <Route path="/zh" element={<Home />} />
                
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/en/terminos" element={<Terminos />} />
                <Route path="/zh/terminos" element={<Terminos />} />
                
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/en/privacidad" element={<Privacidad />} />
                <Route path="/zh/privacidad" element={<Privacidad />} />
                
                <Route path="/faq" element={<Faq />} />
                <Route path="/en/faq" element={<Faq />} />
                <Route path="/zh/faq" element={<Faq />} />
              </Routes>
            </PageTransition>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
}
