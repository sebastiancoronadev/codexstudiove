import { Metadata } from "next";
import { BackButton } from "@/components/ui/BackButton";
import { LegalContent } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones Generales de Servicios Digitales",
  description: "Términos y Condiciones Generales de Servicios Digitales de Codex Studio VE. Políticas de pago, no devoluciones, propiedad intelectual, uso indebido, menores de edad y responsabilidad legal. Versión 2026.10.05.",
  keywords: ["términos y condiciones Codex Studio","contrato de servicios digitales","políticas de pago agencia tecnológica","no devoluciones servicios digitales","propiedad intelectual software Venezuela","contrato desarrollo web","términos legales programación","Sebastián Corona términos"],
  authors: [{ name: "Sebastián Ernesto Corona Bencomo", url: "https://www.codexstudiove.com" }],
  creator: "Codex Studio VE",
  publisher: "Codex Studio VE",
  alternates: { canonical: "https://www.codexstudiove.com/legal/terminos", languages: { "es-VE": "https://www.codexstudiove.com/legal/terminos" } },
  openGraph: { title: "Términos y Condiciones | Codex Studio VE", description: "Términos y Condiciones Generales de Servicios Digitales de Codex Studio VE. Versión 2026.10.05.", url: "https://www.codexstudiove.com/legal/terminos", type: "article", locale: "es_VE", siteName: "Codex Studio VE" },
  twitter: { card: "summary", title: "Términos y Condiciones | Codex Studio VE", description: "Términos y Condiciones Generales de Servicios Digitales." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-[160px] pointer-events-none" />
      <article className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
        <BackButton />
        <LegalContent type="terms" />
      </article>
    </main>
  );
}