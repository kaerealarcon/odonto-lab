import { useState } from 'react'
import { Link } from 'react-router-dom'
import { withBase } from '@/lib/utils'

export function Logo() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-ink-900">
      {logoFailed ? (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-accent-500 text-white">
          OL
        </span>
      ) : (
        <img
          src={withBase('/images/logo/logo.svg')}
          alt="Odonto Lab"
          className="h-9 w-9 object-contain"
          onError={() => setLogoFailed(true)}
        />
      )}
      Odonto Lab
    </Link>
  )
}
