import { useTranslation } from 'react-i18next'
import type { Testimonial } from '@/types'

interface BaseTestimonial {
  id: string
  name: string
  initials: string
  photo: string
  rating: number
  source?: 'site' | 'google'
}

const baseTestimonials: BaseTestimonial[] = [
  { id: 't1', name: 'Marina Costa', initials: 'MC', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', rating: 5, source: 'google' },
  { id: 't2', name: 'João Pedro Alves', initials: 'JA', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', rating: 5, source: 'google' },
  { id: 't3', name: 'Fernanda Ribeiro', initials: 'FR', photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop', rating: 5, source: 'site' },
  { id: 't4', name: 'Lucas Tanaka', initials: 'LT', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop', rating: 5, source: 'google' },
  { id: 't5', name: 'Patrícia Gomes', initials: 'PG', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', rating: 5, source: 'site' },
]

export function useTestimonials(): Testimonial[] {
  const { t } = useTranslation()
  return baseTestimonials.map((base) => ({
    ...base,
    text: t(`testimonials.items.${base.id}.text`),
    treatment: t(`testimonials.items.${base.id}.treatment`),
  }))
}
