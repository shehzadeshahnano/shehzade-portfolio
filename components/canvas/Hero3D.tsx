'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero3D() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Set initial scale based on window width
    const updateScale = () => {
      const width = window.innerWidth;
      
      if (width < 350) {
        setScale(0.6); // Extra small phones
      } else if (width < 768) {
        setScale(0.8); // Regular mobile
      } else {
        setScale(1); // Desktop/Tablet
      }
    };

    // Call on mount
    updateScale();

    // Update on window resize
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const sizes = {
    bloom: { size: 500 * scale },
    glow: { size: 440 * scale },
    ring1: { size: 400 * scale },
    border: { size: 398 * scale },
    pulse1: { size: 390 * scale },
    pulse2: { size: 420 * scale },
    pulse3: { size: 450 * scale },
    inner: { size: 376 * scale },
    bg: { size: 364 * scale },
    image: { size: 360 * scale },
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-visible">
      <div className="relative flex items-center justify-center overflow-visible">

        {/* Outermost soft glow bloom */}
        <div className="absolute rounded-full bg-gradient-to-br from-brand-blue/25 via-blue-500/10 to-cyan-400/20 blur-3xl"
          style={{ width: `${sizes.bloom.size}px`, height: `${sizes.bloom.size}px` }} />

        {/* Second glow layer */}
        <div className="absolute rounded-full bg-gradient-to-tr from-cyan-400/15 via-brand-blue/20 to-blue-600/15 blur-2xl"
          style={{ width: `${sizes.glow.size}px`, height: `${sizes.glow.size}px` }} />

        {/* Animated rotating gradient ring - outer */}
        <div
          className="absolute rounded-full animate-spin-slow"
          style={{
            width: `${sizes.ring1.size}px`,
            height: `${sizes.ring1.size}px`,
            background: 'conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, #06b6d4 120deg, transparent 180deg, #3b82f6 240deg, #06b6d4 300deg, transparent 360deg)',
            opacity: 0.6,
            filter: 'blur(1px)',
          }}
        />

        {/* Static border ring outer */}
        <div
          className="absolute rounded-full border-2 border-brand-blue/20"
          style={{ width: `${sizes.border.size}px`, height: `${sizes.border.size}px` }}
        />

        {/* Pulse ring 1 - large */}
        <div
          className="absolute rounded-full border-2 border-brand-blue/25 animate-ping"
          style={{ width: `${sizes.pulse1.size}px`, height: `${sizes.pulse1.size}px` }}
        />

        {/* Pulse ring 2 - delayed */}
        <div
          className="absolute rounded-full border border-cyan-400/15 animate-ping"
          style={{
            width: `${sizes.pulse2.size}px`,
            height: `${sizes.pulse2.size}px`,
            animationDelay: '0.6s',
            animationDuration: '2.2s',
          }}
        />

        {/* Pulse ring 3 - slowest, outermost */}
        <div
          className="absolute rounded-full border border-blue-400/10 animate-ping"
          style={{
            width: `${sizes.pulse3.size}px`,
            height: `${sizes.pulse3.size}px`,
            animationDelay: '1.1s',
            animationDuration: '3s',
          }}
        />

        {/* Inner rotating ring - reverse */}
        <div
          className="absolute rounded-full"
          style={{
            width: `${sizes.inner.size}px`,
            height: `${sizes.inner.size}px`,
            background: 'conic-gradient(from 180deg, transparent 0deg, #06b6d4 40deg, #3b82f6 90deg, transparent 160deg, #06b6d4 220deg, transparent 360deg)',
            opacity: 0.4,
            filter: 'blur(2px)',
            animation: 'spin 6s linear infinite reverse',
          }}
        />

        {/* Solid background circle behind image */}
        <div
          className="absolute rounded-full bg-card-bg z-[5]"
          style={{ width: `${sizes.bg.size}px`, height: `${sizes.bg.size}px` }}
        />

        {/* Image wrapper */}
        <div
          className="relative z-10 rounded-full overflow-hidden shadow-2xl shadow-brand-blue/40"
          style={{
            width: `${sizes.image.size}px`,
            height: `${sizes.image.size}px`,
            boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.2), 0 0 30px rgba(59, 130, 246, 0.35), 0 0 60px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.05)',
          }}
        >
          <Image
            src="/images/profile/profile.png"
            alt="Shehzade Shahnano - Software Developer"
            fill
            className="object-cover object-top"
            priority
            sizes={`${sizes.image.size}px`}
          />
        </div>

        {/* Accent dots - scale on mobile */}
        <div
          className="absolute z-20 rounded-full bg-brand-blue animate-pulse shadow-lg shadow-brand-blue/50"
          style={{ width: `${12 * scale}px`, height: `${12 * scale}px`, top: `${28 * scale}px`, right: `${28 * scale}px` }}
        />
        <div
          className="absolute z-20 rounded-full bg-cyan-400 animate-pulse"
          style={{ width: `${7 * scale}px`, height: `${7 * scale}px`, top: `${55 * scale}px`, right: `${14 * scale}px`, animationDelay: '0.4s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"
          style={{ width: `${10 * scale}px`, height: `${10 * scale}px`, bottom: `${32 * scale}px`, left: `${32 * scale}px`, animationDelay: '0.7s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-blue-400 animate-pulse"
          style={{ width: `${6 * scale}px`, height: `${6 * scale}px`, bottom: `${58 * scale}px`, left: `${16 * scale}px`, animationDelay: '1.3s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-blue-400 animate-pulse"
          style={{ width: `${8 * scale}px`, height: `${8 * scale}px`, top: `${40 * scale}px`, left: `${24 * scale}px`, animationDelay: '1.1s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-brand-blue animate-pulse"
          style={{ width: `${7 * scale}px`, height: `${7 * scale}px`, bottom: `${40 * scale}px`, right: `${26 * scale}px`, animationDelay: '0.9s' }}
        />

      </div>
    </div>
  )
}