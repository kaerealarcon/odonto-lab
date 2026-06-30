import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full font-medium', {
  variants: {
    variant: {
      primary: 'bg-primary-100 text-primary-700',
      accent: 'bg-accent-100 text-accent-700',
      neutral: 'bg-ink-100 text-ink-600',
    },
    size: {
      sm: 'text-xs px-2.5 py-1',
      md: 'text-sm px-3 py-1.5',
    },
  },
  defaultVariants: { variant: 'primary', size: 'sm' },
})

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}
