import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BadgeCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { clinicInfo } from '@/data/clinicInfo'
import { withBase } from '@/lib/utils'

export function AboutSummary() {
  const { t } = useTranslation()

  return (
    <section className="bg-ink-50 py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <img
          src={withBase('/images/clinic/sobre.jpg')}
          alt={`${clinicInfo.responsibleDentist.name}, Odonto Lab`}
          className="mx-auto aspect-square w-64 rounded-3xl object-cover shadow-lg shadow-ink-900/10 sm:w-80"
          loading="lazy"
        />
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            <BadgeCheck size={16} />
            {t('home.aboutSummary.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl">{t('home.aboutSummary.title')}</h2>
          <p className="mt-4 text-lg text-ink-500">
            {t('home.aboutSummary.description', {
              name: clinicInfo.responsibleDentist.name,
              cro: clinicInfo.responsibleDentist.cro,
            })}
          </p>
          <Link to="/sobre" className={buttonVariants({ variant: 'outline', size: 'md', className: 'mt-6' })}>
            {t('home.aboutSummary.cta')}
          </Link>
        </div>
      </Container>
    </section>
  )
}
