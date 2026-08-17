'use client'

import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-brand-blue/20 animate-pulse" />
    </div>
  ),
})

export default function Scene3D() {
  return (
    <div 
      className="w-full h-full overflow-visible flex items-center justify-center"
      style={{
        transform: 'scale(0.75)',
      }}
    >
      <Hero3D />
    </div>
  )
}