import { useTranslation } from 'react-i18next'
import type { TeamMember } from '@/types'

interface BaseTeamMember {
  id: string
  name: string
  cro: string
  photo: string
  fallbackPhoto: string
}

const baseTeam: BaseTeamMember[] = [
  {
    id: 'camila-andrade',
    name: 'Dra. Camila Andrade',
    cro: 'CRO-SP 98765',
    photo: '/images/team/camila-andrade.jpg',
    fallbackPhoto: 'https://i.pravatar.cc/400?img=47',
  },
  {
    id: 'rafael-monteiro',
    name: 'Dr. Rafael Monteiro',
    cro: 'CRO-SP 87421',
    photo: '/images/team/rafael-monteiro.jpg',
    fallbackPhoto: 'https://i.pravatar.cc/400?img=12',
  },
  {
    id: 'beatriz-lima',
    name: 'Dra. Beatriz Lima',
    cro: 'CRO-SP 76233',
    photo: '/images/team/beatriz-lima.jpg',
    fallbackPhoto: 'https://i.pravatar.cc/400?img=32',
  },
  {
    id: 'thiago-souza',
    name: 'Dr. Thiago Souza',
    cro: 'CRO-SP 65190',
    photo: '/images/team/thiago-souza.jpg',
    fallbackPhoto: 'https://i.pravatar.cc/400?img=53',
  },
]

export function useTeam(): TeamMember[] {
  const { t } = useTranslation()
  return baseTeam.map((base) => ({
    ...base,
    role: t(`team.${base.id}.role`),
    bio: t(`team.${base.id}.bio`),
  }))
}
