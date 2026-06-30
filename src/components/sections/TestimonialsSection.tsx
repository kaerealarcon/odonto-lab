import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { TestimonialCard } from '@/components/testimonials/TestimonialCard'
import { useTestimonials } from '@/data/testimonials'

interface TestimonialsSectionProps {
  limit?: number
  className?: string
}

export function TestimonialsSection({ limit, className }: TestimonialsSectionProps) {
  const { t } = useTranslation()
  const testimonials = useTestimonials()
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className={className}>
      <Container>
        <SectionHeading
          eyebrow={t('home.testimonials.eyebrow')}
          title={t('home.testimonials.title')}
          description={t('home.testimonials.description')}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
