import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'product'
  keywords?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function SEO({ 
  title, 
  description, 
  path = '/', 
  image = '/images/codex-og.jpg',
  type = 'website',
  keywords = '',
  publishedTime,
  modifiedTime,
<<<<<<< HEAD
  author = 'Sebasti�n Corona',
=======
  author = 'Sebastián Corona',
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
  section,
  tags = []
}: SEOProps) {
  const { lang } = useLanguage()
  const baseUrl = 'https://codexstudiove.com'
  const url = `${baseUrl}${path}`
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`
  
<<<<<<< HEAD
  const defaultKeywords = 'desarrollo web, aplicaciones web, SEO, React, Node.js, Python, full-stack, Venezuela, Latinoam�rica, programador, dise�o web, marketing digital, ecommerce, PWA, microservicios, cloud computing'
=======
  const defaultKeywords = 'desarrollo web, aplicaciones web, SEO, React, Node.js, Python, full-stack, Venezuela, Latinoamérica, programador, diseño web, marketing digital, ecommerce, PWA, microservicios, cloud computing'
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

  return (
    <Helmet>
<<<<<<< HEAD
      {/* B�sico */}
      <title>{title} | Codex Studio VE</title>
=======
      {/* Básico */}
      <title>{title} | Codex Studio</title>
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:locale" content={lang === 'es' ? 'es_VE' : lang === 'en' ? 'en_US' : lang === 'zh' ? 'zh_CN' : 'ja_JP'} />
      <meta property="og:type" content={type} />
<<<<<<< HEAD
      <meta property="og:title" content={`${title} | Codex Studio VE`} />
=======
      <meta property="og:title" content={`${title} | Codex Studio`} />
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
<<<<<<< HEAD
      <meta property="og:site_name" content="Codex Studio VE" />
=======
      <meta property="og:site_name" content="Codex Studio" />
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codexstudio" />
      <meta name="twitter:creator" content="@sebastiancorona" />
<<<<<<< HEAD
      <meta name="twitter:title" content={`${title} | Codex Studio VE`} />
=======
      <meta name="twitter:title" content={`${title} | Codex Studio`} />
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Hreflang */}
      <link rel="alternate" hreflang="es" href={`${baseUrl}${path === '/' ? '' : path}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/en${path === '/' ? '' : path}`} />
      <link rel="alternate" hreflang="zh" href={`${baseUrl}/zh${path === '/' ? '' : path}`} />
      <link rel="alternate" hreflang="ja" href={`${baseUrl}/ja${path === '/' ? '' : path}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}${path === '/' ? '' : path}`} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="VE-G" />
      <meta name="geo.placename" content="Valencia" />
      <meta name="geo.position" content="10.1579;-68.0072" />
      <meta name="ICBM" content="10.1579, -68.0072" />
      
      {/* Dublin Core */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.creator" content={author} />
      <meta name="DC.language" content={lang} />
<<<<<<< HEAD
      <meta name="DC.publisher" content="Codex Studio VE" />
=======
      <meta name="DC.publisher" content="Codex Studio" />
>>>>>>> 772f8e56fd7f88eb5aa2f75591854e5a0e85ec3a
    </Helmet>
  )
}
