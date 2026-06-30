import { useTranslation } from 'react-i18next'
import { Card, CardBody } from '@/components/ui/Card'
import { FallbackImage } from '@/components/ui/FallbackImage'
import type { TeamMember } from '@/types'

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden">
      <FallbackImage
        src={member.photo}
        fallbackSrc={member.fallbackPhoto}
        alt={t('common.photoOf', { name: member.name })}
        className="aspect-square w-full object-cover"
        loading="lazy"
      />
      <CardBody>
        <h3 className="text-lg font-semibold text-ink-800">{member.name}</h3>
        <p className="text-sm font-medium text-primary-600">{member.role}</p>
        <p className="mt-1 text-xs text-ink-400">{member.cro}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{member.bio}</p>
      </CardBody>
    </Card>
  )
}
