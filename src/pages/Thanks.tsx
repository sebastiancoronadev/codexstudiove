import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Thanks() {
  return (
    <>
      <SEO title="Mensaje Enviado" description="Hemos recibido tu mensaje correctamente. Te contactaremos pronto." path="/thanks" />
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center">
            <i className="fa-solid fa-check text-3xl text-white"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Mensaje Enviado con Éxito!</h1>
          <p className="text-zinc-400 mb-2">Gracias por contactarnos. Hemos recibido tu solicitud correctamente.</p>
          <p className="text-zinc-500 text-sm mb-8">Nuestro equipo te responderá en un plazo de 24 a 48 horas hábiles.</p>
          <Link to="/" className="px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-pink/25 transition-all inline-block">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </>
  )
}
