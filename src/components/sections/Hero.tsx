import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50 via-white to-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-700">
            <ShieldCheck size={16} />
            {t('home.hero.badge')}
          </span>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {t('home.hero.titleStart')} <span className="text-primary-600">{t('home.hero.titleHighlight')}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-500">{t('home.hero.description')}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'whatsapp', size: 'lg' })}
            >
              {t('home.hero.ctaPrimary')}
            </a>
            <Link to="/tratamentos" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="relative">
          <FallbackImage
            src="/images/clinic/hero.jpg"
            fallbackSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
            alt="Odonto Lab"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl shadow-primary-900/10"
            loading="eager"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-lg shadow-ink-900/10 sm:block">
            <p className="text-2xl font-bold text-primary-700">{t('home.hero.statNumber')}</p>
            <p className="text-sm text-ink-500">{t('home.hero.statLabel')}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
