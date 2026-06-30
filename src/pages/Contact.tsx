import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { Card, CardBody } from '@/components/ui/Card'
import { PageHeader } from '@/components/sections/PageHeader'
import { MapSection } from '@/components/sections/MapSection'
import { ContactForm } from '@/components/forms/ContactForm'
import { clinicInfo, useBusinessHours } from '@/data/clinicInfo'
import { getDentistSchema, getBreadcrumbSchema } from '@/lib/schema'

export function Contact() {
  const { t } = useTranslation()
  const hours = useBusinessHours()

  return (
    <>
      <SEO
        title={t('contact.seoTitle')}
        description={t('contact.seoDescription')}
        path="/contato"
        jsonLd={[
          getDentistSchema(),
          getBreadcrumbSchema([{ name: t('common.nav.home'), path: '/' }, { name: t('contact.pageHeaderEyebrow'), path: '/contato' }]),
        ]}
      />
      <PageHeader
        eyebrow={t('contact.pageHeaderEyebrow')}
        title={t('contact.pageHeaderTitle')}
        description={t('contact.pageHeaderDescription')}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardBody>
              <h2 className="text-2xl">{t('contact.formTitle')}</h2>
              <p className="mt-2 text-ink-500">{t('contact.formDescription')}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </CardBody>
          </Card>

          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardBody className="space-y-4">
                <h2 className="text-lg font-semibold text-ink-800">{t('contact.contactInfoTitle')}</h2>
                <div className="flex items-start gap-3 text-ink-600">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-primary-600" />
                  <span>{clinicInfo.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3 text-ink-600">
                  <Phone size={20} className="shrink-0 text-primary-600" />
                  <a href={`tel:+${clinicInfo.phoneDigits}`} className="hover:text-primary-700">
                    {clinicInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-ink-600">
                  <Mail size={20} className="shrink-0 text-primary-600" />
                  <a href={`mailto:${clinicInfo.email}`} className="hover:text-primary-700">
                    {clinicInfo.email}
                  </a>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="space-y-3">
                <h2 className="text-lg font-semibold text-ink-800">{t('contact.hoursTitle')}</h2>
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center gap-3 text-ink-600">
                    <Clock size={18} className="shrink-0 text-primary-600" />
                    <span>
                      {h.day}: {h.time}
                    </span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>

      <MapSection className="pb-16 sm:pb-20" />
    </>
  )
}
