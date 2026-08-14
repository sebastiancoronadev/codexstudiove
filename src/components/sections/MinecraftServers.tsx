import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

const BungeeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M80 32C53.5 32 32 53.5 32 80s21.5 48 48 48l152 0 0 40-48 48-72 0c-39.8 0-72 32.2-72 72l0 64-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-64c0-13.3 10.7-24 24-24l72 0 48 48 0 40-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-40 48-48 72 0c13.3 0 24 10.7 24 24l0 64-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-64c0-39.8-32.2-72-72-72l-72 0-48-48 0-40 152 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L80 32z"/></svg>)
const PluginsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9 0-44.2-35.8-80-80-80-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128 35.8 128 0 163.8 0 208s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"/></svg>)
const MinigamesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M141.4 2.3C103-8 63.5 14.8 53.3 53.2L2.5 242.7C-7.8 281.1 15 320.6 53.4 330.9l189.5 50.8c38.4 10.3 77.9-12.5 88.2-50.9l50.8-189.5c10.3-38.4-12.5-77.9-50.9-88.2L141.4 2.3zm23 205.7a32 32 0 1 1 55.4-32 32 32 0 1 1 -55.4 32zM79.2 220.3a32 32 0 1 1 32 55.4 32 32 0 1 1 -32-55.4zm185 96.4a32 32 0 1 1 -32-55.4 32 32 0 1 1 32 55.4zm9-208.4a32 32 0 1 1 32 55.4 32 32 0 1 1 -32-55.4zm-121 14.4a32 32 0 1 1 -32-55.4 32 32 0 1 1 32 55.4zM418 192L377.4 343.2c-17.2 64-83 102-147 84.9l-38.3-10.3 0 30.2c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L418 192z"/></svg>)
const ModpacksIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7"><path fill="white" d="M224.4 8.3C244-2.8 268-2.8 287.6 8.3l176 99.7c20 11.4 32.4 32.6 32.4 55.7l0 197.4c0 23-12.4 44.3-32.4 55.7l-176 99.7c-19.6 11.1-43.6 11.1-63.1 0l-176-99.7C28.4 405.5 16 384.2 16 361.2l0-197.4c0-23 12.4-44.3 32.4-55.7l176-99.7zM102.6 155.6c-8.8-3.1-18.8 .3-23.8 8.6s-3.2 18.7 3.6 25l3.2 2.4 150.2 90.2 0 148.7c0 11 9 20 20 20 11 0 20-9 20-20l0-148.7 150.3-90.2c9.5-5.7 12.6-18 6.9-27.4s-18-12.5-27.4-6.9l-149.7 89.8-149.7-89.8-3.7-1.7z"/></svg>)
const AnticheatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l201.2 0C261 469.4 240 414.5 240 356.4l0-31.1c0-34.4 22-65 54.7-75.9l112-37.3c3.1-1 6.2-1.8 9.3-2.5l0-39.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zm87.8 312.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"/></svg>)
const DashboardIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7"><path fill="white" d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 32c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM88 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l136 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 352zm256 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zM496 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM88 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>)

const minecraftServices = [
  { icon: BungeeIcon, title: 'BungeeCord & Networks', description: 'Conexión de múltiples modalidades (Survival, Skyblock, Factions).', color: 'bg-lime-500' },
  { icon: PluginsIcon, title: 'Configuración de Plugins', description: 'EssentialsX, WorldEdit, LuckPerms, Vault.', color: 'bg-orange-500' },
  { icon: MinigamesIcon, title: 'Minijuegos Personalizados', description: 'Eventos, competencias, leaderboards.', color: 'bg-pink-500' },
  { icon: ModpacksIcon, title: 'Modpacks & Forge/Fabric', description: 'Instalación de modpacks pesados, optimización de RAM y TPS.', color: 'bg-cyan-500' },
  { icon: AnticheatIcon, title: 'Seguridad y Anticheat', description: 'Plugins anticheat, backups.', color: 'bg-red-500' },
  { icon: DashboardIcon, title: 'Dashboard y Panel', description: 'Pterodactyl, dashboards personalizados.', color: 'bg-violet-500' },
]

export default function MinecraftServers() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="minecraft" className="relative py-24 bg-black overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('minecraft.title')}</span></h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">{t('minecraft.subtitle')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {minecraftServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} whileHover={{ y: -4 }} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-green-500/30 transition-all">
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><service.icon /></div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg transition-all inline-block">{t('minecraft.title')}</a>
        </div>
    </section>
  )
}
