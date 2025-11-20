import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AvatarCreator() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [thinking, setThinking] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!preview) return
    setThinking(true)
    const t1 = setTimeout(() => setExpanded(true), 2000)
    const t2 = setTimeout(() => setThinking(false), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [preview])

  const onUpload = (e) => {
    const f = e.target.files?.[0]
    if (f) {
      setFile(f)
      setPreview(URL.createObjectURL(f))
      setExpanded(false)
    }
  }

  return (
    <section className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Build your AI Avatar</h2>
            <p className="mt-4 text-slate-700">TinderAI learns your vibe and builds your perfect match.</p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="sr-only">Upload a photo</span>
                <input type="file" accept="image/*" onChange={onUpload} className="block w-full text-sm text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100" />
              </label>

              <div className="grid grid-cols-2 gap-3">
                {['Creative','Intellectual','Playful','Adventurous','Calm','Ambitious'].map((t) => (
                  <label key={t} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-slate-300" />
                    {t}
                  </label>
                ))}
              </div>

              <select className="mt-2 w-full rounded border-slate-300 text-sm">
                <option>Looking for deep conversations</option>
                <option>Casual dates and fun</option>
                <option>Long-term partner</option>
              </select>

              <Link to="/stories" className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-5 py-2.5 font-semibold shadow hover:shadow-md transition">
                See Matches
              </Link>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ width: '25%' }}
              animate={{ width: expanded ? '75%' : '25%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="mx-auto aspect-square rounded-xl overflow-hidden border border-black shadow-sm bg-white flex items-center justify-center"
            >
              {preview ? (
                <img src={preview} alt="Avatar preview" className="w-full h-full object-cover" />
              ) : (
                <div className="p-6 text-center">
                  <p className="text-slate-600">Upload a photo to preview your AI avatar</p>
                </div>
              )}
            </motion.div>

            {thinking && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0,1,0], scale: [0.9,1.05,1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="inline-flex items-center gap-2 text-rose-600 bg-white/80 rounded-full px-3 py-1 border border-rose-200"
                >
                  <Sparkles className="w-4 h-4" />
                  Thinking...
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
