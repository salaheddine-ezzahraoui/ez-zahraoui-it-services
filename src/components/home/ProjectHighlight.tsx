import { ArrowRight, Tag } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { PROJECTS } from '../../data/content'

export default function ProjectHighlight() {
  const { t } = useLanguage()
  const project = PROJECTS[0]

  return (
    <Section className="bg-white">
      <SectionHeading
        title={t('project.title')}
        subtitle={t('project.subtitle')}
      />

      <div className="mt-12">
        <div className="rounded-lg border border-gray-100 bg-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-azure/10 px-2.5 py-1 text-xs font-medium text-azure">
              <Tag className="h-3 w-3" />
              {project.status}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-ink/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button to="/portfolio" variant="secondary">
          {t('project.viewAll')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
