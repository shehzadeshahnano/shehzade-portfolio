import type { Education } from '@/types'

export const educationData: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Mechanical Engineering',
    institution: 'Sagar Institute of Science and Technology',
    location: 'Bhopal, Madhya Pradesh, India',
    university: 'RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
    duration: '2019 - 2023',
    cgpa: '7.6',
    highlights: [
      'Strong foundation in engineering principles and problem-solving',
      'Excellent communication and presentation skills',
      'Project-based learning with hands-on experience',
      'Self-taught web development during final year',
      'Transitioned from Mechanical Engineering to Frontend Development',
      'CGPA: 7.6 - Consistent academic performance',
    ],
  },
  {
    id: '2',
    degree: 'Higher Secondary (12th Grade)',
    field: 'PCM Stream (Physics, Chemistry, Mathematics)',
    institution: 'Madhya Pradesh Board of Secondary Education',
    location: 'Bhopal, Madhya Pradesh',
    duration: '2016 - 2018',
    score: '73% | First Division',
    highlights: [
      'Passed in 2018 with First Division',
      'Scored 73%',
      'Science stream with Physics, Chemistry, and Mathematics (PCM)',
    ],
  },
  {
    id: '3',
    degree: 'Secondary (10th Grade)',
    field: 'General',
    institution: 'Madhya Pradesh Board of Secondary Education',
    location: 'Bhopal, Madhya Pradesh',
    duration: '2014 - 2016',
    score: '73% | First Division',
    highlights: [
      'Passed in 2016 with First Division',
      'Scored 73%',
      'Strong academic foundation',
    ],
  },
]

export const education = educationData
