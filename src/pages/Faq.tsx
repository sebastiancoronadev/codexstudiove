import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const faqsEs = [
  {
    category: "General",
    questions: [
      { q: "Qué servicios ofrece", a: "Ofrecemos desarrollo web profesional, edición de video con DaVinci Resolve, y configuración avanzada de servidores Discord y Minecraft." },
      { q: "Cómo inicio un proyecto", a: "Simplemente llena nuestro formulario de contacto detallando tu idea y nos pondremos en contacto contigo con un presupuesto." },
      { q: "Tiempo de respuesta", a: "Nuestro tiempo de respuesta habitual es de 24 a 48 horas tras recibir la solicitud." },
      { q: "Soporte post-proyecto", a: "Incluimos 30 días de soporte técnico gratuito después de la entrega final para resolver cualquier incidencia." }
    ]
  },
  {
    category: "Desarrollo Web",
    questions: [
      { q: "Tecnologías", a: "Trabajamos con HTML5, CSS3, JavaScript, React, Vue, Angular, Node.js, PHP y Python." },
      { q: "Tiempos", a: "Dependiendo de la complejidad, un proyecto web puede tomar desde 3 días para páginas simples hasta 3 meses para plataformas completas." },
      { q: "Hosting/dominio", a: "No están incluidos en el precio base, pero brindamos asesoría completa para su contratación y configuración." },
      { q: "Responsividad", a: "Sí, todos nuestros sitios están optimizados para dispositivos móviles, tablets y pc (Mobile First)." }
    ]
  },
  {
    category: "Edición de Video",
    questions: [
      { q: "Software", a: "Utilizamos software profesional de la industria: DaVinci Resolve." },
      { q: "Formatos", a: "Podemos trabajar y exportar en MP4, MOV, AVI y cualquier formato que requiera tu plataforma destino." },
      { q: "Efectos especiales", a: "Sí, incluimos transiciones creativas, chroma key y composición de efectos visuales (VFX)." },
      { q: "Plataformas", a: "Optimizamos el video para YouTube, TikTok, Instagram Reels, entre otras." }
    ]
  },
  {
    category: "Discord",
    questions: [
      { q: "Configuración", a: "Incluye canales estructurados, roles jerárquicos, permisos seguros, bots y sistemas de seguridad." },
      { q: "Bots personalizados", a: "Sí, desarrollamos e integramos bots personalizados según las necesidades de tu comunidad." },
      { q: "Mantenimiento", a: "Ofrecemos contratos de mantenimiento a largo plazo para tu comunidad Discord." },
      { q: "Tiempo", a: "Desde 1-2 días para configuraciones básicas, hasta 2 semanas para servidores avanzados." }
    ]
  },
  {
    category: "Minecraft",
    questions: [
      { q: "Tipos de servidores", a: "Configuramos servidores Survival, Minijuegos, Roleplay y Networks completas." },
      { q: "Plugins", a: "Dominamos la configuración de EssentialsX, WorldEdit, LuckPerms, Vault, y creación de Skripts personalizados." },
      { q: "Optimización alto tráfico", a: "Sí, optimizamos servidores para manejar +50 jugadores concurrentes sin lag." },
      { q: "Modpacks personalizados", a: "Sí, armamos modpacks en Forge o Fabric gestionando todas las dependencias y compatibilidad." }
    ]
  },
  {
    category: "Pagos y Precios",
    questions: [
      { q: "Precios", a: "Nuestros costos base son: Web desde $200, Video desde $50, Discord desde $100, Minecraft desde $150, Bots desde $200 y Modpacks desde $300." },
      { q: "Métodos de pago", a: "Aceptamos PayPal, Binance, transferencias locales y Zelle." },
      { q: "Depósito", a: "Requerimos un 50% de adelanto para comenzar a trabajar." },
      { q: "Reembolsos", a: "Contamos con una política de reembolsos estructurada. Revisa nuestros Términos y Condiciones para más información." }
    ]
  }
];

