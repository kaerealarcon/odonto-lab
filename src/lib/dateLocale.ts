const localeMap: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  fr: 'fr-FR',
}

export function dateLocale(language: string) {
  const base = language.split('-')[0]
  return localeMap[base] ?? 'pt-BR'
}
