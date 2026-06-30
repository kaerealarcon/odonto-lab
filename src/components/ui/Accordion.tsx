import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemData {
  id: string
  question: string
  answer: ReactNode
}

interface AccordionProps {
  items: AccordionItemData[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className={cn('divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink-800 hover:text-primary-700"
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={cn('shrink-0 text-ink-400 transition-transform', isOpen && 'rotate-180 text-primary-600')}
              />
            </button>
            {isOpen && <div className="px-5 pb-5 text-ink-500 leading-relaxed">{item.answer}</div>}
          </div>
        )
      })}
    </div>
  )
}