const faqsEn = [
  {
    category: "General",
    questions: [
      { q: "What services do you offer?", a: "We offer professional web development, video editing, and server configuration for Discord and Minecraft." },
      { q: "How do I start a project?", a: "Fill out our form and we will reach out with a quote." },
      { q: "Response time?", a: "Our usual response time is 24 to 48 hours." },
      { q: "Post-project support?", a: "We include 30 days of free technical support after final delivery." }
    ]
  },
  {
    category: "Web Development",
    questions: [
      { q: "Technologies?", a: "We work with HTML, CSS, JavaScript, React, Vue, Angular, Node.js, PHP and Python." },
      { q: "Timelines?", a: "A web project can take from 3 days for simple sites to 3 months for full platforms." },
      { q: "Hosting/domain?", a: "Not included in the base price, but we provide setup advisory." },
      { q: "Responsiveness?", a: "Yes, all sites are mobile optimized." }
    ]
  },
  {
    category: "Video Editing",
    questions: [
      { q: "Software?", a: "We use professional software: DaVinci Resolve." },
      { q: "Formats?", a: "We can work and export in MP4, MOV, AVI." },
      { q: "Special effects?", a: "Yes, we include creative transitions and VFX." },
      { q: "Platforms?", a: "We optimize video for YouTube, TikTok, Reels." }
    ]
  },
  {
    category: "Discord",
    questions: [
      { q: "Configuration?", a: "Includes structured channels, roles, and security bots." },
      { q: "Custom bots?", a: "Yes, we develop custom bots." },
      { q: "Maintenance?", a: "We offer long-term maintenance contracts." },
      { q: "Time?", a: "From 1 day for basic setups to 2 weeks for advanced." }
    ]
  },
  {
    category: "Minecraft",
    questions: [
      { q: "Server types?", a: "We setup Survival, Minigames, Roleplay and Networks." },
      { q: "Plugins", a: "We master EssentialsX, LuckPerms, Vault, and custom Skripts." },
      { q: "High traffic optimization?", a: "Yes, we optimize servers to handle 50+ concurrent players lag-free." },
      { q: "Custom Modpacks?", a: "Yes, we build modpacks in Forge or Fabric." }
    ]
  },
  {
    category: "Payments and Pricing",
    questions: [
      { q: "Pricing", a: "Web from $200, Video from $50, Discord from $100, Minecraft from $150." },
      { q: "Payment methods", a: "We accept PayPal, Binance, transfers and Zelle." },
      { q: "Deposit", a: "We require a 50% upfront payment." },
      { q: "Refunds", a: "We have a structured refund policy (see Terms)." }
    ]
  }
];

const faqsZh = [
  {
    category: "一般问题",
    questions: [
      { q: "提供什么服务？", a: "我们提供网页开发、视频剪辑以及Discord和Minecraft服务器配置。" },
      { q: "如何启动项目？", a: "填写联系表，我们将提供报价。" },
      { q: "响应时间？", a: "通常是24至48小时。" },
      { q: "项目后支持？", a: "交付后包含30天的免费技术支持。" }
    ]
  },
  {
    category: "网页开发",
    questions: [
      { q: "技术？", a: "我们使用React, Vue, Node.js, PHP, Python等。" },
      { q: "时间跨度？", a: "简单网站3天即可，复杂平台需3个月。" },
      { q: "域名/主机？", a: "不包括，但我们可以协助购买。" },
      { q: "响应式设计？", a: "是的，完全支持移动端。" }
    ]
  },
  {
    category: "视频剪辑",
    questions: [
      { q: "软件？", a: "由于专业原因，使用DaVinci Resolve。" },
      { q: "格式？", a: "支持各种主流格式。" },
      { q: "特效？", a: "包含过渡效果与绿幕等。" },
      { q: "适用平台？", a: "短视频平台如TikTok及YouTube皆可。" }
    ]
  },
  {
    category: "Discord",
    questions: [
      { q: "内容包含？", a: "结构化频道、安全机器设置和权限。" },
      { q: "自定义机器人？", a: "是的，可深度定制。" },
      { q: "长期维护？", a: "我们提供长期合约。" },
      { q: "需要多久？", a: "从1天到2周不等。" }
    ]
  },
  {
    category: "Minecraft",
    questions: [
      { q: "服务器类型？", a: "生存服、小游戏服与大型网络群组服。" },
      { q: "插件？", a: "我们精通各大流行插件及配置。" },
      { q: "承载人数优化？", a: "是的，百人顺畅运行优化。" },
      { q: "模组整合包？", a: "提供Fabric及Forge专业整合包制作。" }
    ]
  },
  {
    category: "定价与付款",
    questions: [
      { q: "价格", a: "网页$200起，视频$50起，Discord $100起，Minecraft $150起。" },
      { q: "支持什么付款方式？", a: "PayPal, Binance, Zelle及地方转账。" },
      { q: "定金？", a: "开始需要支付50%。" },
      { q: "退款？", a: "是的，详见服务条款。" }
    ]
  }
];

