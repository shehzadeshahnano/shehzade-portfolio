'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Moon, Sun, Mail } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/shared/SocialIcons'
import { NAV_LINKS, PORTFOLIO } from '@/lib/constants'
import { useTheme } from '@/hooks/useTheme'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  toggleTheme: () => void
}

export default function MobileMenu({
  isOpen,
  onClose,
  toggleTheme,
}: MobileMenuProps) {
  const { theme, mounted } = useTheme()

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      mounted &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const socialLinks = [
    { name: 'LinkedIn', url: PORTFOLIO.socialLinks.linkedin, icon: LinkedinIcon },
    { name: 'Twitter', url: PORTFOLIO.socialLinks.twitter, icon: TwitterIcon },
    { name: 'GitHub', url: PORTFOLIO.socialLinks.github, icon: GithubIcon },
    { name: 'Email', url: `mailto:${PORTFOLIO.email}`, icon: Mail },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            /*
              FIX 7: Use right-0 top-0 instead of relying on positioning context.
              Also cap width so it never overflows viewport on very small screens.
            */
            className="fixed top-0 right-0 z-50 h-full w-[min(320px,85vw)] bg-card-bg 
              border-l border-border flex flex-col lg:hidden overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
              <span className="text-xl font-black text-text-primary font-display">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary 
                  hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav
              className="flex flex-col p-6 gap-2 flex-1 overflow-y-auto"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center px-4 py-3 rounded-xl font-medium
                      text-text-secondary hover:text-text-primary hover:bg-black/5 
                      dark:hover:bg-white/10 transition-all duration-200 cursor-pointer 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="px-6 pb-4 flex-shrink-0">
              <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">
                Connect With Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="p-3 rounded-xl bg-card-bg border border-border text-text-secondary 
                      hover:text-brand-blue hover:border-brand-blue/40 transition-all cursor-pointer"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="p-6 border-t border-border flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                  bg-border text-text-secondary hover:text-text-primary
                  transition-all duration-200 cursor-pointer font-medium
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}