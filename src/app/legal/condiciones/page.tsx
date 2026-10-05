import { Metadata } from "next";
import { BackButton } from "@/components/ui/BackButton";
import { LegalContent } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Condiciones Generales de Contratación de Servicios Digitales",
  description: "Condiciones Generales de Contratación de Servicios Digitales de Codex Studio VE. Naturaleza del servicio, cotizaciones, pagos, no devoluciones, plazos y responsabilidades. Versión 2026.10.05.",
  keywords: ["condiciones de contratación Codex Studio","contratación servicios digitales","cotizaciones desarrollo software","política de pagos servicios digitales","términos comerciales agencia tecnológica","contrato freelancer Venezuela","condiciones desarrollo web","Sebastián Corona condiciones"],
  authors: [{ name: "Sebastián Ernesto Corona Bencomo", url: "https://www.codexstudiove.com" }],
  creator: "Codex Studio VE",
  publisher: "Codex Studio VE",
  alternates: { canonical: "https://www.codexstudiove.com/legal/condiciones" },
  openGraph: { title: "Condiciones Generales de Contratación | Codex Studio VE", description: "Condiciones Generales de Contratación de Servicios Digitales. Versión 2026.10.05.", url: "https://www.codexstudiove.com/legal/condiciones", type: "article", locale: "es_VE", siteName: "Codex Studio VE" },
  twitter: { card: "summary", title: "Condiciones Generales de Contratación | Codex Studio VE", description: "Condiciones generales para la contratación de servicios digitales." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

export default function CondicionesPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-[160px] pointer-events-none" />
      <article className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
        <BackButton />
        <LegalContent type="conditions" />
      </article>
    </main>
  );
}