import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AvatarProps {
  initials: string
  photo?: string
  alt?: string
  className?: string
}

export function Avatar({ initials, photo, alt, className }: AvatarProps) {
  const [photoFailed, setPhotoFailed] = useState(false)

  if (photo && !photoFailed) {
    return (
      <img
        src={photo}
        alt={alt ?? ''}
        onError={() => setPhotoFailed(true)}
        className={cn('h-12 w-12 shrink-0 rounded-full object-cover', className)}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700',
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}
