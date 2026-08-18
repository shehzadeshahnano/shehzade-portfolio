'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { useTheme } from '@/hooks/useTheme'
import Logo from '@/components/shared/Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const scrollbarWidthRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      scrollbarWidthRef.current = scrollbarWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [mobileOpen])

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      mounted &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            scrolled
              ? 'bg-card-bg/95 backdrop-blur-xl border-b border-border shadow-lg'
              : 'bg-transparent border-b border-transparent'
          }`}
        style={{
          /*
            FIX 3: THE REAL FIX.

            The logs showed:
              windowInnerWidth: 457  ← fluctuates with mobile browser chrome
              documentClientWidth: 414  ← the real stable viewport width

            Mobile browsers report different values for window.innerWidth
            vs document.documentElement.clientWidth because:
            - window.innerWidth includes the area behind dynamic toolbars
              (address bar, bottom nav bar) that appear/disappear on scroll
            - documentClientWidth is always the stable layout viewport

            position: fixed elements use the LAYOUT viewport for positioning
            but some browsers (Chrome Android) size them using the VISUAL
            viewport (window.innerWidth) during toolbar transitions.

            The solution: explicitly set width and maxWidth to
            100dvw (dynamic viewport width) which is always the
            STABLE visible area, never the larger window.innerWidth.

            dvw = dynamic viewport width = same as documentClientWidth
            This prevents the header from ever being wider than the screen.
          */
          width: '100dvw',
          maxWidth: '100dvw',
          left: 0,
          right: 0,
        }}
      >
        {/* 
          Extra safety: overflow hidden on the inner container
          so even if something inside tries to grow, it gets clipped
        */}
        <div
          className="container-width"
          style={{ maxWidth: '100dvw', overflow: 'hidden' }}
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Logo size="md" />
            </motion.div>

            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Primary"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-small font-medium text-text-secondary hover:text-text-primary 
                      transition-colors duration-200 cursor-pointer relative group inline-block py-1
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue 
                      focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2"
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full 
                        bg-brand-blue rounded-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="flex items-center gap-3 lg:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-card-bg border border-border 
                  hover:border-brand-blue/40 text-text-secondary hover:text-text-primary
                  transition-all duration-200 cursor-pointer focus:outline-none 
                  focus-visible:ring-2 focus-visible:ring-brand-blue 
                  focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={
                  isDark ? 'Switch to light mode' : 'Switch to dark mode'
                }
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setMobileOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2.5 rounded-lg bg-card-bg border border-border 
                  hover:border-brand-blue/40 text-text-secondary hover:text-text-primary
                  transition-all duration-200 cursor-pointer focus:outline-none 
                  focus-visible:ring-2 focus-visible:ring-brand-blue 
                  focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        toggleTheme={toggleTheme}
      />
    </>
  )
}