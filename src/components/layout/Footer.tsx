"use client";
import Image from "next/image";
import { AnalogClock } from "@/components/ui/AnalogClock";
import { useTranslation } from "@/lib/i18n/useTranslation";

const socialLinks = [
  { name: "LinkedIn", icon: "bi-linkedin", url: "https://linkedin.com/in/sebastiancoronadev" },
  { name: "Reddit", icon: "bi-reddit", url: "https://reddit.com/user/sebastiancoronadev" },
  { name: "GitHub", icon: "bi-github", url: "https://github.com/sebastiancoronadev" },
  { name: "YouTube", icon: "bi-youtube", url: "https://youtube.com/@codexstudiove" },
  { name: "Discord", icon: "bi-discord", url: "https://discord.com/users/sebmaster09" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="relative bg-[#050505] border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-pink-600/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <p className="font-outfit text-[14px] font-light text-white/45 leading-[1.7] mb-5">
              {t("footer.description")}
            </p>
            <p className="font-outfit text-[12px] font-light text-white/35 flex items-center gap-1.5 justify-center md:justify-start">
              <i className="bi bi-geo-alt" /> {t("footer.location")}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-outfit font-bold text-white text-[15px] mb-5 tracking-wide">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+584125008324" className="font-outfit text-[13px] font-light text-white/50 hover:text-pink-400 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
                  <i className="bi bi-telephone w-4" /> +58 412-5008324
                </a>
              </li>
              <li>
                <a href="mailto:contacto@codexstudiove.com" className="font-outfit text-[13px] font-light text-white/50 hover:text-pink-400 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
                  <i className="bi bi-envelope w-4" /> contacto@codexstudiove.com
                </a>
              </li>
              <li>
                <a href="mailto:sebastiancorona@codexstudiove.com" className="font-outfit text-[13px] font-light text-white/50 hover:text-pink-400 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
                  <i className="bi bi-envelope-at w-4" /> sebastiancorona@codexstudiove.com
                </a>
              </li>
              <li>
                <a href="https://www.codexstudiove.com" target="_blank" rel="noopener noreferrer" className="font-outfit text-[13px] font-light text-white/50 hover:text-pink-400 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
                  <i className="bi bi-globe w-4" /> www.codexstudiove.com
                </a>
              </li>
            </ul>

            <h4 className="font-outfit font-bold text-white text-[15px] mt-8 mb-4 tracking-wide">
              {t("footer.social")}
            </h4>
            <div className="flex gap-2.5 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <i className={`bi ${social.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-outfit font-bold text-white text-[15px] mb-6 tracking-wide text-center">
              {t("footer.localTime")}
            </h4>
            <AnalogClock />
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-outfit text-[12px] font-light text-white/35 leading-none">
              {t("footer.createdBy")}
            </span>
            <div className="relative w-16 h-5 overflow-visible">
              <Image
                src="/assets/images/brand/codex-logo-web.png"
                alt="Codex Studio VE"
                width={120}
                height={40}
                className="object-contain object-left w-full h-full"
                style={{ transform: "translateY(-5px)" }}
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="/legal/terminos" className="font-outfit text-[12px] font-light text-white/35 hover:text-white/70 transition-colors">
              {t("footer.terms")}
            </a>
            <a href="/legal/privacidad" className="font-outfit text-[12px] font-light text-white/35 hover:text-white/70 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/legal/condiciones" className="font-outfit text-[12px] font-light text-white/35 hover:text-white/70 transition-colors">
              {t("footer.conditions")}
            </a>
          </div>
          <p className="font-outfit text-[11px] font-light text-white/25">
            © 2025-2026 Codex Studio VE
          </p>
        </div>
      </div>
    </footer>
  );
}