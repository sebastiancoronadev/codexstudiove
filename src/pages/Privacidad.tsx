import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useEffect } from 'react'

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
      <SEO title="Politica de Privacidad" description="Politica de privacidad de Codex Studio VE." path="/privacidad" />
      <Header />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient mb-8">Politica de Privacidad</h1>
          <div className="space-y-6 text-zinc-300">
            <h2 className="text-white text-xl">1. Informacion General</h2>
            <p>En Codex, la privacidad de nuestros clientes es una prioridad.</p>
            <h2 className="text-white text-xl">2. Informacion que Recopilamos</h2>
            <p>Nombre, correo, telefono y detalles del proyecto.</p>
            <h2 className="text-white text-xl">3. Uso de la Informacion</h2>
            <p>Para responder consultas y enviar presupuestos.</p>
            <h2 className="text-white text-xl">4. Comparticion</h2>
            <p>No vendemos ni compartimos su informacion con terceros.</p>
            <h2 className="text-white text-xl">5. Contacto</h2>
            <p>contacto@codexstudiove.com</p>
            <Link to="/" className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg transition-all">Volver a la Web</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
