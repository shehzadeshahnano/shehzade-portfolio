'use client'

import { motion } from 'framer-motion'
import { Award, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import AchievementCard from '@/components/shared/AchievementCard'
import { getFeaturedAchievements } from '@/data/achievements'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AchievementsPreview() {
  const achievements = getFeaturedAchievements()

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="section-padding bg-card-bg relative z-0"
    >
      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div variants={fadeUpVariant} className="flex items-center justify-between mb-12 relative z-10">
          <div className="flex items-center gap-3">
            <Award size={28} className="text-brand-blue" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Achievements &{' '}
              <span className="brand-text">Awards</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden sm:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            View All <ChevronRight size={18} />
          </Link>
        </motion.div>

        {/* Compact Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              variant="compact"
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold"
          >
            View All Achievements <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}