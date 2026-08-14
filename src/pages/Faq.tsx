import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const faqs = [
  { category: "General", questions: [
    { q: "Que servicios ofrece?", a: "Desarrollo web, edición de video, configuración de Discord y Minecraft." },
    { q: "Como inicio un proyecto?", a: "Llena el formulario de contacto y te respondemos con un presupuesto." },
  ]},
  { category: "Pagos", questions: [
    { q: "Precios", a: "Web desde $200, Video desde $50, Discord desde $100, Minecraft desde $150." },
    { q: "Métodos de pago", a: "PayPal, Binance, transferencias locales y Zelle." },
  ]}
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <SEO title="Preguntas Frecuentes" description="Resuelve tus dudas sobre servicios web." path="/faq" />
      <Header />
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#FF007F]">Preguntas Frecuentes</h2>
          <p className="text-center text-gray-400 mb-12">Encuentra respuestas rápidas a tus dudas.</p>
          <div className="space-y-12">
            {faqs.map((cat, ci) => (
              <div key={ci}>
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2 text-white">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.questions.map((faq, qi) => {
                    const id = ci + '-' + qi
                    const open = openIndex === id
                    return (
                      <div key={qi} className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden">
                        <button onClick={() => setOpenIndex(open ? null : id)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#161616]">
                          <span className="font-medium text-lg text-gray-100">{faq.q}</span>
                          <span className={open ? 'text-[#FF007F] -rotate-90' : 'text-white opacity-50 rotate-90'}>➜</span>
                        </button>
                        <div className="transition-all duration-300 px-6 overflow-hidden" style={{ maxHeight: open ? '200px' : '0px', paddingBottom: open ? '16px' : '0px' }}>
                          <p className="text-gray-400 border-t border-gray-800/50 pt-4">{faq.a}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
