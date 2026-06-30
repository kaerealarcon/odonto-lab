import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatButton } from '@/components/layout/WhatsAppFloatButton'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HtmlLangSync } from '@/components/layout/HtmlLangSync'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <HtmlLangSync />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}
