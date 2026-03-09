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
          
          {/* Phone Mockup - iPhone Style */}
          <div className="relative">
            <div className="bg-navy rounded-[3rem] p-2 shadow-2xl max-w-[300px] mx-auto relative">
              {/* Side buttons */}
              <div className="absolute -left-1 top-24 w-1 h-8 bg-navy rounded-l-lg"></div>
              <div className="absolute -left-1 top-36 w-1 h-12 bg-navy rounded-l-lg"></div>
              <div className="absolute -left-1 top-52 w-1 h-12 bg-navy rounded-l-lg"></div>
              <div className="absolute -right-1 top-32 w-1 h-16 bg-navy rounded-r-lg"></div>
              
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Dynamic Island / Notch */}
                <div className="bg-white pt-3 pb-2 px-6">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2">
                    <span className="font-medium">9:41</span>
                    <div className="w-24 h-7 bg-black rounded-full mx-auto"></div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.73v3.1c0 .4.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                    </div>
                  </div>
                </div>
                
                {/* Messages App Header */}
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <p className="text-xs text-blue-500 text-center">Messages</p>
                </div>
                
                {/* Message Content */}
                <div className="p-4 min-h-[420px] bg-white">
                  <div className="text-[10px] text-gray-400 text-center mb-3">Monday, 9:30 AM</div>
                  
                  {/* English Message Bubble */}
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 mb-3 max-w-[90%]">
                    <p className="text-xs text-navy font-semibold mb-1">New Life Church</p>
                    <p className="text-xs text-navy/80 leading-relaxed">
                      &quot;Yesterday&apos;s message reminded us that God&apos;s grace isn&apos;t just for our past mistakes — 
                      it&apos;s for our present struggles and future fears too. 🙏&quot;
                    </p>
                  </div>
                  
                  {/* Spanish Message Bubble */}
                  <div className="bg-gold/20 rounded-2xl rounded-tl-sm p-3 max-w-[90%]">
                    <p className="text-xs text-navy font-semibold mb-1">🇪🇸 En Español</p>
                    <p className="text-xs text-navy/80 leading-relaxed">
                      &quot;El mensaje de ayer nos recordó que la gracia de Dios no es solo para nuestros 
                      errores pasados — es para nuestras luchas presentes...&quot;
                    </p>
                  </div>
                  
                  {/* Delivered indicator */}
                  <p className="text-[9px] text-gray-400 text-right mt-2">Delivered</p>
                </div>
                
                {/* Home Indicator */}
                <div className="pb-2 pt-1">
                  <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto"></div>
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
