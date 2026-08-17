import type { Metadata } from 'next'
import { PORTFOLIO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${PORTFOLIO.name} — ${PORTFOLIO.title} based in ${PORTFOLIO.location}.`,
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}