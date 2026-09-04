import Link from 'next/link'
import type { ComponentProps } from 'react'
import { ArrowUpRight } from 'lucide-react'

type ButtonProps = ComponentProps<typeof Link> & { variant?: 'primary' | 'outline'; showArrow?: boolean }

export function Button({ variant = 'primary', showArrow = true, className = '', children, ...props }: ButtonProps) {
  return (
    <Link {...props} className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${variant === 'primary' ? 'bg-primary text-primary-foreground hover:brightness-110' : 'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary'} ${className}`}>
      {children}
      {showArrow && <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  )
}
