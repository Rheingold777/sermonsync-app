'use client'

import Link from 'next/link'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SignupForm() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'growth'
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    churchName: '',
    pastorName: '',
    city: '',
    state: '',
    timezone: 'America/Chicago',
    languages: ['en'],
  })
  const [loading, setLoading] = useState(false)

  const updateField = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
      return
    }
    setLoading(true)
    console.log('Signup:', { ...formData, plan })
    setTimeout(() => { window.location.href = '/dashboard' }, 1500)
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <h2 className="text-xl font-serif text-navy mb-4">Create your account</h2>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input" placeholder="pastor@church.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Password</label>
              <input type="password" value={formData.password} onChange={(e) => updateField('password', e.target.value)} className="input" placeholder="At least 8 characters" minLength={8} required />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-serif text-navy mb-4">Tell us about your church</h2>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Church Name</label>
              <input type="text" value={formData.churchName} onChange={(e) => updateField('churchName', e.target.value)} className="input" placeholder="First Baptist Church" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Pastor Name</label>
              <input type="text" value={formData.pastorName} onChange={(e) => updateField('pastorName', e.target.value)} className="input" placeholder="Pastor John Smith" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">City</label>
                <input type="text" value={formData.city} onChange={(e) => updateField('city', e.target.value)} className="input" placeholder="Austin" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">State</label>
                <input type="text" value={formData.state} onChange={(e) => updateField('state', e.target.value)} className="input" placeholder="TX" required />
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-serif text-navy mb-4">Set your preferences</h2>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Time Zone</label>
              <select value={formData.timezone} onChange={(e) => updateField('timezone', e.target.value)} className="input">
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Languages</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={formData.languages.includes('en')} onChange={(e) => {
                    const langs = e.target.checked ? [...formData.languages, 'en'] : formData.languages.filter(l => l !== 'en')
                    updateField('languages', langs)
                  }} className="rounded border-gray-300" />
                  English
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={formData.languages.includes('es')} onChange={(e) => {
                    const langs = e.target.checked ? [...formData.languages, 'es'] : formData.languages.filter(l => l !== 'es')
                    updateField('languages', langs)
                  }} className="rounded border-gray-300" />
                  Spanish
                </label>
              </div>
            </div>
          </>
        )}

        <div className="flex gap-4">
          {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="btn-secondary flex-1">Back</button>}
          <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
            {loading ? 'Creating...' : step < 3 ? 'Continue' : 'Start Free Trial'}
          </button>
        </div>
      </form>

      <p className="text-center text-navy/70 mt-6">
        Already have an account? <Link href="/login" className="text-gold hover:underline">Sign in</Link>
      </p>
    </div>
  )
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-serif text-navy">SermonSync</Link>
          <p className="text-navy/70 mt-2">Start your 90-day free trial</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gold/30 text-navy">{s}</div>
              {s < 3 && <div className="w-12 h-0.5 bg-gray-200" />}
            </div>
          ))}
        </div>

        <Suspense fallback={<div className="card"><p>Loading...</p></div>}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  )
}
