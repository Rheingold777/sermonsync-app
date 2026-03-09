'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    church: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to email/CRM
    console.log('Contact form:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-serif text-navy hover:opacity-80 transition-opacity">
          SermonSync
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-navy hover:text-gold transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-navy mb-4">Let&apos;s Talk</h1>
          <p className="text-navy/70 max-w-xl mx-auto">
            Have questions about SermonSync? Interested in the Done-For-You plan? 
            I&apos;d love to hear about your church and how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="text-xl font-serif text-navy mb-2">Message Sent!</h2>
                <p className="text-navy/70 mb-4">I&apos;ll get back to you within 24 hours.</p>
                <Link href="/" className="text-gold hover:underline">
                  ← Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="Pastor John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="pastor@church.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Church Name</label>
                  <input
                    type="text"
                    value={formData.church}
                    onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                    className="input"
                    placeholder="First Baptist Church"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input min-h-[120px] resize-y"
                    placeholder="Tell me about your church and what you're looking for..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-navy mb-2">📧 Email</h3>
              <a href="mailto:hello@sermonsync.church" className="text-gold hover:underline">
                hello@sermonsync.church
              </a>
              <p className="text-sm text-navy/70 mt-1">I respond within 24 hours</p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-navy mb-2">📞 Phone</h3>
              <a href="tel:+15123619861" className="text-gold hover:underline">
                (512) 361-9861
              </a>
              <p className="text-sm text-navy/70 mt-1">Text or call anytime</p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-navy mb-2">🎁 Sponsorship Program</h3>
              <p className="text-navy/70">
                Church planter or small congregation? Ask about our sponsorship program — 
                other churches can cover your subscription so you can focus on ministry.
              </p>
            </div>
            
            <div className="card bg-navy text-cream">
              <h3 className="text-lg font-semibold mb-2">About the Founder</h3>
              <p className="text-cream/80 text-sm">
                I&apos;m Bernhard Suppan, pastor of New Life Church in Hutto, TX. 
                I built SermonSync because I saw too many powerful messages fade by Monday. 
                I&apos;d love to show you how it can help your congregation stay connected to God&apos;s word all week.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
