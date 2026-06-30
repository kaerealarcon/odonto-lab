import i18n from '@/i18n'
import { clinicInfo } from '@/data/clinicInfo'

export function buildWhatsAppLink(message?: string) {
  const phone = clinicInfo.whatsappNumber
  const text = message ?? i18n.t('common.whatsapp.defaultMessage')
  const encoded = encodeURIComponent(text)
  return `https://wa.me/${phone}?text=${encoded}`
}
