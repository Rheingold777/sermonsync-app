'use client'

import { useState } from 'react'

interface Contact {
  id: number
  name: string
  phone: string
  language: 'en' | 'es' | 'both'
  status: 'active' | 'pending'
}

export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false)
  const [contacts] = useState<Contact[]>([
    { id: 1, name: 'Maria Garcia', phone: '+1 512-555-0101', language: 'both', status: 'active' },
    { id: 2, name: 'John Smith', phone: '+1 512-555-0102', language: 'en', status: 'active' },
    { id: 3, name: 'Carlos Rodriguez', phone: '+1 512-555-0103', language: 'es', status: 'active' },
    { id: 4, name: 'Sarah Johnson', phone: '+1 512-555-0104', language: 'en', status: 'active' },
    { id: 5, name: 'Ana Martinez', phone: '+1 512-555-0105', language: 'both', status: 'pending' },
  ])

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif text-navy">Contacts</h1>
          <p className="text-navy/70 mt-1">{contacts.length} members</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary">📥 Import CSV</button>
          <button onClick={() => setShowModal(true)} className="btn-primary">+ Add Contact</button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="card"><p className="text-sm text-navy/70">Total</p><p className="text-2xl font-serif text-navy">{contacts.length}</p></div>
        <div className="card"><p className="text-sm text-navy/70">English</p><p className="text-2xl font-serif text-navy">{contacts.filter(c => c.language === 'en').length}</p></div>
        <div className="card"><p className="text-sm text-navy/70">Spanish</p><p className="text-2xl font-serif text-navy">{contacts.filter(c => c.language === 'es').length}</p></div>
        <div className="card"><p className="text-sm text-navy/70">Bilingual</p><p className="text-2xl font-serif text-navy">{contacts.filter(c => c.language === 'both').length}</p></div>
      </div>

      <div className="card">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-navy/70 border-b border-gray-100">
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Phone</th>
              <th className="pb-3 font-medium">Language</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="py-4 font-medium text-navy">{contact.name}</td>
                <td className="py-4 text-navy/70">{contact.phone}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    contact.language === 'both' ? 'bg-purple-100 text-purple-800'
                    : contact.language === 'es' ? 'bg-orange-100 text-orange-800'
                    : 'bg-blue-100 text-blue-800'
                  }`}>
                    {contact.language === 'both' ? '🇺🇸 🇪🇸' : contact.language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}
                  </span>
                </td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    contact.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {contact.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-serif text-navy mb-4">Add Contact</h2>
            <form className="space-y-4">
              <div><label className="block text-sm font-medium text-navy mb-2">Name</label><input type="text" className="input" placeholder="John Smith" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">Phone</label><input type="tel" className="input" placeholder="+1 512-555-0100" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">Language</label>
                <select className="input">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">Cancel</button>
                <button type="submit" className="btn-primary flex-1">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
