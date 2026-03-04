'use client'

import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Bloom Brighter'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80&fit=crop)' }} />
      <div className="absolute top-20 left-[10%] w-20 h-20 bg-yellow-400 rounded-full opacity-60" />
      <div className="absolute bottom-32 right-[15%] w-16 h-16 bg-pink-400 rounded-full opacity-50" />
      <div className="absolute top-40 right-[25%] w-12 h-12 bg-green-400 rounded-2xl opacity-50 rotate-45" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto font-medium">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/arrangements" className="inline-flex items-center justify-center px-8 py-4 bg-accent-400 text-primary-900 rounded-full font-bold text-lg hover:bg-accent-300 transition-all duration-200">Shop Arrangements</Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-200">Custom Order</Link>
        </div>
      </div>
    </section>
  )
}
