'use client'

import { useEffect } from 'react'

export default function ThemeProvider() {
  useEffect(() => {
    // Theme initialization happens here instead of inline script
    const saved = localStorage.getItem('theme')
    const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    
    if (theme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  return null
}