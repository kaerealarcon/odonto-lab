import { useState, type ImgHTMLAttributes } from 'react'

interface FallbackImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  fallbackSrc: string
}

export function FallbackImage({ src, fallbackSrc, ...props }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      {...props}
      src={currentSrc}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
      }}
    />
  )
}
