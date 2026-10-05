"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTranslation } from "@/lib/i18n/useTranslation";

const countryCodes = [
  { code: "+58", country: "VE", flag: "https://flagcdn.com/w40/ve.png" },
  { code: "+54", country: "AR", flag: "https://flagcdn.com/w40/ar.png" },
  { code: "+1", country: "US", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+86", country: "CN", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "+81", country: "JP", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "+43", country: "AT", flag: "https://flagcdn.com/w40/at.png" },
  { code: "+57", country: "CO", flag: "https://flagcdn.com/w40/co.png" },
  { code: "+593", country: "EC", flag: "https://flagcdn.com/w40/ec.png" },
  { code: "+1", country: "CA", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "+34", country: "ES", flag: "https://flagcdn.com/w40/es.png" },
  { code: "+56", country: "CL", flag: "https://flagcdn.com/w40/cl.png" },
];

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+58",
    phone: "",
    projectType: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [codeOpen, setCodeOpen] = useState(false);

  const projectTypes = t("contact.projectTypes") as Record<string, string>;

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("Nombre", formData.name);
    data.append("Email", formData.email);
    data.append("Telefono", `${formData.phoneCode} ${formData.phone}`);
    data.append("Tipo de Proyecto", formData.projectType);
    data.append("Detalles", formData.details);
    data.append("_subject", `Nuevo proyecto: ${formData.projectType || "Contacto"} - ${formData.name}`);
    data.append("_template", "table");
    data.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/contacto@codexstudiove.com", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phoneCode: "+58",
          phone: "",
          projectType: "",
          details: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const currentFlag =
    countryCodes.find((c) => c.code === formData.phoneCode)?.flag || countryCodes[0].flag;

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden max-w-full" aria-label="Formulario de contacto Codex Studio VE">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-full">
        <SectionTitle title={t("sections.contact")} subtitle={t("sections.contactSub")} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto relative rounded-[24px] md:rounded-[28px] p-[1px] bg-gradient-to-br from-pink-500/40 via-white/10 to-orange-500/40"
        >
          <div className="rounded-[23px] md:rounded-[27px] bg-[#0a0a0a]/75 backdrop-blur-2xl backdrop-saturate-150 p-5 md:p-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="font-outfit text-[13px] font-semibold text-white/85 mb-2 block">
                    {t("contact.name")} <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white placeholder-white/25 font-outfit text-sm focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-outfit text-[13px] font-semibold text-white/85 mb-2 block">
                    {t("contact.email")} <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white placeholder-white/25 font-outfit text-sm focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="phone" className="font-outfit text-[13px] font-semibold text-white/85 mb-2 block">
                    {t("contact.phone")}
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCodeOpen(!codeOpen)}
                        className="flex items-center gap-1.5 h-full px-3 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all"
                        aria-label="Seleccionar código de país"
                      >
                        <img src={currentFlag} alt="Bandera" width={22} height={15} className="rounded-sm" />
                        <span className="font-outfit text-sm text-white/85">{formData.phoneCode}</span>
                        <i className={`bi bi-chevron-down text-[10px] text-white/40 transition-transform ${codeOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {codeOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-2 w-48 max-h-64 overflow-y-auto rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50"
                          >
                            {countryCodes.map((c) => (
                              <button
                                key={`${c.country}-${c.code}`}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, phoneCode: c.code });
                                  setCodeOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-white/[0.05] transition-colors"
                              >
                                <img src={c.flag} alt={c.country} width={20} height={14} className="rounded-sm" />
                                <span className="font-outfit text-sm text-white/85">{c.code}</span>
                                <span className="font-outfit text-xs text-white/40 ml-auto">{c.country}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.phonePlaceholder")}
                      className="flex-1 min-w-0 px-4 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white placeholder-white/25 font-outfit text-sm focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="font-outfit text-[13px] font-semibold text-white/85 mb-2 block">
                    {t("contact.projectType")} <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 pr-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white font-outfit text-sm focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-white/40">
                        {t("contact.projectTypePlaceholder")}
                      </option>
                      {Object.entries(projectTypes).map(([key, label]) => (
                        <option key={key} value={label} className="bg-[#0a0a0a] text-white">
                          {label}
                        </option>
                      ))}
                    </select>
                    <i className="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-sm" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="font-outfit text-[13px] font-semibold text-white/85 mb-2 block">
                  {t("contact.details")} <span className="text-pink-400">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t("contact.detailsPlaceholder")}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] text-white placeholder-white/25 font-outfit text-sm focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                  className="px-8 md:px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-orange-500 text-white font-outfit font-bold text-sm md:text-base hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                >
                  {status === "loading" ? (
                    <>
                      <i className="bi bi-arrow-repeat animate-spin" />
                      {t("contact.submitting")}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send" />
                      {t("contact.submit")}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* POPUP DE ESTADO */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setStatus("idle")}
            className="fixed inset-0 z-[200] bg-[#050505]/80 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-md w-full rounded-[28px] p-[1px] ${
                status === "success"
                  ? "bg-gradient-to-br from-pink-500/60 via-white/10 to-orange-500/60"
                  : "bg-gradient-to-br from-red-500/60 via-white/10 to-red-500/60"
              }`}
            >
              <div className="rounded-[27px] bg-[#0a0a0a]/95 backdrop-blur-2xl p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    status === "success"
                      ? "bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40"
                      : "bg-red-500/20 border border-red-500/40"
                  }`}
                >
                  <i
                    className={`bi ${
                      status === "success" ? "bi-check-circle-fill text-pink-400" : "bi-exclamation-circle-fill text-red-400"
                    } text-4xl`}
                  />
                </motion.div>

                <h3 className="font-outfit text-2xl font-bold text-white mb-3 tracking-tight">
                  {status === "success" ? "¡Mensaje Enviado!" : "Error al Enviar"}
                </h3>

                <p className="font-outfit text-sm font-light text-white/60 leading-relaxed mb-6">
                  {status === "success" ? t("contact.success") : t("contact.error")}
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-outfit font-bold text-sm hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}