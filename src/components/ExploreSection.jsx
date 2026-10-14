import { Link } from 'react-router-dom'

const CATEGORIES = [
  {
    to: '/nature',
    title: 'Nature',
    text: 'Fuji, alpine valleys, ancient forests and cherry blossoms.',
    emoji: '🗻',
    gradient: 'from-sky-400 to-indigo-700',
  },
  {
    to: '/cities',
    title: 'Cities',
    text: 'Tokyo, Kyoto, Osaka, Hiroshima and more.',
    emoji: '🏙️',
    gradient: 'from-rose-400 to-purple-700',
  },
  {
    to: '/culture',
    title: 'Culture',
    text: 'Tea, festivals, onsen, kabuki, food and anime.',
    emoji: '🎎',
    gradient: 'from-red-400 to-amber-600',
  },
]

export default function ExploreSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-slate-900">Explore</h2>
        <p className="mt-4 text-slate-500">Pick what you love — nature, cities or culture.</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 text-left">
          {CATEGORIES.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white border border-slate-200"
            >
              <div
                className={`h-44 bg-gradient-to-br ${c.gradient} flex items-center justify-center text-7xl group-hover:scale-105 transition-transform`}
              >
                {c.emoji}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{c.text}</p>
                <span className="mt-3 inline-block text-sm font-medium text-red-500">
                  See places &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
