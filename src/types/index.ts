import type { LucideIcon } from 'lucide-react'

export type TreatmentCategorySlug =
  | 'estetica'
  | 'ortodontia'
  | 'saude-bucal'
  | 'odontopediatria'

export interface TreatmentCategory {
  slug: TreatmentCategorySlug
  name: string
  description: string
}

export interface TreatmentStep {
  title: string
  description: string
}

export interface Treatment {
  slug: string
  name: string
  category: TreatmentCategorySlug
  shortDescription: string
  description: string
  indications: string[]
  steps: TreatmentStep[]
  estimatedTime: string
  hasBeforeAfter: boolean
  image: string
  fallbackImage: string
  seoTitle: string
  seoDescription: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  cro: string
  bio: string
  photo: string
  fallbackPhoto: string
}

export interface Testimonial {
  id: string
  name: string
  initials: string
  photo: string
  rating: number
  text: string
  treatment?: string
  source?: 'site' | 'google'
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'geral' | 'pagamento' | 'tratamentos' | 'emergencia'
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  coverImage: string
  fallbackCoverImage: string
  author: string
  date: string
  readTime: string
  tags: string[]
  seoTitle: string
  seoDescription: string
}

export interface Convenio {
  name: string
  icon: LucideIcon
}

export interface BeforeAfterCase {
  id: string
  treatment: string
  before: string
  after: string
  fallbackBefore: string
  fallbackAfter: string
  description: string
}
