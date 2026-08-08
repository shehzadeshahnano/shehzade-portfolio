import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Farm Management Dashboard Application',
    slug: 'farm-management-dashboard',
    description:
      'High-performance responsive web dashboard for farm and livestock management and payment gateway integration with real-time data visualization',
    longDescription: `Currently developing a comprehensive farm and livestock management dashboard application and payment gateway integration at Guava Trees Softech Private Ltd.

The platform features real-time data visualization, responsive design across all devices, and complex state management with Redux. The application serves farmers and livestock managers with an intuitive interface for managing daily operations and animal health records.

Key technologies include React for building interactive components, Material-UI for consistent and modern design, Redux for predictable state management, and Axios for seamless API integration. The application is designed with mobile-first responsive approach to work seamlessly across desktop browsers, tablets, and mobile devices. The application also features payment gateway integration for online payments and recurring payments integration for online payments and billing and subscription management for online payments and auto invoicing for the charges and services of the customers.`,
    category: 'Web Application',
    technologies: [
      'React',
      'Material-UI',
      'Redux',
      'Axios',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Responsive Design',
      'Mobile-First Development',
      'REST APIs',
      'Payment Gateway Integration',
      'Recurring Payments',
      'Billing Management',
      'Auto Invoicing',
      'Redux Toolkit',
      'React Router',
      'Git',
      'GitHub',
    ],
    features: [
      'Farm and livestock management dashboard',
      'Fully responsive web interface',
      'Real-time data visualization',
      'Animal health tracking interface',
      'Posts and ads management for the farm and livestock',
      'Managing animals records and health history',
      'Adding events and notifications for the farm and livestock',
      'Task scheduling and reminders',
      'Generating reports and analytics for the farm and livestock',
      'Managing mutlipe contacts and different roles for the farm and livestock',
      'Feed management for the farm and livestock',
      'Charges and recurring payments management for the farm and livestock',
      'Manual and auto invoicing for the charges and services of the customers',
      'Time zone management for the farm and livestock',
      'Weather API integration for the farm and livestock',
      'Mobile-responsive across all devices',
      'Advanced state management with Redux',
      'Clean and intuitive UI design',
      'Seamless desktop-to-mobile experience',
      'Payment gateway integration for online payments',
      'Recurring payments integration for online payments',
      'Billing and subscription management for online payments',
    ],
    image: '/images/projects/dashboard.jpg',
    liveUrl: '#',
    githubUrl: '#',
    highlighted: true,
    duration: 'Ongoing (Since May 2025)',
    status: 'Active',
  },
]

export const projects = projectsData

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug)
}

export const getHighlightedProjects = (): Project[] => {
  return projectsData.filter((project) => project.highlighted)
}