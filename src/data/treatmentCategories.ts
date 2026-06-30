import { useTranslation } from 'react-i18next'
import type { TreatmentCategory, TreatmentCategorySlug } from '@/types'

export const treatmentCategorySlugs: TreatmentCategorySlug[] = [
  'estetica',
  'ortodontia',
  'saude-bucal',
  'odontopediatria',
]

export function useTreatmentCategories(): TreatmentCategory[] {
  const { t } = useTranslation()
  return treatmentCategorySlugs.map((slug) => ({
    slug,
    name: t(`treatments.categories.${slug}.name`),
    description: t(`treatments.categories.${slug}.description`),
  }))
}
