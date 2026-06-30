import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Treatments } from '@/pages/Treatments'
import { TreatmentDetail } from '@/pages/TreatmentDetail'
import { Convenios } from '@/pages/Convenios'
import { Contact } from '@/pages/Contact'
import { Testimonials } from '@/pages/Testimonials'
import { Blog } from '@/pages/Blog'
import { BlogPost } from '@/pages/BlogPost'
import { Faq } from '@/pages/Faq'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="tratamentos" element={<Treatments />} />
        <Route path="tratamentos/:slug" element={<TreatmentDetail />} />
        <Route path="convenios" element={<Convenios />} />
        <Route path="contato" element={<Contact />} />
        <Route path="depoimentos" element={<Testimonials />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacidade" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
