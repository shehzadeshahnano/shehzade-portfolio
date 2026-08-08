export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shehzade-shahnano-b8a5b1222/',
    icon: 'Linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/shezyy_07',
    icon: 'Twitter',
    label: 'Follow on Twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/shehzade',
    icon: 'Github',
    label: 'View GitHub Profile',
  },
  {
    name: 'Email',
    url: 'mailto:shehzade@example.com',
    icon: 'Mail',
    label: 'Send Email',
  },
] as const

export const PORTFOLIO = {
  name: 'Shehzade Shahnano',
  title: 'Software Developer',
  shortBio: 'React Developer & Problem Solver',
  bio: 'Passionate Software Developer with 1+ years of experience specializing in building client-based dashboard applications. Currently working at Guava Trees Softech Pvt Ltd, developing high-performance farm management solutions with React, Redux, and Material-UI. Graduated from Sagar Institute of Science & Technology (SISTec), affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.',
  email: 'shehzade@example.com',
  phone: '+91-XXXXXXXXXX',
  location: 'Bhopal, Madhya Pradesh, India',
  resumeUrl: '/resume.pdf',
  profileImage: '/images/profile/profile.png',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/shehzade-shahnano-b8a5b1222/',
    twitter: 'https://x.com/shezyy_07',
    github: 'https://github.com/shehzade',
  },
  learningStatement: 'Currently exploring advanced React patterns, TypeScript, and cloud technologies while building scalable dashboard applications.',
} as const

export const CURRENT_COMPANY = {
  name: 'Guava Trees Softech Private Ltd',
  position: 'Junior Software Developer',
  joinDate: 'May 2025',
  workMode: 'On-site',
  website: 'https://guavatrees.com',
  address: {
    street: 'Bhopal',
    area: 'Madhya Pradesh',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    zipCode: '462001',
    country: 'India',
  },
  technologies: [
    'React',
    'Material-UI',
    'Redux',
    'Axios',
    'JavaScript',
    'CSS3',
    'HTML5',
  ],
} as const

export const HIGHLIGHTS = [
  {
    label: '1+',
    value: 'Years Experience',
    description: 'Professional development',
  },
  {
    label: '15+',
    value: 'Technologies',
    description: 'Tech stack expertise',
  },
  {
    label: '5+',
    value: 'Projects',
    description: 'Completed projects',
  },
  {
    label: '99%',
    value: 'Client Satisfaction',
    description: 'Happy clients',
  },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const