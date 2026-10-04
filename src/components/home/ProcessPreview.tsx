import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { PROCESS_STEPS } from '../../data/content'

export default function ProcessPreview() {
  const { t } = useLanguage()

  return (
    <Section className="bg-white">
      <SectionHeading
        title={t('process.title')}
        subtitle={t('process.subtitle')}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="relative">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-azure text-sm font-bold text-white">
              {step.number}
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy">{t(`process.${step.number}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {t(`process.${step.number}.desc`)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button to="/process" variant="secondary">
          {t('process.viewAll')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
