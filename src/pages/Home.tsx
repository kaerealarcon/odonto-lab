import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Hero } from '@/components/sections/Hero'
import { Differentials } from '@/components/sections/Differentials'
import { AboutSummary } from '@/components/sections/AboutSummary'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery'
import { MapSection } from '@/components/sections/MapSection'
import { getDentistSchema } from '@/lib/schema'

export function Home() {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t('home.seoTitle')} description={t('home.seoDescription')} path="/" jsonLd={getDentistSchema()} />
      <Hero />
      <Differentials />
      <AboutSummary />
      <TestimonialsSection limit={4} className="py-16 sm:py-20" />
      <BeforeAfterGallery className="bg-ink-50 py-16 sm:py-20" />
      <MapSection className="py-16 sm:py-20" />
    </>
  )
}
