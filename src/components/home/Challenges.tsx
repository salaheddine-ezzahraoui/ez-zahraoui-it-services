import { Monitor, Wifi, Users, FileText, Shield } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Wifi,
  Users,
  FileText,
  Shield,
}

const CHALLENGE_KEYS = [
  { icon: 'Monitor', titleKey: 'challenges.1.title', descKey: 'challenges.1.desc' },
  { icon: 'Wifi', titleKey: 'challenges.2.title', descKey: 'challenges.2.desc' },
  { icon: 'Users', titleKey: 'challenges.3.title', descKey: 'challenges.3.desc' },
  { icon: 'FileText', titleKey: 'challenges.4.title', descKey: 'challenges.4.desc' },
  { icon: 'Shield', titleKey: 'challenges.5.title', descKey: 'challenges.5.desc' },
]

export default function Challenges() {
  const { t } = useLanguage()

  return (
    <Section className="bg-white">
      <SectionHeading
        title={t('challenges.title')}
        subtitle={t('challenges.subtitle')}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGE_KEYS.map((challenge) => {
          const Icon = iconMap[challenge.icon] || Monitor
          return (
            <div
              key={challenge.titleKey}
              className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-azure/10 text-azure">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">{t(challenge.titleKey)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">
                  {t(challenge.descKey)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
