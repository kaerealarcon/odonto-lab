import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className }: StarRatingProps) {
  const { t } = useTranslation()

  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={t('common.starsLabel', { rating })}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-accent-500 text-accent-500' : 'fill-ink-200 text-ink-200'}
        />
      ))}
    </div>
  )
}
