import { useTranslation } from 'react-i18next'
import { Cpu, Sparkles, Users, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const icons = [Cpu, Sparkles, Users, ShieldCheck]

export function Differentials() {
  const { t } = useTranslation()
  const items = t('home.differentials.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t('home.differentials.eyebrow')}
          title={t('home.differentials.title')}
          description={t('home.differentials.description')}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm shadow-ink-900/5"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
