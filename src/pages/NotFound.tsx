import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t('common.notFound.seoTitle')} description={t('common.notFound.seoDescription')} />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center py-20">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">{t('common.notFound.eyebrow')}</span>
        <h1 className="mt-3 text-4xl">{t('common.notFound.title')}</h1>
        <p className="mt-4 max-w-md text-ink-500">{t('common.notFound.description')}</p>
        <Link to="/" className={buttonVariants({ variant: 'primary', size: 'lg', className: 'mt-8' })}>
          {t('common.notFound.button')}
        </Link>
      </Container>
    </>
  )
}
