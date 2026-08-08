'use client'

import { useState, useEffect } from 'react'
import type { Theme } from '@/types'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as Theme | null
    const initial = saved || 'system'
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement

    if (newTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      html.classList.toggle('dark', isDark)
      html.classList.toggle('light', !isDark)
    } else {
      html.classList.toggle('dark', newTheme === 'dark')
      html.classList.toggle('light', newTheme === 'light')
    }

    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : 'dark'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  return { theme, toggleTheme, mounted }
}
