import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { SERVICES } from '../../data/content'

export default function ServicesPreview() {
  const { t } = useLanguage()

  return (
    <Section className="bg-surface">
      <SectionHeading
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button to="/services" variant="secondary">
          {t('services.viewAll')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
