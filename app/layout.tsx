import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ThemeScript from '@/components/shared/ThemeScript'
import { PORTFOLIO } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shehzade.vercel.app'),
  title: 'Shehzade Shahnano | React Frontend Developer | Portfolio',
  description:
    'Professional portfolio of Shehzade Shahnano - React Frontend Developer specializing in scalable, responsive web applications.',
  keywords: [
    'Shehzade Shahnano',
    'React Developer',
    'Frontend Developer',
    'Web Development',
    'UI/UX Design',
    'Dashboard Development',
    'Material UI',
    'Redux',
    'Responsive Design',
    'Portfolio',
    'Bhopal Developer',
  ],
  authors: [{ name: 'Shehzade Shahnano' }],
  creator: 'Shehzade Shahnano',
  publisher: 'Shehzade Shahnano',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shehzade.vercel.app',
    siteName: 'Shehzade Shahnano - Portfolio',
    title: 'Shehzade Shahnano | React Frontend Developer',
    description:
      'Professional React Frontend Developer - Building scalable responsive web applications',
    images: [
      {
        url: PORTFOLIO.profileImage,
        width: 1200,
        height: 630,
        alt: 'Shehzade Shahnano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shehzade Shahnano | React Frontend Developer',
    description: 'Specializing in React, UI/UX Design, and Responsive Web Development',
    images: [PORTFOLIO.profileImage],
    creator: '@shehzadedev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://shehzade.vercel.app',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  /*
    FIX 1: Change maximumScale from 5 to 1.
    
    maximumScale: 5 allows the browser to zoom up to 5x.
    When CertificateModal's touch handlers partially intercept
    pinch gestures and then release them, the browser resumes
    its own zoom handling mid-gesture — landing on a random
    zoom level between 1x and 5x.
    
    Setting maximumScale: 1 prevents the browser from zooming
    at all via pinch, so there's no inconsistent zoom state
    left behind after the modal closes.
    
    Note: This does NOT break accessibility — the modal itself
    provides its own zoom controls (ZoomIn/ZoomOut buttons).
  */
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} bg-background text-text-primary antialiased`}>
        <Header />
        <main className="relative z-0 min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}