import Link from "next/link";
import { ArrowRight, MessageSquare, Clock, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-between items-center mb-16">
            <h1 className="font-serif text-2xl">SermonSync</h1>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </nav>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
                Your sermon, in every pocket by Monday morning
              </h2>
              <p className="text-xl text-cream/80 mb-8">
                Drop your notes. We craft a personal text recap. Your people wake up encouraged.
                <span className="block mt-2 text-gold">Zero effort after setup.</span>
              </p>
              <div className="flex gap-4">
                <Link href="/signup" className="btn-primary flex items-center gap-2">
                  Start Free Trial <ArrowRight size={20} />
                </Link>
                <Link href="#demo" className="btn-secondary bg-transparent border border-cream/30">
                  See Demo
                </Link>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="phone-mockup">
                <div className="phone-screen p-4 h-[500px]">
                  <div className="text-sm text-gray-500 mb-4">Messages</div>
                  <div className="space-y-3">
                    <div className="message-bubble ml-auto">
                      <p className="text-sm">Good morning! 🙏</p>
                    </div>
                    <div className="message-bubble ml-auto">
                      <p className="text-sm">
                        Yesterday Pastor John shared about the power of persistent prayer. 
                        Remember: God isn't distant—He's waiting to hear from you. 
                        This week, try setting aside just 5 minutes each morning. 
                        You might be surprised what happens.
                      </p>
                    </div>
                    <div className="message-bubble ml-auto">
                      <p className="text-sm">Have a blessed week! - New Life Church</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-4xl text-navy mb-2">85%</div>
            <div className="text-gray-600">of churches send zero sermon follow-up</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-navy mb-2">98%</div>
            <div className="text-gray-600">text message open rate</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-navy mb-2">0</div>
            <div className="text-gray-600">weekly effort required</div>
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-gold" size={32} />
              </div>
              <h3 className="font-serif text-xl mb-2">1. Drop Your Notes</h3>
              <p className="text-gray-600">Upload your sermon notes, outline, or manuscript. We accept any format.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-gold" size={32} />
              </div>
              <h3 className="font-serif text-xl mb-2">2. Preview & Approve</h3>
              <p className="text-gray-600">Review the AI-crafted recap in your voice. Edit if needed, then approve.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gold" size={32} />
              </div>
              <h3 className="font-serif text-xl mb-2">3. Monday Morning</h3>
              <p className="text-gray-600">Your congregation wakes up to a personal text. Every week, automatically.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-20 px-6 bg-navy text-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-cream/70 mb-12">Start with 90 days free. No credit card required.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-500 rounded-2xl p-8 border border-cream/10">
              <h3 className="font-serif text-2xl mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl">$49</span>
                <span className="text-cream/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Users size={18} className="text-gold" />
                  Up to 100 contacts
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-gold" />
                  English recaps
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-gold" />
                  4 sermons/month
                </li>
              </ul>
              <Link href="/signup?plan=starter" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-gold text-navy rounded-2xl p-8 transform scale-105">
              <div className="text-sm font-semibold mb-2">MOST POPULAR</div>
              <h3 className="font-serif text-2xl mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl">$99</span>
                <span className="text-navy/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Users size={18} />
                  Up to 500 contacts
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare size={18} />
                  English + Spanish
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} />
                  8 sermons/month
                </li>
              </ul>
              <Link href="/signup?plan=growth" className="btn-secondary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-navy-500 rounded-2xl p-8 border border-cream/10">
              <h3 className="font-serif text-2xl mb-2">Done-For-You</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl">$199</span>
                <span className="text-cream/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Users size={18} className="text-gold" />
                  Unlimited contacts
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-gold" />
                  EN + ES + Social
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-gold" />
                  Unlimited sermons
                </li>
              </ul>
              <Link href="/signup?plan=dfy" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-cream border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-serif text-xl text-navy mb-2">SermonSync</h1>
            <p className="text-gray-600 text-sm">Built by a pastor, for pastors.</p>
          </div>
          <div className="text-gray-600 text-sm">
            © 2026 SermonSync. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
