import { ArrowRight, Tag } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { PROJECTS } from '../../data/content'

const statusColors: Record<string, string> = {
  'Projet personnel': 'bg-purple-100 text-purple-800',
  'Prototype': 'bg-amber-100 text-amber-800',
  'Projet en développement': 'bg-emerald-100 text-emerald-800',
}

export default function PortfolioPreview() {
  const preview = PROJECTS.slice(0, 3)

  return (
    <Section className="bg-surface">
      <SectionHeading
        title="Nos projets"
        subtitle="Des réalisations personnelles et des prototypes qui illustrent notre approche technique."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {preview.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-navy">{project.title}</h3>
              <span
                className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
              >
                <Tag className="h-3 w-3" />
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-ink/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button to="/portfolio" variant="secondary">
          Voir tous les projets
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
