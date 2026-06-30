import { Container } from '@/components/ui/Container'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-linear-to-b from-primary-50 to-white py-14 sm:py-20">
      <Container className="max-w-3xl text-center">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">{eyebrow}</span>
        )}
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-lg text-ink-500">{description}</p>}
      </Container>
    </section>
  )
}
