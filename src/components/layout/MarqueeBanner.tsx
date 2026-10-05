"use client";
import { Marquee } from "@/components/ui/Marquee";

const bannerItems = [
  "E-COMMERCE",
  "FULL-STACK",
  "AUTOMATIZACIÓN",
  "ODOO ERP",
  "CLOUD",
  "CIBERSEGURIDAD",
  "MINECRAFT",
  "DISCORD BOTS",
  "UI / UX",
  "SEO",
];

export function MarqueeBanner() {
  return (
    <div className="relative py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <Marquee items={bannerItems} direction="left" speed={90} />
    </div>
  );
}