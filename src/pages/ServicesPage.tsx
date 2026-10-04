import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'
import ServiceCard from '../components/ui/ServiceCard'
import Button from '../components/ui/Button'
import { SERVICES } from '../data/content'

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <SEO
        title="Services | EZ-ZAHRAOUI IT SERVICES"
        description="IT services for SMEs in Tangier: computer installation, network configuration, user management, IT audit, and support maintenance."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('servicesPage.title')}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('servicesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <Section className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} detailed />
          ))}
        </div>
      </Section>

      {/* Note about pricing */}
      <section className="bg-white py-12">
        <div className="container-site">
          <div className="rounded-lg border border-gray-100 bg-surface p-6">
            <h2 className="text-base font-semibold text-navy">{t('servicesPage.pricing')}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {t('servicesPage.pricingText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {t('servicesPage.customTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            {t('servicesPage.customText')}
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              {t('servicesPage.cta')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
