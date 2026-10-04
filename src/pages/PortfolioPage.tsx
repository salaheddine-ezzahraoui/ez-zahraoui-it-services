import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'
import ProjectCard from '../components/ui/ProjectCard'
import Button from '../components/ui/Button'
import { PROJECTS } from '../data/content'

export default function PortfolioPage() {
  const { t } = useLanguage()

  return (
    <>
      <SEO
        title="Projects | EZ-ZAHRAOUI IT SERVICES"
        description="Technical and personal projects: IT equipment management, cloud helpdesk platform, and SME deployment."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('portfolioPage.title')}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('portfolioPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <Section className="bg-surface">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Disclaimer */}
      <section className="bg-white py-12">
        <div className="container-site">
          <div className="rounded-lg border border-gray-100 bg-surface p-6">
            <h2 className="text-base font-semibold text-navy">{t('portfolioPage.note')}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {t('portfolioPage.noteText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {t('portfolioPage.cta')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            {t('portfolioPage.ctaText')}
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
