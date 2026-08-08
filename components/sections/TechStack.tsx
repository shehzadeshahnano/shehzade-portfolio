'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiRedux, 
  SiMaterialdesign, 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiGit, 
  SiHtml5,
  SiCss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiFigma,
  SiPostman,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

// Map tech names to their actual icons
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Node.js': SiNodedotjs,
  'Redux': SiRedux,
  'Material-UI': SiMaterialdesign,
  'Next.js': SiNextdotjs,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Git': SiGit,
  'GitHub': SiGithub,
  'HTML5': SiHtml5,
  'CSS3': SiCss,
  'MongoDB': SiMongodb,
  'Express.js': SiExpress,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'REST APIs': TbApi,
  'Figma': SiFigma,
  'Postman': SiPostman,
}

interface Tech {
  name: string
}

interface TechStackProps {
  technologies: Tech[]
  title?: string
  variant?: 'grid' | 'list'
}

export default function TechStack({ technologies, title = "Tech Stack", variant = 'grid' }: TechStackProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  if (variant === 'list') {
    return (
      <div className="w-full">
        {title && <h3 className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">{title}</h3>}
        <motion.div 
          className="flex flex-wrap gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {technologies.map((tech) => {
            const Icon = techIcons[tech.name] || SiJavascript
            return (
              <motion.div
                key={tech.name}
                variants={item}
                className="flex items-center gap-2 px-3 py-2 bg-card-bg border border-border rounded-lg text-sm text-text-secondary hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default group"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{tech.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    )
  }

  // Grid view with larger icons
  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">{title}</h3>}
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {technologies.map((tech) => {
          const Icon = techIcons[tech.name] || SiJavascript
          return (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center gap-2 p-3 bg-card-bg border border-border rounded-xl text-text-secondary hover:border-brand-blue hover:text-brand-blue transition-all cursor-default group"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-center leading-tight">{tech.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}