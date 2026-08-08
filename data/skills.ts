import type { SkillCategory } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Technologies',
    icon: 'Code',
    skills: [
      { name: 'React', level: 'Advanced', years: '1+', proficiency: 90 },
      { name: 'JavaScript', level: 'Advanced', years: '1+', proficiency: 90 },
      { name: 'TypeScript', level: 'Intermediate', years: '0.5', proficiency: 65 },
      { name: 'JSX', level: 'Advanced', years: '1+', proficiency: 90 },
      { name:'Redux Toolkit', level: 'Advanced', years: '1+', proficiency: 90 },
      { name:'Redux Thunk', level: 'Advanced', years: '1+', proficiency: 90 },
      { name:'React Router', level: 'Advanced', years: '1+', proficiency: 90 },
      {name:'React Native', level: 'Intermediate', years: '0.5', proficiency: 65 },
      {name:'React Native Navigation', level: 'Intermediate', years: '0.5', proficiency: 65 },
    ],
  },
  {
    category: 'State Management',
    icon: 'GitBranch',
    skills: [
      { name: 'Redux', level: 'Advanced', years: '1+', proficiency: 85 },
      { name: 'React Hooks', level: 'Advanced', years: '1+', proficiency: 90 },
    ],
  },
  {
    category: 'Styling & UI Frameworks',
    icon: 'Palette',
    skills: [
      { name: 'Material-UI', level: 'Advanced', years: '1+', proficiency: 90 },
      {
        name: 'Tailwind CSS',
        level: 'Intermediate',
        years: '1+',
        proficiency: 90,
      },
      { name: 'Bootstrap', level: 'Advanced', years: '1+', proficiency: 90 },
      { name: 'CSS/CSS3', level: 'Advanced', years: '1+', proficiency: 90 },
      {
        name: 'Responsive Design',
        level: 'Expert',
        years: '1+',
        proficiency: 95,
      },
    ],
  },
  {
    category: 'HTTP & API Integration',
    icon: 'Network',
    skills: [
      { name: 'Axios', level: 'Advanced', years: '1+', proficiency: 85 },
      { name: 'REST APIs', level: 'Advanced', years: '1+', proficiency: 85 },
    ],
  },
  {
    category: 'UI/UX & Design',
    icon: 'Eye',
    skills: [
      { name: 'UI Design', level: 'Advanced', years: '1+', proficiency: 85 },
      { name: 'UX Principles', level: 'Advanced', years: '1+', proficiency: 85 },
      { name: 'Responsive UX', level: 'Expert', years: '1+', proficiency: 95 },
      {
        name: 'Mobile-First Design',
        level: 'Expert',
        years: '1+',
        proficiency: 95,
      },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      {
        name: 'Git/GitHub',
        level: 'Intermediate',
        years: '1+',
        proficiency: 75,
      },
      { name: 'VS Code', level: 'Advanced', years: '1+', proficiency: 90 },
      { name: 'npm', level: 'Intermediate', years: '1+', proficiency: 80 },
    ],
  },
  {
    category: 'Currently Learning & Exploring',
    icon: 'Sparkles',
    skills: [
      { name: 'Next.js', level: 'Beginner', years: '0.2', proficiency: 30 },
      {
        name: 'Generative AI',
        level: 'Beginner',
        years: '0.1',
        proficiency: 20,
      },
    ],
  },
]

export const skillCategories = skillsData
