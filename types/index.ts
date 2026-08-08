export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  category: string
  technologies: string[]
  features: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  highlighted: boolean
  duration: string
  status: 'Active' | 'Completed' | 'In Progress'
}

export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years: string
  proficiency?: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
  icon?: string
}

export interface Experience {
  id: string
  position: string
  company: string
  duration: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
  highlights: string[]
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  university?: string
  duration: string
  cgpa?: string
  score?: string
  highlights?: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
  id: string
}

export interface Highlight {
  label: string
  value: string
  icon: string
  description?: string
}

export type Theme = 'light' | 'dark' | 'system'
