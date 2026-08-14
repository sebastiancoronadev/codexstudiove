import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sebastiancoronadev', icon: 'fa-brands fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sebastiancoronadev', icon: 'fa-brands fa-linkedin' },
    { name: 'X', url: '', icon: 'fa-brands fa-x-twitter' },
    { name: 'YouTube', url: 'https://youtube.com/@codexstudiove', icon: 'fa-brands fa-youtube' },
    { name: 'Discord', url: 'https://discord.gg/793142687858950144', icon: 'fa-brands fa-discord' },
    { name: 'Reddit', url: 'https://reddit.com/r/sebastiancoronadev', icon: 'fa-brands fa-reddit' },
  ]

  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{t('footer.description')}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url || '#'} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-pink hover:border-brand-pink/50 transition-all duration-300 ${!social.url ? 'opacity-30 pointer-events-none' : ''}`}>
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-400">
                <i className="fa-solid fa-envelope text-brand-pink"></i>
                <a href="mailto:contacto@codexstudiove.com" className="hover:text-white transition-colors">{t('footer.email')}</a>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <i className="fa-solid fa-phone text-brand-pink"></i>
                <span>{t('footer.phone')}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <i className="fa-solid fa-location-dot text-brand-pink"></i>
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <div className="space-y-2 text-sm">
              <Link to="/terminos" className="flex items-center gap-2 text-zinc-400 hover:text-brand-pink transition-colors group">
                <span className="group-hover:translate-x-1 transition-transform">➜</span> {t('footer.terms')}
              </Link>
              <Link to="/faq" className="flex items-center gap-2 text-zinc-400 hover:text-brand-pink transition-colors group">
                <span className="group-hover:translate-x-1 transition-transform">➜</span> {t('footer.faq')}
              </Link>
              <Link to="/privacidad" className="flex items-center gap-2 text-zinc-400 hover:text-brand-pink transition-colors group">
                <span className="group-hover:translate-x-1 transition-transform">➜</span> {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

