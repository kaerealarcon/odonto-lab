import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/sections/PageHeader'
import { BlogCard } from '@/components/blog/BlogCard'
import { useBlogPosts } from '@/data/blogPosts'
import { getBreadcrumbSchema } from '@/lib/schema'

export function Blog() {
  const { t } = useTranslation()
  const blogPosts = useBlogPosts()

  return (
    <>
      <SEO
        title={t('blog.seoTitle')}
        description={t('blog.seoDescription')}
        path="/blog"
        jsonLd={getBreadcrumbSchema([{ name: t('common.nav.home'), path: '/' }, { name: t('common.nav.blog'), path: '/blog' }])}
      />
      <PageHeader
        eyebrow={t('blog.pageHeaderEyebrow')}
        title={t('blog.pageHeaderTitle')}
        description={t('blog.pageHeaderDescription')}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
