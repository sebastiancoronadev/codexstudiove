import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext'
import Home from './pages/Home'
import Thanks from './pages/Thanks'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import Faq from './pages/Faq'

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/zh" element={<Home />} />
            <Route path="/ja" element={<Home />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  )
}
