import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Información Legal",
    template: "%s | Codex Studio VE",
  },
  description:
    "Términos, condiciones, políticas de privacidad y condiciones de servicio de Codex Studio VE. Información legal completa y transparente.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    locale: "es_VE",
    siteName: "Codex Studio VE",
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}