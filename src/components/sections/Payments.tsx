"use client";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { paymentMethods } from "@/lib/data/payments";
import { useTranslation } from "@/lib/i18n/useTranslation";

const allMethods = [...paymentMethods, ...paymentMethods, ...paymentMethods];

export function Payments() {
  const { t } = useTranslation();

  return (
    <section id="pagos" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden" aria-label="Métodos de pago aceptados por Codex Studio VE">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 mb-12">
        <SectionTitle title={t("sections.payments")} subtitle={t("sections.paymentsSub")} />
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-5 md:gap-7 py-6 marquee-track">
          {allMethods.map((method, index) => (
            <div
              key={`${method.name}-${index}`}
              className="group relative shrink-0 w-[130px] h-[80px] md:w-[160px] md:h-[95px] rounded-2xl bg-white/[0.92] backdrop-blur-xl border border-white/40 hover:border-white/80 transition-all duration-500 overflow-hidden flex items-center justify-center p-4 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)]"
              title={method.name}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-white/80" />

              <div className="relative w-full h-full z-10">
                <Image
                  src={method.image}
                  alt={`${method.name} - Método de pago aceptado en Codex Studio VE`}
                  fill
                  sizes="(max-width: 768px) 130px, 160px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: paymentScroll 90s linear infinite;
          width: fit-content;
        }
        @keyframes paymentScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}