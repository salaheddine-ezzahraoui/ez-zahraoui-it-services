import { Tag } from 'lucide-react'
import type { Project } from '../../types'

const statusColors: Record<string, string> = {
  'Projet technique': 'bg-azure/10 text-azure',
  'Lab technique': 'bg-purple-100 text-purple-800',
  'Projet en développement': 'bg-emerald-100 text-emerald-800',
  'Projet personnel': 'bg-amber-100 text-amber-800',
  'Projet client autorisé': 'bg-cyan-100 text-cyan-800',
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-100 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-navy">{project.title}</h3>
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[project.status] || 'bg-gray-100 text-gray-800'}`}
        >
          <Tag className="h-3 w-3" />
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink/60">{project.description}</p>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-navy">Technologies</h4>
        <div className="mt-2 flex flex-wrap gap-1.5">
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

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-navy">Features</h4>
        <ul className="mt-2 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-ink/60">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-azure" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
