import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Outfit, Syncopate } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { I18nProvider } from "@/lib/i18n/useTranslation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  display: "swap",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexstudiove.com"),
  title: {
    default: "Codex Studio VE | Sebastián Corona - Arquitectura de Software de Élite",
    template: "%s | Codex Studio VE",
  },
  description:
    "Sebastián Corona, Fundador de Codex Studio VE. Desarrollo Full-Stack, automatización empresarial, Odoo ERP, servidores Minecraft, Discord bots y arquitecturas cloud de alto rendimiento. Valencia, Venezuela.",
  keywords: [
    "Sebastián Corona",
    "Sebastián Corona programador",
    "Sebastián Corona empresario",
    "Codex Studio VE",
    "desarrollador full-stack Venezuela",
    "automatización empresarial",
    "Odoo ERP Venezuela",
    "servidores Minecraft",
    "Discord bots",
    "arquitectura cloud",
    "ciberseguridad Venezuela",
    "programador Carabobo",
    "desarrollo web Valencia",
    "Next.js Venezuela",
    "React Venezuela",
    "Python Venezuela",
    "editor de video Venezuela",
    "Mi Pana en Linyi",
    "empresario tecnológico Venezuela",
  ],
  authors: [{ name: "Sebastián Ernesto Corona Bencomo", url: "https://www.codexstudiove.com" }],
  creator: "Sebastián Ernesto Corona Bencomo",
  publisher: "Codex Studio VE",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/assets/favicon/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    alternateLocale: ["en_US", "zh_CN"],
    url: "https://www.codexstudiove.com",
    siteName: "Codex Studio VE",
    title: "Codex Studio VE | Sebastián Corona - Arquitectura de Software de Élite",
    description:
      "Desarrollo Full-Stack, automatización empresarial, Odoo ERP, servidores Minecraft y arquitecturas cloud. Desde Venezuela para el mundo.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codex Studio VE - Sebastián Corona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Studio VE | Sebastián Corona",
    description: "Arquitectura de software de élite desde Venezuela. Full-Stack, automatización, Odoo ERP, cloud.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@codexstudiove",
  },
  alternates: {
    canonical: "https://www.codexstudiove.com",
    languages: {
      "es-VE": "https://www.codexstudiove.com",
      "en-US": "https://www.codexstudiove.com/en",
      "zh-CN": "https://www.codexstudiove.com/zh",
    },
  },
  category: "technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.codexstudiove.com/#organization",
        name: "Codex Studio VE",
        url: "https://www.codexstudiove.com",
        logo: "https://www.codexstudiove.com/assets/images/brand/codex-logo-web.png",
        telephone: "+584125008324",
        email: "contacto@codexstudiove.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressRegion: "Carabobo",
          addressCountry: "VE",
        },
        founder: {
          "@type": "Person",
          name: "Sebastián Ernesto Corona Bencomo",
          jobTitle: "Fundador & CTO",
          url: "https://www.codexstudiove.com",
          sameAs: [
            "https://github.com/sebastiancoronadev",
            "https://linkedin.com/in/sebastiancoronadev",
          ],
        },
        sameAs: [
          "https://github.com/sebastiancoronadev",
          "https://linkedin.com/in/sebastiancoronadev",
          "https://youtube.com/@codexstudiove",
        ],
        areaServed: ["VE", "US", "CN", "AR", "JP", "CO", "EC", "CA", "ES", "CL", "AT"],
        knowsLanguage: ["es", "en", "zh"],
        description:
          "Codex Studio VE es una agencia de arquitectura de software de élite especializada en desarrollo full-stack, automatización empresarial, Odoo ERP, ciberseguridad y soluciones cloud. Fundada por Sebastián Corona en Valencia, Venezuela.",
      },
      {
        "@type": "Person",
        "@id": "https://www.codexstudiove.com/#person",
        name: "Sebastián Ernesto Corona Bencomo",
        alternateName: "Sebastián Corona",
        jobTitle: "Fundador & CTO",
        worksFor: {
          "@type": "Organization",
          "@id": "https://www.codexstudiove.com/#organization",
        },
        url: "https://www.codexstudiove.com",
        image: "https://www.codexstudiove.com/assets/images/team/sebastian.png",
        sameAs: [
          "https://github.com/sebastiancoronadev",
          "https://linkedin.com/in/sebastiancoronadev",
        ],
        knowsAbout: [
          "Desarrollo Full-Stack",
          "Automatización Empresarial",
          "Odoo ERP",
          "Cloud Architecture",
          "Ciberseguridad",
          "Edición de Video",
          "Comercio Internacional China-LATAM",
        ],
        nationality: "VE",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.codexstudiove.com/#website",
        url: "https://www.codexstudiove.com",
        name: "Codex Studio VE",
        publisher: { "@id": "https://www.codexstudiove.com/#organization" },
        inLanguage: ["es-VE", "en-US", "zh-CN"],
      },
    ],
  };

  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${outfit.variable} ${syncopate.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased select-none">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}