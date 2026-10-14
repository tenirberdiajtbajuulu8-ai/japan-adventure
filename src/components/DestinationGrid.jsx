import DestinationCard from './DestinationCard.jsx'

export default function DestinationGrid({ title, subtitle, items, bg = 'bg-white' }) {
  return (
    <section className={`${bg} py-20 px-6 sm:px-16`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-4 text-slate-500">{subtitle}</p>}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
