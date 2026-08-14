import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO title="Política de Privacidad" description="Política de privacidad de Codex Studio." path="/privacidad" />
      <Header />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient mb-8">Política de Privacidad</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
            <h2 className="text-white text-xl">1. Información General</h2>
            <p>En Codex, la privacidad de nuestros clientes es una prioridad.</p>
            <h2 className="text-white text-xl">2. Información que Recopilamos</h2>
            <p>Nombre, correo, teléfono y detalles del proyecto. También IP y navegación.</p>
            <h2 className="text-white text-xl">3. Uso de la Información</h2>
            <p>Para responder consultas, enviar presupuestos y desarrollar proyectos.</p>
            <h2 className="text-white text-xl">4. Compartición</h2>
            <p>No vendemos ni compartimos su información con terceros.</p>
            <h2 className="text-white text-xl">5. Seguridad</h2>
            <p>Medidas estándar de la industria para proteger sus datos.</p>
            <h2 className="text-white text-xl">6. Contacto</h2>
            <p>contacto@codexstudiove.com</p>
            <Link to="/" className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg transition-all">Volver a la Web</Link>
          </div>
      <Footer />
    </>
  )
}
