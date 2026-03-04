'use client'

import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Let Us Design Something Beautiful'
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Order Flowers'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Contact Us'

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-300 rounded-full opacity-20 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 rounded-full opacity-15 translate-x-40 translate-y-40" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-accent-400 text-primary-900 rounded-full font-bold text-lg hover:bg-accent-300 transition-colors duration-200">{primaryLabel}</Link>
          <Link href="/about" className="px-8 py-4 bg-white/20 text-white rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-colors duration-200">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  )
}
