'use client'

import { useState, useEffect } from 'react'
import { PORTFOLIO } from '@/lib/constants'

export default function ResumeButton() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile: Force download
  if (isMobile) {
    return (
      <a
        href={PORTFOLIO.resumeUrl}
        download="Shehzade_Shahnano_Resume.pdf"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300 w-full sm:w-auto"
      >
        Download Resume (PDF)
      </a>
    )
  }

  // Desktop: Open in new tab
  return (
    <a
      href={PORTFOLIO.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300"
    >
      View Resume (PDF)
    </a>
  )
}