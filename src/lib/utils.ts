import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefixes a root-relative local asset path (e.g. "/images/foo.jpg") with Vite's base path. */
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
