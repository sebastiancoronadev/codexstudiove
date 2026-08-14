import { Helmet } from 'react-helmet-async'

export function CarlosRomeroSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://codexstudiove.com/#carlos-romero',
    name: 'Carlos Gabriel Romero Marín',
    jobTitle: 'Ejecutivo de Ventas y Estratega Corporativo',
    description: 'Ejecutivo de ventas y estratega corporativo con más de 6 años de experiencia y 150+ negociaciones exitosas.',
    url: 'https://codexstudiove.com/#carlos',
    image: 'https://codexstudiove.com/images/carlos-romero.png',
    sameAs: [
      'https://github.com/sebastiancoronadev',
      'https://linkedin.com/in/sebastiancoronadev'
    ],
    worksFor: {
      '@id': 'https://codexstudiove.com/#organization'
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
