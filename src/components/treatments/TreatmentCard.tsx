import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { useTreatmentCategories } from '@/data/treatmentCategories'
import type { Treatment } from '@/types'

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const { t } = useTranslation()
  const categories = useTreatmentCategories()
  const category = categories.find((c) => c.slug === treatment.category)

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="overflow-hidden">
        <FallbackImage
          src={treatment.image}
          fallbackSrc={treatment.fallbackImage}
          alt={treatment.name}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {category && <Badge variant="primary">{category.name}</Badge>}
        <h3 className="mt-3 text-lg font-semibold text-ink-800">{treatment.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{treatment.shortDescription}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-400">
          <Clock size={14} />
          {treatment.estimatedTime}
        </div>
        <Link
          to={`/tratamentos/${treatment.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          {t('treatments.learnMore')} <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  )
}
