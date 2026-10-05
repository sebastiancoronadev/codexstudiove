import { Metadata } from "next";
import { BackButton } from "@/components/ui/BackButton";
import { LegalContent } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos Personales",
  description: "Política de Privacidad y Tratamiento de Datos Personales de Codex Studio VE. Recopilación, uso, conservación y protección de datos. Derechos del titular. Versión 2026.10.05.",
  keywords: ["política de privacidad Codex Studio","tratamiento de datos personales","protección de datos Venezuela","cookies agencia tecnológica","derechos del titular datos","privacidad servicios digitales","GDPR LATAM","Sebastián Corona privacidad"],
  authors: [{ name: "Sebastián Ernesto Corona Bencomo", url: "https://www.codexstudiove.com" }],
  creator: "Codex Studio VE",
  publisher: "Codex Studio VE",
  alternates: { canonical: "https://www.codexstudiove.com/legal/privacidad" },
  openGraph: { title: "Política de Privacidad | Codex Studio VE", description: "Política de Privacidad y Tratamiento de Datos Personales. Versión 2026.10.05.", url: "https://www.codexstudiove.com/legal/privacidad", type: "article", locale: "es_VE", siteName: "Codex Studio VE" },
  twitter: { card: "summary", title: "Política de Privacidad | Codex Studio VE", description: "Tratamiento de datos personales y derechos del titular." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[160px] pointer-events-none" />
      <article className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
        <BackButton />
        <LegalContent type="privacy" />
      </article>
    </main>
  );
}