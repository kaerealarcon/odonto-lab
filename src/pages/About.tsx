import { useTranslation } from 'react-i18next'
import { Award, Microscope, HeartHandshake } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { PageHeader } from '@/components/sections/PageHeader'
import { TeamMemberCard } from '@/components/team/TeamMemberCard'
import { useTeam } from '@/data/team'
import { clinicInfo } from '@/data/clinicInfo'
import { getDentistSchema, getBreadcrumbSchema } from '@/lib/schema'
import { withBase } from '@/lib/utils'

const structureImages = [
  {
    src: withBase('/images/clinic/estrutura-recepcao.jpg'),
    fallbackSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop',
  },
  {
    src: withBase('/images/clinic/estrutura-consultorio.jpg'),
    fallbackSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop',
  },
  {
    src: withBase('/images/clinic/estrutura-esterilizacao.jpg'),
    fallbackSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=900&auto=format&fit=crop',
  },
]

const techIcons = [Microscope, Award, HeartHandshake]

export function About() {
  const { t } = useTranslation()
  const team = useTeam()
  const structureItems = t('about.structure.items', { returnObjects: true }) as { title: string; description: string }[]
  const techItems = t('about.tech.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <>
      <SEO
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
        path="/sobre"
        jsonLd={[
          getDentistSchema(),
          getBreadcrumbSchema([{ name: t('common.nav.home'), path: '/' }, { name: t('common.nav.about'), path: '/sobre' }]),
        ]}
      />
      <PageHeader
        eyebrow={t('about.pageHeaderEyebrow')}
        title={t('about.pageHeaderTitle')}
        description={t('about.pageHeaderDescription', {
          name: clinicInfo.responsibleDentist.name,
          cro: clinicInfo.responsibleDentist.cro,
        })}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl">{t('about.mission.title')}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">{t('about.mission.text')}</p>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={t('about.structure.eyebrow')}
            title={t('about.structure.title')}
            description={t('about.structure.description')}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {structureItems.map((item, i) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm shadow-ink-900/5">
                <FallbackImage
                  src={structureImages[i].src}
                  fallbackSrc={structureImages[i].fallbackSrc}
                  alt={item.title}
                  className="aspect-4/3 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-ink-800">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={t('about.team.eyebrow')}
            title={t('about.team.title')}
            description={t('about.team.description')}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t('about.tech.eyebrow')} title={t('about.tech.title')} />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {techItems.map((item, i) => {
              const Icon = techIcons[i]
              return (
                <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm shadow-ink-900/5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
