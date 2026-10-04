import { useLanguage } from '../../context/LanguageContext'
import type { ProcessStep as ProcessStepType } from '../../types'

interface ProcessStepProps {
  step: ProcessStepType
  isLast?: boolean
}

export default function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  const { t } = useLanguage()

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200 sm:left-7" aria-hidden="true" />
      )}

      {/* Number circle */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azure text-white font-bold text-base sm:h-14 sm:w-14 sm:text-lg">
        {step.number}
      </div>

      {/* Content */}
      <div className="pb-8 sm:pb-12">
        <h3 className="text-base font-semibold text-navy sm:text-lg">
          {t(`processPage.${step.number}.title`)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-base">
          {t(`processPage.${step.number}.desc`)}
        </p>
      </div>
    </div>
  )
}
