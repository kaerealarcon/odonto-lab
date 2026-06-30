import { Navigate, useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { useBlogPostBySlug } from '@/data/blogPosts'
import { dateLocale } from '@/lib/dateLocale'
import { getBreadcrumbSchema } from '@/lib/schema'

export function BlogPost() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const post = useBlogPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        path={`/blog/${post.slug}`}
        jsonLd={getBreadcrumbSchema([
          { name: t('common.nav.home'), path: '/' },
          { name: t('common.nav.blog'), path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-800">
            <ArrowLeft size={16} />
            {t('blog.backToBlog')}
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="neutral">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl">{post.title}</h1>

          <div className="mt-4 flex items-center gap-5 text-sm text-ink-400">
            <span>{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString(dateLocale(i18n.language))}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <FallbackImage
            src={post.coverImage}
            fallbackSrc={post.fallbackCoverImage}
            alt={post.title}
            className="mt-8 aspect-video w-full rounded-3xl object-cover"
            loading="lazy"
          />

          <div className="prose-content mt-8 space-y-5 text-lg leading-relaxed text-ink-600">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
    </>
  )
}
