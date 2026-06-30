import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { FallbackImage } from '@/components/ui/FallbackImage'
import { dateLocale } from '@/lib/dateLocale'
import type { BlogPost } from '@/types'

export function BlogCard({ post }: { post: BlogPost }) {
  const { t, i18n } = useTranslation()

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <FallbackImage
        src={post.coverImage}
        fallbackSrc={post.fallbackCoverImage}
        alt={post.title}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString(dateLocale(i18n.language))}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink-800">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          {t('blog.readArticle')} <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  )
}