export default function Faq() {
  const { language } = useLanguage();
  const faqs = language === 'en' ? faqsEn : language === 'zh' ? faqsZh : faqsEs;
  const titleText = language === 'en' ? 'Frequently Asked Questions' : language === 'zh' ? '常见问题解答' : 'Preguntas Frecuentes';
  const subtitleText = language === 'en' ? 'Find quick answers to your questions about our services.' : language === 'zh' ? '找到关于我们服务的快速解答。' : 'Encuentra respuestas rápidas a tus dudas sobre nuestros servicios.';
  const searchPlaceholderText = language === 'en' ? 'Search questions...' : language === 'zh' ? '搜索问题...' : 'Buscar preguntas...';
  const noMatchText = language === 'en' ? 'No results found for' : language === 'zh' ? '未找到结果:' : 'No se encontraron resultados para';
  const backBtnText = language === 'en' ? 'Back to Web' : language === 'zh' ? '返回主页' : 'Volver a la Web';

  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return faqs;
    const lowerSearch = searchTerm.toLowerCase();
    
    return faqs.map(category => {
      const filteredQuestions = category.questions.filter(
        q => q.q.toLowerCase().includes(lowerSearch) || q.a.toLowerCase().includes(lowerSearch)
      );
      return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);
  }, [searchTerm, language]);

  const toggleAccordion = (id: string) => {
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };

  const seoData = {
    es: {
      title: "Preguntas Frecuentes FAQ | Codex",
      description: "Preguntas frecuentes sobre los servicios de desarrollo web, edición de video y más de Codex."
    },
    en: {
      title: "Frequently Asked Questions FAQ | Codex",
      description: "Frequently asked questions about Codex web development, video editing, and other services."
    },
    zh: {
      title: "常见问题 FAQ | Codex",
      description: "关于 Codex Web 开发、视频编辑和其他服务的常见问题解答。"
    }
  };

  const currentSeo = seoData[language as keyof typeof seoData] || seoData.es;

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8 min-h-screen">
      <SEO 
        title={currentSeo.title}
        description={currentSeo.description}
        lang={language}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF007F] text-center">{titleText}</h1>
      <p className="text-center text-gray-400 mb-12 text-lg">{subtitleText}</p>

      <div className="mb-12 relative">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input 
          type="text" 
          placeholder={searchPlaceholderText}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#111111] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#FF007F] transition-colors"
        />
      </div>

      <div className="space-y-12">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={qIdx} className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden transition-all">
                      <button 
                        onClick={() => toggleAccordion(id)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1A1A1A] transition-colors"
                      >
                        <span className="font-medium text-lg">{faq.q}</span>
                        <i className={`fas fa-chevron-down shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#FF007F]' : 'text-gray-500'}`}></i>
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 ease-in-out px-6 overflow-hidden`}
                        style={{ maxHeight: isOpen ? '500px' : '0px', paddingBottom: isOpen ? '16px' : '0px', paddingTop: isOpen ? '8px' : '0px' }}
                      >
                        <p className="text-gray-400 border-t border-gray-800/50 pt-4">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-12">
            {noMatchText} "{searchTerm}"
          </div>
        )}
      </div>

      <div className="mt-20 text-center">
        <Link to="/" className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">
          {backBtnText}
        </Link>
      </div>
    </div>
  );
}
