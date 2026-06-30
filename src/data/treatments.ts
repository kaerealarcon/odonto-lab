import { useTranslation } from 'react-i18next'
import { withBase } from '@/lib/utils'
import type { Treatment, TreatmentCategorySlug, TreatmentStep } from '@/types'

interface BaseTreatment {
  slug: string
  category: TreatmentCategorySlug
  image: string
  fallbackImage: string
  hasBeforeAfter: boolean
}

const baseTreatments: BaseTreatment[] = [
  {
    slug: 'clareamento-dental',
    category: 'estetica',
    image: '/images/treatments/clareamento-dental.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: true,
  },
  {
    slug: 'lentes-de-contato-dental',
    category: 'estetica',
    image: '/images/treatments/lentes-de-contato-dental.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: true,
  },
  {
    slug: 'facetas-dentarias',
    category: 'estetica',
    image: '/images/treatments/facetas-dentarias.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: true,
  },
  {
    slug: 'aparelho-ortodontico',
    category: 'ortodontia',
    image: '/images/treatments/aparelho-ortodontico.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: true,
  },
  {
    slug: 'alinhadores-invisiveis',
    category: 'ortodontia',
    image: '/images/treatments/alinhadores-invisiveis.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: false,
  },
  {
    slug: 'limpeza-profilaxia',
    category: 'saude-bucal',
    image: '/images/treatments/limpeza-profilaxia.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: false,
  },
  {
    slug: 'tratamento-de-canal',
    category: 'saude-bucal',
    image: '/images/treatments/tratamento-de-canal.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: false,
  },
  {
    slug: 'extracao-dentaria',
    category: 'saude-bucal',
    image: '/images/treatments/extracao-dentaria.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: false,
  },
  {
    slug: 'implantes-dentarios',
    category: 'saude-bucal',
    image: '/images/treatments/implantes-dentarios.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1609207825181-52d3214556dd?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: true,
  },
  {
    slug: 'odontopediatria-consulta',
    category: 'odontopediatria',
    image: '/images/treatments/odontopediatria-consulta.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    hasBeforeAfter: false,
  },
]

export function useTreatments(): Treatment[] {
  const { t } = useTranslation()
  return baseTreatments.map((base) => ({
    ...base,
    image: withBase(base.image),
    name: t(`treatments.items.${base.slug}.name`),
    shortDescription: t(`treatments.items.${base.slug}.shortDescription`),
    description: t(`treatments.items.${base.slug}.description`),
    indications: t(`treatments.items.${base.slug}.indications`, { returnObjects: true }) as string[],
    steps: t(`treatments.items.${base.slug}.steps`, { returnObjects: true }) as TreatmentStep[],
    estimatedTime: t(`treatments.items.${base.slug}.estimatedTime`),
    seoTitle: t(`treatments.items.${base.slug}.seoTitle`),
    seoDescription: t(`treatments.items.${base.slug}.seoDescription`),
  }))
}

export function useTreatmentBySlug(slug: string | undefined) {
  const treatments = useTreatments()
  return treatments.find((item) => item.slug === slug)
}

export function useTreatmentsByCategory(category: string) {
  const treatments = useTreatments()
  if (category === 'todos') return treatments
  return treatments.filter((item) => item.category === category)
}
