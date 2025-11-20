import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'How It Works', to: '/#how' },
  { label: 'AI Avatar', to: '/create' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Affiliate Earnings', to: '/#affiliate' },
  { label: 'Dashboard', to: '/#dashboard' },
  { label: 'Admin', to: '/#admin' },
  { label: 'Users', to: '/#users' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight">
          <span className="text-rose-600">Tinder</span><span className="text-slate-900">AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {navItems.map((item) => (
            item.to.startsWith('/#') ? (
              <a key={item.label} href={item.to} className="hover:text-slate-900 transition-colors">{item.label}</a>
            ) : (
              <NavLink key={item.label} to={item.to} className={({isActive})=>`hover:text-slate-900 transition-colors ${isActive ? 'text-slate-900' : ''}`}>{item.label}</NavLink>
            )
          ))}
          <NavLink to="/faq" className={({isActive})=>`hover:text-slate-900 transition-colors ${isActive ? 'text-slate-900' : ''}`}>FAQ</NavLink>
        </nav>

        <button className="md:hidden p-2 rounded border border-slate-300" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              item.to.startsWith('/#') ? (
                <a key={item.label} href={item.to} className="py-1" onClick={()=>setOpen(false)}>{item.label}</a>
              ) : (
                <NavLink key={item.label} to={item.to} className="py-1" onClick={()=>setOpen(false)}>{item.label}</NavLink>
              )
            ))}
            <NavLink to="/faq" className="py-1" onClick={()=>setOpen(false)}>FAQ</NavLink>
            <Link to="/create" className="mt-2 inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-4 py-2 font-medium" onClick={()=>setOpen(false)}>Create Your AI Match</Link>
          </div>
        </div>
      )}
    </header>
  )
}
