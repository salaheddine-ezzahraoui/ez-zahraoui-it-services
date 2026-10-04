import { CheckCircle2 } from 'lucide-react'

const indicators = [
  'Intervention à distance ou sur site',
  'Devis clair et transparent',
  'Documentation de chaque intervention',
  'Accompagnement en français',
]

export default function TrustIndicators() {
  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <div className="container-site">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan" />
              <span className="text-sm font-medium text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
