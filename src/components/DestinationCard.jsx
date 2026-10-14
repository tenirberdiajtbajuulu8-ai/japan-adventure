import { useApp } from '../context/AppContext.jsx'

export default function DestinationCard({ item }) {
  const { isFavorite, toggleFavorite } = useApp()
  const saved = isFavorite(item.id)

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col border border-slate-200">
      {item.image ? (
        <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
      ) : (
        <div
          className={`h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-7xl`}
        >
          {item.emoji}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
        <p className="text-xs font-semibold text-red-500 mt-0.5">{item.region}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{item.description}</p>
        <p className="mt-3 text-xs text-slate-500">
          <strong className="text-slate-800">Best time:</strong> {item.season}
        </p>

        <button
          onClick={() => toggleFavorite(item.id)}
          aria-pressed={saved}
          className={`mt-4 w-full py-2 rounded text-sm font-medium transition ${
            saved
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
          }`}
        >
          {saved ? '❤️ Saved' : '🤍 Save to favorites'}
        </button>
      </div>
    </article>
  )
}
