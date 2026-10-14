import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white/60 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="text-red-500">●</span> Nihon Adventures
          </p>
          <p className="mt-3 leading-relaxed">
            Nature, cities and culture of Japan — from snowy Hokkaido to tropical Okinawa.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Explore</p>
          <ul className="space-y-2">
            <li><Link className="hover:text-white" to="/nature">Nature</Link></li>
            <li><Link className="hover:text-white" to="/cities">Cities</Link></li>
            <li><Link className="hover:text-white" to="/culture">Culture</Link></li>
            <li><Link className="hover:text-white" to="/tours">Tours</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Your trip</p>
          <ul className="space-y-2">
            <li><Link className="hover:text-white" to="/favorites">Saved places</Link></li>
            <li><Link className="hover:text-white" to="/tours#booking">Book a tour</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Nihon Adventures. Demo website.
      </div>
    </footer>
  )
}
