import { Quote } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { StarRating } from '@/components/ui/StarRating'
import type { Testimonial } from '@/types'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardBody className="flex h-full flex-col">
        <Quote className="mb-3 text-accent-300" size={28} />
        <p className="flex-1 text-ink-600 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
        <div className="mt-6 flex items-center gap-3">
          <Avatar initials={testimonial.initials} photo={testimonial.photo} alt={testimonial.name} />
          <div>
            <p className="font-semibold text-ink-800">{testimonial.name}</p>
            {testimonial.treatment && <p className="text-sm text-ink-400">{testimonial.treatment}</p>}
          </div>
        </div>
        <StarRating rating={testimonial.rating} className="mt-3" />
      </CardBody>
    </Card>
  )
}
