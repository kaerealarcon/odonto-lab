import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { supportedLanguages, type SupportedLanguage } from '@/i18n'
import { cn } from '@/lib/utils'

function flagUrl(countryCode: string) {
  return `https://flagcdn.com/40x30/${countryCode}.png`
}

const countryCodes: Record<SupportedLanguage, string> = {
  pt: 'br',
  en: 'us',
  fr: 'fr',
}

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation()
  const current = (i18n.resolvedLanguage ?? 'pt').split('-')[0] as SupportedLanguage
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Idioma / Language / Langue"
        aria-expanded={open}
        className="flex shrink-0 items-center justify-center rounded-lg p-1.5 hover:bg-primary-50"
      >
        <img
          src={flagUrl(countryCodes[current] ?? 'br')}
          alt={t(`common.languages.${current}`)}
          className="h-3.75 w-5 max-w-none shrink-0 rounded-sm object-cover"
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-32 rounded-xl border border-ink-100 bg-white p-1.5 shadow-lg shadow-ink-900/10">
          {supportedLanguages.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => {
                i18n.changeLanguage(lng)
                setOpen(false)
              }}
              className={cn(
                'block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-ink-600 hover:bg-primary-50 hover:text-primary-700',
                current === lng && 'bg-primary-50 text-primary-700'
              )}
            >
              {t(`common.languages.${lng}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
