'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const bubbleColors = ['bg-primary-100 text-primary-800 border-primary-200', 'bg-accent-100 text-accent-800 border-accent-200', 'bg-pink-100 text-pink-800 border-pink-200', 'bg-green-100 text-green-800 border-green-200']

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-50 rounded-full opacity-60" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-50 rounded-full opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="flex flex-col items-center">
              <div className={`w-28 h-28 rounded-full border-4 flex items-center justify-center mb-4 ${bubbleColors[i % bubbleColors.length]}`}>
                <span className="text-3xl md:text-4xl font-bold font-display">{stat.value || stat.statValue}</span>
              </div>
              <div className="text-gray-700 font-semibold text-sm">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
