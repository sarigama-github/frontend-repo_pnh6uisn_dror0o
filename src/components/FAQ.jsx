import { useState } from 'react'
import { ChevronDown, Bot, Shield, Wand2, DollarSign } from 'lucide-react'

const categories = [
  { key: 'ai', label: 'Matching & AI', icon: Bot },
  { key: 'privacy', label: 'Privacy & Data', icon: Shield },
  { key: 'avatar', label: 'Avatar Customization', icon: Wand2 },
  { key: 'affiliate', label: 'Affiliate Program', icon: DollarSign },
]

const faqs = [
  { cat: 'ai', q: 'How does TinderAI generate matches?', a: 'We analyze visual cues and selected traits to compute a vibe vector, then match you with similar energies. No chat logs are used without consent.' },
  { cat: 'privacy', q: 'Is my data secure?', a: 'Yes. Photos are encrypted in transit and at rest. You control deletion at any time.' },
  { cat: 'avatar', q: 'Can I customize my AI avatar?', a: 'Absolutely. Tweak style, moods, and aesthetics. You can regenerate variants on demand.' },
  { cat: 'affiliate', q: 'How do I earn through the affiliate program?', a: 'Share your unique link and earn a percentage for every sign-up attributed to you.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const [activeCat, setActiveCat] = useState('ai')

  return (
    <section className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">FAQ</h2>
          <p className="mt-3 text-slate-700">Everything about matching, privacy, avatars, and affiliates.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map(({key,label,icon:Icon})=> (
            <button key={key} onClick={()=>setActiveCat(key)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${activeCat===key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-300'}`}>
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.filter(f=>f.cat===activeCat).map((f, i) => (
            <div key={f.q} className="p-4">
              <button onClick={()=>setOpen(open===i? -1: i)} className="w-full flex items-center justify-between text-left">
                <span className="font-medium text-slate-900">{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open===i ? 'rotate-180' : ''}`} />
              </button>
              {open===i && (
                <p className="mt-2 text-slate-700 text-sm">{f.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-5 py-2.5 font-semibold shadow hover:shadow-md transition">Still have questions? Contact us</a>
        </div>
      </div>
    </section>
  )
}
