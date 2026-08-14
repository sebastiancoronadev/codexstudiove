import { Helmet } from 'react-helmet-async'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Codex Studio VE',
    url: 'https://codexstudiove.com',
    logo: 'https://codexstudiove.com/images/codex-logo.png',
    image: 'https://codexstudiove.com/images/codex-og.jpg',
    foundingDate: '2021',
    founder: {
      '@type': 'Person',
      name: 'Sebastián Corona',
      jobTitle: 'Senior Full-Stack Developer',
      url: 'https://github.com/sebastiancoronadev'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressRegion: 'Carabobo',
      addressCountry: 'VE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contacto@codexstudiove.com',
      contactType: 'customer service'
    }
  }
  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://codexstudiove.com',
    name: 'Codex Studio VE',
    inLanguage: ['es', 'en', 'zh', 'ja']
  }
  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url }))
  }
  return <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
}
