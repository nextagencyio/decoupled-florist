'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Sparkles } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Arrangements', href: '/arrangements' },
  { name: 'Occasions', href: '/occasions' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) return item.name
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="bg-white border-b-4 border-primary-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex-shrink-0 w-11 h-11 bg-primary-600 rounded-2xl flex items-center justify-center rotate-3 shadow-md shadow-primary-200"><Sparkles className="w-6 h-6 text-accent-300" /></div>
            <span className="text-xl font-bold font-display text-primary-800 hidden sm:block">Petal & Stem</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href} className={clsx('px-5 py-2 rounded-full text-sm font-bold transition-all duration-200', activeTab === item.name ? 'bg-primary-500 text-white shadow-md shadow-primary-200' : 'bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800')}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-primary-600 hover:text-primary-800 hover:bg-primary-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-primary-100 py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={clsx('px-5 py-3 rounded-full text-sm font-bold transition-all duration-200', activeTab === item.name ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-700 hover:bg-primary-100')}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
