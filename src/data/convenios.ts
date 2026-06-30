import { ShieldCheck, HeartPulse, BadgeCheck, Stethoscope, ShieldPlus, Activity, HeartHandshake, CreditCard } from 'lucide-react'
import type { Convenio } from '@/types'

export const convenios: Convenio[] = [
  { name: 'Amil Dental', icon: ShieldCheck },
  { name: 'Bradesco Dental', icon: HeartPulse },
  { name: 'SulAmérica Odonto', icon: BadgeCheck },
  { name: 'Odontoprev', icon: Stethoscope },
  { name: 'Porto Seguro Odonto', icon: ShieldPlus },
  { name: 'Interodonto', icon: Activity },
  { name: 'Uniodonto', icon: HeartHandshake },
  { name: 'MetLife Odonto', icon: CreditCard },
]
