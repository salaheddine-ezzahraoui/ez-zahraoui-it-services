import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import Button from '../ui/Button'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy">
      <div className="container-site py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {t('hero.title').split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-azure">{t('hero.title').split(' ').slice(-2).join(' ')}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {t('hero.secondary')}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Postes</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Réseau</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Sécurité</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Serveurs</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Sauvegarde</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-md bg-azure/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-azure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50">Utilisateurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
