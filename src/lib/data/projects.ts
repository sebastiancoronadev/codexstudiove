export interface Project {
  title: string;
  descriptionKey: string;
  longDescriptionKey: string;
  url: string;
  tech: string[];
  logo?: string;
  icon?: string;
  glow: "pink" | "orange" | "mixed";
}

export const projects: Project[] = [
  {
    title: "Mi Pana en Linyi",
    descriptionKey: "portfolio.linyi.short",
    longDescriptionKey: "portfolio.linyi.long",
    url: "https://www.mipanaenlinyi.com",
    tech: ["Next.js", "Supabase", "Stripe", "Odoo"],
    logo: "/assets/images/projects/linyi.png",
    glow: "pink",
  },
  {
    title: "Noogui",
    descriptionKey: "portfolio.noogui.short",
    longDescriptionKey: "portfolio.noogui.long",
    url: "https://nooguive.vercel.app",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    logo: "/assets/images/projects/noogui.png",
    glow: "orange",
  },
  {
    title: "Lipid-Profile-Predictor",
    descriptionKey: "portfolio.lipid.short",
    longDescriptionKey: "portfolio.lipid.long",
    url: "https://github.com/sebastiancoronadev/Lipid-Profile-Predictor",
    tech: ["JavaScript", "Data Science", "HTML5", "Chart.js"],
    icon: "bi-heart-pulse",
    glow: "pink",
  },
  {
    title: "TempusDB",
    descriptionKey: "portfolio.tempusdb.short",
    longDescriptionKey: "portfolio.tempusdb.long",
    url: "https://github.com/sebastiancoronadev/TempusDB",
    tech: ["Rust", "Go", "LZ4"],
    logo: "/assets/images/projects/TempusDB.png",
    glow: "orange",
  },
  {
    title: "Typeon",
    descriptionKey: "portfolio.typeon.short",
    longDescriptionKey: "portfolio.typeon.long",
    url: "https://github.com/sebastiancoronadev/Typeon",
    tech: ["TypeScript", "Node.js", "Redis", "AES-256-GCM"],
    logo: "/assets/images/projects/Typeon.png",
    glow: "pink",
  },
  {
    title: "HSTP",
    descriptionKey: "portfolio.hstp.short",
    longDescriptionKey: "portfolio.hstp.long",
    url: "https://github.com/sebastiancoronadev/Hardened-Secure-Transport-Protocol",
    tech: ["Ciberseguridad", "Criptografía"],
    icon: "bi-shield-shaded",
    glow: "orange",
  },
  {
    title: "Odoo Yerbatera del Sur",
    descriptionKey: "portfolio.odoo.short",
    longDescriptionKey: "portfolio.odoo.long",
    url: "https://www.linkedin.com/in/sebastiancoronadev/",
    tech: ["Odoo", "Python", "PostgreSQL"],
    icon: "bi-cart-check-fill",
    glow: "pink",
  },
  {
    title: "Huizhiyun Technologies",
    descriptionKey: "portfolio.huizhiyun.short",
    longDescriptionKey: "portfolio.huizhiyun.long",
    url: "https://github.com/sebastiancoronadev/InvoiceNOW",
    tech: ["Python", "Pandas", "ReportLab"],
    icon: "bi-receipt-cutoff",
    glow: "orange",
  },
];