import { useEffect, useCallback } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { generateMetaTags } from '../utils/seo'

export function useSEO(page: string = 'home') {
  const { lang } = useLanguage()
  
  const getSEOData = useCallback(() => {
    return generateMetaTags(page, lang)
  }, [page, lang])

  useEffect(() => {
    const data = getSEOData()
    document.title = data.title
    
    // Actualizar meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', data.description)
    }
  }, [getSEOData])

  return { getSEOData }
}
