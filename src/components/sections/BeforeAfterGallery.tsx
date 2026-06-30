import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider'
import { useBeforeAfterCases } from '@/data/beforeAfter'

export function BeforeAfterGallery({ className }: { className?: string }) {
  const { t } = useTranslation()
  const beforeAfterCases = useBeforeAfterCases()

  return (
    <section className={className}>
      <Container>
        <SectionHeading
          eyebrow={t('home.beforeAfter.eyebrow')}
          title={t('home.beforeAfter.title')}
          description={t('home.beforeAfter.description')}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterCases.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
