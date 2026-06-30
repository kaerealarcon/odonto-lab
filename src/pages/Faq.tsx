import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'
import { PageHeader } from '@/components/sections/PageHeader'
import { buttonVariants } from '@/components/ui/Button'
import { useFaqItems } from '@/data/faq'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/schema'

export function Faq() {
  const { t } = useTranslation()
  const faqItems = useFaqItems()
  const categoryLabels = t('faq.categories', { returnObjects: true }) as Record<string, string>

  const grouped = Object.entries(
    faqItems.reduce<Record<string, typeof faqItems>>((acc, item) => {
      acc[item.category] = acc[item.category] ?? []
      acc[item.category].push(item)
      return acc
    }, {})
  )

  return (
    <>
      <SEO
        title={t('faq.seoTitle')}
        description={t('faq.seoDescription')}
        path="/faq"
        jsonLd={[
          getFaqSchema(faqItems.map((f) => ({ question: f.question, answer: f.answer }))),
          getBreadcrumbSchema([{ name: t('common.nav.home'), path: '/' }, { name: t('common.nav.faq'), path: '/faq' }]),
        ]}
      />
      <PageHeader
        eyebrow={t('faq.pageHeaderEyebrow')}
        title={t('faq.pageHeaderTitle')}
        description={t('faq.pageHeaderDescription')}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl space-y-10">
          {grouped.map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-4 text-xl font-semibold text-ink-800">{categoryLabels[category]}</h2>
              <Accordion items={items.map((i) => ({ id: i.id, question: i.question, answer: i.answer }))} />
            </div>
          ))}

          <div className="rounded-2xl bg-ink-50 p-8 text-center">
            <h2 className="text-xl font-semibold text-ink-800">{t('faq.stillHaveDoubts')}</h2>
            <p className="mt-2 text-ink-500">{t('faq.whatsappCtaText')}</p>
            <a
              href={buildWhatsAppLink(t('faq.whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'whatsapp', size: 'md', className: 'mt-5' })}
            >
              {t('faq.whatsappCta')}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
