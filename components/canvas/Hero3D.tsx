'use client'

import Image from 'next/image'

export default function Hero3D() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative h-full max-w-full aspect-[3/4] lg:aspect-square">
        <Image
          src="/images/profile/profile.png"
          alt="Shehzade Shahnano - Software Developer"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    </div>
  )
}