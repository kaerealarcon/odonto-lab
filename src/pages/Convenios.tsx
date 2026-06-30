import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { buttonVariants } from '@/components/ui/Button'
import { PageHeader } from '@/components/sections/PageHeader'
import { convenios } from '@/data/convenios'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getBreadcrumbSchema } from '@/lib/schema'

export function Convenios() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('convenios.seoTitle')}
        description={t('convenios.seoDescription')}
        path="/convenios"
        jsonLd={getBreadcrumbSchema([
          { name: t('common.nav.home'), path: '/' },
          { name: t('common.nav.convenios'), path: '/convenios' },
        ])}
      />
      <PageHeader
        eyebrow={t('convenios.pageHeaderEyebrow')}
        title={t('convenios.pageHeaderTitle')}
        description={t('convenios.pageHeaderDescription')}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {convenios.map((c) => (
              <Card key={c.name} className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <c.icon size={26} />
                </span>
                <span className="text-sm font-medium text-ink-700">{c.name}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl">{t('convenios.notFoundTitle')}</h2>
          <p className="mt-4 text-ink-500">{t('convenios.notFoundText')}</p>
          <a
            href={buildWhatsAppLink(t('convenios.whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'whatsapp', size: 'lg', className: 'mt-6' })}
          >
            {t('convenios.whatsappCta')}
          </a>
        </Container>
      </section>
    </>
  )
}
