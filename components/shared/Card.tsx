'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
  variant?: 'default' | 'elevated' | 'outlined'
}

const variants = {
  default: 'bg-card-bg border border-brand-border',
  elevated: 'bg-card-bg border border-brand-border shadow-card',
  outlined: 'bg-transparent border-2 border-brand-border',
}

export default function Card({
  children,
  className = '',
  hover = true,
  clickable = false,
  onClick,
  variant = 'default',
}: CardProps) {
  const baseClasses = `rounded-2xl transition-all duration-300 ${variants[variant]} ${className}`

  if (clickable) {
    return (
      <motion.div
        whileHover={hover ? { y: -4 } : {}}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            onClick()
          }
        }}
        role="button"
        tabIndex={0}
        className={`${baseClasses} cursor-pointer`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={baseClasses}
    >
      {children}
    </motion.div>
  )
}
