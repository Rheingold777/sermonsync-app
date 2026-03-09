'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/dashboard/upload', label: 'Upload Sermon', icon: '📤' },
  { href: '/dashboard/contacts', label: 'Contacts', icon: '👥' },
  { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard" className="text-2xl font-serif text-navy">
              SermonSync
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-navy/70">New Life Church</span>
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-medium">
                B
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'bg-navy text-cream'
                        : 'text-navy hover:bg-navy/5'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-gold/10 rounded-lg">
              <p className="text-sm font-medium text-navy">Free Trial</p>
              <p className="text-xs text-navy/70 mt-1">87 days remaining</p>
              <Link href="/dashboard/settings" className="text-xs text-gold hover:underline mt-2 block">
                Upgrade to paid plan →
              </Link>
            </div>
          </nav>

          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
