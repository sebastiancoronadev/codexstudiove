export type Language = 'es' | 'en' | 'zh' | 'ja'

export interface Dictionary {
<<<<<<< HEAD
  nav: { home: string; services: string; payment: string; cta: string; contact: string }
  hero: { title: string; description: string; cta: string; discover: string }
  services: { title: string; subtitle: string; web: { title: string; description: string }; backend: { title: string; description: string }; ux: { title: string; description: string } }
  stats: { projects: string; experience: string; clients: string; support: string }
  specialization: { title: string; subtitle: string }
  about: { title: string; description: string; years: string; projects: string; cvButton: string; githubButton: string }
  video: { title: string; subtitle: string; cta: string; budget: string; reference: string }
  discord: { title: string; subtitle: string }
  minecraft: { title: string; subtitle: string }
  testimonials: { title: string; subtitle: string }
  brands: { title: string; subtitle: string }
  payment: { title: string; subtitle: string }
  secure: { title: string; subtitle: string; features: string[] }
  global: { title: string; subtitle: string }
  ctaSection: { title: string; subtitle: string; buttons: { web: string; video: string; discord: string; minecraft: string } }
  contact: { title: string; subtitle: string; name: string; email: string; phone: string; projectType: string; details: string; submit: string; select: string }
  footer: { description: string; contact: string; email: string; phone: string; location: string; legal: string; terms: string; faq: string; privacy: string; copyright: string }
=======
  nav: {
    home: string
    services: string
    payment: string
    cta: string
    contact: string
  }
  hero: {
    title: string
    description: string
    cta: string
    discover: string
  }
  services: {
    title: string
    subtitle: string
    web: { title: string; description: string }
    backend: { title: string; description: string }
    ux: { title: string; description: string }
  }
  stats: {
    projects: string
    experience: string
    clients: string
    support: string
  }
  specialization: {
    title: string
    subtitle: string
  }
  about: {
    title: string
    description: string
    years: string
    projects: string
    cvButton: string
    githubButton: string
  }
  video: {
    title: string
    subtitle: string
    cta: string
    budget: string
    reference: string
  }
  discord: {
    title: string
    subtitle: string
  }
  minecraft: {
    title: string
    subtitle: string
  }
  testimonials: {
    title: string
    subtitle: string
  }
  brands: {
    title: string
    subtitle: string
  }
  payment: {
    title: string
    subtitle: string
  }
  secure: {
    title: string
    subtitle: string
    features: string[]
  }
  global: {
    title: string
    subtitle: string
  }
  ctaSection: {
    title: string
    subtitle: string
    buttons: {
      web: string
      video: string
      discord: string
      minecraft: string
    }
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    projectType: string
    details: string
    submit: string
  }
  footer: {
    description: string
    contact: string
    email: string
    phone: string
    location: string
    legal: string
    terms: string
    faq: string
    privacy: string
    copyright: string
  }
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
}

