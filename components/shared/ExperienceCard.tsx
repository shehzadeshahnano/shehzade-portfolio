'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown } from 'lucide-react'
import Badge from './Badge'
import { fadeUpVariant } from '@/lib/utils'

interface ExperienceCardProps {
  position: string
  company: string
  duration: string
  period: string
  description: string
  technologies: string[]
  highlights: string[]
}

export default function ExperienceCard({
  position,
  company,
  duration,
  period,
  description,
  technologies,
  highlights,
}: ExperienceCardProps) {
  const [showAllTechs, setShowAllTechs] = useState(false)
  const displayTechs = showAllTechs ? technologies : technologies.slice(0, 5)
  const remainingCount = technologies.length - 5

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-col gap-4 p-5 rounded-2xl bg-card-bg border border-border 
        hover:border-brand-blue/40 transition-all duration-300 group cursor-default"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-blue transition-colors duration-300">
              {position}
            </h3>
            <p className="text-sm text-text-secondary mt-0.5">{company}</p>
          </div>
          <span className="text-xs font-semibold text-brand-blue whitespace-nowrap bg-brand-blue/10 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <p className="text-xs text-text-muted mt-1">{period}</p>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>

      <ul className="flex flex-col gap-2">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex gap-2.5 text-sm text-text-secondary"
          >
            <ChevronRight
              size={16}
              className="text-brand-blue shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="flex-1">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {displayTechs.map((tech) => (
          <Badge key={tech} variant="secondary" size="sm">
            {tech}
          </Badge>
        ))}
        
        {technologies.length > 5 && (
          <button
            onClick={() => setShowAllTechs(!showAllTechs)}
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full"
          >
            <Badge variant="primary" size="sm" className="flex items-center gap-1">
              {showAllTechs ? (
                <>
                  Show Less <ChevronDown size={12} />
                </>
              ) : (
                <>
                  +{remainingCount} more <ChevronDown size={12} className="rotate-0" />
                </>
              )}
            </Badge>
          </button>
        )}
      </div>

      <AnimatePresence>
        {showAllTechs && remainingCount > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border mt-2">
              {technologies.slice(5).map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}