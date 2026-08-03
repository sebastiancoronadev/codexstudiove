import { lazy, Suspense } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import SEO from '../components/SEO'
import { OrganizationSchema, WebSiteSchema } from '../components/JsonLd'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageDivider from '../components/layout/PageDivider'
import CursorGlow from '../components/ui/CursorGlow'

const Hero = lazy(() => import('../components/sections/Hero'))
const Services = lazy(() => import('../components/sections/Services'))
const StatsCounter = lazy(() => import('../components/sections/StatsCounter'))
const Specialization = lazy(() => import('../components/sections/Specialization'))
const AboutUs = lazy(() => import('../components/sections/AboutUs'))
const VideoEditing = lazy(() => import('../components/sections/VideoEditing'))
const DiscordConfig = lazy(() => import('../components/sections/DiscordConfig'))
const MinecraftServers = lazy(() => import('../components/sections/MinecraftServers'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Brands = lazy(() => import('../components/sections/Brands'))
const PaymentMethods = lazy(() => import('../components/sections/PaymentMethods'))
const CTASection = lazy(() => import('../components/sections/CTASection'))
const Contact = lazy(() => import('../components/sections/Contact'))

import SecurePayments from '../components/sections/SecurePayments'
import GlobalPresence from '../components/sections/GlobalPresence'
import BackToTop from '../components/ui/BackToTop'

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-brand-pink/30 border-t-brand-pink rounded-full animate-spin"></div>
    </div>
  )
}

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      <SEO title="Codex Studio | Desarrollo Web Full-Stack & SEO | Latinoamérica" description="Codex Studio: Desarrollo de software, apps web, ecommerce, APIs, microservicios, edición de video, Discord y Minecraft. +100 proyectos, 5+ años de experiencia." />
      <OrganizationSchema />
      <WebSiteSchema />
      <CursorGlow />
      <Header />
      <main className="min-h-screen bg-black">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <PageDivider variant="glow" />
          <Services />
          <PageDivider variant="minimal" />
          <StatsCounter />
          <PageDivider variant="default" />
          <Specialization />
          <PageDivider variant="glow" />
          <AboutUs />
          <PageDivider variant="minimal" />
          <VideoEditing />
          <PageDivider variant="default" />
          <DiscordConfig />
          <PageDivider variant="glow" />
          <MinecraftServers />
          <PageDivider variant="minimal" />
          <Testimonials />
          <PageDivider variant="default" />
          <Brands />
          <PageDivider variant="glow" />
          <PaymentMethods />
          <PageDivider variant="minimal" />
        </Suspense>
        <SecurePayments />
        <PageDivider variant="default" />
        <GlobalPresence />
        <PageDivider variant="glow" />
        <Suspense fallback={<LoadingFallback />}>
          <CTASection />
          <PageDivider variant="minimal" />
          <Contact />
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </>
  )
}
