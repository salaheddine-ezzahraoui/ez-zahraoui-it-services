import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <>
      <SEO
        title="Privacy Policy | EZ-ZAHRAOUI IT SERVICES"
        description="Privacy policy of EZ-ZAHRAOUI IT SERVICES. Information on the collection and use of your personal data."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t('privacyPage.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('privacyPage.updated')}
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-navy">{t('privacyPage.1')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.1Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.2')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.2Text')}
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-ink/60">
            <li>{t('privacyPage.2List')}</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.3')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.3Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.4')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.4Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.5')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.5Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.6')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.6Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.7')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.7Text')}
          </p>

          <h2 className="mt-8 text-xl font-bold text-navy">{t('privacyPage.8')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {t('privacyPage.8Text')}
          </p>
        </div>
      </Section>
    </>
  )
}
