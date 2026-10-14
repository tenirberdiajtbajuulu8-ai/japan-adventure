import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import { useApp } from '../context/AppContext.jsx'
import { ALL_DESTINATIONS } from '../data/destinations.js'

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useApp()
  const items = ALL_DESTINATIONS.filter((d) => favorites.includes(d.id))

  return (
    <>
      <PageBanner
        emoji="❤️"
        title="Saved Places"
        subtitle="Your personal Japan wish list."
      />

      <section className="bg-slate-100 py-20 px-6 sm:px-16 min-h-[40vh]">
        <div className="max-w-6xl mx-auto">
          {items.length === 0 ? (
            <div className="text-center">
              <p className="text-6xl">🗾</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">Nothing saved yet</h2>
              <p className="mt-2 text-slate-500">
                Tap “Save to favorites” on any place and it will appear here.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link to="/nature" className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition">Nature</Link>
                <Link to="/cities" className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition">Cities</Link>
                <Link to="/culture" className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition">Culture</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-600">
                  <strong>{items.length}</strong> saved {items.length === 1 ? 'place' : 'places'}
                </p>
                <button
                  onClick={clearFavorites}
                  className="text-sm text-red-500 hover:underline"
                >
                  Clear all
                </button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <DestinationCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
