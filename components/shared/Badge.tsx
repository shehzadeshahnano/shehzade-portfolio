'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'success'
  size?: 'xs' | 'sm' | 'md'
  className?: string
}

export default function Badge({ 
  children, 
  variant = 'secondary', 
  size = 'sm',
  className 
}: BadgeProps) {
  const variants = {
    primary: 'bg-brand-blue text-white',
    secondary: 'bg-card-hover text-text-secondary border border-border',
    outline: 'bg-transparent border border-brand-blue text-brand-blue',
    success: 'bg-green-500/20 text-green-600 border border-green-500/30',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span className={cn(
      'inline-flex items-center font-medium rounded-full transition-colors',
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </span>
  )
}