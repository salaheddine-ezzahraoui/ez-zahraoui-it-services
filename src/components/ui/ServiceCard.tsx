import {
  Monitor,
  Wifi,
  Users,
  FileText,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import type { Service } from '../../types'
import Button from './Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Wifi,
  Users,
  FileText,
  Wrench,
}

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const { t } = useLanguage()
  const Icon = iconMap[service.icon] || Monitor

  return (
    <article className="group flex flex-col rounded-lg border border-gray-100 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-azure/10 text-azure">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-base font-semibold text-navy">{t(`services.${service.id}.title`)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(`services.${service.id}.desc`)}</p>

      {detailed && (
        <>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-navy">{t('servicesPage.included')}</h4>
            <ul className="mt-2 space-y-1.5">
              {service.included?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/60">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-navy">{t('servicesPage.notIncluded')}</h4>
            <ul className="mt-2 space-y-1.5">
              {service.notIncluded?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/50">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-md bg-surface p-3">
            <h4 className="text-sm font-semibold text-navy">{t('servicesPage.useCase')}</h4>
            <p className="mt-1 text-sm text-ink/60">{service.useCase}</p>
          </div>
        </>
      )}

      <div className="mt-auto pt-4">
        <Button to="/contact" variant="secondary" className="w-full">
          {t('servicesPage.cta')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  )
}
