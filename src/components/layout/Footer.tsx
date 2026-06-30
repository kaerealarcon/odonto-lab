import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/icons/SocialIcons'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'
import { navLinks } from '@/components/layout/navLinks'
import { clinicInfo, useBusinessHours } from '@/data/clinicInfo'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Footer() {
  const { t } = useTranslation()
  const hours = useBusinessHours()

  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-500">{t('common.footer.description')}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={clinicInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 ring-1 ring-ink-200 hover:text-primary-700"
            >
              <InstagramIcon width={18} height={18} />
            </a>
            <a
              href={clinicInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 ring-1 ring-ink-200 hover:text-primary-700"
            >
              <FacebookIcon width={18} height={18} />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 ring-1 ring-ink-200 hover:text-primary-700"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">{t('common.footer.navTitle')}</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-ink-600 hover:text-primary-700">
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contato" className="text-sm text-ink-600 hover:text-primary-700">
                {t('common.footer.scheduling')}
              </Link>
            </li>
            <li>
              <Link to="/privacidade" className="text-sm text-ink-600 hover:text-primary-700">
                {t('common.footer.privacyPolicy')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">{t('common.footer.contactTitle')}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-600">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary-600" />
              {clinicInfo.fullAddress}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-primary-600" />
              <a href={`tel:+${clinicInfo.phoneDigits}`} className="hover:text-primary-700">
                {clinicInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-primary-600" />
              <a href={`mailto:${clinicInfo.email}`} className="hover:text-primary-700">
                {clinicInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">{t('common.footer.hoursTitle')}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 text-primary-600" />
                <span>
                  {h.day}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-100 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Odonto Lab. {t('common.footer.rightsReserved')}</p>
          <p>CNPJ {clinicInfo.cnpj} · {clinicInfo.responsibleDentist.name} — {clinicInfo.responsibleDentist.cro}</p>
        </Container>
      </div>
    </footer>
  )
}
