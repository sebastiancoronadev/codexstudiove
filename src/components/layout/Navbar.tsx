"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";

const navItems = [
  { key: "services", href: "#servicios" },
  { key: "portfolio", href: "#portafolio" },
  { key: "technologies", href: "#tecnologias" },
  { key: "team", href: "#equipo" },
  { key: "testimonials", href: "#testimonios" },
  { key: "biography", href: "#biografia" },
  { key: "contact", href: "#contacto" },
];

const languages = [
  { code: "es", label: "Español", short: "ES", flag: "https://flagcdn.com/w40/ve.png" },
  { code: "en", label: "English", short: "EN", flag: "https://flagcdn.com/w40/us.png" },
  { code: "zh", label: "中文", short: "中文", flag: "https://flagcdn.com/w40/cn.png" },
];

interface NavbarProps {
  visible?: boolean;
}

export function Navbar({ visible = true }: NavbarProps) {
  const { lang, setLang, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const langButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;

    const updatePos = () => {
      if (langButtonRef.current) {
        const rect = langButtonRef.current.getBoundingClientRect();
        setDropdownPos({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right,
        });
      }
    };

    updatePos();
    window.addEventListener("scroll", updatePos);
    window.addEventListener("resize", updatePos);

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-lang-dropdown]") && !target.closest("[data-lang-portal]")) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("scroll", updatePos);
      window.removeEventListener("resize", updatePos);
      document.removeEventListener("mousedown", handler);
    };
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLangChange = (code: string) => {
    setLang(code as "es" | "en" | "zh");
    setLangOpen(false);
  };

  const currentLanguage = languages.find((l) => l.code === lang);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                ? "bg-[#050505]/70 backdrop-blur-2xl backdrop-saturate-150 py-2"
                : "bg-transparent py-3 md:py-4"
            }`}
          >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center shrink-0"
                aria-label="Codex Studio VE - Inicio"
                onClick={() => setMenuOpen(false)}
              >
                <div className="relative w-[110px] h-[50px] md:w-[140px] md:h-[62px]">
                  <Image
                    src="/assets/images/brand/codex-logo-web.png"
                    alt="Codex Studio VE Logo"
                    fill
                    sizes="(max-width: 768px) 110px, 140px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-5 xl:gap-7">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-outfit text-sm text-white/50 hover:text-white transition-colors relative group whitespace-nowrap"
                  >
                    {t(`nav.${item.key}`)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div data-lang-dropdown>
                  <button
                    ref={langButtonRef}
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 text-xs font-outfit font-medium"
                    aria-label="Seleccionar idioma"
                    aria-expanded={langOpen}
                  >
                    {currentLanguage && (
                      <img
                        src={currentLanguage.flag}
                        alt={currentLanguage.label}
                        width={20}
                        height={14}
                        className="rounded-sm object-cover"
                      />
                    )}
                    <span className="hidden sm:inline">{currentLanguage?.short}</span>
                    <i
                      className={`bi bi-chevron-down text-[10px] transition-transform duration-300 ${
                        langOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden w-10 h-10 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white/70 hover:text-white transition-colors z-[60] relative"
                  aria-label="Abrir menú de navegación"
                >
                  <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-lg`} />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {langOpen && (
          <motion.div
            data-lang-portal
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: `${dropdownPos.top}px`,
              right: `${dropdownPos.right}px`,
              zIndex: 9999,
            }}
            className="w-44 rounded-xl bg-[#0a0a0a]/98 backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.12] shadow-[0_10px_40px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLangChange(l.code)}
                className={`w-full flex items-center gap-2.5 pl-3 pr-4 py-2.5 text-left font-outfit text-[13px] transition-colors ${
                  lang === l.code
                    ? "bg-gradient-to-r from-pink-500/15 to-orange-500/15 text-white"
                    : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <img
                  src={l.flag}
                  alt={l.label}
                  width={18}
                  height={13}
                  className="rounded-sm object-cover shrink-0"
                />
                <span className="flex-1 text-left">{l.label}</span>
                {lang === l.code && (
                  <i className="bi bi-check2 text-pink-400 text-sm shrink-0" aria-hidden="true" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/98 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-28 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group flex items-center justify-between py-3.5 border-b border-white/[0.06]"
                  >
                    <span className="font-outfit text-xl font-bold text-white/85 group-active:text-transparent group-active:bg-clip-text group-active:bg-gradient-to-r group-active:from-pink-500 group-active:to-orange-400 transition-all">
                      {t(`nav.${item.key}`)}
                    </span>
                    <i className="bi bi-arrow-right text-white/30 text-lg" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8"
              >
                <p className="font-outfit text-[10px] uppercase tracking-wider text-white/30 mb-3">
                  Idioma / Language / 语言
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        handleLangChange(l.code);
                        setMenuOpen(false);
                      }}
                      className={`flex flex-col items-center gap-2 py-2.5 rounded-xl border transition-all ${
                        lang === l.code
                          ? "bg-gradient-to-br from-pink-500/15 to-orange-500/15 border-pink-500/40"
                          : "bg-white/[0.03] border-white/[0.08]"
                      }`}
                    >
                      <img src={l.flag} alt={l.label} width={26} height={18} className="rounded-sm object-cover" />
                      <span
                        className={`font-outfit text-[11px] font-medium ${
                          lang === l.code ? "text-white" : "text-white/50"
                        }`}
                      >
                        {l.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="mt-auto pt-8 flex flex-col items-center gap-3"
              >
                <a
                  href="https://wa.me/584125008324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-outfit font-bold text-sm text-center"
                >
                  {lang === "es" ? "Contactar ahora" : lang === "en" ? "Contact now" : "立即联系"}
                </a>
                <p className="font-outfit text-[11px] text-white/25 text-center">
                  {t("footer.copyright")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}