import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { clinicInfo } from '@/data/clinicInfo'

interface MapSectionProps {
  showHeading?: boolean
  className?: string
}

export function MapSection({ showHeading = true, className }: MapSectionProps) {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <Container>
        {showHeading && (
          <SectionHeading eyebrow={t('home.map.eyebrow')} title={t('home.map.title')} description={clinicInfo.fullAddress} />
        )}
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink-100 shadow-sm shadow-ink-900/5">
          <iframe
            title={clinicInfo.name}
            src={clinicInfo.mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  )
}
