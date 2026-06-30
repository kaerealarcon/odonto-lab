import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { StarRating } from '@/components/ui/StarRating'
import { PageHeader } from '@/components/sections/PageHeader'
import { TestimonialCard } from '@/components/testimonials/TestimonialCard'
import { useTestimonials } from '@/data/testimonials'
import { getBreadcrumbSchema } from '@/lib/schema'

export function Testimonials() {
  const { t } = useTranslation()
  const testimonials = useTestimonials()
  const averageRating = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length

  return (
    <>
      <SEO
        title={t('testimonials.seoTitle')}
        description={t('testimonials.seoDescription')}
        path="/depoimentos"
        jsonLd={getBreadcrumbSchema([
          { name: t('common.nav.home'), path: '/' },
          { name: t('common.nav.testimonials'), path: '/depoimentos' },
        ])}
      />
      <PageHeader
        eyebrow={t('testimonials.pageHeaderEyebrow')}
        title={t('testimonials.pageHeaderTitle')}
        description={t('testimonials.pageHeaderDescription')}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto mb-12 flex max-w-md flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm shadow-ink-900/5">
            <span className="text-4xl font-bold text-ink-900">{averageRating.toFixed(1)}</span>
            <StarRating rating={Math.round(averageRating)} />
            <p className="text-sm text-ink-500">{t('testimonials.averageLabel', { count: testimonials.length })}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
