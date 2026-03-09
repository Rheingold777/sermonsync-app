import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl font-serif text-navy">SermonSync</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#demo" className="text-navy hover:text-gold transition-colors hidden sm:block">
            How It Works
          </Link>
          <Link href="#pricing" className="text-navy hover:text-gold transition-colors hidden sm:block">
            Pricing
          </Link>
          <Link href="/login" className="text-navy hover:text-gold transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
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
          
          {/* Phone Mockup */}
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

        {/* Stats Section */}
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

        {/* How It Works Section */}
        <div id="demo" className="mt-24 scroll-mt-20">
          <h2 className="text-4xl font-serif text-navy text-center mb-4">How It Works</h2>
          <p className="text-navy/70 text-center mb-12 max-w-2xl mx-auto">
            Three simple steps. Zero weekly effort.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">1. Drop Your Notes</h3>
              <p className="text-navy/70">
                Upload your sermon notes, outline, or manuscript. We accept Word docs, PDFs, even handwritten notes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">2. Preview & Approve</h3>
              <p className="text-navy/70">
                SermonSync generates a personalized recap in your voice — in English and Spanish. Review and approve with one click.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">3. Your People Wake Up to It</h3>
              <p className="text-navy/70">
                Monday 9:30 AM, your congregation receives a text that brings Sunday&apos;s message into their week.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-24 scroll-mt-20">
          <h2 className="text-4xl font-serif text-navy text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-navy/70 text-center mb-12 max-w-2xl mx-auto">
            Start with a 90-day free trial. No credit card required. Cancel anytime.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="card">
              <h3 className="text-xl font-semibold text-navy mb-2">Starter</h3>
              <div className="text-4xl font-serif text-navy mb-1">$49<span className="text-lg">/mo</span></div>
              <p className="text-sm text-navy/50 mb-4">or $470/year (save 20%)</p>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Up to 100 contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English recaps</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> 4 sermons/month</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Email support</li>
              </ul>
              <Link href="/signup?plan=starter" className="btn-secondary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            {/* Growth - Featured */}
            <div className="card border-2 border-gold relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Growth</h3>
              <div className="text-4xl font-serif text-navy mb-1">$99<span className="text-lg">/mo</span></div>
              <p className="text-sm text-navy/50 mb-4">or $950/year (save 20%)</p>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Up to 500 contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English + Spanish</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> 8 sermons/month</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Priority support</li>
              </ul>
              <Link href="/signup?plan=growth" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            {/* Done-For-You */}
            <div className="card">
              <h3 className="text-xl font-semibold text-navy mb-2">Done-For-You</h3>
              <div className="text-4xl font-serif text-navy mb-1">$199<span className="text-lg">/mo</span></div>
              <p className="text-sm text-navy/50 mb-4">or $1,910/year (save 20%)</p>
              <ul className="space-y-3 text-navy/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Unlimited contacts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> English + Spanish</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Unlimited sermons</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Social media posts</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Dedicated support</li>
              </ul>
              <Link href="/contact" className="btn-secondary w-full text-center block">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Sponsorship Note */}
          <p className="text-center text-navy/60 mt-8 max-w-2xl mx-auto">
            🎁 <strong>Church planter or small congregation?</strong> Ask about our sponsorship program — 
            other churches can cover your subscription.
          </p>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-24 scroll-mt-20">
          <div className="card max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-navy mb-4">Questions? Let&apos;s Talk</h2>
            <p className="text-navy/70 mb-6">
              Built by a pastor who gets it. I&apos;d love to hear about your church and show you how SermonSync can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@sermonsync.church" className="btn-primary">
                📧 hello@sermonsync.church
              </a>
              <a href="tel:+15123619861" className="btn-secondary">
                📞 (512) 361-9861
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-cream py-12 mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-2xl font-serif hover:opacity-80 transition-opacity">SermonSync</Link>
              <p className="text-cream/70 mt-2 text-sm">
                Your sermon, in every pocket by Monday.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-cream/70 text-sm">
                <li><Link href="#demo" className="hover:text-gold">How It Works</Link></li>
                <li><Link href="#pricing" className="hover:text-gold">Pricing</Link></li>
                <li><Link href="/signup" className="hover:text-gold">Start Free Trial</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-cream/70 text-sm">
                <li><a href="mailto:hello@sermonsync.church" className="hover:text-gold">Contact Us</a></li>
                <li><Link href="/login" className="hover:text-gold">Sign In</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-cream/70 text-sm">
                <li><a href="mailto:hello@sermonsync.church" className="hover:text-gold">hello@sermonsync.church</a></li>
                <li><a href="tel:+15123619861" className="hover:text-gold">(512) 361-9861</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/70 text-sm">Built by a pastor, for pastors.</p>
            <p className="text-cream/50 text-sm">© 2026 SermonSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
