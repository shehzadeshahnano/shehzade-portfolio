'use client'

import Image from 'next/image'

export default function Hero3D() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-visible">
      <div className="relative flex items-center justify-center overflow-visible">

        {/* Outermost soft glow bloom */}
        <div className="absolute rounded-full bg-gradient-to-br from-brand-blue/25 via-blue-500/10 to-cyan-400/20 blur-3xl"
             style={{ width: '500px', height: '500px' }} />

        {/* Second glow layer */}
        <div className="absolute rounded-full bg-gradient-to-tr from-cyan-400/15 via-brand-blue/20 to-blue-600/15 blur-2xl"
             style={{ width: '440px', height: '440px' }} />

        {/* Animated rotating gradient ring - outer */}
        <div
          className="absolute rounded-full animate-spin-slow"
          style={{
            width: '400px',
            height: '400px',
            background: 'conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, #06b6d4 120deg, transparent 180deg, #3b82f6 240deg, #06b6d4 300deg, transparent 360deg)',
            opacity: 0.6,
            filter: 'blur(1px)',
          }}
        />

        {/* Static border ring outer */}
        <div
          className="absolute rounded-full border-2 border-brand-blue/20"
          style={{ width: '398px', height: '398px' }}
        />

        {/* Pulse ring 1 - large */}
        <div
          className="absolute rounded-full border-2 border-brand-blue/25 animate-ping"
          style={{ width: '390px', height: '390px' }}
        />

        {/* Pulse ring 2 - delayed */}
        <div
          className="absolute rounded-full border border-cyan-400/15 animate-ping"
          style={{
            width: '420px',
            height: '420px',
            animationDelay: '0.6s',
            animationDuration: '2.2s',
          }}
        />

        {/* Pulse ring 3 - slowest, outermost */}
        <div
          className="absolute rounded-full border border-blue-400/10 animate-ping"
          style={{
            width: '450px',
            height: '450px',
            animationDelay: '1.1s',
            animationDuration: '3s',
          }}
        />

        {/* Inner rotating ring - reverse */}
        <div
          className="absolute rounded-full"
          style={{
            width: '376px',
            height: '376px',
            background: 'conic-gradient(from 180deg, transparent 0deg, #06b6d4 40deg, #3b82f6 90deg, transparent 160deg, #06b6d4 220deg, transparent 360deg)',
            opacity: 0.4,
            filter: 'blur(2px)',
            animation: 'spin 6s linear infinite reverse',
          }}
        />

        {/* Solid background circle behind image */}
        <div
          className="absolute rounded-full bg-card-bg z-[5]"
          style={{ width: '364px', height: '364px' }}
        />

        {/* Image wrapper */}
        <div
          className="relative z-10 rounded-full overflow-hidden shadow-2xl shadow-brand-blue/40"
          style={{
            width: '360px',
            height: '360px',
            border: '3px solid rgba(59, 130, 246, 0.7)',
            boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.2), 0 0 30px rgba(59, 130, 246, 0.35), 0 0 60px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.05)',
          }}
        >
          <Image
            src="/images/profile/profile.png"
            alt="Shehzade Shahnano - Software Developer"
            fill
            className="object-cover object-top"
            priority
            sizes="360px"
          />
        </div>

        {/* Accent dots */}
        <div
          className="absolute z-20 rounded-full bg-brand-blue animate-pulse shadow-lg shadow-brand-blue/50"
          style={{ width: '12px', height: '12px', top: '28px', right: '28px' }}
        />
        <div
          className="absolute z-20 rounded-full bg-cyan-400 animate-pulse"
          style={{ width: '7px', height: '7px', top: '55px', right: '14px', animationDelay: '0.4s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"
          style={{ width: '10px', height: '10px', bottom: '32px', left: '32px', animationDelay: '0.7s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-blue-400 animate-pulse"
          style={{ width: '6px', height: '6px', bottom: '58px', left: '16px', animationDelay: '1.3s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-blue-400 animate-pulse"
          style={{ width: '8px', height: '8px', top: '40px', left: '24px', animationDelay: '1.1s' }}
        />
        <div
          className="absolute z-20 rounded-full bg-brand-blue animate-pulse"
          style={{ width: '7px', height: '7px', bottom: '40px', right: '26px', animationDelay: '0.9s' }}
        />

      </div>
    </div>
  )
}