'use client'

import { useState } from 'react'
import { Eye } from 'lucide-react'
import CertificateModal from '@/components/modals/CertificateModal'

interface CertificateButtonProps {
  certificateUrl: string
  title: string
  category: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact'
}

export default function CertificateButton({
  certificateUrl,
  title,
  category,
  className = '',
  size = 'md',
  variant = 'default',
}: CertificateButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm gap-1.5'
      case 'lg':
        return 'px-6 py-3 text-base gap-2'
      default:
        return 'px-5 py-2.5 text-sm gap-2'
    }
  }

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 14
      case 'lg':
        return 18
      default:
        return 16
    }
  }

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    hover:scale-105 transition-all duration-200 shadow-md
    focus:outline-none focus:ring-2 focus:ring-brand-blue/50
  `

  const variantClasses = variant === 'compact' 
    ? `${baseClasses} bg-brand-blue/10 border border-brand-blue/30 text-brand-blue hover:bg-brand-blue/20`
    : `${baseClasses} bg-brand-blue text-white hover:opacity-90`

  if (!certificateUrl) return null

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${variantClasses} ${getSizeClasses()} ${className}`}
        type="button"
      >
        <Eye size={getIconSize()} />
        View Certificate
      </button>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificateUrl={certificateUrl}
        title={title}
        category={category}
      />
    </>
  )
}