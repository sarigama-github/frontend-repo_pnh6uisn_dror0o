import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const couples = [
  { names: 'Lena & Marco', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop', quote: 'We met through TinderAI and now we’re engaged!' },
  { names: 'Ava & Noah', photo: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop', quote: 'Matched by vibes, not just swipes. Perfect.' },
  { names: 'Maya & Eli', photo: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1200&auto=format&fit=crop', quote: 'From first chat to forever. Thanks, TinderAI!' },
]

export default function SuccessStories() {
  const [open, setOpen] = useState(false)

  return (
    <section className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Success Stories</h2>
          <p className="mt-3 text-slate-700">Warm tones, soft gradients, and romantic vibes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {couples.map((c) => (
            <div key={c.names} className="bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/60 rounded-xl overflow-hidden shadow">
              <div className="h-64 overflow-hidden">
                <img src={c.photo} alt={c.names} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-900">{c.names}</p>
                <p className="text-sm text-slate-700">“{c.quote}”</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={()=>setOpen(true)} className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-5 py-2.5 font-semibold shadow hover:shadow-md transition">Submit Your Story</button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="max-w-lg w-full bg-white rounded-xl p-6 shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Share your experience</h3>
                  <button onClick={()=>setOpen(false)} className="text-slate-500 hover:text-slate-700">Close</button>
                </div>
                <form className="space-y-3">
                  <input placeholder="Your names" className="w-full rounded border-slate-300" />
                  <input placeholder="Photo URL" className="w-full rounded border-slate-300" />
                  <textarea placeholder="Your story" rows="4" className="w-full rounded border-slate-300" />
                  <button type="button" onClick={()=>setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-4 py-2 font-semibold">Submit</button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
