import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { Target, FileText, ShieldCheck, MessageSquare, Wrench } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  FileText,
  ShieldCheck,
  MessageSquare,
  Wrench,
}

const APPROACH_KEYS = [
  { icon: 'Target', titleKey: 'aboutPage.1.title', descKey: 'aboutPage.1.desc' },
  { icon: 'FileText', titleKey: 'aboutPage.2.title', descKey: 'aboutPage.2.desc' },
  { icon: 'ShieldCheck', titleKey: 'aboutPage.3.title', descKey: 'aboutPage.3.desc' },
  { icon: 'MessageSquare', titleKey: 'aboutPage.4.title', descKey: 'aboutPage.4.desc' },
  { icon: 'Wrench', titleKey: 'aboutPage.5.title', descKey: 'aboutPage.5.desc' },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <SEO
        title="About | EZ-ZAHRAOUI IT SERVICES"
        description="EZ-ZAHRAOUI IT SERVICES — An IT infrastructure professional in Tangier, serving small and medium-sized businesses."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('aboutPage.title')}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Founder section */}
      <Section className="bg-white">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              {t('aboutPage.founder')}
            </h2>
            <p className="mt-2 text-sm font-medium text-azure">
              {t('aboutPage.role')}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/60">
              <p>{t('aboutPage.p1')}</p>
              <p>{t('aboutPage.p2')}</p>
              <p>{t('aboutPage.p3')}</p>
            </div>
          </div>

          {/* Professional photo */}
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}photo-salaheddine.jpg`}
                alt="Salaheddine Ez-Zahraoui — Founder of EZ-ZAHRAOUI IT SERVICES"
                className="h-auto w-full max-w-sm object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `${import.meta.env.BASE_URL}photo-placeholder.svg`
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-surface">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{t('aboutPage.approach')}</h2>
          <p className="mt-4 text-base text-ink/60">
            {t('aboutPage.approachText')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH_KEYS.map((item) => {
            const Icon = iconMap[item.icon] || Target
            return (
              <div
                key={item.titleKey}
                className="rounded-lg border border-gray-100 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-azure/10 text-azure">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(item.descKey)}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {t('aboutPage.cta')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            {t('aboutPage.ctaText')}
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
