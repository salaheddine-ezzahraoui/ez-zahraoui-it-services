import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'
import ProcessStep from '../components/ui/ProcessStep'
import Button from '../components/ui/Button'
import { METHOD_STEPS } from '../data/content'
import { ShieldCheck } from 'lucide-react'

export default function ProcessPage() {
  const { t } = useLanguage()

  return (
    <>
      <SEO
        title="Our Method | EZ-ZAHRAOUI IT SERVICES"
        description="Our working method in 6 steps: first exchange, understanding the environment, proposal, intervention, verification, and ongoing support."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('processPage.title')}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('processPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Process timeline */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          {METHOD_STEPS.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={index === METHOD_STEPS.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* Confidentiality note */}
      <section className="bg-surface py-12">
        <div className="container-site">
          <div className="rounded-lg border border-gray-100 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-azure/10 text-azure">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy">{t('processPage.confidentiality')}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {t('processPage.confidentialityText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {t('processPage.cta')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            {t('processPage.ctaText')}
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              {t('nav.cta')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
