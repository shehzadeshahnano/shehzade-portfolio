'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary: 'bg-brand-blue text-white hover:opacity-90 shadow-glow', 
  secondary: 'bg-card-bg text-text-primary border border-border hover:bg-card-hover',
  outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
  ghost: 'text-text-primary hover:bg-black/5 dark:hover:bg-white/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl 
    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
    ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </motion.button>
  )
}
