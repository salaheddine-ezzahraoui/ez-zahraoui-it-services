import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Button from '../ui/Button'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-site text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {t('cta.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          {t('cta.subtitle')}
        </p>
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            {t('cta.button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
