import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'

export function OrganizationSchema() {
  const { lang } = useLanguage()
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://codexstudiove.com/#organization',
    name: 'Codex Studio',
    alternateName: ['Codex', 'Codex Studio VE'],
    description: {
      '@language': lang,
      '@value': 'Desarrollo de software, aplicaciones web y soluciones tecnológicas personalizadas en Latinoamérica.'
    },
    url: 'https://codexstudiove.com',
    logo: 'https://codexstudiove.com/images/codex-logo.png',
    image: 'https://codexstudiove.com/images/codex-og.jpg',
    foundingDate: '2021',
    founder: {
      '@type': 'Person',
      '@id': 'https://codexstudiove.com/#person',
      name: 'Sebastián Corona',
      givenName: 'Sebastián',
      familyName: 'Corona',
      jobTitle: 'Senior Full-Stack Developer',
      url: 'https://github.com/sebastiancoronadev',
      sameAs: [
        'https://github.com/sebastiancoronadev',
        'https://linkedin.com/in/sebastiancoronadev',
        'https://youtube.com/@codexstudiove'
      ]
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressRegion: 'Carabobo',
      addressCountry: 'VE'
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      email: 'contacto@codexstudiove.com',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English', 'Chinese', 'Japanese'],
      areaServed: { '@type': 'Continent', 'name': 'Latin America' }
    }],
    sameAs: [
      'https://github.com/sebastiancoronadev',
      'https://linkedin.com/in/sebastiancoronadev',
      'https://youtube.com/@codexstudiove'
    ],
    areaServed: { '@type': 'Continent', 'name': 'Latin America' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web Full-Stack', description: 'Sitios web responsivos, PWAs y soluciones e-commerce con React, Node.js y cloud computing.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Backend & APIs', description: 'Arquitecturas escalables, APIs RESTful y microservicios con Python, FastAPI y Node.js.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design', description: 'Diseño de interfaces centradas en el usuario con Figma y prototipado interactivo.' } }
      ]
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://codexstudiove.com/#website',
    url: 'https://codexstudiove.com',
    name: 'Codex Studio',
    description: 'Desarrollo Web Profesional & SEO en Latinoamérica',
    publisher: { '@id': 'https://codexstudiove.com/#organization' },
    inLanguage: ['es', 'en', 'zh', 'ja']
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function FAQSchema({ questions }: { questions: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer }
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
