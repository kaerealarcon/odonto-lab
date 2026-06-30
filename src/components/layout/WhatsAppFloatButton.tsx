import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function WhatsAppFloatButton() {
  const { t } = useTranslation()

  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('common.whatsapp.openLabel')}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  )
}
