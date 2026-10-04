import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title: string
  description: string
}

const SITE_NAME = 'EZ-ZAHRAOUI IT SERVICES'
const BASE_URL = 'https://ez-zahraoui-it.ma'

export default function SEO({ title, description }: SEOProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    // JSON-LD Organization + LocalBusiness schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      description: description,
      url: BASE_URL,
      founder: {
        '@type': 'Person',
        name: 'Salaheddine Ez-Zahraoui',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tanger',
        addressCountry: 'MA',
      },
      areaServed: 'Tanger, Maroc',
      knowsLanguage: ['fr', 'ar', 'en'],
    }

    let scriptEl = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]')
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      document.head.appendChild(scriptEl)
    }
    scriptEl.textContent = JSON.stringify(schema)

    const setMeta = (selector: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        const [kind, key] = selector.replace(/[\[\]]/g, '').split('=')
        el.setAttribute(kind, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:type"]', 'website')
    setMeta('meta[property="og:url"]', `${BASE_URL}${pathname}`)
    setMeta('meta[property="og:site_name"]', SITE_NAME)
    setMeta('meta[name="twitter:card"]', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
  }, [title, description, pathname])

  return null
}
