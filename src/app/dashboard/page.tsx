'use client'

import Link from 'next/link'

export default function DashboardPage() {
  const stats = {
    totalContacts: 47,
    sermonsThisMonth: 3,
    messagesDelivered: 141,
    openRate: '98%',
  }

  const recentSermons = [
    { id: 1, title: 'The Power of Grace', date: 'Mar 2, 2026', status: 'delivered', contacts: 47 },
    { id: 2, title: 'Walking in Faith', date: 'Feb 23, 2026', status: 'delivered', contacts: 45 },
    { id: 3, title: 'Love Your Neighbor', date: 'Feb 16, 2026', status: 'delivered', contacts: 44 },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif text-navy">Dashboard</h1>
        <Link href="/dashboard/upload" className="btn-primary">
          Upload New Sermon
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <p className="text-sm text-navy/70 mb-1">Total Contacts</p>
          <p className="text-3xl font-serif text-navy">{stats.totalContacts}</p>
        </div>
        <div className="card">
          <p className="text-sm text-navy/70 mb-1">Sermons This Month</p>
          <p className="text-3xl font-serif text-navy">{stats.sermonsThisMonth}</p>
        </div>
        <div className="card">
          <p className="text-sm text-navy/70 mb-1">Messages Delivered</p>
          <p className="text-3xl font-serif text-navy">{stats.messagesDelivered}</p>
        </div>
        <div className="card">
          <p className="text-sm text-navy/70 mb-1">Open Rate</p>
          <p className="text-3xl font-serif text-gold">{stats.openRate}</p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-serif text-navy mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/dashboard/upload" className="p-4 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors">
            <span className="text-2xl mb-2 block">📤</span>
            <p className="font-medium text-navy">Upload Sermon</p>
            <p className="text-sm text-navy/70">Drop your notes and we'll do the rest</p>
          </Link>
          <Link href="/dashboard/contacts" className="p-4 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors">
            <span className="text-2xl mb-2 block">👥</span>
            <p className="font-medium text-navy">Manage Contacts</p>
            <p className="text-sm text-navy/70">Add or import congregation members</p>
          </Link>
          <Link href="/dashboard/settings" className="p-4 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors">
            <span className="text-2xl mb-2 block">⚙️</span>
            <p className="font-medium text-navy">Settings</p>
            <p className="text-sm text-navy/70">Update preferences and billing</p>
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif text-navy">Recent Sermons</h2>
          <Link href="/dashboard/sermons" className="text-gold text-sm hover:underline">
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-navy/70 border-b border-gray-100">
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Delivered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentSermons.map((sermon) => (
                <tr key={sermon.id} className="hover:bg-gray-50">
                  <td className="py-4 font-medium text-navy">{sermon.title}</td>
                  <td className="py-4 text-navy/70">{sermon.date}</td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ {sermon.status}
                    </span>
                  </td>
                  <td className="py-4 text-navy/70">{sermon.contacts} messages</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
