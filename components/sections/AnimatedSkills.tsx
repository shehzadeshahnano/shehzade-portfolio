'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  level?: number
}

interface AnimatedSkillsProps {
  skills: Skill[]
  variant?: 'badges' | 'bars' | 'cloud'
}

export default function AnimatedSkills({ skills, variant = 'badges' }: AnimatedSkillsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  if (variant === 'badges') {
    return (
      <motion.div 
        className="flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: 'var(--brand-primary)',
              color: 'white',
              borderColor: 'var(--brand-primary)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-card-bg border border-border text-sm font-medium text-text-secondary cursor-default transition-colors duration-300"
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === 'cloud') {
    return (
      <motion.div 
        className="flex flex-wrap justify-center gap-4 py-8"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2 + (index * 0.2), 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.15, zIndex: 10 }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-card-bg to-card-hover border border-border text-text-primary font-semibold shadow-lg cursor-default hover:border-brand-blue/50 transition-all"
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Progress bars variant
  return (
    <motion.div 
      className="flex flex-col gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      {skills.map((skill) => (
        <motion.div 
          key={skill.name} 
          className="group"
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-text-primary">{skill.name}</span>
            <span className="text-sm text-text-muted">{skill.level}%</span>
          </div>
          <div className="h-2 bg-card-hover rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-blue rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}