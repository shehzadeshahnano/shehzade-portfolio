'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Home, Search, FileQuestion } from 'lucide-react'

// Map known route segments to friendly messages
const getNotFoundContent = (pathname: string) => {
  if (pathname.startsWith('/achievements')) {
    return {
      title: 'Achievement Not Found',
      description: 'The achievement you are looking for does not exist or may have been removed.',
      suggestion: 'Browse all achievements on the About page.',
      primaryHref: '/about',
      primaryLabel: 'Go to About',
      secondaryHref: '/',
      secondaryLabel: 'Back to Home',
    }
  }

  if (pathname.startsWith('/projects')) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist or may have been removed.',
      suggestion: 'Browse all projects to find what you need.',
      primaryHref: '/projects',
      primaryLabel: 'Browse Projects',
      secondaryHref: '/',
      secondaryLabel: 'Back to Home',
    }
  }

  if (pathname.startsWith('/contact')) {
    return {
      title: 'Page Not Found',
      description: 'The contact page could not be loaded.',
      suggestion: 'Try navigating back to the home page.',
      primaryHref: '/',
      primaryLabel: 'Back to Home',
      secondaryHref: '/about',
      secondaryLabel: 'About Me',
    }
  }

  // Generic unknown route
  return {
    title: 'Page Not Found',
    description: `The page you're looking for doesn't exist or has been moved.`,
    suggestion: 'Head back home or explore the portfolio.',
    primaryHref: '/',
    primaryLabel: 'Back to Home',
    secondaryHref: '/projects',
    secondaryLabel: 'View Projects',
  }
}

export default function NotFound() {
  const pathname = usePathname()
  const content = getNotFoundContent(pathname ?? '')
  const [count, setCount] = useState(8)

  // Auto redirect to home for completely unknown routes
  const isKnownRoute =
    pathname?.startsWith('/achievements') ||
    pathname?.startsWith('/projects') ||
    pathname?.startsWith('/about') ||
    pathname?.startsWith('/contact')

  useEffect(() => {
    // For unknown routes, auto-redirect to home after countdown
    if (!isKnownRoute) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            window.location.href = '/'
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isKnownRoute])

  return (
    <section className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="container-width">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

          {/* 404 Visual */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind number */}
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full scale-150" />

            <div className="relative flex flex-col items-center gap-2">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-card-bg border-2 border-border flex items-center justify-center mb-2 shadow-lg">
                <FileQuestion size={40} className="text-brand-blue" />
              </div>

              {/* 404 Text */}
              <h1 className="text-8xl lg:text-9xl font-black text-text-primary leading-none tracking-tighter">
                4
                <span className="brand-text">0</span>
                4
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
              {content.title}
            </h2>
            <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
              {content.description}
            </p>
            <p className="text-sm text-text-muted">
              {content.suggestion}
            </p>
          </div>

          {/* Auto redirect notice for unknown routes */}
          {!isKnownRoute && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue/10 border border-brand-blue/30">
              <Home size={16} className="text-brand-blue" />
              <p className="text-sm text-brand-blue font-medium">
                Redirecting to Home in{' '}
                <span className="font-black">{count}</span>{' '}
                seconds...
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href={content.primaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-glow"
            >
              <Home size={18} />
              {content.primaryLabel}
            </Link>

            <Link
              href={content.secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={18} />
              {content.secondaryLabel}
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 w-full max-w-md">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider flex items-center gap-2 justify-center">
              <Search size={14} />
              Quick Navigation
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg bg-card-bg border border-border text-sm text-text-secondary hover:text-brand-blue hover:border-brand-blue/40 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}