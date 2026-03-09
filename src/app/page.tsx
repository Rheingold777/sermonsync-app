import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif text-navy">SermonSync</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-navy hover:text-gold transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-serif text-navy leading-tight mb-6">
              Your sermon, in every pocket by Monday
            </h1>
            <p className="text-xl text-navy/70 mb-8">
              Drop your notes. We&apos;ll send a personalized recap to your congregation — 
              in English and Spanish — while you focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn-primary text-center">
                Start Free Trial
              </Link>
              <Link href="#demo" className="btn-secondary text-center">
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-navy/50 mt-4">
              90-day free trial • No credit card required
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-navy rounded-[3rem] p-3 shadow-2xl max-w-[320px] mx-auto">
              <div className="bg-white rounded-[2.5rem] p-6 min-h-[500px]">
                <div className="text-xs text-gray-400 text-center mb-4">Monday, 9:30 AM</div>
                <div className="bg-navy/5 rounded-2xl p-4 mb-3">
                  <p className="text-sm text-navy font-medium mb-1">New Life Church</p>
                  <p className="text-sm text-navy/80">
                    &quot;Yesterday&apos;s message reminded us that God&apos;s grace isn&apos;t just for our past mistakes — 
                    it&apos;s for our present struggles and future fears too. 🙏&quot;
                  </p>
                </div>
                <div className="bg-gold/10 rounded-2xl p-4">
                  <p className="text-sm text-navy font-medium mb-1">🇪🇸 En Español</p>
                  <p className="text-sm text-navy/80">
                    &quot;El mensaje de ayer nos recordó que la gracia de Dios no es solo para nuestros 
                    errores pasados...&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
          <div className="card">
            <div className="text-4xl font-serif text-gold mb-2">98%</div>
            <p className="text-navy/70">Text message open rate</p>
          </div>
          <div className="card">
            <div className="text-4xl font-serif text-gold mb-2">85%</div>
            <p className="text-navy/70">of churches send zero follow-up</p>
          </div>
          <div className="card">
            <div className="text-4xl font-serif text-gold mb-2">0 min</div>
            <p className="text-navy/70">Weekly effort after setup</p>
          </div>
        </div>

        <div id="pricing" className="mt-24">
          <h2 className="text-4xl font-serif text-navy text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-navy/70 text-center mb-12 max-w-2xl mx-auto">
            Start with a 90-day free trial. No credit card required.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-navy mb-2">Starter</h3>
              <div className="text-4xl font-serif text-navy mb-4">$49<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Up to 100 contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English recaps</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> 4 sermons/month</li>
              </ul>
              <Link href="/signup?plan=starter" className="btn-secondary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            <div className="card border-2 border-gold relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Growth</h3>
              <div className="text-4xl font-serif text-navy mb-4">$99<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Up to 500 contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English + Spanish</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> 8 sermons/month</li>
              </ul>
              <Link href="/signup?plan=growth" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-navy mb-2">Done-For-You</h3>
              <div className="text-4xl font-serif text-navy mb-4">$199<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Unlimited contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English + Spanish</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Social media posts</li>
              </ul>
              <Link href="/signup?plan=enterprise" className="btn-secondary w-full text-center block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-navy text-cream py-12 mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-serif">SermonSync</div>
            <p className="text-cream/70">Built by a pastor, for pastors.</p>
            <p className="text-cream/50 text-sm">© 2026 SermonSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
