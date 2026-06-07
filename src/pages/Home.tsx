import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/AboutUs";
import VideoEditing from "../components/sections/VideoEditing";
import Technologies from "../components/sections/Technologies";
import Testimonials from "../components/sections/Testimonials";
import Trust from "../components/sections/Trust";
import CallToAction from "../components/sections/CallToAction";
import PaymentMethods from "../components/sections/PaymentMethods";
import SecurePayments from "../components/sections/SecurePayments";
import GlobalPresence from "../components/sections/GlobalPresence";
import Contact from "../components/sections/Contact";
import SEO from "../components/SEO";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    // Scroll handling for hashes if needed
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const seoData = {
    es: {
      title: "Programador Fullstack | React, Three.js | Valencia Venezuela",
      description: "Desarrollador Fullstack en Valencia, Venezuela. Especializado en React, Three.js, Tailwind y soluciones web de alto rendimiento."
    },
    en: {
      title: "Fullstack Developer | React, Three.js | Valencia Venezuela",
      description: "Fullstack Developer based in Valencia, Venezuela. Specialized in React, Three.js, Tailwind and high-performance web solutions."
    },
    zh: {
      title: "全栈开发人员 | React, Three.js | 委内瑞拉巴伦西亚",
      description: "基于委内瑞拉巴伦西亚的全栈开发人员。专注于 React、Three.js、Tailwind 和高性能 Web 解决方案。"
    }
  };

  const currentSeo = seoData[language as keyof typeof seoData] || seoData.es;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={currentSeo.title}
        description={currentSeo.description}
        lang={language}
      />
      <Hero />
      <Services />
      <Technologies />
      <AboutUs />
      <VideoEditing />
      <Testimonials />
      <Trust />
      <PaymentMethods />
      <SecurePayments />
      <GlobalPresence />
      <CallToAction />
      <Contact />
    </div>
  );
}
