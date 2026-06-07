import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  lang?: string;
}

export default function SEO({ title, description, keywords, lang = 'es' }: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://codex.studio.ve${location.pathname}`;

  let basePath = location.pathname;
  if (basePath.startsWith('/en')) basePath = basePath.replace('/en', '');
  if (basePath.startsWith('/zh')) basePath = basePath.replace('/zh', '');
  if (basePath === '') basePath = '/';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'desarrollo web, programador fullstack, react, vite, typescript, valencia venezuela'} />
      {/* Geo Tags for Valencia, Venezuela */}
      <meta name="geo.region" content="VE-CA" />
      <meta name="geo.placename" content="Valencia" />
      <meta name="geo.position" content="10.1620;-68.0077" />
      <meta name="ICBM" content="10.1620, -68.0077" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="https://codex.studio.ve/images/earth.jpg" /> {/* Replace with actual OG image if available */}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Baidu Meta Tags for Chinese SEO */}
      <meta name="baidu-site-verification" content="" />
      
      {/* Hreflang Tags for multi-language SEO */}
      <link rel="alternate" href={`https://codex.studio.ve${basePath}`} hrefLang="es" />
      <link rel="alternate" href={`https://codex.studio.ve/en${basePath}`} hrefLang="en" />
      <link rel="alternate" href={`https://codex.studio.ve/zh${basePath}`} hrefLang="zh" />
      <link rel="alternate" href={`https://codex.studio.ve${basePath}`} hrefLang="x-default" />
      <link rel="canonical" href={currentUrl} />

      <html lang={lang} />
    </Helmet>
  );
}
