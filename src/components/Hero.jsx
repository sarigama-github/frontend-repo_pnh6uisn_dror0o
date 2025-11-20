import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const profiles = [
  { name: 'Sofia', age: 25, location: 'San Francisco', bio: 'Coffee-fueled designer. Street photography on weekends.', tags: ['Creative','Dreamy','Curious'], img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Austin', age: 27, location: 'New York', bio: 'Runner, product nerd, ramen seeker.', tags: ['Active','Analytical','Kind'], img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Maria', age: 24, location: 'Lisbon', bio: 'Illustrator who loves indie films and pastel de nata.', tags: ['Artistic','Warm','Vivid'], img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Jessica', age: 26, location: 'Austin', bio: 'Live music, sunset hikes, board game nights.', tags: ['Social','Playful','Optimist'], img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ruby', age: 23, location: 'London', bio: 'Poetry, bookstores, rainy day cafes.', tags: ['Intellectual','Calm','Dreamy'], img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
]

function Tag({ children }) {
  return <span className="text-[11px] tracking-wide px-2 py-0.5 border border-black rounded-full bg-white/80">{children}</span>
}

function Card({ p, index, active }) {
  return (
    <motion.div
      className="bg-white border border-black rounded-xl shadow-sm overflow-hidden w-[280px] sm:w-[320px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, scale: active ? 1.03 : 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <div className="h-64 w-full overflow-hidden">
        <img src={p.img} alt={`${p.name}`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-slate-900">{p.name}, {p.age}</p>
          <p className="text-xs text-slate-600">{p.location}</p>
        </div>
        <p className="text-sm text-slate-700">{p.bio}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 })
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e) => {
      if (window.innerWidth < 768) {
        y.set(y.get() + e.deltaY)
      }
    }
    el.addEventListener('wheel', onWheel, { passive: true })
    return () => el.removeEventListener('wheel', onWheel)
  }, [y])

  return (
    <section className="relative pt-24 pb-24">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Meet your AI-curated vibe
          </h1>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Swipe through smart, aesthetic profiles tuned to your energy. Crafted by TinderAI.
          </p>
        </div>

        {/* Desktop: central carousel with side cards */}
        <div className="hidden md:grid grid-cols-12 items-center gap-6">
          <div className="col-span-4 flex justify-end gap-4">
            {profiles.slice(1,3).map((p,i)=> (
              <motion.div key={p.name} animate={{ x: i % 2 === 0 ? -10 : -20 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4 }}>
                <Card p={p} index={i} active={false} />
              </motion.div>
            ))}
          </div>

          <div className="col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 15, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Card p={profiles[0]} index={0} active={true} />
            </motion.div>
          </div>

          <div className="col-span-4 flex gap-4">
            {profiles.slice(3,5).map((p,i)=> (
              <motion.div key={p.name} animate={{ x: i % 2 === 0 ? 10 : 20 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4 }}>
                <Card p={p} index={i} active={false} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with alternating slide directions */}
        <div ref={containerRef} className="md:hidden relative">
          <motion.div style={{ y: ySpring }} className="flex flex-col items-center gap-6">
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                className="w-full flex justify-center"
                animate={{ y: [0, (i % 2 === 0 ? -8 : 8), 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="scale-100">
                  <Card p={p} index={i} active={i === activeIndex} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link to="/create" className="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all">
            Create Your AI Match
          </Link>
        </div>
      </div>

      {/* Gradient overlay that doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80"></div>
    </section>
  )
}
