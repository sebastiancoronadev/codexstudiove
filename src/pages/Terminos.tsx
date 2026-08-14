import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useEffect } from 'react'

export default function Terminos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
      <SEO title="Terminos y Condiciones" description="Terminos y condiciones de Codex Studio VE." path="/terminos" />
      <Header />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient mb-8">Terminos y Condiciones</h1>
          <div className="space-y-6 text-zinc-300">
            <h2 className="text-white text-xl">1. Aceptacion de los Terminos</h2>
            <p>Al acceder y utilizar los servicios de Codex, usted acepta estos terminos.</p>
            <h2 className="text-white text-xl">2. Proceso de Contratacion</h2>
            <p><strong>2.1 Solicitud:</strong> Todo proyecto inicia con una solicitud formal.</p>
            <p><strong>2.2 Presupuesto:</strong> Validez de 14 dias desde su emision.</p>
            <p><strong>2.3 Pago:</strong> 50% adelanto, 50% a la entrega. Pagos en USD.</p>
            <h2 className="text-white text-xl">3. Propiedad Intelectual</h2>
            <p>Al completar el pago total obtiene los derechos de uso del producto final.</p>
            <h2 className="text-white text-xl">4. Plazos y Entrega</h2>
            <p>Los tiempos son estimados. El cliente debe proporcionar material a tiempo.</p>
            <h2 className="text-white text-xl">5. Contacto</h2>
            <p>Email: contacto@codexstudiove.com | Discord: sebmaster09</p>
            <Link to="/" className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg transition-all">Volver a la Web</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
