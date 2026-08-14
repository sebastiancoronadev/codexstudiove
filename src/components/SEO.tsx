import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: string
  keywords?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function SEO({ title, description, path = '/', image = '/images/codex-og.jpg', type = 'website', keywords = '', author = 'Sebastián Corona', section, tags = [] }: SEOProps) {
  const { lang } = useLanguage()
  const baseUrl = 'https://codexstudiove.com'
  const url = `${baseUrl}${path}`
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`
  const defaultKeywords = 'desarrollo web, aplicaciones web, SEO, React, Node.js, Python, full-stack, Venezuela, Latinoamérica, programador, diseño web, marketing digital, ecommerce, PWA, microservicios, cloud computing'
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

  return (
    <Helmet>
      <title>{title} | Codex Studio VE</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${title} | Codex Studio VE`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Codex Studio VE`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}
