'use client'

import { motion } from 'framer-motion'
import { PORTFOLIO } from '@/lib/constants'
import { fadeUpVariant } from '@/lib/utils'

interface LearningCalloutProps {
  className?: string
  label?: string
}

export default function LearningCallout({
  className = '',
  label = 'Passionate about continuous learning:',
}: LearningCalloutProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`p-4 sm:p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 ${className}`}
    >
      <p className="text-small text-text-secondary leading-relaxed">
        <span className="font-semibold text-text-primary">{label}</span>{' '}
        {PORTFOLIO.learningStatement}
      </p>
    </motion.div>
  )
}