export const dictionaries: Record<Language, Dictionary> = {
  es: {
<<<<<<< HEAD
    nav: { home: 'Inicio', services: 'Servicios', payment: 'Métodos de Pago', cta: 'Haz una web', contact: 'Contacto' },
    hero: { title: 'Transformando Ideas en Realidad Digital', description: 'Desarrollo software, aplicaciones web y soluciones tecnológicas personalizadas con amplios conocimientos en la industria. Estrategias digitales que impulsan negocios.', cta: 'Haz una web conmigo', discover: 'Descubre' },
    services: {
      title: 'Servicios Profesionales', subtitle: 'Soluciones integrales de desarrollo adaptadas a las necesidades específicas de tu negocio.',
      web: { title: 'Desarrollo Web', description: 'Sitios web responsivos, aplicaciones web progresivas (PWA) y soluciones e-commerce con las últimas tecnologías.' },
      backend: { title: 'Backend & APIs', description: 'Arquitecturas escalables, APIs RESTful, soluciones de servidor de alto rendimiento y microservicios eficientes.' },
      ux: { title: 'UI/UX Design', description: 'Diseño de interfaces centradas en el usuario, prototipado interactivo y optimización de experiencia de usuario.' }
    },
    stats: { projects: 'Proyectos Completados', experience: 'Años de Experiencia', clients: 'Clientes Satisfechos', support: 'Soporte Técnico' },
    specialization: { title: 'Especialización', subtitle: 'Habilidades de nivel Senior respaldadas por años de experiencia.' },
    about: { title: 'Sebastián Corona', whoweare: '¿Quiénes Somos?', description: 'Soy Sebastián Ernesto Corona Bencomo, un desarrollador, diseñador y estratega digital apasionado por llevar la tecnología al máximo nivel. Detrás de cada solución digital que construyo, busco la excelencia técnica y estética, entregando resultados de alto impacto y calidad para transformar cualquier visión en realidad.', years: 'Años Exp.', projects: 'Proyectos', cvButton: 'Descargar CV de Sebastián Corona', githubButton: 'Ver CV en GitHub (completo)' },
    video: { title: 'Edición de Video', subtitle: 'Edición profesional con DaVinci Resolve - Desde videos simples hasta producciones complejas con efectos impactantes.', cta: 'Edita videos conmigo', budget: 'Solicitar Presupuesto', reference: 'Referencias de videos' },
    discord: { title: 'Configuración de Discord', subtitle: 'Servidores profesionales, seguros y altamente interactivos. Desde comunidades de gaming hasta espacios corporativos con bots a medida.' },
    minecraft: { title: 'Servidores de Minecraft', subtitle: 'Servidores Minecraft profesionales con plugins personalizados, dashboards, modpacks y configuración avanzada.' },
    testimonials: { title: 'Testimonios', subtitle: 'Lo que dicen de nuestro trabajo' },
    brands: { title: 'Por qué ellos confían en nosotros', subtitle: 'Hemos colaborado con grandes marcas y proyectos para llevar sus ideas al siguiente nivel.' },
    payment: { title: 'Métodos de Pago', subtitle: 'Opciones seguras y globales para hacer realidad tu proyecto.' },
    secure: { title: 'Aceptamos tarjetas de crédito y débito', subtitle: 'Tu tranquilidad es lo primero, por eso aquí tienes', features: ['compras seguras.', 'total garantía.', 'privacidad protegida.', 'respaldo constante.', 'procesos protegidos.'] },
    global: { title: 'Tenemos presencia en distintos países', subtitle: 'Conectando al mundo, impulsando el futuro en' },
    ctaSection: { title: 'Haz una web conmigo', subtitle: 'Transforma tu idea en una realidad digital. Aportando una sólida experiencia, garantizo soluciones web profesionales, optimizadas y de alto rendimiento que impulsarán tu negocio.', buttons: { web: 'Haz una web conmigo', video: 'Edita videos conmigo', discord: 'Crea tu discord', minecraft: 'Configura minecraft' } },
    contact: { title: 'Contacto', subtitle: '¿Listo para empezar tu propio proyecto? Cuéntame tu idea.', name: 'Nombre Completo *', email: 'Correo Electrónico *', phone: 'Teléfono', projectType: 'Tipo de Proyecto *', details: 'Detalles del Proyecto *', submit: 'Enviar Solicitud', select: 'Selecciona una opción' },
    footer: { description: 'Transformando Ideas en Realidad Digital. Soluciones web profesionales, optimizadas y de alto rendimiento.', contact: 'Contacto', email: 'contacto@codexstudiove.com', phone: 'N/A', location: 'Venezuela, Carabobo, Valencia', legal: 'Legal', terms: 'Términos y Condiciones', faq: 'Preguntas Frecuentes (FAQ)', privacy: 'Política de Privacidad', copyright: '© 2026 Codex. Todos los derechos reservados.' }
  },
  en: {
    nav: { home: 'Home', services: 'Services', payment: 'Payment Methods', cta: 'Build a Website', contact: 'Contact' },
    hero: { title: 'Transforming Ideas into Digital Reality', description: 'I develop software, web applications, and customized technological solutions with extensive industry knowledge. Digital strategies that drive businesses.', cta: 'Build a website with me', discover: 'Discover' },
    services: {
      title: 'Professional Services', subtitle: 'Comprehensive development solutions tailored to your business needs.',
      web: { title: 'Web Development', description: 'Responsive websites, Progressive Web Apps (PWA), and e-commerce solutions with the latest technologies.' },
      backend: { title: 'Backend & APIs', description: 'Scalable architectures, RESTful APIs, high-performance server solutions, and efficient microservices.' },
      ux: { title: 'UI/UX Design', description: 'User-centered interface design, interactive prototyping, and user experience optimization.' }
    },
    stats: { projects: 'Completed Projects', experience: 'Years of Experience', clients: 'Satisfied Clients', support: 'Technical Support' },
    specialization: { title: 'Specialization', subtitle: 'Senior-level skills backed by years of experience.' },
    about: { title: 'Sebastián Corona', whoweare: 'Who We Are', description: 'I am Sebastián Ernesto Corona Bencomo, a developer, designer, and digital strategist passionate about taking technology to the highest level. Behind every digital solution I build, I seek technical and aesthetic excellence, delivering high-impact, quality results to transform any vision into reality.', years: 'Years Exp.', projects: 'Projects', cvButton: "Download Sebastián Corona's CV", githubButton: 'View CV on GitHub (full)' },
    video: { title: 'Video Editing', subtitle: 'Professional editing with DaVinci Resolve - From simple videos to complex productions with impactful effects.', cta: 'Edit videos with me', budget: 'Request Quote', reference: 'Video References' },
    discord: { title: 'Discord Configuration', subtitle: 'Professional, secure, and highly interactive servers. From gaming communities to corporate spaces with custom bots.' },
    minecraft: { title: 'Minecraft Servers', subtitle: 'Professional Minecraft servers with custom plugins, dashboards, modpacks, and advanced configuration.' },
    testimonials: { title: 'Testimonials', subtitle: 'What they say about our work' },
    brands: { title: 'Why They Trust Us', subtitle: 'We have collaborated with major brands and projects to take their ideas to the next level.' },
    payment: { title: 'Payment Methods', subtitle: 'Secure and global options to make your project a reality.' },
    secure: { title: 'We Accept Credit and Debit Cards', subtitle: 'Your peace of mind comes first, so here you have', features: ['secure purchases.', 'total guarantee.', 'protected privacy.', 'constant backing.', 'protected processes.'] },
    global: { title: 'We Have Presence in Different Countries', subtitle: 'Connecting the world, driving the future in' },
    ctaSection: { title: 'Build a Website with Me', subtitle: 'Transform your idea into digital reality. With solid experience, I guarantee professional, optimized, high-performance web solutions that will boost your business.', buttons: { web: 'Build a website with me', video: 'Edit videos with me', discord: 'Create your Discord', minecraft: 'Configure Minecraft' } },
    contact: { title: 'Contact', subtitle: 'Ready to start your own project? Tell me your idea.', name: 'Full Name *', email: 'Email *', phone: 'Phone', projectType: 'Project Type *', details: 'Project Details *', submit: 'Submit Request', select: 'Select an option' },
    footer: { description: 'Transforming Ideas into Digital Reality. Professional, optimized, high-performance web solutions.', contact: 'Contact', email: 'contacto@codexstudiove.com', phone: 'N/A', location: 'Venezuela, Carabobo, Valencia', legal: 'Legal', terms: 'Terms and Conditions', faq: 'Frequently Asked Questions (FAQ)', privacy: 'Privacy Policy', copyright: '© 2026 Codex. All rights reserved.' }
  },
  zh: {
    nav: { home: '首页', services: '服务', payment: '支付方式', cta: '建网站', contact: '联系我们' },
    hero: { title: '将创意转化为数字现实', description: '我开发软件、网络应用和定制技术解决方案，拥有丰富的行业知识。推动业务发展的数字策略。', cta: '与我一起建网站', discover: '探索' },
    services: { title: '专业服务', subtitle: '根据您的业务需求量身定制的综合开发解决方案。', web: { title: '网页开发', description: '响应式网站、渐进式网络应用（PWA）和采用最新技术的电子商务解决方案。' }, backend: { title: '后端和API', description: '可扩展架构、RESTful API、高性能服务器解决方案和高效微服务。' }, ux: { title: 'UI/UX设计', description: '以用户为中心的界面设计、交互式原型设计和用户体验优化。' } },
    stats: { projects: '已完成项目', experience: '经验年限', clients: '满意客户', support: '技术支持' },
    specialization: { title: '专业领域', subtitle: '凭借多年经验支持的高级技能。' },
    about: { title: 'Sebastián Corona', whoweare: '关于我们', description: '我是Sebastián Ernesto Corona Bencomo，一位开发者、设计师和数字策略师，热衷于将技术推向最高水平。', years: '经验年限', projects: '项目', cvButton: '下载Sebastián Corona的简历', githubButton: '在GitHub上查看简历' },
    video: { title: '视频编辑', subtitle: '使用DaVinci Resolve进行专业编辑。', cta: '与我一起编辑视频', budget: '请求报价', reference: '视频参考' },
    discord: { title: 'Discord配置', subtitle: '专业、安全且高度互动的服务器。' },
    minecraft: { title: 'Minecraft服务器', subtitle: '专业的Minecraft服务器，具有自定义插件和模组包。' },
    testimonials: { title: '客户评价', subtitle: '他们对我们工作的评价' },
    brands: { title: '为什么他们信任我们', subtitle: '我们与主要品牌和项目合作。' },
    payment: { title: '支付方式', subtitle: '安全且全球化的选项。' },
    secure: { title: '我们接受信用卡和借记卡', subtitle: '您的安心是我们的首要任务', features: ['安全购买。', '全面保证。', '受保护的隐私。', '持续支持。'] },
    global: { title: '我们在不同国家开展业务', subtitle: '连接世界，推动未来于' },
    ctaSection: { title: '与我一起建网站', subtitle: '将您的想法转化为数字现实。', buttons: { web: '与我一起建网站', video: '编辑视频', discord: '创建Discord', minecraft: '配置Minecraft' } },
    contact: { title: '联系我们', subtitle: '准备开始您的项目了吗？', name: '全名 *', email: '电子邮件 *', phone: '电话', projectType: '项目类型 *', details: '项目详情 *', submit: '提交请求', select: '选择一个选项' },
    footer: { description: '将创意转化为数字现实。', contact: '联系我们', email: 'contacto@codexstudiove.com', phone: '不适用', location: '委内瑞拉，瓦伦西亚', legal: '法律', terms: '条款和条件', faq: '常见问题', privacy: '隐私政策', copyright: '© 2026 Codex。保留所有权利。' }
  },
  ja: {
    nav: { home: 'ホーム', services: 'サービス', payment: 'お支払い方法', cta: 'ウェブサイト作成', contact: 'お問い合わせ' },
    hero: { title: 'アイデアをデジタルの現実に', description: '業界に関する豊富な知識を活かし、ソフトウェア、Webアプリケーションを開発します。', cta: '一緒にウェブサイトを作る', discover: '発見する' },
    services: { title: 'プロフェッショナルサービス', subtitle: 'ビジネスニーズに合わせた包括的な開発ソリューション。', web: { title: 'Web開発', description: 'レスポンシブウェブサイト、PWA、Eコマースソリューション。' }, backend: { title: 'バックエンドとAPI', description: 'スケーラブルなアーキテクチャとマイクロサービス。' }, ux: { title: 'UI/UXデザイン', description: 'ユーザー中心のインターフェースデザイン。' } },
    stats: { projects: '完了プロジェクト', experience: '経験年数', clients: '満足クライアント', support: 'テクニカルサポート' },
    specialization: { title: '専門分野', subtitle: '長年の経験に裏打ちされたシニアレベルのスキル。' },
    about: { title: 'Sebastián Corona', whoweare: '私たちについて', description: '私はSebastián Ernesto Corona Bencomoです。テクノロジーを最高レベルに引き上げることに情熱を注いでいます。', years: '経験年数', projects: 'プロジェクト', cvButton: '履歴書をダウンロード', githubButton: 'GitHubで履歴書を見る' },
    video: { title: '動画編集', subtitle: 'DaVinci Resolveを使用したプロフェッショナルな編集。', cta: '一緒に動画を編集する', budget: '見積もりを依頼', reference: '動画リファレンス' },
    discord: { title: 'Discord設定', subtitle: 'プロフェッショナルで安全なサーバー。' },
    minecraft: { title: 'Minecraftサーバー', subtitle: 'カスタムプラグインとModpackを備えたサーバー。' },
    testimonials: { title: 'お客様の声', subtitle: '私たちの仕事に対する評価' },
    brands: { title: '彼らが私たちを信頼する理由', subtitle: '主要ブランドと協力してきました。' },
    payment: { title: 'お支払い方法', subtitle: '安全でグローバルなオプション。' },
    secure: { title: 'クレジットカードとデビットカードを受け付けています', subtitle: 'お客様の安心が最優先です', features: ['安全な決済。', '完全な保証。', 'プライバシー保護。'] },
    global: { title: '世界中に広がる確かな実績', subtitle: '世界を繋ぎ、未来を推進する場所：' },
    ctaSection: { title: '一緒にウェブサイトを作る', subtitle: 'アイデアをデジタルの現実に変えましょう。', buttons: { web: 'ウェブサイトを作る', video: '動画を編集する', discord: 'Discordを作成', minecraft: 'Minecraftを設定' } },
    contact: { title: 'お問い合わせ', subtitle: 'プロジェクトを始める準備はできましたか？', name: '氏名 *', email: 'メールアドレス *', phone: '電話番号', projectType: 'プロジェクトタイプ *', details: 'プロジェクト詳細 *', submit: 'リクエストを送信', select: '選択してください' },
    footer: { description: 'アイデアをデジタルの現実に。', contact: 'お問い合わせ', email: 'contacto@codexstudiove.com', phone: 'なし', location: 'ベネズエラ、バレンシア', legal: '法的情報', terms: '利用規約', faq: 'よくある質問', privacy: 'プライバシーポリシー', copyright: '© 2026 Codex。全著作権所有。' }
  }
}
=======
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      payment: 'Métodos de Pago',
      cta: 'Haz una web',
      contact: 'Contacto'
    },
    hero: {
      title: 'Transformando Ideas en Realidad Digital',
      description: 'Desarrollo software, aplicaciones web y soluciones tecnológicas personalizadas con amplios conocimientos en la industria. Estrategias digitales que impulsan negocios.',
      cta: 'Haz una web conmigo',
      discover: 'Descubre'
    },
    services: {
      title: 'Servicios Profesionales',
      subtitle: 'Soluciones integrales de desarrollo adaptadas a las necesidades específicas de tu negocio.',
      web: {
        title: 'Desarrollo Web',
        description: 'Sitios web responsivos, aplicaciones web progresivas (PWA) y soluciones e-commerce con las últimas tecnologías.'
      },
      backend: {
        title: 'Backend & APIs',
        description: 'Arquitecturas escalables, APIs RESTful, soluciones de servidor de alto rendimiento y microservicios eficientes.'
      },
      ux: {
        title: 'UI/UX Design',
        description: 'Diseño de interfaces centradas en el usuario, prototipado interactivo y optimización de experiencia de usuario.'
      }
    },
    stats: {
      projects: 'Proyectos Completados',
      experience: 'Años de Experiencia',
      clients: 'Clientes Satisfechos',
      support: 'Soporte Técnico'
    },
    specialization: {
      title: 'Especialización',
      subtitle: 'Habilidades de nivel Senior respaldadas por años de experiencia.'
    },
    about: {
      title: '¿Quiénes Somos?',
      description: 'Soy Sebastián Corona, un desarrollador, diseñador y estratega digital apasionado por llevar la tecnología al máximo nivel. Detrás de cada solución digital que construyo, busco la excelencia técnica y estética, entregando resultados de alto impacto y calidad para transformar cualquier visión en realidad.',
      years: 'Años Exp.',
      projects: 'Proyectos',
      cvButton: 'Descargar CV de Sebastián Corona',
      githubButton: 'Ver CV en GitHub (completo)'
    },
    video: {
      title: 'Edición de Video',
      subtitle: 'Edición profesional con DaVinci Resolve - Desde videos simples hasta producciones complejas con efectos impactantes.',
      cta: 'Edita videos conmigo',
      budget: 'Solicitar Presupuesto',
      reference: 'Referencias de videos'
    },
    discord: {
      title: 'Configuración de Discord',
      subtitle: 'Servidores profesionales, seguros y altamente interactivos. Desde comunidades de gaming hasta espacios corporativos con bots a medida.'
    },
    minecraft: {
      title: 'Servidores de Minecraft',
      subtitle: 'Servidores Minecraft profesionales con plugins personalizados, dashboards, modpacks y configuración avanzada.'
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen de nuestro trabajo'
    },
    brands: {
      title: 'Por qué ellos confían en nosotros',
      subtitle: 'Hemos colaborado con grandes marcas y proyectos para llevar sus ideas al siguiente nivel.'
    },
    payment: {
      title: 'Métodos de Pago',
      subtitle: 'Opciones seguras y globales para hacer realidad tu proyecto.'
    },
    secure: {
      title: 'Aceptamos tarjetas de crédito y débito',
      subtitle: 'Tu tranquilidad es lo primero, por eso aquí tienes',
      features: ['compras seguras.', 'total garantía.', 'privacidad protegida.', 'respaldo constante.', 'procesos protegidos.']
    },
    global: {
      title: 'Tenemos presencia en distintos países',
      subtitle: 'Conectando al mundo, impulsando el futuro en'
    },
    ctaSection: {
      title: 'Haz una web conmigo',
      subtitle: 'Transforma tu idea en una realidad digital. Aportando una sólida experiencia, garantizo soluciones web profesionales, optimizadas y de alto rendimiento que impulsarán tu negocio.',
      buttons: {
        web: 'Haz una web conmigo',
        video: 'Edita videos conmigo',
        discord: 'Crea tu discord',
        minecraft: 'Configura minecraft'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para empezar tu propio proyecto? Cuéntame tu idea.',
      name: 'Nombre Completo *',
      email: 'Correo Electrónico *',
      phone: 'Teléfono',
      projectType: 'Tipo de Proyecto *',
      details: 'Detalles del Proyecto *',
      submit: 'Enviar Solicitud'
    },
    footer: {
      description: 'Transformando Ideas en Realidad Digital. Soluciones web profesionales, optimizadas y de alto rendimiento.',
      contact: 'Contacto',
      email: 'contacto@codexstudiove.com',
      phone: 'N/A',
      location: 'Venezuela, Carabobo, Valencia',
      legal: 'Legal',
      terms: 'Términos y Condiciones',
      faq: 'Preguntas Frecuentes (FAQ)',
      privacy: 'Política de Privacidad',
      copyright: '© 2026 Codex. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      payment: 'Payment Methods',
      cta: 'Build a Website',
      contact: 'Contact'
    },
    hero: {
      title: 'Transforming Ideas into Digital Reality',
      description: 'I develop software, web applications, and customized technological solutions with extensive industry knowledge. Digital strategies that drive businesses.',
      cta: 'Build a website with me',
      discover: 'Discover'
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Comprehensive development solutions tailored to your business needs.',
      web: {
        title: 'Web Development',
        description: 'Responsive websites, Progressive Web Apps (PWA), and e-commerce solutions with the latest technologies.'
      },
      backend: {
        title: 'Backend & APIs',
        description: 'Scalable architectures, RESTful APIs, high-performance server solutions, and efficient microservices.'
      },
      ux: {
        title: 'UI/UX Design',
        description: 'User-centered interface design, interactive prototyping, and user experience optimization.'
      }
    },
    stats: {
      projects: 'Completed Projects',
      experience: 'Years of Experience',
      clients: 'Satisfied Clients',
      support: 'Technical Support'
    },
    specialization: {
      title: 'Specialization',
      subtitle: 'Senior-level skills backed by years of experience.'
    },
    about: {
      title: 'About Us',
      description: 'I am Sebastián Corona, a developer, designer, and digital strategist passionate about taking technology to the highest level. Behind every digital solution I build, I seek technical and aesthetic excellence, delivering high-impact, quality results to transform any vision into reality.',
      years: 'Years Exp.',
      projects: 'Projects',
      cvButton: "Download Sebastián Corona's CV",
      githubButton: 'View CV on GitHub (full)'
    },
    video: {
      title: 'Video Editing',
      subtitle: 'Professional editing with DaVinci Resolve - From simple videos to complex productions with impactful effects.',
      cta: 'Edit videos with me',
      budget: 'Request Quote',
      reference: 'Video References'
    },
    discord: {
      title: 'Discord Configuration',
      subtitle: 'Professional, secure, and highly interactive servers. From gaming communities to corporate spaces with custom bots.'
    },
    minecraft: {
      title: 'Minecraft Servers',
      subtitle: 'Professional Minecraft servers with custom plugins, dashboards, modpacks, and advanced configuration.'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What they say about our work'
    },
    brands: {
      title: 'Why They Trust Us',
      subtitle: 'We have collaborated with major brands and projects to take their ideas to the next level.'
    },
    payment: {
      title: 'Payment Methods',
      subtitle: 'Secure and global options to make your project a reality.'
    },
    secure: {
      title: 'We Accept Credit and Debit Cards',
      subtitle: 'Your peace of mind comes first, so here you have',
      features: ['secure purchases.', 'total guarantee.', 'protected privacy.', 'constant backing.', 'protected processes.']
    },
    global: {
      title: 'We Have Presence in Different Countries',
      subtitle: 'Connecting the world, driving the future in'
    },
    ctaSection: {
      title: 'Build a Website with Me',
      subtitle: 'Transform your idea into digital reality. With solid experience, I guarantee professional, optimized, high-performance web solutions that will boost your business.',
      buttons: {
        web: 'Build a website with me',
        video: 'Edit videos with me',
        discord: 'Create your Discord',
        minecraft: 'Configure Minecraft'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Ready to start your own project? Tell me your idea.',
      name: 'Full Name *',
      email: 'Email *',
      phone: 'Phone',
      projectType: 'Project Type *',
      details: 'Project Details *',
      submit: 'Submit Request'
    },
    footer: {
      description: 'Transforming Ideas into Digital Reality. Professional, optimized, high-performance web solutions.',
      contact: 'Contact',
      email: 'contacto@codexstudiove.com',
      phone: 'N/A',
      location: 'Venezuela, Carabobo, Valencia',
      legal: 'Legal',
      terms: 'Terms and Conditions',
      faq: 'Frequently Asked Questions (FAQ)',
      privacy: 'Privacy Policy',
      copyright: '© 2026 Codex. All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      payment: '支付方式',
      cta: '建网站',
      contact: '联系我们'
    },
    hero: {
      title: '将创意转化为数字现实',
      description: '我开发软件、网络应用和定制技术解决方案，拥有丰富的行业知识。推动业务发展的数字策略。',
      cta: '与我一起建网站',
      discover: '探索'
    },
    services: {
      title: '专业服务',
      subtitle: '根据您的业务需求量身定制的综合开发解决方案。',
      web: {
        title: '网页开发',
        description: '响应式网站、渐进式网络应用（PWA）和采用最新技术的电子商务解决方案。'
      },
      backend: {
        title: '后端和API',
        description: '可扩展架构、RESTful API、高性能服务器解决方案和高效微服务。'
      },
      ux: {
        title: 'UI/UX设计',
        description: '以用户为中心的界面设计、交互式原型设计和用户体验优化。'
      }
    },
    stats: {
      projects: '已完成项目',
      experience: '经验年限',
      clients: '满意客户',
      support: '技术支持'
    },
    specialization: {
      title: '专业领域',
      subtitle: '凭借多年经验支持的高级技能。'
    },
    about: {
      title: '关于我们',
      description: '我是Sebastián Corona，一位开发者、设计师和数字策略师，热衷于将技术推向最高水平。在我构建的每一个数字解决方案背后，我都追求技术和美学的卓越，提供高影响力、高质量的结果，将任何愿景转化为现实。',
      years: '经验年限',
      projects: '项目',
      cvButton: '下载Sebastián Corona的简历',
      githubButton: '在GitHub上查看简历（完整版）'
    },
    video: {
      title: '视频编辑',
      subtitle: '使用DaVinci Resolve进行专业编辑 - 从简单视频到具有震撼效果的复杂制作。',
      cta: '与我一起编辑视频',
      budget: '请求报价',
      reference: '视频参考'
    },
    discord: {
      title: 'Discord配置',
      subtitle: '专业、安全且高度互动的服务器。从游戏社区到具有自定义机器人的企业空间。'
    },
    minecraft: {
      title: 'Minecraft服务器',
      subtitle: '专业的Minecraft服务器，具有自定义插件、仪表板、模组包和高级配置。'
    },
    testimonials: {
      title: '客户评价',
      subtitle: '他们对我们工作的评价'
    },
    brands: {
      title: '为什么他们信任我们',
      subtitle: '我们与主要品牌和项目合作，将他们的想法提升到新的水平。'
    },
    payment: {
      title: '支付方式',
      subtitle: '安全且全球化的选项，让您的项目成为现实。'
    },
    secure: {
      title: '我们接受信用卡和借记卡',
      subtitle: '您的安心是我们的首要任务，因此您拥有',
      features: ['安全购买。', '全面保证。', '受保护的隐私。', '持续支持。', '受保护的流程。']
    },
    global: {
      title: '我们在不同国家开展业务',
      subtitle: '连接世界，推动未来于'
    },
    ctaSection: {
      title: '与我一起建网站',
      subtitle: '将您的想法转化为数字现实。凭借丰富的经验，我保证提供专业、优化、高性能的网络解决方案，推动您的业务发展。',
      buttons: {
        web: '与我一起建网站',
        video: '与我一起编辑视频',
        discord: '创建您的Discord',
        minecraft: '配置Minecraft'
      }
    },
    contact: {
      title: '联系我们',
      subtitle: '准备开始您的项目了吗？告诉我您的想法。',
      name: '全名 *',
      email: '电子邮件 *',
      phone: '电话',
      projectType: '项目类型 *',
      details: '项目详情 *',
      submit: '提交请求'
    },
    footer: {
      description: '将创意转化为数字现实。专业、优化、高性能的网络解决方案。',
      contact: '联系我们',
      email: 'contacto@codexstudiove.com',
      phone: '不适用',
      location: '委内瑞拉，卡拉沃沃，瓦伦西亚',
      legal: '法律',
      terms: '条款和条件',
      faq: '常见问题（FAQ）',
      privacy: '隐私政策',
      copyright: '© 2026 Codex。保留所有权利。'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      services: 'サービス',
      payment: 'お支払い方法',
      cta: 'ウェブサイト作成',
      contact: 'お問い合わせ'
    },
    hero: {
      title: 'アイデアをデジタルの現実に',
      description: '業界に関する豊富な知識を活かし、ソフトウェア、Webアプリケーション、カスタマイズされた技術ソリューションを開発します。ビジネスを推進するデジタル戦略。',
      cta: '一緒にウェブサイトを作る',
      discover: '発見する'
    },
    services: {
      title: 'プロフェッショナルサービス',
      subtitle: 'ビジネスニーズに合わせた包括的な開発ソリューション。',
      web: {
        title: 'Web開発',
        description: 'レスポンシブウェブサイト、プログレッシブWebアプリ（PWA）、最新技術を使用したEコマースソリューション。'
      },
      backend: {
        title: 'バックエンドとAPI',
        description: 'スケーラブルなアーキテクチャ、RESTful API、高性能サーバーソリューション、効率的なマイクロサービス。'
      },
      ux: {
        title: 'UI/UXデザイン',
        description: 'ユーザー中心のインターフェースデザイン、インタラクティブプロトタイピング、ユーザーエクスペリエンス最適化。'
      }
    },
    stats: {
      projects: '完了プロジェクト',
      experience: '経験年数',
      clients: '満足クライアント',
      support: 'テクニカルサポート'
    },
    specialization: {
      title: '専門分野',
      subtitle: '長年の経験に裏打ちされたシニアレベルのスキル。'
    },
    about: {
      title: '私たちについて',
      description: '私はSebastián Corona、開発者、デザイナー、デジタルストラテジストとして、テクノロジーを最高レベルに引き上げることに情熱を注いでいます。私が構築するすべてのデジタルソリューションの背後で、技術的および美的卓越性を追求し、あらゆるビジョンを現実に変える高インパクトで高品質な結果を提供します。',
      years: '経験年数',
      projects: 'プロジェクト',
      cvButton: 'Sebastián Coronaの履歴書をダウンロード',
      githubButton: 'GitHubで履歴書を見る（完全版）'
    },
    video: {
      title: '動画編集',
      subtitle: 'DaVinci Resolveを使用したプロフェッショナルな編集 - シンプルな動画から印象的なエフェクトを使用した複雑な制作まで。',
      cta: '一緒に動画を編集する',
      budget: '見積もりを依頼',
      reference: '動画リファレンス'
    },
    discord: {
      title: 'Discord設定',
      subtitle: 'プロフェッショナルで安全、かつ高いインタラクティブ性を備えたサーバー。ゲーミングコミュニティからカスタムボットを備えた企業スペースまで。'
    },
    minecraft: {
      title: 'Minecraftサーバー',
      subtitle: 'カスタムプラグイン、ダッシュボード、Modpack、高度な設定を備えたプロフェッショナルなMinecraftサーバー。'
    },
    testimonials: {
      title: 'お客様の声',
      subtitle: '私たちの仕事に対する評価'
    },
    brands: {
      title: '彼らが私たちを信頼する理由',
      subtitle: '主要ブランドやプロジェクトと協力し、彼らのアイデアを次のレベルに引き上げてきました。'
    },
    payment: {
      title: 'お支払い方法',
      subtitle: 'プロジェクトを実現するための安全でグローバルなオプション。'
    },
    secure: {
      title: 'クレジットカードとデビットカードを受け付けています',
      subtitle: 'お客様の安心が最優先です。そのため、以下を提供しています',
      features: ['安全な決済。', '完全な保証。', 'プライバシー保護。', '万全なサポート。', '保護されたプロセス。']
    },
    global: {
      title: '世界中に広がる確かな実績',
      subtitle: '世界を繋ぎ、未来を推進する場所：'
    },
    ctaSection: {
      title: '一緒にウェブサイトを作る',
      subtitle: 'アイデアをデジタルの現実に変えましょう。豊富な経験を活かし、ビジネスを加速させるプロフェッショナルで最適化された高性能なWebソリューションをお約束します。',
      buttons: {
        web: '一緒にウェブサイトを作る',
        video: '一緒に動画を編集する',
        discord: 'Discordを作成する',
        minecraft: 'Minecraftを設定する'
      }
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'プロジェクトを始める準備はできましたか？あなたのアイデアを教えてください。',
      name: '氏名 *',
      email: 'メールアドレス *',
      phone: '電話番号',
      projectType: 'プロジェクトタイプ *',
      details: 'プロジェクト詳細 *',
      submit: 'リクエストを送信'
    },
    footer: {
      description: 'アイデアをデジタルの現実に。プロフェッショナルで最適化された高性能なWebソリューション。',
      contact: 'お問い合わせ',
      email: 'contacto@codexstudiove.com',
      phone: 'なし',
      location: 'ベネズエラ、カラボボ州、バレンシア',
      legal: '法的情報',
      terms: '利用規約',
      faq: 'よくある質問（FAQ）',
      privacy: 'プライバシーポリシー',
      copyright: '© 2026 Codex。全著作権所有。'
    }
  }
}
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
