import { useTranslation } from 'react-i18next'

export const clinicInfo = {
  name: 'Odonto Lab',
  shortName: 'Odonto Lab',
  city: 'São Paulo',
  state: 'SP',
  fullAddress: 'Av. Paulista, 1500 — Conj. 142, Bela Vista, São Paulo - SP, 01310-200',
  street: 'Av. Paulista, 1500 — Conj. 142',
  neighborhood: 'Bela Vista',
  zip: '01310-200',
  phone: '(11) 3456-7890',
  phoneDigits: '5511934567890',
  whatsappNumber: '5511934567890',
  email: 'contato@odontolab.com.br',
  instagram: 'https://instagram.com/odontolab',
  facebook: 'https://facebook.com/odontolab',
  geo: {
    lat: -23.5631,
    lng: -46.6544,
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Av.+Paulista%2C+1500%2C+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed',
  cnpj: '00.000.000/0001-00',
  responsibleDentist: {
    name: 'Dra. Camila Andrade',
    cro: 'CRO-SP 98765',
  },
} as const

export function useBusinessHours() {
  const { t } = useTranslation()
  return [
    { day: t('common.hours.weekdays'), time: t('common.hours.weekdaysTime') },
    { day: t('common.hours.saturday'), time: t('common.hours.saturdayTime') },
    { day: t('common.hours.sunday'), time: t('common.hours.closed') },
  ]
}
