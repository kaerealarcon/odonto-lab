import { useTranslation } from 'react-i18next'
import type { FaqItem } from '@/types'

interface BaseFaqItem {
  id: string
  category: 'geral' | 'pagamento' | 'tratamentos' | 'emergencia'
}

const baseFaqItems: BaseFaqItem[] = [
  { id: 'f1', category: 'geral' },
  { id: 'f2', category: 'geral' },
  { id: 'f3', category: 'pagamento' },
  { id: 'f4', category: 'pagamento' },
  { id: 'f5', category: 'tratamentos' },
  { id: 'f6', category: 'tratamentos' },
  { id: 'f7', category: 'emergencia' },
  { id: 'f8', category: 'geral' },
]

export function useFaqItems(): FaqItem[] {
  const { t } = useTranslation()
  return baseFaqItems.map((base) => ({
    ...base,
    question: t(`faq.items.${base.id}.question`),
    answer: t(`faq.items.${base.id}.answer`),
  }))
}
