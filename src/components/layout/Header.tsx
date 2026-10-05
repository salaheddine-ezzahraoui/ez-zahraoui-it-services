import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const NAV_LINKS = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.process', path: '/process' },
  { key: 'nav.portfolio', path: '/portfolio' },
  { key: 'nav.contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const closeMobile = () => setMobileOpen(false)

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/10">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-white"
            onClick={closeMobile}
            aria-label="EZ-ZAHRAOUI IT SERVICES — Home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo-white.svg`}
              alt="EZ-ZAHRAOUI IT SERVICES"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-azure bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {t(link.key)}
              </NavLink>
            ))}

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-2 inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <Globe className="h-4 w-4" />
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-azure px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-azure-dark"
            >
              {t('nav.cta')}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-white/10 bg-navy px-4 pb-4 pt-2"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                  isActive
                    ? 'text-azure bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMobile}
            className="mt-2 block rounded-md bg-azure px-4 py-2.5 text-center text-base font-semibold text-white"
          >
            {t('nav.cta')}
          </Link>
        </nav>
      )}
    </header>
  )
}
