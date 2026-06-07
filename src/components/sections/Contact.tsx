import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const { t } = useLanguage();
  const [phoneCode, setPhoneCode] = useState('+58');
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [projectType, setProjectType] = useState('');
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    if (!captchaValue) {
      e.preventDefault();
      alert('Por favor, completa el CAPTCHA antes de enviar el formulario.');
      return;
    }
  };

  const phoneOptions = [
    { value: '+58', label: '+58 🇻🇪' },
    { value: '+34', label: '+34 🇪🇸' },
    { value: '+1', label: '+1 🇺🇸' },
    { value: '+52', label: '+52 🇲🇽' },
    { value: '+54', label: '+54 🇦🇷' },
    { value: '+56', label: '+56 🇨🇱' },
    { value: '+57', label: '+57 🇨🇴' },
    { value: '+86', label: '+86 🇨🇳' }
  ];

  const projectTypeOptions = [
    { value: '', label: t('contact.form.type.opt1') },
    { value: 'Web', label: 'Web' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Video', label: 'Video' },
    { value: 'Discord', label: 'Discord' },
    { value: 'Minecraft', label: 'Minecraft' },
    { value: 'Otro', label: t('contact.form.type.other') || 'Otro' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{t('contact.title')}</h2>
          <p className="text-xl text-gray-400">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="snake-border p-[2px] glow-effect hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] transition-shadow duration-500 rounded-[16px]"
        >
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/codex.studio.ve@gmail.com" 
            method="POST"
            className="bg-[#111111] rounded-[14px] p-6 sm:p-8 md:p-12 relative overflow-visible group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[14px]"></div>
            
            {/* Hidden fields for data submission */}
            <input type="hidden" name="_subject" value="Nueva solicitud de Codex - Formulario Web" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="phonePrefix" value={phoneCode} />
            <input type="hidden" name="projectType" value={projectType} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-30">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-white transition-colors">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="cursor-text w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F] focus:shadow-[0_0_10px_rgba(255,0,127,0.3)] transition-all"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-white transition-colors">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="cursor-text w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F] focus:shadow-[0_0_10px_rgba(255,0,127,0.3)] transition-all"
                  placeholder=""
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-20">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-white transition-colors">{t('contact.form.phone')}</label>
                <div className="flex relative">
                  {/* Custom Prefix Select */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsPhoneOpen(true)}
                    onMouseLeave={() => setIsPhoneOpen(false)}
                  >
                    <div className="cursor-pointer bg-[#0A0A0A] border border-gray-800 rounded-l-lg pl-3 pr-8 py-3 text-white hover:border-[#FF007F] transition-colors w-24 flex items-center h-[50px]">
                      {phoneOptions.find(opt => opt.value === phoneCode)?.label || phoneCode}
                      <svg className="w-4 h-4 text-gray-400 absolute right-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    
                    <AnimatePresence>
                      {isPhoneOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-[#111] border border-gray-700 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex flex-col w-32 overflow-hidden z-[100] max-h-60 overflow-y-auto custom-scrollbar"
                        >
                          {phoneOptions.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setPhoneCode(opt.value);
                                setIsPhoneOpen(false);
                              }}
                              className={`px-4 py-3 text-left text-sm hover:bg-[#222] transition-colors ${phoneCode === opt.value ? 'text-[#FF007F] font-bold bg-[#1a1a1a]' : 'text-white'}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="cursor-text w-full bg-[#0A0A0A] border-y border-r border-gray-800 rounded-r-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F] focus:shadow-[0_0_10px_rgba(255,0,127,0.3)] transition-all h-[50px]"
                    placeholder=""
                  />
                </div>
              </div>
              <div 
                className="relative"
                onMouseEnter={() => setIsProjectOpen(true)}
                onMouseLeave={() => setIsProjectOpen(false)}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-white transition-colors">{t('contact.form.type')}</label>
                
                {/* Custom Project Type Select */}
                <div className="cursor-pointer w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-3 text-white hover:border-[#FF007F] transition-colors flex items-center justify-between h-[50px]">
                  <span>{projectType ? projectTypeOptions.find(o => o.value === projectType)?.label : t('contact.form.type.opt1')}</span>
                  <svg className="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>

                <AnimatePresence>
                  {isProjectOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-[#111] border border-gray-700 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex flex-col w-full overflow-hidden z-[100]"
                    >
                      {projectTypeOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setProjectType(opt.value);
                            setIsProjectOpen(false);
                          }}
                          className={`px-4 py-3 text-left text-sm hover:bg-[#222] transition-colors ${projectType === opt.value ? 'text-[#FF007F] font-bold bg-[#1a1a1a]' : 'text-gray-300'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <label htmlFor="details" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-white transition-colors">{t('contact.form.details')}</label>
              <textarea 
                id="details" 
                name="details" 
                required 
                rows={5}
                className="cursor-text w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F] focus:shadow-[0_0_10px_rgba(255,0,127,0.3)] transition-all resize-y"
                placeholder=""
              ></textarea>
            </div>

            <div className="mb-8 flex justify-center relative z-10 w-full overflow-hidden">
              <ReCAPTCHA
                sitekey="TU_SITE_KEY_AQUI"
                onChange={(val) => setCaptchaValue(val)}
                theme="dark"
              />
            </div>

            <button 
              type="submit" 
              className="cursor-pointer w-full bg-gradient-to-r from-[#FF007F] to-[#FF0000] text-white rounded-lg font-bold text-lg py-4 hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] relative z-10"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
