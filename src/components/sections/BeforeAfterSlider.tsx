import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FallbackImage } from '@/components/ui/FallbackImage'
import type { BeforeAfterCase } from '@/types'

export function BeforeAfterSlider({ item }: { item: BeforeAfterCase }) {
  const [position, setPosition] = useState(50)
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm shadow-ink-900/5">
      <div className="relative aspect-4/3 select-none overflow-hidden">
        <FallbackImage
          src={item.after}
          fallbackSrc={item.fallbackAfter}
          alt={`${t('common.beforeAfter.after')} — ${item.treatment}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <FallbackImage
            src={item.before}
            fallbackSrc={item.fallbackBefore}
            alt={`${t('common.beforeAfter.before')} — ${item.treatment}`}
            className="h-full w-full max-w-none object-cover"
            style={{ width: `${10000 / position}%` }}
            loading="lazy"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)]"
          style={{ left: `${position}%` }}
        />
        <span className="absolute left-2 top-2 rounded-full bg-ink-900/60 px-2 py-0.5 text-xs font-medium text-white">
          {t('common.beforeAfter.before')}
        </span>
        <span className="absolute right-2 top-2 rounded-full bg-accent-600/90 px-2 py-0.5 text-xs font-medium text-white">
          {t('common.beforeAfter.after')}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={t('common.beforeAfter.dragLabel', { treatment: item.treatment })}
          className="absolute inset-x-0 bottom-3 mx-auto w-[90%] accent-accent-500"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-ink-800">{item.treatment}</p>
        <p className="mt-1 text-sm text-ink-500">{item.description}</p>
      </div>
    </div>
  )
}
