import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/nature', label: 'Nature' },
  { to: '/cities', label: 'Cities' },
  { to: '/culture', label: 'Culture' },
  { to: '/tours', label: 'Tours' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { favorites } = useApp()

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm rounded transition ${
      isActive ? 'text-white bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-semibold text-lg flex items-center gap-2"
        >
          <span className="text-red-500">●</span> Nihon Adventures
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/favorites"
            className="ml-3 bg-red-500 hover:bg-red-600 transition text-white text-sm px-4 py-2 rounded"
          >
            ❤️ Saved ({favorites.length})
          </NavLink>
        </div>

        <button
          className="md:hidden text-2xl leading-none px-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/favorites"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            ❤️ Saved ({favorites.length})
          </NavLink>
        </div>
      )}
    </header>
  )
}
