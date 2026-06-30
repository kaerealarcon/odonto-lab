import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { useTreatmentCategories } from '@/data/treatmentCategories'

interface TreatmentFilterProps {
  active: string
  onChange: (category: string) => void
}

export function TreatmentFilter({ active, onChange }: TreatmentFilterProps) {
  const { t } = useTranslation()
  const categories = useTreatmentCategories()
  const options = [{ slug: 'todos', name: t('treatments.filterAll') }, ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label={t('treatments.pageHeaderEyebrow')}>
      {options.map((option) => (
        <button
          key={option.slug}
          type="button"
          role="tab"
          aria-selected={active === option.slug}
          onClick={() => onChange(option.slug)}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-colors',
            active === option.slug
              ? 'bg-primary-600 text-white'
              : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
          )}
        >
          {option.name}
        </button>
      ))}
    </div>
  )
}
