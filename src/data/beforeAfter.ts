import { useTranslation } from 'react-i18next'
import { withBase } from '@/lib/utils'
import type { BeforeAfterCase } from '@/types'

interface BaseBeforeAfterCase {
  id: string
  treatmentSlug: string
  before: string
  after: string
  fallbackBefore: string
  fallbackAfter: string
}

const baseBeforeAfterCases: BaseBeforeAfterCase[] = [
  {
    id: 'ba1',
    treatmentSlug: 'clareamento-dental',
    before: '/images/before-after/clareamento-dental-antes.jpg',
    after: '/images/before-after/clareamento-dental-depois.jpg',
    fallbackBefore:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop&sat=-100&blend=222222&blend-mode=multiply',
    fallbackAfter: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ba2',
    treatmentSlug: 'lentes-de-contato-dental',
    before: '/images/before-after/lentes-de-contato-dental-antes.jpg',
    after: '/images/before-after/lentes-de-contato-dental-depois.jpg',
    fallbackBefore:
      'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=600&auto=format&fit=crop&sat=-100&blend=222222&blend-mode=multiply',
    fallbackAfter: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ba3',
    treatmentSlug: 'aparelho-ortodontico',
    before: '/images/before-after/ortodontia-antes.jpg',
    after: '/images/before-after/ortodontia-depois.jpg',
    fallbackBefore:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop&sat=-100&blend=222222&blend-mode=multiply',
    fallbackAfter: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop',
  },
]

export function useBeforeAfterCases(): BeforeAfterCase[] {
  const { t } = useTranslation()
  return baseBeforeAfterCases.map((base) => ({
    ...base,
    before: withBase(base.before),
    after: withBase(base.after),
    treatment: t(`treatments.items.${base.treatmentSlug}.name`),
    description: t(`beforeAfter.items.${base.id}.description`),
  }))
}

export function useBeforeAfterCaseForTreatment(treatmentSlug: string | undefined) {
  const cases = useBeforeAfterCases()
  const base = baseBeforeAfterCases.find((item) => item.treatmentSlug === treatmentSlug)
  return cases.find((item) => item.id === base?.id)
}
