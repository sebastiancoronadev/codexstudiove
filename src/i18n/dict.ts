export type Language = 'es' | 'en' | 'zh' | 'ja'

export interface Dictionary {
  nav: { home: string; services: string; payment: string; cta: string; contact: string }
  hero: { title: string; description: string; cta: string; discover: string }
  services: { title: string; subtitle: string; web: { title: string; description: string }; backend: { title: string; description: string }; ux: { title: string; description: string } }
  stats: { projects: string; experience: string; clients: string; support: string }
  specialization: { title: string; subtitle: string }
  about: { title: string; whoweare: string; description: string; years: string; projects: string; cvButton: string; githubButton: string }
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
}

export const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: { home: 'Inicio', services: 'Servicios', payment: 'Métodos de Pago', cta: 'Haz una web', contact: 'Contacto' },
    hero: { title: 'Transformando Ideas en Realidad Digital', description: 'Desarrollo software, aplicaciones web y soluciones tecnológicas personalizadas con amplios conocimientos en la industria. Estrategias digitales que impulsan negocios.', cta: 'Haz una web conmigo', discover: 'Descubre' },
    services: { title: 'Servicios Profesionales', subtitle: 'Soluciones integrales de desarrollo adaptadas a las necesidades específicas de tu negocio.', web: { title: 'Desarrollo Web', description: 'Sitios web responsivos, aplicaciones web progresivas (PWA) y soluciones e-commerce con las últimas tecnologías.' }, backend: { title: 'Backend & APIs', description: 'Arquitecturas escalables, APIs RESTful, soluciones de servidor de alto rendimiento y microservicios eficientes.' }, ux: { title: 'UI/UX Design', description: 'Diseño de interfaces centradas en el usuario, prototipado interactivo y optimización de experiencia de usuario.' } },
    stats: { projects: 'Proyectos Completados', experience: 'Años de Experiencia', clients: 'Clientes Satisfechos', support: 'Soporte Técnico' },
    specialization: { title: 'Especialización', subtitle: 'Habilidades de nivel Senior respaldadas por años de experiencia.' },
    about: { title: 'Sebastián Corona', whoweare: '¿Quiénes Somos?', description: 'Soy Sebastián Ernesto Corona Bencomo, un desarrollador, diseñador y estratega digital apasionado por llevar la tecnología al máximo nivel. Detrás de cada solución digital que construyo, busco la excelencia técnica y estética, entregando resultados de alto impacto y calidad para transformar cualquier visión en realidad.', years: 'Años Exp.', projects: 'Proyectos', cvButton: 'Descargar CV de Sebastián Corona', githubButton: 'Ver CV en GitHub (completo)' },
    video: { title: 'Edición de Video', subtitle: 'Edición profesional con DaVinci Resolve - Desde videos simples hasta producciones complejas con efectos impactantes.', cta: 'Edita videos conmigo', budget: 'Solicitar Presupuesto', reference: 'Referencias de videos' },
    discord: { title: 'Configuración de Discord', subtitle: 'Servidores profesionales, seguros y altamente interactivos.' },
    minecraft: { title: 'Servidores de Minecraft', subtitle: 'Servidores Minecraft profesionales con plugins personalizados, dashboards, modpacks y configuración avanzada.' },
    testimonials: { title: 'Testimonios', subtitle: 'Lo que dicen de nuestro trabajo' },
    brands: { title: 'Por qué ellos confían en nosotros', subtitle: 'Hemos colaborado con grandes marcas y proyectos.' },
    payment: { title: 'Métodos de Pago', subtitle: 'Opciones seguras y globales para hacer realidad tu proyecto.' },
    secure: { title: 'Aceptamos tarjetas de crédito y débito', subtitle: 'Tu tranquilidad es lo primero, por eso aquí tienes', features: ['compras seguras.', 'total garantía.', 'privacidad protegida.', 'respaldo constante.', 'procesos protegidos.'] },
    global: { title: 'Tenemos presencia en distintos países', subtitle: 'Conectando al mundo, impulsando el futuro en' },
    ctaSection: { title: 'Haz una web conmigo', subtitle: 'Transforma tu idea en una realidad digital. Aportando una sólida experiencia, garantizo soluciones web profesionales, optimizadas y de alto rendimiento que impulsarán tu negocio.', buttons: { web: 'Haz una web conmigo', video: 'Edita videos conmigo', discord: 'Crea tu discord', minecraft: 'Configura minecraft' } },
    contact: { title: 'Contacto', subtitle: '¿Listo para empezar tu propio proyecto? Cuéntame tu idea.', name: 'Nombre Completo *', email: 'Correo Electrónico *', phone: 'Teléfono', projectType: 'Tipo de Proyecto *', details: 'Detalles del Proyecto *', submit: 'Enviar Solicitud', select: 'Selecciona una opción' },
    footer: { description: 'Transformando Ideas en Realidad Digital. Soluciones web profesionales, optimizadas y de alto rendimiento.', contact: 'Contacto', email: 'contacto@codexstudiove.com', phone: 'N/A', location: 'Venezuela, Carabobo, Valencia', legal: 'Legal', terms: 'Términos y Condiciones', faq: 'Preguntas Frecuentes (FAQ)', privacy: 'Política de Privacidad', copyright: '© 2026 Codex. Todos los derechos reservados.' }
  },
  en: {
    nav: { home: 'Home', services: 'Services', payment: 'Payment Methods', cta: 'Build a Website', contact: 'Contact' },
    hero: { title: 'Transforming Ideas into Digital Reality', description: 'I develop software, web applications, and customized technological solutions.', cta: 'Build a website with me', discover: 'Discover' },
    services: { title: 'Professional Services', subtitle: 'Comprehensive development solutions tailored to your business needs.', web: { title: 'Web Development', description: 'Responsive websites, PWAs, and e-commerce solutions.' }, backend: { title: 'Backend & APIs', description: 'Scalable architectures, RESTful APIs, and microservices.' }, ux: { title: 'UI/UX Design', description: 'User-centered interface design and prototyping.' } },
    stats: { projects: 'Completed Projects', experience: 'Years of Experience', clients: 'Satisfied Clients', support: 'Technical Support' },
    specialization: { title: 'Specialization', subtitle: 'Senior-level skills backed by years of experience.' },
    about: { title: 'Sebastian Corona', whoweare: 'Who We Are', description: 'I am Sebastian Ernesto Corona Bencomo, a developer, designer, and digital strategist.', years: 'Years Exp.', projects: 'Projects', cvButton: 'Download CV', githubButton: 'View CV on GitHub' },
    video: { title: 'Video Editing', subtitle: 'Professional editing with DaVinci Resolve.', cta: 'Edit videos with me', budget: 'Request Quote', reference: 'Video References' },
    discord: { title: 'Discord Configuration', subtitle: 'Professional, secure servers.' },
    minecraft: { title: 'Minecraft Servers', subtitle: 'Professional Minecraft servers.' },
    testimonials: { title: 'Testimonials', subtitle: 'What they say about our work' },
    brands: { title: 'Why They Trust Us', subtitle: 'We have collaborated with major brands.' },
    payment: { title: 'Payment Methods', subtitle: 'Secure and global options.' },
    secure: { title: 'We Accept Credit and Debit Cards', subtitle: 'Your peace of mind comes first', features: ['secure purchases.', 'total guarantee.', 'protected privacy.', 'constant backing.', 'protected processes.'] },
    global: { title: 'We Have Presence in Different Countries', subtitle: 'Connecting the world, driving the future in' },
    ctaSection: { title: 'Build a Website with Me', subtitle: 'Transform your idea into digital reality.', buttons: { web: 'Build a website', video: 'Edit videos', discord: 'Create Discord', minecraft: 'Configure Minecraft' } },
    contact: { title: 'Contact', subtitle: 'Ready to start your project?', name: 'Full Name *', email: 'Email *', phone: 'Phone', projectType: 'Project Type *', details: 'Project Details *', submit: 'Submit Request', select: 'Select an option' },
    footer: { description: 'Transforming Ideas into Digital Reality.', contact: 'Contact', email: 'contacto@codexstudiove.com', phone: 'N/A', location: 'Venezuela, Carabobo, Valencia', legal: 'Legal', terms: 'Terms and Conditions', faq: 'FAQ', privacy: 'Privacy Policy', copyright: '© 2026 Codex. All rights reserved.' }
  },
  zh: {
    nav: { home: '首页', services: '服务', payment: '支付方式', cta: '建网站', contact: '联系我们' },
    hero: { title: '将创意转化为数字现实', description: '我开发软件和网络应用。', cta: '与我一起建网站', discover: '探索' },
    services: { title: '专业服务', subtitle: '根据您的业务需求量身定制。', web: { title: '网页开发', description: '响应式网站和电子商务。' }, backend: { title: '后端和API', description: '可扩展架构和微服务。' }, ux: { title: 'UI/UX设计', description: '以用户为中心的界面设计。' } },
    stats: { projects: '已完成项目', experience: '经验年限', clients: '满意客户', support: '技术支持' },
    specialization: { title: '专业领域', subtitle: '高级技能。' },
    about: { title: 'Sebastián Corona', whoweare: '关于我们', description: '我是Sebastián Ernesto Corona Bencomo。', years: '经验年限', projects: '项目', cvButton: '下载简历', githubButton: '查看GitHub' },
    video: { title: '视频编辑', subtitle: '使用DaVinci Resolve编辑。', cta: '编辑视频', budget: '请求报价', reference: '视频参考' },
    discord: { title: 'Discord配置', subtitle: '专业服务器。' },
    minecraft: { title: 'Minecraft服务器', subtitle: '专业Minecraft服务器。' },
    testimonials: { title: '客户评价', subtitle: '他们怎么说' },
    brands: { title: '为什么他们信任我们', subtitle: '我们与主要品牌合作。' },
    payment: { title: '支付方式', subtitle: '安全选项。' },
    secure: { title: '我们接受信用卡', subtitle: '您的安心是我们的首要任务', features: ['安全购买。', '全面保证。'] },
    global: { title: '我们在不同国家开展业务', subtitle: '连接世界于' },
    ctaSection: { title: '与我一起建网站', subtitle: '将您的想法转化为现实。', buttons: { web: '建网站', video: '编辑视频', discord: '创建Discord', minecraft: '配置Minecraft' } },
    contact: { title: '联系我们', subtitle: '开始您的项目？', name: '全名 *', email: '电子邮件 *', phone: '电话', projectType: '项目类型 *', details: '项目详情 *', submit: '提交请求', select: '选择' },
    footer: { description: '将创意转化为现实。', contact: '联系我们', email: 'contacto@codexstudiove.com', phone: '不适用', location: '瓦伦西亚', legal: '法律', terms: '条款', faq: '常见问题', privacy: '隐私政策', copyright: '© 2026 Codex' }
  },
  ja: {
    nav: { home: 'ホーム', services: 'サービス', payment: '支払い', cta: 'ウェブ作成', contact: '連絡先' },
    hero: { title: 'アイデアをデジタルに', description: 'ソフトウェアとウェブアプリを開発。', cta: 'ウェブサイトを作る', discover: '発見' },
    services: { title: 'サービス', subtitle: 'ビジネスに合わせたソリューション。', web: { title: 'Web開発', description: 'レスポンシブサイト。' }, backend: { title: 'バックエンド', description: 'スケーラブルなアーキテクチャ。' }, ux: { title: 'UI/UXデザイン', description: 'ユーザー中心のデザイン。' } },
    stats: { projects: '完了プロジェクト', experience: '経験年数', clients: 'クライアント', support: 'サポート' },
    specialization: { title: '専門分野', subtitle: 'シニアレベルスキル。' },
    about: { title: 'Sebastián Corona', whoweare: '私たちについて', description: '私はSebastián Ernesto Corona Bencomoです。', years: '経験年数', projects: 'プロジェクト', cvButton: '履歴書ダウンロード', githubButton: 'GitHubで見る' },
    video: { title: '動画編集', subtitle: 'DaVinci Resolveで編集。', cta: '動画編集', budget: '見積もり', reference: '動画リファレンス' },
    discord: { title: 'Discord設定', subtitle: 'プロフェッショナルサーバー。' },
    minecraft: { title: 'Minecraftサーバー', subtitle: 'プロフェッショナルサーバー。' },
    testimonials: { title: 'お客様の声', subtitle: '評価' },
    brands: { title: '信頼の理由', subtitle: '主要ブランドと協力。' },
    payment: { title: '支払い方法', subtitle: '安全なオプション。' },
    secure: { title: 'クレジットカード対応', subtitle: '安心を最優先', features: ['安全な決済。', '完全な保証。'] },
    global: { title: '世界中に展開', subtitle: '世界を繋ぐ：' },
    ctaSection: { title: 'ウェブサイト作成', subtitle: 'アイデアを現実に。', buttons: { web: 'ウェブ作成', video: '動画編集', discord: 'Discord作成', minecraft: 'Minecraft設定' } },
    contact: { title: '連絡先', subtitle: 'プロジェクト開始？', name: '氏名 *', email: 'メール *', phone: '電話', projectType: 'タイプ *', details: '詳細 *', submit: '送信', select: '選択' },
    footer: { description: 'アイデアを現実に。', contact: '連絡先', email: 'contacto@codexstudiove.com', phone: 'なし', location: 'バレンシア', legal: '法的', terms: '利用規約', faq: 'FAQ', privacy: 'プライバシー', copyright: '© 2026 Codex' }
  }
}
