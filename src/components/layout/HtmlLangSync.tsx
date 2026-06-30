import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function HtmlLangSync() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'pt'
  }, [i18n.resolvedLanguage])

  return null
}
