import { Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Clock } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { TreatmentCard } from '@/components/treatments/TreatmentCard'
import { useTreatmentBySlug, useTreatments } from '@/data/treatments'
import { useTreatmentCategories } from '@/data/treatmentCategories'
import { useBeforeAfterCaseForTreatment } from '@/data/beforeAfter'
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getBreadcrumbSchema, getMedicalProcedureSchema } from '@/lib/schema'

export function TreatmentDetail() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const treatment = useTreatmentBySlug(slug)
  const categories = useTreatmentCategories()
  const allTreatments = useTreatments()
  const beforeAfter = useBeforeAfterCaseForTreatment(treatment?.hasBeforeAfter ? treatment.slug : undefined)

  if (!treatment) {
    return <Navigate to="/tratamentos" replace />
  }

  const category = categories.find((c) => c.slug === treatment.category)
  const related = allTreatments.filter((item) => item.category === treatment.category && item.slug !== treatment.slug).slice(0, 3)
  const whatsappMessage = t('treatments.detail.whatsappMessage', { treatment: treatment.name })

  return (
    <>
      <SEO
        title={treatment.seoTitle}
        description={treatment.seoDescription}
        path={`/tratamentos/${treatment.slug}`}
        jsonLd={[
          getMedicalProcedureSchema(treatment.name, treatment.description, `/tratamentos/${treatment.slug}`),
          getBreadcrumbSchema([
            { name: t('common.nav.home'), path: '/' },
            { name: t('common.nav.treatments'), path: '/tratamentos' },
            { name: treatment.name, path: `/tratamentos/${treatment.slug}` },
          ]),
        ]}
      />

      <section className="bg-linear-to-b from-primary-50 to-white py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {category && <Badge variant="primary">{category.name}</Badge>}
            <h1 className="mt-3 text-4xl sm:text-5xl">{treatment.name}</h1>
            <p className="mt-4 text-lg text-ink-500">{treatment.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-ink-400">
              <Clock size={16} />
              {treatment.estimatedTime}
            </div>
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'whatsapp', size: 'lg', className: 'mt-6' })}
            >
              {t('treatments.detail.scheduleEvaluation')}
            </a>
          </div>
          <FallbackImage
            src={treatment.image}
            fallbackSrc={treatment.fallbackImage}
            alt={treatment.name}
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl shadow-primary-900/10"
            loading="lazy"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">{t('treatments.detail.indicationsTitle')}</h2>
            <ul className="mt-5 space-y-3">
              {treatment.indications.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-ink-600">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">{t('treatments.detail.stepsTitle')}</h2>
            <ol className="mt-5 space-y-5">
              {treatment.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-800">{step.title}</p>
                    <p className="text-sm text-ink-500">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {beforeAfter && (
        <section className="bg-ink-50 py-16 sm:py-20">
          <Container className="max-w-md">
            <h2 className="text-center text-2xl">{t('treatments.detail.realResultTitle')}</h2>
            <div className="mt-8">
              <BeforeAfterSlider item={beforeAfter} />
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-center text-2xl">
              {t('treatments.detail.otherTreatmentsTitle', { category: category?.name })}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <TreatmentCard key={item.slug} treatment={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-primary-700 py-14">
        <Container className="text-center">
          <h2 className="text-3xl text-white">{t('treatments.detail.ctaTitle')}</h2>
          <p className="mt-3 text-primary-100">{t('treatments.detail.ctaDescription')}</p>
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'whatsapp', size: 'lg', className: 'mt-6' })}
          >
            {t('treatments.detail.scheduleEvaluation')}
          </a>
        </Container>
      </section>
    </>
  )
}
