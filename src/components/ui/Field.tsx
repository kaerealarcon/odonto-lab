import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const fieldClasses =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-800 placeholder:text-ink-400 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-200'

interface LabelWrapperProps {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

export function FieldLabel({ label, htmlFor, error, required, children }: LabelWrapperProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldClasses, className)} {...props} />
  )
)
Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldClasses, 'min-h-32 resize-y', className)} {...props} />
  )
)
Textarea.displayName = 'Textarea'

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(fieldClasses, 'appearance-none bg-no-repeat', className)} {...props}>
      {children}
    </select>
  )
)
Select.displayName = 'Select'
