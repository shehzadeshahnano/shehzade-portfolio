'use client'

import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  }

  return (
    <Link href="/" className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Profile Image Logo */}
      <div className={`${sizes[size]} relative rounded-full overflow-hidden border-2 border-brand-blue/30 group-hover:border-brand-blue transition-colors`}>
        <Image
          src="/images/profile/profile.png"
          alt="Shehzade"
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold text-text-primary leading-tight group-hover:text-brand-blue transition-colors`}>
            Shehzade
          </span>
          <span className="text-xs text-text-muted font-medium tracking-wide">
            Software Developer
          </span>
        </div>
      )}
    </Link>
  )
}