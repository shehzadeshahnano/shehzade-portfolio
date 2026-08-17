'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Star } from 'lucide-react'
import AchievementCard from '@/components/shared/AchievementCard'
import { getFeaturedAchievements } from '@/data/achievements'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Achievements() {
  const achievements = getFeaturedAchievements()

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="section-padding bg-card-bg"
    >
      <div className="container-width">
        {/* Section Header */}
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <Award size={32} className="text-brand-blue" />
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Achievements &{' '}
              <span className="brand-text">Recognition</span>
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl">
            Awards and recognitions received for professional contributions, collaboration, and
            excellence in software development at Guava Trees Softech Private Ltd.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="flex flex-col gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          variants={fadeUpVariant}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
        >
          <div className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
              <Trophy size={22} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-black brand-text">{achievements.length}</p>
              <p className="text-sm text-text-muted">Total Awards</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
              <Star size={22} className="text-brand-blue" />
            </div>
            <div>
              <p className="text-2xl font-black brand-text">GT Connect</p>
              <p className="text-sm text-text-muted">Annual Event</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <Award size={22} className="text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-black brand-text">2025–2026</p>
              <p className="text-sm text-text-muted">Recognition Streak</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}