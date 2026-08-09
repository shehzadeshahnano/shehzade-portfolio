import type { Theme } from '@/types'

export const THEME_STORAGE_KEY = 'theme'

export const DEFAULT_THEME: Theme = 'dark'

export function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return theme
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return

  const resolved = resolveTheme(theme)
  const html = document.documentElement

  html.classList.toggle('dark', resolved === 'dark')
  html.classList.toggle('light', resolved === 'light')
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}
