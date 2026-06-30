import { useTranslation } from 'react-i18next'
import { withBase } from '@/lib/utils'
import type { BlogPost } from '@/types'

interface BaseBlogPost {
  slug: string
  coverImage: string
  fallbackCoverImage: string
  author: string
  date: string
  readTime: string
}

const baseBlogPosts: BaseBlogPost[] = [
  {
    slug: 'cuidados-pos-extracao-dentaria',
    coverImage: '/images/blog/cuidados-pos-extracao-dentaria.jpg',
    fallbackCoverImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop',
    author: 'Dra. Camila Andrade',
    date: '2026-05-12',
    readTime: '4 min',
  },
  {
    slug: 'mitos-e-verdades-sobre-clareamento-dental',
    coverImage: '/images/blog/mitos-e-verdades-sobre-clareamento-dental.jpg',
    fallbackCoverImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop',
    author: 'Dr. Thiago Souza',
    date: '2026-04-20',
    readTime: '5 min',
  },
  {
    slug: 'quando-levar-a-crianca-ao-dentista-pela-primeira-vez',
    coverImage: '/images/blog/quando-levar-a-crianca-ao-dentista-pela-primeira-vez.jpg',
    fallbackCoverImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
    author: 'Dra. Beatriz Lima',
    date: '2026-03-08',
    readTime: '3 min',
  },
]

export function useBlogPosts(): BlogPost[] {
  const { t } = useTranslation()
  return baseBlogPosts.map((base) => ({
    ...base,
    coverImage: withBase(base.coverImage),
    title: t(`blog.posts.${base.slug}.title`),
    excerpt: t(`blog.posts.${base.slug}.excerpt`),
    content: t(`blog.posts.${base.slug}.content`, { returnObjects: true }) as string[],
    tags: t(`blog.posts.${base.slug}.tags`, { returnObjects: true }) as string[],
    seoTitle: t(`blog.posts.${base.slug}.seoTitle`),
    seoDescription: t(`blog.posts.${base.slug}.seoDescription`),
  }))
}

export function useBlogPostBySlug(slug: string | undefined) {
  const posts = useBlogPosts()
  return posts.find((post) => post.slug === slug)
}
