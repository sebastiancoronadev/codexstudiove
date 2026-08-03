import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Terminos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO title="Términos y Condiciones" description="Términos y condiciones de Codex Studio." path="/terminos" />
      <Header />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient mb-8">Términos y Condiciones</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
            <h2 className="text-white text-xl">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar los servicios de Codex, usted acepta estar sujeto a estos términos y condiciones.</p>
            <h2 className="text-white text-xl">2. Proceso de Contratación</h2>
            <p><strong>2.1 Solicitud:</strong> Todo proyecto inicia con una solicitud formal.</p>
            <p><strong>2.2 Presupuesto:</strong> Validez de 14 días desde su emisión.</p>
            <p><strong>2.3 Pago:</strong> 50% adelanto, 50% a la entrega. Pagos en USD.</p>
            <h2 className="text-white text-xl">3. Propiedad Intelectual</h2>
            <p><strong>3.1 Derechos del Cliente:</strong> Al completar el pago total obtiene los derechos de uso.</p>
            <p><strong>3.2 Derechos de Codex:</strong> Podemos mostrar el proyecto en nuestro portafolio.</p>
            <h2 className="text-white text-xl">4. Plazos y Entrega</h2>
            <p>Los tiempos son estimados. El cliente debe proporcionar material a tiempo.</p>
            <h2 className="text-white text-xl">5. Revisión y Modificaciones</h2>
            <p>14 días para revisar. 2 revisiones Web, 1 Video, 1 Servidores.</p>
            <h2 className="text-white text-xl">6. Cancelación y Reembolsos</h2>
            <p>El depósito inicial no es retornable. Si Codex no entrega, se reembolsa el total.</p>
            <h2 className="text-white text-xl">7. Contacto</h2>
            <p>Email: contacto@codexstudiove.com | Discord: sebmaster09</p>
            <Link to="/" className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg transition-all">Volver a la Web</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
