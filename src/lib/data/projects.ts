export interface Project {
  title: string;
  description: string;
  longDescription: string;
  url: string;
  tech: string[];
  logo?: string;
  icon?: string;
  glow: "pink" | "orange" | "mixed";
  seoKeywords: string[];
}

export const projects: Project[] = [
  {
    title: "Mi Pana en Linyi",
    description: "Plataforma E-commerce internacional con integración de pagos multi-moneda y logística cross-border.",
    longDescription:
      "Mi Pana en Linyi es una operación comercial internacional liderada por Sebastián Ernesto Corona Bencomo, empresario y desarrollador Full-Stack venezolano. Este proyecto conecta fabricantes mayoristas de China (Linyi, Shandong) con distribuidores de toda Latinoamérica, gestionando toda la cadena de suministro: negociación con fábricas, logística internacional, aduanas, y comercio transfronterizo. La plataforma integra tecnologías chinas de punta y respalda operaciones con pagos multi-moneda (CNY, USD, EUR), tracking en tiempo real y gestión documental multilingüe. Es la prueba viva de que un programador venezolano puede dirigir operaciones empresariales complejas en el mercado asiático, respaldado por corporaciones tecnológicas chinas. Este proyecto posiciona a Sebastián no solo como desarrollador, sino como empresario internacional con visión estratégica de los mercados más exigentes del mundo.",
    url: "https://www.mipanaenlinyi.com",
    tech: ["Next.js", "Supabase", "Stripe", "Odoo"],
    logo: "/assets/images/projects/linyi.png",
    icon: "bi-globe-americas",
    glow: "pink",
    seoKeywords: [
      "Mi Pana en Linyi",
      "comercio China Venezuela",
      "empresario venezolano China",
      "Sebastián Corona empresario",
      "logística internacional China LATAM",
      "importación China Venezuela",
    ],
  },
  {
    title: "Noogui",
    description: "Sistema de gestión de inventario y facturación para PYMES con dashboard en tiempo real.",
    longDescription:
      "Noogui es una plataforma de gestión empresarial diseñada por Codex Studio VE para pequeñas y medianas empresas que necesitan control total sobre su inventario, facturación y operaciones comerciales. El sistema incluye dashboard en tiempo real, alertas inteligentes de stock bajo, generación automática de facturas con validez fiscal, integración con múltiples métodos de pago, y reportes ejecutivos exportables en PDF y Excel. Redujo las mermas de inventario en un 40% para clientes de prueba durante la fase beta, y se consolidó como una solución asequible para PYMES latinoamericanas que buscan digitalizar su operación sin depender de ERPs costosos.",
    url: "https://nooguive.vercel.app",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    logo: "/assets/images/projects/noogui.png",
    icon: "bi-box-seam",
    glow: "orange",
    seoKeywords: [
      "Noogui",
      "sistema inventario PYMES",
      "software facturación Venezuela",
      "control de inventario digital",
      "ERP asequible LATAM",
    ],
  },
  {
    title: "Lipid-Profile-Predictor",
    description: "Sistema de predicción y análisis de perfiles lipídicos y riesgo cardiovascular.",
    longDescription:
      "Lipid-Profile-Predictor es una herramienta de investigación científica desarrollada en Codex Studio VE que combina análisis clínico, procesamiento de datos nutricionales y modelos predictivos para evaluar el riesgo cardiovascular de un paciente. La plataforma procesa perfiles lipídicos completos (colesterol total, HDL, LDL, triglicéridos) y los cruza con variables antropométricas y nutricionales para generar un índice de riesgo personalizado. Diseñada como herramienta de apoyo para profesionales de la salud y nutricionistas, permite visualizar tendencias, comparar resultados históricos y generar recomendaciones basadas en evidencia. El proyecto también es un ejercicio técnico de procesamiento de datos clínicos en el navegador sin comprometer la privacidad del paciente.",
    url: "https://github.com/sebastiancoronadev/Lipid-Profile-Predictor",
    tech: ["JavaScript", "Data Science", "HTML5", "Chart.js"],
    icon: "bi-heart-pulse",
    glow: "pink",
    seoKeywords: [
      "Lipid Profile Predictor",
      "análisis riesgo cardiovascular",
      "predicción colesterol",
      "software médico Venezuela",
      "herramienta nutricional open source",
    ],
  },
  {
    title: "TempusDB",
    description: "Motor de base de datos para series temporales con algoritmos de compresión LZ4.",
    longDescription:
      "TempusDB es un motor de base de datos especializado en series temporales, desarrollado desde cero por Sebastián Corona como proyecto de investigación técnica avanzada. Está escrito en Rust y Go (dos lenguajes conocidos por su rendimiento y seguridad de memoria), e implementa algoritmos de compresión LZ4 que reducen el tamaño de almacenamiento en más del 80% sin pérdida de fidelidad en los datos. El motor incluye un sistema de índices optimizados para queries de rango temporal, soporte para múltiples formatos de timestamp, y una API de consultas diseñada para ser rápida y expresiva. TempusDB está pensado para casos de uso como monitoreo de infraestructura (Prometheus alternativo), IoT industrial, telemetría de aplicaciones y análisis financiero en tiempo real. Es el proyecto técnico más avanzado de Codex Studio VE y demuestra dominio profundo de arquitecturas de bajo nivel.",
    url: "https://github.com/sebastiancoronadev/TempusDB",
    tech: ["Rust", "Go", "LZ4", "Time Series"],
    icon: "bi-database-fill-gear",
    glow: "orange",
    seoKeywords: [
      "TempusDB",
      "time series database",
      "motor de base de datos Rust",
      "compresión LZ4",
      "series temporales",
      "base de datos alto rendimiento",
      "proyecto Rust Go",
    ],
  },
  {
    title: "Typeon",
    description: "Framework para APIs REST escalables con caché distribuida y cifrado AES-256-GCM.",
    longDescription:
      "Typeon es un framework interno desarrollado por Codex Studio VE para construir APIs REST de alto rendimiento con foco absoluto en seguridad y escalabilidad. Incluye una capa de caché distribuida sobre Redis que reduce los tiempos de respuesta en un 60% en cargas altas, un sistema de cifrado simétrico AES-256-GCM con derivación de claves ECDH para comunicaciones seguras, y middlewares modulares de autenticación, rate limiting y logging estructurado. Typeon está pensado para equipos que necesitan desplegar microservicios rápidos sin sacrificar la seguridad. Cada endpoint se documenta automáticamente vía OpenAPI, y el sistema de migraciones permite evolucionar el esquema de base de datos sin downtime.",
    url: "https://github.com/sebastiancoronadev/Typeon",
    tech: ["TypeScript", "Node.js", "Redis", "AES-256-GCM"],
    icon: "bi-shield-lock-fill",
    glow: "pink",
    seoKeywords: [
      "Typeon framework",
      "API REST segura",
      "TypeScript Node.js framework",
      "cifrado AES-256-GCM",
      "caché distribuida Redis",
      "microservicios seguros",
    ],
  },
  {
    title: "HSTP",
    description: "Protocolo de transporte seguro con validación de identificadores mediante algoritmo de Luhn.",
    longDescription:
      "HSTP (Hardened Secure Transport Protocol) es un protocolo de capa de transporte diseñado por Codex Studio VE como Proof of Concept de ciberseguridad avanzada. Su objetivo es minimizar la exposición de datos sensibles durante la transmisión mediante un esquema de validación de identificadores basado en el algoritmo de Luhn combinado con firma criptográfica. A diferencia de TLS/HTTPS convencionales, HSTP incluye validación bidireccional de payloads, detección temprana de anomalías y un sistema de tokens efímeros que se regeneran por cada paquete. Está diseñado para escenarios donde la integridad de cada dato es crítica: transacciones financieras, telemetría médica, y comunicaciones entre infraestructuras críticas.",
    url: "https://github.com/sebastiancoronadev/Hardened-Secure-Transport-Protocol",
    tech: ["Ciberseguridad", "Criptografía", "Luhn", "Protocol Design"],
    icon: "bi-shield-shaded",
    glow: "orange",
    seoKeywords: [
      "HSTP protocolo seguro",
      "protocolo transporte ciberseguridad",
      "algoritmo Luhn",
      "validación identificadores",
      "criptografía aplicada",
      "seguridad de datos",
    ],
  },
  {
    title: "Odoo Yerbatera del Sur",
    description: "Implementación de sistema de facturación e inventario personalizado en Odoo.",
    longDescription:
      "Proyecto de consultoría ejecutado por Sebastián Corona para Yerbatera del Sur Co., una empresa argentina dedicada a la comercialización de yerba mate. La implementación en Odoo centralizó toda la operación: control de productos (con soporte para lotes, vencimientos y unidades de medida específicas), envíos, proveedores, y operaciones comerciales que antes se llevaban en hojas de cálculo dispersas. El módulo personalizado incluye generación de facturas con validez fiscal argentina, reportes de rentabilidad por producto, alertas automáticas de stock crítico y dashboard gerencial con KPIs en tiempo real. La implementación redujo los errores de facturación en un 30% durante los primeros tres meses de operación, y liberó al equipo administrativo de horas semanales de trabajo manual.",
    url: "https://www.linkedin.com/in/sebastiancoronadev/",
    tech: ["Odoo", "Python", "PostgreSQL", "ERP"],
    icon: "bi-cart-check-fill",
    glow: "pink",
    seoKeywords: [
      "Odoo ERP Argentina",
      "Yerbatera del Sur",
      "implementación Odoo",
      "sistema facturación Odoo",
      "automatización inventario",
      "consultoría Odoo LATAM",
    ],
  },
  {
    title: "Huizhiyun Technologies",
    description: "Pipeline de facturación multilingüe para comercio China-Latinoamérica.",
    longDescription:
      "Proyecto de consultoría ejecutado por Sebastián Corona para Huizhiyun Technologies (汇智云科技股份有限公司), una empresa china especializada en datos empresariales. El desafío: construir un pipeline de facturación que procesara documentos en caracteres chinos (codificaciones UTF-8, GBK y GB2312 mezcladas), convirtiera automáticamente divisas (CNY, EUR, USD) con tasas en tiempo real, y generara reportes ejecutivos en tres idiomas (mandarín, inglés y español). Sebastián desarrolló el motor de extracción con Python, pandas y openpyxl, el sistema de conversión con APIs financieras, y la generación de PDFs con ReportLab y fuentes CJK. Además, junto al ingeniero Liang Zhao, construyó una herramienta de análisis de archivos para prevenir inyección de archivos maliciosos en el flujo. El proyecto fue tan exitoso que la empresa china financió el aprendizaje de mandarín por parte de Sebastián, con miras a expandir operaciones tecnológicas entre Asia y Latinoamérica.",
    url: "https://github.com/sebastiancoronadev/InvoiceNOW",
    tech: ["Python", "Pandas", "ReportLab", "PowerShell"],
    icon: "bi-receipt-cutoff",
    glow: "orange",
    seoKeywords: [
      "Huizhiyun Technologies",
      "facturación multilingüe China",
      "comercio China LATAM",
      "pipeline de datos chino",
      "automatización facturación internacional",
      "汇智云科技",
    ],
  },
];