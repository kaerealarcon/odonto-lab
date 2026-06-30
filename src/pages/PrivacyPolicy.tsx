import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/sections/PageHeader'
import { clinicInfo } from '@/data/clinicInfo'
import { getBreadcrumbSchema } from '@/lib/schema'

export function PrivacyPolicy() {
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true }) as { title: string; text: string }[]

  return (
    <>
      <SEO
        title={t('privacy.seoTitle')}
        description={t('privacy.seoDescription')}
        path="/privacidade"
        jsonLd={getBreadcrumbSchema([
          { name: t('common.nav.home'), path: '/' },
          { name: t('privacy.pageHeaderTitle'), path: '/privacidade' },
        ])}
      />
      <PageHeader eyebrow={t('privacy.pageHeaderEyebrow')} title={t('privacy.pageHeaderTitle')} />

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl space-y-8 text-ink-600">
          <p>{t('privacy.intro', { name: clinicInfo.name })}</p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-ink-800">{section.title}</h2>
              <p className="mt-3">{section.text.replace('{{email}}', clinicInfo.email).replace('{{phone}}', clinicInfo.phone)}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
