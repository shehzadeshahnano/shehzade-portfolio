'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Trophy, Star } from 'lucide-react'

interface AwardImage3DProps {
  src: string
  alt: string
  category: string
}

export default function AwardImage3D({ src, alt, category }: AwardImage3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mouseX, mouseY])

  const getCategoryStyle = (cat: string) => {
    switch (cat) {
      case 'Technical Excellence':
        return {
          gradient: 'from-yellow-500/20 via-amber-500/10 to-orange-500/5',
          border: 'border-yellow-500/30',
          iconColor: 'text-yellow-500',
          ringColor: 'border-yellow-500/20',
          glowColor: 'bg-yellow-500/10',
          icon: Trophy,
        }
      case 'Team Recognition':
        return {
          gradient: 'from-purple-500/20 via-pink-500/10 to-purple-500/5',
          border: 'border-purple-500/30',
          iconColor: 'text-purple-500',
          ringColor: 'border-purple-500/20',
          glowColor: 'bg-purple-500/10',
          icon: Star,
        }
      case 'Individual Recognition':
        return {
          gradient: 'from-blue-500/20 via-cyan-500/10 to-indigo-500/5',
          border: 'border-brand-blue/30',
          iconColor: 'text-brand-blue',
          ringColor: 'border-brand-blue/20',
          glowColor: 'bg-brand-blue/10',
          icon: Award,
        }
      default:
        return {
          gradient: 'from-brand-blue/20 via-blue-500/10 to-cyan-500/5',
          border: 'border-brand-blue/30',
          iconColor: 'text-brand-blue',
          ringColor: 'border-brand-blue/20',
          glowColor: 'bg-brand-blue/10',
          icon: Award,
        }
    }
  }

  const style = getCategoryStyle(category)
  const Icon = style.icon

  // Check if image should show placeholder
  const shouldShowPlaceholder = !src || imageError || src.includes('placeholder')

  return (
    <div ref={ref} className="relative w-full h-full perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {/* Glow background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${style.gradient} blur-2xl opacity-40 rounded-2xl`}
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* Main Container */}
        <div
          className={`relative w-full h-full rounded-2xl overflow-hidden border-2 ${style.border} shadow-2xl`}
          style={{ transform: 'translateZ(20px)' }}
        >
          
          {/* Real Image (if available) */}
          {!shouldShowPlaceholder && (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              onError={() => setImageError(true)}
            />
          )}

          {/* Placeholder Content */}
          {shouldShowPlaceholder && (
            <div
              className={`
                w-full h-full bg-gradient-to-br ${style.gradient}
                flex flex-col items-center justify-center gap-4
                relative
              `}
            >
              {/* Background decorative circles */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${style.glowColor} rounded-full blur-2xl -translate-y-8 translate-x-8`} />
              <div className={`absolute bottom-0 left-0 w-24 h-24 ${style.glowColor} rounded-full blur-2xl translate-y-8 -translate-x-8`} />

              {/* Icon with rings */}
              <div className="relative flex items-center justify-center">
                {/* Outer ring */}
                <div className={`w-20 h-20 rounded-full border-2 ${style.ringColor} flex items-center justify-center`}>
                  {/* Inner ring */}
                  <div className={`w-16 h-16 rounded-full border-2 ${style.border} flex items-center justify-center ${style.glowColor}`}>
                    <Icon size={24} className={`${style.iconColor} opacity-80`} />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center px-3 z-10">
                <p className={`text-sm font-bold ${style.iconColor} mb-1`}>Award Certificate</p>
                <p className="text-xs text-text-muted">{category}</p>
              </div>
            </div>
          )}

          {/* Overlay gradient (always present) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating shine effect */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          style={{ transform: 'translateZ(30px)' }}
        />
      </motion.div>
    </div>
  )
}