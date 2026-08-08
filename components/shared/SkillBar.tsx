'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years: string
  proficiency?: number
}

const levelPercentage = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
}

const levelColor = {
  Beginner: 'from-yellow-500 to-orange-500',
  Intermediate: 'from-blue-500 to-cyan-500',
  Advanced: 'from-purple-500 to-blue-500',
  Expert: 'from-green-500 to-emerald-500',
}

export default function SkillBar({
  name,
  level,
  years,
  proficiency,
}: SkillBarProps) {
  const percentage = proficiency || levelPercentage[level]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-small font-semibold text-text-primary cursor-default">
          {name}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-text-muted cursor-default">{level}</span>
          <span className="text-xs text-text-soft cursor-default">
            ({years} yrs)
          </span>
        </div>
      </div>

      <div
        className="w-full h-2 bg-brand-border rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r ${levelColor[level]} rounded-full`}
        />
      </div>
    </div>
  )
}
