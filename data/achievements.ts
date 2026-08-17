import type { Achievement } from '@/types'

export const achievementsData: Achievement[] = [
  {
    id: '1',
    title: 'Emerging Frontend Talent Award',
    slug: 'emerging-frontend-talent-2026',
    event: 'GT Connect 2026',
    organization: 'Guava Trees Softech Private Ltd',
    year: '2026',
    date: 'August 2026',
    category: 'Technical Excellence',
    featured: true,
    image: '/images/awards/emerging-talent-2026.jpeg',
    certificateUrl: '/certificates/emerging-talent-2026-certificate.png',
    description:
      'Recognized for continuous collaboration and excellent contributions across the entire project lifecycle — from component development to fully responsive web design, from simple tasks to complex API integrations. This award reflects consistent dedication, technical growth, and cross-team collaboration over the past year.',
    highlights: [
      'End-to-end responsive web design implementation',
      'Complex API and payment gateway integrations',
      'Component architecture to full-feature delivery',
      'Consistent cross-team collaboration and code quality',
      'Mobile-first development approach',
      'Redux state management for complex applications',
    ],
  },
  {
    id: '2',
    title: 'MR GT Connect',
    slug: 'mr-gt-connect-2025',
    event: 'GT Connect Annual Event 2025',
    organization: 'Guava Trees Softech Private Ltd',
    year: '2025',
    date: 'August 2025',
    category: 'Individual Recognition',
    featured: true,
    image: '/images/awards/mr-gt-connect-2025.png',
    description:
      'Honored with the MR GT Connect award at the GT Connect Annual Event 2025, recognizing the one employee selected from across the organization for outstanding overall presence, personality, appearance, and professional performance throughout the event.',
    highlights: [
      'Exclusive individual recognition across the organization',
      'Selected for outstanding overall presence and personality',
      'Recognized for professional appearance and presentation',
      'Acknowledged for exemplary performance during the event',
      'Represented company values and culture',
    ],
  },
]

// Helper functions
export const getFeaturedAchievements = () => {
  return achievementsData.filter((achievement) => achievement.featured)
}

export const getAchievementBySlug = (slug: string) => {
  return achievementsData.find((achievement) => achievement.slug === slug)
}

export const achievements = achievementsData