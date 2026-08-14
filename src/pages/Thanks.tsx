import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Thanks() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <SEO title="Mensaje Enviado" description="Hemos recibido tu mensaje correctamente." path="/thanks" />
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center">
          <i className="fa-solid fa-check text-3xl text-white"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mensaje Enviado</h1>
        <p className="text-zinc-400 mb-8">Gracias por contactarnos. Te responderemos en 24-48 horas.</p>
        <Link to="/" className="px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg transition-all inline-block">Volver al Inicio</Link>
      </div>
    </div>
  )
}
