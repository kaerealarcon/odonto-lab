import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { buttonVariants } from '@/components/ui/Button'
import { Logo } from '@/components/layout/Logo'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { navLinks } from '@/components/layout/navLinks'
import { clinicInfo } from '@/data/clinicInfo'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-ink-600 hover:text-primary-700',
                  isActive && 'text-primary-700'
                )
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a
            href={`tel:+${clinicInfo.phoneDigits}`}
            className="flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-primary-700"
          >
            <Phone size={16} />
            {clinicInfo.phone}
          </a>
          <Link to="/contato" className={buttonVariants({ variant: 'accent', size: 'sm' })}>
            {t('common.scheduleButton')}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="-mr-2 p-2 text-ink-700"
            aria-label={isOpen ? t('common.menu.close') : t('common.menu.open')}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2.5 text-base font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700',
                    isActive && 'bg-primary-50 text-primary-700'
                  )
                }
              >
                {t(link.labelKey)}
              </NavLink>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ variant: 'accent', size: 'md', className: 'mt-3 w-full' })}
            >
              {t('common.scheduleButton')}
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}
