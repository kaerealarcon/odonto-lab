import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/sections/PageHeader'
import { TreatmentFilter } from '@/components/treatments/TreatmentFilter'
import { TreatmentCard } from '@/components/treatments/TreatmentCard'
import { useTreatments, useTreatmentsByCategory } from '@/data/treatments'
import { getBreadcrumbSchema } from '@/lib/schema'

export function Treatments() {
  const { t } = useTranslation()
  const [category, setCategory] = useState('todos')
  const allTreatments = useTreatments()
  const filtered = useTreatmentsByCategory(category)

  return (
    <>
      <SEO
        title={t('treatments.seoTitle')}
        description={t('treatments.seoDescription')}
        path="/tratamentos"
        jsonLd={getBreadcrumbSchema([
          { name: t('common.nav.home'), path: '/' },
          { name: t('common.nav.treatments'), path: '/tratamentos' },
        ])}
      />
      <PageHeader
        eyebrow={t('treatments.pageHeaderEyebrow')}
        title={t('treatments.pageHeaderTitle')}
        description={t('treatments.pageHeaderDescription', { count: allTreatments.length })}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <TreatmentFilter active={category} onChange={setCategory} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <TreatmentCard key={item.slug} treatment={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
