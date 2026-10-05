"use client";
import { Marquee } from "@/components/ui/Marquee";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function MarqueeBanner() {
  const { t, mounted } = useTranslation();

  const esItems = ["E-COMMERCE", "FULL-STACK", "AUTOMATIZACIÓN", "ODOO ERP", "CLOUD", "CIBERSEGURIDAD", "MINECRAFT", "DISCORD BOTS", "UI / UX", "SEO"];
  const enItems = ["E-COMMERCE", "FULL-STACK", "AUTOMATION", "ODOO ERP", "CLOUD", "CYBERSECURITY", "MINECRAFT", "DISCORD BOTS", "UI / UX", "SEO"];
  const zhItems = ["电子商务", "全栈开发", "自动化", "ODOO ERP", "云服务", "网络安全", "MINECRAFT", "DISCORD 机器人", "UI / UX", "SEO"];

  const lang = (mounted && typeof window !== "undefined" && localStorage.getItem("codex_lang")) || "es";
  const items = lang === "en" ? enItems : lang === "zh" ? zhItems : esItems;

  return (
    <div className="relative py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <Marquee items={items} direction="left" speed={90} />
    </div>
  );
}