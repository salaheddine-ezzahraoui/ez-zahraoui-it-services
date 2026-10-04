import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const WHY_KEYS = [
  { titleKey: 'why.1.title', descKey: 'why.1.desc' },
  { titleKey: 'why.2.title', descKey: 'why.2.desc' },
  { titleKey: 'why.3.title', descKey: 'why.3.desc' },
  { titleKey: 'why.4.title', descKey: 'why.4.desc' },
  { titleKey: 'why.5.title', descKey: 'why.5.desc' },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <Section className="bg-surface">
      <SectionHeading
        title={t('why.title')}
        subtitle={t('why.subtitle')}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_KEYS.map((item) => (
          <div
            key={item.titleKey}
            className="rounded-lg border border-gray-100 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-navy">{t(item.titleKey)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(item.descKey)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
