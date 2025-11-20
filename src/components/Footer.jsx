import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-extrabold text-xl"><span className="text-rose-600">Tinder</span><span className="text-slate-900">AI</span></p>
            <p className="mt-2 text-slate-600">A modern, AI-curated dating experience.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-2">Company</p>
            <ul className="space-y-1 text-slate-600">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-2">Explore</p>
            <ul className="space-y-1 text-slate-600">
              <li><a href="/create">AI Avatar</a></li>
              <li><a href="/stories">Success Stories</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-2">Follow</p>
            <div className="flex gap-3 text-slate-600">
              <a aria-label="Twitter" href="#"><Twitter className="w-5 h-5" /></a>
              <a aria-label="Instagram" href="#"><Instagram className="w-5 h-5" /></a>
              <a aria-label="Facebook" href="#"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-6">© {new Date().getFullYear()} TinderAI. All rights reserved.</p>
      </div>
    </footer>
  )
}
