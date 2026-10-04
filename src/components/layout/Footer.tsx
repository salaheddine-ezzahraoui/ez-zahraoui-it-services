import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { CONTACT } from '../../data/content'

const FOOTER_NAV = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.process', path: '/process' },
  { key: 'nav.portfolio', path: '/portfolio' },
  { key: 'nav.contact', path: '/contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-white.svg"
                alt="EZ-ZAHRAOUI IT SERVICES"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('footer.navigation')}
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-azure"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('footer.contact')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
                <span>{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} EZ-ZAHRAOUI IT SERVICES. {t('footer.rights')}
          </p>
          <Link
            to="/privacy-policy"
            className="text-xs text-white/40 transition-colors hover:text-azure"
          >
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
